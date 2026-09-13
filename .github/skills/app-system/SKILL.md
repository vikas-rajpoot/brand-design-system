---
name: app-system
description: 'Use when defining desktop/web-app/mobile screen styles, navigation patterns, dialogs, onboarding, settings, and application states for a brand.'
---
# App System

## When to Use
- Designing product application UX/UI beyond marketing pages: navigation shell, onboarding, settings

## Inputs Required
- `06-ui-design-system`, `04-design-tokens`

## Procedure
1. Define navigation pattern per platform (sidebar/top-nav for desktop/web, tab bar/drawer for
   mobile) and when each applies.
2. Define standard screens: onboarding flow (steps, empty-first-run state), settings/preferences
   layout, dialogs/confirmation patterns, notifications/toasts.
3. Define application states: empty state, loading/skeleton, error state, offline state — for each,
   note required elements (icon/illustration, message tone per voice doc, primary action).
4. Note platform-specific adaptations (safe areas, native-feeling gestures on mobile) if relevant.

## Output
- `brand/<slug>/08-app-system/app-system.md`

## Consistency Rules
- Reuse `06-ui-design-system` components; only add new component specs there, not inline here.
