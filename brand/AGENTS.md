# Brand Directory Scoped Guidelines

These rules apply to all files and directories under `brand/`.

## Product Intake
- Each project must keep its user-authored product packet in `brand/<project-slug>/product/`: `BRAND-BRIEF.md`, `01-strategy-foundation.md`, `02-brand-positioning.md`, `03-messaging-and-market.md`, and `04-decisions-and-questions.md`.
- Do not create a preview, foundation, token, or subsystem for a project without its complete, user-confirmed packet. If more than one project has a complete packet, ask the user which slug to work on.

## Interactive Decision Gate
- **No Direct Generation in One Go**: No document, token, or asset may be written to a project directory without first presenting 2–4 cohesive options with pros and cons, receiving user feedback, and getting explicit user selection ("this one selected").
- **Cohesiveness Enforcement**: All proposed options and resulting files must demonstrably derive from approved foundation choices and existing tokens.


## Design Token Layering & Integrity

When authoring or modifying `brand/**/04-design-tokens/tokens.json`:
- **Strict Layers**:
  1. `primitive`: Raw values only (`color.blue.500 = #2563eb`, `space.4 = 16px`).
  2. `semantic`: References a single primitive (`color.bg.brand -> color.blue.500`). Must provide both `light` and `dark` themes for colors.
  3. `component`: References a single semantic token (`button.primary.bg -> color.bg.brand`).
- **Naming**: `category.role.variant` (e.g. `color.text.muted`, `radius.card`, `shadow.md`).
- **Validation**: No orphaned references, cyclic dependencies, or duplicate token names.

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

