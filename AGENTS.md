# AGENTS.md — WEBsynthiq

## Overview
Static marketing website for **WEBsynthiq** (Elevate Media Agency LLC), a Sacramento digital marketing agency for local service businesses (`https://websynthiq.com`).

## Architecture & Build
- **Stack**: Static HTML5, vanilla CSS (`css/styles.css`), vanilla JS (`js/main.js`), and Apache/LiteSpeed `.htaccess` routing.
- **Canonical URLs**: Extensionless (`/`, `/website-design`, `/ai-receptionist`, `/google-reviews`, `/meta-ads`, `/privacy-policy`, `/terms-and-conditions`).
- **Markdown Negotiation**: Requests with `Accept: text/markdown` are served from `md/<page>.markdown`. After editing any `.html` file, regenerate Markdown copies:
  ```bash
  python execution/build_markdown.py
  ```
- **Agent Discovery**: Summary available at `/llms.txt`.

