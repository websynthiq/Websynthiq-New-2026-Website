# Growth Audit Modal — Design Spec

Status: **Approved design, ready for implementation** · 2026-09-24

## 1. Understanding Summary

- **What:** A pop-up modal with a Growth Audit request form, styled in the Void Gallery design system, shared across the 5 marketing pages (index, website-design, ai-receptionist, google-reviews, meta-ads).
- **Triggers:** Every "Book a Free Growth Audit" CTA — header, hero, footer link, mobile sticky bar — plus a new primary button in the final `#book` section.
- **Fields:** Owner name, Business name, Phone, Email (required) · Website, Address (optional, plain text).
- **Delivery:** JSON POST directly to a GoHighLevel Inbound Webhook; the GHL workflow creates the contact and sends the report email.
- **Success message:** "Thank you for your growth audit submission. You will receive an email with the report within 24 hours."
- **Why:** Capture CTA intent as a lead without leaving the page (today CTAs only lead to call/email).
- **Non-goals:** Address autocomplete, SMS consent / automated texting, report generation, PHP backend, legal pages.

## 2. Assumptions

1. Required: name, business, phone, email. Optional: website, address.
2. Validation: native constraints + light JS (10-digit US phone, email format, website normalized to `https://`).
3. Spam: honeypot field + minimum 3s time-to-fill. No CAPTCHA. Webhook URL is public (acceptable; worst case = junk contacts).
4. Metadata sent: page path, CTA id, UTM params (session-persisted), ISO timestamp.
5. Vanilla JS, no dependencies; modal injected by `js/main.js`; CTAs keep `href="#book"` as no-JS fallback.
6. Accessibility: native `<dialog>`, focus trap, Esc, focus return, reduced-motion respected.
7. Traffic: small-agency scale, within GHL limits.

## 3. Decision Log

| # | Decision | Alternatives considered | Why |
|---|----------|------------------------|-----|
| D1 | Submissions go to GoHighLevel | n8n, email-only (PHP/Formspree), Google Sheet | GHL already in use (chat widget); workflow can send the report email |
| D2 | No address autocomplete (for now) | Google Places, Geoapify, Photon | User deferred; browser autofill (`street-address`) covers most of the value; can be added later without UI change |
| D3 | GHL Inbound Webhook with custom form | Embedded GHL iframe form; placeholder endpoint | Pixel-matched design and exact success copy; webhook URL provided |
| D4 | Add required Email field | Reword message to promise a call; keep as-is | Success copy promises an emailed report — email is required to fulfil it |
| D5 | No SMS consent checkbox; privacy link only | Optional TCPA/A2P consent checkbox | User confirmed email-only follow-up, no automated SMS |
| D6 | All audit CTAs open the modal; final section = modal button + Call (email button removed) | Keep email button; only header/hero/bottom | One consistent conversion path |
| D7 | Approach A: JS-injected modal, direct `fetch` to webhook | B: PHP relay on Hostinger; C: markup duplicated in each HTML file | Single source of truth, no backend. CORS verified (`Access-Control-Allow-Origin: *`, POST allowed). Can switch to B later by changing one config value if spam appears |

## 4. Final Design

### 4.1 Config

```js
const AUDIT_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/sNpBMwuPRAAzerr7ZWH5/webhook-trigger/v6SGBOB68uJ2gfEtDEJZ';
```

### 4.2 Layout & Visuals

- **Backdrop:** `::backdrop` `rgba(4,6,12,0.72)` + `backdrop-filter: blur(16px)`.
- **Panel:** `--panel` bg, 1px `--line-2` border, 0 radius, subtle `--glow-cobalt`; max-width 560px; centered desktop, full-width top-anchored and internally scrollable on mobile.
- **Close:** square ghost ✕, top-right, `aria-label="Close"`.
- **Header:** `.eyebrow` "Free Growth Audit" → display H2 "See where your <span class="accent">leads are leaking</span>" → `--mist` line "Takes 30 seconds. Report in your inbox within 24 hours."
- **Fields:** 2-column grid (1 column < 600px):
  - Owner name · Business name
  - Phone · Email
  - Website (optional) · Address (optional)
  - Orbitron small-caps labels (`--track-label`); transparent inputs with hairline bottom border → cobalt on focus; errors in `--decline-300` under the field; inputs ≥16px font.
- **Submit:** full-width `.btn .btn-primary` "Get My Free Audit" → "Sending…" + disabled while in flight.
- **Fine print:** "No spam. We only use this to prepare your audit. [Privacy Policy](privacy-policy.html)" in `--ash`.
- **Motion:** panel fade + 12px rise, `--dur-med` / `--ease-out`; backdrop fade; instant under `prefers-reduced-motion`.
- **Scroll lock:** `<html>` `overflow: hidden` while open; mobile `.sticky-cta` hidden while open.

### 4.3 Triggers (HTML changes per page)

Add `data-audit-open="<id>"` to existing CTAs, keeping `href="#book"`:

| CTA | id |
|-----|----|
| Header "Book a Free Growth Audit" | `header` |
| Hero primary button | `hero` |
| Footer "Book a Free Growth Audit" link | `footer` |
| Mobile sticky "Book Free Audit" | `sticky` |
| Final `#book` section — new primary "Get My Free Growth Audit" | `final` |

Final section: replace the "Email us to book" button with the modal button; keep "Call (916) 235-9935" as ghost. Rewrite the lede to match an emailed report (current copy implies a 15-minute call).

### 4.4 Behavior

- Delegated click on `[data-audit-open]` → `preventDefault()` → `showModal()`; remember the trigger to restore focus on close; focus Owner name.
- Close via ✕, Esc, or backdrop click (backdrop click ignored if any field has been typed in).
- Reopen after success → fresh, empty form.

### 4.5 Submit Flow

1. Validate (on submit; then per-field on blur). Focus first invalid field.
2. Spam guard: honeypot filled or < 3s since open → show success, send nothing.
3. Normalize: phone → digits, strip leading `1` if 11 digits, format `+1XXXXXXXXXX`; email lowercase/trim; website: `n/a`/`none` → empty, else prepend `https://` if missing.
4. `fetch` POST `application/json`, 12s `AbortController` timeout.
5. 2xx → swap form for success view.

### 4.6 Payload

```json
{
  "first_name": "Jane",
  "last_name": "Doe",
  "full_name": "Jane Doe",
  "business_name": "Doe Plumbing",
  "phone": "+19165551234",
  "email": "jane@doeplumbing.com",
  "website": "https://doeplumbing.com",
  "address": "123 Main St, Sacramento, CA",
  "source": "Website – Growth Audit Modal",
  "cta": "hero",
  "page": "/ai-receptionist.html",
  "utm_source": "",
  "utm_medium": "",
  "utm_campaign": "",
  "submitted_at": "2026-09-24T20:47:00Z"
}
```

Name split on first space. UTMs captured on landing into `sessionStorage` (wrapped in try/catch).

### 4.7 Success View

Cobalt check icon → heading "You're in." → body: "Thank you for your growth audit submission. You will receive an email with the report within 24 hours." → ghost "Close" button.

### 4.8 Error Handling

- Network / timeout / non-2xx → inline banner above submit: "Something went wrong sending your request. Please try again or call **(916) 235-9935**." Input preserved, button re-enabled.
- Field errors: "Enter your name" · "Enter a 10-digit phone number" · "Enter a valid email" · "Enter a valid website (e.g. yoursite.com)". Linked via `aria-describedby`, `aria-invalid="true"`.

### 4.9 Edge Cases

- Single-word name → `first_name` only.
- Mobile keyboards/autofill: `type="tel"` + `autocomplete="tel"`, `type="email"` + `autocomplete="email"`, `type="url"` + `inputmode="url"`, `autocomplete="name" / "organization" / "street-address"`.
- Modal is built only on pages containing a `[data-audit-open]` element (legal pages untouched).
- `<dialog>` top layer renders above the LeadConnector chat widget.

## 5. Testing

1. Desktop Chrome / Safari / Firefox + mobile 375px: open from all 5 CTA types; focus trap, Esc, backdrop; validation messages.
2. Keyboard-only pass + screen reader (dialog label, errors announced).
3. One real test submission → GHL trigger "Fetch sample request" → map fields → delete test contact.
4. DevTools offline / blocked request → error banner, input preserved.
5. Honeypot filled → no network request.

## 6. GHL Workflow (owner: WEBsynthiq, built in GHL)

Inbound Webhook trigger → Create/Update Contact (map fields; `business_name` → Company Name) → Add tag `growth-audit` → Internal notification → Report produced and emailed within 24h.

## 7. Risks

- **Public webhook URL** → possible junk submissions. Mitigation: honeypot + timing; fallback to PHP relay (Approach B) if abuse appears.
- **24h promise** depends on the GHL workflow + team fulfilment, not the website.
- **GHL webhook availability** → error banner with phone fallback.
