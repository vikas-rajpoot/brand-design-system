---
name: color-system
description: 'Define primary, secondary, accent, neutral, and semantic colors, and light/dark theme values using interactive HTML options and an immutable archive.'
---
# Color System

## When to Use
- Establishing or revising the brand's color palette and theme behavior, plus any product-specific palettes the packet calls for (e.g. syntax highlighting for a developer tool)

## Inputs Required
- `00-brand-foundation` (approved personality and tone directly dictate color temperature, saturation, and contrast)
- If the foundation is not approved, stop and run `brand-foundation` first (run order in [AGENTS.md](../../../AGENTS.md)). The logo comes after this step and uses this palette.

## Interactive Decision-Gate Procedure
1. **Never generate the color system in one go.**
2. **Present 2–3 distinct, cohesive color palette directions**:
   - Compile all palette options into a self-contained interactive preview in `brand/<slug>/options/02-color-system-v1.html` (or `-v2.html` on revisions).
   - For each palette option:
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
- `brand/<slug>/options/02-color-system-v<n>.html` (Immutable options archive)
- `brand/<slug>/02-color-system/color-system.md` (Committed only after selection)

## Consistency Rules
- Once `04-design-tokens/tokens.json` exists, `02-color-system/color-system.md` must match its `color.*` primitives exactly.
