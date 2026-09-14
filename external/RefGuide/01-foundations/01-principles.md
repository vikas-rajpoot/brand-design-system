# 1. The Big Ideas

**In one line:** A design system is a short list of allowed choices. This chapter explains the ideas that every other chapter is built on.

**Why this chapter exists:** Read this first. Every other file in this guide picks colours, sizes and gaps. This file explains *why* those files are built the way they are. If you skip it, the later rules will look like random opinions instead of one plan. There is no code to write here, only ideas to hold on to. The table below explains every new word before you meet it in the text. If a word in this chapter looks strange, check that table first.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which text sizes exist, which gap sizes exist. Like a school uniform rule sheet, but for a screen. |
| **Component** | One reusable piece of screen that you build once and use many times. A button is a component. A message bubble in WhatsApp is a component. |
| **Component library** | A folder holding all the components someone has built. A pile of parts. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `spacing.md = 12`. After that everyone types `spacing.md` instead of typing `12`. Change it in one place and it changes everywhere. |
| **Primitive** | A raw value with a plain, boring name, like `neutral-200`. It says what the value *is*, not what it is *for*. |
| **Role** | A name that says what a value is *for*, like `surface` or `danger`. Components use roles. |
| **Layer** | One level in this naming setup. This guide uses exactly two: primitives, then roles. |
| **Theme** | One full set of colours for the whole app. Light mode is one theme. Dark mode is another theme. |
| **Dark mode** | The setting where the app turns mostly dark, with light text on dark backgrounds. WhatsApp and YouTube both have it. |
| **Hex code** | A colour written as a code, like `#1A1A1A`. The computer understands it. A human reading it has no idea what the colour is for. |
| **Hardcode** | To type a raw value straight into a component instead of using a token. Typing `#1A1A1A` inside a button is hardcoding. |
| **Brand** | The look a company is known for: its main colour, its logo, its name. A rebrand means changing that look. |
| **Accent** | The one colour your app uses to mean "this is the main action". The send button colour. |
| **Muted** | A softer, dimmer version of a colour, used for less important text. |
| **Contrast** | How different two colours are from each other. Dark grey text on black has low contrast and is hard to read. |
| **Weight** | How thick the strokes of the letters are. 400 is normal text. 600 is bold-ish text. |
| **px** | A unit of length on a screen, short for "pixel". `15px` means 15 units tall or wide. |
| **Line height** | The height of one line of text, including the empty space above and below it. |
| **Hierarchy** | The visual order of importance. What your eye reads first, second, third. |
| **Variant** | A different version of the same component. A button has a filled variant and an outline variant. |
| **Call site** | The exact place in the code where a component is used. Not the file where it is built. |
| **Layout** | Where things sit on the screen and how big they are: widths, heights, and the gaps between them. |
| **Container** | A box you put other things inside, to control where they sit. A container can have no look of its own. |
| **Escape hatch** | An allowed, honest way to step outside the rules when the rules do not cover your case. |
| **Find and replace** | Asking your editor to search for a piece of text and swap it for something else. |
| **Shadow** | The soft dark smudge under a card. It makes the card look lifted off the page. |
| **Style** | One look-or-size setting on a piece of screen: a width, a height, a gap, a colour. |

---

## 1.1 A system is rules, not components

A design system is a **small set of allowed choices**. It is not a pile of parts.

**What this means:** Most people think a design system is a component library. That means a folder full of ready-made buttons, cards and menus. A folder of parts is only the visible half. The real system is the list of decisions underneath it. These colours exist. These text sizes exist. These gap sizes exist. Nothing else does.

Think about a school uniform. The uniform is not the shirt. The uniform is the rule that says *only* this shirt. If everyone could wear any shirt, handing out one nice shirt would change nothing.

Here are the two ways people describe a system. The first one sounds impressive and means little.

- Bad: "we have 40 components"
- Good: "there are 6 font sizes and you cannot use a 7th"

**What this means:** 40 components tells you how much was built. It does not tell you whether two screens will look the same. "6 font sizes and no 7th" tells you something you can act on. One day someone will want a slightly bigger heading. The answer is already decided, before anyone asks. They cannot have one. That is the promise that keeps an app looking like one app.

Measure your system by what it **forbids**.

**What this means:** When you want to know if a system is working, do not count what it offers. Ask what it bans. A system that allows everything has decided nothing.

Here is what goes wrong when nothing is banned. Every screen is free to pick its own sizes and colours. Each choice looks reasonable on its own. Six months later your app looks like six different apps stitched together. No single person made the mistake. Everybody made one small piece of it.

---

## 1.2 Use only two layers

Use two levels of names for your values, and stop there. Do not build deep layers of names on top of names.

First, the two levels, and what each one is called.

A **primitive** is a raw value with a boring name. `neutral-200` is a primitive. The name tells you it is a grey, and roughly how light. It does not tell you what to use it for.

A **role** is a name that says what a value is *for*. `surface` is a role. It means "the colour of a card sitting on the background". You never learn which grey it is, and that is the point.

Here is a real-life comparison. Primitives are the raw ingredients in a kitchen: rice, oil, salt, chilli. Roles are the dishes written on the menu: "biryani", "dal". A customer orders from the menu. The cook decides which ingredients go into the dish today. If the cook changes the brand of rice, the menu does not have to be reprinted.

Below is the whole idea. The top block is the raw values. The bottom block is the names your components are allowed to type.

```
Layer 1 — PRIMITIVES   (raw values, nobody uses these directly)
   neutral-50 ... neutral-900
   accent-50  ... accent-900

Layer 2 — ROLES        (this is what components use)
   background, surface, border, text, textMuted, accent, danger
```

`neutral-50 ... neutral-900` means a run of greys, from very light at 50 to very dark at 900. `accent-50 ... accent-900` is the same run for your main brand colour. The seven role names underneath are the only names a component gets to say out loud.

**Rule:** a component may only use Layer 2. Never Layer 1.

**What this means:** Inside a card, you are allowed to write `surface`. You are not allowed to write `neutral-200`. You are also not allowed to write a hex code like `#EEEEEE`. A **hex code** is a colour written as a code the computer understands, such as `#EEEEEE`.

If you break this rule, that one card is stuck. Every other card follows the role and turns dark at night. This one keeps its light grey and glows in the corner of the screen.

The card below breaks the rule. It names a raw grey directly.

```
Card
  background: neutral-200
```

The card below follows the rule. It names the job, not the colour.

```
Card
  background: surface
```

### Why?

Because of dark mode.

**Dark mode** is the setting where the app flips to a dark look, with light text on dark backgrounds. WhatsApp, YouTube and Instagram all have it. A **theme** is one complete set of colours for the app. Light mode is one theme. Dark mode is another one.

Here is what dark mode costs you under each approach.

- If a card uses `neutral-200`, dark mode = find and replace, everywhere.
- If a card uses `surface`, dark mode = swap one map. Done.

**What this means:** **Find and replace** means asking your editor to swap one piece of text for another. In the first case, the grey `neutral-200` is written inside every component. To go dark you have to hunt down every copy of it. It is worse than it sounds. That same grey was used for different jobs. It is a card here and a border there. Those two do not turn into the same new colour, so you cannot swap them all in one go. You end up checking each one by hand. Miss one and a white card sits glowing in the middle of a dark screen. In the second case there is one small list. That list pairs each role with a primitive: `surface = neutral-200` in light, and `surface = neutral-800` in dark. That list is the "map". You write a second version of the map, and the whole app flips.

Same logic applies to rebranding, and to adding a third theme later.

**What this means:** Rebranding is when the company changes its main colour, say from green to purple. If every component names roles, you change the map once. A third theme could be a high-contrast mode. That is an extra set of colours for people who find normal colours too faint to read. Adding it means writing one more map. It does not mean searching through every file again.

The colours themselves, and how to pick them, are covered in [the colour chapter](02-color.md).

### Do not add a third layer

Some teams build four levels of names instead of two. Before the next line, here is one new word. **Semantic** means "based on meaning". A semantic name is therefore the same thing this guide has been calling a role. Here is the four-level chain those teams end up with.

`primitive → semantic → component → variant` looks organised.
In practice nobody can trace where a colour came from.
People give up and hardcode a hex value.

**What this means:** Each arrow above is one more level of names. A **component** level adds names like `button.background`. A **variant** level adds names like `button.primary.background.hover`. A **variant** is one version of a component, such as the filled button or the outline button. **Hover** is how a button looks while the mouse pointer is resting on top of it. Every level points at the level above it, not at a real value.

The trouble comes when a colour looks wrong on screen. You open the component and see `button.primary.background.hover`. That name points to `button.background`. That one points to a role name. The role name points to a primitive. Four files later, you finally see the real value. Nobody does that twice. The third time, a tired person types `#1A1A1A` straight into the component and moves on. That is **hardcoding**. One hardcoded colour is enough to break dark mode on that screen. That single value never flips with the rest.

With two layers you can follow any colour back to its real value in one short hop. With four layers almost nobody bothers, and hardcoded colours creep in instead.

---

## 1.3 Name by meaning, not by looks

Name a token after the job it does, not after how it looks today. Looks change. Jobs do not.

Below, the left column is what people write first, and the right column is what survives.

| Bad name | Good name | Why |
|---|---|---|
| `blueButton` | `buttonPrimary` | Brand changes. Blue becomes a lie. |
| `gray200Border` | `borderSubtle` | Same problem. |
| `text-sm` | `caption` | `sm` still makes you choose. `caption` does not. |
| `red` | `danger` | Red might mean "recording", not "error". |

Each row is worth spelling out.

**Row 1:** `blueButton` locks the colour inside the name. The day the company switches to purple, you have a purple button called `blueButton`. Every new person reading the code is now confused. `buttonPrimary` means "the main button", which stays true in any colour.

**Row 2:** `gray200Border` has the same problem, plus a number. `borderSubtle` means "a quiet border line", which is what you actually wanted.

**Row 3:** `text-sm` means "small text". Small compared to what? You still have to stop and think about which size to pick. `caption` means "the little line of text under a picture or a value". Once you know what you are writing, the name picks itself.

**Row 4:** `red` describes the colour. But red is used for more than errors. A recording dot is red. A live badge is red. If you name it `danger`, the name says "something has gone wrong". Nobody then reaches for it to colour a recording dot. If you leave it as `red`, somebody will. Then the day you change your error colour to orange, the recording dot turns orange too.

A name should survive a redesign.

**What this means:** A redesign is when the app gets a new look — new colours, maybe new shapes. Good names still make sense afterwards. `buttonPrimary` survives. `blueButton` does not.

Here is what goes wrong if you name things by how they look. After the first redesign, half the names describe colours the app no longer uses. Nobody trusts a name any more. Everyone opens the token file to check the real value before using it, which is slow. Soon people stop reading the names at all and type the raw colour instead. You are back to hardcoding, and dark mode breaks again.

---

## 1.4 Small beats complete

A short token list that people remember beats a long one that people ignore.

A token file with 400 entries is as useless as having none.
Nobody can hold it in their head, so they invent their own values.

**What this means:** A token file is the file listing every named value in your app. If it has 400 names, nobody can remember them. Searching for the right one takes longer than typing a number. So people type the number. Now you have 400 tokens sitting in a file. You also have screens full of raw values that ignore every one of them. That is worse than where you started.

Think of a shop with one shelf of five snacks. You pick in three seconds. A shop with 400 snacks means you either take ten minutes or grab whatever is nearest.

**The bar for adding a token:** used in 3 or more places.
Used twice? That is a one-off. Leave it at the call site.

**What this means:** Before you give a value a name, count how many places use it. Three or more places, it earns a name. One or two places, it does not. Write the raw value where it is used and move on. A **one-off** is a value that appears once and is never needed again. A **call site** is the exact spot in the code where something is used. It is not the file where that thing was built.

The example below uses a hero banner. A **hero banner** is the big picture or coloured box at the very top of a home screen. The number 37 is how far down from the top edge it sits, on that one screen.

Below is a value used in one place that was wrongly given a token name. It now sits in the shared list forever. Everyone who opens that list has to read past it to find what they came for.

```
tokens:
  heroBannerTopOffset = 37     <- used on exactly one screen
```

Below is the same value, left where it is used. The shared list stays short.

```
HomeScreen
  banner top offset: 37
```

---

## 1.5 Hierarchy: use weight and colour before size

To make one thing look more important than another, change its colour first. If that is not enough, change its weight next. Change its size only as a last resort.

**Hierarchy** means the order in which your eye picks things up. The title should be noticed before the date under it. That is hierarchy working.

To make one thing look more important than another, you can change:

1. **Colour** (full strength vs muted) — cheapest, use first
2. **Weight** (600 vs 400) — use second
3. **Size** — use last

**What this means:** "Full strength vs muted" means one line uses your normal text colour. The other line uses a dimmer version of that same colour. **Weight** is how thick the letters are: 400 is normal, 600 is heavier. "Cheapest" here does not mean money. It means the change costs you nothing anywhere else in the system. The text stays the same height, so nothing else on the screen has to move.

Example:

Below, both lines create hierarchy. Read what stays the same in the good one and what changes in the bad one.

```
Good:  15px / 600 / text         over  15px / 400 / textMuted
Bad:   18px / 600                over  14px / 400
```

Read the good line in words: both rows of text are 15px tall. The important one is weight 600 in the full `text` colour. The less important one is weight 400 in the dimmer `textMuted` colour. The size never changed.

Read the bad line in words. The important one was pushed up to 18px. The less important one was dropped down to 14px. That is two brand new sizes, bought for one small effect.

Both create hierarchy. The first keeps your line heights and
row heights consistent. The second breaks your vertical rhythm
and adds two more font sizes to the system.

**What this means:** **Line height** is the full height of one line of text. It includes the small space above and below the letters. When you change the font size, the line height changes with it. The whole row of text then gets taller or shorter. Do that inside a list and the rows stop lining up with each other. That uneven, jumpy look down the page is what "breaks your vertical rhythm" means.

There is a second cost as well. You now own 18px and 14px forever. Section 1.1 said the number of allowed sizes is the whole point of a system. Every extra size you add makes that promise weaker.

Save size changes for real document levels (page title vs body).

**What this means:** Change the size when two pieces of text are really different kinds of thing. A page title is a different kind of thing from a paragraph, so it gets a bigger size. Two rows in the same list are the same kind of thing. They keep the same size and differ by colour and weight only.

Here is what goes wrong if you ignore this. You reach for a new size every time something feels slightly more important. Soon you have ten sizes. Then nobody, including you, can tell which one to use next time.

Text sizes and weights are covered in full in [the typography chapter](04-typography.md).

---

## 1.6 Design both themes at the same time

Build light mode and dark mode together, from the first day. Do not add dark mode later.

Never design in light mode and add dark mode later.
Dark mode that is bolted on at the end always looks bolted on at the end.

**What this means:** "Bolted on" means added at the end, after everything else was finished. Say you design every screen on white. At the very end you flip the whole app to dark. The result looks flipped, and people can tell. A **shadow** is the soft dark smudge under a card that makes it look lifted off the page. Shadows are dark on dark, so they disappear completely. Light greys that looked gentle turn into muddy, dirty-looking patches. Borders vanish, so cards run into each other. Most users cannot say what is wrong. They can still see that something is wrong, and the app feels cheap.

You will also find out too late that your accent colour has no
contrast on a dark background. That discovery usually lands the week before launch.

**What this means:** Your **accent** colour is the one strong colour that marks the main action, like the send button. **Contrast** is how different two colours are from each other. A mid-blue accent sitting on white looks fine. The same blue on near-black is barely visible. The main button of your app then sinks into the background and people cannot find it. You discover this on the day you finally build dark mode. That day is usually the week before you release the app. It is the worst possible week to change a brand colour. Every screen was already built around the old one, so changing it now means redoing all of them.

Below is the order that causes the problem.

```
Week 1   pick colours on white
Week 2   build every screen on white
Week 9   add dark mode        <- accent unreadable, shadows gone, borders gone
```

Below is the order that avoids it. Every colour gets a light value and a dark value at the moment it is created.

```
Week 1   pick colours, light AND dark value for each role
Week 2   build every screen, check both themes as you go
```

---

## 1.7 Every system needs an escape hatch

Give people one allowed way to step outside the rules. If you do not, they will step outside anyway, without telling you.

An **escape hatch** is an allowed exit. It is the door marked "in an emergency, use this". The rule below calls this a "legal" way. Here "legal" only means allowed by your own system. It has nothing to do with the law.

If there is no legal way to break the rules, people break them
secretly and badly.

**What this means:** Somebody will eventually need a layout your system did not plan for. **Layout** means where things sit on the screen and how big the gaps between them are. If the system says no, that person does not stop working. They hardcode values inside a component instead. Nobody ever checks those values again, so they quietly stay wrong. One honest escape hatch that you can see is better than ten hidden ones you cannot.

Provide:
- One `Box`-style primitive that accepts raw layout styles
- A written list of "things this system does NOT cover"

**What this means:** First, two words from the lines above. A **style** is one look-or-size setting on a piece of screen: a width, a height, a gap, a colour. "Raw" means the number is written out in full, instead of being named by a token.

Second, a warning about the word **primitive**. In section 1.2 a primitive was a raw colour value. In the line above it means a basic building-block component. It is the same word doing two different jobs, and this is the second job.

The first item is a plain container component, usually called `Box`. A **container** is a box you put other things inside. This one carries no colours, no borders and no padding of its own. **Padding** is the empty space inside a box, between its edge and whatever sits in it. It takes raw layout values, such as a width or a gap, straight from whoever uses it. When someone needs a one-off arrangement, they reach for `Box`. Everyone can then see them doing it, right there in the code.

The second item is a short honest document. It says, for example, "this system does not cover charts" or "this system does not cover the video player". Now nobody wastes an hour hunting for a rule that was never written.

A system that claims to cover everything gets ignored completely
the first time it does not.

**What this means:** The risk here is promising too much. Say your system claims it handles every case. The first person who finds a gap decides the whole thing is broken. That person then stops using it for anything, even the parts that work well. Saying "we cover these things, and not those" keeps people's trust for the parts you did cover.

---

## 1.8 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] The system is written as rules, not counted as components — you can say what it forbids
- [ ] Two layers only — primitives (raw values) and roles (names by job). No third or fourth layer
- [ ] Components use roles only — no component names a primitive, and none names a hex code
- [ ] Tokens are named by meaning, not by looks — `buttonPrimary`, not `blueButton`
- [ ] A value becomes a token only when it is used in 3 or more places
- [ ] Hierarchy comes from colour first, weight second, size last
- [ ] Light mode and dark mode are designed together, from day one
- [ ] There is one `Box`-style escape hatch, plus a written list of what the system does not cover
