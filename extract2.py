#!/usr/bin/env python3
"""Extract article text from HTML files."""
import re
import html

def extract_text(filepath, max_chars=5000):
    with open(filepath, 'r', errors='ignore') as f:
        content = f.read()
    content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL)
    paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)
    text_parts = []
    total = 0
    for p in paragraphs:
        clean = re.sub(r'<[^>]+>', '', p)
        clean = html.unescape(clean).strip()
        if len(clean) > 30 and total < max_chars:
            text_parts.append(clean)
            total += len(clean)
    return '\n\n'.join(text_parts)

print("=" * 80)
print("TECHCRUNCH - Nvidia buys Hugging Face")
print("=" * 80)
print(extract_text('/tmp/news_feeds/nv_hf.html', 4000))
print()
print("=" * 80)
print("THE DECODER - Nvidia buys HF")
print("=" * 80)
print(extract_text('/tmp/news_feeds/nv_hf_dc.html', 4000))
