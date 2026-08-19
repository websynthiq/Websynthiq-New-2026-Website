# WebSynthiq — Schema Report

**Scope:** 5 pages. **Format:** JSON-LD only (Google's stated preference). Server-rendered in the initial HTML, not JS-injected — so no delayed-processing risk.

**Result:** 14 isolated blocks → 5 connected `@graph` documents. One block per page, all validation clean.

---

## 1. Detection

| Format | Found | Notes |
|---|---|---|
| JSON-LD | 14 blocks across 5 pages | All parsed |
| Microdata (`itemscope`/`itemprop`) | 0 | — |
| RDFa (`typeof`/`property`) | 0 | — |

Original inventory: `ProfessionalService` ×1, `Service` ×4, `BreadcrumbList` ×4, `FAQPage` ×5.

---

## 2. Validation of what was there

| Schema | Status | Issue |
|---|---|---|
| FAQPage ×5 | ❌ Removed | **Restricted.** Google limited FAQ rich results to government and health authority sites in Aug 2023. A marketing agency is not eligible — the markup could never produce its rich result. |
| ProfessionalService (provider ×4 + homepage) | ⚠️ Retyped | `ProfessionalService` is a `LocalBusiness` subtype, which expects `address`. None was present, and there is no verified public street address to assert. Retyped to `Organization`, which carries no address requirement. |
| Service ×4 | ⚠️ Fixed | `provider` re-declared the org inline on every page (duplicate name/url/telephone) instead of referencing one canonical entity. Now `{"@id": ".../#organization"}`. |
| BreadcrumbList ×4 | ✅ Kept | Valid. Now linked from `WebPage.breadcrumb`. |
| All blocks | ⚠️ Fixed | No `@id` anywhere — nothing was linkable, so the blocks read as unrelated fragments rather than one business entity. |
| — | ⚠️ Added | No `WebSite` node, no `WebPage` nodes, no `ImageObject` for the logo. |

**Correction to earlier advice:** when I built the site I described FAQPage as the highest-ROI schema here and said it would win AI Overview and ChatGPT citations. That was wrong on the rich-results half — FAQ rich results have been off the table for sites like this since Aug 2023. The visible FAQ copy stays exactly as it is and still earns its place: it's in the rendered HTML, which is what answer engines actually read. It just no longer carries markup that can't fire.

---

## 3. What's applied now

Every page carries one `@graph` with fully linked `@id`s:

```
Organization  ──logo──▶ ImageObject (#logo)
     ▲  ▲
     │  └──publisher─── WebSite
     │                     ▲
     │                     └──isPartOf── WebPage ──primaryImageOfPage──▶ ImageObject
     │                                      │
     └──────────provider──── Service        └──breadcrumb──▶ BreadcrumbList
                                ▲
                                └── mainEntityOfPage ──▶ WebPage
```

| Page | Nodes | Types |
|---|---|---|
| `/` | 5 | Organization, ImageObject, WebSite, ImageObject, WebPage |
| `/website-design` | 7 | + BreadcrumbList, Service (`Web Design`) |
| `/ai-receptionist` | 7 | + BreadcrumbList, Service (`AI Receptionist`) |
| `/google-reviews` | 7 | + BreadcrumbList, Service (`Reputation Management`) |
| `/meta-ads` | 7 | + BreadcrumbList, Service (`Social Media Advertising`) |

**Organization** carries: name, url, logo, description, telephone, email, `contactPoint` (sales, US, English), `areaServed` (US), `knowsAbout` (6 topical entities), and `hasOfferCatalog` listing all four services with their URLs.

**Validation performed:** JSON parses in a live DOM · `@context` correct on every doc · every `url`/`contentUrl`/`item`/`@id` absolute · zero unfilled placeholders · zero dangling `@id` references (checked at every nesting depth) · one block per page · no deprecated types.

---

## 4. Deliberate omissions

These were left out because the data doesn't exist yet. Asserting any of them would be fabricated markup.

| Omitted | Why |
|---|---|
| `AggregateRating` / `Review` | No verifiable reviews. Self-asserted ratings are a manual-action risk and the single fastest way to lose trust. |
| `Offer` with `price` | No published pricing. |
| `sameAs` | No verified social profile URLs. Shipping placeholder URLs to production is worse than omitting the property. |
| `address` / `geo` / `openingHours` | No verified public address; the business is nationwide and remote. |
| `SearchAction` on WebSite | There is no site-search endpoint to point at. The old Next.js build declared one aimed at `/?s=` — that's a common invented-endpoint error. |
| `HowTo`, `SpecialAnnouncement`, `ClaimReview`, `Dataset` | Deprecated or retired from rich results. |

---

## 5. Recommendations, in priority order

1. **Add `sameAs` as soon as profiles exist.** It's the strongest entity-disambiguation signal available and directly feeds brand knowledge panels. Paste-ready block in [generated-schema.json](generated-schema.json) → `optional.sameAs_for_Organization`. Include the Google Business Profile URL.
2. **Add `AggregateRating` once you have real reviews** — and only numbers that are also visible on the page. This is the highest-value remaining markup: star ratings are one of the few rich results this business is actually eligible for.
3. **Upgrade to `ProfessionalService` if you publish a street address.** That's the prerequisite for local-pack eligibility. Template in `optional.LocalBusiness_upgrade_if_you_get_an_address`. Worth doing only if you decide to chase local rankings — your current keyword targeting is nationwide.
4. **Test before launch** in Google's Rich Results Test and the Schema.org validator. Both need public URLs, so run them after deploy.
5. **Keep the JSON-LD server-rendered.** It already is. If you port to Next.js, keep it in the initial HTML rather than injecting client-side.

---

## 6. Files

- [generated-schema.json](generated-schema.json) — `applied` holds the exact graph now live on each page; `optional` holds the paste-in blocks above.
- Source of truth is the `<script type="application/ld+json">` block in each HTML file.
