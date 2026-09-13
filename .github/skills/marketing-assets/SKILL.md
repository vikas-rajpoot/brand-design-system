---
name: marketing-assets
description: 'Use when creating ads, banners, posters, product-launch graphics, thumbnails, and campaign assets for a brand.'
---
# Marketing Assets

## When to Use
- One-off or campaign-based promotional graphics (not the recurring social templates)

## Inputs Required
- `00-brand-foundation`, `02-color-system`, `05-visual-style`, `15-brand-voice-and-copy`

## Procedure
1. Clarify the campaign goal, channel, and required sizes (web ad standard sizes, poster/print
   dimensions, video thumbnail sizes) before producing anything.
2. Compose using only approved colors/fonts/logo variants and the visual-style rules (imagery
   treatment, icon/illustration style).
3. Keep headline/CTA copy consistent with `15-brand-voice-and-copy`.
4. Produce as SVG when feasible; otherwise write a structured creative brief (see
   `brand-asset-generator` agent) for a designer or image-gen tool.

## Output
- `brand/<slug>/13-marketing-assets/<campaign-name>/*.svg` or `brief.md`

## Consistency Rules
- No campaign-only color/font; reuse only what's already approved elsewhere.
