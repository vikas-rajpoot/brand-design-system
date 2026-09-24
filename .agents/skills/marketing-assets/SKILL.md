---
name: marketing-assets
description: 'Use when creating ads, banners, posters, product-launch graphics, thumbnails, and campaign assets for a brand. Presents cohesive campaign creative concepts with pros & cons.'
---
# Marketing Assets

## When to Use
- One-off or campaign-based promotional graphics (ads, banners, launch posters, thumbnails), not the recurring social templates

## Inputs Required
- Approved `01-logo-system`, `04-design-tokens`, and `05-visual-style` (imagery treatment, icon and illustration style)
- Approved `15-brand-voice-and-copy` (headline and CTA copy)
- If an input is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).

## Interactive Decision-Gate Procedure
1. **Never produce campaign assets in one go.** First clarify the campaign name, goal, channels, and required sizes (web ad sizes, print dimensions, video thumbnails).
2. **Present 2–3 distinct, cohesive campaign visual concepts**:
   - Compile all concepts into a self-contained interactive preview in `brand/<slug>/options/13-marketing-assets-<campaign>-v1.html` (or the next `-vN.html` on revisions).
   - For each concept:
     - **Creative Angle & Hook**: Visual metaphor, headline hook, hero element treatment.
     - **Channel Applications**: The concept at each required size (e.g. display ads 300x250, 728x90, 160x600; promotional banner; poster; thumbnail).
     - **Brand Cohesion Rationale**: How this creative direction stays true to approved positioning and visual style.
     - **Pros**: Attention capture, conversion relevance, message memorability.
     - **Cons**: Asset creation effort, platform fit.
3. **Dedicated Immutable Archive**: Save in `brand/<slug>/options/`. **NEVER update/overwrite or delete** existing option files; revisions are append-only.
4. **Zero Premature Writes**: Do NOT write or create any files in `brand/<slug>/13-marketing-assets/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a concept (*"Concept 1 selected"*):
   - Use `brand-asset-generator` to produce SVG assets where feasible, or structured creative briefs otherwise.
   - Write them to `brand/<slug>/13-marketing-assets/<campaign>/`, with a `brief.md` (`status: approved`) describing the campaign goal, sizes, and copy.

## Output
- `brand/<slug>/options/13-marketing-assets-<campaign>-v<n>.html` (immutable options archive)
- `brand/<slug>/13-marketing-assets/<campaign>/*.svg` and `brief.md` (committed only after selection)

## Consistency Rules
- No campaign-only color, font, or logo variant; use only what is already approved.
