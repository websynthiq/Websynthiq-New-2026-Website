# Design — Live Demo Section, AI Receptionist Page

**Status:** Design validated, not yet implemented
**Date:** 2026-08-18
**Page:** `/ai-receptionist`
**Demo line:** (916) 313-8661 → `tel:+19163138661`

---

## 1. Understanding Summary

- **What:** A demo section containing an iPhone mockup showing an incoming call from "WEBsynthiq AI Receptionist," acting as a tap-to-call link to (916) 313-8661.
- **Why:** The page currently promises a demo twice with no mechanism behind either — the hero microcopy ("Hear a live demo answer a call on the spot") and the Final CTA heading ("Hear it answer a call"). This closes a live broken promise. It also acts on the original build note: for voice AI, one 30-second listen outperforms the rest of the page, because buyers can't picture "natural sounding" until they hear it.
- **Who:** Local service business owners evaluating whether an AI can credibly answer their phone — split between mobile visitors who can tap-to-call and desktop visitors who cannot.
- **Where:** Its own section between the hero and the "Your phone is your cash register" problem section.
- **Constraint:** The desktop path must never fail silently, since `tel:` is frequently a no-op on laptops.
- **Non-goals:** Not replacing the hero waveform orb. Not altering the "Book a Free Growth Audit" CTA hierarchy. No transcript, no audio player, no device-detection JavaScript.

---

## 2. Assumptions

1. (916) 313-8661 is a live, dedicated demo line where the AI agent answers, safe to publish publicly and permanently.
2. The agent answers as WebSynthiq's own receptionist, not role-playing a fictional client business.
3. The line is available 24/7, matching the page's central claim.
4. **No call tracking exists.** Verified: zero analytics, GTM, or pixels anywhere on the site. Demo calls will be invisible except in the line's own logs.
5. Build is inline SVG + CSS, not a raster image. No CSS class collisions exist for the proposed names.

---

## 3. Open Questions (unresolved — safe defaults adopted)

| # | Question | Default adopted |
|---|---|---|
| 1 | Does the demo line record calls? | **Include the disclosure line.** California is a two-party consent state (Penal Code § 632) and the page advertises that the agent records and transcribes. Deleting one line is trivial if you don't record; omitting it when you do is exposure. |
| 2 | What happens if the line is down or hits a usage cap? | No technical mitigation possible in a static page. Flagged as an operational risk. |
| 3 | Should the hero microcopy link down to this section? | **Yes** — resolves the existing broken promise at zero cost. |
| 4 | Does the Final CTA heading need rewording? | **Yes** — propose a reword so two sections aren't both titled "hear it answer a call." |

---

## 4. Decision Log

| # | Decision | Alternatives considered | Rationale |
|---|---|---|---|
| 1 | Own section between hero and problem | Replace hero visual · mid-page after "What it handles" · fold into Final CTA | Full attention, keeps the orb art, and resolves the hero's promise immediately below it |
| 2 | Incoming-call screen | Active call w/ timer · call + transcript · post-call SMS | Instantly legible in under a second; the green accept button is an unmistakable tap affordance; doesn't overpromise |
| 3 | Number always visible + `tel:` link | Device-aware JS · QR code for desktop · `tel:` only | Zero JavaScript, cannot fail silently, and the number stays useful to people who just want to note it down |
| 4 | Inline SVG + CSS device | Generated raster PNG · hybrid SVG + backdrop | Screen text stays selectable, screen-reader accessible and indexable; ~2KB vs ~150KB; no asset to regenerate on every edit |
| 5 | Mirrored layout — phone left, copy right | Match the hero's copy-left geometry | Prevents two identically-shaped sections stacked directly on top of each other |
| 6 | Context before phone on mobile | Phone first for impact | An unexplained ringing iPhone mid-scroll reads as an ad; two lines of context make it read as an invitation |
| 7 | Include recording disclosure by default | Omit pending an answer | Asymmetric risk under CA two-party consent |
| 8 | Reuse DS semantic tokens for accept/decline | Invent new greens/reds | `#0F8C6B` / `#B91C1C` are the design system's `--success` / `--danger`, already tuned to sit beside cobalt |

---

## 5. Final Design

### 5.1 Section layout

`<section class="demo-section panel-section">` between hero and problem. `panel-section` places it on `--void-2`, banding it against the `--void` sections either side — the existing site rhythm.

**Desktop (>1020px)** — two columns, mirrored from the hero above:

```
   ╭────────╮      LIVE DEMO
   │  incom │      Don't take our word for it.
   │  ing   │      Call it yourself.
   │        │
   │  ✕  ✆  │      [supporting paragraph]
   ╰────────╯
                   (916) 313-8661
     phone LEFT    ─ disclosure ─   copy RIGHT
```

**Mobile (<1020px)** — single column: eyebrow + H2 → phone → number + disclosure.

Reuses `.wrap`, `.eyebrow`, `.display`, `.lede`, so it inherits the type scale and gutters with no new layout system.

### 5.2 The device

Entire mockup is one `<a href="tel:+19163138661">` — the whole phone is the tap target.

- **Frame:** `clamp(240px, 26vw, 300px)` wide, `aspect-ratio: 1 / 2.06`, `border-radius: 46px`, 2px `--line-2` bezel, ambient cobalt glow from a blurred pseudo-element
- **Screen:** dark vertical gradient (`--panel` → `--void`), *not* pure black — so the pure-`#000` Dynamic Island reads against it
- **Content, top to bottom:**
  - `incoming call` — Orbitron 9px, `0.3em` tracking, uppercase, `--ash`
  - 64px circular avatar: cobalt gradient with `logo-mark.png` inset at ~34px, soft glow
  - `WEBsynthiq AI Receptionist` — Inter 600, 17px, `--fog`
  - `mobile` — 12px `--ash`
  - Action row: two 56px circles, 1.5px-stroke inline SVG glyphs, labelled `decline` / `accept` in 9px tracked Orbitron
- **Motion:** slow pulsing ring from the accept button, 2s infinite, disabled under `prefers-reduced-motion`

### 5.3 Copy

**Eyebrow:** `LIVE DEMO`

**H2:** Don't take our word for it. *Call it yourself.* (second line in `.accent`)

**Supporting:**
> This is the same agent we build for clients, answering our own line. Ask it about our services, what we charge, whether we work in your area — try to trip it up. It answers 24/7, so there's no wrong time to call.

**Number:** `(916) 313-8661` as a `tel:` link, Orbitron, `clamp(1.6rem, 3vw, 2.4rem)`

**Disclosure (12px, `--ash`):**
> Calls to this demo line may be recorded for quality and training.

### 5.4 States & accessibility

- **Hover:** glow intensifies, `translateY(-4px)`, accept button brightens
- **Active:** slight scale-down
- **`:focus-visible`:** 3px cobalt ring around the device, matching DS `--shadow-focus`
- Device link: `aria-label="Call the WebSynthiq AI receptionist demo line at (916) 313-8661"`
- Glyphs `aria-hidden="true"`; avatar `alt=""` (caller name sits beside it)
- The number below is a second link to the same href — mildly redundant for keyboard users, but it's the standard card pattern and it's what keeps the desktop fallback working

### 5.5 New tokens

```css
--accept:  #0F8C6B;  /* DS --success */
--decline: #B91C1C;  /* DS --danger  */
```

---

## 6. Edge cases

| Case | Behaviour |
|---|---|
| Desktop `tel:` no-op | Number visible as large text below |
| Desktop with a handler (Teams/FaceTime/Skype) | OS prompt fires; acceptable, not suppressed |
| `prefers-reduced-motion` | Pulse ring disabled |
| Viewport <360px | Device `clamp()` floors at 240px, clears gutters |
| `logo-mark.png` fails | Avatar degrades to cobalt gradient circle, no broken-image icon |
| Keyboard | Tab reaches device link, visible focus ring, Enter dials |

---

## 7. Risks

1. **A dead demo line is worse than no demo.** This section stakes the page's central claim on one number. If it rings out, the page selling "never miss a call" has visibly missed one. Requires monitoring — no technical mitigation available in a static page.
2. **Public number, unmetered voice cost.** Spam and idle callers will dial it. Set a max call duration and a monthly cap on the voice platform.
3. **Unmeasurable.** No analytics exist on the site, so demo calls are invisible except in the line's own logs. Not a blocker, but you'll be blind to whether the section performs.

---

## 8. Test plan

- Real device: tap opens dialer prefilled with `+19163138661` — verify the **href**, not just displayed text (E.164 format)
- Desktop: click behaviour, plus number is selectable and copyable
- Keyboard: focus ring visible, Enter fires the link
- Screen reader: announces the full `aria-label`, not "link, image"
- `prefers-reduced-motion`: pulse stops
- No horizontal overflow at 320 / 375 / 768 / 1440

---

## 9. Implementation scope

| File | Change |
|---|---|
| `ai-receptionist.html` | New demo section; hero microcopy becomes an anchor link; Final CTA heading reworded |
| `css/styles.css` | `.demo-section` / `.phone-mock` block, 2 new tokens |
| `copy/03-ai-receptionist.md` | Update the copy deck to match the shipped page |
| JavaScript | **None required** |
