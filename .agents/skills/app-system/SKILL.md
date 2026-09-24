---
name: app-system
description: 'Use when defining desktop/web-app/mobile screen styles, navigation patterns, dialogs, onboarding, settings, and application states for a brand. Presents cohesive app UX options with pros & cons.'
---
# App System

## When to Use
- Designing product application UX/UI beyond marketing pages: navigation shell, onboarding, settings, and app states

## Inputs Required
- Approved `06-ui-design-system` (components) and `04-design-tokens`
- Approved `15-brand-voice-and-copy` (message tone for states and dialogs)
- The product packet, for the platforms (desktop, web, mobile) and core workflow the app must support
- If an input is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).

## Interactive Decision-Gate Procedure
1. **Never build the app system in one go.**
2. **Present 2–3 distinct, cohesive app shell & navigation options** (e.g. Collapsible Sidebar vs. Dual-Rail Minimal vs. Focused Top Bar):
   - Compile all options into a self-contained interactive preview in `brand/<slug>/options/08-app-system-v1.html` (or the next `-vN.html` on revisions).
   - For each option:
     - **Navigation & Workspace Architecture**: Navigation pattern per platform (sidebar or top nav on desktop/web, tab bar or drawer on mobile) and when each applies; header actions, breadcrumbs, modal layering.
     - **Shell & Lifecycle Screens**: Cold start/splash, auth gates and session expiry, permission priming, background state restoration.
     - **Onboarding & Key States**: Onboarding steps (including the empty first run), plus empty, loading/skeleton, error, and offline states, each with its icon or illustration, message tone, and primary action.
     - **Platform Adaptations**: Safe areas and native-feeling gestures on mobile, where relevant.
     - **Brand Cohesion Rationale**: How the application ergonomics match the brand's positioning (e.g. power-user efficiency vs. guided simplicity).
     - **Pros**: Productivity speed, information density, mobile adaptability.
     - **Cons**: Screen space consumption, complexity.
3. **Dedicated Immutable Archive**: Save in `brand/<slug>/options/`. **NEVER update/overwrite or delete** existing option files; revisions are append-only.
4. **Zero Premature Writes**: Do NOT write or create any files in `brand/<slug>/08-app-system/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a direction (*"Concept 1 selected"*), write `brand/<slug>/08-app-system/app-system.md` with `status: approved`, covering navigation, standard screens (onboarding, settings, dialogs and confirmations, notifications/toasts), app states, and platform adaptations.

## Output
- `brand/<slug>/options/08-app-system-v<n>.html` (immutable options archive)
- `brand/<slug>/08-app-system/app-system.md` (committed only after selection)

## Consistency Rules
- Reuse `06-ui-design-system` components and `04-design-tokens` values. Add any new component spec to `06-ui-design-system`, not inline here.
