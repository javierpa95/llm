#!/usr/bin/env python3
"""Search for more targeted articles."""
import json
import urllib.request
import urllib.parse
import sys
import time
import re

BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"

def esearch(term, retmax=10):
    params = urllib.parse.urlencode({"db": "pubmed", "term": term, "retmax": retmax, "retmode": "json"})
    url = f"{BASE}/esearch.fcgi?{params}"
    try:
        with urllib.request.urlopen(url, timeout=15) as resp:
            data = json.loads(resp.read())
            return data.get("esearchresult", {}).get("idlist", [])
    except Exception as e:
        print(f"  Error: {e}", file=sys.stderr)
        return []

def efetch_xml(pmid):
    params = urllib.parse.urlencode({"db": "pubmed", "id": pmid, "retmode": "xml"})
    url = f"{BASE}/efetch.fcgi?{params}"
    try:
        with urllib.request.urlopen(url, timeout=20) as resp:
            return resp.read().decode("utf-8", errors="replace")
    except Exception as e:
        print(f"  Error: {e}", file=sys.stderr)
        return ""

def parse_article(xml):
    title_m = re.search(r'<ArticleTitle>(.*?)</ArticleTitle>', xml, re.DOTALL)
    title = re.sub(r'<[^>]+>', '', title_m.group(1)).strip() if title_m else "?"
    abstracts = re.findall(r'<AbstractText[^>]*Label="([^"]*)"[^>]*>(.*?)</AbstractText>', xml, re.DOTALL)
    if not abstracts:
        abstracts = re.findall(r'<AbstractText[^>]*>(.*?)</AbstractText>', xml, re.DOTALL)
        abstracts = [("", a) for a in abstracts]
    abstract = "\n".join(re.sub(r'<[^>]+>', '', t).strip() for _, t in abstracts if t.strip())
    authors = re.findall(r'<LastName>(.*?)</LastName>.*?<ForeName>(.*?)</ForeName>', xml, re.DOTALL)
    author_str = ", ".join(f"{fn} {ln}" for ln, fn in authors[:5])
    if len(authors) > 5: author_str += f" et al. ({len(authors)})"
    journal_m = re.search(r'<Title>(.*?)</Title>', xml)
    journal = journal_m.group(1) if journal_m else "?"
    doi_m = re.search(r'<ArticleId IdType="doi">(.*?)</ArticleId>', xml)
    doi = doi_m.group(1) if doi_m else ""
    date_m = re.search(r'<PubDate>.*?<Year>(.*?)</Year>.*?<Month>(.*?)</Month>', xml, re.DOTALL)
    date = f"{date_m.group(1)}/{date_m.group(2)}" if date_m else "?"
    pmid_m = re.search(r'<PMID[^>]*>(.*?)</PMID>', xml)
    pmid = pmid_m.group(1) if pmid_m else "?"
    return {"pmid": pmid, "title": title, "authors": author_str, "journal": journal, "date": date, "doi": doi, "abstract": abstract[:1500]}

# Additional targeted searches
queries = [
    "LLM clinical reasoning diagnostic 2026[pdat]",
    "ChatGPT medical education 2026[pdat]",
    "AI radiology imaging diagnosis 2026[pdat]",
    "AI pharmacology drug interaction 2026[pdat]",
    "LLM mental health psychology 2026[pdat]",
]

seen = {"42632527", "42632419", "42631898", "42631692", "42632049"}  # Already covered

for q in queries:
    ids = esearch(q, 10)
    new_ids = [i for i in ids if i not in seen]
    if new_ids:
        print(f"\nQuery: {q[:60]} -> new: {new_ids}", file=sys.stderr)
        for pmid in new_ids[:2]:
            time.sleep(0.5)
            xml = efetch_xml(pmid)
            if xml:
                art = parse_article(xml)
                if art["title"] != "?":
                    print(json.dumps(art, ensure_ascii=False))
                    seen.add(pmid)
    time.sleep(0.3)
