# 4. Typography (How Your Text Looks)

**In one line:** Pick 5 or 6 text sizes. Give each one a name based on the job it does. Keep the size, the thickness and the line gap together under that one name. After that, nobody has to decide any of it again.

**Why this chapter exists:** Typography means how text looks on screen. Most apps end up with 12 to 15 different font sizes. They need 5 or 6. The extra sizes creep in one screen at a time. Someone types 14 on one screen. Someone else types 15 on the next screen. Nobody stops either of them, so the list keeps growing. Text is most of what a user actually reads. When the text sizes are a mess, the whole app looks unplanned.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **Typography** | How text looks. Its size, its thickness, the gap between lines, the gap between letters. |
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps. |
| **Developer** | A person who writes the code for an app. Also called a dev. |
| **Ship** | To put something in front of real users. "We shipped it" means people are using it now. |
| **Design system** | The written list of rules your app follows. Which text sizes exist, which colours exist, which gaps exist. Like a school uniform rule sheet, but for a screen. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `body = 15`. After that everyone types `body` instead of typing `15`. Change it in one place and it changes everywhere. |
| **Role** | A token for text, named after the job the text does. `title`, `body`, `caption`. You pick the job, and the size comes with it. |
| **Font size** | How big the letters are. `15` is normal reading size on a phone. |
| **Weight** | How thick the letters are. Written as a number from 400 to 800. 400 is normal. 700 is bold. |
| **Line height** | The gap from the top of one line of text to the top of the next line. Like the ruled lines in your notebook. Wide lines are easier to read. |
| **Letter spacing** (also called **tracking**) | The gap between one letter and the next letter inside a word. |
| **Ratio** | A number you multiply by. A ratio of 1.2 means each step is 1.2 times the step below it. |
| **Scale** | The full list of allowed values, in order. Your type scale is your list of allowed text sizes. |
| **pt** / **px** | Units of length on a screen. Think of them like millimetres, but for phone screens. `15px` means 15 units tall. |
| **Mono** (monospace) | A font where every letter is exactly the same width, so letters line up in neat columns. The font used for code. |
| **Proportional font** | A normal font, where `i` is narrow and `m` is wide. The opposite of mono. |
| **Terminal** | A plain window where you type commands to a computer instead of clicking buttons. Its answers come back as lines of text in neat columns. |
| **Integer** | A whole number. 15 is an integer. 15.6 is not. |
| **Semi-bold** | A thickness between normal and bold. It is weight 600. |
| **Tabular numbers** | A setting that makes every digit the same width, so `1` takes as much room as `8`. Used for numbers that keep changing. |
| **Font family** | The name of the actual font, such as the phone's built-in font. |
| **Fallback chain** | A list of fonts in order of preference. If the first one is missing on that phone, the phone tries the next one. |
| **Platform** | The kind of device your app runs on. iPhone is one platform. Android is another. The web is a third. |
| **System font** | The font that comes built into the phone. Free, already there, nothing to download. |
| **Custom font** | A font you ship inside your app because the brand wants it. |
| **Brand** | The look a company wants people to recognise it by. Its colours, its logo, sometimes its font. |
| **Bundle** | The single package of code and files that gets installed on the phone when someone downloads your app. A bigger bundle means a slower download. |
| **Container** | A box on screen that holds other things, such as a list row that holds text. |
| **Padding** | The empty space **inside** a box, between the edge of the box and the stuff in it. Like the white border inside a page of your notebook before the writing starts. |
| **Fixed height** | Telling a box "you are exactly 44 tall, always". |
| **Min-height** | Telling a box "you are at least 44 tall, and you may grow taller if you need to". |
| **OS font scaling** | The phone setting that makes text bigger or smaller in every app. `OS` means the phone's own software, such as Android or iOS. |
| **Accessibility** | Making the app usable by people who cannot see small text, cannot hear, or cannot tap accurately. |
| **App review** | The check Apple or Google run before they let your app into their store. They can reject it. |
| **CSS** | The language that sets how a web page looks. |
| **React Native** | A tool for building phone apps. It uses similar words to CSS, but not always the same ones. |
| **Badge** | The tiny number bubble on an icon, like the unread count on WhatsApp. |
| **Tab bar** | The row of icons at the bottom of a phone app that switches between main screens. |
| **Caption** | Small grey text under something, such as a timestamp. |
| **Density** | How tightly packed a screen is. A compact side panel is high density. A roomy settings page is low density. |

---

## 4.1 Build the scale with maths, do not pick sizes by feel

Choose one ratio, multiply, then round to whole numbers. Do not sit and guess sizes one at a time.

**What this means:** A **ratio** is a number you multiply by. You start with one size. You multiply it by the ratio to get the next size up. You multiply again for the size after that, and you keep going. The sizes then relate to each other by maths, not by mood.

**What goes wrong if you guess instead:** You add each size on the day you happen to need it. Nothing tells you that 14 already exists next to 15. A year later the app has 12 to 15 sizes. Most of them look the same, and no two screens quite match.

Here are the three ratios worth using, and what each one suits.

| Ratio | Name | Good for |
|---|---|---|
| 1.2 | Minor third | Dense app UI, tools, dashboards |
| 1.25 | Major third | Balanced |
| 1.333 | Perfect fourth | Editorial, marketing, big headings |

Read the table like this. A small ratio like 1.2 makes sizes that sit close together. That suits a screen packed with information. A big ratio like 1.333 makes sizes that are far apart. That suits a page with one huge headline. "Dense" means a lot of text in a small space. "Editorial" means pages that read like a magazine article. If you cannot decide, take 1.25. It sits between the other two and works for most apps.

Below is the maths, worked out one step at a time. The ratio is 1.2 and the starting size is 13. Each line multiplies the line above it.

```
start        13
13 × 1.2  =  15.6  ->  15
15 × 1.2  =  18    ->  18
18 × 1.2  =  21.6  ->  22
22 × 1.2  =  26.4  ->  26
26 × 1.2  =  31.2  ->  32

and one step downwards:
13 ÷ 1.2  =  10.8  ->  11
```

That gives the finished scale below. This is the whole list of text sizes your app is allowed to use.

```
11  13  15  18  22  26  32
```

Round to integers and stop.

**What this means:** An integer is a whole number. Nobody wants a font size of 15.6. So you round each answer to a nearby whole number and write that down. In the list above, 15.6 became 15 and 31.2 became 32. Once you have the whole numbers, the maths has done its job. Stop there and use the list.

**What goes wrong if you keep the decimals:** Half sizes are hard to remember and easy to mistype. Different phones also round them in different ways. The same screen can then look slightly different on two phones sitting side by side.

If you cannot tell two sizes apart at a glance, do not keep both.

**What this means:** Put the two sizes side by side on a real phone screen and look at them. If you have to squint to see which is bigger, one of them is useless. Delete it. Two sizes that look the same are not a choice. They are a coin toss.

**What goes wrong if you keep both:** Nobody can tell you which one to use, because there is no visible difference to point at. So people pick at random. Half your screens end up on 14 and half end up on 15. Those screens now look almost the same, but not quite. Nothing looks broken enough to report, so nobody ever fixes it.

Below is the version to avoid. Nobody could see the difference between these on a phone.

```
13  14  15  16  17  18
```

Below is the version to use. Every step is visibly bigger than the one before it.

```
13  15  18  22
```

---

## 4.2 Name text styles after their job, not their size

Give each text style a name that says what it is for, such as `title` or `caption`. Do not name them `small`, `medium`, `large`.

A t-shirt scale (`sm`, `md`, `lg`) does **not** solve the problem.

**What this means:** A t-shirt scale is naming things the way clothes are sized: small, medium, large. It looks tidy on paper. It fixes nothing. The person building the screen still has to pick a size out of the air.

The developer still has to choose, and the next developer chooses differently.

**What this means:** A **developer** is a person who writes the code for an app. You build a list row and think "the main text is medium". Next month another developer builds a very similar list row. That person thinks "the main text is large". Now two rows that should match do not match. Nobody did anything wrong. The names asked them to guess.

Roles remove the choice.

**What this means:** A **role** is a text style named after the job it does. If the text is the title of a screen, you use `title`. There is nothing to decide, because the job decides for you.

Below is the version to avoid. The name describes the look, so the next person guesses differently.

```
screen title    -> text.lg
another title   -> text.md
```

Below is the version to use. The name describes the job, so everyone lands on the same style.

```
screen title    -> title
another title   -> title
```

Here is the full set of roles. Each row is one role with its four numbers and the job it does.

| Role | Size | Weight | Line height | Use |
|---|---|---|---|---|
| `display` | 32 | 700 | 38 | One big number or title |
| `title` | 22 | 700 | 28 | Screen title |
| `heading` | 18 | 600 | 24 | Section heading |
| `rowTitle` | 15 | 600 | 20 | List row main text |
| `body` | 15 | 400 | 22 | Reading text |
| `rowSubtitle` | 13 | 400 | 18 | List row second line |
| `caption` | 13 | 400 | 18 | Timestamps, meta |
| `label` | 11 | 700 | 14 | ALL-CAPS section labels |
| `mono` | 13 | 400 | 20 | Code, terminal |

The columns need a word each. **Size** is how big the letters are. **Weight** is how thick they are, where 400 is normal and 700 is bold. **Line height** is the gap from one line of text down to the next line.

Two rows are worth reading twice. `rowTitle` and `body` are both size 15. But `rowTitle` is weight 600 and `body` is weight 400. Same size, different thickness, different job.

Open WhatsApp and look at your list of chats. The contact's name is the `rowTitle`. It looks heavier than the line of message preview under it. That preview line is `rowSubtitle`. "Meta" in the `caption` row means small extra information, such as the time a message was sent.

One more pair to read twice: `rowSubtitle` and `caption` carry exactly the same numbers — 13, weight 400, line height 18. That is deliberate, and it is allowed, but only if you say out loud how the two differ. Usually they differ by **colour**: `rowSubtitle` uses the normal secondary text colour, `caption` uses the muted one. If you would rather they differ by size, drop `caption` to 12. Either answer is fine. What is not fine is two roles with the same numbers, the same colour, and no written reason — that is one role wearing two names, and people will pick between them at random.

Adjust the numbers. Keep the idea.

**What this means:** If your app needs `title` at 24 instead of 22, change it. Two things must not change. The names are based on jobs. Behind each name sits one fixed set of numbers that nobody edits screen by screen.

**What goes wrong if you keep the names but drop the idea:** Say each screen is allowed to set its own numbers under the name `title`. Then `title` is 22 on one screen and 26 on the next. The name now promises something it does not deliver. That is worse than having no names at all. People trust a name, so they stop checking, and the screens quietly stop matching.

### One scale, or two densities

Most apps need exactly one scale, and this chapter assumes one. A few apps genuinely need two.

**What this means:** **Density** is how tightly packed a screen is. Think of two rooms in the same app. One is a small strip that must stay out of the way — a compact side panel, a mini player, a toolbar. The other is a full window with the user's whole attention — a settings dialog, a reading view. Run both off one scale and one of them always suffers. Size the text for the full window and the strip becomes bulky. Size it for the strip and the full window feels squinty.

The fix is *not* a second set of roles, and *not* per-screen overrides. It is the **same role names, with two sets of numbers**. `body` might be 13 in the compact density and 15 in the comfortable one. Same name, same job, two values — exactly like light and dark are two values for one colour role.

Three rules keep two densities from becoming chaos:

1. **A screen declares its density once**, at the top. Every role on that screen then resolves to that density's numbers. A screen never mixes densities.
2. **Two densities is the maximum.** The moment someone asks for a third, you are back to hand-picking sizes with extra steps.
3. **Do not start with two.** Start with one. Add the second only when a real screen visibly fails on the single scale — and expect the same split to knock on into your icon sizes, and maybe your spacing, so the cost is a doubled table in more than one chapter. Write it down as a decision when you do.

**What goes wrong if you skip the declare-once rule:** density gets chosen per component instead of per screen. One dialog ends up with compact rows under a comfortable title. The two halves of the screen disagree with each other, which is the exact disease the scale existed to cure.

---

## 4.3 A role carries everything, not only a size

Never ship a role that is only a font size. A role must also carry its weight, its line height and its letter spacing. ("Ship" means put it in front of real users.)

**What this means:** Say your `rowTitle` role only says "15". Everyone who uses it still has to pick the thickness themselves. They still have to pick the line gap themselves. You have moved the guessing somewhere else. You have not removed it.

Below is one complete role, written in code. The name sits on the left of the colon, which is the pair of dots. Everything inside the curly brackets `{ }` belongs to that name. Look at how four values travel together under one name.

```js
rowTitle: {
  fontSize: 15,
  lineHeight: 20,
  fontWeight: "600",
  letterSpacing: 0,
}
```

`fontSize` is how big. `lineHeight` is the gap between lines. `fontWeight` is the thickness. `letterSpacing` is the gap between letters, and `0` means normal.

Line height is where designs quietly fall apart.

**What this means:** Wrong line height does not look like an error. The screen still works. It only feels tiring to read, and nobody can say why. Lines too close together look cramped and squashed. Lines too far apart stop looking like one paragraph.

Here is how much line height each kind of text needs. The right column asks you to do a multiplication. Take the font size and multiply it by that number.

| Text type | Line height |
|---|---|
| Reading text (paragraphs) | 1.5 – 1.6 × size |
| UI text (rows, buttons) | 1.3 – 1.4 × size |
| Headings | 1.15 – 1.3 × size |

Work one out to see how it goes. Reading text at size 15 needs a line height of about 15 × 1.5 = 22.5. Round that to 22 and use it. That is where the 22 in the `body` role above came from.

Notice the pattern. The more words in a row a person has to read, the more air the lines need. A heading is one short line, so it needs the least.

**Letter spacing:** as size goes up, tighten slightly. Big text looks loose with the same tracking as small text.

**What this means:** **Tracking** is another word for letter spacing. When letters are drawn very large, the gaps between them grow too. The word then starts to look like it is falling apart into single letters. So you pull big text slightly tighter. A negative number pulls letters closer together. A positive number pushes them further apart.

Below are the three cases. The number on the right is how much space to add between letters.

```
32px heading   letterSpacing: -0.5
15px body      letterSpacing:  0
11px label     letterSpacing:  0.8   (caps need more air)
```

"Caps" means CAPITAL LETTERS. Capitals are all the same height. They sit shoulder to shoulder with no tall or short letters to break them up. So a word in capitals turns into a solid wall unless you push the letters apart. That is why the tiny 11 label gets a positive 0.8. The big 32 heading has the opposite problem, so it gets a negative 0.5.

---

## 4.4 Define every weight you need, not only the heavy ones

Your system must include the light weights as well as the bold ones. Define 400 and 500, not only 600 and 700.

Many systems only define 600/700/800. Then everything looks bold and flat, with no quiet text.

**What this means:** Weight is how thick the letters are. Say the thinnest weight you own is 600. Then all your text is at least semi-bold, which is the thickness between normal and bold. Everything on the screen shouts. When everything shouts, nothing stands out. You need quiet text so that the important text can look important.

Think of a page in your notebook where you have highlighted every single line. Nothing is highlighted any more.

Define at least the four weights below. The number is the weight and the words say where it goes.

```
regular  400   body text
medium   500   slightly emphasised
semibold 600   row titles, buttons
bold     700   headings, labels
```

"Emphasised" means made to stand out a little. 500 is the small step between normal and semi-bold. Use it when a line matters a bit more than the lines near it, but not enough to shout.

Below is the version to avoid. There is no quiet weight at all, so a whole screen reads as one loud block.

```
600  700  800
```

Below is the version to use. There is a normal weight to sit under the heavy ones.

```
400  500  600  700
```

---

## 4.5 Tabular numbers (small thing, big effect)

Any number that **updates in place** must use tabular digits. Tabular digits are also called fixed-width digits, because every digit takes the same width. Without them, the text jumps left and right on every change.

**What this means:** "Updates in place" means the number changes while the user is looking straight at it. The screen does not reload. A timer counting down does exactly this. In most fonts, the digit `1` is narrower than the digit `8`. So when a timer ticks from `1:11` to `1:08`, the text gets wider. Everything next to it then shifts sideways. **Tabular numbers** is a setting that gives every digit the same width. `1` then takes exactly as much room as `8`, and nothing moves.

Think of a cricket scoreboard, where each digit sits in its own fixed slot. The slot does not shrink when the digit is a 1. Tabular numbers do the same thing inside a font.

Applies to: timers, counters, prices, table columns, progress percentages, token counts.

**What this means:** Use it anywhere a number is going to change. Use it anywhere a number has to line up under another number. A price list is a good example. The prices sit in a neat column. Without tabular digits that column goes crooked.

Two items on that list need a word each. "Table columns" means numbers stacked one under the other in a grid, like a class marks sheet. A "progress percentage" is the number that climbs from 0% to 100% while something loads or downloads.

One more item needs a longer note. A "token count" is a number that some apps show next to an AI's answer. It says how much text the AI has read and written. It ticks upward while you watch, so it counts as a number that updates in place. (Careful here. This is a different meaning of the word "token". The table at the top of this chapter uses the other meaning. Both meanings are common, so you have to work out which one is meant.)

Below is the setting, written for both places you might need it. The first line is for a web page. The second line is for a phone app built with React Native. The `//` marks a note for humans, and the computer ignores everything after it.

```js
fontVariantNumeric: "tabular-nums"   // CSS
fontVariant: ["tabular-nums"]        // React Native
```

Bake it into the roles that need it. Do not rely on people remembering.

**What this means:** Put this setting inside the role itself. Then anyone who uses that role gets it without having to ask. If it is an extra line people must add by hand, someone will forget it late one Friday. That timer will then twitch sideways on real phones for a year before anyone reports it.

Below is the version to avoid. The setting is added by hand, one screen at a time.

```
timer text  ->  role: body, plus fontVariantNumeric added here by hand
```

Below is the version to use. The setting lives inside the role, so it always travels with it.

```
timerValue: {
  fontSize: 15,
  lineHeight: 20,
  fontWeight: "600",
  letterSpacing: 0,
  fontVariantNumeric: "tabular-nums",
}
```

---

## 4.6 OS font scaling — the most important item on this page

Users can set system text size to 130%, 200%, or more. Many people run at 130–150% permanently.

**What this means:** Every phone has a setting that makes text bigger in every app at once. On Android it is usually under Settings, Display, Font size. On iPhone it is under Settings, Display and Brightness, Text Size. When a person turns it up to 130%, all text in every app should become 1.3 times as big. That is 30% bigger. At 200% it is twice as big.

This is not rare and it is not temporary. Plenty of people set it once, years ago, and never change it back. Anyone who finds small text hard to read lives at 130% or 150% all the time. Your app must work for them on day one, not as a fix later.

If your font sizes are fixed numbers, one of two bad things happens:

1. Text ignores the setting → accessibility failure, app review risk
2. Text scales but **gets cut off**, because rows have fixed heights

Take those one at a time.

**Problem 1: the text refuses to grow.** The person turned the setting up. Every other app on their phone obeyed. Yours did not. To them, your app is broken. **Accessibility** means making the app usable for people who cannot read small text. Ignoring the setting is a plain failure of that. It is also an **app review** risk. That means Apple or Google can refuse to put your app in their store over it.

**Problem 2: the text grows, but the box around it does not.** This one is worse. It only shows up on the phones of the people who need the big text most. The text becomes bigger. The row stays exactly 44 tall, because that is what you told it to be. The bottom of every letter is sliced off. Buttons lose their labels. Names turn into half-names.

Think of a school shirt with the sleeves sewn shut. The child grows, and the shirt cannot.

### Decide this now, per role

Not every piece of text should grow by the same amount. A screen title at twice the size fills the screen. So you set a limit for each role. Here is that decision, written out.

| Role | Scales? | Max multiplier |
|---|---|---|
| `body`, `rowTitle`, `rowSubtitle` | Yes | 2.0 |
| `title`, `heading` | Yes | 1.6 |
| Tab bar labels, badges | Yes | 1.2 |
| `mono` in a terminal view | Usually no | 1.0 |

"Max multiplier" is the largest amount that text is allowed to grow by. It holds even if the user pushes the phone setting higher than that. 2.0 means the text can reach twice its normal size and no further. 1.6 means 1.6 times. 1.2 means 1.2 times, which is 20% bigger. 1.0 means it does not grow at all.

Read down that table and the logic appears. Reading text is the text people are struggling with, so it gets the most room to grow: 2.0. Titles are already big, so they stop at 1.6.

**Tab bar** labels are the words under the icons at the bottom of the screen. **Badges** are the small bubbles showing an unread count. Both sit in tiny corners that cannot get any bigger, so both stop at 1.2. `mono` text in a terminal view has to stay in exact columns. Growing it would break those columns, so it usually does not scale at all.

### And the layout rule that goes with it

> **No container that holds text may have a fixed height.**

**What this means:** A **container** is a box on screen that holds something. A list row is a container. So is a button. A **fixed height** is telling that box "you are exactly 44 tall, always". Now the text inside can get twice as big, and the box can never get taller. The text has nowhere to go, so it gets cut off. Any box with text in it must be free to grow.

Use min-height + padding instead.

**What this means:** **Min-height** says "be at least this tall". **Padding** is the empty space inside the box, between its edge and the text. Put together, the two say this. Start at this height. Keep this much air around the text. Grow taller if the text needs more room. The row still looks right at normal size, and it survives at 200%.

Below is the version to avoid. The box can never grow, so big text gets sliced.

```
Row
  height: 44
  text: rowTitle
```

Below is the version to use. The box starts at 44 and grows when the text grows.

```
Row
  minHeight: 44
  paddingVertical: 12
  text: rowTitle
```

`paddingVertical` means padding on the top and bottom only.

Test the whole app at max font size.

**What this means:** Turn the font size setting on a real phone all the way up. Then open every screen in your app, one by one. Look for text that is cut off. Look for text that overlaps other text. Look for buttons that have lost their words. Do this before you release the app, not after someone complains.

This is nearly impossible to go back and add later. It is free to decide today.

**What this means:** Decide this today and it costs you almost nothing. One decision, plus one extra word in your layout code. Leave it, and every screen you build gets a fixed height baked into it. Changing that later means opening every screen again. It also means testing the whole app again. That is the whole difference between deciding now and deciding later.

---

## 4.7 Font family

- Define a **text** family and a **mono** family.

**What this means:** A **font family** is the name of the actual font. You need two of them. The **text** family is for everything a person reads normally. The **mono** family is for code and for terminal output. In a mono font every letter is the same width, so columns of text line up under each other.

**What goes wrong if you only define one:** Your code and your terminal output get the normal text font. In that font `i` is narrow and `m` is wide, so nothing lines up. Numbers in a column go crooked and become hard to compare.

- Include a fallback chain for every platform. Say you name one font, and a device does not have it. That device quietly swaps in a font of its own. It never warns you. (Example: a mono font that only Macs have, running on Android. Android swaps in a **proportional** font. Every column of text stops lining up.)

**What this means:** A **fallback chain** is a list of fonts in order of preference. The phone tries the first one on the list. If that font is not installed, the phone tries the next one. "Platform" means the kind of device: iPhone, Android, web.

Now say you name only one font. That phone does not have it. The phone quietly picks a font of its own choosing and tells nobody. Nothing shows up as an error. A **proportional** font is a normal font where `i` is narrow and `m` is wide. If your code view lands on a proportional font, every column of numbers goes crooked. The output stops lining up, and it stops being readable.

Below is the version to avoid. It names one font and no backup. Menlo is a font that only Macs have, so Android has never heard of it.

```
mono: "Menlo"
```

Below is the version to use. Those are four font names, best first. If the first font is missing, the phone moves down the list. The last word, `monospace`, is not a real font name. It means "any mono font you have", so the list can never run out.

```
mono: "Menlo, Roboto Mono, Courier New, monospace"
```

- System fonts are free, load instantly, and already support OS font scaling. Custom fonts cost bundle size and a loading strategy. Use a custom font only if the brand really needs it.

**What this means:** A **system font** is the one already built into the phone. There is nothing to download and nothing to wait for. It also already obeys the phone's text size setting from section 4.6.

A **custom font** is one you ship inside your app. The **bundle** is the package people download when they install your app. A custom font makes that package bigger, so the download takes longer. A custom font also needs a "loading strategy". That means deciding what the screen shows in the moment before your font is ready.

**What goes wrong if you skip that decision:** For a second or two the app has no font to draw with. Some phones draw nothing at all. The screen sits there blank, and the user thinks the app has frozen. Other phones draw the words in a backup font first, then swap. Every line of text jumps as the real font arrives.

So a custom font is real work, not a free choice. The **brand** is the look a company wants people to recognise it by. Use a custom font only when that look genuinely depends on it. Do not use one because a different font looks nice.

---

## 4.8 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] Scale generated from a ratio, 6–8 sizes max — every size came from multiplying. There are between six and eight of them, and no more.
- [ ] Roles named by meaning, not size — `title` and `caption`, not `lg` and `sm`
- [ ] Each role carries size + line height + weight + tracking — one name holds all four numbers. Letter spacing is one of the four.
- [ ] 400 and 500 weights exist, not only 600/700 — there is a normal, quiet thickness, not only heavy ones
- [ ] Tabular numerals on any updating number — every digit is the same width. Numbers that change do not shove the text sideways.
- [ ] Scaling behaviour + max multiplier decided per role — for each role you have written down two things. Does it grow with the phone's text size setting, and how far may it grow?
- [ ] No fixed-height text containers — every box that holds text can grow taller
- [ ] Font family has a platform fallback chain — a backup font is named for every platform. No phone is left guessing.
