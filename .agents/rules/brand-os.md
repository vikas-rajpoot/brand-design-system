# Brand OS Kit Rules

This workspace generates **brand design systems** for arbitrary new projects and ideas.

## Hard Rules

- **Strict Isolation**: Every generated artifact belongs to exactly one project: `brand/<project-slug>/`. Never write brand outputs to the workspace root or mix files between projects.
- **Slug Confirmation**: Never invent a new project slug without confirming it with the user; derive it from the project name in lowercase kebab-case.
- **No "In One Go" Generation**: Never generate brand decisions, foundations, tokens, or subsystems in a single bulk pass. Work must proceed incrementally through an interactive decision gate.
- **Mandatory Cohesive Options with Pros & Cons**: For each brand decision (positioning angles, personality traits, color palettes, typography pairings, logo lockups, tokens, visual style, UI components, layouts, etc.), provide **2–4 cohesive options**. Each option must explicitly provide:
  1. Detailed concept / specifications / preview.
  2. **Brand Cohesion Rationale**: How this option fits with the brand foundation and previously approved tokens/decisions.
  3. **Pros**: Advantages, brand impact, strengths.
  4. **Cons**: Trade-offs, risks, or limitations.
- **Explicit User Selection Required**: The agent must stop and await user feedback or selection (e.g. *"this one selected"*). **Only when the user confirms their selection does the agent lock it in and commit it to files, and only then proceed to the next item.** If the user requests tweaks, iterate on options before committing.

## Source-of-Truth Hierarchy (Highest to Lowest)

1. `brand/<project-slug>/00-brand-foundation/brand-foundation.md` (name, audience, positioning, personality, voice)
2. `brand/<project-slug>/04-design-tokens/tokens.json` (primitive → semantic → component tokens)
3. Any other already-generated subsystem file in that project
4. Skill defaults and workspace rules
5. Agent judgment — only when nothing above applies; explicitly call it out as an assumption

If a later subsystem would contradict an earlier approved one (e.g., introducing a color not present in `tokens.json`), stop and flag the conflict instead of silently introducing new values.

## The 21-Folder Map & Associated Skills

| # | Folder | Antigravity Skill |
|---|--------|-------------------|
| 00 | `00-brand-foundation` | `brand-foundation` |
| 01 | `01-logo-system` | `logo-system` |
| 02 | `02-color-system` | `color-system` |
| 03 | `03-typography-system` | `typography-system` |
| 04 | `04-design-tokens` | `design-tokens` |
| 05 | `05-visual-style` | `visual-style` |
| 06 | `06-ui-design-system` | `ui-design-system` |
| 07 | `07-website-system` | `website-system` |
| 08 | `08-app-system` | `app-system` |
| 09 | `09-social-media-system` | `social-media-system` |
| 10 | `10-presentation-system` | `presentation-system` |
| 11 | `11-document-system` | `document-system` |
| 12 | `12-email-system` | `email-system` |
| 13 | `13-marketing-assets` | `marketing-assets` |
| 14 | `14-diagrams-and-charts` | `diagrams-and-charts` |
| 15 | `15-brand-voice-and-copy` | `brand-voice-and-copy` |
| 16 | `16-asset-library` | `asset-library` |
| 17 | `17-brand-guidelines-site` | `brand-guidelines-site` |
| 18 | `18-ai-ready-spec` | `ai-ready-spec` |
| 19 | `19-templates` | `templates-library` |
| 20 | `20-approved-examples` | `approved-examples` |

## Workflows & Roles

- **New project from scratch**: Use the `brand-director` agent or `/brand-new-project` skill.
- **Single subsystem**: Use the `/brand-generate-system` skill.
- **New project from scratch**: Use the `brand-director` agent or `/brand-new-project` skill. Guided through an interactive decision-gate loop (options with pros/cons, user selection gate, step-by-step commitment).
- **Single subsystem**: Use the `/brand-generate-system` skill. Formulates cohesive options with pros and cons, waits for approval, then writes the subsystem.
- **Review and audit**: Use the `brand-qa` subagent or `/brand-audit` skill.
- **Visual asset specs**: Delegate SVG generation and asset briefs to `brand-asset-generator`.


