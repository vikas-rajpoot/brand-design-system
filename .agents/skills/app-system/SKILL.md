---
name: app-system
description: 'Use when defining desktop/web-app/mobile screen styles, navigation patterns, dialogs, onboarding, settings, and application states for a brand.'
description: 'Use when defining desktop/web-app/mobile screen styles, navigation patterns, dialogs, onboarding, settings, and application states for a brand. Presents cohesive app UX options with pros & cons.'
---
# App System

## When to Use
- Designing product application UX/UI beyond marketing pages: navigation shell, onboarding, settings

## Inputs Required
- `06-ui-design-system`, `04-design-tokens`
- `04-design-tokens`, `05-visual-style`, `06-ui-design-system`

## Procedure
1. Define navigation pattern per platform (sidebar/top-nav for desktop/web, tab bar/drawer for
   mobile) and when each applies.
2. Define standard screens: onboarding flow (steps, empty-first-run state), settings/preferences
   layout, dialogs/confirmation patterns, notifications/toasts.
3. Define application states: empty state, loading/skeleton, error state, offline state — for each,
   note required elements (icon/illustration, message tone per voice doc, primary action).
4. Note platform-specific adaptations (safe areas, native-feeling gestures on mobile) if relevant.
## Interactive Decision-Gate Procedure
1. Never build the app system in one go.
2. Present **2–3 distinct, cohesive app shell & navigation options** (e.g. Collapsible Sidebar vs. Dual-Rail Minimal vs. Focused Top Bar):
   - For each option:
     - **Navigation & Workspace Architecture**: Workspace frame, header actions, breadcrumbs, modal layering.
     - **Onboarding & Key States**: Empty states, skeleton loading, error handling.
     - **Brand Cohesion Rationale**: How the application ergonomics match the brand's positioning (e.g. power-user efficiency vs. guided simplicity).
     - **Pros**: Productivity speed, information density, mobile adaptability.
     - **Cons**: Screen estate consumption, complexity.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects an app shell direction (*"this one selected"* or provides tweaks), write `brand/<slug>/08-app-system/app-system.md` with `status: approved`.

## Output
- `brand/<slug>/08-app-system/app-system.md`

## Consistency Rules
- Reuse `06-ui-design-system` components; only add new component specs there, not inline here.
- Reuse components from `06-ui-design-system` and tokens from `04-design-tokens`.
