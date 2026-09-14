---
description: "Use when writing brand documentation Markdown files (foundation, guidelines, voice docs) under brand/. Covers frontmatter and structure conventions."
applyTo: "brand/**/*.md"
---
# Brand Doc Conventions

- Start every doc with frontmatter: `status: draft|approved`, `version: <n>`, `owner: <system name>`.
- Start every doc with frontmatter: `status: draft|approved`, `version: <n>`, `owner: <system name>`. Set `status: draft` during review and `status: approved` only when the user explicitly selects and confirms the option.
- One doc = one decision area. Don't mix e.g. color rules into the typography doc.
- Reference other systems by relative link, don't restate their content
  (e.g. link to `../04-design-tokens/tokens.json` instead of copy-pasting hex values).
- Reference other systems by relative link, don't restate their content (e.g. link to `../04-design-tokens/tokens.json` instead of copy-pasting hex values).
- Record the selected option direction and its cohesion rationale explaining how it aligns with previously approved foundation values and tokens.
- Pre-Commit Options Archive & Immutability: Prior to committing any subsystem Markdown file, all proposed options must be published as self-contained interactive HTML previews under `brand/<project-slug>/options/` (e.g. `01-logo-system-v1.html`). Option files are strictly immutable (never overwritten, never deleted; append-only revisions via `-v2.html`).
- Approval Gate & Zero Premature Writes: Zero files are committed to official subsystem directories during option review. Once the user explicitly selects and confirms a direction (*"Concept 1 selected"*), the official document is written and marked `status: approved`.
- Use tables for enumerable rules (color list, type scale, spacing scale, do/don't pairs).
- End with a short "Usage" or "Don't" section — concrete positive and negative examples beat prose.
