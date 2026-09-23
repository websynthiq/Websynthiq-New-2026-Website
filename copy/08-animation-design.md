# 08 — Animation Layer Design ("Leak → Fix")

Status: **Implemented** · 2026-09-23 (see "Implementation notes" at the end for deviations)

## Understanding summary

- **What:** a small set of signature animations (2–4 moments) on the homepage, plus light polish on every page through the shared `css/styles.css` and `js/main.js`.
- **Why:** make the site convert better and look more striking. Every moment must move the visitor toward booking the audit or calling. Decoration alone doesn't qualify.
- **Who:** owners of home service, medical, auto and trade businesses. Many are on a phone, between jobs, and not very technical.
- **Storytelling:** animations act out *how things work* (missed call, leak, booked job). They make **no claims about results**.
- **Constraints:** static HTML/CSS/JS on Hostinger, no build step. Current brand stays: void background, cobalt/steel, 0px radius, thin hairlines.
- **Out of scope:** copy or layout changes (except D6), invented stats or testimonials, custom moments for service pages, 3D or WebGL, sound.

## Assumptions

1. The hero image loads no later than it does today. New JS stays at about 15 KB or less, with no library. Only transform, opacity, clip-path and SVG line drawing are animated. Nothing runs while off screen.
2. Every moment works at 375px. The mobile sticky CTA is never covered or animated.
3. Reduced motion shows each scene's **final frame**, which still tells the story. Animated text stays real text in the DOM. Nothing flashes.
4. Content is visible when JS fails (fixes the current `.reveal` invisibility issue).
5. The owner maintains the code, so it stays plain commented JS in the current style.
6. No new third-party scripts. The GHL chat widget is unchanged.

## Decision log

| # | Decision | Alternatives considered | Why |
|---|---|---|---|
| D1 | A few signature moments + polish | Polish only; full cinematic (GSAP/3D) | Most impact for the page weight and risk |
| D2 | Big moments on the homepage only, polish on every page | One moment per service page; homepage only | Most visitors land on the homepage. Service pages can follow later |
| D3 | Show how it works, no claimed results | Count-ups of real numbers; testimonials | No proof we can verify yet. Never fabricate |
| D4 | Link to the AI demo, never show the demo number on the homepage | Show (916) 313-8661 inline | Owner's decision |
| D5 | Approach A ("Leak → Fix") + the hero headline reveal from C | B: demo loop in the hero; C: premium feel | A is the only option that animates the core pitch. The reveal adds wow cheaply without crowding the hero |
| D6 | Card 02 link text becomes "Hear it answer →" pointing to `ai-receptionist.html#demo` | Keep "See how it works" | Stronger call to action that matches the call scene. Owner approved |
| D7 | Book buttons get one green ring pulse in the final booking section and a light sweep on hover. The sticky bar is static | Looping pulses; attention-shake | One cue is persuasive. Repeating cues read as pushy |
| D8 | No animation library. The IntersectionObserver sets `.in` and all scenes are CSS | GSAP, Motion One | No build step, small payload, easy to maintain |

## Final design

### 1. Shared foundation

- **Tokens** (new "Motion" block in `styles.css`): `--dur-fast: 200ms`, `--dur-med: 480ms`, `--dur-slow: 900ms`, `--ease-out: cubic-bezier(0.22,1,0.36,1)`, `--stagger: 80ms`.
- **Triggers:** the existing IntersectionObserver in `main.js` handles `.reveal` **and** `[data-motion]`. It adds `.in` once and then stops watching the element. The JS only sets state. CSS draws everything.
- **JS-failure safety:** the first line of `main.js` adds `js` to `<html>`. Hiding before the fade-in is scoped to `html.js .reveal` and `html.js [data-motion]`.
- **Reduced motion:** one `prefers-reduced-motion: reduce` block forces every scene to its final frame with no transitions.
- **Grid stagger:** grid children get `style="--i:N"`, and `transition-delay: calc(var(--i) * var(--stagger))` applies once the parent has `.in`. This covers `.problem-list`, `.services-grid`, `.steps`, `.features` and `.faq`.
- **Speed rules:** don't animate `filter`, `box-shadow` or layout properties in scroll scenes. Leave the hero `<img>` and `fetchpriority` alone.

### 2. Hero headline reveal (homepage, on load)

- Each H1 line sits inside an `overflow:hidden` wrapper and slides up: line 1 at 0ms, line 2 at 120ms.
- The eyebrow, the lede and the CTA row fade up in sequence after it, ending about 1.1s after load. The CTAs can be clicked the whole time.
- `.accent` gets one light sweep (background-position) when line 2 lands, and never loops.
- The cube keeps its existing `floaty` animation, unchanged.

### 3. Leak scenes (homepage Problem section)

The illustration strips are about 48px tall, sit above each cell's `h3`, and are `aria-hidden`. Each scene takes 1–1.5s and they play one after another.

| Leak | Scene | Final frame |
|---|---|---|
| 01 Voicemail | Phone icon, 2 green ring pulses, turns red, "Voicemail" label slides in | Red phone + "Missed" |
| 02 Website | Five-second bar fills. "What · Where · Next?" fade out before it completes | Empty bar, "5s" |
| 03 Reviews | Bars grow: "You 14" (short), "Them 340" (long) | Large gap, labels visible |
| 04 Boosted post | "40 clicks" counts through a funnel down to "0 jobs" | "0 jobs" in red |

- The numbers come from the hypothetical examples already in the copy.
- `--decline` red appears only here on the homepage. The fix scenes answer in cobalt and `--accept` green.

### 4. Systems lines (homepage Services grid)

- A single SVG layer behind the 2×2 grid. Four 1px `--line-cobalt` paths draw via `stroke-dashoffset` from each card's inner corner to the center.
- A square marker labeled "BOOKED JOB" (Orbitron) sits at the center and lights up once all four lines finish.
- Desktop hover brightens that card's path to `--cobalt-300` and pulses the marker once.
- ≤720px: one vertical line down the left edge, ending at a marker below card 04.
- Final frame: all paths drawn, marker lit.

### 5. Call inside card 02 (homepage)

- A notification stack of about 130px between the card's `h3` and `p`, with real text rows:
  1. `Incoming call · Sun 11:04 PM` (green ring pulse)
  2. `Answered · 1st ring`
  3. `Booked · Tue 9:00 AM · AC repair`
  4. `Owner texted ✓`
- Rows appear about 450ms apart (≈2.2s total), then hold. No loop.
- Card link: "Hear it answer →" to `ai-receptionist.html#demo` (D6). No phone number shown (D4).

### 6. Remaining polish

- **Process steps:** the outlined numbers fill with the cobalt→steel gradient one after another. A 1px line draws across the top of the steps (down the side on mobile).
- **Primary button hover:** a 700ms light sweep in addition to the existing glow. Desktop only.
- **Final booking section:** a single green ring pulse on the Call button when the section enters view.
- **Service pages:** the grid stagger and the JS-failure safety only, plus one arrow nudge on `.bridge` when it enters view.
- **Mobile sticky CTA:** unchanged, never animated.

### Edge cases

- **Landing midway down the page** (hash link or back button): anything already on screen jumps straight to its final frame.
- **No IntersectionObserver:** everything shows its final frame (existing fallback).
- **Chat widget:** the scenes' z-index stays below it.
- **Screen readers:** leak strips are `aria-hidden`. The card 02 rows are readable content.

### Testing

- Chrome, iOS Safari and Firefox at 375, 768 and 1440px.
- Homepage Lighthouse before and after. Pass: the Performance score doesn't drop, LCP doesn't get later, and CLS stays ≤ 0.01.
- Pass with reduced motion on and with JS disabled.
- Keyboard tab through every link: the focus outline is visible and nothing traps focus.

## Risks acknowledged

- **Card 02 gets busier than the other three cards.** Mitigation: the rows use small Orbitron text with muted color, and the height is capped at about 130px.
- **Leak strips add visual weight to a section that's intentionally spare.** Mitigation: hairline style only, 48px maximum height. Can be cut per cell if it feels cluttered.
- **Scroll scenes can feel slow for people who scan quickly.** Mitigation: each scene lasts at most 1.5s and none of them blocks reading or clicking.

## Implementation notes (deviations from the design above)

- **Systems lines run along the inner hairlines.** Cards meet at the centre, so a line "from each card's inner corner to the centre" would have zero length. Instead, each card lights the hairline on its inner side, in a pinwheel (01 top, 02 right, 04 bottom, 03 left), and all four run into the hub.
- **Services grid rows are now equal height** (`grid-template-rows: 1fr 1fr` on desktop) so the hairline cross, and the hub, sit exactly at the centre. Row 2 cards are slightly taller than before. Links stay bottom-aligned.
- **Leak 04 doesn't count down numbers.** Dots flow into the funnel and drip out before "0 jobs" appears. This keeps the "CSS draws every frame" rule, with no JS counter.
- **"Landed mid-page" is triggered by input, not a timer.** On a hash, back/forward or reload visit, anything revealed before the visitor's first scroll or tap shows its final frame. A 700ms timer was unreliable because the browser's jump to `#book` can land later than that.
- **CLS:** the homepage baseline was already about 0.10 before this work, most likely from web-font swaps. After the change it measures about 0.07. The test criterion became "no increase over baseline" instead of "≤ 0.01".
- **JS-failure safety:** an inline `<head>` script adds `html.js` and removes it after 3s if `main.js` never sets `window.__wsMotion`. It's on all 7 pages.
