---
name: email-system
description: 'Use when defining templates for marketing emails, transactional emails, newsletters, and email signatures for a brand.'
---
# Email System

## When to Use
- Standardizing email templates and signatures

## Inputs Required
- `00-brand-foundation`, `02-color-system`, `03-typography-system` (web-safe fallback fonts), `01-logo-system`

## Procedure
1. Define an email master: header (logo, safe width ~600px), footer (unsubscribe, social links,
   address), button style (must be table/inline-CSS safe for email clients), web-safe font fallback
   stack.
2. Define template types: marketing/promo email, transactional (receipt/confirmation/reset), 
   newsletter (multi-section digest), signature (name, title, logo, contact, disclaimer).
3. Note dark-mode email client behavior (some clients auto-invert) and how to keep the logo legible.

## Output
- `brand/<slug>/12-email-system/email-system.md`
- Optional: `brand/<slug>/12-email-system/templates/*.html` (table-based, inline-styled)

## Consistency Rules
- Colors/fonts must trace to tokens; email HTML must use inline styles, not the token CSS file
  directly (email client constraint) — document the manual sync step.
