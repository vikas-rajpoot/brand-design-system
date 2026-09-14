# 20. The Checklist

**In one line:** This is the honest list. It says what must be finished before your app goes out. It says what can follow in the next few months. And it says what you should not build yet at all.

**Why this chapter exists:** This guide is long. If you treat every line in it as required, you will never finish. The app will then never reach anyone. So this chapter cuts the whole guide into three piles: red, yellow and green. Red blocks your release. Yellow is fine slightly late. Green will waste your time if you build it now.

**How to read this file:** every item below is one line with a tick box. After the tick box comes a dash, then a plain explanation. You do not need to have read the other chapters. Each line is written so it makes sense on its own. Where a chapter explains an item in full, there is a link to it.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gap sizes exist, which text sizes exist. Like a school uniform rule sheet, but for a screen. |
| **Ship** | To release the app to real people. "You will never ship" means the app never leaves your computer. |
| **Production release** | The version real users install, as opposed to the version you test on your own phone. |
| **Platform** | One of the places your app runs: Android phones, iPhones, or the web. Each one is a separate platform. |
| **Simulator** | A pretend phone running in a window on your computer. Useful, but it runs at your computer's speed, not a real phone's. |
| **OS** | Short for "operating system". The software that runs the whole phone, such as Android or iOS. Your app is a guest inside it. |
| **Dialog** | A small window that pops up over the screen and waits for an answer. The phone's own permission popup is a dialog. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `spacing.md = 12`. After that everyone types `spacing.md` instead of typing `12`. Change it in one place and it changes everywhere. |
| **Role** | A name that says what a value is *for*, not what it looks like. `text.primary` is a role. `dark-grey` is not. |
| **Theme** | One complete set of colours for the whole app. Most apps have two themes: light and dark. |
| **Dark mode** | The theme with a dark background and light text, used at night. |
| **Scale** | The full set of allowed values, in order. Your spacing scale is your list of allowed gap sizes. |
| **pt** | A unit of length on a screen, short for "point". Think of it like millimetres, but for phone screens. `44pt` means 44 units. |
| **Radius** | How rounded a corner is. Radius 0 is a sharp corner like a sheet of paper. Radius 12 is a soft corner like a WhatsApp message bubble. |
| **Padding** | The empty space **inside** a box, between the edge of the box and the stuff in it. |
| **Contrast ratio** | A number saying how different two colours are in brightness. Black on white is about 21:1. Light grey on white is about 1.5:1 and is hard to read. Higher is easier to read. |
| **Component** | A piece of screen you build once and use everywhere, like a button or a card. Build it once, use it fifty times. |
| **API** | Short for "application programming interface". Here it means the list of settings a component accepts when you use it. |
| **Elevation** | How high something looks like it is floating above the page. Usually shown with a shadow. |
| **Easing** | How an animation speeds up and slows down, instead of moving at one flat speed. |
| **z-index** | A number that says which thing is drawn on top when two things overlap. Bigger number wins. |
| **Layer** | One named level in the stack of things on screen. The page is the bottom layer, a popup sits on a higher one. |
| **Toast** | A small message that appears on top of the screen and disappears by itself after a few seconds. "Copied" is a toast. |
| **Empty state** | What a screen shows when there is nothing to show. "No messages yet." |
| **Accessibility** | Building the app so it still works for people who cannot see well, cannot hear, or cannot use their hands easily. |
| **Screen reader** | Software that reads the screen out loud for people who cannot see it. |
| **Touch target** | The area your finger can hit for a control to work. It can be bigger than the picture you see. |
| **Lint rule** | A machine check that reads your code and refuses it if it breaks a rule. Like spellcheck, but for design rules. |
| **CI** | Short for "continuous integration". A machine that runs your checks automatically every time anyone changes the code. |
| **Regression** | Something that used to work correctly quietly breaking again later. A "regression test" is a check that catches that. |
| **Main** | The one copy of the code that everyone shares and that the real app is built from. |
| **Code review** | Another person reading your change before it goes in. A human check, not a machine one. |
| **Drift** | What happens when an app slowly slides away from its own rules, one small exception at a time, until the rules no longer describe it. |
| **Reference surface** | One page or screen inside your app that shows every colour, size and component in one place, so you can see them all together. |
| **Haptics** | The tiny vibrations a phone makes when you tap something. |
| **Badge** | The little number that sits on your app's icon on the home screen, usually counting unread things. |
| **Formatter** | A small piece of code that turns raw data into readable text, like turning a date into "2 hours ago". |
| **Deep link** | A link that opens one exact screen inside your app instead of the home screen. |
| **Shell screens** | The screens that belong to the app as a whole rather than to any one feature, such as the screen you see while the app starts up. |
| **Cold start** | The app opening from nothing, when it was not already running in the background. |
| **Force upgrade** | A screen that blocks the app until the user installs a newer version. |
| **State restoration** | Putting the user back where they were after the phone shut your app down in the background. |
| **Permission** | Your app asking the phone for the right to use something private, like the camera or the location. |
| **Palette** | The full set of colours you allow yourself to use. |
| **RTL** | Short for "right to left". Languages such as Arabic, Urdu and Hebrew are read from right to left, so the whole screen has to flip. |
| **Logical properties** | Ways of saying "the side where reading starts" instead of "the left side". You write `start` and `end` instead of `left` and `right`. |
| **Versioning** | Giving each release of your rules a number, so other people can say which one they are using. |
| **Deprecation** | Marking something as "old, do not use in new work", instead of deleting it straight away. |
| **RFC** | Short for "request for comments". A written proposal that a group reviews before anyone builds the thing. |
| **Figma** | A popular drawing tool designers use to draw app screens before they are built. |

---

## 20.1 🔴 BLOCKING — must exist before your first public release

Do not release without these. Every item here either breaks the app for some users, or leaves a mess behind you. That mess costs roughly ten times more to fix later than it costs to do now.

### Tokens

A **token** is a name for a value, like `x = 5` in maths. These are the named values your whole app is built from.

- [ ] **Colour roles, light + dark, two layers only** — every colour has a job name, like `text.primary`. Both the light theme and the dark theme are written down. "Two layers" means there are exactly two levels of naming. First the raw colours. Then the job names that point at them. Nothing sits in between. Add a third level and nobody can work out where a colour really comes from, so changing one safely becomes guesswork. See [the colour chapter](../01-foundations/02-color.md).
- [ ] **Spacing scale (4pt, non-linear)** — your list of allowed gap sizes. Every gap is a multiple of 4. So 4, 8, 12 and 16 are allowed. 13 and 17 are not. "Non-linear" means the steps get bigger as the numbers get bigger. The list runs 4, 8, 12, 16, then jumps to 24, then 32, then 48. Without a fixed list, every screen invents its own gaps, and two screens never quite line up. See [the space chapter](../01-foundations/03-space-and-radius.md).
- [ ] **Radius scale + nested radius rule** — a short list of allowed corner roundness values. There is also one rule for a box sitting inside another box: inner radius = outer radius − padding. **Padding** is the empty space inside the outer box's edge. Break the rule and the two curves stop following each other. The corner then looks slightly wrong, even though nobody can say why.
- [ ] **Type roles bundling size + line height + weight + tracking** — each text style has one name that carries four numbers at once. The four are:
  - **size** — how big the text is
  - **line height** — how much gap sits between one line and the next
  - **weight** — how thick the letters are
  - **tracking** — how much space sits between one letter and the next

  You pick the name. You never pick the four numbers yourself. If people pick numbers by hand, you end up with nine headings that are all slightly different sizes. See [the typography chapter](../01-foundations/04-typography.md).
- [ ] **One icon family, zero emoji, zero Unicode symbols as icons** — icons are the small pictures on buttons and tabs. They all come from one set, so they share one thickness and one style. No emoji used as an icon. No typed symbols like ✓ or ★ standing in for one either. Mix two icon sets and the screen looks thrown together. Use an emoji and every phone draws it differently, so your screen is not the screen other people see. See [the icons chapter](../01-foundations/05-icons.md).
- [ ] **State tokens: hover, pressed, disabled, selected, focus** — decide once what any control looks like in these moments. When a mouse pointer rests on it (hover exists wherever there is a pointer, so on desktop it is not optional). While a finger or button is pressing it. When it is switched off. When it is the chosen one. And when a keyboard has highlighted it. Decide this in one place. If each screen decides for itself, a button that looks switched off on one screen looks tappable on the next. People then tap dead controls and think the app has frozen. See [the states chapter](../01-foundations/06-states-elevation-motion.md).
- [ ] **Elevation levels** — a short list of named heights for how far something floats above the page. Each level has its own shadow. A card is low, a popup is high. Without the list, people invent shadows screen by screen. Two things meant to sit at the same height then end up looking different.
- [ ] **Motion durations + easings** — a short list of allowed animation lengths, plus a short list of allowed speed curves. **Easing** is how a movement speeds up at the start and slows down at the end. It does not run at one flat speed. If every animation picks its own timing, the fast parts feel twitchy and the slow parts feel broken.

### Accessibility

**Accessibility** means the app works for people who cannot see well, cannot hear, or cannot use their hands easily. Full details are in [the accessibility chapter](../02-must-have/01-accessibility.md).

- [ ] **Font-scaling behaviour + max multiplier per type role** — every phone has a setting that makes text bigger in every app. For each of your text styles, write down two things. Does it grow with that setting? And how large is it allowed to grow? A max multiplier of 2.0 means it can reach twice its normal size and no further. Skip this and a user with big text turned on gets words running off the edge of the screen.
- [ ] **No fixed-height text containers** — no box that holds text has a locked height. The box grows to fit the words. If the height is locked, larger text gets cut off at the bottom, and the user never sees the missing half.
- [ ] **Contrast verified in both themes (4.5:1 text, 3:1 non-text)** — a **contrast ratio** is how different two colours are in brightness. Normal text must reach at least 4.5:1 against what is behind it. Things that are not text, like icons, borders and chart lines, must reach at least 3:1. Check this in the light theme, then check it again in the dark theme. A pair of colours that passes in one theme can fail in the other. Below those numbers, anyone with weaker eyesight, and anyone standing in sunlight, cannot read your screen at all.
- [ ] **No meaning carried by colour alone** — never say something *only* with colour. Roughly one man in twelve cannot tell red from green. A red border alone does not say "error". A red border with the word "Error" does.
- [ ] **Role + label + state on every interactive element** — anything a user can tap must tell a **screen reader** three things. What kind of control it is ("button"). What it is called ("Send"). And what is happening to it right now ("selected", "loading"). A screen reader is software that reads the screen aloud for people who cannot see it. Miss any of the three and a blind user hears "button" with no name. They then have no way to guess what tapping it will do.
- [ ] **44pt minimum touch targets** — the area a finger can hit must be at least 44pt by 44pt. `pt` is a screen length unit, a bit like millimetres. The picture on screen is allowed to be smaller than that. The area that responds to a finger is not. Go under 44pt and people miss, hit the control next door, and have to undo it. One exception exists: a desktop app driven only by a mouse pointer may use a smaller floor, written down as a deliberate decision — and the floor returns to 44 the moment a touch screen is involved. The exact numbers live in [the states chapter](../01-foundations/06-states-elevation-motion.md).
- [ ] **Reduce motion handled** — phones have a setting for people who feel sick or dizzy from moving screens. When it is on, your app drops the sliding and zooming and fades instead. Ignore the setting and those users feel unwell every time they open your app.

### Structure

This is about how the app is built, not how it looks.

- [ ] **Layering scale, no raw z-index** — **z-index** is the number that decides which thing is drawn on top when two things overlap. Keep a short named list of layers. Nobody is allowed to type a raw number like `z-index: 9999` inside a component. Once one person does, the next person types 99999 to get above them. After that nobody can predict what covers what. If your app runs as more than one OS window, the list applies inside each window, and window order is a window setting asked of the OS — never faked with a big z-index. See [the layering chapter](../02-must-have/04-layering.md).
- [ ] **Component API contract written (one page)** — a **component** is a piece of screen you build once and use everywhere, like a button. Its **API** is the list of settings it accepts. One page says which setting names everyone uses. Without that page, a button and a badge end up using two different words for the same idea. Every component then has to be learned from scratch. See [the component API chapter](../02-must-have/05-component-api.md).
- [ ] **Lint rule blocking raw values** — a **lint rule** is a machine check that reads your code. It refuses the code when someone types a raw colour or a raw number instead of a token name. It is like spellcheck, but for design rules. Without it your rules are only a document, and the app slowly slides away from them. See [the enforcement chapter](../02-must-have/06-enforcement.md).
- [ ] **Reference surface showing every token and component** — one screen inside your app. It shows every colour, every text style, every gap size and every component together in one place. Without it, nobody can see what already exists, so they build a second version of something you already have.

### Behaviour

This is what the app does when things go wrong, or when there is nothing to show.

- [ ] **Content states: empty (×3), loading, error (4 levels), offline** — one screen is really several screens. You need three different empty screens: nothing here yet, your search found nothing, and you cleared the list yourself. You need a loading screen. You need four sizes of error message. They are: under one input box, inside one section, filling the whole screen, and a **toast** that fades away by itself. And you need a no-internet screen. Design all of them. If you do not, the user meets a blank white screen and decides the app is broken. See [the content states chapter](../02-must-have/02-content-states.md).
- [ ] **Every error says what / why / what next** — every error message names what failed. It says why it failed. And it tells the user what to do about it. "Something went wrong" fails all three, and leaves the user stuck with nothing to try.
- [ ] **Destructive-action pattern (undo preferred)** — a destructive action is one that destroys something, like deleting a message. Agree on one way of handling these across the whole app. The preferred way is to do the thing straight away and offer an Undo button for a few seconds. That beats asking "Are you sure?" every time, because people stop reading those questions and tap Yes out of habit. Without one agreed way, some screens warn and some do not. Sooner or later somebody loses work they cannot get back. See [the actions and undo chapter](../02-must-have/07-actions-and-undo.md).
- [ ] **Shell screens: cold start, force upgrade, session expired** — three screens that belong to no single feature, so nobody is put in charge of them. **Cold start** is the app opening from nothing. **Force upgrade** is the screen that blocks the app until the user installs a newer version. **Session expired** is when the app has to ask the user to log in again. Leave these unowned and they get built in a panic on the last day. They are also the first thing a new user sees. See [the shell and lifecycle chapter](../03-production/01-shell-and-lifecycle.md).
- [ ] **Whatever your app stores and your markets legally require** — the law is not the same everywhere. What it demands of you depends on two things: what personal data you keep, and which countries you release in. Find out what applies to you and build it. This is the one item that can stop your app being published at all. See [the legal and platform chapter](../03-production/02-legal-and-platform.md).
- [ ] **In-app account deletion (if you have accounts)** — if users can create an account inside your app, they must be able to delete it there too. Not by sending you an email and waiting. If you have no accounts, skip this line. The app stores check for this, and they will refuse your app without it.
- [ ] **Permission priming before every OS permission dialog** — a **permission** is your app asking the phone for something private, like the camera. The phone shows its own popup, which you cannot design or change. **Priming** means putting your own short screen in front of it, explaining why you are asking. You get one chance at that phone popup. If the user says no, most phones never ask again, and that part of your app is dead for them.

---

## 20.2 🟡 SOON — the first few months, no pain if slightly late

These matter. They will not break your release if they land a few weeks after it.

- [ ] **Visual regression tests** — a machine takes a picture of each screen and saves it. On every later change it compares the new picture against the saved one. If a gap or a colour moves and nobody meant it to, the machine says so. A **regression** is something that used to be right quietly breaking again.
- [ ] **Automated contrast check in CI** — **CI** is a machine that runs your checks automatically every time anyone changes the code. Here it checks that your colour pairs still reach 4.5:1 for text and 3:1 for everything else. Nobody has to remember to check by hand, and nobody has to feel awkward pointing it out. Note what is allowed to be late here: only the CI wiring. The check itself is a small script, the [build order](01-build-order.md) puts it before any component exists, and it can run as a plain script in your repo long before you have CI at all — see [the enforcement chapter](../02-must-have/06-enforcement.md).
- [ ] **Full reference surface at max font scale + smallest device** — open that one page that shows every token and component. Push the phone's text size to its largest, and use the smallest screen you support. This is the fastest way to find text that gets cut off.
- [ ] **Terminology glossary** — "terminology" means the words you use for things. Agree on one word for each thing in your app and write the list down. Not "Session" on one screen and "Chat" on the next. Two words for one thing makes users believe there are two different things. See [the words chapter](../03-production/03-voice-and-content.md).
- [ ] **Capitalisation rule** — decide once whether a button says "Delete project" or "Delete Project". Write the decision down and follow it everywhere. Mixed capitals across screens look careless, and a careless app is harder to trust with your data.
- [ ] **Haptic vocabulary** — **haptics** are the tiny vibrations the phone makes when you tap. "Vocabulary" here means the agreed set: which actions get a buzz, and which buzz each one gets. Decide it once. Otherwise a success and a failure feel identical in the hand, and the buzz tells the user nothing.
- [ ] **Shared relative-time formatter** — one piece of code that turns a date into "2 hours ago", used by every screen. If each screen writes its own, they stop matching. One says "2h ago", another says "2 hours ago", and a third gets the maths wrong.
- [ ] **Notification styling, grouping, badge rules** — three decisions. How your notifications look. How several of them bundle into one instead of arriving as twenty separate lines. And what the **badge**, the little number on your app icon, actually counts. Get that number wrong and people turn your notifications off for good.
- [ ] **Performance budget, measured** — a written speed limit with real numbers, such as how long the app may take to open. "Measured" is the important word: a budget nobody checks is a wish. See [the speed chapter](../03-production/04-performance-and-assets.md).
- [ ] **Tested on a real low-end device** — a cheap, slow, older phone held in your hand. Not your new phone. And not a **simulator**, which is a pretend phone running in a window on your fast computer. Many of your users are on that cheap phone. An app that feels smooth to you can be too slow to use on it.
- [ ] **State restoration after the OS kills the app** — the **OS** is the software that runs the phone, such as Android or iOS. When your app sits in the background, the OS may shut it down to free up memory. When the user comes back, put them where they were. Otherwise they land back at the home screen with everything they had typed gone.
- [ ] **Deep link edge cases** — a **deep link** opens one exact screen inside your app, such as a shared post. The awkward cases are the ones to handle. The user is not logged in. The item was deleted. Or the app was not installed yet. Handle none of them and the link drops the user on a blank screen.
- [ ] **Image states + reserved space** — an image can be loading, missing or broken, and all three need a design. "Reserved space" means leaving a correctly sized hole for the image before it arrives. Without that hole, the text below jumps down the moment the picture loads, and people tap the wrong thing.
- [ ] **Decision records for the main choices** — for each real decision, write two short paragraphs. Say what you decided, why you decided it, and what you turned down. Keep them next to the code. Six months later this stops the same argument happening twice.
- [ ] **Named owner + token bar** — one named person owns the design system, so there is somebody whose job it is to say no. The **token bar** is the set of conditions a new token must clear before it is allowed in. Without a bar, the list quietly grows to 400 items. A list that long is no easier to use than no list at all. See [the governance chapter](../03-production/05-governance.md).

---

## 20.3 🟢 DEFER — until the pain is real

Building these early is the most common way a design system becomes something people route around.

**What this means:** "Route around" means people stop using your system and quietly build their own thing next to it. That happens when the system asks for more effort than it saves. Each item below is genuinely useful at the right size of team, and a waste of weeks before that. The arrow under each one is the signal to watch for. Until you see that signal, do not start.

- [ ] **Cross-platform token pipeline (Style Dictionary / DTCG format)**
      → only when 2+ platforms consume the tokens

  A **platform** is one of the places your app runs: the Android app, the iPhone app, the website. A pipeline is an automatic system. It takes your one list of values and pushes it into all of those places, so they stay identical. Style Dictionary and DTCG are two standard ways of doing that. With only one platform, it is machinery serving nobody, and machinery you then have to keep working.

- [ ] **Figma variable parity**
      → only when a designer is actually maintaining a Figma library

  **Figma** is a drawing tool designers use to draw app screens. "Parity" means keeping the drawings and the code exactly matched, value for value. That is real work that never ends. It only pays off when a designer is genuinely keeping the drawing file alive. Start it too early and you spend your weeks copying numbers between two files instead of building the app.

- [ ] **Formal versioning + deprecation policy**
      → only when another team depends on you

  **Versioning** means giving each release of your rules a number. **Deprecation** means marking something as "old, do not use in new work" instead of deleting it. Both exist so that other people can plan around your changes. If you are the only team using your system, you are writing rules for an audience of yourself.

- [ ] **Density modes (comfortable / compact)**
      → only for data-heavy products

  Density modes means shipping two versions of your whole layout: a roomy one and a tight one. It doubles the spacing work on every screen. It earns that cost only when users stare at big tables of data all day.

- [ ] **Data-visualisation palette**
      → only when you actually ship charts

  A separate set of colours made for charts and graphs. In a chart, every line and every pie slice must stay easy to tell apart from the ones beside it. Ordinary app colours are not picked with that in mind. If your app has no charts in it, this is a colour list with no user.

- [ ] **Full RTL launch**
      → but use logical properties from day one regardless

  **RTL** means right to left. Arabic, Urdu and Hebrew read that way, so the whole screen has to flip. Launching in those languages is a big project, and you can postpone it. The second line is not optional though. **Logical properties** means writing `start` and `end` in your code instead of `left` and `right`, from the very first day. It costs nothing now. Leave it out and flipping the app later means going back through every screen by hand. See [the other-languages chapter](../02-must-have/03-internationalization.md).

- [ ] **A formal RFC / contribution process**
      → only above ~10 contributors

  **RFC** stands for "request for comments". It means every change must be written up as a proposal first. A group then reviews it before anyone builds the thing. With three developers, that is a meeting to approve a meeting. Above about ten people it starts to save more time than it costs. A "contributor" here is anyone who writes code or rules into the shared project.

---

## 20.4 The three tests that tell you it is working

These three questions tell you whether your design system is actually working. Ask them out loud, and answer honestly. A "no" is more useful than a comfortable "yes".

**1. The new-screen test**
> Can someone build a new screen using only existing tokens and
> patterns, without adding anything to the system?

**What this means:** Give a new screen to somebody and watch what they have to invent. Did they add a new colour, a new gap size or a new component? If not, your system covers the real work. If they have to add something every time, it does not cover enough yet. People will then keep adding, and the list of colours and sizes grows until nobody knows which one to use.

**2. The stranger test**
> Can a new developer open any component and understand it in
> 30 seconds, because they all look the same?

**What this means:** A **component** is a reusable piece of screen, like a button. Someone who joined this week opens any one of them. If they get it in 30 seconds, your components are built to one shape. If every component is arranged differently, each one is a small puzzle, and reading the code is slow forever.

**3. The drift test**
> If someone hardcodes a colour today, does anything stop them
> before it reaches main?

**What this means:** **Drift** is what happens when an app slowly slides away from its own rules. It goes one small exception at a time. "Hardcoding a colour" means typing a raw colour value straight into a screen instead of using the token name. That is one of those exceptions. **Main** is the shared copy of the code that the real app is built from. The question is whether anything actually blocks that change on its way in.

If the answer to #3 is "code review", the answer is really "no".

**What this means:** **Code review** is another person reading your change before it goes in. Humans get tired. Humans are in a hurry. And humans do not want to argue about a colour on a Friday evening. So one raw value gets through, then another. A machine check never gets tired and never feels awkward saying no. That is why "a person will notice" counts as "nothing stops them".

---

## 20.5 If you have one day

Do exactly this:

1. Write the colour roles for both themes
2. Write the spacing and radius scale
3. Write the type roles, with the font-scaling decision
4. Turn on the lint rule as a **warning**
5. Build the reference surface

That is 80% of the value. Everything else is refinement.

**What each step means, in order:**

1. **Colour roles for both themes.** Give every colour a job name, like `text.primary` or `surface`. Then write down what that name means in the light theme, and what it means in the dark theme.
2. **Spacing and radius scale.** The short list of allowed gaps between things. Plus the short list of allowed corner roundness values.
3. **Type roles, with the font-scaling decision.** Your five or six named text styles. For each one, answer one question in writing. Does it grow when the user turns up the phone's text size setting?
4. **The lint rule as a warning.** Turn on the machine check that spots raw colours and raw numbers. Set it to complain, not to refuse. A warning lets everyone keep working while the old code gets cleaned up. You turn it into a hard refusal later, once the old code is clean.
5. **The reference surface.** One screen showing every colour, text style, gap and component together. Then nobody has to guess what already exists.

"Refinement" means making a working thing better. You cannot refine something that does not exist yet, which is why these five come first. The order to build the rest in is in [the build order chapter](01-build-order.md).

---

## 20.6 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] Every red 🔴 item in section 20.1 is done — tokens, accessibility, structure and behaviour, all four groups
- [ ] The yellow 🟡 items in 20.2 have owners and rough dates — they are planned work, not forgotten work
- [ ] Nothing from the green 🟢 list in 20.3 has been started early — you have seen the signal on the arrow line first
- [ ] Logical properties (`start` / `end`) are in use from day one — even though the full right-to-left launch is deferred
- [ ] The new-screen test passes — someone can build a new screen without adding anything to the system
- [ ] The stranger test passes — a new developer understands any component in 30 seconds
- [ ] The drift test passes — a machine, not a person, stops a hardcoded colour before it reaches main
- [ ] If you only had one day, the five steps in 20.5 are finished — colour roles, spacing and radius, type roles, the lint rule as a warning, and the reference surface
