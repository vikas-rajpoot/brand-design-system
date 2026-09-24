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
- Approved `product/reference-screens.md` for the compiled token application preview
- If one is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).

## Compile-and-Review Procedure
1. **Never write tokens without user review.**
2. Compile the 3-layer architecture from the approved sources only, in the exact format of [tokens.schema.json](../../../brand/_template/tokens.schema.json), applying the token invariants below:
   - `primitive`: Raw values from the approved palette, type scale, and visual-style values.
   - `semantic`: Role-based tokens referencing primitives; colors as a `light` + `dark` pair.
   - `component`: Component tokens referencing semantic tokens.
3. If a needed value has no approved source, stop and flag it. Send the user back to the owning subsystem instead of inventing a value.
4. Write the compiled tokens to `brand/<slug>/options/04-design-tokens-v<n>.tokens.json` and make sure `node .agents/scripts/brand-check.mjs <that file>` passes. Fix problems in a new `-v<n>` draft, never by editing an old one.
5. Present the result in a self-contained preview at `brand/<slug>/options/04-design-tokens-v<n>.html`, built from that draft, with an interactive token inspector, a light/dark toggle, WCAG contrast results for every text/background pair, and the approved reference screens rendered from the compiled tokens.
6. **Dedicated Immutable Archive**: **NEVER update/overwrite or delete** existing option files. All history is append-only.
7. **Zero Premature Writes**: Do NOT write or create any files in `brand/<slug>/04-design-tokens/` until the user approves.
8. **STOP and wait for explicit approval** (e.g. *"Tokens approved"*). If the user wants a value changed, update the owning subsystem doc with their explicit approval (bump its `version`), then re-compile into the next `-v<n>` draft and preview.
9. Only after approval:
   - Copy the approved draft to `brand/<slug>/04-design-tokens/tokens.json` unchanged.
   - Run `node .agents/scripts/tokens-export.mjs <slug>` to generate `tokens.css`, `tokens.dtcg.json`, and `tokens.dark.dtcg.json`. Never write or edit these by hand.
   - Write `brand/<slug>/04-design-tokens/enforcement.md` (`status: approved`): linter rules that block raw hex/px values, the nested-radius rule, and the contrast checks to run.

## Output
- `brand/<slug>/options/04-design-tokens-v<n>.tokens.json` and `-v<n>.html` (immutable options archive)
- `brand/<slug>/04-design-tokens/tokens.json` (written only after approval)
- `brand/<slug>/04-design-tokens/tokens.css`, `tokens.dtcg.json`, `tokens.dark.dtcg.json` (generated)
- `brand/<slug>/04-design-tokens/enforcement.md`

## Consistency Rules
- Never hardcode a raw value in semantic/component layers — strictly reference.
- `tokens.json` must stay in sync with `02-color-system`, `03-typography-system`, and `05-visual-style`; when one of them changes, re-compile.
- **Token Invariants**: Must define a `layers.*` z-index scale, `size.touch-target.min` (at least 44px), and `font.scale.max`; keep all spacing on the 4pt grid; follow nested radius math (`inner = outer - padding`). The checker enforces all but the radius rule.
