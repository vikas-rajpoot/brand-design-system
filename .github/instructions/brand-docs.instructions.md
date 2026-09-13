---
description: "Use when writing brand documentation Markdown files (foundation, guidelines, voice docs) under brand/. Covers frontmatter and structure conventions."
applyTo: "brand/**/*.md"
---
# Brand Doc Conventions

- Start every doc with frontmatter: `status: draft|approved`, `version: <n>`, `owner: <system name>`.
- One doc = one decision area. Don't mix e.g. color rules into the typography doc.
- Reference other systems by relative link, don't restate their content
  (e.g. link to `../04-design-tokens/tokens.json` instead of copy-pasting hex values).
- Use tables for enumerable rules (color list, type scale, spacing scale, do/don't pairs).
- End with a short "Usage" or "Don't" section — concrete positive and negative examples beat prose.
