---
name: diagrams-and-charts
description: 'Use when defining styling for architecture diagrams, workflow/process diagrams, charts, tables, and data visualizations for a brand. Presents cohesive visualization options with pros & cons.'
---
# Diagrams and Charts

## When to Use
- Establishing consistent visual rules for technical diagrams, flowcharts, and data visualizations

## Inputs Required
- Approved `04-design-tokens` (colors, type, radius, borders, shadows) and `05-visual-style` (shape language, iconography)
- If an input is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).

## Interactive Decision-Gate Procedure
1. **Never generate charting guidelines in one go.**
2. **Present 2–3 distinct, cohesive visualization styling options** (e.g. Minimalist Wireframe Diagrams vs. High-Contrast Monochrome + Accent vs. Rich Analytical):
   - Compile all options into a self-contained interactive preview in `brand/<slug>/options/14-diagrams-and-charts-v1.html` (or the next `-vN.html` on revisions).
   - For each option:
     - **Diagram Language**: Node geometry, radius, borders, and shadows from tokens; connector arrows and line weights; container frames; label typography.
     - **Data Palette**: A colorblind-safe categorical palette plus sequential and diverging ramps, all derived from approved token colors.
     - **Chart & Table Conventions**: Gridlines, axis labels, legend placement, tooltips; table headers, zebra striping (if any), and alignment of numbers vs. text.
     - **Brand Cohesion Rationale**: How the visualization style reflects the precision or warmth of the brand identity.
     - **Pros**: Readability in docs and reports, distinct identity, charting-library compatibility.
     - **Cons**: Categorical color limits, accessibility trade-offs in dense charts.
3. **Dedicated Immutable Archive**: Save in `brand/<slug>/options/`. **NEVER update/overwrite or delete** existing option files; revisions are append-only.
4. **Zero Premature Writes**: Do NOT write or create any files in `brand/<slug>/14-diagrams-and-charts/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a direction (*"Concept 1 selected"*):
   - Write `brand/<slug>/14-diagrams-and-charts/diagrams-and-charts.md` with `status: approved`, covering diagram, chart, and table conventions and the data palettes.
   - Optionally, add `chart-palette.json` for direct use in charting libraries.

## Output
- `brand/<slug>/options/14-diagrams-and-charts-v<n>.html` (immutable options archive)
- `brand/<slug>/14-diagrams-and-charts/diagrams-and-charts.md` (committed only after selection)
- Optional: `brand/<slug>/14-diagrams-and-charts/chart-palette.json`

## Consistency Rules
- Every diagram and chart color derives from `04-design-tokens`; no chart-only hues.
