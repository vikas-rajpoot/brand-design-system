# Brand OS Kit

A GitHub Copilot customization kit (instructions, skills, agents, prompts, hooks) that generates a
complete, consistent **brand design system** for any new project or idea.

## How it works

1. You describe a new project/idea to Copilot Chat (optionally via `/brand-new-project`).
2. The **brand-director** agent interviews you for the essentials (name, audience, positioning,
   personality, tone) and writes `brand/<project-slug>/00-brand-foundation/brand-foundation.md`.
3. Copilot generates each subsystem (logo, color, typography, tokens, UI, website, app, social,
   presentations, documents, email, marketing, diagrams, voice, asset library, guidelines site,
   AI-ready spec, templates, examples) using the matching skill in [.github/skills](.github/skills),
   always deriving from the foundation and existing tokens — never inventing new tone/color at each step.
4. Everything for one project lands under `brand/<project-slug>/`. The **brand-qa** agent can audit
   the result for completeness and consistency.

## Structure

```
.github/
  copilot-instructions.md   # always-on rules (folder map, source-of-truth order)
  instructions/             # applyTo-scoped rules (tokens, brand docs)
  prompts/                  # /brand-new-project, /brand-generate-system, /brand-audit
  agents/                   # brand-director, brand-qa, brand-asset-generator
  skills/                   # one skill per brand subsystem (21 total)
  hooks/                    # JSON/token validation
brand/
  README.md                 # per-project output convention
  _template/                # documented folder map + schema + starter templates
  <project-slug>/           # generated output per real project (created on demand)
```

## Conventions

- **Project slug**: kebab-case name, e.g. `acme-labs`. All output for that project lives under
  `brand/<project-slug>/`.
- **Source of truth**: `00-brand-foundation` > `04-design-tokens` > everything else. Later systems
  must reference, not redefine, earlier decisions.
- **AI-ready spec**: `18-ai-ready-spec/brand-spec.json` aggregates the whole system so any agent
  (Claude, Codex, Copilot, ...) can consume it consistently.

See [brand/README.md](brand/README.md) for the full 21-folder map.
