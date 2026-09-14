---
name: visual-style
description: 'Define shape language, surfaces, gradients, elevation, iconography, and illustration style using interactive HTML options and an immutable archive.'
---
# Visual Style

## When to Use
- Establishing the "look and feel" beyond raw color/type: shape language, imagery, iconography, textures

## Inputs Required
- `00-brand-foundation`, `02-color-system`, `03-typography-system`, `04-design-tokens`

## Interactive Decision-Gate Procedure
1. **Never define visual style in one go without user review.**
2. **Present 2–3 distinct, cohesive visual style directions**:
   - Compile all directions into a self-contained interactive preview in `brand/<slug>/options/05-visual-style-v1.html` (or `-v2.html` on revisions).
   - For each direction:
     - **Shape Language & Depth**: Corner radii, borders, glassmorphism, flat vs. layered elevation.
     - **Surfaces & Glows**: Solid vs. mesh gradients, telemetry lighting, ambient glows.
     - **Iconography & Illustration**: Stroke vs. duotone vs. filled glyphs with live SVG examples.
     - **Imagery & Mockup Framing**: Photography art direction, screen framing, duotone overlays.
     - **Brand Cohesion Rationale**: How this aesthetic reinforces foundation personality and tokens.
     - **Pros & Cons**: Distinctiveness, implementation overhead, and visual resonance.
3. **Dedicated Immutable Archive**:
   - Save in `brand/<slug>/options/` with sequential numbering.
   - **NEVER update/overwrite or delete** existing option files. All revisions are append-only.
4. **Zero Premature Writes**:
   - Do NOT write or create any files in `brand/<slug>/05-visual-style/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a visual style (*"Concept 1 selected"*):
   - Write `brand/<slug>/05-visual-style/visual-style.md` with `status: approved`.

## Output
- `brand/<slug>/options/05-visual-style-v<n>.html` (Immutable options archive)
- `brand/<slug>/05-visual-style/visual-style.md` (Committed only after selection)

## Consistency Rules
- Every shape, shadow, and gradient decision must map directly to tokens in `04-design-tokens`.
