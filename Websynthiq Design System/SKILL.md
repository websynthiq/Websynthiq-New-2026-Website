---
name: websynthiq-design
description: Use this skill to generate well-branded interfaces and assets for Websynthiq, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand colors:** Cobalt `#2541B2` (primary), Steel `#1768AC` (secondary), Ink `#000000`, Paper `#FFFFFF`. Full ramps in `colors_and_type.css`.
- **Display fonts:** Saira Condensed (heroic uppercase, "WEB"-style) and Orbitron (techno headings, "synthiq"-style — provided by user, in `fonts/`).
- **Body / mono:** Inter, JetBrains Mono.
- **Logo / mark:** `assets/logo-full.png`, `assets/favicon.png`, plus banner variants.
- **Voice:** direct, builder-first, dry; verbs first; no emoji, no exclamation, no "magic".
- **UI kit:** `ui_kits/marketing/` — full marketing-site recreation with React components.
- **Iconography:** Lucide (substitute) at 1.5px stroke. Document any swap.

Always pull the brand mark from `assets/` rather than redrawing it. Use cobalt+steel as flat fills; reserve gradients for hero / CTA moments only.
