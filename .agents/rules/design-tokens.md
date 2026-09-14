# Design Token Rules

Tokens are strictly layered — never skip a layer:

1. **primitive**: Raw values only (`color.blue.500 = #2563eb`, `space.4 = 16px`). No references.
2. **semantic**: References exactly one primitive (`color.bg.brand -> color.blue.500`).
3. **component**: References exactly one semantic token (`button.primary.bg -> color.bg.brand`).

## Naming Conventions

- Use lowercase, dot-separated segments: `category.role.variant` (e.g. `color.text.muted`, `radius.card`, `shadow.md`, `font.size.heading-lg`).
- Required categories: `color`, `space`, `radius`, `shadow`, `font` (family/size/weight/line-height), `border`, `motion` (duration/easing), `breakpoint`.
- Provide both `light` and `dark` variants for every semantic color token.

## File Format

Write `tokens.json` matching the schema:
```json
{
  "schemaVersion": 1,
  "tokens": [
    {
      "id": "token-id",
      "name": "color.bg.brand",
      "layer": "semantic",
      "category": "color",
      "value": "{color.blue.500}",
      "reference": "color.blue.500",
      "theme": "light"
    }
  ]
}
```
Component and semantic tokens must set `reference` to an existing token `name`. Never duplicate a raw value that should be a reference.

## Validation
Before concluding, verify:
- No orphaned references.
- No circular reference chains.
- No duplicate token names within the same theme/scope.

