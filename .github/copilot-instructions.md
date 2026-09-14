# Brand OS Kit — Agent Instructions

This workspace generates **brand design systems** for arbitrary new projects/ideas. It is a Copilot
customization kit, not a single product.

## Hard rules

- Every generated artifact belongs to exactly one project: `brand/<project-slug>/`. Never write brand
  output to the repo root or mix two projects' files.
- Never invent a new project slug without confirming it with the user; derive it from the project
  name (kebab-case).
- **Never generate in one go**: No autonomous batch-generation of multiple subsystems or decisions. Work proceeds strictly through an interactive decision gate.
- **Mandatory Cohesive Options with Pros & Cons**: For each brand decision, present 2–4 cohesive options with Brand Cohesion Rationale, Pros, and Cons.
- **Explicit User Selection Gate**: Always wait for user feedback/confirmation (e.g. "this one selected") before writing/locking files and advancing to the next item.


## Source-of-truth order (highest first)

1. `brand/<project-slug>/00-brand-foundation/brand-foundation.md` (name, audience, positioning,
   personality, voice)
2. `brand/<project-slug>/04-design-tokens/tokens.json` (primitive → semantic → component tokens)
3. Any other already-generated subsystem file in that project
4. Skill defaults / this instructions file
5. Agent judgment — only when nothing above applies, and call it out as an assumption

If a later system would contradict an earlier approved one (e.g. a new page uses a color not in
tokens), stop and flag the conflict instead of silently introducing a new value.

## The 21-folder map

Each brand subsystem has a dedicated skill (`.github/skills/<name>`) and a numbered output folder.
Always check whether `00-brand-foundation` exists before generating anything else; if it doesn't,
run the `brand-foundation` skill first.

| # | Folder | Skill |
|---|--------|-------|
| 00 | brand-foundation | `brand-foundation` |
| 01 | logo-system | `logo-system` |
| 02 | color-system | `color-system` |
| 03 | typography-system | `typography-system` |
| 04 | design-tokens | `design-tokens` |
| 05 | visual-style | `visual-style` |
| 06 | ui-design-system | `ui-design-system` |
| 07 | website-system | `website-system` |
| 08 | app-system | `app-system` |
| 09 | social-media-system | `social-media-system` |
| 10 | presentation-system | `presentation-system` |
| 11 | document-system | `document-system` |
| 12 | email-system | `email-system` |
| 13 | marketing-assets | `marketing-assets` |
| 14 | diagrams-and-charts | `diagrams-and-charts` |
| 15 | brand-voice-and-copy | `brand-voice-and-copy` |
| 16 | asset-library | `asset-library` |
| 17 | brand-guidelines-site | `brand-guidelines-site` |
| 18 | ai-ready-spec | `ai-ready-spec` |
| 19 | templates | `templates-library` |
| 20 | approved-examples | `approved-examples` |

See [brand/README.md](../brand/README.md) for the folder template and [brand/_template](../brand/_template)
for the schema used by `ai-ready-spec`.

## Workflow

- New project from scratch: use the `brand-director` agent or `/brand-new-project` prompt — it
  interviews the user, then runs skills 00 → 20 in order, skipping any the user doesn't need.
- Adding/regenerating one subsystem for an existing project: `/brand-generate-system`.
  guides the user through an interactive decision-gate loop, offering 2–4 cohesive options with pros & cons
  at each step, waiting for explicit user selection before committing files, and never building in one go.
- Adding/regenerating one subsystem for an existing project: `/brand-generate-system`. Formulates
  cohesive options with pros and cons, waits for selection, then generates.
- Reviewing completeness/consistency: `brand-qa` agent or `/brand-audit`.
- Visual assets (logos, icons, illustrations) are produced as **specs the human/designer or an
  image-gen tool can execute** (SVG where feasible, otherwise detailed briefs) — see
  `brand-asset-generator` agent. Do not claim to have produced pixel-perfect artwork you cannot
  `brand-asset-generator` agent, executed only after the concept has been selected by the user. Do not claim to have produced pixel-perfect artwork you cannot
  actually render.


## Style

- Write brand docs in Markdown with YAML frontmatter (`status: draft|approved`, `version`).
- Write tokens/specs as JSON (see `design-tokens` and `ai-ready-spec` instructions for schema).
- Keep generated docs skimmable: short sections, tables for enumerable values (colors, sizes,
  spacing scale), code blocks for tokens/CSS/JSON.
