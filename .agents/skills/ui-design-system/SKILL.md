---
name: ui-design-system
description: 'Use when defining reusable UI components — buttons, inputs, cards, navigation, modals, tables, forms, alerts, tabs, badges, loaders — and their states for a brand.'
description: 'Use when defining reusable UI components — buttons, inputs, cards, navigation, modals, tables, forms, alerts, tabs, badges, loaders — and their states for a brand. Presents cohesive component styling options with pros & cons.'
---
# UI Design System

## When to Use
- Building the component library that website/app systems will reuse

## Inputs Required
- `04-design-tokens` (component tokens must exist or be created here), `05-visual-style`
- `04-design-tokens` (component tokens must exist or be created here)
- `05-visual-style` (shape language, depth, elevation)

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
## Interactive Decision-Gate Procedure
1. Never build the full UI system in one go.
2. Present **2–3 distinct, cohesive component styling options** (e.g. for primary buttons, input fields, cards, and navigation):
   - For each option:
     - **Component Anatomy & Treatment**: Variants (primary, secondary, outline, ghost), borders, fill opacity, padding density, focus rings, hover/active animations.
     - **Token Mapping**: How properties map strictly to approved semantic/component tokens.
     - **Brand Cohesion Rationale**: How the component style carries forward the approved visual style and brand personality.
     - **Pros**: Clear affordances, accessibility compliance, visual polish.
     - **Cons**: Design system complexity, density trade-offs.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a component styling direction (*"this one selected"* or provides refinements):
   - Document full component specs (buttons, inputs, cards, modals, tables, alerts, badges, loaders).
   - Write `brand/<slug>/06-ui-design-system/ui-design-system.md` with `status: approved`.
   - Update component tokens in `04-design-tokens/tokens.json`.

## Output
- `brand/<slug>/06-ui-design-system/ui-design-system.md`
- `brand/<slug>/06-ui-design-system/components/*.html` (optional static markup examples, tokens-only CSS)
- `brand/<slug>/06-ui-design-system/components/*.html` (optional static markup/CSS examples)

## Consistency Rules
- No component may introduce a color/spacing/radius value that isn't a token reference.
- Every component style must reference approved semantic tokens. No unmapped hex values or arbitrary paddings.
