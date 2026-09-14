# UI Design System Guide

Written for people who have never done this before.

**In one line:** This guide shows you how to write down a short list of rules. The rules say how your app looks. The guide then shows you how to make everyone stick to them.

**Why this chapter exists:** This page is the front door. It tells you what a design system is. It tells you what order to read the other files in. It tells you where each file lives.

It also gives you the one idea the whole guide is built on. That idea is this: a design system is a set of rules. Its worth comes from what it stops you from doing.

This is a complete guide to building a design system for a **production app**. A production app is a real app that real people use every day. It is not a school project you hand in once and then throw away. The guide is written to be general. It is not tied to any one project, any one company, or any one programming language.

If you hit a word you do not know anywhere in this guide, open [GLOSSARY.md](GLOSSARY.md). It lists every hard word in the guide, explained in one line.

Reading all of it takes about two hours. You do not have to read it all today.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **App** | A program you use on a phone or a computer. WhatsApp is an app. |
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, colours, pictures, the gaps between things. |
| **Design system** | The written list of rules your app follows. Which colours exist, which text sizes exist, which corner shapes exist. Like a school uniform rule sheet, but for a screen. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `spacing.md = 12`. After that everyone types `spacing.md` instead of typing `12`. Change it in one place and it changes everywhere. |
| **Component** | A piece of the screen you build once and reuse. A button is a component. You build one button, then use it on 40 screens. |
| **Component library** | A collection of ready-made components that a team shares. |
| **Developer** | The person who writes the code for the app. That will be you. |
| **Ships / shipping** | Releasing something so real people can use it. "We shipped 100 components" means those 100 components are done and in use. |
| **Hex code** | A colour written as a code, like `#FF0000` for red. It is the raw value of a colour, with no name on it. |
| **Palette** | The full set of colours your app is allowed to use. |
| **Lint rule** | A small automatic check that reads your code and complains when you break a rule. Like spellcheck, but for code rules. |
| **Enforcement** | The part of the work that makes the rules stick. Rules nobody checks turn back into chaos in a few months. |
| **Launch** | The day your app goes out to real users for the first time. |

---

## What a UI is

The UI is everything you see and touch on a screen.

Open any app on your phone right now. Look at it for ten seconds. You will see buttons, words, pictures, small icons, colours, and empty gaps between things. All of that together is the UI. "UI" is short for "user interface" — the surface where you and the app meet.

Someone chose every one of those things. Someone chose that the button is blue and not green. Someone chose that the gap under the title is that wide. This guide is about making those choices once and writing them down. After that you stop deciding them all over again every week.

---

## What a design system is

A design system is the written list of rules for how your app looks.

Think about a school with 1000 students. If every student picks their own clothes, the morning assembly looks like a crowd at a railway station. Nobody looks wrong on their own, but together it looks like chaos. Now give everyone one shirt, one colour, one pair of shoes. The same 1000 students now look like one school.

A design system does that for an app. It says which colours you are allowed to use. It says which text sizes you are allowed to use. It does the same for gap sizes and for corner shapes. Everything on every screen is built out of that short list.

Below is what a screen looks like when nobody wrote the rules down. Three buttons, three different blues, three different sizes.

The codes starting with `#` are colours. `#1E88E5` is one particular blue. The plain numbers are text sizes, and a bigger number means bigger writing on the screen.

```
Home screen     button colour #1E88E5   text size 15
Search screen   button colour #2196F3   text size 16
Profile screen  button colour #1976D2   text size 14
```

Below is the same three screens with a design system. One blue, one size, named once and used everywhere.

```
color.accent = #1E88E5
text.body    = 16

Home screen     button colour color.accent   text size text.body
Search screen   button colour color.accent   text size text.body
Profile screen  button colour color.accent   text size text.body
```

The two names in that block were invented by the team. `color.accent` is their name for the one colour that stands out, the one used on buttons and links. `text.body` is their name for the size of normal reading text. You will meet naming like this again and again in this guide.

Nobody using your app can name the difference. Everyone using your app feels it.

---

## What a token is

A **token** is a name you give to a value.

It is like `x = 5` in maths. You say once that `x` is 5. After that you write `x` everywhere instead of the number. Later you may decide `x` should be 6. You change that one line, and every place that used `x` changes with it.

In an app it works the same way. You write `spacing.md = 12`. From then on, nobody types the number 12. They type `spacing.md`.

The `md` in that name is short for medium, so `spacing.md` means "the medium gap". It is a name you invented, not a file on your computer.

The 12 counts pixels. A pixel is one of the tiny dots a screen is built from. So a gap of 12 is twelve dots wide. A text size of 16 is sixteen dots tall. Every plain number in this guide is a count of pixels unless it says otherwise.

Next comes code written without tokens. One word in it needs explaining first. `padding` is the space inside a box, between the edge of the box and the writing inside it. Give a button padding of 12 and there are twelve dots of clear space around its label.

In the block below, the number 12 is typed out by hand in three places. To change the gap you have to hunt down all three yourself. Miss one and that button no longer matches the other two. Nobody will notice for months.

```
padding: 12
padding: 12
padding: 12
```

Below is code with a token. The number lives in one place. Change it there and all three change.

```
spacing.md = 12

padding: spacing.md
padding: spacing.md
padding: spacing.md
```

The same trick works for colours, text sizes, corner roundness, and shadows. Most of this guide is about picking good values and giving them good names.

---

## The one big idea

> A design system is a set of **rules**, not a box of components.
>
> Its value is what it **stops** you from doing.

**What this means:** A **component** is a piece of the screen you build once and then reuse. A button is a component. Many people think a design system is a big box of these components. They also think that more components means a better system. That is backwards. The system earns its worth by taking choices away from you. It does not earn its worth by handing you more parts.

If a developer can still pick any font size, the system has failed —
even if it ships 100 components.

**What this means:** "Ships 100 components" means the team built and released 100 reusable pieces. That sounds impressive. But think about the person who writes the next new screen. That person can still type any text size they like. So the screens slowly stop matching each other, and the app pulls apart anyway.

Here is what that looks like in real life. Ten people build ten screens. Each one picks a text size that looks right to them at that moment.

```
14, 15, 16, 17, 18, 20, 21, 22, 24, 28, 30, 32, 34, 36
```

That is 14 different font sizes in one app. Nobody chose them together. The app now reads like five different apps stitched into one. No single screen is the guilty one, so nobody is ever asked to fix it.

Below is the fix. You write down a small set of allowed sizes and give each one a name. There is no fifteenth size, so nobody can invent one.

```
text.caption = 13
text.body    = 16
text.title   = 20
text.display = 28
```

Those four names say what each size is for. `caption` is small print, like the line under a photo. `body` is normal reading text, the size most words on the screen use. `title` is the heading at the top of a section. `display` is the one big line you put at the top of a screen. Four sizes cover almost everything a normal app needs.

So when you judge your own system, do not count what it gives you. Count what it refuses.

---

## How to read this

Read in order. Each folder is a stage.

Do not skip ahead. Say you start building buttons first, before you have chosen your colours, sizes and gaps. Those buttons are then built on numbers you made up on the spot. You have to pull them apart and build them a second time.

The table below lists the four folders in the order you should work through them.

| Folder | What it covers | When |
|---|---|---|
| `01-foundations/` | Colour, space, type, icons, motion | Build first |
| `02-must-have/` | The things that break real apps if missing | Build before components |
| `03-production/` | Legal, shell screens, perf, ownership | Before/around launch |
| `04-plan/` | Build order, checklist, mistakes | Read first and last |

Some words in that table need spelling out.

| Word in the table | What it means |
|---|---|
| **Type** | Short for typography. It means the text itself. How big it is. How thick the strokes of the letters are. How far apart the lines of writing sit. |
| **Motion** | The small movements on screen. A panel that slides up from the bottom is motion. |
| **Legal** | The rules that the law and the app shops put on you. The app shops are Apple's App Store and Google Play. Those are the two places most people download apps from. One such rule: you must ask the user before you switch on the camera. Break a rule like that and the shop can refuse your app. It can also pull the app down after it is already out. |
| **Shell screens** | The screens that belong to the whole app instead of to one feature. The picture you see while the app is still starting up is one of them. |
| **Perf** | Short for performance. It means how fast and how smooth the app feels. |
| **Ownership** | Who is in charge of the rules once the app is live. When someone wants to change a rule, that person decides. |

The last row is not a mistake. You read `04-plan/` first, so you know where you are going. You read it again at the end, to check what you missed.

---

## Fast path

Short on time? Read these three:

1. [`04-plan/01-build-order.md`](04-plan/01-build-order.md) — what to build, in what order
2. [`04-plan/02-checklist.md`](04-plan/02-checklist.md) — what blocks launch vs what can wait
3. [`02-must-have/06-enforcement.md`](02-must-have/06-enforcement.md) — how to stop the system from dying

**What this means:** "What blocks launch" is the list of things you must finish first. Until they are done, you should not let real people use your app. Open the doors early and the first strangers who walk in meet screens that break. You then fix those screens in a panic while people are watching, and some of them never come back.

"What can wait" is everything else. Those things can be added later, and nobody gets hurt in the meantime.

"How to stop the system from dying" means keeping the rules alive after the first month. New people join the team. Unless something stops them, they go back to typing numbers straight into the code instead of using your names.

These three files take about twenty minutes. They will not teach you the details. They will keep you from building the wrong thing first.

---

## File map

The block below shows every file in the guide and what each one is about. Use it to find the file you need.

```
UI/
├── README.md                     This file — start here
├── GLOSSARY.md                   Every hard word in this guide, explained in one line
├── 01-foundations/
│   ├── 01-principles.md          What a design system is
│   ├── 02-color.md               Color roles and ramps
│   ├── 03-space-and-radius.md    Spacing scale, corner radius
│   ├── 04-typography.md          Type scale and roles
│   ├── 05-icons.md               Icon rules
│   └── 06-states-elevation-motion.md
├── 02-must-have/
│   ├── 01-accessibility.md       Font scaling, contrast, screen readers
│   ├── 02-content-states.md      Empty, loading, error, offline
│   ├── 03-internationalization.md
│   ├── 04-layering.md            z-index / stacking
│   ├── 05-component-api.md       How components should be written
│   ├── 06-enforcement.md         Lint, reference surface, visual regression tests
│   └── 07-actions-and-undo.md    Destructive actions
├── 03-production/
│   ├── 01-shell-and-lifecycle.md App-level screens
│   ├── 02-legal-and-platform.md  Store rules, permissions, privacy
│   ├── 03-voice-and-content.md   Words are UI
│   ├── 04-performance-and-assets.md
│   └── 05-governance.md          Owner, rules, versioning
└── 04-plan/
    ├── 01-build-order.md
    ├── 02-checklist.md
    └── 03-common-mistakes.md
```

That map uses a lot of words you have not met yet. Here is each one in a line. You do not need to remember them now. They are here so the map makes sense when you look at it.

| Word in the map | What it means |
|---|---|
| **Role** | The job a colour or a text size does, named by job and not by look. `text` and `border` are roles, because each name tells you where the colour is used. `grey-300` is not a role. It only tells you the colour is a shade of grey. Nobody reading it can tell where that grey is meant to be used. |
| **Ramp** | One colour printed at many lightness levels, from very pale to very dark, in order. Like a paint shade card. |
| **Scale** | The full set of allowed values, in order. A spacing scale is your list of allowed gap sizes. |
| **Radius** | How rounded a corner is. 0 is a sharp corner like a sheet of paper. 12 is a soft corner like a WhatsApp message bubble. |
| **Icon** | A small picture that stands for an action or a place. The house symbol that takes you home. |
| **State** | What a thing looks like right now: normal, being pressed, switched off, loading. One button has several states. |
| **Elevation** | How far above the page a thing looks like it is floating, shown with a shadow. |
| **Motion** | Movement on screen, such as a panel sliding up from the bottom. |
| **Accessibility** | Making the app usable by people who cannot see well, cannot hear, or cannot tap accurately. |
| **Font scaling** | The phone setting that makes all text bigger. Your app must still work when someone turns it up. If your screens only fit small text, the words get cut off and those people cannot read them. |
| **Contrast** | How different two colours are in lightness. Pale grey text on white has low contrast and is hard to read. |
| **Screen reader** | Software that reads the screen out loud for a person who cannot see it. |
| **Empty / loading / error / offline** | The four awkward screens. Nothing to show yet. Still fetching. Something went wrong. No internet. |
| **Internationalization** | Getting the app ready for other languages. Translated words are often longer than the English ones. Some languages are also read from right to left. Both of those can break a screen that was built for English only. Buttons burst, and words run off the edge. |
| **z-index / stacking / layering** | The rule for what sits on top of what when two things overlap. A pop-up box must sit above the page behind it. |
| **Component API** | API is short for "application programming interface". Here it means one thing only. It is the short list of settings you are allowed to hand a component when you use it. For a button that might be the words on it, and whether it is switched off. |
| **Lint** | An automatic check that reads your code and complains when you break a rule. Like spellcheck, for code. |
| **Reference surface** | One screen inside your app that shows every colour, size and component in one place. Seeing them side by side is how you spot the two blues that were meant to be one blue. |
| **Visual regression test** | An automatic check that takes a picture of a screen. It compares that picture with the one from last time. If they differ, it tells you, so changes nobody meant to make cannot slip through. |
| **Destructive action** | An action that deletes something or cannot be taken back, like deleting a chat. |
| **App-level screens** | Screens that belong to the whole app instead of to one feature. The picture shown while the app is starting up is one of them. |
| **Lifecycle** | The stages an app passes through while a person uses it. It starts up, it runs, it goes to sleep when the person switches to another app, and it closes. Each stage needs something on screen, and that is what that file covers. |
| **Store rules** | The rules Apple's App Store and Google Play force on every app before they allow it. |
| **Permissions** | The pop-up questions asking to use the camera, the microphone or your location. |
| **Privacy** | What you tell users about the data you collect from them. It also covers what you are allowed to do with that data afterwards. |
| **Performance** | How fast and how smooth the app feels. |
| **Assets** | The files shipped inside your app that are not code: images, icons, fonts. |
| **Governance** | Who decides when someone wants to add a new colour or a new size. It also covers how that decision gets made. Without an answer, every request gets a yes, and the short list stops being short. |
| **Versioning** | Giving each release of your rules a number, so people can tell which version they are using. |

---

## If you remember only one thing

The token layer takes a weekend.
The **enforcement** layer is what makes it last.

**What this means:** Picking your colours, sizes and gaps, and giving them names, is a weekend of work. Making sure people actually use those names, forever, is the hard part. That second part is called enforcement.

A team with an average palette and a lint rule that blocks raw hex codes
will have a better product in one year than a team with a beautiful
palette and no rule.

**What this means:** A **hex code** is a colour written as a raw code, like `#FF0000` for red. Raw means the code carries no name and belongs to no list. A **lint rule** is an automatic check that reads your code. When you break a rule, it refuses the code and tells you why.

Below is what the check refuses. A raw colour typed by hand, belonging to no list.

```
color: #FF0000      <- blocked
```

Below is what the check allows. A named colour that came from your list.

```
color: color.danger  <- allowed
```

Read that comparison again, because it is the point of the whole guide. Beautiful colours with nobody checking them fall apart within a year. Ordinary colours with a check that never sleeps still look like one app a year later.

---

## Quick checklist

Tick each line once you could explain it to someone else, not once you have read it.

- [ ] You can say what a design system is in one sentence — the written list of rules for how your app looks
- [ ] You can say what a token is — a name given to a value, so that nobody types the value again
- [ ] You know the one big idea — a system is judged by what it forbids, not by what it hands you
- [ ] You know where to look up a word you do not know — [GLOSSARY.md](GLOSSARY.md)
- [ ] You know the reading order — `04-plan/` first, then `01-foundations/`, `02-must-have/`, `03-production/`, then `04-plan/` again at the end
- [ ] You know which half is the hard half — picking the values takes a weekend, and enforcement is what makes them last
