---
name: marketing-assets
description: 'Use when creating ads, banners, posters, product-launch graphics, thumbnails, and campaign assets for a brand.'
description: 'Use when creating ads, banners, posters, product-launch graphics, thumbnails, and campaign assets for a brand. Presents cohesive campaign creative concepts with pros & cons.'
---
# Marketing Assets

## When to Use
- One-off or campaign-based promotional graphics (not the recurring social templates)
- One-off or campaign-based promotional graphics (ads, banners, launch posters)

## Inputs Required
- `00-brand-foundation`, `02-color-system`, `05-visual-style`, `15-brand-voice-and-copy`
- `00-brand-foundation`, `01-logo-system`, `02-color-system`, `05-visual-style`, `15-brand-voice-and-copy`

## Procedure
1. Clarify the campaign goal, channel, and required sizes (web ad standard sizes, poster/print
   dimensions, video thumbnail sizes) before producing anything.
2. Compose using only approved colors/fonts/logo variants and the visual-style rules (imagery
   treatment, icon/illustration style).
3. Keep headline/CTA copy consistent with `15-brand-voice-and-copy`.
4. Produce as SVG when feasible; otherwise write a structured creative brief (see
   `brand-asset-generator` agent) for a designer or image-gen tool.
## Interactive Decision-Gate Procedure
1. Never produce campaign assets in one go.
2. Present **2–3 distinct, cohesive campaign visual concepts**:
   - For each concept:
     - **Creative Angle & Hook**: Visual metaphor, headline hook, hero element treatment.
     - **Channel Applications**: Display ad ratios (300x250, 728x90, 160x600), promotional banner, poster/thumbnail.
     - **Brand Cohesion Rationale**: How this creative direction stays true to approved positioning and visual style.
     - **Pros**: Attention capture, conversion relevance, message memorability.
     - **Cons**: Asset creation effort, platform fit.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a campaign direction (*"this one selected"* or provides refinements):
   - Produce SVG assets or structured creative briefs via `brand-asset-generator`.
   - Write `brand/<slug>/13-marketing-assets/<campaign-name>/` files with `status: approved`.

## Output
- `brand/<slug>/13-marketing-assets/<campaign-name>/*.svg` or `brief.md`

## Consistency Rules
- No campaign-only color/font; reuse only what's already approved elsewhere.
- Assets must exclusively use approved colors, typography, and logo assets.
