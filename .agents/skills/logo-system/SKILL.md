---
name: logo-system
description: 'Design the primary logo, alternate lockups, icon/mark, light/dark versions, clear space, minimum size, and logo usage/misuse rules using interactive HTML options and an immutable archive.'
---
# Logo System

## When to Use
- Creating or revising the primary logo, wordmark, icon/mark, or lockup variants

## Inputs Required
- `00-brand-foundation` (personality, values, name usage rules)
- `02-color-system` and `03-typography-system`, both approved (logo colors and lettering come only from these). If either is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).

## Interactive Decision-Gate Procedure
1. **Never generate official logo files in one go.**
2. **Present 2–4 distinct, cohesive logo concepts**:
   - Compile all concepts into a self-contained interactive preview in `brand/<slug>/options/01-logo-system-v1.html` (or `-v2.html` on revisions).
   - For each concept:
     - **Visual Metaphor & Structure**: Live SVG renders for horizontal lockup, stacked lockup, app icon, and favicon, plus any product-specific marks the packet calls for (e.g. a CLI badge for a developer tool).
     - **Palette & Typography**: How the mark uses the approved colors and typefaces.
     - **Contextual Mockups**: Views on the product's real surfaces from the packet (e.g. a phone frame and a desktop window).
     - **Brand Cohesion Rationale**: How this concept visually embodies approved foundation personality and values.
     - **Pros & Cons**: Scalability, favicon legibility, emotional resonance, and trade-offs.
3. **Dedicated Immutable Archive**:
   - Save in `brand/<slug>/options/` with sequential numbering.
   - **NEVER update/overwrite or delete** existing option files. If revisions are requested, append a new version (`-v2.html`).
4. **Zero Premature Writes**:
   - Do NOT write or create any files in `brand/<slug>/01-logo-system/` until the user provides explicit selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a concept (*"Concept 1 selected"*):
   - Invoke `brand-asset-generator` to output production SVG files under `brand/<slug>/01-logo-system/logos/`.
   - Define clear space, minimum sizes, and 6–10 misuse rules.
   - Write `brand/<slug>/01-logo-system/logo-system.md` with `status: approved`.

## Output
- `brand/<slug>/options/01-logo-system-v<n>.html` (Immutable options archive)
- `brand/<slug>/01-logo-system/logos/*.svg` (Committed only after selection)
- `brand/<slug>/01-logo-system/logo-system.md` (Committed only after selection)

## Consistency Rules
- No color or font in a logo file may deviate from the approved `02-color-system` and `03-typography-system`.
