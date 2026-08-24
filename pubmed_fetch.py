#!/usr/bin/env python3
"""Fetch full abstracts for selected PMIDs."""
import json
import urllib.request
import urllib.parse
import sys
import time
import re

BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"

# Most relevant PMIDs from initial search
target_pmids = [
    "42632527",  # LLMs for thyroid ultrasound classification
    "42632419",  # LLMs for antimicrobial stewardship adversarial evaluation
    "42631898",  # Local LLMs for trauma/PTSD
    "42631692",  # LLMs for druggable genome
    "42632049",  # Generative AI for dyslexia
]

def efetch_xml(pmid):
    params = urllib.parse.urlencode({
        "db": "pubmed",
        "id": pmid,
        "retmode": "xml",
    })
    url = f"{BASE}/efetch.fcgi?{params}"
    for attempt in range(3):
        try:
            with urllib.request.urlopen(url, timeout=20) as resp:
                return resp.read().decode("utf-8", errors="replace")
        except Exception as e:
            print(f"  Attempt {attempt+1} for {pmid}: {e}", file=sys.stderr)
            time.sleep(1)
    return ""

for pmid in target_pmids:
    time.sleep(0.5)
    xml = efetch_xml(pmid)
    if not xml:
        print(f"FAILED: {pmid}", file=sys.stderr)
        continue
    
    # Extract title
    title_m = re.search(r'<ArticleTitle>(.*?)</ArticleTitle>', xml, re.DOTALL)
    title = re.sub(r'<[^>]+>', '', title_m.group(1)).strip() if title_m else "?"
    
    # Extract abstract sections
    abstracts = re.findall(r'<AbstractText[^>]*Label="([^"]*)"[^>]*>(.*?)</AbstractText>', xml, re.DOTALL)
    if not abstracts:
        abstracts = re.findall(r'<AbstractText[^>]*>(.*?)</AbstractText>', xml, re.DOTALL)
        abstracts = [("Background", a) for a in abstracts]
    
    abstract_parts = []
    for label, text in abstracts:
        text = re.sub(r'<[^>]+>', '', text).strip()
        if text:
            if label:
                abstract_parts.append(f"**{label}:** {text}")
            else:
                abstract_parts.append(text)
    abstract = "\n\n".join(abstract_parts)
    
    # Extract authors
    authors = re.findall(r'<Author[^>]*>.*?<LastName>(.*?)</LastName>.*?<ForeName>(.*?)</ForeName>', xml, re.DOTALL)
    author_str = ", ".join(f"{fn} {ln}" for ln, fn in authors[:6])
    if len(authors) > 6:
        author_str += f" et al. ({len(authors)} autores)"
    
    # Extract journal
    journal_m = re.search(r'<Title>(.*?)</Title>', xml)
    journal = journal_m.group(1) if journal_m else "?"
    
    # Extract date
    date_m = re.search(r'<PubDate>.*?<Year>(.*?)</Year>.*?<Month>(.*?)</Month>.*?<Day>(.*?)</Day>', xml, re.DOTALL)
    if date_m:
        date_str = f"{date_m.group(1)}/{date_m.group(2)}/{date_m.group(3)}"
    else:
        date_m2 = re.search(r'<PubDate>.*?<Year>(.*?)</Year>.*?<Month>(.*?)</Month>', xml, re.DOTALL)
        date_str = f"{date_m2.group(1)}/{date_m2.group(2)}" if date_m2 else "?"
    
    # Extract DOI
    doi = ""
    doi_m = re.search(r'<ArticleId IdType="doi">(.*?)</ArticleId>', xml)
    if doi_m:
        doi = doi_m.group(1)
    
    print(f"\n{'='*80}")
    print(f"PMID: {pmid}")
    print(f"TITLE: {title}")
    print(f"AUTHORS: {author_str}")
    print(f"JOURNAL: {journal}")
    print(f"DATE: {date_str}")
    print(f"DOI: {doi}")
    print(f"ABSTRACT:\n{abstract[:2000]}")
    print(f"{'='*80}")
