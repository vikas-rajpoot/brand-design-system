---
name: website-system
description: 'Use when designing standard web layouts — homepage, landing pages, pricing, product pages, blog, login/signup, dashboard — for a brand.'
---
# Website System

## When to Use
- Designing/structuring marketing or product web pages for a project

## Inputs Required
- `06-ui-design-system`, `04-design-tokens`, `15-brand-voice-and-copy` (for real copy tone)

## Procedure
1. For each page type needed (homepage, landing/campaign page, pricing, product/feature page, blog
   index + post, login/signup, dashboard/app-shell), define section-by-section layout: purpose,
   components used (from `06-ui-design-system`), responsive behavior at the breakpoints in tokens.
2. Note the primary CTA per page and how it follows `15-brand-voice-and-copy` rules.
3. Provide a simple wireframe-level description (sections top to bottom) rather than pixel mockups
   unless the user asks for HTML.

## Output
- `brand/<slug>/07-website-system/website-system.md`
- Optional: `brand/<slug>/07-website-system/pages/*.html` static examples using tokens as CSS vars

## Consistency Rules
- Only use components/tokens already defined; if a page needs something new, add it to
  `06-ui-design-system`/`04-design-tokens` first.
