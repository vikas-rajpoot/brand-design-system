---
name: design-tokens
description: 'Compile approved color, typography, and visual-style decisions into machine-readable design tokens (primitive -> semantic -> component), reviewed in an interactive HTML preview before anything is written.'
---
# Design Tokens

See [design-tokens.instructions.md](../../../.github/instructions/design-tokens.instructions.md) and [AGENTS.md](../../../AGENTS.md) for schema and naming rules.

This is a **compile step**: it encodes decisions that are already approved and never introduces a new brand value, so it presents one preview for approval instead of 2–4 options.

## When to Use
- After `02-color-system`, `03-typography-system`, and `05-visual-style` are approved
- Re-compiling after one of those subsystems is revised

## Inputs Required
- Approved `02-color-system` (palette), `03-typography-system` (families, scale, weights, line heights), and `05-visual-style` (radius, borders, shadows, spacing base, motion)
- If one is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).

## Compile-and-Review Procedure
1. **Never write tokens without user review.**
2. Compile the 3-layer architecture from the approved sources only, applying the token invariants below:
   - `primitive`: Raw values from the approved palette, type scale, and visual-style values.
   - `semantic`: Role-based tokens referencing primitives, with `light` and `dark` variants.
   - `component`: Component tokens referencing semantic tokens.
3. If a needed value has no approved source, stop and flag it. Send the user back to the owning subsystem instead of inventing a value.
4. Present the result in a self-contained preview at `brand/<slug>/options/04-design-tokens-v1.html` (or the next `-vN.html` on revisions) with an interactive token inspector, a light/dark toggle, and WCAG contrast results for every text/background pair.
5. **Dedicated Immutable Archive**: **NEVER update/overwrite or delete** existing option files. All history is append-only.
6. **Zero Premature Writes**: Do NOT write or create any files in `brand/<slug>/04-design-tokens/` until the user approves.
7. **STOP and wait for explicit approval** (e.g. *"Tokens approved"*). If the user wants a value changed, update the owning subsystem doc with their explicit approval (bump its `version`), then re-compile into the next `-vN.html`.
8. Only after approval:
   - Write `brand/<slug>/04-design-tokens/tokens.json` and an optional `tokens.css` export.
   - Write `brand/<slug>/04-design-tokens/enforcement.md` (`status: approved`): linter rules that block raw hex/px values, and the contrast checks to run.

## Output
- `brand/<slug>/options/04-design-tokens-v<n>.html` (immutable options archive)
- `brand/<slug>/04-design-tokens/tokens.json` (written only after approval)
- `brand/<slug>/04-design-tokens/tokens.css` (optional export)
- `brand/<slug>/04-design-tokens/enforcement.md`

## Consistency Rules
- Never hardcode a raw value in semantic/component layers — strictly reference.
- `tokens.json` must stay in sync with `02-color-system`, `03-typography-system`, and `05-visual-style`; when one of them changes, re-compile.
- **Token Invariants**: Must define `layers.*` z-index scale, nested radius math (`inner = outer - padding`), 44pt touch targets for mobile, font-scaling max multipliers, and strict 4pt spatial grid.
