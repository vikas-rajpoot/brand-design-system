---
name: website-system
description: 'Use when designing standard web layouts — homepage, landing pages, pricing, product pages, blog, login/signup, dashboard — for a brand.'
description: 'Use when designing standard web layouts — homepage, landing pages, pricing, product pages, blog, login/signup, dashboard — for a brand. Presents cohesive layout options with pros & cons.'
---
# Website System

## When to Use
- Designing/structuring marketing or product web pages for a project
- Designing and structuring marketing or product web pages for a project

## Inputs Required
- `06-ui-design-system`, `04-design-tokens`, `15-brand-voice-and-copy` (for real copy tone)
- `04-design-tokens`, `05-visual-style`, `06-ui-design-system`

## Procedure
1. For each page type needed (homepage, landing/campaign page, pricing, product/feature page, blog
   index + post, login/signup, dashboard/app-shell), define section-by-section layout: purpose,
   components used (from `06-ui-design-system`), responsive behavior at the breakpoints in tokens.
2. Note the primary CTA per page and how it follows `15-brand-voice-and-copy` rules.
3. Provide a simple wireframe-level description (sections top to bottom) rather than pixel mockups
   unless the user asks for HTML.
## Interactive Decision-Gate Procedure
1. Never generate website templates or layouts in one go.
2. Present **2–3 distinct, cohesive layout architecture options** (e.g. for Homepage and Key Landing Pages):
   - For each option:
     - **Structure & Narrative Flow**: Section-by-section sequencing (Hero, Social Proof, Core Features, Interactive Demo, Pricing, Final CTA, Footer).
     - **Component Composition**: How approved UI components and tokens are assembled.
     - **Brand Cohesion Rationale**: How the layout storytelling reinforces brand positioning and voice.
     - **Pros**: Conversion focus, clarity, scannability, mobile responsiveness.
     - **Cons**: Content production demands, density vs. breathing room trade-offs.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a layout direction (*"this one selected"* or provides adjustments), write `brand/<slug>/07-website-system/website-system.md` with `status: approved`.

## Output
- `brand/<slug>/07-website-system/website-system.md`
- Optional: `brand/<slug>/07-website-system/pages/*.html` static examples using tokens as CSS vars
- Optional: `brand/<slug>/07-website-system/pages/*.html` static examples

## Consistency Rules
- Only use components/tokens already defined; if a page needs something new, add it to
  `06-ui-design-system`/`04-design-tokens` first.
- Layouts must strictly compose approved components from `06-ui-design-system` and design tokens from `04-design-tokens`.
