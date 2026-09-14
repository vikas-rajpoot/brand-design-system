# Brand OS Kit

A GitHub Copilot customization kit (instructions, skills, agents, prompts, hooks) that generates a
complete, consistent **brand design system** for any new project or idea.
An agentic customization kit (instructions, skills, agents, slash commands, lifecycle hooks, and rules) that generates a complete, consistent **brand design system** for any new project or idea. Fully compatible with **Google Antigravity (AGY)** and **GitHub Copilot**.

## How it works
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
  README.md                 # Per-project output conventions & 21-folder directory map
  _template/                # Documented folder map + schema + starter templates
  <project-slug>/           # Generated output per project (created on demand)
```

## Antigravity Features

### Custom Agents (`.agents/agents/`)
- **`brand-director`**: Main coordinator agent that drives end-to-end brand generation, foundation interviewing, and subsystem orchestration.
- **`brand-qa`**: Auditing subagent that reviews project directories against the 21-folder map, checks token conformance, and outputs a status checklist (`✅ | ⚠️ | ❌`).
- **`brand-asset-generator`**: Asset subagent that produces clean SVG assets or structured generative prompt briefs for designers/image generation models.

### Skills & Slash Commands (`.agents/skills/`)
Antigravity automatically exposes skills as slash commands in the chat interface:
- **`/brand-new-project`**: Start a full brand design system for a new project/idea from scratch.
- **`/brand-generate-system`**: Generate or regenerate a single subsystem (e.g. `color-system`, `website-system`) for an existing project.
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
- **Source of truth**: `00-brand-foundation` > `04-design-tokens` > earlier approved subsystems > defaults. Later systems must reference, not redefine, earlier decisions.
- **Token Layering**: `primitive` (raw values) -> `semantic` (light/dark roles referencing primitives) -> `component` (component-specific roles referencing semantics).
- **AI-ready spec**: `18-ai-ready-spec/brand-spec.json` aggregates the whole system conforming to `brand/_template/ai-ready-spec.schema.json` so any external agent can consume it consistently.

See [brand/README.md](brand/README.md) for the full 21-folder map.
