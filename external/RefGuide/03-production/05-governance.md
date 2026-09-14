# 18. Governance (who decides, and how)

**In one line:** Governance answers three questions. Who owns the rules? How does a new rule get added? How does an old rule get removed without breaking other people's work?

**Why this chapter exists:** Nothing in this chapter changes how a single screen looks. It is still the reason most design systems die. Nobody kills a design system on purpose. It dies slowly. One person adds a colour on a Tuesday. Another person adds a slightly different colour on a Thursday. Nobody has the job of saying no. A year later the list of rules is 400 items long, and everybody ignores it.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, colours, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gap sizes exist, which corner shapes exist. Like a school uniform rule sheet, but for a screen. |
| **Governance** | Who decides things, and how. Who can add a rule, who settles an argument, what happens when a rule changes. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `spacing.md = 12`. After that everyone types `spacing.md` instead of typing `12`. Change it in one place and it changes everywhere. |
| **Component** | A piece of the screen you build once and reuse. A button is a component. You build one button, then use it on 40 screens. |
| **Primitive** | A very plain component that makes no choices for you. A `Box` is a primitive. It is an empty rectangle you can put anything into. |
| **Hardcode** | To type a raw value straight into a screen instead of using a named token. Typing `12` in the code rather than `spacing.md`. |
| **Call site** | The exact spot in the code where a thing is used. If a button is used on the settings screen, that line on the settings screen is a call site. |
| **Repo** | Short for "repository". The folder that holds all the code for your app, with a history of every change ever made to it. |
| **Build** | The step where the computer turns your code into a working app. A build can fail, and then nobody can run the app. |
| **Dev build** | The version of the app that only you and your team run while working. Short for "development build". Users never see it. |
| **Deprecate** | To mark something as old. You do not delete it. You leave it working, warn people not to use it, and remove it much later. |
| **Release** | One finished version of your system, handed to other people to use. |
| **Versioning** | Giving each release of your system a number, like 2.4.1, so people know what they are using. |
| **Changelog** | A list of what changed in each version, newest at the top. Like the "What's New" text you see when an app updates. |
| **Migration note** | A short line telling people how to move off something you removed. "Replace X with Y." |
| **Breaking change** | A change that stops other people's existing code from working. |
| **Escape hatch** | A legal, visible way to break the rules when you really must. Without one, people break the rules in secret. |
| **Lint rule** | A small automatic check that reads your code and complains when you break a rule. Like spellcheck, but for code rules. |
| **Diff** | The list of exactly which lines of code changed. Short for "difference". |
| **Scope** | What a thing covers, and where it stops. "In scope" means it is our job. "Out of scope" means it is not. |
| **Swatch** | A small square of colour shown as an example. A page full of colour squares is a page of swatches. |
| **Surface** | One place your design system gets used: the phone app, the website, the internal admin tool. Each of those is a surface. |
| **Decision record** | A short written note saying what you decided, why, and what you rejected. |
| **Docs** | Short for "documents". The written pages that explain your rules to the people using them. |
| **Platform** | The kind of device your app runs on. Android and Apple are two platforms. |
| **Pixel** | One of the tiny dots a screen is made of. Every picture on a screen is built from them. |
| **Gradient** | A colour that fades smoothly into another colour, the way a sunset fades. |

---

## 18.1 One named owner

Write down one person's name. That person decides.

> A system owned by "the team" is owned by nobody.

**What this means:** If everybody owns something, then when a decision is needed, everyone waits for someone else to make it. Think of a school group project where the teacher says "you five sort it out". Nothing happens for two weeks. Then somebody finally shouts and does the whole thing the night before. Give one person the job and the two lost weeks disappear.

Name one person who:

- Approves new tokens and components
- Breaks ties when two people disagree
- Keeps the reference surface up to date
- Decides what is in scope and what is not

Those four lines in plain words:

- **Approves new tokens and components.** Nothing gets added to the rule list without their yes. A **token** is a name for a value, like `spacing.md = 12`. A **component** is a reusable piece of screen, like a button.
- **Breaks ties.** Sometimes two people argue and neither will move. This person picks one answer. The argument is then over.
- **Keeps the reference surface up to date.** The "reference surface" is the page or file people look at to check a rule. This person keeps that page matching what the code really does. If it goes stale, people follow rules that no longer exist, and their screens come out wrong.
- **Decides what is in scope.** They say which problems the system covers, and which ones it does not.

They do not have to build everything. They have to **decide**.

**What this means:** This is not the person who writes all the code. This is the person who answers questions. Their real job is saying yes or no quickly, so nobody sits stuck waiting for an answer.

Without this, the system fragments within a year and everyone politely blames "we were busy".

**What this means:** "Fragments" means it breaks into pieces that no longer match each other. Nobody will admit the rules were abandoned. They will say the deadline was tight, and they will be telling the truth. That is exactly how it happens.

Below is the version to avoid. Nobody's name is written anywhere, so the question sits unanswered.

```
Question: can I add a new "warning" colour?
Asked in team chat on Monday.
Still unanswered on Friday.
Person adds the colour themselves and moves on.
```

Below is the version to use. One name, one answer, same day.

```
Owner of the design system: Priya

Question: can I add a new "warning" colour?
Asked Priya on Monday.
Priya answered Monday: yes, name it colors.warning, use it in 3 places.
```

---

## 18.2 A bar for adding a token

Set a rule for when something becomes a token. The rule is three uses.

**What this means:** A "bar" here means a height you have to clear before you are allowed in. Think of the minimum mark you need to pass an exam. A **token** is a name you give to a value, like `spacing.md = 12`. Not every value deserves a name.

Below is the bar. Count how many places in your app use the value, then read the matching line.

```
Used in 3+ places  →  it is a token
Used twice         →  leave it at the call site
Used once          →  definitely not a token
```

A **call site** is the exact spot in the code where the value is used. "Leave it at the call site" means type the value right there and do not give it a name yet.

Without a bar, the token file grows to 400 entries. Then nobody can hold the whole list in their head. So they invent their own values instead, which is the same failure as having no system at all.

**What this means:** A person can remember about seven names. Nobody remembers 400. Once the list is too long to remember, looking a name up feels slower than typing a number. So people type the number. You now have a huge rule file that nobody follows. That is worse than having no rule file, because it looks like you have a working system.

Same bar for components. Two similar usages is not a pattern yet.

**What this means:** A **component** is a reusable piece of screen, like a button or a card. Two screens that look a bit alike may only be a coincidence. Wait for the third one. The third one tells you the shape is real, and not an accident.

Below is the version to avoid. One screen needed a 20-wide gap once, and it got a name forever.

```
spacing.profileHeaderGap = 20     used on 1 screen
spacing.searchBarInset   = 18     used on 1 screen
spacing.cardTopNudge     = 6      used on 1 screen
```

Below is the version to use. The one-off values stay where they are used, and only the repeated one earns a name.

```
spacing.md = 12                   used on 30+ screens  → token

profile header gap: typed as 20 at that one call site
search bar inset:   typed as 18 at that one call site
```

---

## 18.3 Deprecation, never deletion

Never delete a token or a component that people still use. Mark it as old instead, then remove it much later.

**Deprecate** means to mark something as old and discouraged, while leaving it working. It is like a bus route that is closing next year. The buses still run. The sign at the stop tells you which route to switch to. On the closing day, the route stops — and by then nobody is left standing there.

Below are the three steps, in order. Never skip step 2.

```
1. Mark deprecated, with a note pointing to the replacement
2. Warn in dev builds when the old thing is used
3. Remove in a later version, after usage hits zero
```

Step by step. **Step 1:** you add a note on the old thing saying "do not use this, use that instead". **Step 2:** the app prints a warning while your team works, so people see it. A **dev build** is the version of the app your team runs while building it. Users never see this warning. **Step 3:** once you have checked that nobody uses the old thing at all, you take it out.

Skipping step 2 is how this goes wrong. Without the warning, nobody knows the old thing is going away, so usage never drops to zero.

Deleting a token out from under people breaks their build on an unrelated day, and they stop trusting the system.

**What this means:** A **build** is the step where the computer turns code into a working app. Say you delete `colors.oldBlue` today. Tomorrow morning somebody else's build fails. They were working on something completely different. They lose an hour, and they did nothing wrong. After that happens twice, they start copying values out of your system into a file of their own. Now you can never break them again — but you have also lost them.

Below is the version to avoid. The token vanishes with no warning.

```
Monday:  colors.brandBlue exists, used in 12 files
Tuesday: colors.brandBlue deleted
Tuesday: 12 files stop building. Nobody knows why.
```

Below is the version to use. Same removal, spread over time, with a warning in between.

```
March:  colors.brandBlue marked deprecated
        note: "use colors.accent instead"
March:  dev build prints: "colors.brandBlue is deprecated, use colors.accent"
May:    usage checked — 0 files left
May:    colors.brandBlue removed
```

---

## 18.4 Versioning and a changelog

Give each release of your system a number, and write down what changed in it.

**Versioning** means numbering your releases, like 2.4.1. A **changelog** is the list of what changed in each version. You have seen one already: the "What's New in this version" text on an app store page.

You need this as soon as more than one surface, or more than one team, uses the system.

**What this means:** A **surface** is one place your system gets used. The phone app is one surface. The website is another. The internal admin tool is a third. While one team on one app uses the system, you can all talk to each other. You can skip this step. The moment a second team depends on your rules, that changes. They need to know which version they have. They also need to know what changed in it.

Without a version number and a changelog, that second team upgrades blind. Screens break, and they cannot tell which change broke them. So they stop upgrading, and now two teams are running two different sets of rules.

Below are the three kinds of version change. The word on the left tells other people how worried to be.

```
Patch   Bug fix, no visual change
Minor   New token or component, nothing breaks
Major   Something changed shape or was removed
```

In plain words. **Patch** means you fixed something that was wrong inside. The screen looks exactly the same afterwards. **Minor** means you added something new. Everything that worked before still works. **Major** means you changed or removed something, so other people's existing code may stop working. That is a **breaking change**.

Those three words are the three numbers in a version like `2.4.1`. The first number is the major one. The second is the minor one. The third is the patch one. Going from `2.4.1` to `3.0.0` warns people that something broke.

Every release gets a short changelog entry.

Every breaking change gets a migration note: "replace X with Y".

**What this means:** A **migration note** is one line telling people how to move off the thing you removed. Not "colours.brandBlue was removed" — that leaves them stuck. Write "replace `colors.brandBlue` with `colors.accent`" so they know exactly what to type.

Below is the version to avoid. The version number moved and nobody knows what happened.

```
v3.0.0 released
(no notes)
```

Below is the version to use. Same release, with the kind of change named and a migration note on the breaking one.

```
v3.0.0
- MAJOR: colors.brandBlue removed → replace with colors.accent
- MINOR: added colors.warning
- PATCH: fixed radius.pill not rounding fully on small buttons
```

That last line uses `radius.pill`. **Radius** means how rounded a corner is, and the "pill" radius is the fully rounded shape of a pill-shaped button. Fixing it changed nothing else on screen, so it counts as a patch.

---

## 18.5 Document *when*, not only *what*

Your written docs must say when to use a thing, not only what it looks like. The usage rule is the valuable part.

The most valuable part of the docs is the usage rule.

**What this means:** Showing a picture of a red button teaches a reader nothing they could not see for themselves. Telling them "red is only for actions that destroy something" is the part they cannot guess.

Below are two examples of a docs entry written properly. Look at the three lines under each name: when to use it, when never to, and what to use instead.

```
Button / primary
  Use for:  the single most important action on a screen
  Never:    two in one view
  Instead:  secondary for the others

Danger color
  Use for:  destructive actions and errors
  Never:    to draw attention to something merely important
```

Some of those words, spelled out:

- A **primary button** is the main button on a screen. It is the loudest one, the one the app most wants you to press.
- A **secondary button** is a quieter one, used for the less important actions.
- "Two in one view" means two primary buttons on the same screen at once. The user then has to guess which one really matters. Guessing is the exact thing you were trying to prevent.
- A **destructive action** is one that destroys something: delete, remove, cancel a booking, leave a group.
- "Merely important" means important but safe. That is not a job for the danger colour. Use red for safe things and real danger stops standing out. People then click straight through the one warning that mattered.

A page of pretty swatches teaches nothing. Rules do.

**What this means:** A **swatch** is a small square of colour shown as an example. A page of colour squares with names under them looks like documentation and does none of the work. The reader still does not know which square to pick for a delete button.

Below is the version to avoid. It says what the colour is and nothing about when to use it.

```
Danger color
  #D93025
  A red.
```

`#D93025` is a colour code. Those six characters are how you write an exact colour in code, so everybody gets the same red. It tells you nothing about when to use that red.

Below is the version to use. The same colour, with its job written down.

```
Danger color
  Use for:  destructive actions and errors
  Never:    to draw attention to something merely important
```

For more on writing the words in your app, see [the words chapter](03-voice-and-content.md).

---

## 18.6 Decision records

Write two short paragraphs every time you make a real decision. Keep them with the code.

A **decision record** is a note saying what you decided, why you decided it, and what you turned down. Two paragraphs per real decision. Keep them in the repo.

**What this means:** A **repo** is short for "repository". It is the folder holding all your app's code. It also holds the history of every change ever made to that code. Put your decision records there and they sit right next to the code they explain. Nobody has to hunt through two-year-old chat messages to find them.

Below is what one decision record looks like. Notice it has four parts: date, decision, why, and what was rejected.

```
# Why 4pt spacing
Date: ...
Decision: 4pt base unit, non-linear scale.
Why: matches both platforms' native grids, and 8pt was too coarse
     for dense rows.
Rejected: 8pt (too coarse), 5pt (bad on non-retina).
```

That record is about spacing, so here are its words in plain form:

- `pt` is a length unit on a screen, a bit like millimetres.
- A **base unit** of 4pt means every gap in the app is a multiple of 4.
- A **non-linear scale** means the allowed gaps grow in bigger jumps as they get bigger. The list runs 4, 8, 12, 16, 24, 32, 48. It does not keep adding 4 forever.
- "Matches both platforms' native grids" means Android and Apple both already build on this unit. "Native" here means built in by the makers of the phone.
- "Too coarse for dense rows" means jumps of 8 were too big. Rows of information packed tightly together had no size that fitted them.
- "Bad on non-retina" is about older, lower-quality screens. A **pixel** is one of the tiny dots a screen is made from. On those older screens 5pt does not land on a whole dot, so edges come out blurred. ("Retina" is Apple's name for a screen whose dots are too small to see.)

The spacing rules themselves live in [the spacing chapter](../01-foundations/03-space-and-radius.md).

Without these, every new person re-opens settled questions, and nobody can tell a deliberate choice from an accident.

**What this means:** Every new team member will ask "why 4 and not 5?" If there is no written answer, you have the whole argument all over again. You might even lose it this time and change to something worse. There is a second cost too. When a value looks odd, nobody can tell where it came from. Was it chosen on purpose? Or was it a typing mistake three years ago?

Below is the version to avoid. The decision exists only in someone's head.

```
Why is the base unit 4?
"I think Rahul decided that. He left last year."
```

Below is the version to use. Same decision, written down where anyone can find it.

```
docs/decisions/why-4pt-spacing.md
  Decision: 4pt base unit, non-linear scale.
  Why: matches both platforms' native grids.
  Rejected: 8pt (too coarse), 5pt (bad on non-retina).
```

---

## 18.7 A written scope boundary

Write down what your system does not cover. Not only what it does.

List what the system does **not** cover.

Below is an example boundary. The top half is your job. The bottom half is not.

```
IN scope:   tokens, base components, layout patterns,
            content states, voice rules
OUT scope:  marketing pages, one-off campaign screens,
            experimental prototypes
```

The items on the "in scope" side, in plain words:

- **Tokens** are your named values, like `spacing.md = 12`.
- **Base components** are the reusable pieces everything is built from, like buttons and cards.
- **Layout patterns** are the standard ways of arranging a screen.
- **Content states** are what a screen shows when it is loading, empty, or broken. The [content states chapter](../02-must-have/02-content-states.md) covers them.
- **Voice rules** are how your app words things, like whether you write "Delete" or "Remove".

And the "out of scope" side:

- **Marketing pages** are the pages that advertise the app to people who do not use it yet.
- **One-off campaign screens** are built for one festival or one sale, then thrown away.
- **Experimental prototypes** are rough test versions built to try an idea. They are never meant to reach real users.

A system that claims to cover everything gets ignored entirely the first time it does not fit. Being honest about the edges keeps it trusted in the middle.

**What this means:** Say you promise your rules work everywhere. One day a designer builds a big, showy sale banner. Your rules make it come out ugly. That designer now decides the whole system is useless. Not only for banners — for everything they build after that. Say up front "banners are not ours" and the system stays trusted for the parts it really does cover.

Below is the version to avoid. The claim is too big to keep.

```
"Our design system covers every screen in the company."
Week 3: the Diwali sale page needs a huge gold gradient.
The system has no gold. The team stops using the system.
```

Below is the version to use. The edge is written down before anyone hits it.

```
IN scope:   tokens, base components, layout patterns,
            content states, voice rules
OUT scope:  marketing pages, one-off campaign screens,
            experimental prototypes

Week 3: the Diwali sale page needs a huge gold gradient.
It is a marketing page. Out of scope. Nobody is upset.
```

---

## 18.8 Escape hatches, on purpose

Give people a legal way to break the rules. If you do not, they break them in secret.

If there is no legal way to break the rules, people break them secretly.

**What this means:** An **escape hatch** is an approved way out. Sooner or later somebody will hit a case your rules cannot handle. If the only two choices are "obey" or "cheat", they will cheat. The cheat then gets buried somewhere you will never find it. Give them a door instead. They use the door, and the door has a sign on it that you can read.

Provide:
- One `Box`-style primitive that takes raw layout styles
- A lint-ignore comment that requires a written reason

Both of those, explained:

- A **primitive** is a very plain component that makes no choices for you. A `Box` is one. It is an empty rectangle you can put anything inside.
- "Takes raw layout styles" means you are allowed to hand it plain numbers directly, instead of only named tokens.
- A **lint rule** is a small automatic check. It reads your code and complains when you break a rule. Think of spellcheck, but for code rules.
- A **lint-ignore comment** is a line you write that tells that check to stay quiet on this one spot. The important part is that your version demands a reason in writing. Without the written reason, you end up with a pile of silenced warnings. Nobody remembers why any of them were silenced.

Lint rules are covered in [the enforcement chapter](../02-must-have/06-enforcement.md).

Below is what such a comment looks like. Read the part after the colon: that is the written reason.

```js
// design-system-ignore: partner logo requires exact brand red — approved
```

Now exceptions are visible, searchable and reviewable, instead of hidden in a 400-line diff.

**What this means:** **Visible** means the comment sits right there in the code. **Searchable** means anyone can search for `design-system-ignore` and get a full list of every exception in the app. **Reviewable** means a teammate reading the change can see the reason, then agree or push back. A **diff** is the list of lines that changed in a piece of work. To **hardcode** a colour is to type the raw value straight in, instead of using a named token. In a 400-line diff, one sneaky hardcoded colour is invisible. A labelled exception is not.

Below is the version to avoid. The rule is broken quietly, with no marker and no reason.

```js
backgroundColor: '#E31E24'
```

Below is the version to use. Same broken rule, now labelled, explained and findable.

```js
// design-system-ignore: partner logo requires exact brand red — approved
backgroundColor: '#E31E24'
```

---

## 18.9 When to add process, and when not to

Add the cheap rules now. Wait for the heavy ones until the pain is real.

The table below has two columns. Everything on the left costs you almost nothing, so do it today. Everything on the right costs real time, so wait until the lack of it is actually hurting you.

| Do this early | Wait until it hurts |
|---|---|
| Named owner | Formal versioning |
| Bar for new tokens | Cross-platform token pipeline |
| Decision records | Figma variable parity |
| Scope boundary | Density modes |
| Escape hatch | A formal RFC process |

The right-hand column needs explaining, because those are the heaviest words in this chapter:

- **Formal versioning** means officially numbering every release. It also means following strict rules about what each number is allowed to change.
- **A cross-platform token pipeline** is an automatic system. It takes your one list of values and pushes it into Android, into Apple, and into the website. All three then stay identical, with nobody copying values by hand.
- **Figma variable parity** means keeping the drawing tool matched to the code, value for value. Figma is a popular tool for drawing app screens. "Parity" means "kept equal".
- **Density modes** means offering both a tight version and a roomy version of your whole app. Users pick the spacing they prefer.
- **A formal RFC process** means every change gets written up as a proposal first. A group then reviews it before anyone builds anything. RFC stands for "request for comments".

The left column, for comparison, is five things you can set up in one afternoon:

- Write one name down.
- Agree the three-uses bar.
- Keep a folder of decision notes.
- Write the in-scope and out-of-scope list.
- Provide one approved way to break a rule.

Building heavy process too early is the most common way a design system becomes something people route around.

**What this means:** "Route around" means going the long way to avoid something, like taking a side street to skip a jam. If asking for a new colour needs a written proposal and a meeting, people will not ask. They will type the colour straight into their screen and say nothing. Your process did not stop the mess. It hid the mess from you.

Below is the version to avoid, in a three-person team on week two.

```
Want a new token?
  → Write an RFC document
  → Wait for the weekly review meeting
  → Get two approvals
  → Then add it
Result: nobody asks. Everyone hardcodes.
```

"Everyone hardcodes" means everyone types raw values straight into their screens. No token, no name, no record. The mess is still there. You have only stopped seeing it.

Below is the version to use at that size. Light rules, one decider, same day.

```
Want a new token?
  → Is it used in 3+ places?
  → Ask Priya
Result: answered the same day. The token file stays honest.
```

---

## 18.10 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] One named owner with tie-break authority — one person's name is written down. When two people disagree, that person picks, and the argument ends.
- [ ] "3+ uses" bar for new tokens — a value only gets a name once three or more places use it.
- [ ] Deprecate, never delete — mark old things as old and warn people. Remove them only after nobody uses them.
- [ ] Changelog + migration notes — every release lists what changed. Every breaking change says "replace X with Y".
- [ ] Docs say *when* to use, not only what it looks like — every entry says what a thing is for. It also says what it must never be used for.
- [ ] Decision records for the real choices — two short paragraphs on what you decided, why, and what you rejected. Kept in the repo.
- [ ] Written in-scope / out-of-scope list — what your system covers, and what it openly does not.
- [ ] A visible, reviewable escape hatch — an approved way to break a rule. It leaves a searchable note with a written reason.
