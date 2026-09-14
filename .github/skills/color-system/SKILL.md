---
name: color-system
description: 'Use when defining primary/secondary/accent/neutral/semantic colors and light/dark theme values for a brand. Presents cohesive palette options with pros & cons.'
description: 'Define primary, secondary, accent, neutral, and semantic colors, and light/dark theme values using interactive HTML options and an immutable archive.'
---
# Color System

## When to Use
- Establishing or revising the brand's color palette and theme behavior
- Establishing or revising the brand's color palette, syntax highlighting colors, and theme behavior

## Inputs Required
- `00-brand-foundation` (approved personality and tone directly dictate color temperature, saturation, and contrast)
- `01-logo-system` (harmonize with approved logo lockups and marks)

## Interactive Decision-Gate Procedure
1. Never generate the color system in one go.
2. Present **2–3 distinct, cohesive color palette directions**:
1. **Never generate the color system in one go.**
2. **Present 2–3 distinct, cohesive color palette directions**:
   - Compile all palette options into a self-contained interactive preview in `brand/<slug>/options/02-color-system-v1.html` (or `-v2.html` on revisions).
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
     - **Interactive Swatch Previews**: Primary, Secondary, Accent, and Neutral ramps (50–900).
     - **Semantic System**: Success, warning, danger, and info colors.
     - **Theme Previews**: Live light and dark mode toggles with realistic UI surfaces.
     - **WCAG Contrast Ratios**: Automated contrast badges (AA / AAA compliance).
     - **Brand Cohesion Rationale**: How this palette expresses approved foundation personality traits.
     - **Pros & Cons**: Emotional impact, contrast fidelity, and trade-offs.
3. **Dedicated Immutable Archive**:
   - Save in `brand/<slug>/options/` with sequential numbering.
   - **NEVER update/overwrite or delete** existing option files. All revisions are append-only.
4. **Zero Premature Writes**:
   - Do NOT write or create any files in `brand/<slug>/02-color-system/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a palette (*"Concept 1 selected"*):
   - Write `brand/<slug>/02-color-system/color-system.md` with `status: approved`.
   - Prepare primitive color tokens ready for `design-tokens`.

## Output
- `brand/<slug>/02-color-system/color-system.md` (palette tables, light/dark theme table, contrast notes, do/don't usage examples)
- `brand/<slug>/options/02-color-system-v<n>.html` (Immutable options archive)
- `brand/<slug>/02-color-system/color-system.md` (Committed only after selection)

## Consistency Rules
- Once `04-design-tokens/tokens.json` exists, this doc must match its `color.*` primitives exactly.
- Once `04-design-tokens/tokens.json` exists, `02-color-system/color-system.md` must match its `color.*` primitives exactly.
