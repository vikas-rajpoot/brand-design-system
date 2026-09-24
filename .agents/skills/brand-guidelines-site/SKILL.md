---
name: brand-guidelines-site
description: 'Use when assembling one browsable website that shows all approved brand rules, assets, examples, and downloads for a project.'
---
# Brand Guidelines Site

## When to Use
- Most/all subsystems are drafted or approved and need a single browsable reference site

## Inputs Required
- Approved `04-design-tokens`, `06-ui-design-system`, and `16-asset-library`, plus every other approved subsystem
- If one of the first three is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).

## Procedure
1. Structure the site as sections mirroring the folder map: Foundation, Logo, Color, Typography,
   Tokens, Visual Style, UI Components, Voice & Copy, Downloads (asset library).
2. Build as static HTML/Markdown-rendered pages using the project's own `06-ui-design-system` and
   `04-design-tokens` (the guidelines site should visually demonstrate the brand, not use a generic
   docs theme).
3. Clearly mark each section's approval status (draft/approved) so viewers know what's final.
4. Link every asset/download to its file under `16-asset-library`.
5. Show a single-page preview of the site in `brand/<slug>/options/17-brand-guidelines-site-v1.html` and wait for explicit approval before writing `brand/<slug>/17-brand-guidelines-site/`.

## Output
- `brand/<slug>/17-brand-guidelines-site/` (static site: `index.html` + per-section pages, using
  tokens.css from `04-design-tokens`)

## Consistency Rules
- The site must never redefine a rule — it only presents what other subsystems already decided.
