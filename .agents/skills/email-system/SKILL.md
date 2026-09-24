---
name: email-system
description: 'Use when defining templates for marketing emails, transactional emails, newsletters, and email signatures for a brand. Presents cohesive email template options with pros & cons.'
---
# Email System

## When to Use
- Standardizing email communications, newsletter templates, and corporate signatures

## Inputs Required
- Approved `01-logo-system` and `04-design-tokens` (colors, fonts with web-safe fallbacks)
- Approved `15-brand-voice-and-copy` (subject lines, CTA wording)
- If an input is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).

## Interactive Decision-Gate Procedure
1. **Never generate email templates in one go.** First agree which email types are in scope (marketing/promo, transactional, newsletter, signature).
2. **Present 2–3 distinct, cohesive email layout options** (e.g. Minimal Plain-Text Hybrid vs. Card-Structured Newsletter vs. High-Conversion Hero Promo):
   - Compile all options into a self-contained interactive preview in `brand/<slug>/options/12-email-system-v1.html` (or the next `-vN.html` on revisions).
   - For each option:
     - **Layout Anatomy**: A ~600px container, header lockup, bulletproof (table/inline-CSS) CTA button, a footer with unsubscribe, social links, and address, and a web-safe font stack.
     - **Template Variants**: Transactional (receipt, confirmation, password reset), marketing announcement, multi-story newsletter, and signature block (name, title, logo, contact, disclaimer).
     - **Dark Mode**: How clients that auto-invert colors affect the design, and how the logo stays legible.
     - **Brand Cohesion Rationale**: How the tone and visual balance align with the brand's customer communication principles.
     - **Pros**: Client rendering resilience (Outlook/Apple Mail), mobile clickability, fast loading.
     - **Cons**: Design constraints of table layouts, dark mode inversion handling.
3. **Dedicated Immutable Archive**: Save in `brand/<slug>/options/`. **NEVER update/overwrite or delete** existing option files; revisions are append-only.
4. **Zero Premature Writes**: Do NOT write or create any files in `brand/<slug>/12-email-system/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a direction (*"Concept 1 selected"*):
   - Write `brand/<slug>/12-email-system/email-system.md` with `status: approved`, covering the email master, each in-scope template type, and dark-mode handling.
   - Optionally, add `brand/<slug>/12-email-system/templates/*.html` (table-based, inline-styled).

## Output
- `brand/<slug>/options/12-email-system-v<n>.html` (immutable options archive)
- `brand/<slug>/12-email-system/email-system.md` (committed only after selection)
- Optional: `brand/<slug>/12-email-system/templates/*.html` (table-based, inline-styled)

## Consistency Rules
- Colors and fonts trace to `04-design-tokens`. Email HTML must use inline styles, not the token CSS file directly (email client constraint) — document the manual sync step.
- The email signature layout is owned here; `21-corporate-visual-identity` references it.
