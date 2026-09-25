# Brand Directory Scoped Guidelines

These rules apply to all files and directories under `brand/`.

## Product Intake
- Each project must keep its user-authored product packet in `brand/<project-slug>/product/`: `BRAND-BRIEF.md`, `01-strategy-foundation.md`, `02-brand-positioning.md`, `03-messaging-and-market.md`, `04-decisions-and-questions.md`, `05-launch-scope-and-capabilities.md`, and `06-trust-and-data-flows.md`.
- Do not create a preview, foundation, token, or subsystem for a project without its confirmed packet (all seven files at `status: approved`). If more than one project has a confirmed packet, ask the user which slug to work on.

## Reference Screens
- After intake, run `reference-screens` before any numbered subsystem. The selected neutral fixture lives at `product/reference-screens.md`; its proposal history lives in `options/product-reference-screens-v<n>.html`.
- Keep the approved tasks, states, sample content, and viewports constant when comparing later digital visual-system options. Reference screens are evaluation fixtures, not approval of final color, typography, components, or navigation.

## Interactive Decision Gate
- **No Direct Generation in One Go**: No document, token, or asset may be written to a project directory without first passing its gate: decision steps present 2–4 cohesive options with pros and cons; compile steps (`04`, `16`–`20`) present one preview. Either way, wait for explicit user approval ("Concept 1 selected").
- **Run Order**: Follow the run order and prerequisites in the root [AGENTS.md](../AGENTS.md); folder numbers are IDs, not the order.
- **Cohesiveness Enforcement**: All proposed options and resulting files must demonstrably derive from approved foundation choices and existing tokens.


## Design Token Layering & Integrity

When authoring or modifying `brand/**/04-design-tokens/tokens.json`:
- **Strict Layers**:
  1. `primitive`: Raw values only (`color.blue.500 = #2563eb`, `space.4 = 16px`).
  2. `semantic`: References a single primitive (`color.bg.brand -> color.blue.500`). Must provide both `light` and `dark` themes for colors.
  3. `component`: References a single semantic token (`button.primary.bg -> color.bg.brand`).
- **Naming**: `category.role.variant` (e.g. `color.text.muted`, `radius.card`, `shadow.md`). A name repeats only as a light/dark pair; every `id` is unique.
- **Format & Validation**: Follow [tokens.schema.json](_template/tokens.schema.json) and check with `node .agents/scripts/brand-check.mjs <file>` (no orphaned references, wrong layers, or duplicate ids). Generate `tokens.css` and the DTCG files with `node .agents/scripts/tokens-export.mjs <slug>`; never hand-edit them.

## Brand Documentation Conventions

When authoring or modifying Markdown files under `brand/**/*.md`:
- **Frontmatter**: Must include:
  ```yaml
  ---
  status: draft # or approved
  version: 1
  owner: <subsystem-name>
  ---
  ```
- **Single Focus**: One file per decision domain. Never duplicate or copy-paste values from other systems; link via relative Markdown URLs (e.g. `../04-design-tokens/tokens.json`).
- **Tables**: Present enumerable values (colors, typography scales, spacing) in tables.
- **Examples**: Include positive and negative (do / don't) examples.

## AI-Ready Specification

- `brand/<project-slug>/18-ai-ready-spec/brand-spec.json` must always be valid JSON conforming to `brand/_template/ai-ready-spec.schema.json`.
