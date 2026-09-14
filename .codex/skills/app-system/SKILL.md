---
name: app-system
description: 'Use when defining desktop/web-app/mobile screen styles, navigation patterns, dialogs, onboarding, settings, and application states for a brand. Presents cohesive app UX options with pros & cons.'
---
# App System

## When to Use
- Designing product application UX/UI beyond marketing pages: navigation shell, onboarding, settings

## Inputs Required
- `04-design-tokens`, `05-visual-style`, `06-ui-design-system`

## Interactive Decision-Gate Procedure
1. Never build the app system in one go.
2. Present **2–3 distinct, cohesive app shell & navigation options** (e.g. Collapsible Sidebar vs. Dual-Rail Minimal vs. Focused Top Bar):
1. **Never build the app system in one go.**
2. **Present 2–3 distinct, cohesive app shell & navigation options** (e.g. Collapsible Sidebar vs. Dual-Rail Minimal vs. Focused Top Bar):
   - Compile all options into a self-contained interactive preview in `brand/<slug>/options/08-app-system-v1.html` (or `-v2.html` on revisions).
   - For each option:
     - **Navigation & Workspace Architecture**: Workspace frame, header actions, breadcrumbs, modal layering.
     - **Shell & Lifecycle Screens**: Define cold start/splash, session expiration/auth gates, permission priming, and background state restoration.
     - **Onboarding & Key States**: Empty states, skeleton loading, error handling.
     - **Brand Cohesion Rationale**: How the application ergonomics match the brand's positioning (e.g. power-user efficiency vs. guided simplicity).
     - **Pros**: Productivity speed, information density, mobile adaptability.
     - **Cons**: Screen estate consumption, complexity.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects an app shell direction (*"this one selected"* or provides tweaks), write `brand/<slug>/08-app-system/app-system.md` with `status: approved`.
     - **Brand Cohesion Rationale**: How the application ergonomics match the brand's positioning.
     - **Pros & Cons**: Productivity speed, information density, mobile adaptability.
3. **Dedicated Immutable Archive**:
   - Save in `brand/<slug>/options/` with sequential numbering.
   - **NEVER update/overwrite or delete** existing option files. All history is strictly append-only.
4. **Zero Premature Writes**:
   - Do NOT write or create any files in `brand/<slug>/08-app-system/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects an app shell direction (*"this one selected"* or provides tweaks):
   - Write `brand/<slug>/08-app-system/app-system.md` with `status: approved`.

## Output
- `brand/<slug>/08-app-system/app-system.md`
- `brand/<slug>/options/08-app-system-v<n>.html` (Immutable options archive)
- `brand/<slug>/08-app-system/app-system.md` (Committed only after selection)

## Consistency Rules
- Reuse components from `06-ui-design-system` and tokens from `04-design-tokens`.
