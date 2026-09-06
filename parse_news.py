#!/usr/bin/env python3
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta
import json

results = []

def parse_rss(filepath, source_name):
    try:
        tree = ET.parse(filepath)
        root = tree.getroot()
        for item in root.findall('.//item')[:15]:
            title = item.find('title')
            link = item.find('link')
            pubdate = item.find('pubDate')
            desc = item.find('description')
            title_text = title.text if title is not None and title.text else ''
            link_text = link.text if link is not None and link.text else ''
            date_text = pubdate.text if pubdate is not None and pubdate.text else ''
            desc_text = desc.text if desc is not None and desc.text else ''
            if len(desc_text) > 300:
                desc_text = desc_text[:300] + '...'
            results.append({
                'source': source_name,
                'title': title_text,
                'link': link_text,
                'date': date_text,
                'desc': desc_text
            })
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")

def parse_atom(filepath, source_name):
    try:
        tree = ET.parse(filepath)
        root = tree.getroot()
        ns = {'atom': 'http://www.w3.org/2005/Atom'}
        for entry in root.findall('atom:entry', ns)[:15]:
            title = entry.find('atom:title', ns)
            link_el = entry.find('atom:link', ns)
            updated = entry.find('atom:updated', ns)
            summary = entry.find('atom:summary', ns)
            title_text = title.text if title is not None and title.text else ''
            link_text = link_el.get('href', '') if link_el is not None else ''
            date_text = updated.text if updated is not None and updated.text else ''
            desc_text = summary.text if summary is not None and summary.text else ''
            if len(desc_text) > 300:
                desc_text = desc_text[:300] + '...'
            results.append({
                'source': source_name,
                'title': title_text,
                'link': link_text,
                'date': date_text,
                'desc': desc_text
            })
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")

parse_rss('/tmp/news_feeds/techcrunch.xml', 'TechCrunch')
parse_rss('/tmp/news_feeds/thedecoder.xml', 'The Decoder')
parse_rss('/tmp/news_feeds/venturebeat.xml', 'VentureBeat')
parse_atom('/tmp/news_feeds/simonwillison.xml', 'Simon Willison')
parse_atom('/tmp/news_feeds/huggingface.xml', 'Hugging Face')
parse_rss('/tmp/news_feeds/anthropic.xml', 'Anthropic')
parse_rss('/tmp/news_feeds/openai.xml', 'OpenAI')

print(f"Total articles found: {len(results)}")
print("---")
for r in results:
    print(f"[{r['source']}] {r['date']}")
    print(f"  Title: {r['title']}")
    print(f"  Link: {r['link']}")
    print(f"  Desc: {r['desc'][:200]}")
    print()
