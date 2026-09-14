# 5. Icons

**In one line:** Use one set of small line drawings for every icon in your app. Never mix emoji into them.

**Why this chapter exists:** Icons are the small pictures on your buttons and tabs. The back arrow, the magnifying glass, the paperclip. If they come from different places, they have different thicknesses and different shapes and different colours. The screen then looks like it was put together by four people who never spoke to each other. One paperclip emoji sitting next to five plain line drawings is enough to make a whole screen look unfinished.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, icons, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gap sizes exist, which icons exist. Like a school uniform rule sheet, but for a screen. |
| **Icon** | A tiny picture that stands for an action or a thing. The magnifying glass means search. The house means home. |
| **Line icon** | An icon drawn with thin outlines only, like a pencil sketch. No fill, no colour inside. The icons in the WhatsApp top bar are line icons. |
| **Icon library / icon set** | A big ready-made collection of icons, all drawn by the same people in the same style. You download it once and use the icons you need. |
| **Chevron** | A plain arrowhead shape with no tail, like `>`. Apps use it for "go into this" and for "open this section". |
| **Radio button** | The small round button in a list where only one choice can be picked at a time. Picking one unpicks the others. |
| **Indent / outdent** | To indent is to push a line of text further in from the side. To outdent is to pull that line back out again. |
| **Stroke** | The thickness of the lines an icon is drawn with. A 2px stroke is a thicker line than a 1.5px stroke. |
| **Grid** | The invisible square box every icon is drawn inside. A 24×24 grid means every icon is drawn in a box 24 wide and 24 tall. |
| **px** | A unit of length on a screen, short for "pixel". Think of it like millimetres, but for screens. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `icon.md = 20`, where `md` is short for medium. After that everyone types `icon.md` instead of typing `20`. Change that one 20 and every medium icon in the app changes with it. |
| **SVG** | A picture stored as instructions instead of dots. Not "colour this dot red" but "draw a line from here to here". Because it is a set of instructions, it stays sharp at any size. You can also tell it to change colour later. |
| **PNG** | A picture saved as coloured dots, the way a photo is. Whatever colour the dots were saved as, that is the colour you get forever. |
| **Inherit** | To take a setting from whoever is using you, instead of choosing it yourself. An icon that inherits its colour is handed a colour, the way you are handed a shirt to wear. |
| **Icon font** | An old way of shipping icons. The icons are packed into a font file, like letters of the alphabet. You type a secret character and an icon appears. |
| **Glyph** | One single shape inside a font. The letter "A" is a glyph. In an icon font, one icon is one glyph. |
| **Build** | The step that packs all your code together into the finished app people download. |
| **Import** | To pull one piece of code into your app so you can use it. You import an icon by its name. |
| **Tree-shaking** | The app build throwing away code you never used. If the icon set has 900 icons and you use 40, tree-shaking packs only those 40 into the app. The other 860 never ship. |
| **Ship** | To include something in the app that people download. "This ships" means users get it on their phone. |
| **Component** | A reusable piece of screen with a name, like `Button` or `Icon`. You write it once and use it in many places. |
| **Prop** | A setting you pass to a component when you use it. In `<Icon size={20} />`, `size` is a prop and `20` is its value. |
| **Theme** | The full set of colours your app uses right now. Apps often have a light theme and a dark theme. |
| **Dark mode** | The version of your app with a dark background and light text, used at night. |
| **currentColor** | A word you write inside an SVG that means "whatever colour the text around me is". The icon then changes colour by itself when the text colour changes. |
| **Operating system** | The software that runs the phone itself: Android, or iOS on an iPhone. Not your app. |
| **Platform** | The kind of machine your app is running on. An Android phone is one platform. An iPhone is another. A laptop web browser is another. |
| **Unicode** | The worldwide list of every text character, including symbols like `✕` and `↻`. These are text, not pictures. |
| **Emoji** | The small full-colour pictures on your phone keyboard. 📎 🎙 🤖. They belong to the operating system, not to you. |
| **Accessibility label** | Hidden text you attach to an icon that describes it in words, such as "Close". Sighted users never see it. |
| **Screen reader** | Software that reads the screen out loud for a blind user. It reads your accessibility label. |
| **Destructive action** | Anything that deletes or loses something: delete, remove, block, leave the group. |
| **RTL** | Short for "right to left". Some languages, like Arabic and Urdu, are written from right to left, so the whole screen flips. |
| **Toolbar** | The strip of icon buttons along the top of a screen. |
| **Tab bar** | The strip of icons along the bottom of a phone app for switching between main screens. |
| **Empty state** | What a screen shows when there is nothing to show yet. "No messages yet." |
| **Cap height** | The height of a capital letter, from its bottom to its top. Shorter than the full height of a line of text. |
| **SVG sprite** | One file holding many SVG icons together, downloaded once, so the browser does not fetch 40 separate files. |
| **Request** | One trip out to the internet to fetch one file. Every trip costs time, so fewer trips means a faster app. |
| **Open source** | Free to use, with the code and drawings public. |

---

The whole rule in one line:

> **One family. One grid. One stroke weight.**

**What this means:** "One family" means all your icons come from one set, drawn by one team. "One grid" means every icon is drawn inside the same size box. "One stroke weight" means every line in every icon is the same thickness. Think of a school uniform. Same shirt, same colour, same length, for everyone.

---

## 5.1 Never mix emoji with line icons

This is the most visible mistake in this guide, and one of the most common.

Emoji are **full-colour pictures owned by the operating system**.

**What this means:** You did not draw the emoji, and you cannot change them. The phone owns them. Android draws them one way. An iPhone draws them another way. Next year's phone update may draw them a third way. You get whatever the phone gives you.

Here is why that hurts. Each row is one problem and what the user ends up seeing.

| Problem | Result |
|---|---|
| They ignore your theme colour | Stay bright orange in a grey toolbar |
| They ignore dark mode | Glow on a dark background |
| They ignore your stroke weight | Look heavier than everything nearby |
| They look different on iOS vs Android vs OS versions | You cannot design around them |

Here is that table one row at a time.

Your **theme** is the set of colours your app is using right now. If your toolbar is grey, your icons should be grey. An emoji keeps its own bright colour instead. You cannot repaint it.

**Dark mode** is the night-time version of your app, with a dark background. A full-colour emoji shines out of that dark background like a torch in a dark room.

Your **stroke weight** is the line thickness of your own icons. An emoji is solid and filled in. Next to thin outlines it looks fat and heavy.

Android phones, iPhones and each new phone update all draw emoji differently. So you cannot even plan around the problem. You never know what the user will end up seeing.

One emoji in a row of line icons makes the **whole screen** look
unfinished. Users feel it even if they cannot name why.

**What this means:** Nobody will say "that emoji is the problem". They will say the app looks cheap. Picture a class photo where everyone wears the school uniform and one student wears a bright red party shirt. Your eye goes straight to the shirt and the whole photo looks wrong.

Below is the version to avoid. The first three are flat one-colour symbols. The last three are full-colour emoji. The row is split down the middle, and the eye can see the join straight away.

```
Bad:   ✓  →  ▾   📎  🎙  🤖      ← two different worlds
```

Below is the version to use. Six icons, all named, all pulled from the same icon set.

```
Good:  check  arrow-right  chevron-down  paperclip  mic  bot
       (all from one icon set)
```

Same rule for random Unicode symbols typed as text (`❯ ✕ ⌕ ↻ ▸`).
They come from the text font, so they change weight, alignment, and
shape depending on the font and platform.

**What this means:** Those symbols are letters, not pictures. **Unicode** is the worldwide list of text characters. Symbols like `✕` sit in that list right next to A, B and C. Because they are letters, they get drawn by the text font. Change the font and the symbol changes thickness. Change the phone and it sits slightly higher or lower than you expected. You cannot control them, so do not use them as icons.

Two words from that rule. "Alignment" means how high or low the symbol sits inside the line of text. A symbol that rides too high looks like it is floating off the button. "Platform" means the kind of machine the app is running on: an Android phone, an iPhone, a laptop. The same symbol is drawn a little differently on each one.

---

## 5.2 Pick one library

An **icon library** is a ready-made collection of icons. It is also called an icon set. Every icon in it was drawn by one team in one style. You download the whole set once, then use the icons you need. Three good ones are listed here.

| Library | Style | Notes |
|---|---|---|
| **Lucide** | Outline, 24px grid, 2px stroke | Huge set, neutral, open source. Safe default. |
| **Phosphor** | 6 weights (thin → fill) | More personality, good if you need filled + outline pairs |
| **Heroicons** | Outline + solid | Smaller set, pairs well with Tailwind-style UI |

Here is that table in plain words.

**Lucide.** These icons are outlines only. Every icon is drawn in a box 24 by 24, and every line is 2px thick. The set is very large. It looks plain, in a good way, so it does not fight with the rest of your screen. It is free for anyone to use. "Safe default" means this: if you cannot decide, pick this one.

**Phosphor.** This gives you the same icon in 6 different line thicknesses. They run from very thin up to completely filled in. That is useful when a tab needs two looks. The hollow version shows a tab you are not on. The filled version of the same icon shows the tab you are on.

**Heroicons.** This set has fewer icons than the other two. Each icon comes in two versions, hollow and solid. It suits apps built with Tailwind, which is a popular way of styling screens.

Pick one. Never mix two.

**What goes wrong if you mix two:** the two sets were drawn by two different teams. One team drew thicker lines. One team drew rounder corners. Sat side by side on the same screen, the icons stop looking like a set. The screen looks like two apps glued together.

If an icon is missing, **draw it in the same style** — do not import a
second library for one icon.

**What this means:** One day you will need an icon your library does not have. The tempting fix is to download a second library for that one icon. Do not. That second icon will have a different line thickness and a different feel. Your app now has two handwritings on one screen, and people can see it even if they cannot name it. Draw the missing icon yourself instead, in the same box size and the same line thickness as the rest. Section 5.3 tells you how.

### Outline-only sets and the "active" look

Decide one more thing *before* you pick: how will you show that something is switched on?

**What this means:** Look back at the Phosphor row in the table. Sets with filled versions show "active" the easy way — the hollow icon means off, the filled twin means on. An outline-only set like Lucide has no filled twins. If you pick one anyway, and you will often be right to, you need a different plan for "on", written down once:

- Give the active icon a **background** — a small filled shape sitting behind it, in a quiet surface colour or a pale wash of your accent.
- Turn the active icon your **accent colour** while inactive ones stay in the text colour.
- Add a small **marker** — an underline or a dot next to the active item.

Any one of these works, and they combine well. What does not work is drawing your own filled twins for two or three icons: your hand-filled icons will sit next to the library's outlines like two handwritings on one page, which is the same disease as mixing libraries.

**What goes wrong if you skip this decision:** every toggle in the app invents its own "on" look. One goes bold, one changes colour, one grows a dot. The user has to relearn what "on" looks like on every screen.

---

## 5.3 If you draw your own

Three decisions define your icon style. Make them once:

1. **Grid** — 24×24 (standard). All icons drawn in the same box.
2. **Stroke** — 1.5px or 2px. The same on every icon.
3. **Line ends** — round caps or flat caps. Pick one.

Here are those three, one at a time.

**Grid.** The grid is the invisible square you draw inside. 24×24 means that square is 24 wide and 24 tall. Every single icon uses that same square, so they all come out the same size. Say one icon is drawn in a bigger square. It will look bigger than its neighbours, even though the code asks for the same size.

**Stroke.** The stroke is how thick your lines are. Pick 1.5px or pick 2px, then never change it. If one icon is drawn with thicker lines, it looks darker and heavier than the icons beside it. That one icon then pulls the eye for no reason.

**Line ends.** This is what the tip of a line looks like where it stops. A **cap** is the name for that tip. It is either cut off flat, like the end of a ruler. That is a flat cap. Or it is rounded off, like the end of a matchstick. That is a round cap. Both look fine on their own. Using both in the same app looks careless, in the way that mixed handwriting on one page looks careless.

Also: keep a 1–2px safe margin inside the box so icons do not touch
the edge, and align to whole pixels so lines stay sharp.

**What this means:** Leave 1px or 2px of empty space all around the inside of the 24×24 box. It is the same margin you leave in your notebook before you start writing. Nothing in the drawing should touch the outer edge. An icon that touches the edge looks bigger and more crowded than the icons sitting next to it.

"Align to whole pixels" means put your lines at 4, or at 5, but never at 4.5. A screen is made of tiny dots. A line sitting on half a dot gets smeared across two rows of them. That icon then looks blurry while the others look sharp.

---

## 5.4 Icons must inherit colour and size

**"Inherit" means:** the icon takes its colour and its size from whatever puts it on the screen. It does not pick either one for itself. Both are handed to it, the way you are handed a shirt to wear rather than choosing it yourself.

Never bake a colour into an icon file.

**What this means:** "Bake in" means fixing the colour permanently inside the picture file, so nothing can change it later. A green tick saved as a green picture is green forever. It is green in dark mode. It is green on your red error screen. Instead, the icon should be drawn with no colour of its own, and take its colour from whoever uses it.

**What goes wrong if you bake the colour in:** a green tick on a red error screen reads as a mistake. People decide the app is broken. It gets worse later. The day you change your green to a different green, every baked-in tick keeps the old one. Someone then has to open and re-save every one of those picture files by hand.

The two blocks below are code. You do not have to write code to follow them. Read them as two different ways of asking for a tick icon.

Below is the version to avoid. The colour is locked inside the picture file, so nothing outside can change it. `greenCheckPng` is the name of that file. A **PNG** is a picture saved as coloured dots, the way a photo is. Those dots were saved green, so green is all you will ever get out of it.

```jsx
// Bad — cannot theme, cannot reuse
<Image source={greenCheckPng} />
```

Below is the version to use. The size and the colour are handed in from outside, as props.

```jsx
// Good
<Icon name="check" size={20} color={theme.colors.success} />
```

Here is that good line, piece by piece. `Icon` is the **component**, the reusable piece of screen you built once. `name`, `size` and `color` are **props**, the settings you hand in each time you use it. `theme.colors.success` is the name of your "this worked" colour. If you ever change that one colour, every success tick in the whole app changes with it.

Use `currentColor` in the SVG so it follows text colour by default.

**What this means:** An **SVG** is a picture stored as drawing instructions rather than as coloured dots. Inside it you can write the word `currentColor` where a colour would normally go. That word means "use whatever colour the text around me is". So an icon sitting next to grey text turns grey by itself. When that text turns white in dark mode, the icon turns white too. You write nothing extra to make that happen.

### Size tokens

Pick a short list of allowed icon sizes and use only those. Three or four sizes is enough. If every icon ends up a slightly different size, nothing lines up down the screen. The app then looks shaky. Picture a row of fence posts where one post is slightly shorter. Your eye finds it at once. Each line below is a name, then its size in px, then where you use it.

```
sm   16    Inline with small text
md   20    Default — inline with body text
lg   24    Toolbars, tab bars
xl   32    Empty states
```

Here are those four again in plain words.

**sm 16** is for an icon sitting inside a line of small text.

**md 20** is your normal choice. Use it for an icon next to ordinary body text. Most icons in your app will be this size.

**lg 24** is for the strip of buttons along the top of a screen. It is also for the row of tabs along the bottom.

**xl 32** is for one big lonely icon on a screen that has nothing on it yet. Think of a screen that says "No messages yet".

**Optical alignment:** an icon next to text should be about the same
height as the text's cap height, not its full line height. A 20px icon
next to 15px text usually looks correct; a 24px icon looks too big.

**What this means:** "Optical alignment" means lining things up so they look right to the eye, instead of lining up the numbers. **Cap height** is the height of a capital letter, for example the height of the letter H. **Line height** is the taller space the whole line of text sits in. It includes the room left above and below for letters like h and g. Match the icon to the capital letter, not to the whole line. That is why a 20px icon looks right beside 15px text. The two numbers do not match, but what your eye sees does match. Matching the numbers exactly gives you an icon that looks oversized and sits too heavy in the line.

---

## 5.5 One icon = one meaning

Build a small dictionary and stick to it.

**What this means:** Write down what each icon means in your app, once, in a shared list. Then never use that icon for anything else. It is a dictionary, so one word gets one meaning.

Each row below is one icon, what it is allowed to mean, and what it must never mean.

| Icon | Means | Never means |
|---|---|---|
| check | Completed / success | Selected (use a filled radio or highlight) |
| x | Close / dismiss | Delete (use trash) |
| chevron-right | Navigate deeper | Expand (use chevron-down) |
| chevron-down | Expand / collapse | Sort |

Some words in that table. A **check** is the tick shape, ✓. This guide calls it a check, a tick and a checkmark, and all three mean that same shape. A **chevron** is a plain arrowhead shape with no tail, like `>`. A **radio** is the small round button in a list where only one option can be picked at a time. "Navigate deeper" means going into a new screen. "Expand / collapse" means opening or closing a section on the screen you are already on. "Sort" means reordering a list, which needs its own icon, not the chevron.

The moment a checkmark means "done" in one screen and "selected" in
another, users stop trusting your icons and read every label instead.

**What this means:** Icons work because people learn them once and then stop reading. If your tick changes meaning between screens, that learning is broken. The user now has to read the text next to every icon. That is slower than having no icons at all, so your icons have made the app worse.

---

## 5.6 Icons need labels

An icon alone is ambiguous to almost everyone.

**What this means:** "Ambiguous" means it can be read in more than one way. Show ten people a heart icon with no words. Some will say "like", some will say "save", some will say "favourite". A picture on its own does not say which.

- Icon + text label wherever there is room
- Icon-only allowed for universally known ones (close, back, search)
- **Always** add an accessibility label, even for icon + text
- Never use an icon alone for a destructive action

Those four rules one at a time.

**Icon + text label wherever there is room.** Put the word next to the picture. Instagram's bottom bar is icon-only, but its menus spell the actions out in words. If the space allows a word, use a word. Without the word, people guess. Some of them guess wrong and tap the wrong thing.

**Icon-only allowed for universally known ones.** A few icons have been the same for twenty years, so almost everybody has already learned them. The X means close. The back arrow means go back. The magnifying glass means search. Those few can stand alone with no word. Almost nothing else can.

**Always add an accessibility label.** An **accessibility label** is hidden text you attach to the icon, such as "Close". A **screen reader** is the software that reads the screen aloud for a blind user. It reads that hidden text out. Without it, the user hears "button" and nothing more. They cannot tell what the button does. Add the label even when a visible word is already on the screen. The screen reader may not know that the picture and the word belong together.

**Never use an icon alone for a destructive action.** A **destructive action** is one that loses something: delete, remove, block, leave the group. A lone trash-can icon with no word is how people delete things by accident. Write the word "Delete" next to it, so nobody loses anything by mistake.

---

## 5.7 Right-to-left (RTL): which icons mirror

**RTL** means "right to left". Arabic, Hebrew, Urdu and Farsi are read from right to left, so the whole screen flips like a mirror image. Some icons must flip with it. Some must not.

If you will ever support Arabic, Hebrew, Urdu, or Farsi:

The left column flips. The right column stays exactly as it is.

| Mirror ✅ | Do NOT mirror ❌ |
|---|---|
| arrows (← →) | play / pause |
| chevrons | checkmark |
| back / forward | clock (time still runs clockwise) |
| undo / redo | phone, camera, mic |
| indent / outdent | search (magnifier — usually left alone) |
| list bullets, progress bars | volume, brightness |

The rule behind the table is direction. An icon that points somewhere on the screen has to flip, because "forward" is now the other way.

Here is the left column, item by item. Arrows and chevrons point. Back and forward buttons point. Undo and redo point. Indent and outdent push a line of text sideways, so they point too. The bullet at the start of a list sits on the side the reading starts from. The bar that fills up while something loads fills from that same side. All of them follow the reading direction, so all of them turn around.

If you forget to flip them, an Arabic reader sees a back arrow pointing forwards. They tap it, and they land somewhere they did not want to go.

An icon that shows a real object does not flip, because the real object did not change. A clock still runs clockwise in Cairo. A camera is still a camera. A phone handset and a microphone are still shaped the way they are shaped. The volume icon and the brightness icon are pictures of things too, so they stay put as well. The play triangle is a fixed symbol that people have learned as one shape, so it stays. The tick stays. The magnifying glass could flip, but almost everyone leaves it alone, so leave it alone.

If you flip these by mistake, the app looks broken rather than translated. A backwards clock reads as a bug, and people stop trusting the rest of the screen.

Half of "RTL support" is nothing more than knowing which is which.

**What this means:** Making your app work in Arabic sounds like a huge job. But a large part of it is only one decision, taken icon by icon. Does this icon turn around, or not? Make the list once and most of the work is done. There is more on right-to-left languages in [the internationalization chapter](../02-must-have/03-internationalization.md). "Internationalization" is the long word for getting your app ready to work in other languages.

---

## 5.8 Delivery: do not use an icon font

"Delivery" here means how the icons actually get into your app. There are three ways, and one of them is bad.

| Method | Verdict |
|---|---|
| Icon **font** | ❌ Ships all 900 glyphs to draw 40. No tree-shaking. Breaks with custom font settings. |
| One component per icon | ✅ Tree-shakes. Only used icons ship. |
| SVG sprite | ✅ Good on web. One request. |

Here is each row slowly.

**Icon font.** An icon font packs every icon into a font file, like letters of the alphabet. One icon is one **glyph**, which means one shape inside a font. The problem is that a font file arrives as one lump. You cannot pull 40 letters out of the alphabet and leave the other letters behind. So all 900 icons get downloaded onto the user's phone, only to draw the 40 you actually use. The app is bigger and slower for no reason at all.

There is no **tree-shaking** here. Tree-shaking is the build step throwing away every piece of code you never used. Picture shaking a tree so that only the loose leaves fall down. A font file cannot be shaken like that.

Icon fonts break in one more way. Some users switch on their phone's own font settings, because that makes text easier for them to read. The phone then swaps your font for one it thinks is easier to read. Your icons turn into random letters, and the buttons become unusable.

**One component per icon.** Each icon is its own small piece of code. You **import** it by name, which means you pull that one piece into your app. You import 40 icons, so 40 icons get packed into the app. The other 860 are dropped. This is the option to use.

**SVG sprite.** A **sprite** is one file holding many SVG icons together. The browser downloads that single file once, instead of fetching 40 separate files. "One request" in the table means one trip out to the internet to fetch one file. Forty separate icon files would be forty trips, and every trip costs time. Fewer trips means a faster page. This works well on the web.

---

## 5.9 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] Exactly one icon library — every icon comes from the same set
- [ ] Zero emoji in the UI
- [ ] Zero Unicode symbols used as icons — no `✕ ↻ ▸` typed as text
- [ ] Icons take colour and size from props — passed in from outside, not fixed inside the file
- [ ] 3–4 size tokens — only three or four allowed icon sizes exist
- [ ] One icon = one meaning (write the list down)
- [ ] Accessibility label on every icon — hidden words a screen reader can read out
- [ ] RTL mirroring list decided — you know which icons flip for Arabic and which do not
- [ ] Delivery method tree-shakes — only the icons you use get packed into the app
