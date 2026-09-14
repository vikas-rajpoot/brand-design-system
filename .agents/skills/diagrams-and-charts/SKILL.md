---
name: diagrams-and-charts
description: 'Use when defining styling for architecture diagrams, workflow/process diagrams, charts, tables, and data visualizations for a brand.'
---
# Diagrams and Charts

## When to Use
- Establishing consistent visual rules for technical diagrams and data visualization

## Inputs Required
- `02-color-system` (categorical/sequential palettes must derive from brand colors), `03-typography-system`

## Procedure
1. Define a categorical color palette (distinct colors for categories, colorblind-safe check) and a
   sequential/diverging palette (for heatmaps/scales), both derived from `02-color-system`.
2. Define diagram conventions: node/box style (radius, border, shadow from tokens), connector style
   (arrow style, line weight), typography for labels.
3. Define chart conventions: gridline style, axis label style, legend placement, tooltip style.
4. Define table styling: header style, zebra striping (if any), alignment rules for numbers vs text.

## Output
- `brand/<slug>/14-diagrams-and-charts/diagrams-and-charts.md`
- Optional: a small palette JSON (`chart-palette.json`) for direct use in charting libraries

## Consistency Rules
- Every color used must come from `02-color-system`/tokens; don't invent chart-only hues.
