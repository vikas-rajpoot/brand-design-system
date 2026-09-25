# Brand OS Kit

Brand OS Kit is a skills-based workspace for building production-ready brand systems with an AI assistant. It keeps every project under `brand/<project-slug>/` and makes important decisions explicit, reviewable, and append-only.

## Quick Start

Requirements: Node.js 18 or newer and Git.

```sh
git clone <repository-url>
cd brand-design-system
.agents/setup.sh
```

Setup enables the repository checks and Git hooks. It does not create brand output or start a background watcher. To keep skill mirrors synchronized automatically on macOS, opt in with:

```sh
.agents/sync.sh --watch
```

Without the watcher, run `.agents/sync.sh` after changing a canonical skill. Use `.agents/sync.sh --check` to verify that mirrors are current.

## Workflow

1. Confirm the seven-file product packet in `brand/<project-slug>/product/`, including launch scope/capabilities and trust/data flows.
2. Run `/product-intake` when the packet is missing or unconfirmed.
3. Run `/reference-screens` and approve a neutral product-screen fixture, or let `/brand-new-project` run this gate first.
4. Run `/brand-new-project` and work through one subsystem at a time in the run order below.
5. Review the 2-4 options in the immutable `options/` archive and explicitly select one.
6. Run the checks before sharing or merging the result.

The assistant must not invent brand decisions before the product packet and reference screens are approved, write official subsystem files before selection, or overwrite an existing option file. Visual-system previews reuse the approved screens so alternatives are compared against the same tasks and states.

## Run Order

The folder number is an ID, not the execution order:

`00 foundation` -> `02 color` -> `03 typography` -> `01 logo` -> `15 voice` -> `05 visual style` -> `04 tokens` -> `06 UI` -> `07 website` -> `08 app` -> `09 social` -> `10 presentation` -> `11 document` -> `12 email` -> `13 marketing` -> `14 diagrams` -> `21 corporate identity` -> `16 asset library` -> `17 guidelines site` -> `18 AI-ready spec` -> `19 templates` -> `20 approved examples`

Prerequisites and the full folder map live in [AGENTS.md](AGENTS.md). Project output conventions live in [brand/README.md](brand/README.md).

## Checks

```sh
node .agents/scripts/brand-check.mjs
.agents/scripts/lint-skills.sh
.agents/sync.sh --check
```

The checks validate frontmatter, product intake, reference screens, run-order prerequisites, token layering, generated exports, AI-ready specs, Markdown links, and immutable option history. CI runs the same checks on pushes and pull requests.

## Configuration

- `.agents/skills/` is the canonical skill source.
- `.github/skills/` and `.claude/skills/` are generated symlink mirrors.
- `.github/hooks/brand-guard.json`, `.claude/settings.json`, and `.codex/hooks.json` enforce write safety for supported tools.
- Codex uses `.agents/skills` directly; it does not need a `.codex/skills` mirror. Run `/hooks` once in Codex to trust the repository hooks.
- Windows users need Git symlink support enabled. If symlinks are unavailable, keep `.agents/skills` as the source and use the checks without creating mirrors.

## License

See [LICENSE](LICENSE).
# Brand OS Kit

A GitHub Copilot customization kit (instructions, skills, agents, prompts, hooks) that generates a
complete, consistent **brand design system** for any new project or idea.
An agentic customization kit (instructions, skills, agents, slash commands, lifecycle hooks, and rules) that generates a complete, consistent **brand design system** for any new project or idea. Fully compatible with **Google Antigravity (AGY)** and **GitHub Copilot**.

## How it works
## Core Operating Protocol: Interactive Decision-Gate

This system **never generates brand decisions, tokens, or subsystems in one go**. It operates strictly through an interactive decision-gate loop to guarantee high quality and brand cohesiveness:

1. **Step-by-Step Delivery**: The system proceeds one element and one subsystem at a time.
2. **2–4 Cohesive Options**: For every decision (slugs, foundation positioning, brand personality, color palettes, typography pairings, tokens, logos, UI styles, layouts, etc.), the system presents **2–4 cohesive options**.
3. **Pros & Cons with Cohesion Rationale**: Each option clearly explains:
   - Visual and structural specifications.
   - **Brand Cohesion Rationale**: How the option aligns with approved foundation values and tokens.
   - **Pros**: Strategic advantages and strengths.
   - **Cons**: Potential trade-offs or constraints.
4. **Interactive HTML Options Preview**: Every option set is delivered as a self-contained, interactive HTML file in `brand/<project-slug>/options/` (e.g. `01-logo-system-v1.html`) featuring live SVG renders, mobile & desktop mockups, dark/light theme toggles, and side-by-side matrices.
5. **Dedicated Immutable Options Archive (`options/`)**:
   - All proposed options are saved in `brand/<project-slug>/options/` with sequential numbering and descriptive filenames.
   - **Strict Immutability**: Option files are **never updated/overwritten or deleted**. Revisions are strictly append-only (e.g., `-v2.html`, `-v3.html`), preserving the full evolutionary history.
6. **Zero Premature Writes**: Official subsystem directories (`01-logo-system/`, etc.) remain completely untouched until the user gives explicit selection.
7. **Explicit User Selection Gate**: The system pauses and waits for user feedback or confirmation (*"Concept 1 selected"*). It commits the approved decision to official files (`status: approved`) **only when explicitly confirmed**, and only then advances to the next step.

## How It Works

1. You describe a new project/idea to Copilot Chat (optionally via `/brand-new-project`).
2. The **brand-director** agent interviews you for the essentials (name, audience, positioning,
   personality, tone) and writes `brand/<project-slug>/00-brand-foundation/brand-foundation.md`.
3. Copilot generates each subsystem (logo, color, typography, tokens, UI, website, app, social,
   presentations, documents, email, marketing, diagrams, voice, asset library, guidelines site,
   AI-ready spec, templates, examples) using the matching skill in [.github/skills](.github/skills),
   always deriving from the foundation and existing tokens — never inventing new tone/color at each step.
4. Everything for one project lands under `brand/<project-slug>/`. The **brand-qa** agent can audit
   the result for completeness and consistency.
1. You describe a new project/idea to the assistant (or trigger the `/brand-new-project` slash command).
2. The **brand-director** coordinator agent interviews you for essentials (name, audience, positioning, personality, tone) and creates `brand/<project-slug>/00-brand-foundation/brand-foundation.md`.
3. The agent generates foundational tokens (`04-design-tokens/tokens.json`), then proceeds through each subsystem (logo, color, typography, UI, website, app, social media, presentations, documents, email, marketing, diagrams, voice, asset library, guidelines site, AI-ready spec, templates, examples) using the matching Antigravity skill in `.agents/skills/`, always deriving from the foundation and existing tokens — never inventing new tone/color at each step.
4. Everything for one project lands strictly under `brand/<project-slug>/`.
5. The **brand-qa** subagent audits the result for completeness, token tracing, and frontmatter consistency (via `/brand-audit`).
6. Visual assets (SVG files and image-generation prompt briefs) are handled by the **brand-asset-generator** subagent.
2. The **brand-director** coordinator agent confirms the project slug and interviews you for essentials (name, audience, positioning, personality, tone).
3. The director presents **2–3 cohesive strategic angles** for the foundation with pros and cons. Once you select one, it creates `brand/<project-slug>/00-brand-foundation/brand-foundation.md`.
4. It presents **2–3 cohesive palette options** with WCAG contrast notes and pros/cons. Upon your selection, it writes `02-color-system/color-system.md`.
5. It presents **2–3 typography pairings** with hierarchy scales and pros/cons. Upon your selection, it writes `03-typography-system/typography-system.md`.
6. It layers primitive, semantic, and component tokens into `04-design-tokens/tokens.json`.
7. It proceeds through the remaining subsystems (logo, visual style, UI, website, app, social media, presentations, documents, email, marketing, diagrams, voice, asset library, guidelines site, AI-ready spec, templates, examples) **one at a time**, presenting options with pros & cons, awaiting your selection at every step.
8. The **brand-qa** subagent audits the result for completeness, token tracing, and frontmatter consistency (via `/brand-audit`).
9. Visual assets (SVG files and image-generation prompt briefs) are handled by the **brand-asset-generator** subagent for concepts you explicitly approve.

## Structure
## Workspace Structure

```
.github/
  copilot-instructions.md   # always-on rules (folder map, source-of-truth order)
  instructions/             # applyTo-scoped rules (tokens, brand docs)
  prompts/                  # /brand-new-project, /brand-generate-system, /brand-audit
  agents/                   # brand-director, brand-qa, brand-asset-generator
  skills/                   # one skill per brand subsystem (21 total)
  hooks/                    # JSON/token validation
AGENTS.md                   # Antigravity primary workspace rules & source of truth
GEMINI.md                   # Antigravity companion rule manifest
.agents/
  agents/                   # Custom agents (brand-director, brand-qa, brand-asset-generator)
  skills/                   # 21 brand subsystems + 3 workflow skills (/brand-new-project, etc.)
  rules/                    # Modular rule definitions (brand-os, design-tokens, brand-docs)
  hooks.json                # Lifecycle hooks (pre-tool & post-tool JSON validation)
  scripts/                  # Hook executable scripts (validate-json.sh)
.github/                    # GitHub Copilot compatibility (agents, skills, hooks, prompts)
brand/
  README.md                 # per-project output convention
  _template/                # documented folder map + schema + starter templates
  <project-slug>/           # generated output per real project (created on demand)
  AGENTS.md                 # Antigravity scoped rules for brand output & token layers
  README.md                 # Per-project output conventions & 22-folder directory map
  _template/                # Documented folder map + schema + starter templates
  <project-slug>/           # Generated output per project (created on demand)
```

## Antigravity Features

### Custom Agents (`.agents/agents/`)
- **`brand-director`**: Main coordinator agent that drives end-to-end brand generation, foundation interviewing, and subsystem orchestration.
- **`brand-director`**: Main coordinator agent that drives end-to-end brand generation through the interactive decision-gate loop.
- **`brand-qa`**: Auditing subagent that reviews project directories against the 22-folder map, checks token conformance, and outputs a status checklist (`✅ | ⚠️ | ❌`).
- **`brand-asset-generator`**: Asset subagent that produces clean SVG assets or structured generative prompt briefs for designers/image generation models.
- **`brand-asset-generator`**: Asset subagent that produces clean SVG assets or structured generative prompt briefs for approved concepts.

### Skills & Slash Commands (`.agents/skills/`)
Antigravity automatically exposes skills as slash commands in the chat interface:
- **`/brand-new-project`**: Start a full brand design system for a new project/idea from scratch.
- **`/brand-generate-system`**: Generate or regenerate a single subsystem (e.g. `color-system`, `website-system`) for an existing project.
- **`/brand-new-project`**: Start a full brand design system for a new project/idea from scratch via interactive decision gates.
- **`/brand-generate-system`**: Generate or regenerate a single subsystem (e.g. `color-system`, `website-system`) with options and pros/cons.
- **`/brand-audit`**: Run an audit on an existing project under `brand/<project-slug>/`.
- **21 Subsystem Skills**: Dedicated procedure and guideline files for every brand folder (from `brand-foundation` to `approved-examples`).

### Lifecycle Hooks (`.agents/hooks.json`)
- **JSON Validator**: Automatically intercepts tool calls writing to `brand/**/*.json` to ensure valid JSON syntax before changes persist.

## Conventions

- **Project slug**: kebab-case name, e.g. `acme-labs`. All output for that project lives under
  `brand/<project-slug>/`.
- **Source of truth**: `00-brand-foundation` > `04-design-tokens` > everything else. Later systems
  must reference, not redefine, earlier decisions.
- **AI-ready spec**: `18-ai-ready-spec/brand-spec.json` aggregates the whole system so any agent
  (Claude, Codex, Copilot, ...) can consume it consistently.
- **Project slug**: kebab-case name, e.g. `acme-labs`. All output for that project lives under `brand/<project-slug>/`.
- **Project slug**: kebab-case name, e.g. `acme-labs`. All output for that project lives strictly under `brand/<project-slug>/`.
- **No in-one-go generation**: Every decision presents 2–4 cohesive options with pros and cons, awaiting explicit user selection before committing.
- **Source of truth**: `00-brand-foundation` > `04-design-tokens` > earlier approved subsystems > defaults. Later systems must reference, not redefine, earlier decisions.
- **Token Layering**: `primitive` (raw values) -> `semantic` (light/dark roles referencing primitives) -> `component` (component-specific roles referencing semantics).
- **AI-ready spec**: `18-ai-ready-spec/brand-spec.json` aggregates the whole system conforming to `brand/_template/ai-ready-spec.schema.json` so any external agent can consume it consistently.
- **AI-ready spec**: `18-ai-ready-spec/brand-spec.json` aggregates the whole system conforming to `brand/_template/ai-ready-spec.schema.json` so external agents can consume it consistently.

See [brand/README.md](brand/README.md) for the full 22-folder map.
