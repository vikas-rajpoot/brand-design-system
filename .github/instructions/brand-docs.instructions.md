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
- Use tables for enumerable rules (color list, type scale, spacing scale, do/don't pairs).
- End with a short "Usage" or "Don't" section — concrete positive and negative examples beat prose.
