---
name: color-system
description: 'Use when defining primary/secondary/accent/neutral/semantic colors and light/dark theme values for a brand. Presents cohesive palette options with pros & cons.'
---
# Color System

## When to Use
- Establishing or revising the brand's color palette and theme behavior

## Inputs Required
- `00-brand-foundation` (approved personality and tone directly dictate color temperature, saturation, and contrast)

## Interactive Decision-Gate Procedure
1. Never generate the color system in one go.
2. Present **2–3 distinct, cohesive color palette directions**:
   - For each palette option:
     - **Primary & Secondary Hues**: Base colors and tint/shade ramp (50–900).
     - **Accent & Neutrals**: Complementary accents and warm/cool gray ramp.
     - **Semantic System**: Success, warning, danger, info colors.
     - **Light & Dark Theme Behavior**: Role-based contrast mappings.
     - **WCAG Accessibility**: Minimum 4.5:1 for body copy, 3:1 for large UI elements.
     - **Brand Cohesion Rationale**: How this palette expresses the approved foundation personality traits.
     - **Pros**: Emotional impact, visibility, brand memorability.
     - **Cons**: Potential pitfalls, industry color clichés, or strict contrast considerations.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a palette (*"this one selected"* or provides adjustments), write `brand/<slug>/02-color-system/color-system.md` with `status: approved`.
5. Prepare primitive color tokens ready for `design-tokens`.

## Output
- `brand/<slug>/02-color-system/color-system.md` (palette tables, light/dark theme table, contrast notes, do/don't usage examples)

## Consistency Rules
- Once `04-design-tokens/tokens.json` exists, this doc must match its `color.*` primitives exactly.
