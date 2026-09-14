---
name: diagrams-and-charts
description: 'Use when defining styling for architecture diagrams, workflow/process diagrams, charts, tables, and data visualizations for a brand. Presents cohesive visualization options with pros & cons.'
---
# Diagrams and Charts

## When to Use
- Establishing consistent visual rules for technical diagrams, flowcharts, and data visualizations

## Inputs Required
- `02-color-system`, `03-typography-system`, `04-design-tokens`, `05-visual-style`

## Interactive Decision-Gate Procedure
1. Never generate charting guidelines in one go.
2. Present **2–3 distinct, cohesive visualization styling options** (e.g. Minimalist Wireframe Diagrams vs. High-Contrast Monochromatic + Accent vs. Rich Analytical Gradient):
   - For each option:
     - **Diagram Language**: Node geometry, corner radius, borders, connector arrows, and container frames.
     - **Data Palette**: Categorical series palette (colorblind-accessible), sequential ramps, and diverging heatmaps derived from approved brand colors.
     - **Brand Cohesion Rationale**: How the technical visualization style reflects the precision or warmth of the brand identity.
     - **Pros**: Readability in whitepapers/docs, distinct technical identity, chart library compatibility.
     - **Cons**: Categorical count limitations, accessibility trade-offs across dense charts.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a diagramming direction (*"this one selected"* or provides refinements), write `brand/<slug>/14-diagrams-and-charts/diagrams-and-charts.md` with `status: approved`.

## Output
- `brand/<slug>/14-diagrams-and-charts/diagrams-and-charts.md`
- Optional: `brand/<slug>/14-diagrams-and-charts/chart-palette.json`

## Consistency Rules
- All diagram node colors and chart series must derive from approved tokens.
