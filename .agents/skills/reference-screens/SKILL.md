---
name: reference-screens
description: Create and approve a neutral set of representative product screens after product intake, before brand design, so later visual-system options are compared on the same tasks, states, content, and viewports.
argument-hint: "project slug"
---

# Reference Screens

Use this skill after the product packet is confirmed and before any numbered brand subsystem. The result is a stable comparison fixture, not a final UX or visual-design decision.

## Inputs Required

- The confirmed product packet in `brand/<slug>/product/`: all five required files exist and start with `status: approved` frontmatter.
- Any additional product scope, capability, trust, or data-flow documents in the same packet.
- The slug is the packet's folder name. Do not create or rename a project here.

If the packet is missing or unconfirmed, stop and use `product-intake`. Do not create a screen preview first.

## What the Fixture Decides

The selected fixture locks only:

- representative user tasks and screen/state names;
- the sample content and data repeated across later comparisons;
- the minimum information hierarchy each fixture must show;
- target viewport sizes and relevant platform safe areas;
- critical happy, waiting, risky, empty, error, offline, or recovery states.

It does not approve brand colors, typefaces, shape language, icons, component styling, animation, or final navigation. Use neutral grayscale, a system font, simple boxes, and functional labels in this gate.

## Interactive Decision Gate

1. Read the full packet. Build a coverage ledger of launch-critical tasks, high-risk decisions, important states, and explicitly gated or unsupported capabilities. Do not present planned work as live.
2. Present 2–3 distinct screen-set options. Options should vary in fixture scope or evaluation emphasis, not in brand style. A useful set normally contains 4–7 screens; keep only screens that will expose meaningful differences in later system decisions.
3. Save all options in one self-contained preview at `brand/<slug>/options/product-reference-screens-v<n>.html`.
4. For each option, include:
   - **Screen Inventory**: name, user task, state, and why the screen belongs in the fixture.
   - **Neutral Live Wireframes**: switchable screen renders at the approved viewports, including fixed realistic content taken from or safely derived from the packet.
   - **State Coverage**: at least one normal work state and every trust, interruption, or recovery state material to the product.
   - **Product Traceability**: links or citations to the packet sections that require each screen.
   - **Future System-Test Rationale**: which later choices the fixture will expose, such as semantic color, code typography, density, hierarchy, touch targets, or status clarity.
   - **Pros** and **Cons**: coverage, review effort, fixture stability, and blind spots.
5. Add a side-by-side coverage matrix. Keep every option neutral; do not use visual polish to make one option look preferred.
6. Never overwrite or delete an existing preview. Feedback creates the next `-v<n>.html`.
7. Stop and wait for explicit selection.
8. After selection, write or revise `brand/<slug>/product/reference-screens.md` with `status: approved`, an incremented integer `version`, and `owner: product-experience`. Record:
   - the selected preview and option;
   - fixture purpose and non-goals;
   - screen/state inventory;
   - fixed sample content and data;
   - viewport and platform constraints;
   - invariants later previews must preserve;
   - coverage gaps intentionally deferred.

## Later Use

- Color, typography, logo placement, visual style, token, UI-component, and app-system previews must apply every alternative to the same approved fixture content and states.
- A later preview may show a focused subset when space is limited, but must use at least one representative screen and must not change its content between options.
- `app-system` may propose different shells, navigation, and flows. It must retain the fixture's tasks, data, and states so the comparison remains meaningful.
- Revise this fixture only when product scope or the evaluation needs change. Use a new immutable preview and explicit approval, then bump the document version.

## Output

- `brand/<slug>/options/product-reference-screens-v<n>.html` (immutable option history)
- `brand/<slug>/product/reference-screens.md` (written only after explicit selection)
