---
name: email-system
description: 'Use when defining templates for marketing emails, transactional emails, newsletters, and email signatures for a brand. Presents cohesive email template options with pros & cons.'
---
# Email System

## When to Use
- Standardizing email communications, newsletter templates, and corporate signatures

## Inputs Required
- `00-brand-foundation`, `01-logo-system`, `02-color-system`, `03-typography-system`

## Interactive Decision-Gate Procedure
1. Never generate email templates in one go.
2. Present **2–3 distinct, cohesive email layout options** (e.g. Minimal Plain-Text Hybrid vs. Card-Structured Newsletter vs. High-Conversion Hero Promo):
   - For each option:
     - **Layout Anatomy**: 600px container, header lockup, bulletproof CTA button, footer compliance.
     - **Template Variants**: Transactional (receipt/password reset), Marketing announcement, Multi-story newsletter, Team signature block.
     - **Brand Cohesion Rationale**: How the tone and visual balance align with the brand's customer communication principles.
     - **Pros**: Client rendering resilience (Outlook/Apple Mail), mobile clickability, fast loading.
     - **Cons**: Design constraints for email client tables, dark mode inversion handling.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects an email template direction (*"this one selected"* or provides refinements), write `brand/<slug>/12-email-system/email-system.md` with `status: approved`.

## Output
- `brand/<slug>/12-email-system/email-system.md`
- Optional: `brand/<slug>/12-email-system/templates/*.html`

## Consistency Rules
- Colors and typography must strictly map to approved brand tokens.
