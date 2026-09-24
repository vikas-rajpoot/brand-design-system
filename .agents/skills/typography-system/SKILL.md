---
name: typography-system
description: 'Define heading, body, and monospace font families, type scales, weights, line-heights, and typographic hierarchy using interactive HTML options and an immutable archive.'
---
# Typography System

## When to Use
- Establishing or revising fonts, type scale, and cross-platform hierarchy rules

## Inputs Required
- `00-brand-foundation` (personality dictates serif vs. sans, geometric vs. humanist, density)
- `02-color-system` (ensure typography pairs harmoniously with surface contrasts)
- Approved `product/reference-screens.md` (fixed content, code, labels, and density cases for comparison)

## Interactive Decision-Gate Procedure
1. **Never generate typography in one go.**
2. **Present 2–3 distinct, cohesive typography pairing options**:
   - Compile all pairings into a self-contained interactive preview in `brand/<slug>/options/03-typography-system-v1.html` (or `-v2.html` on revisions).
   - For each pairing option:
     - **Live Rendered Typography Hierarchy**: Heading, Subheading, Body copy, and Monospace code specimens.
     - **Reference-Screen Comparison**: Render the same approved screen content under every pairing, preserving line lengths, code samples, labels, and state.
     - **Scale & Line-Height Table**: xs through 4xl steps with mobile vs. desktop fluid sizing.
     - **Cross-Platform Spec**: Google Fonts / system fallback stacks.
     - **Brand Cohesion Rationale**: How the pairing reflects approved foundation traits and color palette.
     - **Pros & Cons**: Legibility, code clarity, loading weight, and aesthetic trade-offs.
3. **Dedicated Immutable Archive**:
   - Save in `brand/<slug>/options/` with sequential numbering.
   - **NEVER update/overwrite or delete** existing option files. Revisions are strictly append-only.
4. **Zero Premature Writes**:
   - Do NOT write or create any files in `brand/<slug>/03-typography-system/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a pairing (*"Concept 1 selected"*):
   - Write `brand/<slug>/03-typography-system/typography-system.md` with `status: approved`.
   - Prepare typographic primitives ready for `design-tokens`.

## Output
- `brand/<slug>/options/03-typography-system-v<n>.html` (Immutable options archive)
- `brand/<slug>/03-typography-system/typography-system.md` (Committed only after selection)

## Consistency Rules
- The selected type scale directly feeds the `font.size.*` and `font.weight.*` primitives in `04-design-tokens`.
