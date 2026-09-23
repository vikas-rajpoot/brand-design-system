# Antigravity Workspace Configuration: Brand OS Kit

See [AGENTS.md](./AGENTS.md) for full workspace rules, source-of-truth hierarchy, 22-folder mapping, and custom agent orchestration instructions.

## Key Rules

- All project output is constrained to `brand/<project-slug>/`.
- **Mandatory Product Intake Gate**: Do not begin brand-system work, including an `options/` preview, foundation draft, or subsystem, until the user has supplied and confirmed all required user-authored files in `brand/<project-slug>/product/`: `BRAND-BRIEF.md`, `01-strategy-foundation.md`, `02-brand-positioning.md`, `03-messaging-and-market.md`, and `04-decisions-and-questions.md`.
- **Project Discovery**: At intake, inspect `brand/*/product/`. If one project has the complete packet, use that slug; if several do, ask the user to select one. If no complete packet exists, stop at intake, identify missing files for the intended project, and suggest the decisions each needs to cover; do not invent contents or create brand artifacts. Read the confirmed packet before proposing brand-foundation options.
- Source of truth: user-confirmed `brand/<project-slug>/product/` packet > `00-brand-foundation` > `04-design-tokens` > earlier approved subsystems.
- **Never generate in one go**: System strictly operates via an interactive decision-gate loop, never batch-generating multiple subsystems or decisions autonomously.
- **Mandatory Cohesive Options with Pros & Cons**: For each decision or subsystem, present 2–4 cohesive options with clear brand cohesion explanations, pros, and cons.
- **Interactive HTML Options Preview**: Deliver options as a self-contained, interactive HTML preview in `brand/<project-slug>/options/` (e.g. `01-logo-system-v1.html`) with live SVG renders, mobile/desktop mockups, and mode toggles.
- **Dedicated Immutable Options Archive**: Save options under `brand/<project-slug>/options/` with proper numbering and filenames. NEVER overwrite or delete existing option files (append-only history with `-v2.html` on iterations).
- **Zero Premature Writes**: Do NOT write or alter files in official subsystem folders (`01-logo-system/`, etc.) until explicit user confirmation.
- **Explicit User Selection Gate**: Always wait for user feedback/selection (e.g. "Concept 1 selected") before committing to official subsystem files and proceeding to the next item.
- All tokens must follow `primitive -> semantic -> component` layering.
- Never invent colors or typography not defined in `tokens.json`.
- Physical/print colors (Pantone, CMYK, RAL, thread) belong in `21-corporate-visual-identity/production-specs.md` as mapped equivalents of an existing palette hex — never as new brand colors.


