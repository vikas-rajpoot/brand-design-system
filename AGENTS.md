# Brand OS Kit — Antigravity Agent Guidelines

This workspace generates **brand design systems** for arbitrary new projects and ideas. It is an agentic customization kit providing custom agents, skills, hooks, and rules.

## Hard Rules

- **Single Project Boundary**: Every generated artifact belongs to exactly one project: `brand/<project-slug>/`. Never write brand output to the repository root or mix two projects' files.
- **Slug Confirmation**: Never invent a new project slug without confirming it with the user; derive it from the project name in kebab-case (e.g. `brand/acme-labs/`).

## Source-of-Truth Order (Highest Priority First)

1. `brand/<project-slug>/00-brand-foundation/brand-foundation.md` (name, audience, positioning, personality, voice)
2. `brand/<project-slug>/04-design-tokens/tokens.json` (primitive → semantic → component tokens)
3. Any other already-generated subsystem file in that project
4. Skill defaults and workspace rules
5. Agent judgment — only when nothing above applies, and explicitly stated as an assumption

If a later subsystem contradicts an earlier approved decision (e.g. a UI element introduces a hex code not in `tokens.json`), stop and flag the conflict rather than silently introducing a new value.

## The 21-Folder Map & Antigravity Skills

Each brand subsystem has a dedicated Antigravity skill in `.agents/skills/<name>/SKILL.md` and a numbered output directory:

| # | Folder | Antigravity Skill | Slash Command |
|---|--------|-------------------|---------------|
| 00 | `00-brand-foundation` | `brand-foundation` | `/brand-foundation` |
| 01 | `01-logo-system` | `logo-system` | `/logo-system` |
| 02 | `02-color-system` | `color-system` | `/color-system` |
| 03 | `03-typography-system` | `typography-system` | `/typography-system` |
| 04 | `04-design-tokens` | `design-tokens` | `/design-tokens` |
| 05 | `05-visual-style` | `visual-style` | `/visual-style` |
| 06 | `06-ui-design-system` | `ui-design-system` | `/ui-design-system` |
| 07 | `07-website-system` | `website-system` | `/website-system` |
| 08 | `08-app-system` | `app-system` | `/app-system` |
| 09 | `09-social-media-system` | `social-media-system` | `/social-media-system` |
| 10 | `10-presentation-system` | `presentation-system` | `/presentation-system` |
| 11 | `11-document-system` | `document-system` | `/document-system` |
| 12 | `12-email-system` | `email-system` | `/email-system` |
| 13 | `13-marketing-assets` | `marketing-assets` | `/marketing-assets` |
| 14 | `14-diagrams-and-charts` | `diagrams-and-charts` | `/diagrams-and-charts` |
| 15 | `15-brand-voice-and-copy` | `brand-voice-and-copy` | `/brand-voice-and-copy` |
| 16 | `16-asset-library` | `asset-library` | `/asset-library` |
| 17 | `17-brand-guidelines-site` | `brand-guidelines-site` | `/brand-guidelines-site` |
| 18 | `18-ai-ready-spec` | `ai-ready-spec` | `/ai-ready-spec` |
| 19 | `19-templates` | `templates-library` | `/templates-library` |
| 20 | `20-approved-examples` | `approved-examples` | `/approved-examples` |

Always check whether `00-brand-foundation` exists before generating any other subsystem. If it does not, invoke the `brand-foundation` skill first.

## Custom Agents & Workflows

- **End-to-End Orchestration**: Launch the `brand-director` agent or run the `/brand-new-project` slash command. It interviews the user, drafts foundation and design tokens, and runs through the 21 subsystems sequentially.
- **Single Subsystem Generation / Revision**: Run `/brand-generate-system` to build or update one subsystem for an existing project.
- **Auditing & Consistency**: Dispatch the `brand-qa` subagent or run `/brand-audit` to generate a checklist (`✅ | ⚠️ | ❌`) verifying folder completeness, token traceability, and document frontmatter.
- **Visual Assets**: Dispatch the `brand-asset-generator` subagent to generate SVG code or detailed briefs adhering to `04-design-tokens` and `05-visual-style`.

## Design Token Rules

Tokens in `brand/<project-slug>/04-design-tokens/tokens.json` must be strictly layered:
1. `primitive`: Raw values only (`color.blue.500 = #2563eb`, `space.4 = 16px`).
2. `semantic`: References exactly one primitive (`color.bg.brand -> color.blue.500`). Includes `light` and `dark` themes.
3. `component`: References exactly one semantic token (`button.primary.bg -> color.bg.brand`).

## Document Conventions

- Start every brand Markdown doc with frontmatter: `status: draft|approved`, `version: <n>`, `owner: <system name>`.
- One doc per decision area.
- Use relative links to reference other systems instead of duplicating content.
- Use tables for enumerable values and finish with clear do/don't examples.

