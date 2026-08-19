# WebSynthiq — Meta & Image Metadata Reference

Everything in this document is **already applied** to the live HTML. This is the record of what shipped, plus tested alternates for when you want to A/B a title.

Validation rule used: titles 40–60 chars, descriptions 150–160 chars. A script enforces both and fails the build if either is out of range.

---

## 1. Page metadata (shipped)

### `/` — Homepage
| Field | Value | Chars |
|---|---|---|
| Title | `Marketing Agency for Service Businesses \| WebSynthiq` | 52 |
| Description | `Four systems that grow service businesses: a website that converts, a 24/7 AI receptionist, more Google reviews, and Meta ads that book jobs. Free audit.` | 153 |
| OG title | `More Booked Jobs. Fewer Missed Calls. \| WebSynthiq` | 50 |
| OG image | `og-websynthiq-home.jpg` | 1200×630 |

**Title alternates**
1. `Digital Marketing Agency for Service Businesses` (46) — exact head-term match, drops brand
2. `More Booked Jobs for Service Businesses \| WebSynthiq` (52) — benefit-forward, weaker keyword
3. `Marketing Systems for Service Businesses \| WebSynthiq` (53) — the original; more distinctive, less searched

### `/website-design`
| Field | Value | Chars |
|---|---|---|
| Title | `Small Business Web Design Services That Book Jobs` | 49 |
| Description | `Small business web design services for service companies. Fast, mobile-first sites built to turn visitors into booked jobs. Free website audit, no pitch.` | 153 |
| OG title | `Your Website Should Book Jobs, Not Just Look Nice \| WebSynthiq` | 62 |
| OG image | `og-web-design.jpg` | 1200×630 |

**Title alternates**
1. `Small Business Web Design Services \| WebSynthiq` (46) — adds brand, loses the hook
2. `Web Design for Service Businesses That Books Jobs` (48) — swaps head term
3. `Lead-Generating Web Design for Small Business` (44) — different keyword angle

### `/ai-receptionist`
| Field | Value | Chars |
|---|---|---|
| Title | `AI Receptionist for Small Business \| Never Miss a Call` | 54 |
| Description | `An AI receptionist for small business that answers every call 24/7, books jobs into your calendar, and texts you the details. Live in days. Hear a demo.` | 152 |
| OG title | `The Call You Miss Is the Job Your Competitor Books \| WebSynthiq` | 63 |
| OG image | `og-ai-receptionist.jpg` | 1200×630 |

**Title alternates**
1. `AI Receptionist for Small Business \| Answer Every Call` (54) — the original; gain-framed instead of loss-framed
2. `24/7 AI Receptionist That Books Jobs for You` (44) — leads with the outcome
3. `AI Phone Answering Service for Small Business` (45) — targets the secondary keyword instead

> Loss aversion ("Never Miss a Call") reliably out-clicks the gain frame ("Answer Every Call") for this audience — the pain is a missed call, not an answered one. That's the reason for the swap.

### `/google-reviews`
| Field | Value | Chars |
|---|---|---|
| Title | `Google Review Management Service \| Rank Higher on Maps` | 54 |
| Description | `A Google review management service that asks every happy customer automatically, protects your rating, and lifts your map ranking. See your competitor gap.` | 155 |
| OG title | `The Company With More Reviews Wins the Click \| WebSynthiq` | 57 |
| OG image | `og-google-reviews.jpg` | 1200×630 |

**Title alternates**
1. `Google Review Management Service for Local Business` (50) — the original; flat but keyword-clean
2. `Get More Google Reviews, Automatically \| WebSynthiq` (50) — leads with the desire
3. `Google Review Management \| Get More 5-Star Reviews` (49) — number/star trigger

### `/meta-ads`
| Field | Value | Chars |
|---|---|---|
| Title | `Meta Ads Agency for Small Business \| Book More Jobs` | 51 |
| Description | `A Meta ads agency for small business measuring one number: cost per booked job. Facebook and Instagram campaigns built, tracked, and optimized every week.` | 154 |
| OG title | `Ads That Book Jobs. Not Ads That Get Likes. \| WebSynthiq` | 56 |
| OG image | `og-meta-ads.jpg` | 1200×630 |

**Title alternates**
1. `Meta Ads Agency for Small Business \| Facebook & IG` (49) — the original; "IG" is weak in a SERP
2. `Facebook Ads Management for Service Businesses` (46) — targets the secondary keyword
3. `Meta Ads That Book Jobs, Not Just Cheap Clicks` (46) — strongest hook, no head term

---

## 2. Image inventory & metadata (shipped)

Twelve image files. Every hero image was renamed from a generic slug to a keyword-bearing filename, and converted from decorative (`alt=""`) to descriptive.

| File | Size | Used on | Alt text |
|---|---|---|---|
| `marketing-systems-service-businesses.jpg` | 1200×1200 | `/` hero | Glowing cobalt glass cube representing the four WebSynthiq marketing systems for service businesses |
| `small-business-web-design-services.jpg` | 1200×1200 | `/website-design` hero | Floating glass browser panels representing small business web design services built to convert visitors into booked jobs |
| `ai-receptionist-small-business.jpg` | 1200×1200 | `/ai-receptionist` hero | Glowing blue voice waveform sphere representing an AI receptionist answering small business calls 24/7 |
| `google-review-management-service.jpg` | 1200×1200 | `/google-reviews` hero | Five glowing crystalline stars representing Google review management for local service businesses |
| `meta-ads-agency-small-business.jpg` | 1200×1200 | `/meta-ads` hero | Ascending glowing bar chart representing Meta ads campaign growth for a service business |
| `logo-mark.png` | 500×500 | nav + footer, all pages | WebSynthiq |
| `favicon.png` | 500×500 | favicon | — |
| `og-websynthiq-home.jpg` | 1200×630 | `/` social preview | Glowing cobalt glass cube representing the four WebSynthiq growth systems |
| `og-web-design.jpg` | 1200×630 | `/website-design` social | Floating glass browser panels representing small business web design services |
| `og-ai-receptionist.jpg` | 1200×630 | `/ai-receptionist` social | Glowing blue voice waveform sphere representing an AI receptionist answering calls |
| `og-google-reviews.jpg` | 1200×630 | `/google-reviews` social | Five glowing crystalline stars representing Google review management for local business |
| `og-meta-ads.jpg` | 1200×630 | `/meta-ads` social | Ascending glowing bar chart representing Meta ads campaign growth for service businesses |

**Attributes applied to every image:** explicit `width`/`height` (prevents layout shift, a Core Web Vitals factor), `decoding="async"`, and `fetchpriority="high"` on the hero — it's the Largest Contentful Paint element on every page.

**On the `title` attribute:** deliberately not added. It renders a tooltip, is ignored by screen readers in most configurations, carries no ranking weight, and Google has said it doesn't use it. Alt text is the field that matters.

---

## 3. What was missing before this pass

| Gap | Status |
|---|---|
| Twitter Card tags — absent on all 5 pages | Added: `summary_large_image` + title, description, image, image alt |
| `og:image` was 1200×1200 (square) | Rebuilt at 1200×630, the 1.91:1 spec for link previews |
| `og:image:width` / `height` / `alt` missing | Added — lets platforms render the preview without fetching first |
| `og:site_name`, `og:locale` missing | Added |
| Hero images `alt=""` and `aria-hidden="true"` | Converted to descriptive alt; wrappers un-hidden |
| Generic image filenames (`service-ai.jpg`) | Renamed to keyword-bearing slugs |
| No `width`/`height` on hero images | Added (CLS protection) |
| No `robots` directive | Added `index, follow, max-image-preview:large, max-snippet:-1` |
| No `theme-color` | Added `#04060C` — matches the void background in mobile browser chrome |

`max-image-preview:large` is the one worth calling out: it permits full-size image thumbnails in search results and Discover, and it matters increasingly for how AI search surfaces render your pages.

---

## 4. Porting to a CMS or framework

**Next.js App Router** — per-page export:

```ts
export const metadata = {
  title: "AI Receptionist for Small Business | Never Miss a Call",
  description: "An AI receptionist for small business that answers every call 24/7, books jobs into your calendar, and texts you the details. Live in days. Hear a demo.",
  alternates: { canonical: "https://websynthiq.com/ai-receptionist" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    siteName: "WebSynthiq",
    locale: "en_US",
    title: "The Call You Miss Is the Job Your Competitor Books | WebSynthiq",
    description: "Answers on the first ring, 24/7. Books appointments into your calendar and texts you the details before you finish the job.",
    url: "https://websynthiq.com/ai-receptionist",
    images: [{ url: "/assets/img/og-ai-receptionist.jpg", width: 1200, height: 630, alt: "Glowing blue voice waveform sphere representing an AI receptionist answering calls" }],
  },
  twitter: { card: "summary_large_image" },
};
```

**WordPress (Yoast or RankMath)** — map the fields directly: SEO title → Title column above; meta description → Description; Facebook/Twitter tabs → the OG title, OG description, and the matching `og-*.jpg` upload. Set the focus keyphrase to the primary keyword from [00-keyword-map.md](00-keyword-map.md) — one per page, never repeated.

---

## 5. Remaining recommendations

1. **Test the social previews before launch.** Facebook Sharing Debugger and X's Card Validator both cache aggressively — if you push a change to an OG image after someone has shared the URL, you must force a re-scrape or the old preview persists.
2. **Serve WebP/AVIF with a JPEG fallback.** The heroes are 74–168KB as JPEG; WebP typically saves another 25–35% at the same visual quality.
3. **Add `ImageObject` schema only if you want image-rich results.** Low priority for abstract brand renders — it pays off for real project photos, which is the stronger move once you have client work to show.
4. **Revisit titles after 4–6 weeks of Search Console data.** Pick the two pages with the lowest CTR at a decent impression count and swap in an alternate from §1. That's a real A/B signal instead of a guess.
5. **Don't add a year to these titles.** "2026" lifts CTR on listicles and roundups, but these are evergreen service pages — you'd inherit an annual maintenance chore and a stale-looking title every January.
