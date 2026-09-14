# 19. The Order You Build Things In

**In one line:** Build the basic values first. Build the safety checks second. Build the reusable screen parts last. Never the other way round.

**Why this chapter exists:** You cannot paint a wall before the wall is built. Building the look of an app works the same way. Each stage decides what the next stage is allowed to do. Do the stages in the wrong order and you have to tear up finished work. Then you build it a second time. Most teams start by building buttons. That is the single most expensive mistake in this whole guide.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gap sizes exist, which shapes exist. Like a school uniform rule sheet, but for a screen. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `spacing.md = 12`. After that everyone types `spacing.md` instead of typing `12`. Change it in one place and it changes everywhere. |
| **Padding** | The space inside a box, between the edge of the box and whatever sits in it. `padding: 12` means leave a gap of 12 all the way round. |
| **Space** | The size of a gap between two things on a screen. Also called spacing. |
| **Radius** | How rounded the corner of a box is. Zero gives a sharp corner. A bigger number gives a rounder corner. |
| **Raw value** | A number or colour typed straight into the screen code, with no name. `padding: 13` is a raw value. `padding: spacing.md` is not. |
| **Hardcode** | To type a raw value straight into a piece of screen code. The value is then stuck in that one spot. Changing it means hunting down every copy by hand. |
| **Hex code** | A colour written as a code, like `#1A73E8`. The `#` and six characters are the colour. A "raw hex" means someone typed the code instead of using a token. |
| **Component** | A reusable piece of screen you build once and use in many places. A button is a component. A card is a component. Like a rubber stamp: make it once, press it a hundred times. |
| **Component library** | All of your components kept together in one place, so anyone on the team can pick one up and use it. |
| **Role** | The *job* a value does, not what it looks like. `danger` is a role. `red` is not. Roles let you change the colour later without every name becoming a lie. |
| **Colour role** | A named colour job, like `background`, `textPrimary`, `danger`. |
| **Type role** | A named text job, like `body`, `caption`, `rowTitle`. Each one bundles size, line height and weight together. |
| **Line height** | The height of one line of text, counting the small gap above and below it. More line height is easier to read but uses more room. |
| **Theme** | A full set of colours for one situation. Most apps have two themes: light mode and dark mode. |
| **Dark mode** | The version of the app with a dark background and light text, used at night. |
| **States** | How something looks when you touch it, when it is switched off, or when it is chosen. Pressed, disabled, selected, focused. |
| **Elevation** | How far a thing looks like it is lifted off the screen. Usually shown with a shadow. |
| **Motion** | Movement on screen: how long an animation lasts and how it speeds up and slows down. |
| **Font scaling** | Phone settings let a user make all text bigger. Your app must still work when they do. |
| **Layering scale** | A named list saying what sits on top of what: normal content, then a panel, then a warning box. |
| **z-index** | The plain code way of saying "how high up this sits". A bigger number sits on top. A layering scale replaces guessing these numbers. |
| **Overlay** | Anything that sits on top of the screen: a pop-up box, a panel that slides up, a menu. |
| **Contrast ratio** | A number saying how different two colours are in brightness. Bigger is easier to read. Grey text on a white background has a low number and is hard to read. |
| **a11y** | A short way of writing "accessibility". There are 11 letters between the `a` and the `y`. Accessibility means the app works for people with poor eyesight, shaky hands, or a screen reader. |
| **Screen reader** | Software that reads the screen aloud for blind users. |
| **CI** | Short for "continuous integration". A machine on a server that checks your work every time you save it to the shared project. If a rule is broken, it refuses the change. Like a teacher checking homework before it goes in the file. |
| **Lint rule** | An automatic check that reads your code and complains about a mistake. Here it complains when someone types a raw value instead of a token. |
| **Gate** | A check that stands in the way and blocks bad work from getting in. The CI checks and the lint rule are gates. |
| **Reference surface** | One page inside your app that shows every token and every component together, in one place. Like the formula page at the back of a maths book. |
| **Content states** | What a screen shows when it has no data yet, is still loading, has failed, or has no internet. |
| **Empty state** | What a screen shows when there is nothing to show. "No messages yet." |
| **Pattern** | One agreed way of handling a thing that keeps coming back, written down once. Every empty screen then looks the same, instead of each one being invented again. |
| **Offline** | The phone has no internet connection. |
| **API** | Short for "application programming interface". Here it means the agreed list of settings a component accepts, and what each setting is called. |
| **Component API contract** | One page that says how every component must be built: what the settings are called, which ones are allowed, what happens by default. Agreed before you build the first component. |
| **Shell screens** | The screens around the edges of your app that are not the main content. The screen while the app opens, the "please update" screen, the "you were logged out" screen. |
| **Cold start** | Opening the app after it was fully closed, rather than opening it again while it was still sitting in the background. |
| **Force upgrade** | A screen that blocks the app until the user installs a newer version. |
| **Voice** | How your app sounds in words. Friendly or formal, short or chatty. |
| **Terminology** | The exact words your app uses for things, used the same way every time. Not "delete" on one screen and "remove" on another. |
| **Haptics** | The small buzz the phone gives when you press something. |
| **Visual regression test** | An automatic check that takes a picture of each screen and compares it with yesterday's picture. If something moved, it tells you. |
| **Governance** | The rules about who is allowed to change the design system, and how. Who decides, and how the decision gets written down. |
| **Token bar** | The agreed standard a new token must reach before it is allowed in. It stops the list of tokens growing forever. |
| **Decision record** | A short written note saying what was decided and why. Six months later nobody has to guess. |
| **Migrate** | Move old screens over to the new way. Replace raw values with tokens, screen by screen. |
| **Drift** | The slow spread of small differences. One person types 13, another types 17, and after a year nothing matches. |
| **Constraint** | A rule you are not allowed to break. Set it first, and everything built afterwards has to obey it. |

---

Build in this order. The order matters — each phase is a **constraint** on the next.

**What this means:** A phase is a stage of work. "A constraint on the next" means the earlier stage sets rules that the later stage must obey. Phase 1 decides which colours exist. Phase 3 builds buttons, and those buttons may only use the colours Phase 1 allowed.

Think about building a house. Walls, then wiring, then paint. You can paint a wall in an afternoon. Adding wiring after the paint means breaking the wall open again. The work is not harder because painting is hard. It is harder because you did it in the wrong order.

---

## 19.1 Phase 1 — Foundation

Build the tokens. Roughly one week.

**What this means:** A token is a name for a value, like `x = 5` in maths. In Phase 1 you decide every value your app is allowed to use, and give each one a name. You build no screens and no buttons this week. You only write the list.

| # | Step | Why here |
|---|---|---|
| 1 | **Colour roles** | Everything else is drawn in colour |
| 2 | **Space + radius** | Biggest visual gain for the least work |
| 3 | **Type roles** | After space — line height and spacing interact |
| 4 | **Icons** | Pick one family, remove everything else in one pass |
| 5 | **States, elevation, motion** | The polish layer |

Read the table like this. The left column is the order you do things in. The middle column is the job itself. The right column says why that job sits in that spot. Now each row in plain words.

**1. Colour roles come first.** A colour role is a named colour job, like `background` or `danger`. Colour is first because every other thing on the screen is drawn using a colour. Text has a colour. A gap sits on a coloured background. You cannot check whether text is readable until you know what it is sitting on. See [the colour chapter](../01-foundations/02-color.md).

**2. Space and radius come second.** Space is the gap between things. Radius is how rounded a corner is. This step gives the biggest visible improvement for the least effort. Fixing messy gaps changes how the whole app feels in an afternoon. Leave the gaps messy and the app keeps looking untidy, however good your colours are. See [the space and radius chapter](../01-foundations/03-space-and-radius.md).

**3. Type roles come third, after space.** A type role is a named text job, like `body` or `caption`. It comes after space because line height and spacing affect each other. Line height is the vertical space each line of text takes up. If you fix your gaps first, you can see how much room the text really needs. Do it the other way round and you will redo both. See [the typography chapter](../01-foundations/04-typography.md).

**4. Icons come fourth.** An icon family is one matching set of small pictures, drawn in the same style. Pick one family and delete every icon that is not from it, in a single pass. Doing it in one pass matters: half-finished icon cleanup looks worse than not starting. See [the icons chapter](../01-foundations/05-icons.md).

**5. States, elevation and motion come last in this phase.** States are how a thing looks when pressed, switched off, or selected. Elevation is how lifted it looks. Motion is how it moves. This is the polish layer — the finishing touches. Polish is worth nothing if the four steps above are wrong. See [the states, elevation and motion chapter](../01-foundations/06-states-elevation-motion.md).

At the end of Phase 1 you should have one token file and nothing else.

**What this means:** One file. Not a component library, not new screens, not a redesign. Only a list of named values. If you finished the week with three buttons and no token file, Phase 1 did not happen. Build the buttons now and you will rebuild them later, once the real values exist.

Two boxes follow. Before you read them, here is what the words inside them mean. A name ending in `.js` is a file of code, so `Button.js` is the file that holds the button. `background` is the colour behind the button. `padding` is the space inside it. `radius` is how rounded its corners are. `fontSize` is how big its text is.

Below is the version to avoid. Week one produced a button, and every value inside it was typed by hand.

```
Week 1 output:
  Button.js
     background: #1A73E8
     padding: 13
     radius: 7
     fontSize: 15
```

Below is the version to use. Week one produced only names and values, and no screen code at all.

```
Week 1 output:
  tokens.js
     color.accent      = #1A73E8
     spacing.md        = 12
     radius.sm         = 8
     type.body.size    = 16
```

---

## 19.2 Phase 2 — Make it survivable

Do this **before** building components.

**What this means:** "Survivable" means the system keeps working under real conditions. Real users make their text bigger. Real screens stack pop-ups on top of pop-ups. Real teams get lazy and type a raw value. Phase 2 is the set of checks that keeps all of that from breaking the system later.

| # | Step | Why before components |
|---|---|---|
| 6 | **Font-scaling decision per type role** | Components must be built to satisfy it |
| 7 | **Layering scale** | Overlay components need it to exist |
| 8 | **Contrast + a11y checks in CI** | Catches bad tokens before 40 components use them |
| 9 | **Lint rule blocking raw values** | Stops drift starting on day one |
| 10 | **Reference surface** | You cannot review what you cannot see |

Each row again, in plain words.

**6. Font-scaling decision, one per type role.** Phone settings let a user make all text bigger. For each named text job you decide how much bigger it is allowed to get. Components must be built to obey that from the start. A box built to fit small text will chop off the end of big text. Fixing that later means opening every single component again.

**7. Layering scale.** A layering scale is a named list of what sits on top of what. Overlay components — pop-up boxes, sliding panels, menus — need that list to exist before they can be built. Without it, each person picks their own number, and one day a menu opens behind the panel it belongs to. See [the layering chapter](../02-must-have/04-layering.md).

**8. Contrast and accessibility checks in CI.** CI is the machine that checks your work every time you save it to the shared project. Contrast ratio is a number saying how different two colours are in brightness. The machine checks your colour pairs and your accessibility rules for you. Do this now and a bad token gets caught while one file uses it. Do it later and you find out once 40 components already use it. See [the accessibility chapter](../02-must-have/01-accessibility.md).

**9. Lint rule blocking raw values.** A lint rule is an automatic check that complains about a mistake in your code. This one refuses any raw value. That means any colour code or any number typed by hand instead of a token. Turn it on now and the slow spread of small differences never starts. Turn it on in a year and you first have to clean up a year of mess. That slow spread has a name in this guide: drift. See [the enforcement chapter](../02-must-have/06-enforcement.md).

**10. Reference surface.** This is one page inside your app showing every token and every component together. You cannot review what you cannot see. When your colours are spread across 60 different screens, nobody notices that two greys are almost the same. Put them side by side on one page and you see it in a second. Without that page, near-copies keep piling up and nobody ever spots them.

### Why you cannot change this order

These are **constraints components must satisfy**.

**What this means:** A constraint is a rule you are not allowed to break. Steps 6 to 10 are the rules. Components are the things that must follow the rules. Rules always come before the things that follow them. A school announces the uniform rule before students go out and buy the shirt.

Build 40 components first, and you make work for yourself later. You then have to go back and add font scaling and contrast to all 40. In practice that means you never will.

**What this means:** Going back to add something to finished work is slow, dull work. Adding font scaling to 40 finished components means opening 40 files. Then changing each one. Then testing each one. Nobody has time for that, so it gets put off. Being honest: put off means never done.

Below is the version to avoid. The checks arrive after the components, so every component needs reopening.

```
Week 2   build 40 components
Week 9   add font scaling  -> reopen 40 files
Week 9   add contrast check -> 12 components already fail
```

Below is the version to use. The checks exist first, so every component is born obeying them.

```
Week 2   font scaling rule, layering scale, contrast check, lint rule
Week 5   build components  -> each one obeys the rules from line 1
```

---

## 19.3 Phase 3 — Make it a product

Now you build the things people actually see and use. This phase only works because Phases 1 and 2 are finished.

| # | Step |
|---|---|
| 11 | **Content-state patterns** — empty, loading, error, offline |
| 12 | **Component API contract** — one page, before component #1 |
| 13 | **Components** — now, and only now |
| 14 | **Shell screens** — force upgrade, session expired, cold start |
| 15 | **Voice + terminology + haptics** |
| 16 | **Visual regression tests** |
| 17 | **Governance** — owner, token bar, decision records |

Each row in plain words.

**11. Content-state patterns.** Every screen has four bad days. You design those four once, up front. **Empty** is when there is nothing to show yet. **Loading** is while the data is still arriving. **Error** is when something failed. **Offline** is when the phone has no internet. Decide how all four look once, and every screen reuses the answer. Skip this and each screen gets its own answer, invented in a hurry. You end up with six different "nothing here yet" screens that all look and sound different. See [the content states chapter](../02-must-have/02-content-states.md).

**12. Component API contract.** This is one page saying how components are built. It says what the settings are called. It says which settings are allowed. It says what happens when you do not set one. It also lists which components exist — taken from the real screens — and the order they will be built in. One page, written before component number 1 exists. Agree on it after ten components exist and you have to rewrite all ten. See [the component API chapter](../02-must-have/05-component-api.md).

**13. Components — now, and only now.** This is step 13 out of 17. Most teams do this at step 1. That single difference decides whether the work holds together or falls apart.

**14. Shell screens.** These are the screens around the edge of the app. **Force upgrade** blocks the app until the user updates. **Session expired** is the "you have been logged out" screen. **Cold start** is what shows while the app opens from fully closed. Users see these on their worst day with your app, so they are worth designing. Forget them and the user meets a blank, broken-looking screen at the exact moment they are already annoyed. See [the shell and lifecycle chapter](../03-production/01-shell-and-lifecycle.md).

**15. Voice, terminology and haptics.** Voice is how your app sounds in words. Terminology means using the same word for the same thing everywhere. Not "delete" on one screen and "remove" on the next. Haptics is the small buzz the phone gives when you press something. Without one agreed set of words, the app reads like it was built by strangers. Strangers who never spoke to each other. Users notice that, and they stop trusting the app. See [the voice and content chapter](../03-production/03-voice-and-content.md).

**16. Visual regression tests.** These are automatic checks that photograph each screen and compare the photo with the last one. If something shifted, they tell you. They stop small accidental changes from piling up unnoticed. Without them a small change slips in and nobody notices for weeks. By then nobody can work out which change caused it.

**17. Governance.** Governance means the rules for changing the system. It has three parts named here. **Owner** is the one person responsible for the system. **Token bar** is the standard a new token must reach before it is let in. **Decision record** is a short note of what was decided and why, so nobody has to guess later. With no owner and no bar, anyone adds a token whenever they feel like it. The list then grows forever, and a list of everything is a rule about nothing. See [the governance chapter](../03-production/05-governance.md).

---

## 19.4 The mistake to avoid

> **Building components first.**

It is the classic failure. You end up with 40 components, and each one
hardcodes its own values. So now you have a component library
**and** the original problem.

**What this means:** "Hardcode" means typing the number or colour straight into the component, with no token name. Your original problem was values scattered everywhere with nothing matching. Now each of your 40 new components carries its own hardcoded values. The problem is still there. It has only moved inside the component library, where it is harder to see. You did months of work and kept the mess.

Below is the version to avoid. Three components, three different values, and no shared name anywhere.

```
Button.js   padding: 12   color: #1A73E8
Card.js     padding: 13   color: #1B74E9
Row.js      padding: 16   color: #1A73E8
```

Below is the version to use. The values live in one place, and the components point at them.

```
tokens.js   spacing.md = 12   color.accent = #1A73E8

Button.js   padding: spacing.md   color: color.accent
Card.js     padding: spacing.md   color: color.accent
Row.js      padding: spacing.md   color: color.accent
```

More mistakes like this one are collected in [the common mistakes chapter](03-common-mistakes.md).

---

## 19.5 Rough timeline

For a small team on an existing app:

**What this means:** "An existing app" means an app that already has screens and already has a mess in it. If you are starting from an empty project, you skip the migration weeks. The plan below is the harder case.

Below is the week-by-week plan. Read the left column as the week, and the right column as what happens in it.

```
Week 1      Phase 1 — tokens
Week 2      Phase 2 — gates and enforcement
Week 3–4    Migrate existing screens to tokens (lint rule guides you)
Week 5+     Phase 3 — patterns, components, shell screens
Ongoing     Governance
```

Two words in that plan need explaining. **Gates** are the checks that block bad work from getting in. The CI checks and the lint rule from Phase 2 are your gates. **Migrate** means moving your old screens over to the new tokens, replacing hand-typed values with names.

Notice that governance says "Ongoing", not a week number. It never finishes. As long as the app is alive, someone has to decide what is allowed in.

Migration is usually the longest part. The lint rule turns it into a
to-do list you can see and count to the end of. Without that list you
have only a vague wish to tidy up one day.

**What this means:** A list you can count to the end of has a fixed size. The lint rule marks every raw value in your project. So you get a real number, say 312 places to fix. You fix 40 today and the number drops to 272. That is a task you can watch shrinking towards zero. "Clean up the app sometime" is a wish, and a wish has no end.

---

## 19.6 What "done" looks like for each phase

You need a test for finishing, or every phase drags on. Here is the test for each one.

| Phase | Done when |
|---|---|
| 1 | One token file. Both themes. No component uses a raw value. |
| 2 | CI fails on a raw hex, a bad contrast pair, or a fixed-height text box. |
| 3 | A new screen can be built from existing patterns without new tokens. |

Each row in plain words.

**Phase 1 is done** when three things are true. There is exactly one file holding your values. That file covers both themes, meaning light mode and dark mode. And no component has a value typed into it by hand.

**Phase 2 is done** when the machine refuses bad work on its own. A **raw hex** is a colour code like `#1A73E8` typed straight into a screen. A **bad contrast pair** is two colours too close in brightness to read comfortably. A **fixed-height text box** is a box with a locked height. That box chops off the text when a user makes their text bigger. Notice the test is "CI fails", not "we agreed not to do that". A rule nobody enforces is not a rule, and people go back to their old habits within weeks.

**Phase 3 is done** when someone can build a brand new screen out of the parts that already exist. They add nothing to the system to do it.

That last line is the real test of a design system:
**can someone build a new screen without adding anything to the system?**

**What this means:** Watch what happens when someone builds a new screen. Does it need a new colour, a new gap size, or a new component every time? Then the system is not finished. It is still being invented. When a new screen can be put together from parts that already exist, the system is doing its job. That is the finish line.

---

## 19.7 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] Phase 1 first, in this order — colour roles, space + radius, type roles, icons, then states, elevation and motion
- [ ] Phase 1 ends with one token file and nothing else — both themes covered, no component using a raw value
- [ ] Phase 2 happens before any component is built
- [ ] A font-scaling decision exists for every type role — how much bigger each text job may get
- [ ] A layering scale exists — a named list of what sits on top of what
- [ ] Contrast and accessibility checks run in CI — the machine checks them, not a person
- [ ] A lint rule blocks raw values — no hand-typed numbers or colour codes
- [ ] A reference surface exists — one page showing every token and component
- [ ] Content-state patterns designed — empty, loading, error, offline
- [ ] Component API contract written on one page, before component number 1
- [ ] Components built only after all of the above
- [ ] Shell screens built — force upgrade, session expired, cold start
- [ ] Voice, terminology and haptics decided
- [ ] Visual regression tests running
- [ ] Governance in place — an owner, a token bar, decision records
- [ ] Components were not built first — that is the classic failure
- [ ] The real test passes: a new screen can be built from existing patterns without adding new tokens
