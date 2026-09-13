---
name: ui-design-system
description: 'Use when defining reusable UI components — buttons, inputs, cards, navigation, modals, tables, forms, alerts, tabs, badges, loaders — and their states for a brand.'
---
# UI Design System

## When to Use
- Building the component library that website/app systems will reuse

## Inputs Required
- `04-design-tokens` (component tokens must exist or be created here), `05-visual-style`

## Procedure
1. For each component (buttons, inputs, selects, checkboxes/radios, cards, navigation/navbar,
   modals/dialogs, tables, forms, alerts/toasts, tabs, badges/chips, loaders/skeletons, tooltips,
   pagination), define: anatomy, variants (primary/secondary/ghost/destructive, sizes), and states
   (default/hover/focus/active/disabled/loading/error).
2. Reference `component.*` design tokens for every visual property; add missing component tokens to
   `04-design-tokens` rather than hardcoding values here.
3. Define accessibility baseline per component (focus ring visible, min touch target ~44px, form
   error association).
4. Provide one annotated example per component (states side by side) described in Markdown/HTML
   snippet form.

## Output
- `brand/<slug>/06-ui-design-system/ui-design-system.md`
- `brand/<slug>/06-ui-design-system/components/*.html` (optional static markup examples, tokens-only CSS)

## Consistency Rules
- No component may introduce a color/spacing/radius value that isn't a token reference.
