# 9. Getting Ready for Other Languages (i18n)

**In one line:** Build your screens so they can hold longer words and other date formats. Build them so they can also flip for languages that are read from right to left. Do this from the start, and you will never have to rebuild the app to add them.

**Why this chapter exists:** Even if you launch in English only, do these things now. They are **free upfront and very expensive later**. That is because they are structural, not cosmetic. **Structural** means it touches how every screen is built underneath. **Cosmetic** means only the surface look, like a colour or a shadow. Changing a colour later takes a minute. Changing how 60 screens lay themselves out takes weeks.

**What "i18n" means:** It is a short way of writing the word **internationalization**. Count the letters between the first `i` and the last `n`. There are 18 of them. So people write `i` + `18` + `n`. It means getting your app ready for other languages and other countries.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **i18n** | Short for "internationalization". Getting your app ready for other languages and countries. 18 is the number of letters between the `i` and the `n`. |
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, icons, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which text sizes exist, which gaps exist. Like a school uniform rule sheet, but for a screen. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `font.body = 16`. After that everyone types `font.body` instead of typing `16`. Change it in one place and it changes everywhere. |
| **String** | A piece of text in your app. "Send", "No messages yet", "Delete this photo" are all strings. |
| **Locale** | The language and country settings of one user. `en-IN` means English as used in India. `hi-IN` means Hindi in India. `de-DE` means German in Germany. The locale decides the language, the date order, the number format and more. |
| **Translate** | Swap the English words for words in another language. |
| **Pseudo-locale** | A fake language you switch on while testing. It is not real. It takes your English text and stretches it, so you can see which boxes break. |
| **RTL** | Short for "right to left". Arabic, Hebrew, Urdu and Farsi are read from the right side of the line to the left. |
| **LTR** | Short for "left to right". English and Hindi are read this way. |
| **Mirror** | Flip left and right, like looking in a mirror. In an RTL language the whole screen mirrors: the back arrow, the menu, everything. |
| **Logical properties** | Ways of saying "the side where reading starts" instead of "the left side". `start` and `end` instead of `left` and `right`. |
| **Framework** | The toolkit you build the app with, such as React Native or SwiftUI. It does some work for you. |
| **CJK** | Short for Chinese, Japanese and Korean. These three languages need different text settings from English. |
| **Line-height** | The vertical space each line of text sits in. Bigger line-height means more air between lines. |
| **Letter-spacing** | Extra space added between letters. A negative value pulls letters closer together. |
| **Font stack** | A list of fonts, in order. The phone uses the first one it has. |
| **Fallback chain** | The rest of that list. If font one is missing a character, the phone tries font two, then font three. |
| **Formatter** | A ready-made piece of code that turns a raw value into text for one locale. You give it the date. It gives you `15/08/2026` or `08/15/2026`, depending on the user. |
| **Plural forms** | The different word endings a language uses for different counts. English has two: "1 item", "2 items". Some languages have up to six. |
| **Library** | Code someone else wrote that you use in your app instead of writing it yourself. |
| **Truncate** | Cut text short when it does not fit, and show `…` at the end. |
| **Wrap** | Let text flow onto a second line instead of cutting it. |
| **min-width** | A rule saying "this box must be at least this wide, and it may grow". |
| **Padding** | The empty space inside a box, between the edge of the box and the stuff in it. Like the white border inside a page of your notebook before the writing starts. |
| **Subset** | A cut-down copy of a font that only holds some characters, to make the file smaller. |
| **System font** | The font that already comes with the phone. You do not have to send it out with your app. |
| **Layout** | How the pieces on a screen are arranged. Which thing sits above which, and how wide each one is. |
| **Platform** | The phone system your app runs on, such as Android, iPhone or a web browser. It already gives you some ready-made code for free. |
| **Ship** | To send your app out to real people. Once it is shipped, everyone can see your mistakes. |
| **Plausible** | Something that could really happen. A plausible name is a name a real person could really have. |

---

## 9.1 Text expansion

The same sentence takes more room in other languages. Your box must grow to fit, or the words get cut off.

Other languages are longer than English.

Here is how much longer, by language. Read `+30–35%` as "about a third more room than English".

| Language | Typical growth |
|---|---|
| German | +30–35% |
| French, Spanish | +20–25% |
| Russian, Finnish | +30%+ |
| Japanese, Chinese | Shorter, but taller characters |

**What this means:** Say your English button says "Save". You have set it to be exactly 80 wide. **80 wide** means 80 dots across the screen. That is about the width of a fingernail. The German word for "Save" is longer, so the same button now needs about a third more width. But you told the button it may never change size. So the German word does not fit inside it. The user sees half a word and cannot tell what the button does.

The last row is different from the others. Chinese and Japanese use fewer characters, so the line of text is shorter. But each character is taller and has more detail than a Latin letter. A **Latin letter** is the kind English uses: `a`, `b`, `c`. So the text needs less width. It needs more height. This catches people out. They make the box shorter from top to bottom because the words got shorter. Then the taller characters do not fit, and the tops and bottoms get sliced off.

### What this means

Look at the four lines below. The two with ❌ are the versions to avoid. The two with ✅ are the versions to use.

```
❌  Fixed-width button:  width: 80
✅  Button grows with its text, with min-width and padding

❌  A single-line label with no room
✅  Wraps to 2 lines, or truncates cleanly
```

Line by line, in words:

- **Fixed-width** means you told the button its exact width. It can never change. If the word inside grows, the word gets cut off, not the box.
- **min-width and padding** are two rules working together. First you give the button a smallest size it may never go under. Then you say "leave this much empty space on each side of the word". The button then works out its own width from the word inside it. A longer word makes a wider button, on its own, with no extra work from you.
- **Wraps to 2 lines** means the text flows onto a second line instead of being cut off.
- **Truncates cleanly** means the text is cut short on purpose. It ends with `…`. That way the user can see there is more text, instead of thinking the sentence really ends there.

**Design with the longest plausible string, not the demo string.**

**What this means:** A **string** is a piece of text in your app. The **demo string** is the short, pretty one you typed while building, like "Hi". The **longest plausible string** is the longest one a real user could ever put there. **Plausible** means it could really happen, so you do not have to plan for a thousand-letter joke name. You do have to plan for a real long one. Two examples: the German word `Benachrichtigungseinstellungen`, which means "notification settings", and a real full name such as "Dr. Maria Fernanda Rodriguez de la Cruz". Design your box for that one. If the long one fits, the short one always fits too.

A good habit: test with a "pseudo-locale" that makes every string 40% longer. It finds every broken layout in one pass.

**What this means:** A **pseudo-locale** is a fake language setting used only for testing. It takes each English string and stretches it by 40%, so "Save" might become something like "Saaavvee". Nobody ships this to users. You switch it on, open every screen, and every box that is too small shows itself at once. One pass through the app instead of a hundred bug reports.

---

## 9.2 Right-to-left (RTL)

Some languages are read from right to left, so the entire screen flips like a mirror image. You have to build for that from the very first line of code you write. Adding it later means going back over every screen by hand.

Arabic, Hebrew, Urdu, Farsi read right to left. The whole layout mirrors.

**What this means:** In Urdu, reading starts on the right edge of the line and moves left. So the app must mirror too. The back arrow moves to the top right and points right. The menu moves to the right. Text lines up against the right edge. Think of holding your screen up to a mirror. That is roughly what the user sees.

### Use logical properties from line one

Stop naming the left and right sides. Name the "start" side and the "end" side instead, and the screen flips itself.

**What this means:** In English, reading starts on the left, so `start` means left. In Urdu, reading starts on the right, so `start` means right. When you write `start` instead of `left`, one piece of code works for both. When you write `left`, that thing stays stuck on the left forever, even in Urdu. So the rest of the screen flips around it and it does not move. The gap that should sit next to the text now sits on the far side of it. Things touch that should not touch. Things sit far apart that should be side by side.

The heading above says "from line one". That means the very first line of code you write. Do it on day one of the project. Then there is never anything to go back and fix.

The table below lists the exact words. Left column is what you must never type. Right column is what you type instead.

| Never write | Always write |
|---|---|
| `marginLeft` | `marginStart` |
| `paddingRight` | `paddingEnd` |
| `textAlign: "left"` | `textAlign: "start"` |
| `left: 0` | `insetInlineStart: 0` |
| `flexDirection: "row"` | same — the framework flips it for you |

Row by row, in words:

- `marginLeft` is space pushing outwards from the left side of a box. `marginStart` is space pushing outwards from the side where reading starts.
- `paddingRight` is space inside a box on its right side. `paddingEnd` is space inside a box on the side where reading ends.
- `textAlign: "left"` lines text up against the left. `textAlign: "start"` lines it up against the side reading starts from.
- `left: 0` pins a thing to the left edge. `insetInlineStart: 0` pins it to the start edge.
- The last row is not a swap. `flexDirection: "row"` means "lay these items out in a row". You keep writing exactly that. The **framework** is the toolkit you build the app with. It already knows to run the row the other way round in a right-to-left language. You do not do anything.

This costs nothing today. Converting 60 screens later costs weeks.

**What this means:** Typing `marginStart` takes the same effort as typing `marginLeft`. It is free. Now say you wrote `marginLeft` on 60 screens instead. A year later you decide to support Urdu. Someone has to open all 60 screens and change every one by hand. Then all 60 have to be tested again. That is weeks of work for something that would have cost nothing on day one. That is the whole point of this chapter.

### Which icons mirror

When the screen flips, some icons must flip with it and some must stay exactly as they are.

The table below is the decision, made once, for the whole app. Left column: flip these. Right column: never flip these.

| Mirror ✅ | Do not mirror ❌ |
|---|---|
| Arrows, chevrons | Play / pause |
| Back / forward | Checkmark |
| Undo / redo | Clock |
| Indent / outdent | Camera, mic, phone |
| Progress bars, sliders | Volume, brightness |

Why the split? Icons in the left column point the way reading goes, so they must follow it. A back arrow points backwards, and backwards is the other direction in Urdu. Icons in the right column are pictures of real things or fixed symbols. A camera looks like a camera everywhere. A clock's hands go clockwise everywhere. A tick mark is a tick mark. Flipping those only makes them look wrong. A flipped camera icon still means "camera", but it reads as a mistake. A flipped clock looks like it runs backwards.

A **chevron** is the small `>` shape at the end of a settings row. **Indent / outdent** are the icons that push a paragraph in or pull it back. A **progress bar** is the line that fills up while something loads. It should fill towards the side that reading ends on. In English it fills to the right. In Urdu it must fill to the left, or it looks like it is emptying instead of filling.

---

## 9.3 CJK (Chinese, Japanese, Korean)

Chinese, Japanese and Korean characters need more space between the lines. They must never be squeezed together sideways. Use your English text settings on them and they come out looking broken.

These need different type settings:

**Type settings** are the numbers that decide how text is drawn. How tall each line is. How much space sits between the letters. Which font gets used. The block below lists the four settings that change. Read the left word as the setting, and the right side as what it must become.

```
line-height:     larger (1.7–1.8, not 1.5)
letter-spacing:  0  — never negative, it makes characters collide
font-stack:      different families
word breaking:   different rules (no spaces between words)
```

Now each one in plain words:

- **line-height** is the vertical space each line of text sits in. `1.5` means the line's space is one and a half times the text size. For CJK you use `1.7–1.8` instead, so between 1.7 and 1.8 times the text size. CJK characters are square and dense, and they need more air above and below or the lines look glued together.
- **letter-spacing** is extra space added between letters. A negative value like `-0.5` pulls letters closer. For CJK it must be `0`. Never negative. **Collide** means the characters touch and overlap each other, and the reader cannot tell them apart.
- **font-stack** is your list of fonts, in order. CJK needs different **families**. A family is another way of saying a font name, like `Arial` or `Noto Sans`. Most English fonts hold no Chinese, Japanese or Korean characters at all. Point one of those at Japanese text and the user sees empty boxes instead of words.
- **word breaking** is the rule for where a line of text is allowed to end. The leftover words then move down to the next line. English breaks at spaces. Japanese has no spaces between words, so its break rules are completely different. Use the English rule on Japanese and the line snaps in the wrong place. That can change what the sentence looks like it says.

Your `letterSpacing: -0.5` heading looks broken in Japanese.

**What this means:** Designers often pull the letters of a big heading slightly closer together. In English that looks tight and neat. Apply the same `-0.5` to Japanese and the characters run into each other. The heading stops being readable.

Make letter-spacing part of the locale-aware layer, not a constant.

**What this means:** A **constant** is one fixed value used everywhere, forever. **Locale-aware** means the value can look at the user's language and country, then answer differently. A **layer** is one place in your code that everybody asks, instead of everybody deciding for themselves. Think of the school office. Nobody guesses the timetable. Everybody asks the office, and the office answers.

So you stop saying "letter-spacing is always `-0.5`". Instead you say "letter-spacing is `-0.5` in English, and `0` in Japanese". The app then picks the right one for each user. Leave it as a constant instead, and that number is copied into every heading in the app. On the day you launch in Japanese, you have to hunt down every copy.

Below is the version to avoid. One fixed number for every language on earth.

```
❌  heading.letterSpacing = -0.5
```

Below is the version to use. The value is asked for, and it can answer differently per locale.

```
✅  heading.letterSpacing = typeFor(locale).letterSpacing
```

Read that line as a question and an answer. `typeFor(locale)` is your own small piece of code. You hand it the user's locale, and it hands back the text settings for that language. `.letterSpacing` then takes the letter-spacing out of those settings. English users get `-0.5`. Japanese users get `0`. You wrote the rule once, in one place.

---

## 9.4 Formatting data, not only translating words

Translating the words is only half the job. Dates, numbers, money and units are written differently in different countries. Getting those right is a second, separate job.

This is a separate job from translation, and separately forgotten.

**What this means:** You can translate every word in your app perfectly and still show the date wrongly. A team hires translators and ticks "language done". Nobody checks the dates. An Indian user reads dates day first, so `08/15/2026` reads to them as day 8 of month 15. There is no month 15. The date is nonsense to them, in perfect Hindi.

The table below lists the things that change from country to country, and what they change into.

| Thing | Varies by locale |
|---|---|
| Date | 08/15/2026 vs 15/08/2026 vs 2026-08-15 |
| Time | 3:00 PM vs 15:00 |
| Numbers | 1,234.56 vs 1.234,56 vs 1 234,56 |
| Currency | $10 vs 10 € vs €10 |
| First day of week | Sunday vs Monday |
| Units | km vs miles, °C vs °F |
| Name order | Given-Family vs Family-Given |
| Address shape | Completely different per country |

That table hides some real traps, so here they are one at a time:

- **Date.** `08/15/2026` is month first, the American way. `15/08/2026` is day first, the way you write it in India. `2026-08-15` is year first. The very same digits can mean two different days. Nothing on the screen tells the user which one you meant.
- **Time.** `3:00 PM` is the 12-hour clock. `15:00` is the 24-hour clock. Many countries only ever use the second one. Show `3:00` on its own to those users and they cannot tell if you mean morning or afternoon.
- **Numbers.** Look closely at those three. In one, the dot is the decimal point and the comma groups the thousands. In the next, the two are swapped. In the third, a space does the grouping. So `1.234` means one thousand two hundred and thirty-four in Germany. The same `1.234` means one point two three four in England. India splits the digits up in yet another way. One thousand is `1,000`, the same as England. But a hundred thousand is written `1,00,000` in India, not `100,000`. Get any of this wrong on a price, and the user reads a number a thousand times too big.
- **Currency.** In some countries the money symbol goes before the number, like `$10`. In others it goes after, like `10 €`. Sometimes there is a space between them, sometimes there is not. Put the symbol on the wrong side and the price looks fake, so people stop trusting the payment screen.
- **First day of week.** Your calendar's first column is Sunday in some countries and Monday in others. Show the wrong one and people book the wrong day, because they count across the row out of habit.
- **Units.** Distance is in kilometres in most of the world and miles in a few places. Temperature is °C in most of the world and °F in the United States. Showing `30°` to the wrong person is the difference between a warm day and a freezing one.
- **Name order.** `Given-Family` means the personal name comes first, like "Rahul Sharma". `Family-Given` means the family name comes first, which is normal in Japan and China. If your form says "First name" and "Last name", you have already picked one order for everybody. Then your app greets half the world by the wrong name.
- **Address shape.** Countries do not agree on how many lines an address has. They do not agree on the order of those lines, or on what goes on each one. There is no single address form that works everywhere. Force one shape on everybody and some parcels never arrive.

Use the platform's built-in formatter (`Intl`, `NumberFormat`, `DateTimeFormat`). Never build these by hand.

**What this means:** A **formatter** is ready-made code that already knows all of the above for every country. You hand it a date and the user's locale. It hands you back correctly written text. `Intl`, `NumberFormat` and `DateTimeFormat` are the names of these tools. The **platform** is the phone system your app runs on, such as Android or iPhone. These tools already sit there, on every phone. You do not install or download anything to use them. Building your own instead means keeping the rules of two hundred countries up to date, by yourself, forever.

Below is the version to avoid. You are writing the country's rules yourself, and you will get them wrong.

```
❌  day + "/" + month + "/" + year
❌  "$" + price
```

Below is the version to use. You ask the formatter, and it knows every country's rules.

```
✅  new Intl.DateTimeFormat(locale).format(date)
✅  new Intl.NumberFormat(locale, { style: "currency", currency }).format(price)
```

Read the first line in two halves. Half one is `new Intl.DateTimeFormat(locale)`. The word `new` means "make me one of these". So half one makes a date formatter set up for this user's locale. Half two is `.format(date)`. It asks that formatter to write out this date. Half two hands you back the finished text, ready to show.

The second line is the same idea for money. You also tell it the style is `currency`, and which currency the price is in, such as rupees or euros. Then it puts the money symbol on the correct side of the number. It also puts the commas, dots or spaces in the places that user's country expects.

---

## 9.5 Relative time — put it in the system

Write the "2 minutes ago" code once, in one shared place. Every screen then asks that one copy. The heading says "put it in the system". **The system** here means that one shared place your whole app takes its rules from.

"2 minutes ago" appears in every list in every app, and gets re-implemented four times with four different rules.

**What this means:** **Relative time** is time described against now, like "3h ago", instead of an exact clock time. It shows up on every chat, every comment, every notification. **Re-implemented** means four different people each wrote their own version of it. Now one single moment shows up four different ways. One screen says "2 minutes ago". Another says "2m". A third says "just now". A fourth says "a few minutes ago". Same moment, four answers. It looks careless because it is.

Write **one** formatter with **one** set of thresholds:

**What this means:** A **threshold** is the cut-off point where the wording changes. Below the cut-off you say one thing, above it you say another. The list below is the full set of cut-offs. `<` means "less than". `s` is seconds, `m` is minutes, `h` is hours, `d` is days.

```
< 60s          "just now"
< 60m          "12m ago"
< 24h          "3h ago"
< 7d           "2d ago"
older          "15 Aug"
different year "15 Aug 2025"
```

Read it top to bottom. Under 60 seconds old, you write "just now". Under 60 minutes, you write the minutes, like "12m ago". Under 24 hours, you write the hours. Under 7 days, you write the days. Anything older than that stops being relative and becomes a real date, "15 Aug". And if it happened in a different year, you add the year so nobody is confused.

Also decide: does it live-update? How often? (Usually every 30s while visible, never in the background.)

**What this means:** **Live-update** means the label changes on its own while the user is watching it. "1m ago" quietly becomes "2m ago". You decide this once, for the whole app. The usual answer has two halves. While the screen is in front of the user, update every 30 seconds. While the screen is hidden, never update at all. Updating a hidden screen is work the phone does for nobody. It drains the battery for no gain.

---

## 9.6 Plurals

Never glue a number and a word together yourself. Let the language library pick the right word form.

`"1 items"` is the classic bug. And some languages have 3 to 6 plural forms, not 2.

**What this means:** **Plural forms** are the different word endings a language uses for different counts. English has two: one form for 1 ("item") and one for everything else ("items"). So `"1 items"` happens when someone forgot to check for 1. It makes the app look unfinished, because a human would never write that.

Other languages are harder. Some have a special form for 2, another for a few, another for many. That is where 3 to 6 forms come from. You cannot handle that with an `if`. An **`if`** is the code word for a yes-or-no check. It has room for two answers only. If the check is true, do one thing. If it is not, do the other. Two answers is enough for English. It is not enough for a language with six forms.

Never build strings by joining pieces:

**What this means:** **Joining pieces** means gluing the number, a space, and the word together yourself with `+`. It works in English if you are careful. It cannot work in a language with six forms.

Below, the ❌ line is the version to avoid and the ✅ line is the version to use.

```
❌  count + " " + (count === 1 ? "item" : "items")
✅  t("itemCount", { count })     ← let the library pick the form
```

The bad line reads like this. Take the count. Add a space. Then check whether the count is exactly 1. If it is, add "item". If it is not, add "items". That gives you two forms only, written straight into your own code, in English only. A language with six forms can never be served by it. A translator cannot fix it either. The rule is buried inside your code. It is not in the text file they are given to work on.

The good line reads: ask for the text called `itemCount`, and hand it the count. `t` is the usual short name for the translate step. It is a small named piece of code you can call any time you need a piece of text. The **library** is code someone else wrote that you use in your app. It already holds the correct list of word forms for every language. It picks the right one for you.

---

## 9.7 Fonts and missing characters

If your font does not contain a character, the user sees an empty box instead of a letter. Always give the phone a list of backup fonts to try next.

If a font does not have a character, the user sees an empty box (□).

**What this means:** A font file holds a picture for each character. If you ask it for a Hindi or Japanese character it does not have, there is no picture to draw. The phone draws an empty rectangle instead. People call it "tofu", because that is what it looks like. Your user sees □□□□ where their name should be.

Follow all three rules below:

- Include a fallback chain for every font token
- If you subset a custom font, be sure the subset covers your languages
- System fonts already cover almost everything — one more reason to prefer them

Each one, spelled out:

- A **fallback chain** is a list of backup fonts, in order. If the first font is missing a character, the phone tries the second, then the third. A **font token** is your name for a font choice, like `font.body`. Every one of those names needs the backup list, not only the main one.
- To **subset** a font is to ship a cut-down copy that only holds the characters you think you need. It makes the download much smaller. Here is the danger. Say you cut out the Hindi characters to save space. Six months later you launch in Hindi. Every screen fills with empty boxes. So check the cut-down copy against the languages you actually support, before you ship it.
- **System fonts** are the fonts already on the phone. They cover almost every character of almost every language, because the phone maker needed them to. Using them means no tofu, and no font file to download.

Below is the version to avoid. One font named, and nothing behind it.

```
❌  font.body = "MyCustomFont"
```

Below is the version to use. One font named, with backups behind it, ending in whatever the phone provides.

```
✅  font.body = "MyCustomFont", "Noto Sans", system-ui
```

Read that line left to right. The phone tries `MyCustomFont` first. If a character is missing there, it tries `Noto Sans`, which covers a very large number of languages. `system-ui` at the end means "whatever font this phone normally uses". It always exists, so the list can never run out and leave the user with an empty box.

---

## 9.8 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] No fixed-width text containers — no box holding text is locked to one exact width. Every one of them can grow
- [ ] Tested with 40% longer pseudo-strings — you switched on the fake stretched language. You then walked through every screen and looked
- [ ] Logical properties (`start`/`end`) everywhere, from day one — you write `marginStart`, never `marginLeft`
- [ ] Icon mirroring list decided — you have written down which icons flip in right-to-left languages. You have also written down which ones must never flip
- [ ] Letter-spacing and line-height are locale-aware — these two values can answer differently per language. Chinese, Japanese and Korean get their own numbers, instead of one fixed number for everyone
- [ ] All dates/numbers/currency go through a platform formatter — nobody glues dates or money together by hand
- [ ] One shared relative-time formatter — one piece of code produces "3h ago" for the whole app
- [ ] Plurals handled by the i18n library — you never write your own "is it 1 or more than 1" check. The library holds the word forms for every language
- [ ] Font fallback chain covers target languages — every font has backups behind it. Between them they can draw every character in every language you support
