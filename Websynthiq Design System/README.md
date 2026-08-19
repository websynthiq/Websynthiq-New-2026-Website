# Websynthiq Design System

A reusable design language built around the Websynthiq brand: a tech/web-product
identity defined by a hex-cube logo, a deep cobalt-and-steel-blue palette, and
a dual-personality wordmark that pairs heavy condensed letterforms with clean
techno-style lowercase.

## What we know

The materials provided are all brand identity files — logo lockups, banners,
and a favicon. We did **not** receive a codebase, Figma file, marketing site,
or product UI, so this design system is built from the **brand mark only** and
extrapolated into a coherent visual language.

If/when the user has a real product surface (web app, marketing site, etc.) we
should revisit and pin the system to actual product UI.

### Sources

All inputs were direct file uploads (no Figma / repo links provided):

- `uploads/blue_websynthiq with icon.png` — full lockup, white background
- `uploads/blue_websynthiq with icon_NOBG.png` — full lockup, transparent
- `uploads/websynthiq bannder.jpg` — wordmark only, banner crop
- `uploads/websynthiq_banner (1) (1).png` — wordmark only, banner crop
- `uploads/new350x180websynthiq.png` — wordmark, social card size
- `uploads/websynthiq_favicon (1).png` — icon mark, square

The original uploads still live in `uploads/`; cleaned, renamed copies are in
`assets/`.

---

## Brand snapshot

**Name.** Websynthiq — likely a portmanteau of *web* + *synth* + *iq*. Implies
synthesis (composition / generation) of web things, with an intelligence /
quotient angle.

**Voice (inferred).** Confident, technical, a little geeky. Builders' tone, not
marketers'. The two-tone wordmark — block letters for "WEB", techy lowercase
for "synthiq" — suggests a brand that takes the substrate (the web) seriously
but treats the product layer as something playful and engineered.

**Color signature.** Two blues, no compromise. A deep cobalt and a lighter
steel blue, applied as flat fills (no gradients in the source material). Black
and white carry the rest.

**Mark.** An isometric hex/cube with horizontal stripes on the top face and a
solid disc at center — reads as a database, package, or rendered web asset
viewed in 3D. The mark is the only place the two blues appear together.

---

## Index

```
README.md                     ← you are here
SKILL.md                      ← agent skill manifest
colors_and_type.css           ← all design tokens (CSS custom properties)

assets/
  logo-full.png               ← icon + wordmark, transparent
  logo-full-bg.png            ← icon + wordmark, white bg
  wordmark.png                ← wordmark only
  wordmark.jpg                ← wordmark only (jpeg)
  wordmark-small.png          ← wordmark, small/social size
  favicon.png                 ← icon mark only
  logo-icon.svg               ← redrawn vector icon (best-effort)
  wordmark.svg                ← redrawn vector wordmark (best-effort)

preview/
  *.html                      ← Design System tab cards (auto-rendered)

ui_kits/
  marketing/                  ← marketing site UI kit
    index.html                ← interactive demo
    *.jsx                     ← React components
    README.md
```

---

## Content fundamentals

We have no product copy on file, so the rules below are extrapolated from the
brand mark, naming convention, and dual-tone wordmark personality. They are a
**starting point** — adjust against real copy when we get it.

**Voice.** Direct, builder-first, a little dry. Closer to Vercel / Linear /
Cloudflare than Mailchimp / Notion. Confident without being loud.

**Person.** Mostly **second person** ("you", "your stack"), addressing a
practitioner. Use **first-person plural** ("we") only when speaking as the
company — release notes, status posts, founder letters.

**Casing.** Sentence case for everything except:
- The **wordmark** itself, which is always rendered as a single typographic
  unit — `WEB` in cobalt, `synthiq` in black, no space, never re-cased to
  "Websynthiq" or "WebSynthIQ" in display contexts (it can be set normally
  inside running prose).
- **Eyebrow / kicker labels** above section headings, which are uppercase with
  wide tracking (see `.eyebrow`).

**Typography of the brand name in prose.** "Websynthiq" — initial cap, single
word. Never hyphenate.

**Tone moves.**
- Lead with verbs. *"Ship a marketing site in an afternoon."* Not *"A
  platform that helps you create marketing sites."*
- Avoid AI-buzzword soup. The "iq" suffix already does the lifting.
- Numbers > adjectives. *"Sub-200ms cold starts"* beats *"Lightning fast."*
- Embrace technical specificity. Mention HTTP, DNS, edge, build, deploy when
  relevant — readers respect that you respect them.

**Don'ts.**
- No emoji in product UI or marketing copy. The brand is restrained.
- No exclamation marks except in micro-confirmations ("Saved.").
- No "magic", "effortless", "delightful". Show, don't tell.
- No filler verbs ("leverage", "utilize", "empower").

**Examples (illustrative — invent / replace with real copy):**
- ✅ "Synthesize a production site from a single config file."
- ✅ "Routing, caching, and TLS handled. You write the components."
- ❌ "Empower your team with revolutionary AI-powered web magic!"
- ❌ "✨ The future of the web is here ✨"

---

## Visual foundations

### Palette

Two brand blues, sampled from the favicon at pixel level:

- **Cobalt** `#2541B2` — primary. The "WEB" wordmark and the top facet of the
  cube. Use for primary actions, links, brand emphasis.
- **Steel** `#1768AC` — secondary. The lower facets of the cube. Use for
  secondary surfaces, accents, info states, large washes where Cobalt would be
  too saturated.

Plus pure **black** `#000000` (the "synthiq" wordmark) and **white**
`#FFFFFF`. Neutrals are a cool gray ramp with a slight blue lean.

A 9-stop ramp is provided for each brand color (`--cobalt-50…900`,
`--steel-50…900`). For semantic tones, fall back to the standard `--success /
--warning / --danger / --info` set; `--info` aliases Steel.

### Type

Two display fonts power the personality split that's visible in the logo. We
do **not** have the original wordmark's typeface files — these are the closest
free Google Fonts matches:

- **Saira Condensed** (display, "WEB"-style). Heavy condensed sans, blocky,
  uppercase. Used for hero displays and the rendered-as-text wordmark.
- **Orbitron** (techno, "synthiq"-style) — **provided by user**. Geometric,
  squared-off, futuristic. Used for h1–h3 and lowercase display.
- **Inter** (body). Neutral workhorse for paragraphs, UI labels, forms.
- **JetBrains Mono** (mono). For code, terminal output, IDs.

> ⚠️ **Substitution flag.** The "WEB" condensed face is still substituted with
> Saira Condensed (Google Fonts). If the original wordmark uses a different
> condensed face, drop the `.ttf` / `.otf` files into `fonts/` and update
> `colors_and_type.css`.

### Spacing

4px base. Tokens `--sp-1 … --sp-24`. Component padding tends toward the 12–24
range; section padding toward 64–96. Avoid arbitrary values; pick the nearest
token.

### Radii

Modest. The brand is angular at display scale (cube facets, condensed type)
but soft at UI scale. Cards use `--radius-lg` (10px); buttons use
`--radius-md` (6px); pills use `--radius-pill`.

### Shadows

Cool-tinted (a touch of cobalt in the alpha) so they sit on white without
muddying. Five-step ramp `--shadow-xs … --shadow-xl` plus a focus ring
`--shadow-focus` that uses brand cobalt at 30% alpha.

### Borders

`--border-1` (gray-200) is the default hairline. `--border-2` (gray-300) for
emphasis. `--border-strong` (gray-700) for inputs in dark / contrasted
contexts.

### Gradients

Used **sparingly** — the source material has no gradients; the cube reads as
flat color. Two are provided for accent moments:

- `--grad-cobalt-steel` — diagonal cobalt → steel.
- `--grad-cube` — banded cobalt / steel mimicking the cube's two facets.

Avoid gradient backgrounds for body content. If you need atmosphere, use a
flat steel or cobalt wash instead.

### Backgrounds

White is the primary canvas. For section variety, use:
- `--bg-subtle` (cool near-white) — most common alternate.
- `--brand-cobalt` solid — full-bleed brand moments only.
- `--gray-900` solid — code blocks, terminals, dark mode.

The brand has **no** illustration system, no patterns, no photography style on
file. Generic photography should lean cool / desaturated / technical (server
rooms, code on screens, blueprints) rather than warm lifestyle imagery — match
the wordmark's restraint.

### Animation

Restrained. Use `--dur-fast` (120ms) for micro-interactions, `--dur-base`
(200ms) for state changes, `--dur-slow` (320ms) for layout transitions. Easing
is `--ease-out` for entrances, `--ease-in-out` for moves. **No bounces, no
overshoot.** Hovers fade and slightly tighten; presses dim by 8% — they don't
shrink dramatically.

### Hover & press states

- **Buttons (primary).** Hover: shift to `--cobalt-600`. Press: `--cobalt-700`
  + slight inset shadow. Focus: `--shadow-focus`.
- **Buttons (secondary / ghost).** Hover: `--bg-muted`. Press: `--bg-subtle`
  with `--border-2`.
- **Links.** Hover adds a 1px underline, color → `--cobalt-700`.
- **Cards.** Hover lifts shadow `sm → md`, no transform.

### Layout rules

- Max content width 1200px for marketing, 1440px for app shells.
- 12-column grid, 24px gutters at desktop, 16px at mobile.
- Sticky top nav, 64px tall, white with a 1px bottom border on scroll.
- Footers: dark (gray-900) with cobalt accent line on top.

### Use of transparency / blur

Sparingly. Sticky nav uses `backdrop-filter: blur(12px)` on a 90% white surface
once the user scrolls. Modals dim the page with a 60% gray-900 overlay (no
blur — keeps the focus sharp).

### Cards

Default card: white, 1px `--border-1`, `--radius-lg`, `--shadow-sm`. Hover
brings shadow to `--shadow-md` with a 200ms ease-out. No colored left borders.
No gradient fills.

### Imagery vibe

Cool, clean, system-y. Black-and-white, or desaturated cobalt-tinted. Avoid
warm filters, lifestyle stock, and gradient overlays.

---

## Iconography

We did not receive an icon set or icon font with the brand assets. The only
iconography on file is the brand mark itself.

**Approach.**
- Icons should be **stroke-based**, **1.5px stroke** at 24px frame, square
  caps and joins, mostly geometric — they should feel like cousins of the
  cube logo (angular, flat, no gradients).
- We use **Lucide** (https://lucide.dev/) as the linked icon library. It
  matches the desired stroke style and is CDN-available.
- Brand-specific iconography (logo, cube, favicon) lives in `assets/` as
  PNGs (and an SVG redraw, where possible).
- **No emoji** in product UI or marketing surfaces.
- Unicode symbols are acceptable in code-adjacent contexts (`→`, `↗`, `·`,
  `⌘`) where they read as typographic punctuation, not as decoration.

> ⚠️ **Substitution flag.** Lucide is a *substitute* — we don't know what icon
> set the real product uses. If the team has an existing icon library, drop it
> in `assets/icons/` and update this section.

**Usage in code.** Either reference the Lucide CDN script or copy specific
SVGs into `assets/icons/`:

```html
<!-- CDN -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="zap"></i>
<script>lucide.createIcons();</script>
```

---

## Caveats / open questions

- **No product UI on file.** Components in `ui_kits/` are extrapolated from
  brand identity, not from real screens. They will need a pass once we have
  actual product reference.
- **Wordmark fonts are substitutes.** See type section.
- **Iconography is substituted (Lucide).** See above.
- **No copy samples.** Voice rules above are inferred. Replace with real
  examples when we have them.

