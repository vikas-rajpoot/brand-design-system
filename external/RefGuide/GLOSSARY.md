# Glossary

Every hard word in this guide, explained in everyday language with an example. Press **Ctrl-F** (or **Cmd-F** on a Mac), type the word you got stuck on, read the two lines, then go back to the chapter you were reading.

---

## A

### a11y
A short way of writing "accessibility". There are 11 letters between the `a` and the `y`, so people write `a11y` to save typing. You will meet it in file names and checklists. See [accessibility](#accessibility).
*Used in: [build order](04-plan/01-build-order.md), [accessibility](02-must-have/01-accessibility.md)*

### Accent
The one colour your app uses to mean "this is the main thing to press": the send button, the links, the row you have selected. You get exactly one accent colour, plus success, warning and danger for reporting what happened.
*Used in: [colour](01-foundations/02-color.md), [big ideas](01-foundations/01-principles.md)*

### Accessibility
Building the app so it works for everyone, including people who cannot see well, cannot hear, or cannot tap accurately. It is not a rare case — bigger text and [screen readers](#screen-reader) are used by millions of ordinary people.
*Used in: [accessibility](02-must-have/01-accessibility.md), [legal](03-production/02-legal-and-platform.md)*

### Accessibility label
Hidden words you attach to an [icon](#icon) or a button so a [screen reader](#screen-reader) can say what it does. A close button gets the label "Close", not "X icon". Sighted users never see it.
*Used in: [icons](01-foundations/05-icons.md), [accessibility](02-must-have/01-accessibility.md)*

### API
Short for "application programming interface". In this guide it means one thing only: the short list of settings you may hand a [component](#component) when you use it. For a button that is the words on it and whether it is switched off.
*Used in: [component API](02-must-have/05-component-api.md), [build order](04-plan/01-build-order.md)*

### Aspect ratio
The shape of a picture: how wide it is compared to how tall. A 16:9 picture is wide, like a YouTube video. A 1:1 picture is a square, like an Instagram post. Tell the screen the ratio before the picture arrives and the space is held open, so nothing jumps when it lands.
*Used in: [performance](03-production/04-performance-and-assets.md)*

### Asset
Any file that ships inside your app but is not code: images, [icons](#icon), fonts, the app icon, the opening picture. Assets are usually what makes an app slow to download.
*Used in: [performance](03-production/04-performance-and-assets.md)*

---

## B

### Build
The step where the computer turns all your code and files into the finished app people download. If the build fails, no app comes out, so nobody can ship the mistake.
*Used in: [enforcement](02-must-have/06-enforcement.md), [performance](03-production/04-performance-and-assets.md)*

### Bundle
The one package of code and [assets](#asset) a user downloads and installs. "Bundle size" is how many megabytes that is. A bigger bundle means a slower download and more people giving up halfway.
*Used in: [performance](03-production/04-performance-and-assets.md), [type](01-foundations/04-typography.md)*

---

## C

### Call site
The exact spot in the code where something is used — not the file where it was built. If a button is used on the settings screen, that line on the settings screen is the call site.
*Used in: [big ideas](01-foundations/01-principles.md), [governance](03-production/05-governance.md)*

### Card
A rectangle on screen holding one item's information. One video on YouTube's home page sits in a card. Its background colour is called a [surface](#surface).
*Used in: [space](01-foundations/03-space-and-radius.md), [states & motion](01-foundations/06-states-elevation-motion.md)*

### Changelog
A dated list of what changed in each version of your rules, newest first. "Added a warning colour. Removed the old blue." Without one, someone upgrades, their screen moves, and nobody can say why.
*Used in: [governance](03-production/05-governance.md), [checklist](04-plan/02-checklist.md)*

### CI
Short for "continuous integration". A computer somewhere that runs all your checks by itself every time anyone changes the code. Like a teacher who marks the homework the second it is handed in, and refuses it if a rule is broken.
*Used in: [enforcement](02-must-have/06-enforcement.md), [colour](01-foundations/02-color.md)*

### CJK
Short for Chinese, Japanese and Korean. Those three languages need more [line height](#line-height) and no negative [letter spacing](#letter-spacing), or the characters collide and become unreadable.
*Used in: [other languages](02-must-have/03-internationalization.md)*

### Cold start
Opening the app when it was fully closed, so the phone has to build everything from nothing. This is the slowest way to open an app, and it is the one worth measuring.
*Used in: [shell](03-production/01-shell-and-lifecycle.md), [performance](03-production/04-performance-and-assets.md)*

### Component
A piece of the screen you build once and reuse. A button is a component. Like a rubber stamp: cut it once, press it a hundred times.
*Used in: [big ideas](01-foundations/01-principles.md), [component API](02-must-have/05-component-api.md)*

### Composition
Building a bigger thing by putting small pieces inside each other, instead of adding another setting. A card built from a header, a body and a footer is composition. The opposite is a card with 30 [props](#prop), which needs a brand new prop every time someone wants something slightly different.
*Used in: [component API](02-must-have/05-component-api.md)*

### Contrast ratio
One number saying how far apart two colours are in brightness, written like `4.5 : 1`. Black on white scores about 21:1; pale grey on white scores about 1.5:1 and is hard to read. Body text must reach 4.5:1, and icons, borders and [focus rings](#focus-ring) must reach 3:1.
*Used in: [colour](01-foundations/02-color.md), [accessibility](02-must-have/01-accessibility.md)*

---

## D

### Dark mode
The setting where the app turns mostly dark, with light text on dark backgrounds. WhatsApp and YouTube both have it. It is not a simple flip of light mode: [shadows](#shadow) disappear and strong colours have to be turned down.
*Used in: [colour](01-foundations/02-color.md), [big ideas](01-foundations/01-principles.md)*

### Deep link
A link that opens one exact screen inside an app instead of its home screen. Tapping a YouTube link opens that one video, not the YouTube feed.
*Used in: [shell](03-production/01-shell-and-lifecycle.md), [checklist](04-plan/02-checklist.md)*

### Deprecate
To mark something as old and no longer to be used, while leaving it working for now. You warn people, point them at the replacement, and delete it only once nobody uses it any more. Deleting it straight away breaks someone's work on a day they were not expecting it.
*Used in: [governance](03-production/05-governance.md), [checklist](04-plan/02-checklist.md)*

### Design system
The written list of rules your app follows: which colours exist, which text sizes exist, which gap sizes exist. Like a school uniform rule sheet, but for a screen. Its value is what it stops you from doing.
*Used in: [start here](README.md), [big ideas](01-foundations/01-principles.md)*

### Destructive action
Anything that removes or loses something: delete, remove, block, leave the group. Deleting a chat is destructive; opening a chat is not.
*Used in: [undo](02-must-have/07-actions-and-undo.md), [icons](01-foundations/05-icons.md)*

### Diff
The list of exactly which lines of code changed: lines added, lines removed. Short for "difference". A reviewer reads the diff, not the whole app, which is why a 400-line diff gets skimmed.
*Used in: [enforcement](02-must-have/06-enforcement.md), [mistakes](04-plan/03-common-mistakes.md)*

### Disabled
Switched off for now, so you cannot press it. A greyed-out "Send" button is disabled. A [screen reader](#screen-reader) must say so out loud, because grey alone tells a blind user nothing.
*Used in: [accessibility](02-must-have/01-accessibility.md), [states & motion](01-foundations/06-states-elevation-motion.md)*

### dp
Short for "density-independent pixel" — the Android name for the same idea as [pt](#pt) on iPhone. It is a screen length that stays the same real-world size whether the screen is sharp or blurry. This guide writes `pt` and `px`; on Android, read those as `dp`.
*Used in: [space](01-foundations/03-space-and-radius.md), [type](01-foundations/04-typography.md)*

### Drift
Slow damage. Nothing breaks in one day, but one person types 13, another types 17, and after a year the app looks like five different teams built it.
*Used in: [enforcement](02-must-have/06-enforcement.md), [build order](04-plan/01-build-order.md)*

---

## E

### Easing
Whether a movement starts slow and ends fast, or starts fast and ends slow. It is the *feel* of a movement, separate from how long it lasts. Movement at one flat speed is called linear, and it always looks robotic.
*Used in: [states & motion](01-foundations/06-states-elevation-motion.md), [checklist](04-plan/02-checklist.md)*

### Elevation
How high something looks like it is floating above the page. In light mode you show it with a [shadow](#shadow). In [dark mode](#dark-mode) shadows are invisible, so you make the raised thing a lighter grey instead.
*Used in: [states & motion](01-foundations/06-states-elevation-motion.md), [colour](01-foundations/02-color.md)*

### Ellipsis
The three dots `…` placed at the end of text that was cut short because it did not fit. "Meeting notes from yester…" ends in an ellipsis. See [truncate](#truncate).
*Used in: [content states](02-must-have/02-content-states.md)*

### Emoji
The small full-colour pictures on your phone keyboard: 📎 🎙 🤖. They belong to the phone maker, not to you, so they look different on every phone and never match your [icons](#icon).
*Used in: [icons](01-foundations/05-icons.md), [mistakes](04-plan/03-common-mistakes.md)*

### Empty state
What a screen shows when there is nothing to show. "No messages yet." There are three different kinds — never had any, filtered down to nothing, cleared on purpose — and they need three different messages.
*Used in: [content states](02-must-have/02-content-states.md), [words](03-production/03-voice-and-content.md)*

### Enforcement
Making a machine check a rule and block the work when the rule is broken. Not asking people nicely and hoping. Choosing your [tokens](#token) takes a weekend; enforcement is what makes them last a year.
*Used in: [enforcement](02-must-have/06-enforcement.md), [start here](README.md)*

### Escape hatch
An allowed, visible way to step outside the rules when the rules do not cover your case, written down with a reason attached. Without one, people break the rules in secret and nobody ever finds out.
*Used in: [big ideas](01-foundations/01-principles.md), [governance](03-production/05-governance.md)*

---

## F

### Focus
The one thing on screen that is "selected" right now. Press Tab on a keyboard and focus moves to the next item; press Enter and the focused item is the one that gets pressed.
*Used in: [accessibility](02-must-have/01-accessibility.md), [undo](02-must-have/07-actions-and-undo.md)*

### Focus ring
The visible outline drawn around whatever has [focus](#focus), so a keyboard user can see where they are. It must reach a [contrast ratio](#contrast-ratio) of 3:1, and you must never delete it just because it looks untidy.
*Used in: [accessibility](02-must-have/01-accessibility.md), [states & motion](01-foundations/06-states-elevation-motion.md)*

### Font scaling
The phone setting that makes all text bigger or smaller in every app. Someone with weak eyesight may set it to 200%. Your screens must still hold together, which means no box holding text is ever given one fixed height — use [minHeight](#minheight).
*Used in: [accessibility](02-must-have/01-accessibility.md), [type](01-foundations/04-typography.md)*

### Force upgrade
A screen that blocks the whole app and says "you must update to continue". You need it when the old version of the app no longer works with your [server](#server).
*Used in: [shell](03-production/01-shell-and-lifecycle.md), [build order](04-plan/01-build-order.md)*

### fps
Short for "frames per second". A screen redraws its picture many times a second, and each redraw is one frame. 60fps means 60 fresh pictures every second, which is what makes scrolling look smooth. A "dropped frame" is one the phone was too slow to draw.
*Used in: [performance](03-production/04-performance-and-assets.md), [states & motion](01-foundations/06-states-elevation-motion.md)*

---

## G

### Gap
The empty space *between* items in a row or a column, set once on the box that holds them. You say "put 12 between every pair" and the screen works the rest out. Compare [margin](#margin) and [padding](#padding).
*Used in: [space](01-foundations/03-space-and-radius.md)*

### Governance
Who is allowed to change the rules, and how. Who decides, who settles arguments, and where the decision gets written down. Without it, every request for a new colour gets a yes and the short list stops being short.
*Used in: [governance](03-production/05-governance.md), [build order](04-plan/01-build-order.md)*

---

## H

### Happy path
The story where everything works: the internet is on, the data exists, nothing fails. Most apps are built for the happy path only, which is why the first real user meets a blank screen.
*Used in: [mistakes](04-plan/03-common-mistakes.md), [content states](02-must-have/02-content-states.md)*

### Haptics
The small buzz the phone gives when you press something. You feel it, you do not hear it. Use it for things that actually happened, never as decoration on every tap.
*Used in: [states & motion](01-foundations/06-states-elevation-motion.md), [checklist](04-plan/02-checklist.md)*

### Hardcode
To type a raw value straight into one spot in the code instead of using a [token](#token). Typing `#1A1A1A` inside a button is hardcoding. Fast today, expensive later, and it is what breaks [dark mode](#dark-mode).
*Used in: [big ideas](01-foundations/01-principles.md), [enforcement](02-must-have/06-enforcement.md)*

### Hex code
A colour written as `#` plus six characters, like `#1E88E5`. The computer understands it; a person reading it has no idea what the colour is for. It is really three [RGB](#rgb) amounts squashed into one code.
*Used in: [colour](01-foundations/02-color.md), [start here](README.md)*

### Hierarchy
The order in which your eye picks things up: what you read first, second, third. Build it with colour first, then [weight](#weight), and change the size only as a last resort.
*Used in: [big ideas](01-foundations/01-principles.md), [mistakes](04-plan/03-common-mistakes.md)*

### hitSlop
A setting that grows the tappable area of something outwards without changing how it looks. A 16px icon can stay 16px on screen and still have a 44pt [touch target](#touch-target) around it.
*Used in: [states & motion](01-foundations/06-states-elevation-motion.md)*

### Hue
Which colour a colour is: red, orange, blue, green. It is the family name, separate from how strong it is (saturation) and how light it is (lightness).
*Used in: [colour](01-foundations/02-color.md), [mistakes](04-plan/03-common-mistakes.md)*

---

## I

### i18n
Short for "internationalization" — getting your app ready for other languages and countries. There are 18 letters between the `i` and the `n`, so people write i18n.
*Used in: [other languages](02-must-have/03-internationalization.md), [words](03-production/03-voice-and-content.md)*

### Icon
A tiny picture that stands for an action or a place. The magnifying glass means search; the house means home. Every icon that does something also needs an [accessibility label](#accessibility-label).
*Used in: [icons](01-foundations/05-icons.md)*

### Icon font
An old way of shipping icons, where the icons are packed into a font file as if they were letters. Avoid it: the icons vanish when the font fails to load, and [screen readers](#screen-reader) try to read them as text. Use [SVG](#svg) instead.
*Used in: [icons](01-foundations/05-icons.md), [performance](03-production/04-performance-and-assets.md)*

---

## J

### Janky
Movement that stutters instead of gliding, because the phone could not draw the frames fast enough. The app feels like it is skipping. Animating size or [layout](#layout) is the usual cause.
*Used in: [states & motion](01-foundations/06-states-elevation-motion.md)*

---

## L

### Label
The words written on or next to a control. "Send" is the label on a Send button. For a [screen reader](#screen-reader), the label is what gets read out, so it must name the action and not the picture.
*Used in: [words](03-production/03-voice-and-content.md), [accessibility](02-must-have/01-accessibility.md)*

### Layer
One sheet in the stack of things on screen. The glass is flat, but you pile things on it like sheets of paper on a desk. The word is also used for the two levels of naming: [primitives](#primitive), then [roles](#role).
*Used in: [layering](02-must-have/04-layering.md), [big ideas](01-foundations/01-principles.md)*

### Layering scale
A named list saying what sits on top of what: normal content, then a panel, then a [modal](#modal), then a [toast](#toast). It replaces people guessing [z-index](#z-index) numbers on their own.
*Used in: [layering](02-must-have/04-layering.md), [build order](04-plan/01-build-order.md)*

### Layout
Where things sit on the screen and how big they are: widths, heights, and the gaps between them. Changing layout is expensive for the phone to draw, which is why animations should use [transform](#transform) instead.
*Used in: [big ideas](01-foundations/01-principles.md), [performance](03-production/04-performance-and-assets.md)*

### Layout shift
The page jumping around while it loads. You go to tap something, the content finishes arriving, everything slides down, and your finger lands on the wrong thing. Reserving the space in advance stops it.
*Used in: [content states](02-must-have/02-content-states.md), [performance](03-production/04-performance-and-assets.md)*

### Lazy loading
Fetching something only when the user is about to need it, instead of fetching everything at the start. On a long feed you load the six pictures on screen, not all sixty. The app opens faster and the user spends less of their data.
*Used in: [performance](03-production/04-performance-and-assets.md)*

### Letter spacing
The gap between one letter and the next inside a word. Also called tracking. A small negative value tightens big headings; on [CJK](#cjk) text a negative value makes it unreadable.
*Used in: [type](01-foundations/04-typography.md), [other languages](02-must-have/03-internationalization.md)*

### Lifecycle
The life of your app from opening to closing: starting up, running, going to sleep when you switch away, being killed by the phone, coming back. Each stage needs something sensible on screen.
*Used in: [shell](03-production/01-shell-and-lifecycle.md)*

### Line height
The full height of one line of text, counting the small space above and below the letters. Like the ruled lines in your notebook. More line height is easier to read but uses more room.
*Used in: [type](01-foundations/04-typography.md), [big ideas](01-foundations/01-principles.md)*

### Lint rule
A small automatic check that reads your code and complains when you break a rule. Like spellcheck, but for design rules. The classic one blocks a raw [hex code](#hex-code) and tells you to use a [token](#token).
*Used in: [enforcement](02-must-have/06-enforcement.md), [start here](README.md)*

### Locale
The language and country settings of one user. `en-IN` is English as used in India; `de-DE` is German in Germany. The locale decides the language, the date order and the number format.
*Used in: [other languages](02-must-have/03-internationalization.md)*

### Logical properties
Ways of saying "the side where reading starts" instead of "the left side". You write `start` and `end` instead of `left` and `right`, and the screen then flips by itself for [RTL](#rtl) languages.
*Used in: [other languages](02-must-have/03-internationalization.md), [mistakes](04-plan/03-common-mistakes.md)*

---

## M

### Margin
The empty space *outside* a box, pushing other things away from it. Like the space you leave around a photo in a scrapbook. Prefer [gap](#gap) on the box that holds things, so spacing is decided in one place.
*Used in: [space](01-foundations/03-space-and-radius.md), [component API](02-must-have/05-component-api.md)*

### minHeight
Telling a box "be at least this tall, and grow taller if you need to". It is the fix for text getting chopped off when someone turns [font scaling](#font-scaling) up. The opposite is a fixed height, which never grows.
*Used in: [accessibility](02-must-have/01-accessibility.md), [type](01-foundations/04-typography.md)*

### Modal
A box that opens on top of the screen and blocks everything behind it until you answer it or close it. The "Delete this photo?" box is a modal. Also called a dialog. The dark sheet dimming the screen behind it is called a scrim.
*Used in: [layering](02-must-have/04-layering.md), [undo](02-must-have/07-actions-and-undo.md)*

### Mono
Short for monospace. A font where every letter is exactly the same width, so characters line up in neat columns. It is the font used for code and for lists of numbers.
*Used in: [type](01-foundations/04-typography.md)*

### Motion
Animation. Anything that moves, fades or grows on screen instead of appearing instantly. A panel sliding up from the bottom is motion. Pick three durations and two [easings](#easing), and stop there.
*Used in: [states & motion](01-foundations/06-states-elevation-motion.md), [build order](04-plan/01-build-order.md)*

### ms
Short for millisecond, one thousandth of a second. Code counts time this way, so 7 seconds is written `7000`. One blink of your eye takes roughly 100ms to 400ms.
*Used in: [states & motion](01-foundations/06-states-elevation-motion.md), [performance](03-production/04-performance-and-assets.md)*

---

## N

### Neutral
The greys of your app: backgrounds, cards, lines, most text. Everything that is not a brand colour. Never make them pure grey — tilt them slightly towards your [accent](#accent) [hue](#hue).
*Used in: [colour](01-foundations/02-color.md), [mistakes](04-plan/03-common-mistakes.md)*

---

## O

### Offline
The phone has no working internet connection right now. It is one of the four awkward screen conditions, along with empty, loading and error, and every one of them must be designed on purpose.
*Used in: [content states](02-must-have/02-content-states.md), [build order](04-plan/01-build-order.md)*

### OKLCH
A newer way of writing a colour using three numbers: **L** for lightness, **C** for how strong the colour is, and **H** for [hue](#hue). It is built so the same lightness number looks equally bright to your eye in every hue, which [RGB](#rgb) does not manage.
*Used in: [colour](01-foundations/02-color.md)*

### Onboarding
The teaching screens a new user sees the very first time they open your app or a feature: "Welcome", "choose your language", "allow notifications". Never show it on a screen that is empty because a filter hid everything.
*Used in: [shell](03-production/01-shell-and-lifecycle.md), [content states](02-must-have/02-content-states.md)*

### Opacity
How see-through something is. `1` is fully solid, `0` is invisible, `0.6` lets the background show through. Fading opacity is cheap for the phone to draw, which is why pressed buttons often use it.
*Used in: [states & motion](01-foundations/06-states-elevation-motion.md), [performance](03-production/04-performance-and-assets.md)*

### OS
Short for "operating system": the software that runs the whole phone, such as Android or iOS. Your app is a guest inside it, and the OS can close your app whenever it likes.
*Used in: [shell](03-production/01-shell-and-lifecycle.md), [accessibility](02-must-have/01-accessibility.md)*

### Overlay
Anything that sits on top of the normal page: a [modal](#modal), a [sheet](#sheet), a menu, a loading cover, or the dark sheet dimming the screen behind them. Overlays are the things that fight over who is on top, which is why you need a [layering scale](#layering-scale).
*Used in: [layering](02-must-have/04-layering.md), [mistakes](04-plan/03-common-mistakes.md)*

---

## P

### Padding
The empty space *inside* a box, between its edge and the stuff in it. Like the white border inside a notebook page before the writing starts. Compare [margin](#margin), which is the space outside.
*Used in: [space](01-foundations/03-space-and-radius.md), [component API](02-must-have/05-component-api.md)*

### Palette
The full set of colours your app is allowed to use, each with a name. If a colour is not in the palette, it does not exist in your app.
*Used in: [colour](01-foundations/02-color.md), [start here](README.md)*

### Performance
How fast and how smooth the app feels: how long it makes you wait, and whether scrolling glides or stutters. Often shortened to "perf". You control it by writing down a limit first and then living inside it.
*Used in: [performance](03-production/04-performance-and-assets.md)*

### Permission
Your app asking the phone for the right to use something private, like the camera or your location. The phone shows its own popup, which you cannot design. Explain why first — see [priming](#priming).
*Used in: [legal](03-production/02-legal-and-platform.md), [mistakes](04-plan/03-common-mistakes.md)*

### PNG
A picture saved as a grid of coloured dots, the way a photo is. Whatever colour the dots were saved as is the colour you get forever, so a PNG icon cannot follow your [theme](#theme). Use [SVG](#svg) for icons.
*Used in: [icons](01-foundations/05-icons.md), [performance](03-production/04-performance-and-assets.md)*

### Portal
A trick that moves a piece of screen out of the spot where you wrote it and draws it right at the top instead. Without it, a menu written inside a [card](#card) gets cut off by the card's edges.
*Used in: [layering](02-must-have/04-layering.md)*

### Priming
Showing your own screen explaining *why* you need something, right before the phone's [permission](#permission) popup appears. Like telling a friend why you need their notebook before you put your hand out. The opposite is a cold ask, and far fewer people say yes to one.
*Used in: [legal](03-production/02-legal-and-platform.md), [mistakes](04-plan/03-common-mistakes.md)*

### Primitive
A raw value with a plain, boring name, like `neutral-200`. It says what the value *is*, not what it is *for*. Components must never name a primitive directly — they use a [role](#role). The same word also means a very plain component such as `Box`.
*Used in: [big ideas](01-foundations/01-principles.md), [colour](01-foundations/02-color.md)*

### Prop
One setting you pass to a [component](#component) when you use it. Short for "property". In `<Icon size={20} />`, `size` is a prop and `20` is its value. Like the size and sugar options when you order a drink.
*Used in: [component API](02-must-have/05-component-api.md), [icons](01-foundations/05-icons.md)*

### Pseudo-locale
A fake language you switch on while testing. It is not real: it takes your English text and stretches it, so you can see which boxes burst before a real translator ever arrives.
*Used in: [other languages](02-must-have/03-internationalization.md)*

### pt
A unit of length on a screen, short for "point". Think of it like millimetres, but for phone screens. `18pt` text is bigger than `14pt` text. On Android the same idea is called [dp](#dp).
*Used in: [space](01-foundations/03-space-and-radius.md), [accessibility](02-must-have/01-accessibility.md)*

### px
A unit of length on a screen, short for "pixel" — one of the tiny dots a screen is built from. `15px` means 15 dots. Every plain number in this guide counts these unless it says otherwise.
*Used in: [start here](README.md), [icons](01-foundations/05-icons.md)*

---

## R

### Radius
How rounded a corner is. Radius 0 is a sharp corner like a sheet of paper. Radius 12 is a soft corner like a WhatsApp message bubble. Pick five or six allowed values and no more.
*Used in: [space](01-foundations/03-space-and-radius.md), [checklist](04-plan/02-checklist.md)*

### Ramp
One colour printed at many lightness steps, from very pale to very dark, in order. Like the shade card you get at a paint shop. Build ramps with [OKLCH](#oklch) maths, not by eye.
*Used in: [colour](01-foundations/02-color.md), [start here](README.md)*

### Raw value
A number or colour typed straight into the code, with no name attached. `padding: 13` is a raw value; `padding: spacing.md` is not. Blocking raw values is the whole job of a [lint rule](#lint-rule).
*Used in: [enforcement](02-must-have/06-enforcement.md), [build order](04-plan/01-build-order.md)*

### Reference surface
One page inside your app showing every colour, text size, gap, icon and component together in one place. Like the formula page at the back of a maths book. Seeing them side by side is how you spot the two blues that were meant to be one blue.
*Used in: [enforcement](02-must-have/06-enforcement.md), [build order](04-plan/01-build-order.md)*

### Render
To draw something on screen. "The card renders" means the card gets drawn. A re-render is drawing it again because something changed.
*Used in: [layering](02-must-have/04-layering.md), [performance](03-production/04-performance-and-assets.md)*

### Repo
Short for "repository". The one shared folder holding all the code for your app, plus a full history of every change anyone ever made to it.
*Used in: [enforcement](02-must-have/06-enforcement.md), [governance](03-production/05-governance.md)*

### RFC
Short for "request for comments". A written proposal people read and comment on before anyone builds the thing. Useful for a big change, and deadly if you demand one for adding a single colour.
*Used in: [checklist](04-plan/02-checklist.md), [mistakes](04-plan/03-common-mistakes.md)*

### RGB
The normal way a screen makes colour: red light, green light and blue light mixed together. A [hex code](#hex-code) is really three RGB amounts written as one code. Your eye does not read RGB evenly, which is why [OKLCH](#oklch) exists.
*Used in: [colour](01-foundations/02-color.md)*

### Role
A name that says what a value is *for*, not what it looks like. `danger` is a role; `red` is not. Components are allowed to use roles and nothing else. For a [screen reader](#screen-reader), "role" instead means what kind of thing an item is: button, link, checkbox.
*Used in: [big ideas](01-foundations/01-principles.md), [colour](01-foundations/02-color.md)*

### RTL
Short for "right to left". Arabic, Hebrew, Urdu and Farsi are read from the right side of the line to the left, so the whole screen has to flip. English and Hindi are LTR, left to right. See [logical properties](#logical-properties).
*Used in: [other languages](02-must-have/03-internationalization.md), [icons](01-foundations/05-icons.md)*

---

## S

### Scale
The full set of allowed values, in order. Your spacing scale is your list of allowed gap sizes; your type scale is your list of allowed text sizes. The point of a scale is that there is no extra step outside it.
*Used in: [space](01-foundations/03-space-and-radius.md), [type](01-foundations/04-typography.md)*

### Screen reader
Software that reads the screen out loud for someone who cannot see it. VoiceOver is the one built into iPhone; TalkBack is the Android one. It reads your [labels](#label), so a button with no label is announced as nothing useful.
*Used in: [accessibility](02-must-have/01-accessibility.md), [component API](02-must-have/05-component-api.md)*

### Scrim
The dark see-through sheet laid over the screen behind a [modal](#modal) or a [sheet](#sheet). It dims everything else so your eye goes to the box in front. Two scrims stacked together make the screen twice as dark, which is why one place in your app should own them.
*Used in: [layering](02-must-have/04-layering.md)*

### Server
The other computer, somewhere on the internet, that your app talks to. It holds the accounts, the messages, the videos. When people say "the app is down", they usually mean the server did not answer.
*Used in: [shell](03-production/01-shell-and-lifecycle.md), [content states](02-must-have/02-content-states.md)*

### Shadow
The soft dark patch under a floating thing that makes it look lifted off the page. It is how you show [elevation](#elevation) in light mode. On a dark background a dark shadow shows nothing at all.
*Used in: [states & motion](01-foundations/06-states-elevation-motion.md), [colour](01-foundations/02-color.md)*

### Sheet
A panel that slides up from the bottom of the screen. The "Share to..." panel on Instagram is a sheet.
*Used in: [layering](02-must-have/04-layering.md), [space](01-foundations/03-space-and-radius.md)*

### Shell
The screens wrapped around your real app, belonging to the whole app instead of any one feature: the opening screen, the "please update" screen, the "you were logged out" screen. Nobody owns them, so nobody builds them, until launch week.
*Used in: [shell](03-production/01-shell-and-lifecycle.md), [build order](04-plan/01-build-order.md)*

### Ship
To release something so real people can use it. "We shipped 100 components" means those 100 are done and in use. Once it is shipped, everyone can see your mistakes.
*Used in: [start here](README.md), [checklist](04-plan/02-checklist.md)*

### Skeleton
Grey blocks drawn in the exact shape of the content that is coming. YouTube shows grey rectangles where the video pictures will land. It is calmer than a [spinner](#spinner) and it prevents a [layout shift](#layout-shift).
*Used in: [content states](02-must-have/02-content-states.md), [shell](03-production/01-shell-and-lifecycle.md)*

### Spinner
The small circle that turns round and round while you wait. Fine for a short wait, bad for a long one, because it tells the user nothing about what is happening or how much longer it will take.
*Used in: [content states](02-must-have/02-content-states.md), [mistakes](04-plan/03-common-mistakes.md)*

### Splash screen
The screen you see for the first moment after tapping the app icon, before the real content appears. WhatsApp shows its name and logo. It should never become an excuse for a slow [cold start](#cold-start).
*Used in: [shell](03-production/01-shell-and-lifecycle.md), [performance](03-production/04-performance-and-assets.md)*

### State
What something looks like, or is holding, right now. One button has a normal state, a pressed state, a [disabled](#disabled) state and a loading state. One screen can be full, empty, loading or broken.
*Used in: [states & motion](01-foundations/06-states-elevation-motion.md), [content states](02-must-have/02-content-states.md)*

### State restoration
Putting the user back exactly where they were after the phone closed your app in the background. Same screen, same scroll position, same half-typed message. Test it by force-closing your own app and opening it again.
*Used in: [shell](03-production/01-shell-and-lifecycle.md), [checklist](04-plan/02-checklist.md)*

### String
A piece of text in your app. "Send", "No messages yet" and "Delete this photo" are all strings. Programmers call text a string because it is a string of letters joined together.
*Used in: [words](03-production/03-voice-and-content.md), [other languages](02-must-have/03-internationalization.md)*

### Stroke
The thickness of the lines an [icon](#icon) is drawn with. A 2px stroke is heavier than a 1.5px stroke. Mixing two stroke widths in one row of icons is instantly visible, even to people who cannot name what is wrong.
*Used in: [icons](01-foundations/05-icons.md)*

### Subset
Cutting a font file down to only the characters you actually need, so it downloads faster. A full font carries thousands of characters for dozens of languages. Cut too much and a user's language turns into empty boxes, so check which characters your languages need before you cut.
*Used in: [performance](03-production/04-performance-and-assets.md), [type](01-foundations/04-typography.md)*

### Surface
The colour of a [card](#card), a row or a panel sitting on top of the page background. It has to look slightly different from the background, or the card melts into the page and stops looking like a card.
*Used in: [colour](01-foundations/02-color.md), [big ideas](01-foundations/01-principles.md)*

### SVG
A picture stored as instructions ("draw a line from here to here") instead of a grid of coloured dots. It stays sharp at any size, the file is small, and you can tell it to change colour to follow your [theme](#theme).
*Used in: [icons](01-foundations/05-icons.md), [performance](03-production/04-performance-and-assets.md)*

### System font
The font that already comes built into the phone. It costs nothing to download, appears instantly, and already handles [font scaling](#font-scaling) and other languages properly. The alternative is a custom font you ship as a file inside your app.
*Used in: [type](01-foundations/04-typography.md), [performance](03-production/04-performance-and-assets.md)*

---

## T

### Tabular numbers
A font setting that makes every digit the same width, so `1` takes as much room as `8`. Use it for anything that counts up or ticks over, such as a timer, or the whole row jitters as the numbers change.
*Used in: [type](01-foundations/04-typography.md)*

### Theme
One complete set of colours for the whole app. Light mode is one theme, [dark mode](#dark-mode) is another. Every [role](#role) needs a value in every theme, or you get holes.
*Used in: [colour](01-foundations/02-color.md), [big ideas](01-foundations/01-principles.md)*

### Toast
A small message that slides in, says one short thing, and disappears by itself after a few seconds. "Copied" is a toast. Pairing one with an [undo](#undo) button is usually kinder than asking "Are you sure?".
*Used in: [content states](02-must-have/02-content-states.md), [undo](02-must-have/07-actions-and-undo.md)*

### Token
A name you give to a value, like `x = 5` in maths. Instead of writing 12 for a gap, you write `spacing.md`. Change it in one place and every screen changes with it.
*Used in: [start here](README.md), [space](01-foundations/03-space-and-radius.md)*

### Touch target
The area your finger has to hit for a control to work. It is often bigger than the picture you can see, and it should be at least 44pt across. Use [hitSlop](#hitslop) to grow it without changing the look.
*Used in: [states & motion](01-foundations/06-states-elevation-motion.md), [checklist](04-plan/02-checklist.md)*

### Transform
Moving, turning or resizing something without redrawing the [layout](#layout) around it. It is very cheap for the phone, which is why animations should use transform and [opacity](#opacity) and nothing else.
*Used in: [states & motion](01-foundations/06-states-elevation-motion.md), [performance](03-production/04-performance-and-assets.md)*

### Tree-shaking
The [build](#build) throwing away code you never used. If an icon set has 900 icons and you use 40, tree-shaking packs only those 40 into the app. Like packing for a trip and leaving out everything you never wear.
*Used in: [icons](01-foundations/05-icons.md), [performance](03-production/04-performance-and-assets.md)*

### Truncate
To cut text short because it does not fit, usually adding `…` at the end. The other choice is to wrap it onto a second line. Never truncate something the user must read, and remember translated words are often longer.
*Used in: [content states](02-must-have/02-content-states.md), [other languages](02-must-have/03-internationalization.md)*

### Typography
How your text looks: its size, its thickness, the gap between lines, the gap between letters. Often shortened to "type". Build the sizes with maths, not by picking whatever looks right on the day.
*Used in: [type](01-foundations/04-typography.md)*

---

## U

### UI
Short for "user interface". Everything you see and touch on a screen: buttons, text, colours, pictures, and the gaps between them. Open any app and look at it for ten seconds — all of that is the UI.
*Used in: [start here](README.md), [big ideas](01-foundations/01-principles.md)*

### Undo
A button that takes back what you just did. Gmail's "Message sent. [Undo]" is exactly this. The undo window is the number of seconds it keeps working, usually about five to seven.
*Used in: [undo](02-must-have/07-actions-and-undo.md)*

### UX
Short for "user experience". How it *feels* to use the app — whether a person can get their job done without confusion. [UI](#ui) is how it looks; UX is how it goes.
*Used in: [enforcement](02-must-have/06-enforcement.md)*

---

## V

### Variable font
One font file that can produce every [weight](#weight), from thin to heavy, instead of one separate file per weight. If you need three weights or more, one variable font is smaller than shipping three ordinary files.
*Used in: [performance](03-production/04-performance-and-assets.md), [type](01-foundations/04-typography.md)*

### Variant
A different version of the same [component](#component). A button has a primary variant, a ghost variant and a danger variant. It is a [prop](#prop) that says *what kind* of thing this is.
*Used in: [component API](02-must-have/05-component-api.md), [enforcement](02-must-have/06-enforcement.md)*

### Versioning
Giving each release of your rules a number, like 2.4.1, so anyone can say which one they are using. It is what lets teams upgrade on purpose instead of being surprised one morning.
*Used in: [governance](03-production/05-governance.md), [checklist](04-plan/02-checklist.md)*

### Virtualise
To draw only the rows that are on screen right now. If a list has 4000 rows and 15 fit on screen, you draw 15. The app still knows about the rest and builds each one as you scroll down to it.
*Used in: [content states](02-must-have/02-content-states.md), [performance](03-production/04-performance-and-assets.md)*

### Visual regression test
An automatic check that photographs every screen and compares it with the photo from last time. If a single dot moved, it shouts. Also called a screenshot test.
*Used in: [enforcement](02-must-have/06-enforcement.md), [build order](04-plan/01-build-order.md)*

---

## W

### Weight
How thick the strokes of the letters are, written as a number. 400 is normal text, 600 is semi-bold, 700 is bold. Changing weight is a cheap way to build [hierarchy](#hierarchy) without adding a new text size.
*Used in: [type](01-foundations/04-typography.md), [big ideas](01-foundations/01-principles.md)*

---

## Z

### z-index
The number that decides which thing is drawn on top when two things overlap. A bigger number wins, so z-index 400 covers z-index 100. Never type these numbers by hand — use a [layering scale](#layering-scale).
*Used in: [layering](02-must-have/04-layering.md), [mistakes](04-plan/03-common-mistakes.md)*
