# Brand OS Kit — Antigravity Agent Guidelines

This workspace generates **brand design systems** for arbitrary new projects and ideas. It is a skills-based customization kit with shared instructions and hooks.

## Hard Rules

- **Single Project Boundary**: Every generated artifact belongs to exactly one project: `brand/<project-slug>/`. Never write brand output to the repository root or mix two projects' files.
- **Mandatory Product Intake Gate**: Do not begin brand-system work, including an `options/` preview, a foundation draft, or any subsystem, until the user has supplied and confirmed the complete product packet at `brand/<project-slug>/product/`. Required user-authored files: `BRAND-BRIEF.md`, `01-strategy-foundation.md`, `02-brand-positioning.md`, `03-messaging-and-market.md`, and `04-decisions-and-questions.md`.
- **Project Discovery & Incomplete Intake**: At intake, inspect `brand/*/product/`. If exactly one project contains all five required files, use its enclosing slug. If multiple complete packets exist, ask the user to select the slug. If none are complete, stop at intake, state what is missing for the intended slug, and suggest the decisions that each missing file should cover; never invent contents or generate brand artifacts. Read the selected complete packet before offering foundation options.
- **Slug Confirmation**: Never invent a new project slug without confirming it with the user; derive it from the project name in kebab-case (e.g. `brand/acme-labs/`).
- **No "In One Go" Generation (Strict Step-by-Step Gate)**: Never generate brand decisions, foundation, tokens, or subsystems in a single autonomous pass. Every element must proceed through an interactive decision gate.
- **Mandatory Cohesive Options with Pros & Cons**: For each decision area (foundation angles, color schemes, font pairings, logo lockups, tokens, visual style, UI components, etc.), provide **2–4 distinct, cohesive options**. Each option must include:
  1. Detailed concept / specifications / visual preview.
  2. **Brand Cohesion Rationale**: Explicitly explain how this option harmonizes with the brand foundation and previously approved tokens/decisions.
  3. **Pros**: Key strengths, emotional appeal, and strategic advantages.
  4. **Cons**: Trade-offs, risks, or contextual limitations.
- **Interactive HTML Options Preview**: For every decision gate, compile all options into a self-contained, beautifully styled interactive HTML preview file in `brand/<project-slug>/options/` (e.g., `01-logo-system-v1.html`) featuring live SVG renders, interactive mode toggles (dark/light), contextual mockups (mobile/desktop), and side-by-side comparisons.
- **Dedicated Immutable Options Archive**:
  - All proposed options must be saved under `brand/<project-slug>/options/` with clear sequential numbering and descriptive names (e.g. `01-logo-system-v1.html`).
  - **Strict Immutability**: NEVER update/overwrite or delete existing options files. If options are revised or refined, append a new version (`-v2.html`, `-v3.html`).
- **Zero Premature System Writes**: Before the user makes an explicit decision, **NEVER** write or modify files in the official brand subsystem directories (`01-logo-system/`, `02-color-system/`, etc.).
- **Explicit User Selection Required**: Always stop and wait for the user's feedback or explicit choice (e.g. *"Concept 1 selected"*). **Only when the user confirms their selection does the agent lock it in and commit it to official subsystem files, and only then proceed to the next item.** If the user gives feedback, generate the next immutable version in the options folder before moving forward.

## Source-of-Truth Order (Highest Priority First)

1. User-confirmed `brand/<project-slug>/product/` packet (strategy, positioning, messaging, unresolved decisions)
2. `brand/<project-slug>/00-brand-foundation/brand-foundation.md` (name, audience, positioning, personality, voice)
3. `brand/<project-slug>/04-design-tokens/tokens.json` (primitive → semantic → component tokens)
4. Any other already-generated subsystem file in that project
5. Skill defaults and workspace rules
6. Agent judgment — only when nothing above applies, and explicitly stated as an assumption

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

## Skills & Workflows

- **End-to-End Orchestration**: Use `/brand-new-project`. It guides the project step by step through an interactive decision-gate loop. At every stage, it presents **2–4 cohesive options with pros and cons**, stops for user feedback, and locks in the choice only when explicitly selected.
- **Single Subsystem Generation / Revision**: Run `/brand-generate-system` to build or update one subsystem for an existing project. It presents cohesive options with pros and cons adhering to existing foundation and tokens before writing any files.
- **Auditing & Consistency**: Use `/brand-audit` to generate a checklist (`✅ | ⚠️ | ❌`) verifying folder completeness, token traceability, and document frontmatter.
- **Visual Assets**: Use `brand-asset-generator` to generate SVG code or detailed briefs adhering to `04-design-tokens` and `05-visual-style`.

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

## Agent config — one source of truth, synced automatically

**Skills only. This repo has no subagents.** Do not create `.agents/rules/`, `.agents/agents/`, `.claude/agents/`, `.codex/agents/` or `.github/agents/`. Package reusable behavior as a skill instead.

`.agents/skills/` holds the canonical skills. `.claude/skills/`, `.codex/skills/` and `.github/skills/` are generated mirrors of relative symlinks.

`.agents/sync.sh` is the only sync mechanism. Never add a second one.

A watcher runs `.agents/sync.sh` within seconds of changes, and git hooks run it on commit, checkout, merge, and rebase. Create a skill in any mirrored tool folder and the sync adopts it into `.agents/skills/`, then mirrors it everywhere. Editing a mirrored file edits the source because it is a symlink.

Delete skills only from `.agents/skills/`. Deleting only a mirror is drift, so the mirror will be recreated.
