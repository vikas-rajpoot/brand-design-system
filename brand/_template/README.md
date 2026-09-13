# Brand Output Template

This documents the folder map every `brand/<project-slug>/` is expected to follow, and what belongs
in each. Folders are created on demand by the matching skill — don't pre-create empty ones.

| Folder | Purpose | Key file(s) |
|--------|---------|--------------|
| `00-brand-foundation` | Name usage, positioning, audience, personality, values, voice | `brand-foundation.md` |
| `01-logo-system` | Logo variants, clear space, usage/misuse | `logo-system.md`, `logos/*.svg` |
| `02-color-system` | Palettes, light/dark themes, contrast notes | `color-system.md` |
| `03-typography-system` | Fonts, type scale, hierarchy | `typography-system.md` |
| `04-design-tokens` | Machine-readable primitive/semantic/component tokens | `tokens.json`, `tokens.css` |
| `05-visual-style` | Shape, gradients, imagery, icon/illustration style | `visual-style.md` |
| `06-ui-design-system` | Reusable UI components + states | `ui-design-system.md`, `components/*` |
| `07-website-system` | Homepage, landing, pricing, blog, auth, dashboard layouts | `website-system.md` |
| `08-app-system` | Nav patterns, onboarding, settings, app states | `app-system.md` |
| `09-social-media-system` | Per-platform post/profile templates | `social-media-system.md`, `templates/*.svg` |
| `10-presentation-system` | Slide master + deck outlines | `presentation-system.md` |
| `11-document-system` | Reports, proposals, invoices, letterhead | `document-system.md` |
| `12-email-system` | Marketing/transactional email + signature templates | `email-system.md` |
| `13-marketing-assets` | Ads, banners, posters, campaign graphics | `<campaign>/*.svg` |
| `14-diagrams-and-charts` | Diagram/chart/table styling + palettes | `diagrams-and-charts.md` |
| `15-brand-voice-and-copy` | Headline/CTA/UI-text/terminology rules | `brand-voice-and-copy.md` |
| `16-asset-library` | Indexed, downloadable approved assets | `asset-library.md` |
| `17-brand-guidelines-site` | One browsable site of all approved rules | static site |
| `18-ai-ready-spec` | Machine-readable aggregate of the whole system | `brand-spec.json` |
| `19-templates` | Pre-approved starting templates per medium | `<medium>/*`, `templates.md` |
| `20-approved-examples` | Final, approved cross-medium examples | `<example>/`, index |

See [ai-ready-spec.schema.json](ai-ready-spec.schema.json) for the schema `18-ai-ready-spec` must
validate against.
