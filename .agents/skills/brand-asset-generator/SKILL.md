---
name: brand-asset-generator
description: Create approved brand visual assets as clean SVGs or production-ready image-generation briefs, using only the project's approved foundation, tokens, and visual style.
---

# Brand Asset Generator

Use this skill for logos, icons, simple vector illustrations, campaign graphics, or detailed briefs for complex raster artwork.

## Required context

Read the selected project's approved `00-brand-foundation`, `04-design-tokens`, and `05-visual-style` first. Do not introduce colors, typefaces, or shapes that are absent from those sources.

## Approval boundary

During option review, place visual concepts only inside a new immutable HTML preview under `brand/<project-slug>/options/`. Do not write official asset files until the user explicitly selects a concept. Never overwrite or delete an existing options file.

After approval, write only to the relevant approved subsystem, normally `01-logo-system`, `13-marketing-assets`, or `16-asset-library`.

## Deliverables

- For logos, icons, and simple vector illustrations, create clean semantic SVG using approved token values. Include a short specification for clear space, minimum size, and usage.
- For complex illustration, photography, or campaign artwork, create a structured production brief covering composition, palette, subject, lighting, mood, and negative constraints.
- State clearly whether each deliverable is a finished SVG or a production brief. Do not claim that a brief is finished raster artwork.
- Add approved assets to the `16-asset-library` index by relative reference; do not duplicate source files.
