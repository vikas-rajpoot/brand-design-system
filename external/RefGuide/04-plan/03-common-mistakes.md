# 21. Common Mistakes

**In one line:** Here are 28 mistakes people make again and again when they build the look of an app. For each one you get two things: what it costs you, and what to do instead.

**Why this chapter exists:** Every mistake in this list is common, and every one can be avoided. None of them come from people being careless. They come from choices that look sensible on day one and turn painful in month six. Reading this list takes twenty minutes. Fixing one of these mistakes after it is in 60 screens takes weeks.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gap sizes exist, which shapes exist. Like a school uniform rule sheet, but for a screen. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `spacing.md = 12`. After that everyone types `spacing.md` instead of typing `12`. Change it in one place and it changes everywhere. |
| **Hardcode** | To type a value straight into the screen code, with no name. `padding: 13` is hardcoded. `padding: spacing.md` is not. |
| **Component** | A reusable piece of screen that you build once and use in many places. A button is a component. A card is a component. Like a rubber stamp: cut it once, press it a hundred times. |
| **Primitive** | A raw value with a plain name. `blue500 = #1A73E8` is a primitive. It says what the value *is*, not what it is for. |
| **Role** | The *job* a value does, not what it looks like. `danger` is a role. `red` is not. Roles let you change the colour later without every name turning into a lie. |
| **Variant** | A different version of the same component. A button can have a primary variant and a danger variant. |
| **Theme** | A full set of colours for one situation. Most apps have two themes: light mode and dark mode. |
| **Dark mode** | The version of the app with a dark background and light text, used at night. |
| **Hex code** | A colour written as a code, like `#1A73E8`. The `#` plus six characters is the colour. |
| **Hue** | Which colour a colour is: red, blue, green. Turning the hue is like turning a colour wheel. |
| **Saturation** | How strong or how washed-out a colour is. High saturation is a bright poster red. Low saturation is a dusty brick red. |
| **Neutral** | The greys of your app: backgrounds, text, lines, borders. Everything that is not a brand colour. |
| **Accent** | Your brand colour. The colour used for the main button and for links. |
| **Elevation** | How far a thing looks like it is lifted off the screen. Usually shown with a shadow. |
| **Shadow** | The soft dark patch under a raised box, which makes it look lifted. |
| **Radius** | How rounded a corner is. Radius 0 is a sharp corner like a sheet of paper. Radius 12 is a soft corner like a WhatsApp message bubble. |
| **Padding** | The empty space **inside** a box, between the edge of the box and the stuff in it. Like the white border inside a page of your notebook before the writing starts. |
| **Margin** | The empty space **outside** a box, pushing other things away from it. |
| **pt / px** | Units of length on a screen. Think millimetres, but for phone screens. |
| **Font weight** | How thick the letters are. Regular, medium, bold. |
| **Hierarchy** | Which thing on screen looks most important, which looks second, which looks least. |
| **Font scaling** | Phone settings let a user make all text bigger. Your app must still work when they do. |
| **Happy path** | The story where everything works: the internet is on, data exists, nothing fails. |
| **Empty state** | What a screen shows when there is nothing to show. "No messages yet." |
| **Spinner** | The little spinning circle that means "wait". |
| **Skeleton** | Grey blocks in the shape of the content, shown while the real content loads. |
| **Emoji** | The small coloured pictures on your phone keyboard, like a smiling face. They are made by the phone maker, not by you. |
| **Icon family** | One set of drawn symbols made by the same person in the same style, so they match. |
| **RTL** | Short for "right to left". Arabic, Hebrew and Urdu are read right to left, so the whole screen has to flip. |
| **Logical properties** | Space names that mean "start side" and "end side" instead of "left" and "right", so they flip on their own for RTL. `marginStart` is one. |
| **z-index** | The plain code way of saying "how high up this sits". A bigger number sits on top of a smaller one. |
| **Layering scale** | A named list saying what sits on top of what: normal content, then a panel, then a warning box. |
| **Toast** | A small message that slides in, says something short like "Message sent", and goes away by itself. |
| **Sheet** | A panel that slides up from the bottom of the screen. The "Share to..." panel on Instagram is a sheet. |
| **Overlay** | Anything that sits on top of the screen: a pop-up box, a sheet, a menu. |
| **Overlay manager** | One piece of code that decides which overlay is on top, instead of every screen guessing. |
| **OS permission dialog** | The phone's own pop-up asking "Allow this app to use your camera?". The phone shows it, not you. |
| **Priming** | Showing your own screen that explains *why* you need something, right before the phone's pop-up asks for it. |
| **Cold ask** | Asking for something with no explanation in front of it. The opposite of priming. |
| **Lint rule** | An automatic check that reads your code and refuses work that breaks a rule. Like spellcheck, but for design rules. |
| **CI** | Short for "continuous integration". A machine that checks every change before it is allowed into the app. |
| **Code review** | Another person reading your changes before they go in. |
| **Diff** | The list of lines you changed. A "400-line diff" means 400 changed lines to read. |
| **Reference surface** | One page inside your app that shows every colour, every text style and every component in one place, so you can look at the whole system at once. |
| **RFC** | A formal written proposal that people must comment on before a change is allowed. |
| **Versioning** | Giving your design system numbered releases, like v1.2, so teams can upgrade on purpose. |
| **Token pipeline** | A machine setup that turns one token file into files for the app, the website and the design tool. |
| **Escape hatch** | An allowed, written-down way to break the rules when the rules do not fit. |
| **Scope** | What your system covers, and what it does not. |
| **Quarter** | Three months of work. Companies plan in quarters. |
| **Gate** | An automatic check that stands between your work and the app. It blocks anything that breaks a rule. A lint rule is one kind of gate. |
| **ms (millisecond)** | One thousandth of a second. 200ms is one fifth of a second. One blink of your eye takes roughly 100ms to 400ms. |
| **Contrast** | How different two colours are in lightness. Grey text on a white page has low contrast and is hard to read. Black text on white has high contrast and is easy to read. |
| **String** | A piece of text the app holds, such as the word printed on a button. "Save" is a string. In German the same string is "Speichern". |
| **Vertical rhythm** | The even up-and-down spacing of lines of text down a page, like the ruled lines in an exercise book. |
| **Rebrand** | When a company changes its colours, its logo or its whole look. Your app then has to follow. |
| **Swatch** | A small square of colour with its name written underneath it. |
| **Template** | A ready-made layout that anybody can download and use. Free ones all look the same, which is why "it looks like a template" is not a compliment. |

---

## 21.1 Structure mistakes

These five are about how your system is put together. They happen in the first month and hurt for years.

### 1. Building components first

The mistake: you start by building buttons, cards and rows, before you have decided your colours, gaps and text sizes.

**What this means:** A **component** is a reusable piece of screen, like a button. You build it once and then use it everywhere. Building components first sounds productive. It is not.

What goes wrong: you end up with 40 components that each hardcode their own values. **Hardcode** means the number is typed straight inside the component, with no name. Every component now carries its own private opinion about padding and colour. You have a component library **and** the original problem: nothing matches, and there is no single place to fix it.

Below is what 40 hardcoded components look like. Look at how the same idea, "the padding inside a box", is a different number in each one.

```
Button   padding: 14   background: #1A73E8
Card     padding: 13   background: #FFFFFF
Row      padding: 15   background: #FEFEFE
```

Below is the same three components after tokens exist. Nothing is typed by hand, so one edit changes all three.

```
Button   padding: spacing.md   background: color.buttonPrimary
Card     padding: spacing.md   background: color.surface
Row      padding: spacing.md   background: color.surface
```

→ **The fix:** tokens and gates first. Components last.

**What this means:** A **token** is a name for a value, like `x = 5` in maths. A **gate** is an automatic check that blocks any work that breaks the rules. Decide your values first. Set up the checks second. Build components on top of both. If you do it in the other order, every component you already built has to be reopened and rewritten. The order is explained in [the build-order chapter](01-build-order.md).

### 2. Too many token layers

The mistake: you pass every value through four levels of naming before it reaches the screen.

The four-layer chain looks like this, and it looks organised:

```
primitive → semantic → component → variant
```

**What this means:** A **primitive** is a raw value with a plain name, like `blue500 = #1A73E8`. A *semantic* name is a role name, like `buttonPrimary`. "Semantic" is a long word for "named after its meaning". A component-level name is `button.background`. A variant-level name is `button.danger.background`. That is four names for one colour.

What goes wrong: nobody can trace where a colour came from. To answer "why is this button blue?" you have to open four files in order. After doing that twice, people give up and hardcode the colour instead. The extra layers were meant to add control and they removed it.

Below is the four-layer chain. Count how many hops it takes to reach the actual colour.

```
button.danger.background → button.background → color.danger → red500 → #D93025
```

Below is the two-layer version. One hop to the role, one hop to the value.

```
color.danger → red500 → #D93025
```

→ **The fix:** two layers. Primitives and roles. Nothing else.

### 3. Naming tokens after how they look

The mistake: you name a value after its colour instead of its job.

Below are names that describe how the value looks. Read them and notice that each one promises a colour.

```
blueButton
gray200Border
red
```

What goes wrong: the first rebrand turns every name into a lie. A **rebrand** is when the company changes its colours. Your main button is now green, but it is still called `blueButton` in 200 places. Every new person reading the code is misled. And renaming one token in 200 places is a week of work that nobody wants to do.

Below are the same three values named after their job. These names stay true no matter what colour you pick later.

```
buttonPrimary
borderSubtle
danger
```

→ **The fix:** name by role. `buttonPrimary`, `borderSubtle`, `danger`.

**What this means:** A **role** is the job a value does. `danger` means "this warns the user something is destructive". It can be red today and orange next year, and the name still tells the truth.

### 4. A t-shirt scale instead of roles

The mistake: you name your text sizes like t-shirt sizes — small, medium, large. You never name the job that each size is for.

Below is a t-shirt scale. Look at it and try to answer: which one is a row title?

```
text-xs
text-sm
text-md
text-lg
```

What goes wrong: `text-sm` still makes the developer choose. A developer building a list row picks `text-sm`. The next developer building a different list row picks `text-md`. Both were reasonable. Now your two lists do not match, and no rule was broken, so no check can catch it.

Below is the same set named by role. There is nothing left to choose: a caption uses `caption`.

```
caption
rowTitle
body
```

→ **The fix:** name by role. `caption`, `rowTitle`, `body`. No choice left to make.

**What this means:** A good name answers "where do I use this?" on its own. If a name still needs a judgement call, the name is doing half a job.

### 5. Too many tokens

The mistake: you keep adding named values until there are hundreds of them.

What goes wrong: 400 entries is as useless as zero. Nobody can remember 400 names, so nobody searches the list. They invent their own name, or they hardcode a value. A list too long to read gets ignored exactly like a list that does not exist.

Think of a shop menu. A menu with 12 dishes gets read. A menu with 400 dishes gets skipped, and the customer asks for something not on it.

Below is a set of colour tokens that has grown out of control. Six near-identical greys, and nobody knows which one to use.

```
color.gray1  color.gray2  color.gray3
color.gray4  color.gray5  color.gray6
```

Below is the same job done with roles. Three names, and each one tells you where it is meant to be used.

```
color.textPrimary
color.textSecondary
color.borderSubtle
```

→ **The fix:** set a bar for adding a token: it must be used in 3 or more places.

**What this means:** If a value is needed in only one or two spots, it is not a system decision. It is a one-off. Do not give it a name in the shared list.

---

## 21.2 Visual mistakes

These seven are the ones people can see. Some jump straight out at you. Some are only felt.

### 6. Mixing emoji with line icons

The mistake: you use a phone **emoji** in one place and a drawn **line icon** in another.

**What this means:** An emoji is one of the small coloured pictures on your phone keyboard. The phone maker draws it, not you. A line icon is a symbol drawn with thin lines, and it takes whatever colour and thickness you give it.

What goes wrong: this is the single most visible break in most apps. Emoji ignore your theme, your weight and your dark mode. Switch the app to dark mode and every line icon turns light. Every emoji stays exactly as it was. The emoji now look like stickers pasted onto the screen. Emoji also look different on an iPhone and on an Android phone. So you cannot even be sure what your own user is looking at.

Below is a settings list with mixed symbols. Read down the column and notice how the third row does not belong.

```
[line icon]  Notifications
[line icon]  Privacy
🔥           Streaks
```

Below is the same list using one icon family. Every row now obeys your colour and your line thickness.

```
[line icon]  Notifications
[line icon]  Privacy
[line icon]  Streaks
```

→ **The fix:** one icon family. Zero emoji in the UI, and zero typed symbols standing in for icons.

**What this means:** An **icon family** is one set of symbols drawn by the same person in the same style. Pick one set and use only it. The same rule covers typed symbols like `✓` and `▶` pasted into text: they are characters from a font, so they ignore your stroke width and your icon colours, and they draw differently on every device — an emoji problem wearing plainer clothes. More on this in [the icons chapter](../01-foundations/05-icons.md), and the machine check that catches both is in [the enforcement chapter](../02-must-have/06-enforcement.md).

### 7. Pure grey neutrals

The mistake: your greys are made of equal amounts of red, green and blue, so they are perfectly colourless.

**What this means:** A **neutral** is a grey used for text, backgrounds and borders. `#333` is a pure grey: the three pairs of characters are identical, so no colour leans through.

What goes wrong: `#333` next to a warm accent looks like a template. An **accent** is your brand colour. A **template** is a ready-made layout anybody can download. Pure grey belongs to nobody. So a screen of pure greys with one brand colour on top looks borrowed, not designed. It looks like a free layout somebody downloaded and dropped a logo onto.

Below is a pure grey next to a warm orange accent. The grey does not agree with the accent at all.

```
text:   #333333    (pure grey, no hue)
accent: #E8710A    (warm orange)
```

Below is the same grey with a small amount of the accent's warmth mixed in. It is still read as grey, but it now belongs to the same family.

```
text:   #332F2B    (grey, warmed slightly toward the accent)
accent: #E8710A    (warm orange)
```

→ **The fix:** mix a little accent hue into the neutrals.

**What this means:** **Hue** means which colour a colour is — red, blue, orange. Pull your greys a tiny step toward your brand hue. Nobody will name it. Everybody will feel that the screen was designed. See [the colour chapter](../01-foundations/02-color.md).

### 8. Inverting for dark mode

The mistake: you build dark mode by flipping light mode upside down. White becomes black, black becomes white, and everything else stays exactly as it was.

What goes wrong: three separate things break at once. You get pure black backgrounds, unchanged **saturation**, and shadows that vanish.

Here is each one in plain words.

A pure black background makes bright text glare. On some phone screens the black is so deep that the edge of a box disappears into it. You cannot tell where the box ends.

**Saturation** is how strong a colour is. A colour that is strong enough on a white page becomes painful on a black one. Leaving it unchanged tires the reader's eyes.

A **shadow** is a dark patch. A dark patch on a dark background cannot be seen at all. So every panel you meant to look lifted now looks completely flat.

Below is the flipped version. Look at the background: it is pure black, and the accent is untouched.

```
background: #000000
text:       #FFFFFF
accent:     #1A73E8   (same strength as light mode)
raised card: shadow, invisible on black
```

Below is dark mode designed on its own terms. The background is off-black and the accent is calmer. Lift is shown by making the surface lighter, not by adding a shadow.

```
background:  #121212      (off-black, not black)
text:        #E8E8E8
accent:      #6BA5F0      (lower saturation)
raised card: #1E1E1E      (lighter surface = higher elevation)
```

→ **The fix:** dark mode is a different design. Lower saturation, lighter surfaces for elevation, off-black not black.

**What this means:** **Elevation** is how lifted something looks. In light mode you show lift with a shadow. In dark mode you show lift by making the surface lighter. It is not a flip; it is a second design that shares the same roles.

### 9. Using size for every hierarchy step

The mistake: every time you need one thing to look more important than another, you make it bigger.

**What this means:** **Hierarchy** is the order of importance on a screen. It is what the eye should see first, second and third.

What goes wrong: you end up with 14 font sizes and broken vertical rhythm. Fourteen sizes means fourteen decisions. No two people make those decisions the same way.

**Vertical rhythm** is the even up-and-down spacing of lines down a page, like the ruled lines in an exercise book. When your sizes are random, that evenness breaks. The page then looks shaky, the way handwriting looks shaky on blank paper.

Below is a card where importance is shown only with size. Count the different sizes.

```
Title      22px
Subtitle   19px
Meta       17px
Caption    15px
Footnote   13px
```

Below is the same card using colour and weight to do most of the work. Two sizes carry five levels of importance.

```
Title      17px, bold,   textPrimary
Subtitle   15px, medium, textPrimary
Meta       15px, regular, textSecondary
Caption    13px, regular, textSecondary
Footnote   13px, regular, textTertiary
```

→ **The fix:** colour first, weight second, size last.

**What this means:** To make something look less important, first try a quieter colour. If that is not enough, change the **font weight** — how thick the letters are. Only then change the size. Size is the loudest tool, so it is the last one you reach for. See [the typography chapter](../01-foundations/04-typography.md).

### 10. Linear spacing scales

The mistake: your list of allowed gap sizes climbs in equal steps.

Below is a linear scale. Every step adds 4.

```
4, 8, 12, 16, 20, 24, 28
```

What goes wrong: you get too many similar options at the bottom, and not enough difference at the top.

At the small end, 20 and 24 look almost the same on screen. Your team still argues about which one to use. The argument is a waste of an afternoon, because nobody can see the difference anyway.

At the large end, 24 and 28 also look almost the same. So when you want a *visibly* bigger gap, the scale cannot give you one. You go outside the scale to get it, and the scale is broken from that day on.

Below is the scale to use. It starts in even steps and then opens up.

```
4, 8, 12, 16, 24, 32, 48
```

→ **The fix:** use `4, 8, 12, 16, 24, 32, 48`.

**What this means:** Every step should be visibly different from the one before it. Think of shoe sizes. A shop stocking 7, 7.1, 7.2 and 7.3 wastes your time and you still cannot feel the difference. Whole sizes are enough. More in [the space and radius chapter](../01-foundations/03-space-and-radius.md).

### 11. Ignoring nested radius

The mistake: you put a rounded box inside another rounded box and give both the same roundness.

**What this means:** **Radius** is how rounded a corner is. "Nested" means one box sitting inside another.

What goes wrong: the two curves do not run parallel. Along the straight sides, the gap between the outer edge and the inner edge is thin. In the middle of the corner, that same gap goes fat. Nobody notices this on purpose. Everybody feels it. The card looks slightly cheap and no one can say why.

Below is the rule that fixes it. Read it as: take the outer roundness, subtract the padding inside the outer box.

```
inner = outer − padding
```

Below is the arithmetic on a real card. The card is rounded by 12 and has 8 of space inside its edge.

```
Card: radius 12, padding 8
   └─ Inner box radius = 12 − 8 = 4
```

→ **The fix:** `inner = outer − padding`.

### 12. One shadow

The mistake: you give a raised card a single shadow.

What goes wrong: it always looks cheap. One shadow is a single soft grey blob. Real objects do not cast one blob. A thing lifted off a table casts two shadows at once. There is a sharp dark line where it almost touches the table. There is also a wide faint haze spreading further out. One shadow gives you neither of those, so the card reads as a sticker instead of a raised object.

Below is the single-shadow version. One blur, one distance, nothing else.

```
shadow: 0 4 12 rgba(0,0,0,0.15)
```

Below is the two-shadow version. The first line is the tight contact shadow, the second is the wide ambient one.

```
shadow: 0 1 2  rgba(0,0,0,0.10)    ← tight contact shadow
shadow: 0 8 24 rgba(0,0,0,0.08)    ← wide ambient shadow
```

→ **The fix:** two shadows. A tight contact one and a wide ambient one.

**What this means:** "Contact" is the small dark edge right under the object. "Ambient" is the big soft haze around it. Together they read as a real lifted thing.

The numbers on each shadow line have an order. The first is how far the shadow slides sideways. The second is how far it slides down. The third is how blurred it is. The last part is its colour. `rgba(0,0,0,0.10)` means black at 10 out of 100 strength, so it is a very faint black. See [the states, elevation and motion chapter](../01-foundations/06-states-elevation-motion.md).

---

## 21.3 Real-world mistakes

These nine only show up once real users, real text and real network problems arrive. That is exactly why they get missed.

### 13. Fixed pixel font sizes with no scaling plan

The mistake: you set every text size as a locked number. You never decide what should happen when a user turns their text size up.

**What this means:** **Font scaling** is the phone setting that makes all text bigger. People with weak eyesight use it every day. It is not rare.

What goes wrong: users at 150% text size get clipped text everywhere. Clipped means cut off. The letters run past the edge of their box and disappear. Buttons show "Contin" instead of "Continue".

Going back and fixing this later is nearly impossible. Every box with a locked height, in every single screen, has to be hunted down and changed by hand. There is no one place to fix it.

Below is a row built with locked sizes and a locked height. At 150% text size, the text is taller than 44 and gets cut.

```
Row:  height: 44
Text: fontSize: 15   (never allowed to grow)
```

Below is the same row built to grow. The height is a minimum, not a lock, so the row gets taller instead of cutting the text.

```
Row:  minHeight: 44
Text: fontSize: type.body   (scales with the user's setting)
```

→ **The fix:** decide scaling per role on day one. No fixed-height text containers.

**What this means:** For each text job — `body`, `caption`, `rowTitle` — write down how much it may grow. Then never lock the height of a box that holds text. Set a smallest allowed height instead. The box can then grow taller when the text needs more room, and nothing gets cut. See [the accessibility chapter](../02-must-have/01-accessibility.md).

### 14. Only designing the happy path

The mistake: you design the screen for the case where everything works, and nothing else.

**What this means:** The **happy path** is the version where everything works. The internet is on, the data loaded, the list has items in it, and no name is too long to fit.

What goes wrong: empty, loading, error, offline and too-long states are where apps look unfinished. These are not rare corners. A user on a train hits the offline state every day. A brand new user hits the empty state as the very first thing they ever see of your app. You designed the one screen they may never notice and skipped the ones they meet first.

Below is what an undesigned screen shows while data is loading. It is a blank white screen, which the user reads as "broken".

```
[nothing on screen]
```

Below is the same moment with a designed loading state. Grey blocks in the shape of the real content tell the user the app is working.

```
[grey block]  [grey line ————]
[grey block]  [grey line ——]
```

→ **The fix:** design all seven as system patterns.

**What this means:** Beyond the happy path there are seven more states, not one. Five of them are named above: empty, loading, error, offline and too-long. The other two are partial, when only some of the data arrived, and too-many, when a list built for twelve items holds four thousand. Design each state once, as a shared pattern. Then reuse that pattern everywhere, instead of inventing a new one on every screen. The full list of all seven is in [the content-states chapter](../02-must-have/02-content-states.md).

### 15. One generic empty state

The mistake: you write "No items" once and show it in every situation where a list is empty.

What goes wrong: "No items" gets used for first-run, filtered-empty and cleared. These are three completely different user feelings, and one sentence cannot serve all three.

Here is the difference, one at a time.

**First-run** is a brand new user who has never added anything. They need to be told what this screen is for.

**Filtered-empty** is a user who searched or filtered and matched nothing. They need to be told to change the filter.

**Cleared** is a user who finished or deleted everything. That is a success, and it should feel like one.

Below is the one-size-fits-all message. In all three situations, the user reads the same four characters.

```
first-run       → "No items"
filtered-empty  → "No items"
cleared         → "No items"
```

Below is the same three situations, each answered on its own terms.

```
first-run       → "Add your first task to get started."   [Add task]
filtered-empty  → "No tasks match 'urgent'."              [Clear filter]
cleared         → "All done. Nothing left today."
```

→ **The fix:** three designs.

### 16. "Something went wrong"

The mistake: every failure in the app shows the same vague sentence.

What goes wrong: no cause, no action, no way forward. The user cannot tell if it was their internet, their password, or your server. So they cannot do anything except try again and hope, or leave. And your support team cannot help either, because the user has nothing to report.

Below is the message to avoid. Read it as a user and try to work out what to do next.

```
Something went wrong.
[OK]
```

Below is a message that answers all three questions: what happened, why, and what to do now.

```
Could not save your note.
You are offline.
We will save it as soon as you reconnect.
[Retry now]
```

→ **The fix:** every error says what happened, why, and what to do now.

### 17. Spinner for a 100ms request

The mistake: you show a loading **spinner** for something that finishes almost instantly.

What goes wrong: a flashed spinner makes the app feel slower than no spinner. The spinner appears and disappears within a blink. The eye catches the flicker but not the meaning, so the screen reads as unstable. Doing nothing for 100 milliseconds would have felt instant.

Below is the version to avoid. The spinner is shown the moment the request starts, whatever happens next.

```
request starts → show spinner immediately
request ends after 100ms → hide spinner
result: a flicker the user cannot read
```

Below is the version to use. The spinner waits before showing itself, so fast requests never flash.

```
request starts → wait 200ms
  ends before 200ms → never show a spinner at all
  still running     → now show the spinner
```

→ **The fix:** delay indicators by about 200ms.

**What this means:** "ms" is short for millisecond, which is one thousandth of a second. So 200ms is one fifth of a second. Anything that finishes faster than that already feels instant to a person. A loading sign at that speed only gets in the way.

### 18. Fixed-width buttons

The mistake: you set a button to an exact width because the English word fits.

What goes wrong: German text is about 35% longer than English. Your 100-wide button says "Save", which fits fine. In German that word is "Speichern", and the button breaks.

One of three things then happens. The text is cut off. Or it spills outside the button. Or it wraps onto a second line, and the button's locked height cuts that second line off.

Below is a button locked to a width that only English fits.

```
Button  width: 100
  English: "Save"        fits
  German:  "Speichern"   cut off
```

Below is the same button sized by its contents, with a minimum instead of a lock.

```
Button  minWidth: 100, padding: spacing.lg
  English: "Save"        fits
  German:  "Speichern"   button grows, text stays whole
```

→ **The fix:** design with the longest plausible string.

**What this means:** A **string** is a piece of text the app holds, such as the word printed on a button. "Longest plausible" means the longest text you can reasonably expect, not a silly made-up one.

When you draw a button, do not test it with the shortest word. Test it with the longest word it will ever hold in any language you ship. If the button survives that, it survives everything. See [the internationalization chapter](../02-must-have/03-internationalization.md).

### 19. `marginLeft` instead of `marginStart`

The mistake: you write space in terms of "left" and "right" instead of "start" and "end".

**What this means:** **RTL** stands for "right to left". Arabic, Hebrew and Urdu are read from the right side of the page. When your app runs in those languages, the whole screen has to mirror. The back arrow, the icons, the spacing: all of it flips.

`marginStart` means "the side the text begins on", so it flips by itself. `marginLeft` always means left, no matter what language is on. Space names that flip on their own are called **logical properties**.

What goes wrong: writing `marginStart` today costs you nothing at all. Converting 60 screens from `marginLeft` to `marginStart` later is weeks of work. You have to go through them screen by screen. And there is no way to be sure you found every last one.

Below is the version that will cost you weeks later. It is locked to left-to-right languages.

```
marginLeft: 16
paddingRight: 8
```

Below is the version that flips on its own when the language flips.

```
marginStart: 16
paddingEnd: 8
```

→ **The fix:** logical properties from line one.

### 20. Raw z-index numbers

The mistake: every screen picks its own stacking number by guessing.

**What this means:** **z-index** decides what sits on top of what. A bigger number sits above a smaller one. A **toast** is the small message that slides in and goes away. A **sheet** is a panel that slides up from the bottom.

What goes wrong: someone writes `zIndex: 9999` to be safe. Then someone else writes `9999` too. Now the toast still ends up behind the sheet.

When two things share a number, the winner is whichever one happened to be drawn first. Nobody controls that. So the fix people reach for is an even bigger number. The numbers climb forever and the problem never actually goes away.

Below is the guessing version. Every number was chosen by a different person on a different day.

```
Sheet    zIndex: 9999
Toast    zIndex: 9999
Dropdown zIndex: 100000
```

Below is a named layering scale. The order is decided once, in one list, and nobody types a raw number again. (These names and numbers are a cut of the full list in [the layering chapter](../02-must-have/04-layering.md) — sheets and dialogs share the `modal` tier, and the toast tier sits above it, so a toast can never hide behind a sheet.)

```
layers.base     = 0
layers.dropdown = 100
layers.modal    = 400
layers.toast    = 500
```

→ **The fix:** named tiers, one overlay manager.

**What this means:** A tier is a named level in that list. An **overlay manager** is one piece of code that owns everything sitting on top of the screen. That gives you one place, and only one place, where the order is decided. See [the layering chapter](../02-must-have/04-layering.md).

### 21. Cold OS permission dialogs

The mistake: you let the phone's permission pop-up appear without explaining anything first.

**What this means:** An **OS permission dialog** is the phone's own pop-up. It says things like "Allow this app to send you notifications?" You do not design it. You cannot change a single word of it.

What goes wrong: you get one chance. If the user taps Don't Allow, the phone will not ask them again. To change their mind, they have to dig into their phone settings and turn it on by hand. Almost nobody ever does that.

A **cold** ask is one with no explanation in front of it. A cold ask gets denied, because the user has no idea why you want the thing.

Below is the cold ask. The user has been in your app for four seconds and is already being asked for something.

```
[app opens]
[phone pop-up] "Allow notifications?"   → Don't Allow
```

Below is the primed ask. Your own screen explains the reason first, in your own words, and only then do you trigger the phone's pop-up.

```
[your screen] "Get a reminder when your bus is 5 minutes away."
              [Not now]  [Turn on reminders]
                              ↓ only if they tap this
[phone pop-up] "Allow notifications?"   → Allow
```

→ **The fix:** prime with your own screen first.

**What this means:** **Priming** means asking for permission to ask. Your screen can be tapped "Not now" safely, because you can show it again later. The phone's pop-up cannot.

---

## 21.4 Process mistakes

These seven are not about pixels. They are about what happens to your system over the next year.

### 22. No enforcement

The mistake: you write the rules down and trust people to follow them.

What goes wrong: the system falls apart to nothing in about two quarters, which is about six months. It does not happen because people are careless. It happens because deadlines are real. At 6pm before a release, a developer needs a gap of 14 to make something fit. They know the rule. They type `14` anyway, ship it, and mean to come back. They never come back. Repeat that fifty times and the system is gone.

Below is what "enforcement" by hope looks like. The rule exists only in a document.

```
Design doc: "Always use spacing tokens."
Code:       padding: 14      ← shipped, nothing stopped it
```

Below is enforcement by machine. The check runs on every change, and the change cannot go in.

```
Design doc: "Always use spacing tokens."
Lint rule:  padding: 14  → BLOCKED: use a spacing token
```

→ **The fix:** a lint rule beats good intentions, every time.

**What this means:** A **lint rule** is an automatic check that reads your code and refuses anything that breaks a rule. It works the way spellcheck refuses a misspelled word. It never gets tired, and it never makes an exception at 6pm. See [the enforcement chapter](../02-must-have/06-enforcement.md).

### 23. Relying on code review

The mistake: you decide that another person reading the changes will catch rule-breaking values.

**What this means:** **Code review** is a teammate reading your changes before they go into the app. A **diff** is the list of changed lines they read.

What goes wrong: humans miss `padding: 14` in a 400-line diff. Every time. This is not a failure of effort. A reviewer is hunting for real problems: wrong logic, missing checks, unsafe code. Next to those, one wrong number hidden in 400 lines does not stand out.

Ask a person to do a machine's job and you lose twice. The machine's job does not get done. And the person's own job gets done worse, because their attention was spent elsewhere.

Below is the split to avoid: one human, asked to do everything.

```
Human reviewer checks: logic + naming + spacing + colours + contrast
Result: misses the spacing, and is too tired to judge the logic
```

Below is the split to use. The machine takes the mechanical checks; the human keeps the judgement.

```
Machine checks: raw numbers, raw colours, contrast
Human checks:   is this the right approach at all?
```

→ **The fix:** automate the mechanical checks. Save humans for judgement.

**What this means:** *Contrast* is how different two colours are in lightness. Grey text on a white page has low contrast and is hard to read. A machine can measure contrast in a fraction of a second and never gets it wrong. A person squinting at a screen cannot.

### 24. No reference surface

The mistake: your system exists only as scattered values in code, with no single page that shows it.

**What this means:** A **reference surface** is one page inside your own app. It shows every token, every component and every state side by side. It shows all of them in both themes, light and dark.

What goes wrong: if you cannot see the whole system side by side, you cannot review it. Two greys that are nearly identical look fine on separate screens a week apart. Put them next to each other on one page and you spot the duplicate in a second. Without that page, duplicates keep getting added and nobody ever notices.

Below is the situation to avoid. To review your colours you have to open screens one at a time and remember what you saw.

```
Home screen    → open, look, remember
Settings       → open, look, remember
Profile        → open, look, try to compare from memory
```

Below is the reference surface. Everything in one view, both themes, so a mistake shows itself.

```
One page:
  every colour role      light | dark
  every text role        light | dark
  every component        default | pressed | disabled | loading
```

→ **The fix:** one page with every token, component and state, in both themes.

### 25. No named owner

The mistake: the design system belongs to everybody on the team.

What goes wrong: a system owned by "the team" is owned by nobody, and fragments within a year. When a question comes up — should we add a fourth grey? — there is nobody who can answer yes or no. So the question stays open, and while it stays open, each person does what they think is right. A year later you have four answers living in the app at once.

Think of a class project with no leader. Everyone assumes somebody else is deciding. So nobody decides. On the day it is due, the parts do not fit together.

Below is the shape that fails. Notice there is no one to ask.

```
Owner: "the team"
Question: "Can I add a fourth grey?"
Answer: silence → everyone adds their own
```

Below is the shape that works. One name, one answer, written down.

```
Owner: one named person
Question: "Can I add a fourth grey?"
Answer: "No — use textSecondary."  ← decided once, applies to everyone
```

→ **The fix:** one person who decides.

**What this means:** One owner does not mean one person does all the work. It means one person breaks ties, so ties get broken. More in [the governance chapter](../03-production/05-governance.md).

### 26. Documenting *what*, not *when*

The mistake: your documentation lists the values but never says which situation each one is for.

What goes wrong: a page of swatches teaches nothing about which one to use. A **swatch** is a square of colour with its name under it. A reader looking at twelve coloured squares learns twelve names and zero decisions. They still have to guess. And guessing is exactly what the documentation was supposed to remove.

Below is documentation that only says *what*. It is true and it is useless.

```
color.primary   #1A73E8
color.danger    #D93025
color.success   #1E8E3E
```

Below is documentation that says *when*. Now the reader knows what to do on a real screen.

```
color.primary   Use for the single most important action on a screen. Never two.
color.danger    Use only when the action deletes or cannot be undone.
color.success   Use to confirm something finished. Never for a button.
```

→ **The fix:** write rules like "Use primary for the single most important action. Never two."

### 27. Heavy process too early

The mistake: you set up big formal procedures while the team is still tiny.

What goes wrong: formal RFCs, versioning and token pipelines at 3 developers is far more machinery than 3 people need.

Here is what those three words mean.

An **RFC** is a formal written proposal. Other people must read it and comment on it before your change is allowed in.

**Versioning** is giving your system numbered releases, like v1.2, so teams can upgrade when they choose to.

A **token pipeline** is a machine setup that reads one token file. It then writes out separate files for the app, the website and the design tool.

Each of those solves a real problem. But it is the problem of many teams who cannot easily talk to each other. With 3 developers sitting together, the whole procedure is slower than turning around and asking. So people route around it. They stop writing the RFC and make the change quietly. Now you have heavy process *and* changes nobody wrote down. That is worse than having either one on its own.

Below is the mismatch. Look at the cost of adding one token.

```
Team size: 3
To add one token: write an RFC → wait for 2 approvals → bump the version → run the pipeline
Result: people skip it entirely
```

Below is process that matches the team. It is small enough that people actually use it.

```
Team size: 3
To add one token: ask the owner → they say yes or no → add it
Result: the rule holds because following it is cheap
```

→ **The fix:** add process when the pain is real.

**What this means:** Process should be added the day the missing process starts costing you something. Not before, on the guess that one day it might.

### 28. Claiming to cover everything

The mistake: you present the design system as having an answer for every possible screen.

What goes wrong: the first time the system does not fit, it gets abandoned entirely. Somebody needs a screen your system never planned for. Because you promised the system covers everything, "the system does not cover this" reads as "the system is wrong". So they stop using it here — and then, since it failed once, they stop trusting it everywhere. One gap takes down the whole thing.

Below is the promise that breaks. There is no allowed way to be outside it.

```
"The design system covers every screen in the app."
→ new map screen does not fit
→ built completely outside the system
→ nobody uses the system for the next screen either
```

Below is an honest boundary plus a way out. The system survives contact with a case it did not plan for.

```
"In scope: lists, forms, settings, detail screens."
"Out of scope: the map view and the video player."
"Escape hatch: need something new? Ask the owner. Answer within a day."
```

→ **The fix:** write down what is out of scope. Provide a visible escape hatch.

**What this means:** **Scope** is what your system covers. An **escape hatch** is an allowed, written-down way to step outside the rules when the rules genuinely do not fit. A system that admits its limits gets trusted. A system that pretends to have none gets dropped the first time it is wrong.

---

## 21.5 The two most expensive mistakes

Twenty-eight mistakes is a lot to hold in your head. If you avoid only two things from this whole guide, avoid these.

> **1. No font-scaling plan.**
> It breaks the app for real users on day one. Going back and fixing it
> later is nearly impossible.
>
> **2. No lint rule.**
> It decides whether any of the rest of this still exists in a year.

**What this means, one at a time.**

**Mistake 13 is number one.** It is the one mistake here that stops real people using your app at all. Someone with weak eyesight turns text size up to 150%, and your buttons cut their labels in half. That is day one, not month six. You also cannot patch it later with one change. Every box with a locked height, in every screen, has to be found and fixed by hand. That is what "nearly impossible to fix later" means.

**Mistake 22 is number two.** It decides whether anything else here survives. Every other rule in this guide is a rule that a tired person will break at 6pm before a release. A machine that checks every change is the only thing still holding the line a year later. Without it, about two quarters from now, you will have a design system document. It will describe an app that no longer exists.

---

## 21.6 Quick checklist

Tick each line once your app actually does it, not once you agree with it. The last two lines are the two most expensive mistakes on the list.

- [ ] Tokens and gates were built before components — not 40 components with values typed inside them
- [ ] Two token layers only — primitives and roles, not four levels of naming
- [ ] Tokens named by job, not by look — `danger`, not `red`
- [ ] Text styles named by role, not by t-shirt size — `rowTitle`, not `text-sm`
- [ ] A token is added only when it is used in 3 or more places
- [ ] One icon family, zero emoji, zero typed symbols as icons in the UI
- [ ] Neutrals carry a little of the accent hue — no pure greys
- [ ] Dark mode is designed on its own — off-black background, lower saturation, lighter surfaces for lift
- [ ] Hierarchy uses colour first, weight second, size last — not 14 font sizes
- [ ] Spacing scale is non-linear — `4, 8, 12, 16, 24, 32, 48`
- [ ] Nested radius rule applied — `inner = outer − padding`
- [ ] Two shadows on raised things — a tight contact one and a wide ambient one
- [ ] No fixed-height text containers anywhere
- [ ] All seven content states designed as shared patterns, not only the happy path
- [ ] Three empty states, not one — first-run, filtered-empty, cleared
- [ ] Every error says what happened, why, and what to do now
- [ ] Loading indicators are delayed by about 200ms
- [ ] Buttons sized by their longest text, not locked to a width
- [ ] Logical properties everywhere — `marginStart`, never `marginLeft`
- [ ] Named layering tiers and one overlay manager — no raw `zIndex: 9999`
- [ ] Permission requests are primed by your own screen first
- [ ] Machines do the mechanical checks; humans review judgement
- [ ] A reference surface exists — one page, every token, component and state, both themes
- [ ] One named person owns the system and breaks ties
- [ ] Documentation says *when* to use each value, not only *what* it is
- [ ] Process matches the size of the team — no RFCs and pipelines at 3 developers
- [ ] What is out of scope is written down, and an escape hatch exists
- [ ] **A font-scaling plan exists for every text role** — the single most expensive mistake to skip
- [ ] **A lint rule blocks raw values** — the mistake that decides whether the rest still exists in a year
