---
name: ui-design-system
description: 'Use when defining reusable UI components — buttons, inputs, cards, navigation, modals, tables, forms, alerts, tabs, badges, loaders — and their states for a brand. Presents cohesive component styling options with pros & cons.'
description: 'Define reusable UI components (buttons, inputs, cards, navigation, modals, badges, loaders, diff views) using interactive HTML options and an immutable archive.'
---
# UI Design System

## When to Use
- Building the component library that website/app systems will reuse
- Building the component library that website, app, and IDE systems will reuse

## Inputs Required
- `04-design-tokens` (component tokens must exist or be created here)
- `05-visual-style` (shape language, depth, elevation)

## Interactive Decision-Gate Procedure
1. Never build the full UI system in one go.
2. Present **2–3 distinct, cohesive component styling options** (e.g. for primary buttons, input fields, cards, and navigation):
1. **Never build the full UI system in one go.**
2. **Present 2–3 distinct, cohesive component styling options**:
   - Compile all component styling options into a self-contained interactive preview in `brand/<slug>/options/06-ui-design-system-v1.html` (or `-v2.html` on revisions).
   - For each option:
     - **Component Anatomy & Treatment**: Variants (primary, secondary, outline, ghost), borders, fill opacity, padding density, focus rings, hover/active animations.
     - **Token Mapping**: How properties map strictly to approved semantic/component tokens.
     - **Brand Cohesion Rationale**: How the component style carries forward the approved visual style and brand personality.
     - **Pros**: Clear affordances, accessibility compliance, visual polish.
     - **Cons**: Design system complexity, density trade-offs.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a component styling direction (*"this one selected"* or provides refinements):
   - Document full component specs (buttons, inputs, cards, modals, tables, alerts, badges, loaders).
     - **Interactive Live Components**: Buttons, text fields, cards, tabs, badges, diff viewers, and agent telemetry pills with working hover/active/focus states.
     - **Touch Affordances**: Minimum 44x44pt touch targets for mobile alongside compact desktop density modes.
     - **Token Traceability**: Clear mapping to semantic tokens.
     - **Brand Cohesion Rationale**: How the component styling carries forward foundation traits and visual style.
     - **Pros & Cons**: Ergonomics, accessibility, and density trade-offs.
3. **Dedicated Immutable Archive**:
   - Save in `brand/<slug>/options/` with sequential numbering.
   - **NEVER update/overwrite or delete** existing option files. All revisions are append-only.
4. **Zero Premature Writes**:
   - Do NOT write or create any files in `brand/<slug>/06-ui-design-system/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a direction (*"Concept 1 selected"*):
   - Write `brand/<slug>/06-ui-design-system/ui-design-system.md` with `status: approved`.
   - Update component tokens in `04-design-tokens/tokens.json`.

## Output
- `brand/<slug>/06-ui-design-system/ui-design-system.md`
- `brand/<slug>/06-ui-design-system/components/*.html` (optional static markup/CSS examples)
- `brand/<slug>/options/06-ui-design-system-v<n>.html` (Immutable options archive)
- `brand/<slug>/06-ui-design-system/ui-design-system.md` (Committed only after selection)

## Consistency Rules
- Every component style must reference approved semantic tokens. No unmapped hex values or arbitrary paddings.
