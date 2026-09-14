---
name: ui-design-system
description: 'Use when defining reusable UI components — buttons, inputs, cards, navigation, modals, tables, forms, alerts, tabs, badges, loaders — and their states for a brand. Presents cohesive component styling options with pros & cons.'
---
# UI Design System

## When to Use
- Building the component library that website/app systems will reuse

## Inputs Required
- `04-design-tokens` (component tokens must exist or be created here)
- `05-visual-style` (shape language, depth, elevation)

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
- `brand/<slug>/06-ui-design-system/components/*.html` (optional static markup/CSS examples)

## Consistency Rules
- Every component style must reference approved semantic tokens. No unmapped hex values or arbitrary paddings.
