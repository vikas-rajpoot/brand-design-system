---
name: design-tokens
description: 'Produce or update machine-readable design tokens (primitive -> semantic -> component) using interactive HTML options and an immutable archive.'
---
# Design Tokens

See [rules/design-tokens.md](../../rules/design-tokens.md) and [AGENTS.md](../../../AGENTS.md) for schema and naming rules.

## When to Use
- After `02-color-system` and `03-typography-system` are explicitly approved by the user
- Establishing or updating spatial scales, corner radii, shadows, and motion tokens

## Inputs Required
- Approved `00-brand-foundation`, `02-color-system`, and `03-typography-system`

## Interactive Decision-Gate Procedure
1. **Never generate tokens in one go without user review.**
2. **Present 2–3 options for spatial, radius, and elevation token architectures**:
   - Compile all token options into a self-contained interactive preview in `brand/<slug>/options/04-design-tokens-v1.html` (or `-v2.html` on revisions).
   - e.g. **Option A: High-Density Engineered** (4px base grid, compact 4–6px radius, subtle hairline borders, 0ms–150ms instant motion curves).
   - e.g. **Option B: Modern Tactile Flow** (4/8px hybrid grid, 8–12px radius, luminous ambient glows, 200ms fluid spring curves).
   - For each option, include **Interactive Token Inspector**, **Brand Cohesion Rationale**, **Pros**, and **Cons**.
3. **Dedicated Immutable Archive**:
   - Save in `brand/<slug>/options/` with sequential numbering.
   - **NEVER update/overwrite or delete** existing option files. All history is strictly append-only.
4. **Zero Premature Writes**:
   - Do NOT write or create any files in `brand/<slug>/04-design-tokens/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly confirms (*"Option A selected"*):
   - Compile the 3-layer architecture into `tokens.json` (`primitive -> semantic -> component`):
     - `primitive`: Raw values derived from selected colors, fonts, and spatial scale.
     - `semantic`: Role-based tokens referencing primitives, with `light` and `dark` variants.
     - `component`: Component tokens referencing semantic tokens.
   - Enforce system invariants: Ensure z-index layering (`layers.*`), strict 4pt spacing grids, and automated CI contrast checks are defined.
   - Write `brand/<slug>/04-design-tokens/tokens.json` and optional `tokens.css` with `status: approved`.
   - Write `brand/<slug>/04-design-tokens/enforcement.md` (Linter rules blocking raw hex/px, CI contrast scripts).

## Output
- `brand/<slug>/options/04-design-tokens-v<n>.html` (Immutable options archive)
- `brand/<slug>/04-design-tokens/tokens.json` (Committed only after selection)
- `brand/<slug>/04-design-tokens/tokens.css` (Optional export)

## Consistency Rules
- Never hardcode a raw value in semantic/component layers — strictly reference.
- Any change here must stay in sync with `02-color-system` and `03-typography-system`.
- **Token Invariants**: Must define `layers.*` z-index scale, nested radius math (`inner = outer - padding`), 44pt touch targets for mobile, font-scaling max multipliers, and strict 4pt spatial grid.
