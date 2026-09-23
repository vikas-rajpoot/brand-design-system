---
name: corporate-visual-identity
description: 'Define the physical and corporate expression of the brand — stationery, signage and environmental branding, vehicle livery, uniforms, merchandise, packaging, event/trade-show presence, brand architecture and co-branding lockups, and trademark usage — using interactive HTML options and an immutable archive.'
---
# Corporate Visual Identity (CVI)

## When to Use
- The brand needs to exist off-screen: printed, fabricated, embroidered, wrapped, or worn
- Defining how the company presents itself as an organisation (stationery, offices, events, vehicles)
- Defining brand architecture: sub-brands, product brands, endorsed lockups, partner/co-brand rules
- Defining trademark and third-party usage rules

Run after `05-visual-style` is approved. CVI is a content subsystem, so generate it **before** the
aggregation folders `16-asset-library`, `17-brand-guidelines-site`, `18-ai-ready-spec`,
`19-templates`, and `20-approved-examples`, and refresh those once CVI is locked.

## Inputs Required
- `00-brand-foundation` (personality, positioning — drives formal vs. informal CVI register)
- `01-logo-system` (lockups, clear space, minimum size, single-colour and reversed variants)
- `02-color-system` (the only legal source of brand colour)
- `03-typography-system`, `04-design-tokens`, `05-visual-style`
- `15-brand-voice-and-copy` if it exists (for tagline, legal line, and merch copy)

## Decision Areas
This subsystem covers six areas. Treat each as its own decision gate — do not bundle them.

| Area | Covers |
|------|--------|
| A. Stationery & correspondence | Business card, letterhead, envelope (DL/#10), compliment slip, ID badge, notepad, folder |
| B. Environmental & signage | Exterior/fascia sign, reception wall, wayfinding, door & window vinyl, room naming, wall graphics |
| C. Apparel, merchandise & packaging | T-shirt, polo, hoodie, cap, lanyard, stickers, notebook, bottle, tote, shipping box, mailer, tape, label |
| D. Vehicle & fleet livery | Van, car, and large-format wrap placement zones |
| E. Brand architecture & co-branding | Sub-brand/product lockups, endorsed lockups, partner and "powered by" lockups, logo-wall placement |
| F. Trademark & legal usage | ™/® placement, first-use rule, attribution line, third-party and press usage rules |

Areas D–F are conditional: skip any the user says is out of scope, and record the skip in the
master doc rather than inventing rules.

## Interactive Decision-Gate Procedure
1. **Never generate the corporate visual identity in one go.** Confirm with the user which of the
   areas A–F are in scope before proposing anything.
2. For each in-scope area, **present 2–3 distinct, cohesive CVI directions** (e.g. *Minimal
   Corporate* vs. *Bold Signature* vs. *Utility/Industrial*):
   - Compile all directions for that area into a self-contained interactive preview at
     `brand/<slug>/options/21-corporate-visual-identity-<area>-v1.html` (append `-v2.html` on
     revisions), with true-to-scale SVG renders, front/back views, light and dark substrates, and a
     physical-context mockup.
   - For each direction document:
     - **Artefact Anatomy**: exact trim size in mm and in, margins, bleed, safe area, logo variant
       used, logo size and placement, typographic hierarchy, information order.
     - **Material & Production**: substrate/stock, finish (matte, soft-touch, spot UV, foil),
       print method (offset, digital, screen, embroidery, engraving, vinyl cut), ink count.
     - **Colour Reproduction**: the Pantone / CMYK / RAL / thread equivalent proposed for each
       brand colour used, always shown next to its source `02-color-system` hex.
     - **Brand Cohesion Rationale**: how the physical artefact reinforces the approved foundation,
       visual style, and tokens.
     - **Pros**: perceived quality, recognition at distance, unit cost, reorder simplicity.
     - **Cons**: production cost, minimum order quantity, colour drift risk, reproduction limits at
       small size or in single colour.
3. **Dedicated Immutable Archive**: save all options under `brand/<slug>/options/` with sequential
   numbering. **NEVER update, overwrite, or delete** an existing option file — revisions are
   append-only.
4. **Zero Premature Writes**: do NOT create or modify anything in
   `brand/<slug>/21-corporate-visual-identity/` until the user explicitly selects.
5. **STOP and wait for user selection** after each area.
6. Only when the user explicitly selects (*"Concept 1 selected"*), write that area's doc with
   `status: approved`, then move to the next area.
7. After the final in-scope area is approved, write `corporate-visual-identity.md` as the master
   index and record any skipped areas as out of scope.

## Output
- `brand/<slug>/options/21-corporate-visual-identity-<area>-v<n>.html` (immutable options archive)

Committed only after selection:
- `brand/<slug>/21-corporate-visual-identity/corporate-visual-identity.md` (master index, scope,
  register, and links to each area doc)
- `brand/<slug>/21-corporate-visual-identity/stationery.md`
- `brand/<slug>/21-corporate-visual-identity/environmental-and-signage.md`
- `brand/<slug>/21-corporate-visual-identity/merchandise-and-apparel.md`
- `brand/<slug>/21-corporate-visual-identity/vehicle-livery.md` (if in scope)
- `brand/<slug>/21-corporate-visual-identity/brand-architecture-and-co-branding.md` (if in scope)
- `brand/<slug>/21-corporate-visual-identity/trademark-and-usage.md` (if in scope)
- `brand/<slug>/21-corporate-visual-identity/production-specs.md` (the colour-mapping and
  reproduction-limits reference shared by every area)
- `brand/<slug>/21-corporate-visual-identity/assets/*.svg` (print-ready artwork at true dimensions)

Every Markdown file starts with `status`, `version`, and `owner` frontmatter per
[brand-docs.instructions.md](../../../.github/instructions/brand-docs.instructions.md).

## Consistency Rules
- **No new brand colours.** Every Pantone, CMYK, RAL, vinyl, or thread value must be declared in
  `production-specs.md` as the physical equivalent of an existing `02-color-system` hex, in a
  `hex → Pantone → CMYK → RAL/thread` mapping table. If an artefact seems to need a colour that is
  not in the palette, stop and flag the conflict instead of introducing one.
- **No new logo artwork.** Use only the approved variants from `01-logo-system`, and respect its
  clear space and minimum size. Where a physical minimum size is stricter than the digital one
  (embroidery, engraving, debossing, vinyl cut), record the stricter physical minimum here and
  reference the digital minimum rather than editing `01-logo-system`.
- **No new fonts.** Use `03-typography-system` families only. Where a licence does not permit print
  or fabrication use, flag it instead of substituting a font silently.
- Spacing on physical artefacts must derive from the `04-design-tokens` spacing scale, converted to
  mm at a stated scale factor recorded in `production-specs.md`.
- Always specify measurements in both mm and inches, and state bleed and safe area explicitly.
- Every artefact must be specified for full-colour, single-colour, and reversed reproduction.
- Letterhead, invoice, and email-signature layouts stay owned by `11-document-system` and
  `12-email-system`; CVI references them and must not redefine them.
- After approval, add the new artwork to `16-asset-library` and re-run `18-ai-ready-spec` so
  `brand-spec.json` carries the print colour mappings.
