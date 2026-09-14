---
name: design-system
description: Build, sequence and enforce a design system for an app using this repo's guide. Use when asked to "build a design system", "set up design tokens", "create a type scale", "our spacing is inconsistent", "the app has hardcoded colours", "what should we build first", "is our design system ready to launch", or when someone proposes a new colour role, scale step, or component library. Covers the order to build in, what blocks a release versus what can wait, and the enforcement that stops the system decaying.
---

# design-system — turn this guide into a working system

This repo is a **guide, not a component library**: 21 chapters of rules, organised in four
stages, written to be general rather than tied to any one framework. This skill is the
operational layer — what to do, in what order, and what to refuse.

**Self-contained.** Every path named here resolves inside this repo. There is no build step, no
dependency, and no tooling to install. If you find a reference to a file, package, or app
outside this directory, it does not belong — remove it.

## The idea everything else follows from

> A design system is a set of **rules**, not a box of components.
> Its value is what it **stops** you from doing.

If a developer can still pick any font size, the system has failed — even if it ships 100
components. Judge every proposal by what it prevents, not by what it adds.

## The map

| Stage | Covers | When |
|---|---|---|
| `01-foundations/` | Principles, colour, space + radius, typography, icons, states/elevation/motion | Build first |
| `02-must-have/` | Accessibility, content states, i18n, layering, component API, **enforcement**, actions + undo | Before components |
| `03-production/` | Shell screens, legal + platform, voice, performance, governance | Before launch |
| `04-plan/` | Build order, checklist, common mistakes | Read first and last |

Short on time, read three: `04-plan/01-build-order.md`, `04-plan/02-checklist.md`,
`02-must-have/06-enforcement.md`.

`GLOSSARY.md` at the repo root defines the guide's shared vocabulary in plain language.
Each chapter additionally opens with its own "New words" table covering the terms local to it —
that table is the only definition of most of those terms, so do not trim it.

**Voice.** The prose is pitched at a complete beginner: short sentences, one idea each, every
technical term explained at first use *in every file* (the repetition across files is deliberate,
because a reader may open any file first), and a bad-example-then-good-example after each rule.
Match that voice when editing. Do not reintroduce unexplained jargon, and never drop a rule to
make a passage read more smoothly — restate the rule in easier words instead.

## 1. Build in this order, and refuse to reorder it

From `04-plan/01-build-order.md`:

1. **Tokens** — colour roles → space + radius → type roles → icons → states/elevation/motion.
   At the end you have *one token file and nothing else*.
2. **Make it survivable** — font-scaling decision per type role, layering scale, contrast/a11y
   checks in CI, a lint rule blocking raw values, a reference surface.
3. **Make it a product** — content-state patterns, component API contract, *then* components,
   shell screens, voice, visual regression, governance.

**Stage 2 is not negotiable and does not come later.** Those items are constraints components
must satisfy. Build the components first and you must retrofit font scaling and contrast into
every one of them — which in practice means you never will.

> The classic failure is **building components first**. You end up with 40 components that each
> hardcode their own values, so you have a component library *and* the original problem.

The order also has a defensible answer to "why": space before type, because line height and
spacing interact; colour first, because everything else is drawn in it.

## 2. Decide these before component #1

**Font scaling, per type role** (`01-foundations/04-typography.md` §4.6). Users run at 130–200%
permanently, and this is nearly impossible to retrofit:

| Role | Scales? | Max multiplier |
|---|---|---|
| body, row title, row subtitle | yes | **2.0** |
| title, heading | yes | **1.6** |
| tab-bar labels, badges | yes | **1.2** |
| monospace in a terminal view | usually not | **1.0** |

The layout half is the half that actually breaks: **no container holding text may have a fixed
height** — use min-height plus padding. Capping the multiplier alone does not fix a clipped row.

**Contrast**, both themes: 4.5:1 for text, 3:1 for non-text. And never let colour alone carry
meaning — pair it with a label, icon, or shape (`01-foundations/02-color.md`,
`02-must-have/01-accessibility.md`).

**A layering scale** before the first overlay, or z-index values start appearing by hand
(`02-must-have/04-layering.md`).

## 3. Enforcement is the whole game

`02-must-have/06-enforcement.md` is the most important chapter here. A system with no
enforcement decays to nothing in about two quarters — not through carelessness, but because
deadlines are real and hardcoding a value is always faster.

Four mechanisms, in order of value:

1. **A lint rule blocking raw values** — colour, font size, spacing, radius, z-index. If you do
   one thing from this entire guide, do this. Roll it out without stopping work: week 1 warning
   only, week 2 fix by area, week 3 error on new and changed files, week 4 error everywhere.
   Allow a *visible* escape hatch — a comment carrying a reason — so people break out openly
   rather than secretly.
2. **A reference surface** rendering every token and every component in every variant × size ×
   state, in both themes, at 100% and 200% font scale. If you cannot see the whole system side
   by side, you cannot review it, and it does not really exist.
3. **Visual regression screenshots** — the only thing that catches slow silent drift, where a
   token tweak moves 30 screens by 2px and nobody notices for months.
4. **An automated contrast check** — read every foreground/background pair actually used,
   compute the ratio, fail CI below the limit. Roughly 30 lines.

**Do not rely on code review.** Humans miss `padding: 14` in a 400-line diff every time.
Automate the mechanical checks and save human attention for logic and UX.

When you write the gate, two rules keep it alive:

- **Tier it.** Block on what is small enough to fix today; put the large pre-existing counts
  behind a frozen number that may only ever shrink. A gate that blocks on hundreds of existing
  violations gets deleted in week two.
- **Name the fix in the message.** "fontSize: 15 → use the row-title role" gets obeyed;
  "violation" gets worked around.

## 4. What blocks a launch, and what does not

`04-plan/02-checklist.md` splits this honestly — treat the whole list as required and you will
never ship.

- **🔴 Blocking**: the token set both themes, font-scaling behaviour, contrast verified, no
  meaning by colour alone, 44pt touch targets, reduce-motion, layering scale, component API
  contract, lint rule, reference surface, content states, error messages that say what/why/what
  next, destructive-action pattern, shell screens, account deletion if you have accounts,
  permission priming.
- **🟡 Soon**: visual regression, terminology glossary, haptics, notification rules, performance
  budget, real low-end device testing, decision records, a named owner.
- **🟢 Defer until the pain is real**: cross-platform token pipeline, design-tool parity, formal
  versioning, density modes, chart palette, full RTL launch, an RFC process. Building these
  early is the most common way a design system becomes something people route around.

## 5. The three tests that say whether it works

1. **New screen** — can someone build one using only existing tokens and patterns, adding
   nothing to the system?
2. **Stranger** — can a new developer open any component and understand it in 30 seconds,
   because they all look the same?
3. **Drift** — if someone hardcodes a colour today, does anything stop them before it reaches
   main?

If the answer to #3 is "code review", the answer is really *no*.

## If you have one day

Colour roles for both themes → spacing and radius scale → type roles including the font-scaling
decision → lint rule at warning level → reference surface. That is roughly 80% of the value;
everything else is refinement.

## Stop conditions

- **One screen looks wrong** — alignment, a touch target, a missing label. That is ordinary UI
  work using the tokens that already exist, not a change to the system.
- **A proposal to add a token** — check `03-production/05-governance.md` first. A token added
  for one use is how a scale becomes a junk drawer; name by meaning, never by appearance.
- **"Should we build a component library at all?"** — that is a product question, and the answer
  is usually "not yet". Tokens plus enforcement deliver most of the value.
- **Applying this to a specific codebase** — this repo stays general. Measurements, file paths,
  and framework details belong in that project, not here.
