"""
Generate Markdown copies of every public page for agent content negotiation.

.htaccess serves md/<page>.markdown instead of <page>.html when a request's
Accept header asks for text/markdown. The .markdown extension (not .md) is
deliberate: .htaccess denies *.md site-wide to keep internal docs private.

Run from the repo root after editing any page, then commit the md/ output:
    python execution/build_markdown.py

Requires: pip install markdownify beautifulsoup4
"""

import re
import sys
from pathlib import Path
from urllib.parse import urljoin

from bs4 import BeautifulSoup
from markdownify import markdownify

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "md"
SITE = "https://websynthiq.com/"

PAGES = [
    "index",
    "website-design",
    "ai-receptionist",
    "google-reviews",
    "meta-ads",
    "privacy-policy",
    "terms-and-conditions",
]

# Elements that carry no meaning for a text reader.
DROP_TAGS = ["script", "style", "noscript", "svg", "button", "form", "iframe", "template"]


def absolutize(soup, base):
    """Rewrite relative href/src to absolute, extensionless URLs."""
    for tag in soup.find_all(href=True):
        href = tag["href"]
        if href.startswith(("mailto:", "tel:", "http")):
            continue
        if href.startswith("#"):
            tag["href"] = base.split("#")[0] + href
            continue
        tag["href"] = re.sub(r"(index)?\.html(?=$|[#?])", "", urljoin(base, href))
    for tag in soup.find_all(src=True):
        tag["src"] = urljoin(base, tag["src"])


def convert(page):
    html = (ROOT / f"{page}.html").read_text(encoding="utf-8")
    soup = BeautifulSoup(html, "html.parser")

    title = soup.title.get_text(strip=True) if soup.title else page
    desc_tag = soup.find("meta", attrs={"name": "description"})
    desc = desc_tag["content"].strip() if desc_tag else ""
    canon_tag = soup.find("link", rel="canonical")
    url = canon_tag["href"] if canon_tag else urljoin(SITE, "" if page == "index" else page)

    main = soup.find("main") or soup.body
    footer = soup.find("footer")
    parts = [main] + ([footer] if footer else [])

    body_md = []
    for part in parts:
        for tag in part.find_all(DROP_TAGS):
            tag.decompose()
        for tag in part.find_all(attrs={"aria-hidden": "true"}):
            tag.decompose()
        absolutize(part, url)
        body_md.append(markdownify(str(part), heading_style="ATX", bullets="-", strip=["img"]))

    md = "\n\n".join(body_md)
    md = re.sub(r"[ \t]+\n", "\n", md)       # trailing spaces
    md = re.sub(r"\n{3,}", "\n\n", md)       # collapse blank runs
    md = re.sub(r"^[ \t]+", "", md, flags=re.M)
    md = re.sub(r"\? \+$", "?", md, flags=re.M)  # FAQ accordion toggles
    md = re.sub(r"^Scroll\n\n", "", md, flags=re.M)  # hero scroll cue

    header = f"# {title}\n\n> {desc}\n\nCanonical: {url}\n\n---\n\n" if desc else f"# {title}\n\nCanonical: {url}\n\n---\n\n"
    return header + md.strip() + "\n"


def main():
    OUT_DIR.mkdir(exist_ok=True)
    for page in PAGES:
        md = convert(page)
        (OUT_DIR / f"{page}.markdown").write_text(md, encoding="utf-8", newline="\n")
        html_size = (ROOT / f"{page}.html").stat().st_size
        print(f"{page:22} {html_size:>7} B html -> {len(md.encode()):>6} B md")


if __name__ == "__main__":
    sys.exit(main())
