# Brand Document Conventions

Rules and formatting requirements for all Markdown documentation generated under `brand/`:

- **YAML Frontmatter**: Start every document with frontmatter specifying `status`, `version`, and `owner`:
  ```yaml
  ---
  status: draft # or approved
  version: 1
  owner: <subsystem name>
  ---
  ```
- **Single Responsibility**: One document per decision area. Do not mix color definitions into typography documents, or logo guidelines into voice documents.
- **Relative Linking**: Reference decisions in other subsystems via relative file links (e.g. `../04-design-tokens/tokens.json`) instead of copy-pasting hex codes, scales, or guidelines.
- **Structured Content**: Use Markdown tables for all enumerable rules (color palettes, typography scale, spacing steps, do/don't pairs).
- **Concrete Guidance**: End every document with a short "Usage Examples" and "Anti-patterns / Don'ts" section demonstrating positive and negative applications.

