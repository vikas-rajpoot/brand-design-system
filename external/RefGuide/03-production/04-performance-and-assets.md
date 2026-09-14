# 17. Speed and Assets

**In one line:** Your look-and-feel rules can make the app slow and heavy. So write down a speed limit. Watch the size of the pictures, icons and fonts you ship. Then have a machine check both of those things for you.

**Why this chapter exists:** Two words in the title. **Performance** means speed — how fast the app opens, how smoothly it scrolls. **Assets** means the files that ship inside your app: images, icons and fonts. These two are connected. A pretty shadow, a big background photo and a fancy font all look good in a screenshot. On a cheap phone on a slow connection they turn into a five second wait and a jerky scroll. This chapter tells you which numbers to aim for and which choices quietly cost the most.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gap sizes exist, which corner shapes exist. Like a school uniform rule sheet, but for a screen. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `spacing.md = 12`. After that everyone types `spacing.md` instead of typing `12`. Change it in one place and it changes everywhere. |
| **Component** | A piece of screen you build once and reuse. A button is a component. You build one button and use it on 40 screens. |
| **Performance** | Speed. How long the app makes you wait, and how smoothly it moves. |
| **Asset** | A file that ships with your app but is not code. Images, icons, fonts, the app icon, the opening screen picture. |
| **Budget** | A limit you write down in advance. "Opening the app must take under 2 seconds." Like pocket money: you decide the number first, then live inside it. |
| **fps** | Frames per second. A screen redraws its picture many times a second. Each redraw is one frame. 60fps means 60 fresh pictures every second, which is what makes a scroll look smooth. |
| **Dropped frame** | A frame the phone was too slow to draw in time. One dropped frame is invisible. Ten in a row and the scroll looks like it is stuttering. |
| **Cold start** | Opening the app when it is not running at all. The phone has to load everything from zero. |
| **Warm start** | Coming back to the app when it is still sitting in the phone's memory in the background. Much faster than a cold start. |
| **Bundle** | The one package of code and assets that a user downloads and installs. **Bundle size** is how many megabytes they have to download. |
| **CI** | Short for "continuous integration". A computer on the internet that automatically runs your checks every time someone changes the code. Like a teacher who marks every piece of homework the moment it is handed in, without being asked. |
| **Simulator** | A fake phone running on your laptop, used for testing. It borrows your laptop's speed, so it is faster than a real phone. |
| **Low-end phone** | A cheap or old phone with a slow processor and little memory. Most people in the world use one. |
| **System font** | The font the phone already has built in. You ship no font file at all and it appears instantly. |
| **Custom font** | A font you chose yourself and ship inside your app as a file. |
| **Weight** | How thick the letters of a font are. Regular, Medium, Bold are three weights of the same font. |
| **Subset a font** | Cut characters out of the font file that your app will never show, to make the file smaller. |
| **Variable font** | One font file that can produce every weight from thin to bold, instead of one separate file per weight. |
| **Fallback font** | The font shown for the first moment, before your custom font finishes loading. |
| **Font metrics** | The size and shape measurements of a font: how tall the letters are, how wide, how much space they take. |
| **Glyph** | One character in a font. The letter `a` is a glyph. So is `?`. So is one icon inside an icon font. |
| **Icon font** | A font file where each "letter" is actually a small picture, used as a way to ship icons. |
| **SVG** | A picture stored as instructions ("draw a line from here to here") instead of a grid of coloured dots. It stays sharp at any size and the file is small. |
| **SVG sprite** | One file holding many SVG icons together, so the browser downloads them in a single go. |
| **Tree-shaking** | The build tool looking at your code, seeing which parts you never used, and leaving them out of the final bundle. Like packing for a trip and removing everything you never wear. |
| **Build** | The step where a tool takes all your code and files and turns them into the finished app package. |
| **Placeholder** | A blank stand-in shown in the exact place where real content will appear, while you wait for it. |
| **Layout shift / layout jump** | Things on screen suddenly moving because something loaded late and pushed them. You are reading a line and it jumps down. |
| **Aspect ratio** | The shape of a picture: its width compared to its height. `16:9` is a wide YouTube video. `1:1` is a square Instagram photo. |
| **Resolution** | How many dots make up a picture. More dots means sharper, but a bigger file. |
| **@2x / @3x** | Names for the higher-resolution copies of the same image, for phones with sharper screens. |
| **srcset** | A way on the web to hand the browser several sizes of one image and let it pick the right one. |
| **WebP / AVIF** | Newer image file types. Same picture, much smaller file, compared with older JPG and PNG. |
| **Lazy-load** | Only load a picture when the user is about to scroll it into view, instead of loading everything at once. |
| **Below the fold** | The part of a page you cannot see until you scroll down. |
| **Splash screen** | The short opening screen with the logo, shown while the app is starting. |
| **Widget** | A small block of your app that sits on the phone's home screen, outside the app itself. |
| **Version control** | A system that stores every version of your files in a shared place, so nothing lives on only one laptop and nothing is ever lost. |
| **Theme** | A whole set of colours used together. Most apps have two: a light theme and a dark theme. |
| **Dark mode** | The dark theme. Dark background, light text. |
| **First paint** | The very first moment anything at all is drawn on the screen. |
| **Modal** | A box that opens on top of the screen and blocks what is behind it until you answer or close it. |
| **Remount** | Throwing away everything currently built on screen and rebuilding it from scratch. Slow and visible. |
| **Blur radius** | How strong a blur is. A bigger radius means a more smeared, frosted-glass look, and much more work for the phone. |
| **Shadow** | The soft dark edge under a card that makes it look like it is floating above the screen. |
| **Opacity** | How see-through something is. Opacity 1 is solid. Opacity 0 is invisible. |
| **Transform** | Moving, scaling or rotating something without changing its place in the layout. The phone can do this very cheaply. |
| **Virtualise** | In a long list, only build the rows that are on screen right now, and throw away rows that scroll away. |
| **Render / re-render** | Building the picture of a piece of UI. A re-render is building it again because something changed. |
| **Debounce** | Waiting until the user pauses before doing expensive work, instead of doing it on every single key press. |
| **Input** | A box you type into. The search bar is an input. |
| **OS** | Short for "operating system". The software the phone itself runs, such as Android or iOS. Your app sits inside it. |
| **Processor** | The chip inside the phone that does the thinking. A slow processor means everything takes longer. |
| **Server** | Another computer, somewhere on the internet, that keeps files and sends them to your app when your app asks. |
| **Request** | One trip from your app to a server to fetch one thing. Every trip costs time. |
| **KB and MB** | File sizes. KB means kilobyte. MB means megabyte. One MB is about a thousand KB. A song is a few MB. |
| **ms** | Short for millisecond. One thousand milliseconds make one second. |
| **Import** | A line of code that says "bring this one piece in and use it here". |
| **Export** | Saving a flat, finished copy of a drawing, such as a PNG file, out of the editable original. |
| **Source file** | The editable original of a picture, the file it was drawn in. From it you can make every size again. |
| **Sans-serif** | A plain font style with no small decorative feet on the ends of the letters. |
| **Reflow** | When text has to be laid out again, so words move to different lines. The paragraph visibly shuffles. |

---

## 17.1 Set a speed budget, and have CI measure it

Write down the exact speed numbers your app must hit. Then have a machine check them on every change.

**What this means:** A **budget** here is a limit you decide in advance. An example is "the app must open in under 2 seconds". **CI** is a computer on the internet. It runs your checks automatically each time anyone changes the code. Writing the number down turns a vague feeling into a pass-or-fail test. Skip the number and the app gets a little slower every week. Nobody can point at the week it broke.

Numbers, not opinions.

**What this means:** "It feels a bit slow" starts an argument nobody can win. "Cold start took 3.4s, our limit is 2s" ends it. A number is something two people can look at and agree on.

Below is the version to avoid. This is a rule nobody can check.

```
Team rule: "The app should feel fast."
```

Below is the version to use. Every line is a number a machine can test.

| What you measure | The target |
|---|---|
| Cold start to usable | < 2s |
| Screen transition | < 300ms |
| Scroll | 60fps, no dropped frames |
| App bundle size | Pick a ceiling and defend it |
| Time to first content | < 1s on a warm start |

That table is dense, so here is every row in plain words.

- **Cold start to usable, under 2 seconds.** A **cold start** is opening the app when it was not running at all. "Usable" means the person can do something real. Staring at a logo does not count. From tap to useful must be under 2 seconds. Go over that and people close the app before it has finished opening.
- **Screen transition, under 300ms.** `ms` means milliseconds. 1000ms is one second, so 300ms is roughly a third of a second. That is the most time allowed between tapping something and the new screen being there. Longer than that and the tap feels ignored, so people tap again.
- **Scroll, 60fps with no dropped frames.** The screen draws 60 fresh pictures every second while you scroll. Each picture is a **frame**. If the phone cannot finish a frame in time, that frame is **dropped** and the scroll looks jerky. Your target is zero dropped frames.
- **App bundle size, pick a ceiling and defend it.** The **bundle** is the package users download and install. A "ceiling" is the largest size you will allow. There is no single correct number here. So you choose one for your app and write it down. Then you refuse changes that break it. "Defend it" means saying no when someone adds a 4MB image that pushes you past the limit. (MB means megabyte.) With no ceiling, the download grows month by month. In the end, people on slow connections give up part way through installing.
- **Time to first content, under 1 second on a warm start.** A **warm start** is coming back to the app while it is still sitting in the phone's background memory. Nothing has to load from zero. So coming back should show real content in under a second. A long wait here feels much worse than the same wait on a cold start. The person knows the app was already open, so they expect it to be instant.

The [enforcement chapter](../02-must-have/06-enforcement.md) covers how to make a machine check a rule instead of a person.

### Test on real low-end hardware

Test on a slow, cheap phone. Not only on your own phone, and not only on a simulator.

**What this means:** A **simulator** is a fake phone running in a window on your laptop. **Low-end hardware** means a cheap or old phone. Such a phone has a slow **processor**. The processor is the chip that does all the thinking. It also has little memory to work in.

A simulator on a fast laptop lies to you.

**What this means:** The simulator is borrowing your laptop's power, which is many times more than a real phone has. Everything looks smooth there. That smoothness is not real, and your users do not have your laptop.

Buy one cheap Android phone and one old iPhone. Test on those.

The things that break there are usually design-system choices: large blurs, big shadows, heavy list rows, unoptimised images.

**What this means:** The app stutters on the cheap phone. The cause is normally not some deep piece of code. It is a look-and-feel decision. Here are the four usual suspects. A strong frosted-glass **blur**. A big soft **shadow** under every card. List rows with too much packed into them. And images that were never shrunk down before being shipped. All four came out of your design system, so all four are yours to fix.

Think of a bicycle you only ever ride downhill. It feels perfect. Ride it uphill once and you find out what it really weighs. The cheap phone is the hill.

---

## 17.2 Fonts

Custom fonts cost real time and real bytes.

**What this means:** A **custom font** is a font you picked and ship as a file inside your app. It is not free. The user downloads that file, and the text on screen has to wait for it. A **system font** is the font the phone already has, and it costs nothing at all.

Here are the two choices side by side.

| Choice | What it costs you |
|---|---|
| System font | Free. Instant. Already supports OS font scaling. |
| Custom font | Bundle size + a loading strategy + fallback risk |

Those two rows need unpacking.

**System font:** the file is already on the phone. There is nothing to download and nothing to wait for. **OS** is short for "operating system" — the phone's own software, such as Android or iOS. **OS font scaling** is a setting inside that software. It lets a person make all text on the phone bigger or smaller. People with weak eyesight use it every day. The system font already obeys that setting, and you do not have to do anything to make that happen.

**Custom font:** you pay in three ways. First, it adds to your **bundle size**, which is the megabytes people have to download. Second, it forces you to decide a **loading strategy**, which is what the screen shows during the wait. Third, it carries **fallback risk**. The font file might fail to arrive. Then something else has to be shown in its place, and that something might look wrong.

If you use a custom font:

- **Subset it** — drop characters you do not need (but keep the ones your target languages need)

  **What this means:** A font file contains a **glyph** for every letter, digit and symbol it supports. A glyph is one drawn character. A font can hold thousands of them, including whole alphabets your app will never show. **Subsetting** cuts the unused ones out. The file gets much smaller, so people download less.

  The warning in the brackets matters. Say your app supports Hindi. If you cut the Hindi characters out, your Hindi users see rows of empty boxes where the words should be. So decide your languages first, then cut. The [languages chapter](../02-must-have/03-internationalization.md) covers which languages you are planning for.

- **Variable font** if you need 3+ weights — one file instead of five

  **What this means:** A **weight** is how thick the letters are. Regular, Medium and Bold are three weights. Normally each weight is its own separate file. A **variable font** is one single file that can produce every weight on its own. So if you need three or more weights, one variable font file beats five separate files.

  Ship five separate files and the user downloads five sets of the same letter shapes. That is five things to fetch. It is also five chances for one of them to arrive late. When that happens, some words on screen turn bold seconds after the rest.

  Below is the version to avoid. Five separate files for one font family. (`.woff2` is a common font file type on the web, and `Inter` is the name of the font.)

  ```
  Inter-Regular.woff2
  Inter-Medium.woff2
  Inter-SemiBold.woff2
  Inter-Bold.woff2
  Inter-ExtraBold.woff2
  ```

  Below is the version to use. One file that covers all of those weights.

  ```
  Inter-Variable.woff2
  ```

- Decide the loading behaviour:
  - `swap` = show fallback first, then swap (text visible, slight jump)
  - `block` = invisible text briefly (no jump, but blank text)
  - `swap` is usually right

  **What this means:** There is a gap between the screen appearing and your font file arriving. You must choose what happens during that gap. There is no third option where nothing bad happens.

  With `swap`, the phone shows the text right away in a **fallback font**. A fallback font is one that is already on the device. Your real font is swapped in later, the moment it arrives. The reader can start reading immediately. The cost is that the text shifts a little at the moment of the swap.

  With `block`, the phone shows nothing where the text should be until your font arrives. No shift, but the reader stares at a blank space.

  Pick `swap` in most cases. Readable text that moves slightly beats invisible text.

- Pick a fallback with **similar metrics**, so the swap barely moves

  **What this means:** **Font metrics** are a font's measurements. That means letter height, letter width and the spacing between letters. Now pick a fallback whose measurements are almost the same as your real font's. The same sentence then takes up almost the same space in both fonts. So the swap moves the text by a hair, instead of reshuffling the whole paragraph under the reader's eyes.

  Below is the version to avoid. A narrow real font falling back to a wide, differently shaped one. "Re-flows" means the words get laid out again and jump onto different lines.

  ```
  Real font:     Inter (narrow letters, short height)
  Fallback:      Georgia (wide letters, tall height)
  Result:        text visibly re-flows when the swap happens
  ```

  Below is the version to use. A fallback shaped almost like the real thing. "Sans-serif" is a plain font style. Its letters have no small decorative feet on the ends. Every phone already has one built in.

  ```
  Real font:     Inter
  Fallback:      the system sans-serif (very close measurements)
  Result:        the swap is barely noticeable
  ```

The [typography chapter](../01-foundations/04-typography.md) covers which text sizes and weights you actually need in the first place. Needing fewer weights is the cheapest saving available.

---

## 17.3 Icons

Ship only the icons you actually use. Never ship a whole icon set to draw a handful of symbols.

**What this means:** An **icon font** is a font file where each "letter" is a small picture. It sounds clever, and it is a trap: the file arrives whole. There is no way to send only the parts you used.

The block below lists three ways to deliver icons. The cross is the one to avoid, the ticks are the ones to use.

```
❌  Icon font      Ships all 900 glyphs to draw 40. No tree-shaking.
✅  Per-icon components   Only used icons ship.
✅  SVG sprite     Good on web. One request.
```

Reading those three lines in full:

- **Icon font.** The file holds 900 **glyphs**, which are drawn symbols. Your app uses 40 of them. All 900 still get downloaded. **Tree-shaking** is when the build tool spots the code you never used and leaves it out of the final package. The build tool is the program that packs your app up. It cannot see inside a font file, so it cannot tell which glyphs you used. None of that saving happens here.
- **Per-icon components.** Each icon is its own small **component**, meaning a reusable piece of screen. You **import** the ones you need. To import something is to write a line of code saying "bring this one piece in and use it here". The build tool can then see exactly which icons those are, so only those ones ship.
- **SVG sprite.** An **SVG** is a picture stored as drawing instructions, so it stays sharp at any size. A **sprite** is one file holding many of these icons together. On the web this means the browser makes one request instead of forty. A **request** is one trip out to a **server**, which is another computer on the internet holding your files. Every trip costs time, so forty trips make the screen fill in slowly.

Think of buying vegetables. The icon font is a sealed 900-item crate when you wanted 40 items. Per-icon components are picking your 40 off the shelf yourself.

Check your bundle after adding icons. If it grew by hundreds of KB, your delivery method is wrong.

**What this means:** Measure the size of your app package before adding icons. Then measure it again after. `KB` means kilobytes, and a thousand KB is roughly one megabyte. Forty small line drawings should cost very little. If the package suddenly grew by hundreds of KB, you are shipping the whole crate. Switch method rather than argue about it. Every one of those extra KB is time your users spend waiting.

The [icons chapter](../01-foundations/05-icons.md) covers picking the icons themselves.

---

## 17.4 Images

### Every image needs four states

Every image slot in your app must have a defined look for four different situations. Not one look plus three accidents.

**What this means:** An image can be on its way, arrived, broken, or never supplied at all. If you only design the "arrived" case, the other three cases design themselves, and they design themselves badly.

The block below names all four situations and what each one must show.

```
Loading   → placeholder at the exact final size (no layout jump)
Loaded    → the image
Failed    → a clear fallback, never a broken-image icon
Missing   → a defined default (avatar initials, a neutral block)
```

Line by line:

- **Loading.** The picture is still coming. Show a **placeholder** — a plain blank block — taking up exactly the space the real image will take. Because the space is already the right size, nothing moves when the picture lands. That is what "no **layout jump**" means: text does not suddenly shove downwards while someone is reading it.
- **Loaded.** The picture arrived. Show it.
- **Failed.** The picture was there but could not be fetched, maybe the network died. Show a clear stand-in that you designed. Never show the browser's default broken-image symbol — the torn-paper icon. That symbol tells the user your app is broken.
- **Missing.** There never was a picture. Somebody has no profile photo. Show a default you chose in advance: their initials in a coloured circle, or a plain neutral block.

Below is the version to avoid. Only one case was thought about.

```
Profile photo:
  photo exists      → show photo
  everything else   → whatever the browser decides to draw
```

Below is the version to use. All four cases were decided by you.

```
Profile photo:
  loading   → grey circle, same size as the photo
  loaded    → the photo
  failed    → initials on a coloured circle
  missing   → initials on a coloured circle
```

The [content states chapter](../02-must-have/02-content-states.md) covers this same four-way thinking for whole screens.

### Rules

- **Always reserve the space** before loading. Layout shift on scroll feels broken.

  **What this means:** Set aside the exact area the image will fill, before the image arrives. **Layout shift** is content jumping because something loaded late and shoved it. You have felt this yourself. You go to tap a link. An image loads in above it and everything slides down. You tap the wrong thing. Users blame the app for that, not their slow connection.

- Set a fixed aspect ratio for every image, written down in advance.

  **What this means:** An **aspect ratio** is the shape of the picture. It is the width compared with the height. `16:9` is wide, like a YouTube video. `1:1` is square, like an Instagram post. Write that ratio down in advance. Then the screen knows how much space to hold open before it has even seen the picture. Without it, the size of the space is a mystery until the file lands. Holding the space open early is the only thing that stops the jump.

  Below is the version to avoid. The space is unknown until the file arrives.

  ```
  Thumbnail: width 100%, height whatever the image turns out to be
  ```

  Below is the version to use. The space is known immediately.

  ```
  Thumbnail: width 100%, aspect ratio 16:9
  ```

- Serve the right resolution for the device (@2x/@3x, or `srcset`).

  **What this means:** **Resolution** is how many dots make up the picture. Sharp phone screens pack more dots into the same space. So they need a bigger copy of the image to look crisp. `@2x` and `@3x` are the names for those bigger copies on mobile. `srcset` is the web version. You list several sizes and let the browser pick the right one. Send one giant image to every phone and two bad things happen. You burn through the user's mobile data. And a cheap phone has to shrink that image down on the spot, which stalls the scroll.

- Modern formats (WebP / AVIF) with a fallback.

  **What this means:** **WebP** and **AVIF** are newer image file types. Take the same photo at the same visible quality. As a WebP or AVIF file it is far smaller than as an old JPG or PNG. Some older devices cannot read the new types at all. So you keep an older-format copy as a **fallback** for those devices. Skip the fallback and those users get an empty box where the picture should be.

- Lazy-load anything below the fold.

  **What this means:** **Below the fold** is everything the user has to scroll down to see. **Lazy-loading** means you do not fetch those images until the user is about to reach them. On a long feed this is the difference between downloading 60 images and downloading 6.

- Set a max file size and check it in CI.

  **What this means:** Decide the largest size a single image file is allowed to be. Write that number down. Then have **CI** reject anything bigger. CI is the machine that checks every change. Without an automatic check, one person drops in an 8MB photo on a Friday afternoon. Nobody notices until users complain that the app eats their data.

  Below is the version to avoid. A limit that only lives in someone's head.

  ```
  "Try to keep images small, guys."
  ```

  Below is the version to use. A limit a machine enforces.

  ```
  CI check: any image over the agreed limit fails the build
  ```

---

## 17.5 App icon and store assets

The app icon, the opening screen and the app store pictures are part of your design system too. Make them properly and store them with everything else.

Part of the design system, even though they live outside the app UI.

**What this means:** These files never appear inside a screen of your app, so people forget them. But they follow the same colours and the same rules, and they are the very first thing a user sees. That makes them design system work, not an afterthought.

Here is everything you must produce.

- App icon in **every** required size

  **What this means:** The phone shows your icon at many sizes — home screen, settings list, search results, notifications. Each size needs its own file. Miss one and the phone stretches another one, which looks blurry.

- Newer platforms also want **dark** and **tinted** icon variants

  **What this means:** Recent phone systems let people change how their home screen looks. They can turn on **dark mode**, which means a dark background with light text. They can also tint every icon to a single colour. Your icon needs its own version for each of those. If you do not supply them, the phone invents its own version of your icon. The result is usually ugly.

- Notification icon (often monochrome, different rules)

  **What this means:** The tiny icon in the status bar when a notification arrives. On some systems it must be **monochrome** — one single colour, usually a plain white shape on a transparent background. Your full-colour app icon shrunk down will not work there; it comes out as a solid blob.

- Splash screen assets

  **What this means:** The **splash screen** is the short opening screen with your logo. The phone shows it while the app starts up. It needs its own image files, in the sizes the phone asks for. Leave them out and the first thing every user sees is a blank white rectangle. The [app shell chapter](01-shell-and-lifecycle.md) covers the opening screens in detail.

- Widget assets, if you have widgets

  **What this means:** A **widget** is a small block of your app. It sits on the phone's home screen, outside the app itself. If you offer widgets, they need their own artwork made at their own sizes. Reuse artwork built for inside the app and it comes out stretched or cut off on the home screen.

- Store screenshots — these are the first UI most users ever see

  **What this means:** The pictures on your app store page. Most people look at those screenshots and decide whether to install, before they have ever opened the app. So in practice they are the most-viewed screens you own.

Keep the source files with the design system, not on one person's laptop.

**What this means:** A **source file** is the editable original. It is the layered file the icon was actually drawn in. It is not the flat PNG picture you saved out of it. Saving that flat copy is called **exporting**. From a source file you can make every size again, and change the drawing. From an exported PNG you can do neither. So keep those originals in **version control**. That is the shared system which stores every version of every file. Put them right beside the rest of the design system.

Below is the version to avoid. (`.psd` is the editable file type of a drawing program, and Priya is a designer on the team.)

```
app-icon-final-v3-REAL.psd   → on Priya's laptop
```

Below is the version to use.

```
design-system/assets/app-icon/app-icon.source   → in version control, everyone can get it
```

If the only copy lives on one laptop, then that laptop breaking, or that person leaving, costs you the icon.

---

## 17.6 Theme switching

Switching between light and dark must never show a flash of the wrong colour.

**What this means:** A **theme** is a whole set of colours used together. Most apps have a light theme and a dark theme. **Dark mode** is the dark one. Now think about the order things happen in. The app paints the light background first. Only afterwards does it work out that dark mode is on. In that gap the user sees a white flash. It lasts a moment, and it is horrible in a dark room at night.

The block below shows the wrong behaviour and the right one.

```
❌  Switch to dark mode → white flash → dark
✅  No flash, ever
```

On web this usually means setting the theme before first paint.

**What this means:** **First paint** is the very first moment anything at all is drawn on the screen. The theme decision has to happen before that moment, not after it. Let the page draw first and find out the theme second, and the flash has already reached the user's eyes. Nothing you do afterwards can take it back.

On mobile, avoid remounting the whole tree on a theme change.

**What this means:** The "tree" is everything currently built on screen, with screens holding sections holding buttons. **Remounting** it means throwing all of that away and building it again from nothing. It is slow, it is visible, and it can lose where the user was. A theme change should repaint the colours, not rebuild the app.

Also test switching the theme **while the app is open**, and while a modal is open.

**What this means:** Most people test theme switching by restarting the app. Restarting hides all the bugs, because everything gets built fresh. Test it live instead. Leave the app open and flip the phone into dark mode while you watch. Then do the whole thing again with a **modal** open. A modal is a box that sits on top of the screen and blocks whatever is behind it. Modals are drawn separately from the rest of the screen. That makes them the piece most likely to be left behind in the old colours. You end up with a glaring white box floating on a dark app. The [layering chapter](../02-must-have/04-layering.md) explains what sits on top of what.

The [colour chapter](../01-foundations/02-color.md) covers how to define the two themes so a switch is only a change of values.

---

## 17.7 Expensive things to watch

Some visual effects cost far more phone power than they look like they cost. Each one below has a cheaper swap that looks nearly the same.

| Costly | Cheaper alternative |
|---|---|
| Large blur radius | Smaller blur, or a semi-transparent solid |
| Animated shadows | Animate opacity of a pre-rendered shadow |
| Animating width/height/top/left | Animate `transform` and `opacity` |
| Long non-virtualised lists | Virtualise |
| Many nested transparent layers | Flatten |
| Re-rendering on every keystroke | Debounce, or isolate the input |

Every row of that table needs explaining, so here they are one at a time.

- **Large blur radius → smaller blur, or a semi-transparent solid.** **Blur radius** is how strong a blur is. It gives you the frosted-glass look behind a menu. The phone has to work out a new colour for every single dot under that blur. A bigger radius means far more of that work, every frame. So either turn the radius down, or drop the blur and use a plain colour that is partly see-through. Most users cannot tell the difference. The cheap phone can, and it shows up as a stuttering menu.

- **Animated shadows → animate the opacity of a shadow drawn in advance.** A **shadow** is the soft dark edge under a card. It makes the card look like it is floating. Redrawing that softness on every frame is expensive. Instead, draw the shadow once and leave it there. Then only fade it in and out. **Opacity** is how see-through something is. Changing opacity is one of the cheapest things a phone can do.

- **Animating width/height/top/left → animate `transform` and `opacity`.** Change an item's width or position and everything near it may have to move too. The phone has to work all of that out again. **Transform** moves, scales or rotates an item without touching the layout around it. So the phone can do it almost for free. You get the same visible result for a fraction of the cost.

  Below is the version to avoid. Growing a card by changing its real size. The numbers are pixels, so this card goes from 100 pixels wide to 120.

  ```
  animate: width 100 → 120,  height 60 → 72
  ```

  Below is the version to use. The same growth, done with a transform. `scale 1 → 1.2` means "draw it at 1.2 times its size" without the card's real size ever changing.

  ```
  animate: transform scale 1 → 1.2
  ```

- **Long non-virtualised lists → virtualise.** Picture a feed of 5000 rows. Only about eight of them fit on the screen at once. Building all 5000 is pointless work, and it can use enough memory to make the phone shut your app down. To **virtualise** is to build only the rows that are visible right now. A row is thrown away once it scrolls off. Think of a ticket counter at a station. You serve the people at the window, not all 5000 in the queue at once.

- **Many nested transparent layers → flatten.** "Nested" means boxes inside boxes inside boxes. Now stack several see-through layers on top of each other. For every dot on screen, the phone has to mix all those layers together to find the final colour. That is a pile of work repeated every frame, and the scroll starts to stutter. **Flattening** means using one solid colour that already looks like the mixed result, instead of stacking four see-through ones.

- **Re-rendering on every keystroke → debounce, or isolate the input.** To **render** is to build the picture of a piece of UI. A **re-render** is building that picture again. Say typing one letter in the search box rebuilds the whole screen. The app then feels sticky and slow under your fingers as you type. To **debounce** is to wait until the person stops typing for a moment. Only then do you do the expensive work, once. To **isolate the input** means arranging things so only the typing box updates as you type. Everything around it is left alone.

The [movement chapter](../01-foundations/06-states-elevation-motion.md) covers how these animations should look. This section is about what they cost.

---

## 17.8 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] Written performance budget, measured in CI. The speed limits exist as written numbers. A machine checks them on every change.
- [ ] Tested on a real low-end phone. That means a cheap or old phone you can hold. A simulator on your laptop does not count.
- [ ] Font strategy decided (system, or subset + variable + swap). Either use the font the phone already has. Or ship a cut-down variable font that shows fallback text first.
- [ ] Icons tree-shake. Only the icons you really use end up in the downloaded package.
- [ ] Images: 4 states, reserved space, right resolution, size cap. Loading, loaded, failed and missing are all designed. The space is held open before the picture arrives. The right size is sent to each device. A maximum file size is enforced by CI.
- [ ] All app icon variants produced, sources version-controlled. Every required size exists, plus the dark and tinted versions. The editable originals live in the shared system, not on a laptop.
- [ ] No flash on theme switch. Moving between light and dark never shows a burst of the wrong colour.
- [ ] Only `transform` and `opacity` are animated. Movement is done by shifting and fading. Real sizes and positions are left alone.
