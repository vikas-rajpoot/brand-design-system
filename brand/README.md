# Brand Output

Generated brand systems live under `brand/<project-slug>/`. Keep product input, options, approved systems, and assets inside that project boundary.

## Start Here

Before any brand work, confirm these files with `status: approved` frontmatter:

`product/BRAND-BRIEF.md`, `product/01-strategy-foundation.md`, `product/02-brand-positioning.md`, `product/03-messaging-and-market.md`, and `product/04-decisions-and-questions.md`.

If the packet is incomplete, use `/product-intake`. Do not create an options preview or subsystem draft first.

## Output Map

| ID | Folder | Focus |
|---|---|---|
| 00 | `00-brand-foundation` | Positioning, audience, personality, values, and tone |
| 01 | `01-logo-system` | Logo variants, clear space, and misuse |
| 02 | `02-color-system` | Palettes, themes, and contrast |
| 03 | `03-typography-system` | Fonts, scale, and hierarchy |
| 04 | `04-design-tokens` | Primitive, semantic, and component tokens |
| 05 | `05-visual-style` | Shape, imagery, iconography, and motion |
| 06 | `06-ui-design-system` | Components, variants, and states |
| 07 | `07-website-system` | Web page structures and responsive behavior |
| 08 | `08-app-system` | App shell, navigation, onboarding, and states |
| 09 | `09-social-media-system` | Social templates and profiles |
| 10 | `10-presentation-system` | Slide masters and deck outlines |
| 11 | `11-document-system` | Reports, proposals, invoices, and letters |
| 12 | `12-email-system` | Marketing and transactional email |
| 13 | `13-marketing-assets` | Campaign graphics and ads |
| 14 | `14-diagrams-and-charts` | Diagrams, charts, and tables |
| 15 | `15-brand-voice-and-copy` | Copy, terminology, and UI text |
| 16 | `16-asset-library` | Approved asset index and downloads |
| 17 | `17-brand-guidelines-site` | Browsable brand guidelines |
| 18 | `18-ai-ready-spec` | Machine-readable `brand-spec.json` |
| 19 | `19-templates` | Approved starting templates |
| 20 | `20-approved-examples` | Final reference examples |
| 21 | `21-corporate-visual-identity` | Physical and corporate applications |

Folder IDs are fixed. The execution order and prerequisites are in [../AGENTS.md](../AGENTS.md). Schemas and starter files are in [_template/README.md](_template/README.md).
# brand/

Generated brand design systems live here — one folder per project:
Generated brand design systems live here — strictly one folder per project:

```
brand/<project-slug>/
```

Never write brand output to the repo root — see
[.github/copilot-instructions.md](../.github/copilot-instructions.md).
[AGENTS.md](../AGENTS.md) and [AGENTS.md](AGENTS.md) (or legacy [.github/copilot-instructions.md](../.github/copilot-instructions.md)).
Never write brand output to the repository root — see [AGENTS.md](../AGENTS.md) and [AGENTS.md](AGENTS.md).

## Starting a new project
## Starting a New Project

Use the `/brand-new-project` prompt or the `brand-director` agent. The 22-folder map (created on
demand, not pre-scaffolded per project) is:
Use the `/brand-new-project` slash command or the `brand-director` agent. 

| # | Folder |
|---|--------|
| 00 | brand-foundation |
| 01 | logo-system |
| 02 | color-system |
| 03 | typography-system |
| 04 | design-tokens |
| 05 | visual-style |
| 06 | ui-design-system |
| 07 | website-system |
| 08 | app-system |
| 09 | social-media-system |
| 10 | presentation-system |
| 11 | document-system |
| 12 | email-system |
| 13 | marketing-assets |
| 14 | diagrams-and-charts |
| 15 | brand-voice-and-copy |
| 16 | asset-library |
| 17 | brand-guidelines-site |
| 18 | ai-ready-spec |
| 19 | templates |
| 20 | approved-examples |
| 21 | corporate-visual-identity |
### Interactive Decision Gate (Anti-Batch Rule)
The system **never creates files in one go**. It presents **2–4 cohesive options** with **Pros & Cons** and a **Brand Cohesion Rationale** for every decision (slug, foundation, colors, typography, tokens, logo, and all subsequent subsystems). 

See [_template/README.md](_template/README.md) for a one-line purpose per folder and the
`ai-ready-spec` JSON schema.
Files are only created and marked `status: approved` after explicit user selection (*"this one selected"*), moving step by step through the 22 subsystems:

| # | Folder | Primary Focus |
|---|--------|---------------|
| 00 | `00-brand-foundation` | Positioning, audience, personality, values, tone |
| 01 | `01-logo-system` | Primary logo, lockup variants, clear space, SVGs |
| 02 | `02-color-system` | Primaries, secondaries, accents, neutrals, semantic, WCAG |
| 03 | `03-typography-system` | Heading/body font pairings, type scale, hierarchy |
| 04 | `04-design-tokens` | Primitive → semantic → component tokens.json |
| 05 | `05-visual-style` | Shapes, borders, shadows, imagery, iconography |
| 06 | `06-ui-design-system` | Reusable UI components, variants, and states |
| 07 | `07-website-system` | Key web page layouts, narrative flow, responsive specs |
| 08 | `08-app-system` | Application shells, navigation patterns, onboarding, states |
| 09 | `09-social-media-system` | Social templates across platforms, aspect ratios |
| 10 | `10-presentation-system` | Pitch deck, sales deck, and slide master templates |
| 11 | `11-document-system` | Business docs, proposals, reports, whitepapers, invoices |
| 12 | `12-email-system` | Transactional, marketing, and newsletter email layouts |
| 13 | `13-marketing-assets` | Campaign graphics, display ads, promotional banners |
| 14 | `14-diagrams-and-charts` | Architecture diagrams, flowcharts, data visual palettes |
| 15 | `15-brand-voice-and-copy` | Voice traits, headline rules, UI microcopy, glossary |
| 16 | `16-asset-library` | Indexed catalog of approved logos, templates, and SVGs |
| 17 | `17-brand-guidelines-site` | Static browsable brand guidelines website |
| 18 | `18-ai-ready-spec` | Unified machine-readable `brand-spec.json` |
| 19 | `19-templates` | Starter templates for web, app, deck, and document files |
| 20 | `20-approved-examples` | Canonical real-world reference implementations |
| 21 | `21-corporate-visual-identity` | Stationery, signage, apparel, merch, livery, co-branding, trademark |

See [_template/README.md](_template/README.md) for starter templates and schema.
