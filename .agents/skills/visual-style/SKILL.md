---
name: visual-style
description: 'Define shape language, surfaces, gradients, elevation, iconography, and illustration style using interactive HTML options and an immutable archive.'
---
# Visual Style

## When to Use
- Establishing the "look and feel" beyond raw color/type: shape language, imagery, iconography, textures

## Inputs Required
- Approved `00-brand-foundation`, `01-logo-system`, `02-color-system`, and `03-typography-system`. If one is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).
- Design tokens are compiled after this step, from the values chosen here.

## Interactive Decision-Gate Procedure
1. **Never define visual style in one go without user review.**
2. **Present 2–3 distinct, cohesive visual style directions**:
   - Compile all directions into a self-contained interactive preview in `brand/<slug>/options/05-visual-style-v1.html` (or `-v2.html` on revisions).
   - For each direction:
     - **Shape Language & Depth**: Corner radii, borders, glassmorphism, flat vs. layered elevation.
     - **Surfaces & Glows**: Solid vs. mesh gradients, lighting effects, ambient glows.
     - **Density & Motion**: Spacing base and rhythm (e.g. compact 4pt vs. airy 8pt) and motion character (durations, easing).
     - **Iconography & Illustration**: Stroke vs. duotone vs. filled glyphs with live SVG examples.
     - **Imagery & Mockup Framing**: Photography art direction, screen framing, duotone overlays.
     - **Brand Cohesion Rationale**: How this aesthetic reinforces the foundation personality and the approved logo, color, and typography.
     - **Pros & Cons**: Distinctiveness, implementation overhead, and visual resonance.
3. **Dedicated Immutable Archive**:
   - Save in `brand/<slug>/options/` with sequential numbering.
   - **NEVER update/overwrite or delete** existing option files. All revisions are append-only.
4. **Zero Premature Writes**:
   - Do NOT write or create any files in `brand/<slug>/05-visual-style/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a visual style (*"Concept 1 selected"*):
   - Write `brand/<slug>/05-visual-style/visual-style.md` with `status: approved`, including the exact values `design-tokens` will compile: radius scale, border widths, shadow/elevation set, spacing base, and motion durations and easings.

## Output
- `brand/<slug>/options/05-visual-style-v<n>.html` (Immutable options archive)
- `brand/<slug>/05-visual-style/visual-style.md` (Committed only after selection)

## Consistency Rules
- Every value decided here must be exact (no ranges), so `design-tokens` can compile it without inventing values.
