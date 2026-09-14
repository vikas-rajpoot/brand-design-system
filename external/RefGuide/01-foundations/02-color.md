# 2. Colour

**In one line:** Pick a small set of colours once. Give each colour a name that says what the colour is *for*. Then let every screen use only those names.

**Why this chapter exists:** Build your colour list first, before anything else in this guide. Everything else in your app is drawn *in* colour. Text, buttons, cards, warnings, the dark grey behind a pop-up — all of it is colour. Suppose you pick your colours one screen at a time instead. The screens then stop matching each other. The app ends up looking like five different apps stuck together. This chapter is the list of colours, and the rules for choosing them.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, colours, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which text sizes exist, which gap sizes exist. Like a school uniform rule sheet, but for a screen. |
| **Component** | One piece of screen that you build once and use many times. A button is a component. A message bubble in WhatsApp is a component. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `color.accent = #1E88E5`. The `#1E88E5` part is a colour written as a code. There is a row further down this table that explains those codes. After that everyone types `color.accent` instead of the code. Change it in one place and it changes everywhere. |
| **Primitive** | A raw colour with a plain, boring name, like `neutral-200`. The name says what the colour *is*, not what it is *for*. |
| **Role** | A name that says what a colour is *for*, like `background`, `text` or `danger`. Components use roles. |
| **Layer** | One level of naming. This guide uses exactly two levels: primitives first, then roles. |
| **Palette** | The full set of colours your app is allowed to use. |
| **Ramp** | One colour printed at many lightness steps, from very pale to very dark, in order. Like the shade card you get at a paint shop. |
| **Hex code** | A colour written as a code, like `#FFFFFF` for white. The `#` is followed by six characters. The computer understands it. A human reading it cannot tell what the colour is for. |
| **RGB** | The normal way a screen makes colour: red light, green light and blue light mixed together. A hex code is really three RGB amounts written as one code. |
| **Hue** | Which colour it is. Red, orange, blue, green. Hue is the name of the colour family. |
| **Saturation** | How strong or how washed-out a colour is. A fire-engine red is highly saturated. A dusty pink is not. |
| **Lightness** | How light or dark a colour is, from white at the top to black at the bottom. |
| **OKLCH** | A newer way of writing a colour using lightness, saturation and hue as three separate numbers. It is built so that the same lightness number looks equally bright to your eye in every hue. |
| **Theme** | One full set of colours for the whole app. Light mode is one theme. Dark mode is another theme. |
| **Dark mode** | The setting where the app turns mostly dark, with light text on dark backgrounds. WhatsApp and YouTube both have it. |
| **Neutral** | The greys of your app. Backgrounds, card colours, lines, most text. |
| **Accent** | The one colour that means "this is the main action". The send button colour. |
| **Status colours** | The colours that report what happened: success, warning, danger. |
| **Surface** | The colour of a card, a row or a panel sitting on top of the page background. |
| **Border** | A thin line at the edge of something, or a divider line between two rows. |
| **Modal** | A box that opens on top of the screen. It blocks everything behind it until you answer it or close it. |
| **Scrim / overlay** | The dark see-through sheet placed behind a modal, which dims the screen underneath. |
| **Sheet** | A panel that slides up from the bottom of the screen. The "Share to..." panel on Instagram is a sheet. |
| **Elevation** | How high something looks like it is floating above the screen. |
| **Focus ring** | The visible outline that appears around a button or a text box when it is selected, usually by keyboard. |
| **Contrast ratio** | A number saying how different two colours are in brightness. Written like `4.5 : 1`. Bigger means easier to read. |
| **pt** | A unit of length on a screen, short for "point". Think of it like millimetres, but for phone screens. `18pt` text is bigger than `14pt` text. |
| **CI** | Short for "continuous integration". A machine that checks your work every time you save it into the shared project. It shouts if a rule is broken. |
| **Inversion** | Flipping something to its opposite. Inverting a colour means white becomes black, and black becomes white. |
| **Series** | One of the lines drawn on a chart. A chart that puts last year's sales next to this year's draws one line for each year. That chart has two series. |
| **Hardcode** | To type a raw value straight into a component instead of using a name. Typing `#1E88E5` inside a button is hardcoding. |

---

## 2.1 The two layers

Your colours are stored in two layers. First the raw colours, then the job names. Components are only allowed to touch the second layer.

Here are the two layers side by side. On the left are the raw colours. On the right are the job names that point at them.

```
PRIMITIVES (raw ramps)          ROLES (what components use)
neutral-50 → neutral-900   ──►  background, surface, border
accent-50  → accent-900    ──►  accent, accentText
                                text, textSecondary, textMuted
                                success, warning, danger
```

**What this means:** A **primitive** is a raw colour with a boring name, like `neutral-700`. The name only tells you where it sits on the scale. A **role** is a name that tells you the job, like `border` or `danger`. `neutral-200` is a primitive. `border` is a role that points at `neutral-200` today. "Points at" means the role takes its colour from that primitive. Tomorrow you can make `border` point at a different primitive. The name `border` does not change when you do that.

Think of a school store room. On the shelf are boxes labelled "blue cloth", "white cloth", "grey cloth". Those boxes are the primitives. Each one is named after what is inside it. On the wall hangs a list. It reads "shirt = white cloth, trousers = grey cloth". Those lines are the roles. Each one is named after the job it does. If the school changes trousers to navy, you edit one line on the wall list. You do not relabel any box.

Components use **roles only**.

**What this means:** Inside a button, you never write a hex code, and you never write `neutral-700` either. You write `color.accent`. A **component** is one reusable piece of screen, like a button. If components use roles, then changing what `accent` points to changes every button in the app at once.

Below is the version to avoid. The button reaches past the roles and grabs a raw colour.

```
Button   background: #1E88E5      <- a raw hex code, belongs to nobody
Button   background: accent-500   <- a primitive, skips the role layer
```

**What goes wrong if you break this rule:** the colour is now buried inside that one button. To change it you have to search every file by hand. You will miss a few of them. The app then goes out to real users with two blues in it. The two are almost, but not quite, the same, which looks like a mistake because it is one.

Below is the version to use. The button asks for the job, not the colour.

```
Button   background: accent
Button   text color: accentText
```

---

## 2.2 The role list

Start with about 15 roles. Add more only when needed 3+ times.

**What this means:** Fifteen job names cover a whole app. When someone wants a sixteenth, make them wait until three different screens actually need it. Two screens is a coincidence. Three is a real pattern.

**What goes wrong if you break this rule:** suppose you say yes every time someone asks for a new role. The list soon grows to sixty names. Nobody can hold sixty names in their head. People stop reading the list and start guessing, or they go back to typing raw colour codes into components. The list then means nothing.

Below is the starting list. The left column is the name you type. The right column is what that colour is for.

| Role | Used for |
|---|---|
| `background` | The page behind everything |
| `surface` | Cards, rows, sheets |
| `surfaceAlt` | A second level inside a card |
| `border` | Lines, dividers, input outlines |
| `text` | Main text |
| `textSecondary` | Supporting text |
| `textMuted` | Timestamps, hints, disabled |
| `accent` | Primary buttons, links, selection |
| `accentText` | Text on top of accent |
| `success` `warning` `danger` | Status |
| `successBg` `warningBg` `dangerBg` | Backgrounds for those |
| `overlay` | Dark scrim behind a modal |

Some of those rows are worth spelling out in words.

- `background` is the colour of the empty page. `surface` is the card sitting on that page. It has to look slightly different from the background. If it does not, the card melts into the page and stops looking like a card.
- `surfaceAlt` is for a box inside a card, when you need one more step of separation.
- `border` covers thin lines: the outline of a text box, and the divider between two rows in a list.
- `text`, `textSecondary` and `textMuted` are three levels of importance. Take a chat list. The person's name is `text`. The last message under it is `textSecondary`. The time stamp is `textMuted`. `textMuted` also covers a button that has been switched off so you cannot press it yet.
- `accent` marks the main action. It is the colour of the main button, of links, and of whatever row or item is currently picked out.
- `accentText` is the colour of writing placed **on top of** the accent colour. If your accent is dark blue, `accentText` is near white.
- `success`, `warning` and `danger` are for the words and icons that report what happened. `successBg`, `warningBg` and `dangerBg` are the pale backgrounds behind those messages.
- `overlay` is the dark see-through sheet behind a **modal**. A modal is a box that opens on top of the screen and blocks it until you deal with it. That dark sheet is also called a **scrim**.

Add a matching value for **both** light and dark.

**What this means:** Every single role needs two colours saved against it. One colour is for light mode. The other is for dark mode. `surface` in light mode might be near white. `surface` in dark mode is a dark grey. Same name, two values. The app picks the right one based on the phone's setting.

**What goes wrong if you break this rule:** a role with no dark value has nothing to show when dark mode is on. The app uses the light value instead. So a near-white card stays near-white on a dark screen. It glares out of the page like a torch. Worse, near-white text sitting on that near-white card cannot be read at all.

Below is the version to avoid. Only one theme was filled in, so dark mode has holes.

```
surface   light: #FFFFFF
surface   dark:  (missing)
```

Below is the version to use. Both themes are filled in for every role.

```
surface   light: #FFFFFF
surface   dark:  #232019
```

---

## 2.3 Build ramps in OKLCH, not hex

Pick your hue, then step **lightness** evenly.

**What this means:** A **ramp** is one colour printed at many lightness levels, in order. It runs from very pale at the top to very dark at the bottom. Think of the shade card you get at a paint shop. One blue runs down that card, from almost white to almost black. You pick your colour family once. That family is called the **hue**. After that you change only one thing: how light or dark the colour is. You change it in even steps.

### Why this matters

In normal RGB, "50% blue" and "50% yellow" do not look equally bright
to the human eye. So a hand-picked palette always has one colour that
looks wrong, and nobody can explain why.

**What this means:** **RGB** is how a screen builds colour, by mixing red, green and blue light. A **hex code** like `#1E88E5` is those three amounts written as one code. The problem is that your eye does not measure light the way a machine does. Your eye picks up green and yellow much more strongly than it picks up blue. So a yellow set to half power looks bright and cheerful. A blue set to that same half power looks heavy and dark. Now pick a set of colours by hand, going only by what looks right. One of them always ends up out of step with the rest. The app looks slightly off, and nobody on the team can point at which colour is the problem.

OKLCH fixes this with maths. Same lightness number = same perceived
brightness, whatever the hue.

**What this means:** First, that word "perceived". It means how bright a colour *looks* to a person. It does not mean how much light a machine measures coming off the screen. Now the rest. **OKLCH** is another way of writing a colour. Instead of "how much red, green and blue", it uses three numbers. **L** is the lightness, how light or dark the colour is. **C** is how strong the colour is. **H** is the hue, which colour family it belongs to. The maths behind it came from asking real people which colours looked equally bright to them. Those answers were then turned into numbers. So in OKLCH, lightness 62% yellow and lightness 62% blue really do look equally bright. That is the whole point of using it.

Below is a ramp with ten steps. The left number is the step name. The right number is the lightness of that step. Notice that only the lightness changes down the list.

```
Ramp example (lightness steps):
50   95%   ← lightest
100  90%
200  82%
300  72%
400  62%
500  52%   ← the base color
600  44%
700  36%
800  26%
900  16%   ← darkest
```

Read that list like a shade card. Step `50` at 95% lightness is almost white, good for a pale background. Step `500` at 52% is the middle of the ramp and the main version of the colour. Step `900` at 16% is nearly black, good for text. The step numbers are only labels. They run 50, 100, 200 and on up to 900. The gaps between those numbers leave room to slot in a new step later, if you ever need one.

One case where you will need one: an app that lives mostly in dark mode. Look at the bottom of the ramp. Dark mode's whole world — the page, the cards, the raised panels — has to fit between roughly 12% and 26% lightness. The standard ramp gives that stretch only two steps, `800` and `900`. That is not enough levels to build a page, a card on the page, and a panel on the card. So a dark-first app slots extra steps into the dark end, such as an `850` between the two, using exactly the number gaps left for the purpose. Generate the extra steps with the same maths as the rest. Never wedge in a hand-picked value.

Tools: any OKLCH colour picker. Generate once, paste the hex output
into your primitives file.

**What this means:** You do not do this maths yourself. Search for an OKLCH colour picker on the web, set your hue, and read out the ten steps. The picker gives you a hex code for each step. Your primitives file is the one file where those raw colours live. You paste the hex codes into it once. After that you never touch them again. Your roles point at them from that day on.

**What goes wrong if you break this rule:** suppose you hand-edit one step later, to "fix" it by eye. The even spacing is now gone. That one step sits too close to its neighbour, or too far from it. The ramp starts to look bumpy, and every screen that uses that step looks slightly wrong.

---

## 2.4 Make your neutrals warm or cool — never pure gray

This is the single cheapest trick for looking professional.

**What this means:** Your **neutrals** are the greys of your app. That means the background, the cards, the lines, and most of the text. A pure grey is made of exactly equal red, green and blue, like `#333333`. It leans towards no colour family at all. Pure grey is what you get when nobody made a decision.

Mix a small amount of your accent hue into the neutral ramp.

**What this means:** Your accent is the one main colour of your app. Take its hue and mix a little of it into every grey. Warm hues are red, orange and yellow. Cool hues are blue, green and purple. If the accent is orange, your greys lean very slightly brown. Nobody looking at the screen will say "that grey is warm". They will only feel that the whole screen belongs together.

Below, the top line is the version to avoid and the bottom line is the version to use. Look at how little the hex code changes.

```
Pure gray  #333333   next to orange accent  →  looks like a template
Warm gray  #2c2822   next to orange accent  →  looks designed
```

One word in that block needs unpacking. A **template** is a ready-made design that anybody can download and use as it comes. So when people say a screen "looks like a template", they mean it looks like nobody made any choices.

Now read those hex codes in pairs. A hex code is six characters, so it splits into three pairs: red, then green, then blue. `#333333` is 33 red, 33 green, 33 blue. All three amounts are the same, so that grey leans towards no colour family at all. `#2c2822` is 2c red, 28 green, 22 blue. There is a little more red than blue here. That tilts the grey a touch towards brown. That tiny tilt is the entire trick.

Rule: neutrals should share a hue family with the accent.
Warm accent → warm neutrals. Cool accent → cool neutrals.

**What this means:** Warm hues are red, orange and yellow. Cool hues are blue, green and purple. Work out which side your accent sits on. Then put your greys on that same side. An orange accent with slightly blue greys is the mismatch that makes a screen feel cheap.

**What goes wrong if you break this rule:** your greys pull one way and your accent pulls the other. The two never look like they came from the same app. Nobody will be able to point at the problem. They will only say the screen looks cheap, or unfinished, or a bit off.

---

## 2.5 Keep the accent count at one

One accent colour. Plus success / warning / danger for status.

**What this means:** Your app gets exactly one main colour. That colour marks the main button, the links, and whatever is currently selected. On top of that you get three **status** colours: green-ish for success, orange-ish for warning, red-ish for danger. Those three are not decoration. They only report what happened.

Two accents means every new feature starts an argument about
which one it gets. There is never a good answer.

**What this means:** A **feature** is one new thing your app can do, like adding a search box. With two accent colours, every new feature needs a meeting about its buttons. Is the "Save" button the blue one or the purple one? Both answers can be argued for, so the argument never ends. Different screens then settle it in different ways. One accent removes the question completely.

Below is the version to avoid. Two main colours, and no rule for choosing between them.

```
color.accent        = blue
color.accentTwo     = purple     <- which button gets which?
```

Below is the version to use. One main colour, plus the three status colours that each have a fixed job.

```
color.accent   = blue
color.success  = green      (it worked)
color.warning  = amber      (careful)
color.danger   = red        (this deletes something)
```

**Amber** is the orange-yellow of the middle light on a traffic signal. It is the standard colour for "slow down and pay attention".

**What goes wrong if you break this rule:** with two main colours, nobody can look at a screen and know which one is correct. Two people build two screens and pick differently. The app slowly splits into two looks. Putting that right later means going back through every screen you have already built.

---

## 2.6 Dark mode is not an inversion

You cannot flip the light theme. These things do not invert:

**What this means:** **Dark mode** is the setting where the app turns mostly dark with light text. An **inversion** means flipping every colour to its opposite. White becomes black, black becomes white. That flip looks like an easy shortcut, and it produces a bad screen. Five things break when you flip them. The table lists all five.

Read the table in rows. Each row names one thing. The middle column says what that thing does in light mode. The last column says what it must do differently in dark mode.

| Thing | Light mode | Dark mode |
|---|---|---|
| Pure black / white | `#000` text is fine | `#fff` text is too harsh — use `#f0ebe2` |
| Background | `#fff` | Not `#000` — use `#1a1815`, pure black looks like a hole |
| Saturation | Normal | **Lower it.** Saturated colours vibrate on dark. |
| Elevation | Shadows | Shadows barely show — use a **lighter surface** instead |
| Accent | Works | Often too dark — usually needs a lighter step |

Here is each row again, in plain words.

- **Pure black / white.** In light mode, black text on a white page reads fine. In dark mode, pure white text on a dark page is painfully bright, especially at night. The letters seem to glow and smear. Use an off-white like `#f0ebe2` instead. (`#fff` is the short way of writing `#ffffff`, and `#000` is short for `#000000`.)
- **Background.** A pure black background looks like a hole cut in the phone. Any card sitting on it seems to float with nothing behind it. Use a very dark grey like `#1a1815` instead, so the screen still reads as a surface.
- **Saturation.** **Saturation** is how strong a colour is. A strong colour on a dark background seems to shimmer or buzz at its edges. That buzzing is what "vibrate" means here. Turn the strength down in dark mode.
- **Elevation.** **Elevation** is how high something looks like it is floating above the screen. In light mode you show that with a shadow. On a dark background a dark shadow cannot be seen at all. So instead you make the raised thing a *lighter* grey than whatever sits under it.
- **Accent.** Your accent colour was chosen against a white page. On a dark page that same colour usually looks dull. It sinks into the background instead of standing out. Move one step up your ramp to a lighter version of it.

Rule of thumb: in dark mode, higher = lighter. In light mode, higher = more shadow.

**What this means:** "Higher" means closer to the front of the screen. A card is higher than the page. A pop-up is higher than the card. In light mode you show that with a stronger shadow underneath. In dark mode you show it by making the thing lighter than whatever it sits on.

**What goes wrong if you break this rule:** keep using shadows in dark mode, and they vanish. A dark shadow on a dark background shows nothing. Every box then looks like it is lying flat on the same level. The reader cannot tell which box is on top, so a pop-up stops looking like a pop-up.

---

## 2.7 Contrast: the numbers you must hit

A **contrast ratio** is one number that says how far apart two colours are in brightness. It is written like `4.5 : 1`.

**What this means:** A tool measures how much light each of the two colours sends out. It then divides the brighter number by the darker one. Black on white is the biggest gap you can get, and it scores 21:1. A colour against itself has no gap at all, and it scores 1:1. So a bigger first number means the text stands out more from what is behind it. Every colour checker on the web works this out for you. You paste in two colours and it prints the ratio.

The table below gives the lowest score each kind of content is allowed. "Minimum" means you may go higher, never lower.

| Content | Minimum ratio |
|---|---|
| Body text | **4.5 : 1** |
| Large text (18pt+, or 14pt bold) | **3 : 1** |
| **Icons, borders, input outlines, focus rings** | **3 : 1** |

Row by row, in words.

- **Body text** is ordinary reading text, the size you are reading now. It must score at least **4.5 : 1** against the colour behind it.
- **Large text** means text of 18pt or bigger. Bold text counts as large from 14pt upwards. Large text needs only **3 : 1**, because bigger letters are easier to read anyway. (`pt` is a length unit for screens, a bit like millimetres.)
- The third row covers the things that are not text at all. That means icons, lines, the outline of a box you type into, and the **focus ring**. A focus ring is the outline that appears around a button when it is selected. Usually you select it by pressing the Tab key. All of those things need **3 : 1** as well.

**What goes wrong if you break these numbers:** the reader has to work to separate the letters from the background. Some readers cannot separate them at all. Others give up before they get to the end of the sentence.

That third row is the one everyone forgets.
A faint `#eee` divider on white is invisible to many people.

**What this means:** People check their text and stop there. But a divider line no one can see is a line that does no work. `#eee` is a very pale grey. On a white background the gap in brightness is tiny. The line vanishes for anyone with weaker eyesight. It vanishes for everyone else too, the moment they step outside into sunlight.

Below is the version to avoid. The divider line is there in the code, but nobody can see it on the screen.

```
border   #eeeeee on #ffffff     <- fails 3:1
```

Below is the version to use. The line is dark enough to actually separate two rows.

```
border   #d0cdc6 on #ffffff     <- passes 3:1
```

One honest tension to settle here. A line that passes 3:1 is a fairly dark, definite line. Draw every divider in an app at that strength and the screen starts to look ruled, like a page from an exercise book. If that happens to you, split the job into two roles. `border` stays soft and is only decoration — row dividers, card edges — things the layout would survive losing. `borderStrong` passes 3:1 and is for lines that *carry information*: the outline of a box you type into, the edge of a control, the focus ring. The test for which role a line gets: cover the line with your finger. If the screen stops making sense, the line is information, and it must pass 3:1. If the screen still works, the line is decoration, and soft is allowed. Write the split down as two roles. Never solve it by quietly fading one border below the limit.

**Check this in CI**, automatically, on every token change.
It is about 30 lines of code and it is the only way the rule survives
a busy Friday afternoon.

**What this means:** **CI** is short for "continuous integration". It is a machine that runs every time someone saves work into the shared project. It checks the rules and shouts if one is broken. It can also block the change from going in. A "token change" means any time somebody edits one of the colour values on your list. Here you make the machine read every pair of colours in your list. It works out the contrast ratio for each pair. If any pair scores under the number in the table, the machine fails the change.

Why bother, when you could check by hand? Because at 6pm on a Friday, with a deadline the next morning, nobody checks by hand. The machine does not get tired and does not have a deadline. Thirty lines of code, written once, is what keeps the rule alive a year from now. More about machines that check rules is in [the enforcement chapter](../02-must-have/06-enforcement.md). More about who these rules protect is in [the accessibility chapter](../02-must-have/01-accessibility.md).

---

## 2.8 Never use colour alone to carry meaning

About 8% of men cannot easily tell red from green.

**What this means:** Roughly 8 out of every 100 men see red and green as very similar shades. That is not rare. In a class of 40 students, it is probably one or two people. Now suppose the only difference between "it worked" and "it failed" is red against green. Those readers get no information at all from your screen.

In the table below, the left column is the version to avoid and the right column is the fix. Notice that the fix never removes the colour. It adds a second signal on top of it.

| Wrong | Right |
|---|---|
| Green line = added, red line = removed | Also add `+` and `−` signs |
| Red dot = offline, green dot = online | Also change the shape or add a label |
| Chart series by colour only | Also vary line style or add direct labels |

Each row, spelled out.

- **First row.** When you compare two versions of a file, a tool marks what changed. Added lines show green and removed lines show red. Fix: also put a `+` in front of every added line and a `−` in front of every removed line.
- **Second row.** A small coloured dot shows whether a person is online or offline. Fix: also make the offline dot a hollow ring instead of a filled circle. Or write the word "Offline" next to it.
- **Third row.** A chart draws each series in its own colour. (A **series** is one of the lines on the chart.) Normally the only way to tell the lines apart is the small box at the side of the chart. That box matches each colour to a name, and it is called a key. A key is no help at all to somebody who cannot separate those colours. Fix: also make one line dashed and another solid. Or print each line's name at the end of the line itself.

Also make sure your "added" and "removed" colours differ in
**lightness**, not only hue.

**What this means:** **Hue** is which colour family it is, red or green. **Lightness** is how light or dark it is. Say your red and your green sit at the same lightness. To someone who cannot separate those two hues, the pair now looks identical. So make one of them much darker than the other. Even with the hue taken away, a visible difference is left.

Below is the version to avoid. Two colours that differ only in hue.

```
added    green, lightness 52%
removed  red,   lightness 52%     <- same lightness, no difference left
```

Below is the version to use. The hue still differs, and now the lightness does too.

```
added    green, lightness 62%
removed  red,   lightness 44%     <- one is much darker than the other
```

**What goes wrong if you break this rule:** two colours at the same lightness collapse into one shade for a reader who cannot separate those hues. The screen then looks identical whether the news is good or bad. That reader has to guess, and half the time the guess is wrong.

---

## 2.9 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] Two layers only: primitives → roles — raw colours first, job names second, and nothing else in between
- [ ] Every role has a light AND a dark value — no role is left with a hole in one theme
- [ ] Ramps generated in OKLCH — the light-to-dark steps of each colour were made with maths, not picked by hand
- [ ] Neutrals carry a hint of the accent hue. Your greys lean the same way as your accent, warm or cool
- [ ] One accent colour — exactly one main colour, plus success, warning and danger for status
- [ ] Contrast checked automatically in CI. A machine measures every colour pair on every change, and blocks the failures
- [ ] No meaning carried by colour alone. Every colour signal also has a sign, a shape, a label or a lightness difference
