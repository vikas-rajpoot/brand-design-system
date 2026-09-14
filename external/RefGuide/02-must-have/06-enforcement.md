# 12. Enforcement (making a machine check the rules)

**In one line:** Rules that live only in a document get broken. So hand every rule to a machine instead. The machine checks that rule on every single change, without being asked.

**Why this chapter exists:** This is the most important file in this folder. You can pick perfect colours, perfect gaps and perfect text sizes. Six months later you can watch all of it fall apart anyway. This does not happen because your team is careless. It happens because a deadline is real. Typing `14` is faster than looking up the right name for it. A machine that says "no" every single time is the only thing that stops this.

**Enforcement** is the word for that machine. It means a computer checks the rule for you. When the rule is broken, the computer blocks the work until it is fixed.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps, colours. |
| **UX** | Short for "user experience". How it feels to use the app. Not how it looks, but whether a person can get their job done without confusion. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gap sizes exist, which text sizes exist, which corner shapes exist. Like a school uniform rule sheet, but for a screen. |
| **Enforcement** | Making a machine check a rule and block the work when the rule is broken. Not asking people nicely and hoping. |
| **Decay** | Slowly falling apart. Not one big break. Many tiny ones, none of them worth stopping for on the day. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `spacing.md = 12`. After that everyone types `spacing.md` instead of typing `12`. Change it in one place and it changes everywhere. |
| **Raw value** | A number or a colour typed straight into the code, with no name. `padding: 14` is a raw value. `padding: spacing.md` is not. |
| **Hardcode** | To type a raw value straight into one place in the code, instead of using a token. Fast today, expensive later. |
| **Component** | One reusable piece of UI that you build once and use in many places. A button is a component. A card is a component. |
| **Variant** | One version of a component. A button can have a `primary` variant and a `secondary` variant. Same button, different look and different job. |
| **State** | The situation a component is in right now: normal, pressed, disabled, loading, error. The same button looks different in each state. |
| **Role** | A name that describes a job, not a look. `colors.accent` says "the accent colour". It does not say `#d97757`. |
| **Hex code** | A colour written as a `#` and six characters, like `#d97757`. It is one exact colour and nothing else. Reading it tells you nothing about what the colour is for. |
| **Palette** | Your full set of chosen colours. The colours your app is allowed to use, and no others. |
| **Theme** | One complete set of colour values. Most apps have two: a light theme and a dark theme. |
| **Dark mode** | The dark theme. Dark background, light text, for using a phone at night. |
| **Contrast ratio** | A number that says how different your text colour is from the background behind it. A big number means the text is easy to read. A small number means the text almost disappears into the background. |
| **Font scale** | The phone setting that makes all text bigger or smaller. A person with weak eyesight may set it to 200%, which means double size. |
| **z-index** | The number that says which thing sits on top when two things overlap. Higher number wins. |
| **px** | Short for "pixel". One tiny dot on the screen. `2px` is a very small distance, about as thick as a pencil line. Nobody spots a shift that small by eye. |
| **Lint rule** | A rule for a program that reads your code and complains when the rule is broken. Think of the red underline in a spell-checker, but for code rules instead of spelling. |
| **Build** | The step where the computer turns your code into a running app. If the build fails, no app comes out, so nobody can ship the mistake. |
| **Release** | The moment you send a new version of the app out to real users. Deadlines are usually deadlines for a release. |
| **Warning / Error** | Two levels of complaint. A warning prints a message and lets you carry on. An error stops the build, so nothing is made until you fix it. |
| **Repo** | Short for "repository". The one shared folder that holds all the code for your app. It also keeps a full history of every change anyone ever made. |
| **Pull request** | A request to add your changes into the shared code. You say "here are my changes, please take them". Other people look, machines run checks, and only then does it go in. |
| **Diff** | The list of exactly what you changed: lines added, lines removed. A reviewer reads the diff, not the whole app. |
| **CI** | Short for "continuous integration". A computer somewhere that grabs your changes and runs all the checks by itself. It does this every time, without anyone asking it to. |
| **Fails CI** | The checks did not pass. The change is blocked until it is fixed. |
| **Escape hatch** | An official, visible way to break a rule when you really need to. Written down, with a reason attached, so everyone can see it. |
| **Reference surface** | One page inside your app that shows every colour, every text size, every gap, every icon and every component. They all sit together, on one page, where you can compare them. |
| **Render** | To draw something on screen. "This page renders every component" means the page actually draws all of them, live. |
| **Regression** | Sliding backwards. Something that used to be fine is now worse, and nobody meant to make it worse. |
| **Visual regression test** | The computer takes a photo of every screen, then compares it to the photo from last time. If a single dot moved, it shouts. |
| **Matrix** | A grid of every combination you have to cover. Two lists crossed together: each item on the first list paired with each item on the second. |
| **Snapshot** | The saved photo of a screen that the computer compares against next time. |
| **Drift** | Slow damage. Nothing breaks in one day. Small wrong choices pile up until the app looks like it was made by five different teams. |
| **Quarter** | Three months of work. Companies count time in quarters. "Two quarters" means about six months. |
| **Glyph** | One character of text. Letters are glyphs, and so are symbols like `✓` and `▶`. A symbol glyph pasted into the code looks like an icon, but it is text wearing a costume. |
| **Generated file** | A file a program wrote for you, from a recipe. You are not supposed to edit it by hand — you edit the recipe and run the program again. |
| **Generator** | The program (and its recipe) that writes a generated file. |
| **Storybook** | A tool that shows every component of your app on its own page. That way you can look at all of them side by side. |
| **Chromatic, Percy, Playwright** | Tools that take the screenshots for visual regression tests and compare them for you. |

---

## Why rules die (read this before the numbered sections)

A design system with no enforcement decays to nothing in about two quarters.

**What this means:** If nothing checks your rules, your rules die in roughly six months. The colours drift. The gaps drift. The text sizes drift. **Drift** means each one slides a little further from the rule, week after week, and no single week looks bad. Then one day the app looks like it was built by strangers who never spoke to each other.

This is not because people are careless. It is because deadlines are real, and hardcoding a value is always faster.

**What this means:** It is 11pm, the night before a **release**. A developer needs a gap of about 14. Looking up the correct token takes two minutes. Typing `14` takes two seconds. Nobody here is being lazy or stupid. The fast path wins, again and again. In the end the app is full of numbers nobody chose on purpose. Changing one of them then means hunting through the whole app by hand.

So do not try to fix this with willpower. Fix it with machines. Three of them do almost all the work:

1. A lint rule that blocks raw values (section 12.1)
2. A reference surface, which is one page showing the whole system (section 12.2)
3. Visual regression tests, which are automatic before-and-after photos (section 12.3)

Two smaller checks back those three up. One is an automatic contrast check (section 12.4). The other is a decision to stop leaning on human code review (section 12.5).

Think of a school gate. A sign that says "wear your ID card" is ignored within a week. A gate that will not open without the card is obeyed every day, forever. Nobody has to remember, and nobody has to nag. The gate does the work.

One more thing before the numbered sections. **The machine does not have to be a server.** This chapter says "CI" a lot, and CI is the best home for these checks. But the check itself is just a small program that reads your files and refuses to pass when a rule is broken. A script sitting in your own repo, run before every change goes in, is the same gate. Start there on day one — a team of one, or a project with no CI yet, has no excuse to wait. Move the same scripts into CI when CI exists, so nobody can forget to run them. The rule was never "a server checks it". The rule is "a machine checks it, not a person remembering to".

---

## 12.1 A lint rule that blocks raw values

> If you do only one thing from this entire guide, do this.

A **lint rule** is a rule for a program that reads your code and complains when you break it. It works like a spell-checker. A spell-checker does not care that you were busy — it underlines `recieve` every single time.

Set up a lint rule that finds raw values in your code. Then make the **build** fail on them. If the build fails, no app comes out the other end. The mistake never reaches a single user. That is the whole trick. The rule stops being advice and becomes a locked door.

Below are the five things the rule must catch. On the left is what is banned. On the right is what you must type instead.

```
❌  color: "#d97757"          →  use theme.colors.accent
❌  fontSize: 15              →  use typography.rowTitle
❌  padding: 14               →  use spacing.md
❌  borderRadius: 10          →  use radii.sm
❌  zIndex: 999               →  use layers.modal
❌  label: "✓ Done"           →  use the icon set, plus the word
```

Read each line in words:

- `color: "#d97757"` is an exact colour typed by hand. Use the named colour role instead. Colour roles are covered in [the colour chapter](../01-foundations/02-color.md).
- `fontSize: 15` is a text size typed by hand. Use the named text role instead. Text roles are covered in [the typography chapter](../01-foundations/04-typography.md).
- `padding: 14` is a gap typed by hand. Use the named gap instead. Gaps are covered in [the space chapter](../01-foundations/03-space-and-radius.md).
- `borderRadius: 10` is a corner roundness typed by hand. Use the named roundness instead.
- `zIndex: 999` is a stacking number typed by hand. Use the named layer instead. Layers are covered in [the layering chapter](04-layering.md).
- `"✓ Done"` smuggles an icon in as text. A **glyph** like `✓` or `▶` pasted into a string is an icon from nowhere: it is not from your icon family, it cannot take your stroke width or your icon colour roles, and it looks different on every device's fonts. The rule from [the icons chapter](../01-foundations/05-icons.md) — one family, nothing else — dies quietly here unless the machine also bans symbol glyphs in UI text. Real punctuation is fine; pictures pretending to be punctuation are not.

Here is a tiny example of code the rule must reject. Every value here is typed by hand. If you later want a different accent colour, you must fix every button by hand, one at a time.

```
Button
  backgroundColor: "#d97757"
  paddingHorizontal: 14
  borderRadius: 10
```

Here is the same button written correctly. Every value now has a name. Change what that name points to, and every button in the app changes with it.

```
Button
  backgroundColor: theme.colors.accent
  paddingHorizontal: spacing.md
  borderRadius: radii.sm
```

The ban reaches inside your token files too. Your role tokens — the names that describe jobs, like `textMuted` — should point at your base values by **name**, not repeat the value. Write `textMuted = neutral.500`, not `textMuted = #737373`. If a role re-types the value, the machine cannot tell whether that hex is the real `neutral.500` or a stranger that drifted in. When roles reference by name, a small check can walk the token files and prove that every role resolves to a value that actually exists in your scales — so a raw value cannot hide in the one place everyone trusts most.

### Why this beats everything else

Your **palette** is your full set of chosen colours. Now picture two teams, one year from now.

- Team A picked an **average** palette and switched this lint rule on.
- Team B picked a **beautiful** palette and switched on no rule at all.

After that year, Team A has the more consistent product. Team B does not.

**What this means:** Pretty colours are worth much less than colours that are actually used correctly. Ordinary colours, used the same way everywhere, look calm and deliberate. Beautiful colours, used carelessly, look like a mess. The rule beats the taste. Spend your time on prettier colours instead of the rule, and the mess is what you get.

### How to roll it out without stopping work

You cannot switch this on in an app that already has a thousand raw values. Everything would fail at once and nobody could work. So switch it on in four steps.

Below is the four-week plan. Read "level" as "how loudly the rule complains".

```
Week 1   Rule ON, level = warning. Nothing breaks.
Week 2   Fix the existing violations, area by area.
Week 3   Level = error for NEW and CHANGED files only.
Week 4+  Level = error everywhere.
```

A **violation** is one spot in the code where the rule is broken. Here is the plan line by line.

| Step | What happens |
|---|---|
| Week 1 | The rule runs and prints a message, but nothing is blocked. You now know how big the problem is. |
| Week 2 | You clean up the old code, one part of the app at a time. Not all at once. |
| Week 3 | Any file you newly write or newly touch must obey. Old untouched files are still allowed to be wrong. |
| Week 4+ | The rule blocks everything, everywhere. No exceptions left. |

A **warning** prints a message and lets the work carry on. An **error** stops the build. Week 3 is the important step. It stops the pile of raw values growing while you are still clearing up the old ones. Skip Week 3 and you will be cleaning for ever. New mistakes arrive faster than you can fix the old ones.

Two more rules keep the gate alive once it is on.

**Block only what is small enough to fix today; freeze the rest as a number that may only shrink.** A gate that blocks on five hundred old violations gets switched off in week two, because it stops everyone and helps no one. Instead, count the old violations once, write that count down, and make the check fail only when the count *grows*. New mistakes are blocked on day one. The old pile becomes a number everyone can watch going down. The number is never allowed to go up, and one day it reaches zero and the freeze is deleted.

**Name the fix in the error message.** A message that says `violation on line 40` gets worked around. A message that says `fontSize: 15 → use the row-title role` gets obeyed, because obeying it became the fastest path. The machine already knows which token the value should have been — most raw values sit close to exactly one token. Make it say so. Every minute spent making the message helpful is repaid every time the gate fires, which is daily, forever.

### Leave one honest way out

Allow a documented escape: a comment like

```
// design-system-ignore: one-off marketing banner, approved
```

An **escape hatch** is an official way to break a rule when you truly need to. Write it as a comment in the code. Say what the exception is for, and say that someone approved it.

**Why bother?** Because if there is no allowed way out, people invent a hidden one. They will copy a component, change it quietly, and now the break is invisible. With an escape hatch, people break out visibly instead of secretly. You can search the whole repo for `design-system-ignore` and read every exception in one minute.

Below is the version to avoid. `eslint` is one common lint program. The comment `eslint-disable-next-line` tells it to ignore the next line and stay quiet. The rule was switched off, and nothing in the code says why. Six months later nobody knows whether that red was deliberate or a mistake, so nobody dares touch it.

```
// eslint-disable-next-line
color: "#ff0000"
```

Below is the version to use. The break is labelled, explained and approved, so the next person understands it.

```
// design-system-ignore: one-off marketing banner, approved
color: "#ff0000"
```

### Generated files say so, and never get edited by hand

Some of your files are not written by a person. A program writes them from a recipe: a token file built from a colour formula, an icon folder copied from a source set, a preview page drawn from the tokens. These are **generated files**, and they need two rules.

**Rule 1: a generated file announces itself.** The first thing in the file is a comment saying "GENERATED — do not edit by hand" and naming the **generator** that wrote it. Without that label, the file looks like every other file, and someone will edit it in good faith.

**Rule 2: fixes go into the generator, never the output.** Editing a generated file by hand feels like the fast path — the same lie as `padding: 14`. The next time anyone runs the generator, your hand-edit is silently erased, and the bug you fixed comes back with no history of why. Change the recipe, run the program again, and the fix is permanent.

Below is the version to avoid. The value was patched in the output, and the generator still holds the old one.

```
tokens.json        ← hand-edited: accent changed here
build_tokens.py    ← still produces the old accent
                     (next run silently undoes the fix)
```

Below is the version to use. The recipe changed, so every future run agrees.

```
build_tokens.py    ← accent changed here, in the recipe
tokens.json        ← regenerated; first line says GENERATED and names the recipe
```

---

## 12.2 A reference surface

Build one page inside your app that renders **everything**. "Renders" means actually draws it, live, not a picture of it.

This page must show all of the following.

- Every colour role, light and dark, with its contrast ratio printed
- Every type role, at 100% and at 200% font scale
- Every spacing and radius step, drawn to scale
- Every icon in the set
- Every component, in **every** variant × size × state

Those five lines pack in a lot, so here they are one at a time.

| Line | What it means |
|---|---|
| Every colour role, light and dark, with its contrast ratio printed | Show each named colour in the light theme and the dark theme, side by side. Next to each one, print the number that says how readable it is against its background. |
| Every type role, at 100% and at 200% font scale | Show each named text size twice. Once at normal size, and once at double size. Double size is what a person with weak eyesight sets on their phone. |
| Every spacing and radius step, drawn to scale | Draw each allowed gap and each allowed corner roundness at its real size. Side by side, you can see whether two of them are so close that nobody could tell them apart. |
| Every icon in the set | Show all your small pictures together. An icon that does not match the others stands out at once. |
| Every component, in every variant × size × state | Show every button, card and input box, in each version, each size, and each situation. An input box is a box a person types into. The `×` means all combinations, not a few samples. |

### Why

> If you cannot see the whole system side by side, you cannot review it.
> And a system nobody can review does not really exist.

**What this means:** Spread across fifty screens, your system is invisible. Nobody can hold fifty screens in their head. Put it all on one page and problems jump out in seconds.

This page is where you catch:

- Two greys that are nearly identical. You meant to have one grey. You have two, barely different. Neither one looks wrong on its own screen, so nobody ever reports it.
- A disabled state nobody designed. `disabled` means the button is switched off and cannot be tapped. Somebody built the normal look and forgot this one. Nobody chose how the switched-off button looks, so the code decided for you. A user then cannot tell whether the app is broken or the button is switched off on purpose.
- A component that breaks at 200% font size. At double text size the words spill out of the box. Or the button squeezes the label until each line holds a single letter. Either way, the people who most need big text are the ones who cannot use your app.
- An icon in the wrong style. Nineteen icons are drawn as outlines and one is filled in solid. On its own screen it looks fine. Next to the other nineteen, it looks wrong.

Think of a cricket team photo. One player in the wrong kit is invisible while everyone is spread across the field. Line them all up for the photo and you spot it instantly.

### Which tool

Two tools do this job: Storybook, or a hidden screen in your own app. **Storybook** is a tool made for exactly this. It gives every component its own page to be looked at.

A hidden screen is often better, because it renders in the real environment.

However you build it, make the page **draw itself from the tokens**, and rebuild it every time a token changes. A reference page that someone pastes values into by hand goes stale within a month, and a stale reference page is worse than none — it answers questions confidently and wrongly. A page generated from the real token files can never disagree with them. The same goes for any sample screens you keep: redraw them from the tokens after every token change, so what you review is always what the app would actually show.

**What this means:** A hidden screen is an extra screen inside your actual app. Only your team can reach it. The "real environment" means the same real fonts, the same real theme and the same real phone your users have. A separate tool can show you a component looking perfect and still be wrong. It is not running where your users are, so it cannot warn you about what breaks there.

---

## 12.3 Visual regression tests

Screenshot every component and key screen. Compare on every pull request.

**What this means:** A **visual regression test** works in two steps. First the computer takes a photo of each screen. Then it compares that photo with the one it took last time. If a single dot has moved or changed colour, it stops and shows you both photos side by side. The word **regression** means sliding backwards, so the test is there to catch your app sliding backwards by accident.

A **key screen** is a whole screen that matters. The login screen, the payment screen and the home screen are key screens. A **pull request** is when you ask for your changes to be added to the shared code. That request is the moment these checks run.

It is the "spot the difference" puzzle in the back of a newspaper. Except the computer plays it. It never gets bored, and it never misses one.

This is the only thing that catches **slow silent drift**. One small token change moves 30 screens by 2px, and nobody notices for months.

**What this means:** You change one token, say a gap from 12 to 14. That single change is used in thirty places. Every one of those screens shifts by 2px, which is about the thickness of a pencil line. No human will ever see that by eye. The computer sees all thirty, immediately.

### Minimum useful matrix

A **matrix** is a grid of combinations. The photos must cover every combination below. The `×` sign means: take every one of these, and pair it with every one of those.

```
each component × light + dark × default + max font scale
```

In words: take every component. Photograph it in the light theme, then in the dark theme. Photograph each of those twice — once at normal text size, once at the biggest text size the phone allows. One component therefore gives you four photos.

Here is one component worked out fully, so the counting is clear.

```
Button, light theme,  normal text size
Button, light theme,  biggest text size
Button, dark theme,   normal text size
Button, dark theme,   biggest text size
```

Add: smallest device width. That is where things break.

**What this means:** Also take the photos on the narrowest phone you support. Everything fits on a big screen. On a small screen, two buttons stop fitting side by side. Text gets pushed out of its box and cut off at the edge. If you never photograph the small screen, your users find the break before you do.

### Which tool

Tools: Chromatic, Percy, Playwright screenshots, or a home-made snapshot comparison. Any of them beats none.

**What this means:** The first three are ready-made tools that do this work for you. A **home-made snapshot comparison** is you writing the photo-and-compare code yourself. A rough home-made version that runs is worth far more than a perfect tool you never set up.

---

## 12.4 Automated contrast checks

Write a small program that checks, by itself, that your text is readable against its background.

A **contrast ratio** is a number that says how different your text colour is from the colour behind it. A big number means the text stands out and is easy to read. A small number means the text sinks into the background and some people cannot read it at all.

The program does three things.

1. Reads every foreground/background token pair you actually use
2. Computes the contrast ratio
3. Fails CI if any pair is below its limit

Step by step:

| Step | What it means |
|---|---|
| 1 | "Foreground" is the text colour. "Background" is the colour behind it. A "pair" is one text colour sitting on one background colour. The program looks at the pairs your app really uses, not every possible combination. |
| 2 | It works out the readability number for each pair, using maths, not opinion. |
| 3 | If any pair is worse than the limit set for it, the checks fail and the change is blocked. **CI** is the computer that runs all your checks automatically on every change. |

The limits for each pair come from [the accessibility chapter](01-accessibility.md). This program does not decide the limits. It only checks them, and blocks anything that falls below.

~30 lines of code. It is the only way the contrast promise survives a rushed change.

**What this means:** The `~` sign in `~30` is shorthand for "about". So this is a small program, not a project. The "contrast promise" is your promise that every piece of text in the app stays readable. Sooner or later somebody will lighten a grey slightly at the end of a long day. This check is the only thing standing between that change and your users. The change looks harmless on their bright laptop indoors. Outdoors in the sun, on an older phone, it has become unreadable. Only the maths catches that.

---

## 12.5 Do not rely on code review

Humans miss `padding: 14` in a 400-line diff. Every time.

**What this means:** A **diff** is the list of lines you changed. Reviewing 400 changed lines and spotting one wrong number in the middle is a task humans are bad at. Not sometimes bad. Reliably bad. Your eyes slide over `14` because it looks exactly like a number that belongs there.

This is the deeper point of the whole chapter. **Any rule that depends on a human noticing will fail eventually.** Humans get tired. Humans get rushed, get interrupted, and go on holiday. A rule kept alive by human attention works on a good day. It fails on a bad one, and every app has bad days. A machine has no bad days. It checks change number 900 exactly as carefully as change number 1.

Reviewers should be spending their attention on logic and UX decisions, not counting pixels.

**What this means:** A human reviewer is expensive and valuable. Use them for the three things a machine cannot judge.

- Is this feature actually a good idea?
- Will a real person understand this screen?
- Does this code really do what it claims to do?

Do not waste them on counting numbers. That is the one job a machine does perfectly, every time. Put a reviewer on pixel-counting and you lose the judgement, and you still miss the pixels.

Automate the mechanical checks. Save humans for judgement.

**What this means:** A **mechanical** check is a boring, exact one. Is this number allowed? Is this colour named? Is this pair readable? A machine answers those perfectly, for ever, for free. Judgement is everything a machine cannot answer, and that is what your reviewers are for.

Below is the version to avoid. The rule exists, but a person has to remember it.

```
Team rule: "please use spacing tokens"
Where it lives: a document nobody opens
Who checks it: whoever is reviewing, if they notice
Result: works for two months
```

Below is the version to use. The same rule, moved into a machine.

```
Team rule: "use spacing tokens"
Where it lives: a lint rule in CI
Who checks it: the machine, on every pull request
Result: works forever
```

---

## 12.6 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] Lint rule blocking raw colour / size / spacing / radius / z-index / symbol glyphs. A program reads your code. It stops any of those being typed by hand — including a `✓` pasted in as fake icon.
- [ ] Role tokens reference base values by name. No role re-types a value, and a check proves every role resolves to a real step in a scale.
- [ ] Old violations frozen as a shrink-only count. New mistakes are blocked immediately; the old pile is a number that may never grow.
- [ ] Every gate message names the fix. "fontSize: 15 → use the row-title role", never just "violation".
- [ ] The gates run even without CI. They are scripts in the repo from day one, and move into CI when CI exists.
- [ ] Generated files declare themselves, and fixes go into the generator. The first line says GENERATED and names the recipe; nobody edits the output by hand.
- [ ] A documented, visible escape-hatch comment. It is an official way to break a rule. The reason is written right next to it.
- [ ] Reference surface rendering every token and component. One page draws every colour, text size, gap, roundness, icon and component.
- [ ] Reference surface and sample screens are generated from the tokens. They are rebuilt on every token change, so they can never quietly go stale.
- [ ] Reference surface covers both themes and max font scale. That page shows the light theme and the dark theme. It also shows text at the biggest size a phone allows.
- [ ] Visual regression screenshots in CI. The computer photographs every screen on every change. It shouts if anything moved.
- [ ] Automated contrast check in CI. A small program checks that every text-on-background pair is readable. It blocks the change if one is not.
- [ ] Nothing important depends on a human noticing it. Every rule that matters is checked by a machine, not by someone paying attention on the day.
