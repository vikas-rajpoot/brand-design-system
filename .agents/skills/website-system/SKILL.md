---
name: website-system
description: 'Use when designing standard web layouts — homepage, landing pages, pricing, product pages, blog, login/signup, dashboard — for a brand. Presents cohesive layout options with pros & cons.'
---
# Website System

## When to Use
- Designing and structuring marketing or product web pages for a project

## Inputs Required
- Approved `06-ui-design-system` (components) and `04-design-tokens` (values, breakpoints)
- Approved `15-brand-voice-and-copy` (real copy tone, CTA rules)
- The product packet, to decide which page types the product actually needs
- If an input is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).

## Interactive Decision-Gate Procedure
1. **Never generate website layouts in one go.** First agree with the user which page types are in scope: homepage, landing/campaign page, pricing, product/feature page, blog index + post, login/signup, dashboard/app shell.
2. **Present 2–3 distinct, cohesive layout architecture options** for the homepage and key landing pages:
   - Compile all options into a self-contained interactive preview in `brand/<slug>/options/07-website-system-v1.html` (or the next `-vN.html` on revisions).
   - For each option:
     - **Structure & Narrative Flow**: Section-by-section order (e.g. hero, social proof, core features, demo, pricing, final CTA, footer) with each section's purpose.
     - **Component Composition**: Which approved `06-ui-design-system` components and tokens each section uses.
     - **Responsive Behavior**: How sections adapt at the token breakpoints.
     - **Primary CTA**: The main action per page, worded by `15-brand-voice-and-copy` rules.
     - **Brand Cohesion Rationale**: How the layout storytelling reinforces brand positioning and voice.
     - **Pros**: Conversion focus, clarity, scannability, mobile responsiveness.
     - **Cons**: Content production demands, density vs. breathing room trade-offs.
3. **Dedicated Immutable Archive**: Save in `brand/<slug>/options/`. **NEVER update/overwrite or delete** existing option files; revisions are append-only.
4. **Zero Premature Writes**: Do NOT write or create any files in `brand/<slug>/07-website-system/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a direction (*"Concept 1 selected"*):
   - Write `brand/<slug>/07-website-system/website-system.md` with `status: approved`: a wireframe-level, section-by-section spec for every in-scope page type (purpose, components, responsive behavior, primary CTA).
   - Only if the user asks, add static examples in `brand/<slug>/07-website-system/pages/*.html` that use tokens as CSS variables.

## Output
- `brand/<slug>/options/07-website-system-v<n>.html` (immutable options archive)
- `brand/<slug>/07-website-system/website-system.md` (committed only after selection)
- Optional: `brand/<slug>/07-website-system/pages/*.html`

## Consistency Rules
- Layouts compose only approved components and tokens. If a page needs something new, add it to `06-ui-design-system` (and its tokens) first.
