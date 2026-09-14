# 6. States, Elevation and Motion (how things look, float and move)

**In one line:** Decide three things in advance. What a button looks like when it is pressed. How high things float above the page. How fast things move. Then use only those decisions, everywhere in the app.

**Why this chapter exists:** This chapter covers three topics at once. Each one gets its own numbered section further down. Here is what the three names mean. **States** means what a thing looks like right now — normal, being pressed, switched off, loading. **Elevation** means how high something looks like it is floating above the page. **Motion** means animation, the movement things make when they appear, leave or change. All three are invisible in a screenshot and very visible in the real app. A screenshot of your app can look perfect. The real app can still feel broken. That happens when nothing reacts to your touch.

Here is the point in plain words. Some apps only *have a list of values*. Better apps *have a system*. These three topics are what separates the two. Anyone can write down a list of colours. Deciding what happens when a finger lands on a button is the harder half. It is also the half that users can feel.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gaps exist, what a pressed button looks like. Like a school uniform rule sheet, but for a screen. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `pressedOpacity = 0.6`. After that everyone types `pressedOpacity` instead of typing `0.6`. Change it in one place and it changes everywhere. |
| **Component** | One reusable piece of screen that you build once and use in many places. A button is a component. A card is a component. |
| **Icon** | A tiny picture that stands for an action or a thing. The little X you tap to close a box is an icon. |
| **Label** | The words written on a button or a row. The word "Send" on a Send button is its label. |
| **State** | What a thing looks like at this exact moment. The same button has a normal state, a pressed state and a switched-off state. Like a traffic light: same lamp, three states. |
| **Interactive** | Something you can touch, tap or click. A button is interactive. A paragraph of text is not. |
| **Opacity** | How see-through something is. `1` means fully solid. `0` means invisible. `0.6` means you can partly see the background through it. |
| **Overlay** | A thin see-through layer of colour laid on top of something. It shades the thing underneath without hiding it. |
| **Hover** | On a computer with a mouse, moving the pointer over something without clicking it. Phones have no hover, because a finger is either touching or not. |
| **Focus** | The one thing on screen that the keyboard is currently pointing at. Press Tab on a computer and focus moves to the next item. |
| **Focus ring** | The visible outline drawn around the focused item. It tells a keyboard user where they are on the screen. |
| **Accent** | Your app's one main stand-out colour. The colour of your main button. |
| **Touch target** | The invisible area that responds to a finger tap. It is often bigger than the picture you can see. |
| **hitSlop** | A setting that grows the tappable area outwards without changing how the thing looks. |
| **Elevation** | How high something looks like it is floating above the page. Higher things sit on top and usually cast a bigger shadow. |
| **Shadow** | The soft dark patch drawn under a floating thing, which makes it look lifted off the page. |
| **Dark mode** | The version of your app with a dark background and light text, used at night. |
| **Surface** | The background colour of a panel, card or sheet — the "paper" your content sits on. |
| **Card** | A rectangle on screen holding one item's information. One video on YouTube's home page sits in a card. |
| **Chip** | A tiny rounded label, usually one or two words. The small "Music", "Gaming" buttons at the top of YouTube are chips. |
| **Dropdown** | A small list that drops open when you tap something, then closes when you pick an item. |
| **Popover** | A small box that pops up next to the thing you tapped, pointing at it. |
| **Modal** | A box that opens on top of the screen. It blocks everything behind it. You have to answer it or close it first. |
| **Sheet** | A panel that slides up from the bottom of the screen. The "Share to..." panel on Instagram is a sheet. |
| **Dialog** | A small box asking you a question, with buttons like "Cancel" and "Delete". |
| **Motion** | Animation. Anything that moves, fades or grows on screen instead of appearing instantly. |
| **Transition** | One animation that takes the screen from one state to another. |
| **Easing** | Whether a movement starts slow and ends fast, or starts fast and ends slow. It is the *feel* of the movement, separate from how long it lasts. |
| **Linear** | Movement at exactly the same speed the whole way, with no slowing down or speeding up. |
| **Transform** | Moving, turning or resizing something without redrawing it. Cheap for the phone to do. |
| **Scale** | Making something bigger or smaller on screen. Scale `1.0` is normal size. Scale `1.5` is half as big again. |
| **Layout** | Working out where every item on the screen sits, and how big each one is. |
| **Frame** | One single still picture that the screen draws. A phone draws about 60 frames every second, which is what makes movement look smooth. |
| **Cheap / expensive** (about drawing) | Nothing to do with money. "Cheap" means the phone does very little work to draw it. "Expensive" means the phone does a lot of work. Expensive things can make movement stutter on an older phone. Watch out: "looks cheap" is different, and keeps its everyday meaning of badly made. |
| **Low-end phone** | A cheap or old phone with a slow chip inside. Plenty of your users have one. |
| **Spinner** | The small circle that spins round and round while you wait for something to load. |
| **Janky** | Movement that stutters instead of gliding. The app feels like it is skipping. |
| **ms** | Short for millisecond. One thousand milliseconds make one second. So `250ms` is a quarter of a second. |
| **px** | Short for pixel, a unit of length on a screen. A tiny dot. |
| **pt** | Short for "point", another unit of length on a screen. Think of it like millimetres, but for phone screens. |
| **Haptics** | The small buzz your phone makes when you touch something. You feel it, you do not hear it. |
| **OS** | Short for "operating system" — Android or iOS, the software the phone itself runs. |
| **QA** | Short for "quality assurance". The stage where someone tests the app and writes down everything that is wrong. |
| **Accessibility settings** | The phone settings that make a phone easier to use for people with different needs. Bigger text, less movement, and so on. |
| **Server** | A computer far away that your app talks to over the internet. It holds things like your account and your messages. |
| **Network request** | Your app asking a server a question and waiting for the answer. It is never instant. |
| **Padding** | Empty space inside a box, between the edge of the box and the thing inside it. |
| **Blur** | How soft and spread out the edge of a shadow is. A big blur means a wide, fuzzy edge. |
| **Toggle** | A small switch you flip on or off, like the one for aeroplane mode. |
| **Hex colour code** | A colour written as a `#` followed by six characters, like `#121212`. It names one exact colour. |
| **WCAG** | The international rulebook for making screens usable by everyone, short for "Web Content Accessibility Guidelines". Rules in it have numbers, like 2.5.8. |

---

## 6.1 Interaction states

Write down what every touchable thing looks like when it is pressed, switched off, or selected. Do this once, for the whole app.

If you do not decide these, every component invents its own version. The app then feels uneven to use. It can still look perfectly fine in screenshots.

**What this means:** A **component** is one reusable piece of screen, like a button. Say you never decide what a pressed button looks like. The person building the login button picks one thing. The person building the delete button picks something else. In a still picture nobody notices. In the real app you feel it straight away. One button dims when you touch it. The other flashes grey. The app feels like it was built by strangers who never spoke to each other.

Think of a school with no uniform rule. Every class turns up in something slightly different. No single student looks wrong. Line them all up in the hall and the whole year looks a mess.

Here are the five values to write down. Each one is a **token** — a name for a value, like `x = 5` in maths.

| Token | Value | Applies to |
|---|---|---|
| `pressedOpacity` | 0.6 | Whole element while finger is down |
| `disabledOpacity` | 0.4 | Disabled buttons, rows |
| `hoverOverlay` | 4% of text colour (light) / 6–8% (dark) | Desktop / web only |
| `selectedBg` | `accent` at 12% | Selected rows, chips |
| `focusRing` | 2px `accent`, 2px offset | Keyboard focus |

That table is dense, so here is each row in words.

- `pressedOpacity` **0.6**: while a finger is held down, the whole thing goes to 60% solid. **Opacity** is how see-through something is, where 1 is fully solid and 0 is invisible. It fades a little, so you can see you are touching it. Leave this out and the button feels dead under the finger.
- `disabledOpacity` **0.4**: a button that cannot be used right now drops to 40% solid. That is much fainter than a pressed button, so the two are never confused. If a switched-off button looks normal, people tap it again and again. Then they decide the app has frozen.
- `hoverOverlay` **4% of text colour in light mode, 6–8% in dark mode**: this one is for computers with a mouse. When the pointer sits over a row, lay a very faint layer of the text colour over it. Four per cent is barely there, and barely there is enough — in light mode. In dark mode it is *too* barely there. A 4% layer of light text over a dark surface is close to invisible, so dark mode needs 6% to 8% to show at all. Check the hover on both themes with your own eyes before you lock the numbers in. **Hover** only exists with a mouse. Phones have no hover, because a finger is either touching or not touching. Without this, a mouse user cannot tell which row they are about to click.
- `selectedBg` **`accent` at 12%**: a row or chip you have chosen gets a coloured background. The colour is your main app colour at 12% strength. That is a pale version of it, not the full colour. Without this, people lose track of what they already picked.
- `focusRing` **2px `accent`, 2px offset**: an outline 2 pixels thick, in your main colour. It is drawn 2 pixels away from the edge, so it never touches the thing itself. This shows keyboard users where they are on screen. **px** is short for pixel, a tiny dot on the screen. Leave the ring out and a keyboard user is lost, because nothing on screen shows where they are. The offset is the flexible part of this token. In a very tight bar there may be no room for 2 pixels of air, and an offset of 0 is fine. The part that is not flexible is the contrast: the ring must always score at least 3:1 against whatever it sits on. Adjust the offset if you must, never the visibility.

Below is what happens when nobody wrote those numbers down. Three buttons, three different ideas of "pressed".

```
LoginButton    pressed → opacity 0.5
DeleteButton   pressed → background turns grey
ShareButton    pressed → nothing happens at all
```

Below is the version to use. One number, named once, used by everything.

```
pressedOpacity = 0.6

LoginButton    pressed → opacity pressedOpacity
DeleteButton   pressed → opacity pressedOpacity
ShareButton    pressed → opacity pressedOpacity
```

### When see-through is not allowed

The table above leans on **opacity** — a pressed button fades to 60%, a disabled one to 40%. That works because most apps sit on their own background. Fade a button and the app's own surface shows through, which is harmless.

Some apps do not sit on their own background. An overlay floating over a video call, a picture-in-picture window, a widget on the desktop — these sit on top of *someone else's* picture. Fade a button there and the stranger's picture leaks through your button. A face from the call shows through your disabled Save button. That looks broken, and it can even leak something private.

For apps like that, keep every state fully solid and show the state with **colour changes** instead:

- **Pressed / hover**: move the background one or two steps along your colour ramp instead of fading. The ramp is the light-to-dark scale from the [colour chapter](02-color.md). One step along it is a visible change, and it stays 100% solid.
- **Disabled**: swap the colours instead of fading — text drops to your muted text role, the background drops to a quieter surface role. The button looks switched off, and nothing shows through it.

Below is the version to avoid in an app that floats over other content.

```
DisabledButton   opacity 0.4      <- the video behind bleeds through the button
```

Below is the version to use there.

```
DisabledButton   text: textMuted, background: surfaceAlt, opacity 1.0
```

Both approaches are correct. Pick the one that matches where your app lives, write it down once, and use it everywhere. Do not mix the two.

### The full state list every interactive component needs

There are eight states a touchable thing can be in. Here they are, in the order a user usually meets them.

```
default → hover → pressed → focused → selected → disabled → loading → error
```

Reading that line: **default** is normal, sitting there. **hover** is the mouse pointer over it. **pressed** is a finger or mouse held down on it. **focused** is the keyboard pointing at it. **selected** is "this one is chosen". **disabled** is switched off and unusable. **loading** is working on it, please wait. **error** is it went wrong.

Not every component needs all 8. But you must **decide** for each one, not discover it in QA.

**What this means:** A plain text link probably never has a "selected" state, and that is fine. What is not fine is finding out during testing that nobody thought about it. **QA** is the stage where a tester goes through the app and writes down everything wrong. Deciding "this button has no selected state" is a decision. Never thinking about it is not.

Below is the wrong way to handle this. The states get discovered one at a time, by accident.

```
Week 1: build button, handle default + pressed
Week 4: tester asks "what does disabled look like?"  → someone guesses
Week 6: tester asks "what about loading?"            → someone else guesses
```

Below is the right way. You walk the list of 8 once, before building, and write down an answer for each.

```
Button:
  default   → normal
  hover     → hoverOverlay
  pressed   → pressedOpacity
  focused   → focusRing
  selected  → not used
  disabled  → disabledOpacity, taps ignored
  loading   → spinner replaces the label, taps ignored
  error     → not used
```

"Not used" is a valid answer. "We never thought about it" is not.

### Pressed feedback must be instant

The moment a finger lands, the button must react. Do not make the user wait.

Any delay above ~100ms feels broken. Do not wait for the network response to show the press. Show the press immediately, show the result when it arrives.

**What this means:** **ms** is short for millisecond. One thousand milliseconds make one second, so 100ms is one tenth of a second. A **server** is a computer far away that your app talks to over the internet. A "network response" is the answer coming back from it. That answer is never instant. Say your app waits for it before showing the press. The user taps and sees nothing happen. After a second they tap again. Now you have sent the same request twice, so they might buy the same thing twice.

Think of a light switch. You flick it and it clicks under your finger straight away. The room lights up a moment later. The click is not waiting for the bulb.

Below is the wrong order. The visible reaction is stuck behind the internet.

```
finger down → send request to server → wait 800ms → show pressed look → show result
```

Below is the right order. The reaction is immediate and the result catches up later.

```
finger down → show pressed look (0ms) → send request → show result when it arrives
```

---

## 6.2 Touch targets

> **Minimum 44 × 44 points. Not negotiable on mobile.**

**What this means:** A **touch target** is the invisible area that reacts when a finger taps. On a phone, it must be at least 44 points wide and 44 points tall. `pt` is a unit of length on screens, a bit like millimetres. 44 × 44 is roughly the size of an adult fingertip. "Not negotiable" means there is no case where a smaller one is acceptable. Make it smaller and people miss it. They tap two or three times, get annoyed, and blame your app.

The *visible* icon can be 20px. The *tappable* area must still be 44.
Use padding or `hitSlop` to grow it.

**What this means:** The picture you can see and the area that responds are two different things. Draw a small 20px icon if you want. Around it, leave an invisible border. That grows the whole area that reacts to 44 × 44. **Padding** is empty space inside a box, around the thing inside it. **hitSlop** is a setting that grows the tappable area outwards without changing how anything looks.

Below is the version to avoid. The area that responds is only as big as the drawing.

```
CloseIcon   drawn 20 × 20   tappable 20 × 20    <- misses half the time
```

Below is the version to use. Same drawing, bigger invisible target.

```
CloseIcon   drawn 20 × 20   padding 12 all round   tappable 44 × 44
```

12 + 20 + 12 = 44. The padding on each side does the work.

### Desktop is smaller, but still has a floor

The 44 × 44 rule is for fingers. A mouse pointer is far more precise than a fingertip, so a desktop-only app may go smaller — but not endlessly smaller.

**What this means:** On a desktop app driven by a mouse, the floor is **24 × 24** points per target. That number comes from the accessibility standard for pointers (the rule called WCAG 2.5.8). A comfortable working size is **32 × 32**. Below 24, even a mouse user has to slow down and aim, and anyone with a tremor in their hand misses entirely.

Two warnings before you use the smaller numbers.

- They apply only while the app is truly pointer-only. The day your app ships on a touch screen — a tablet, a laptop with touch, a phone — the 44 rule comes back for that version. Write that down now, so nobody has to rediscover it later.
- The visible-versus-tappable trick still applies. The icon can stay 20px; padding grows the tappable area to the floor.

Also: keep 8px minimum between two tap targets, or people hit the wrong one.

**What this means:** Two buttons must have at least 8 pixels of gap between their tappable areas. A fingertip is wide, and it covers more than one point. If two targets touch each other, some taps land on the wrong one. The user knows they aimed correctly, so they decide the app is broken.

Below is the version to avoid. The edit and delete buttons sit right against each other.

```
[ Edit ][ Delete ]     gap 0   <- one wrong tap deletes their work
```

Below is the version to use.

```
[ Edit ]  [ Delete ]   gap 8
```

---

## 6.3 Elevation (shadows)

**Elevation** is how high something looks like it is floating above the page. A card sits a little above the page. A dialog floats well above everything.

Define 4 levels tied to **meaning**, not to a look.

**What this means:** Do not name your shadows after how strong they are. Name them after what kind of thing uses them. Then the question "which shadow does a dropdown get?" has one answer, forever. Name them by strength instead and every person who builds a dropdown decides again from scratch. You end up with ten slightly different shadows, and no way to fix them all at once.

| Token | Meaning | Used by |
|---|---|---|
| `none` | Flat on the page | Most things |
| `sm` | Slightly raised | Cards, chips |
| `md` | Floating above content | Dropdowns, popovers |
| `lg` | Modal layer | Sheets, dialogs |

Some of those words, plainly. A **card** is a rectangle holding one item's information. A **chip** is a tiny rounded label like the "Music" button at the top of YouTube. A **dropdown** is a list that drops open when you tap something. A **popover** is a small box that pops up next to what you tapped. A **sheet** is a panel that slides up from the bottom. A **dialog** is a small box asking a question, with buttons like "Cancel" and "Delete". **Modal** means it blocks the screen behind it until you deal with it.

Notice the pattern in the table. Things that lie flat on the page get no shadow at all. Things that open on top of everything else get the biggest one. The more a thing wants your attention, the higher it floats.

Below is the version to avoid. The shadow is chosen by feel, one screen at a time.

```
HomeCard        shadow: soft grey, 3px
SettingsCard    shadow: soft grey, 6px
ProfileCard     shadow: dark grey, 2px
```

Below is the version to use. All cards are cards, so all cards get the card level.

```
HomeCard        elevation: sm
SettingsCard    elevation: sm
ProfileCard     elevation: sm
```

### A good shadow is two shadows

Draw two shadows on top of each other, not one. One shadow always looks cheap.

Below are the two shadows, with their exact numbers. Three words to read first. `y` is how far down the shadow is pushed. `blur` is how soft and spread out its edge is. `opacity` is how dark it is, so `0.10` means 10% dark, which is quite faint.

```
Shadow 1 (contact)  — tight, darker:  y 1px, blur 2px,  opacity 0.10
Shadow 2 (ambient)  — wide, softer:   y 4px, blur 12px, opacity 0.06
```

The two shadows have names in that block. The **contact** shadow is the dark line right where the object touches the surface below it. The **ambient** shadow is the wider, softer patch made by the general light in the room.

The tight one glues the object to the surface. The wide one gives depth.

**What this means:** Look at a book lying on a table in daylight. Right where the book meets the table there is a thin dark line. Further out there is a wider, much fainter grey patch. Your eye needs both to believe the book is really resting there. One shadow alone gives you a grey smudge that looks stuck on.

### Dark mode does not use shadows

**Dark mode** is the night version of your app, with a dark background and light text. In dark mode, stop using shadows. Change the background colour instead.

Shadows are almost invisible on a dark background.
In dark mode, express elevation with a **lighter surface colour** instead.

**What this means:** A shadow is a dark patch. On a dark background, a dark patch is invisible. So dark mode uses a different signal for height: the higher a thing floats, the lighter its own background gets. A **surface** is the background colour of a panel or card — the "paper" your content sits on.

```
Light mode:  same color + bigger shadow  = higher
Dark mode:   lighter color + no shadow   = higher
```

Below is the version to avoid in dark mode. The shadow is still there and does nothing you can see.

```
Dark mode dialog:  background #1A1A1A  +  big shadow   <- looks flat, glued down
```

Below is the version to use.

```
Dark mode page:    background #121212
Dark mode card:    background #1E1E1E   (lighter = higher)
Dark mode dialog:  background #2A2A2A   (lighter still = higher still)
```

Those `#` codes are **hex colour codes**, a way of writing one exact colour. `#121212` is a very dark grey. `#2A2A2A` is a slightly lighter grey. As the characters climb, the grey gets lighter, and the thing looks like it floats higher.

### The exception: floating over content you do not control

The "no shadows in dark mode" rule has a hidden assumption: that the thing behind your surface is *your own* dark background. Usually it is. Sometimes it is not.

**What this means:** Some apps float on top of someone else's picture. An overlay window sitting over a video call. A picture-in-picture player over a web page. A widget over whatever wallpaper the user chose. Behind surfaces like these, the background can be anything — including bright white, the moment somebody shares a white slide in the call.

Against a bright background, "lighter surface = higher" stops working. Your dark panel is *darker* than what is behind it, and without a shadow its edge melts straight into the bright picture. Nobody can see where your window ends and the call begins.

So for a surface that floats over content you do not control, **keep the shadow in dark mode too**. Keep the lighter-surface steps as well — inside your own window they still do their job. The shadow's job is only the outer edge.

Below is the version to avoid for a floating overlay.

```
Dark overlay over a call:  no shadow   <- edge vanishes on a shared white slide
```

Below is the version to use.

```
Dark overlay over a call:  lighter surfaces inside  +  a shadow on the outer edge
```

This is an exception, not a new rule. A normal dark-mode card inside your own app still gets no shadow.

### Warning

Large blurs are expensive on low-end phones. Keep the blur radius small, and never animate a shadow.

**What this means:** "Blur radius" is how far a shadow's soft edge spreads. "Expensive" here is about effort, not money. A **low-end phone** is a cheap or old phone with a slow chip inside. A screen draws one still picture after another, and each still picture is called a **frame**. A phone draws about 60 frames every second. A big blur makes the phone do a lot of work for every one of those frames. On a cheap or old phone that work shows up as stuttering. "Do not animate shadows" means never make a shadow grow or shrink over time. Doing that forces the phone to redo the expensive work 60 times a second. The whole screen then stutters, not only the shadow.

Below is the version to avoid.

```
Card tapped → animate shadow blur from 2px to 40px over 250ms
```

Below is the version to use. Same idea of lifting, done cheaply.

```
Card tapped → animate scale from 1.0 to 1.02 over 150ms
```

**Scale** means making something bigger or smaller. Scale `1.0` is normal size, and `1.02` is 2% bigger. The card looks like it lifted towards you. The phone barely has to work for it.

---

## 6.4 Motion

**Motion** means animation — anything that moves, fades or grows on screen instead of appearing instantly.

Undefined motion is why apps feel janky even when they look fine.

**What this means:** "Janky" means the movement stutters instead of gliding. "Undefined motion" means nobody wrote down how long things should take. Every animation in the app then runs at its own speed. Screenshots cannot show speed. So the app photographs beautifully and still feels wrong in the hand.

### Durations — only three

You are allowed three animation lengths. Not four, not fifteen. Keep more than three and nobody knows which one to pick. Two screens that do the same job then move at different speeds, and the app feels thrown together.

| Token | Value | Use |
|---|---|---|
| `fast` | 150ms | Press feedback, toggles, small fades |
| `base` | 250ms | Most transitions, expanding a card |
| `slow` | 400ms | Full screen changes, sheets |

`ms` is milliseconds, and 1000ms is one second. So `fast` is 150 thousandths of a second, and `slow` is nearly half a second. A **transition** is one animation carrying the screen from one state to another.

Anything longer than 400ms feels slow. Anything under 100ms is not seen.

**What this means:** These two numbers are the edges of the useful range. Past 400ms the user is waiting for your animation to get out of the way. Below 100ms the eye cannot follow it, so the animation was work for nothing.

Below is the version to avoid. Every animation got its own hand-picked number.

```
Toggle switch     180ms
Card expand       220ms
Sheet slide up    600ms
Tab change        90ms
```

Below is the version to use.

```
Toggle switch     fast   (150ms)
Card expand       base   (250ms)
Sheet slide up    slow   (400ms)
Tab change        fast   (150ms)
```

### Easing — only two or three

**Easing** is whether a movement starts slow or starts fast. Same distance, same duration, different feel. You are allowed two or three of these, and no more. Every extra one is another chance for two screens to disagree with each other.

| Token | Curve | Use |
|---|---|---|
| `standard` | ease-in-out | Movement inside the screen |
| `decelerate` | ease-out | Things **entering** (start fast, settle) |
| `accelerate` | ease-in | Things **leaving** (start slow, exit fast) |

Reading that table: `ease-in-out` starts slow, speeds up in the middle, slows down at the end. `ease-out` starts fast and slows down as it arrives. `ease-in` starts slow and speeds up as it goes.

Think of a bus. It pulls away from the stop gently and builds up speed — that is a thing leaving, `accelerate`. It comes into the next stop fast and eases to a halt — that is a thing arriving, `decelerate`.

Never use `linear` for movement. It looks robotic.
Linear is only for continuous things like a spinner.

**What this means:** **Linear** means exactly the same speed the whole way. There is no slowing down and no speeding up. Nothing in the real world moves like that. Your eye reads it as machine-like and wrong, and the app feels cheap. There is one exception: something that never starts and never stops. A **spinner** is the circle that goes round while you wait. It has no beginning and no end to smooth out, so linear is the right choice there.

Below is the version to avoid. A sheet slides in at one flat speed and slams to a stop.

```
Sheet slides up   →  easing: linear
```

Below is the version to use. It arrives quickly, then settles.

```
Sheet slides up   →  easing: decelerate
```

### Rules

Four rules for every animation you write.

- Animate `transform` and `opacity`. These are cheap.
- Avoid animating `width`, `height`, `top`, `left`, shadows. These are expensive.
- Motion should explain *where something came from*. A sheet slides up from the bottom because that is where it lives.
- If the animation does not add meaning, remove it.

Each rule, in plainer words. In these four rules, "cheap" and "expensive" are about how much work the phone has to do. Nothing here costs money.

**Rule one.** A **transform** moves, turns or resizes something that is already drawn. The phone slides the finished picture around, which is quick work. **Opacity** is how see-through a thing is, and fading is quick too. These two are your animation toolkit. Stick to them and the movement stays smooth, even on an old phone.

**Rule two.** `width` and `height` are how wide and tall something is. `top` and `left` are where its edge sits. Change any of those and the phone has to work out the **layout** again. Layout means the position and size of everything on the screen. It has to do that for every frame, 60 times a second. On a cheap phone the movement stutters, and the app looks broken.

Below is the version to avoid. It changes the real size, so the phone works out the layout again and again.

```
Card grows  →  animate width from 200 to 300
```

Below is the version to use. It draws the card once and stretches the finished picture.

```
Card grows  →  animate transform scale from 1.0 to 1.5
```

**Rule three.** Movement should answer the question "where did this come from?". A sheet lives below the bottom edge of the screen. So it slides up from the bottom, and it slides back down when it closes. If it faded in from the middle instead, the user learns nothing about where it lives. They then have to hunt for it all over again next time.

**Rule four.** If you remove an animation and nothing gets harder to understand, that animation was decoration. Delete it. Every animation costs the user time.

### Reduce motion

The OS has a "reduce motion" setting. Respect it.

**What this means:** **OS** is short for operating system — Android or iOS, the software the phone itself runs. Both have a setting called "reduce motion". You find it in the **accessibility settings**. Those are the phone settings that make a phone easier to use for people with different needs. Some people turn reduce motion on because sliding and zooming screens make them feel dizzy or sick. Your app can read that setting, and it must obey it. Ignore it and you make those people feel physically ill while using your app.

```
reduce motion ON  →  replace slide/scale with a simple cross-fade,
                     or no animation at all.
                     Never keep the movement and only make it quicker.
```

**What this means:** In a "cross-fade" the old thing fades out while the new thing fades in. Nothing slides and nothing grows. That is the replacement. Making the same slide happen faster does not help. The movement itself is the problem, not how long it lasts. A quick slide still makes a dizzy person dizzy.

Below is the version to avoid.

```
reduce motion ON  →  sheet still slides up, but in 100ms instead of 400ms
```

Below is the version to use.

```
reduce motion ON  →  sheet cross-fades in, no sliding
```

---

## 6.5 Haptics (mobile)

**Haptics** are the small buzzes your phone makes when you touch things. You feel them in your hand rather than hear them.

Almost nobody writes this down as a named list of tokens, and the difference is very noticeable.

**What this means:** Most teams never write down which buzz goes with which action. So buzzes turn up at random, or never turn up at all. Users cannot name what is missing. They only know that one app feels solid in the hand and the other feels thin.

Here is the list of buzzes and when each one is used.

| Token | When |
|---|---|
| `selection` | Picker changes, switching a tab, toggling |
| `impactLight` | A meaningful button press |
| `success` | An action completed |
| `warning` | Something needs attention |
| `error` | An action failed |

Two words from that table. A "picker" is a spinning wheel of options, like the one for choosing a date. "Toggling" is flipping a switch on or off.

Notice the split. The first two are for things you *did*. The last three are for how it *turned out*.

Below is the version to avoid. The buzz is picked at random by whoever built the screen.

```
Tab switch      → error buzz (strong double buzz)
Payment failed  → selection buzz (tiny tick)
```

Below is the version to use. The buzz matches the meaning.

```
Tab switch      → selection
Payment failed  → error
Payment done    → success
```

Rules:
- **Never** on a plain list tap or a scroll. Over-buzzing feels cheap.
- Never on every keystroke.
- Respect the system haptics setting.

Each rule, in plainer words.

**Never on a plain list tap or a scroll.** Opening a chat from a list is ordinary. It does not need a buzz. If everything buzzes, nothing means anything, and the phone feels like a cheap toy in your pocket.

**Never on every keystroke.** A buzz on every letter you type drains the battery and gets irritating within one sentence.

**Respect the system haptics setting.** The phone has a setting to turn haptics off. Some people find them unpleasant, and some turn them off to save battery. If it is off, your app stays still. Never overrule a choice the user made for themselves. An app that buzzes anyway feels like it is ignoring you. People delete apps over exactly that.

Below is the version to avoid.

```
Scrolling the chat list  → tiny buzz on every row that passes
Typing a message         → buzz on every letter
```

Below is the version to use.

```
Scrolling the chat list  → no haptics
Typing a message         → no haptics
Message sent             → success
```

---

## 6.6 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] **Pressed / disabled / selected / focus tokens exist.**
      You have written down one value each. One for pressed, one for switched off, one for chosen, one for keyboard focus.
- [ ] **Every interactive component has decided all 8 states.**
      For each touchable thing you have an answer for default, hover, pressed, focused, selected, disabled, loading and error. "Not used" counts as an answer.
- [ ] **44pt minimum touch target enforced.**
      Nothing tappable is smaller than 44 by 44 where fingers are involved. A pointer-only desktop app may drop to 24 minimum, 32 comfortable — and goes back to 44 the day touch arrives. The picture inside is allowed to be smaller than that.
- [ ] **4 elevation levels, each a double shadow.**
      Four named heights exist. Each one is drawn with two shadows stacked, never one.
- [ ] **Dark mode uses lighter surfaces, not shadows.**
      At night, higher things get a lighter background. They do not get a bigger shadow. The one exception is a surface floating over content you do not control, which keeps its edge shadow.
- [ ] **3 durations, 2–3 easings.**
      Only three animation lengths exist. Only two or three movement feels exist.
- [ ] **Reduce-motion handled with cross-fade, not faster animation.**
      When the phone asks for less movement, you fade instead of slide. You never keep the slide and only make it quicker.
- [ ] **Haptic list defined and used sparingly.**
      The list of buzzes is written down. Buzzes are rare enough to still mean something.
