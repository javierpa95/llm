#!/usr/bin/env python3
"""Search PubMed for recent LLM/AI in health articles and fetch details."""
import json
import urllib.request
import urllib.parse
import sys
import time

BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"

def esearch(term, retmax=20):
    params = urllib.parse.urlencode({
        "db": "pubmed",
        "term": term,
        "retmax": retmax,
        "retmode": "json",
    })
    url = f"{BASE}/esearch.fcgi?{params}"
    for attempt in range(3):
        try:
            with urllib.request.urlopen(url, timeout=15) as resp:
                data = json.loads(resp.read())
                ids = data.get("esearchresult", {}).get("idlist", [])
                print(f"  Search: {term[:60]}... -> {len(ids)} results", file=sys.stderr)
                return ids
        except Exception as e:
            print(f"  Attempt {attempt+1} failed: {e}", file=sys.stderr)
            time.sleep(1)
    return []

def efetch_summaries(pmids):
    if not pmids:
        return []
    params = urllib.parse.urlencode({
        "db": "pubmed",
        "id": ",".join(pmids),
        "retmode": "json",
    })
    url = f"{BASE}/esummary.fcgi?{params}"
    for attempt in range(3):
        try:
            with urllib.request.urlopen(url, timeout=20) as resp:
                data = json.loads(resp.read())
                results = []
                for pmid in pmids:
                    if pmid in data.get("result", {}):
                        item = data["result"][pmid]
                        if "title" in item:
                            doi = ""
                            for aid in item.get("articleids", []):
                                if aid.get("idtype") == "doi":
                                    doi = aid.get("value", "")
                            results.append({
                                "pmid": pmid,
                                "title": item.get("title", ""),
                                "authors": ", ".join(a.get("name", "") for a in item.get("authors", [])[:5]),
                                "author_count": len(item.get("authors", [])),
                                "journal": item.get("fulljournalname", item.get("source", "")),
                                "date": item.get("sortpubdate", item.get("pubdate", "")),
                                "doi": doi,
                            })
                return results
        except Exception as e:
            print(f"  EFetch attempt {attempt+1} failed: {e}", file=sys.stderr)
            time.sleep(1)
    return []

def efetch_abstract(pmid):
    """Fetch full abstract via efetch XML and extract text."""
    params = urllib.parse.urlencode({
        "db": "pubmed",
        "id": pmid,
        "retmode": "xml",
    })
    url = f"{BASE}/efetch.fcgi?{params}"
    for attempt in range(3):
        try:
            with urllib.request.urlopen(url, timeout=20) as resp:
                xml = resp.read().decode("utf-8", errors="replace")
                # Simple XML parsing for abstract
                import re
                # Extract abstract sections
                abstracts = re.findall(r'<AbstractText[^>]*>(.*?)</AbstractText>', xml, re.DOTALL)
                # Clean HTML tags
                clean = []
                for a in abstracts:
                    a = re.sub(r'<[^>]+>', '', a)
                    a = a.strip()
                    if a:
                        clean.append(a)
                return " ".join(clean)
        except Exception as e:
            print(f"  Abstract fetch attempt {attempt+1} for {pmid}: {e}", file=sys.stderr)
            time.sleep(1)
    return ""

# Search queries
queries = [
    "large language model clinical medicine 2026[pdat]",
    "generative artificial intelligence healthcare 2026[pdat]",
    "ChatGPT OR GPT-4 OR Claude medical 2026[pdat]",
    "AI clinical decision support 2026[pdat]",
    "retrieval augmented generation medical 2026[pdat]",
    "AI agents clinical 2026[pdat]",
]

all_pmids = set()
for q in queries:
    ids = esearch(q, retmax=15)
    all_pmids.update(ids)
    time.sleep(0.4)

print(f"\nTotal unique PMIDs found: {len(all_pmids)}", file=sys.stderr)

# Get summaries for top 30 most recent
pmid_list = sorted(all_pmids, key=int, reverse=True)[:30]
summaries = efetch_summaries(pmid_list)

print(f"Got summaries for {len(summaries)} articles", file=sys.stderr)

# Fetch abstracts for top candidates
for s in summaries[:15]:
    time.sleep(0.4)
    abstract = efetch_abstract(s["pmid"])
    s["abstract"] = abstract
    # Truncate for display
    print(json.dumps({
        "pmid": s["pmid"],
        "title": s["title"],
        "authors": s["authors"],
        "author_count": s["author_count"],
        "journal": s["journal"],
        "date": s["date"],
        "doi": s["doi"],
        "abstract_preview": abstract[:500] if abstract else ""
    }, ensure_ascii=False))
