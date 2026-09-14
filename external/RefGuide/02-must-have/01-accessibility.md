# 7. Making the App Work for Everyone

**In one line:** Some people cannot see well, cannot hear, or cannot use their hands easily. Build the app so they can still use every part of it.

**Why this chapter exists:** Picture four real people opening your app.

- The first has weak eyes. She has set her phone text to double size. She never turns it back down.
- The second cannot see the screen at all. He listens to it instead. The phone reads out every item he lands on.
- The third cannot tap small buttons. She moves through the screen one item at a time, using a keyboard.
- The fourth cannot use his hands well. He uses a **switch**. A switch is one big button. You press it with a hand, a head or a foot.

All four are your users. Building the app so that all four can use it is called **accessibility**.

Treat accessibility as a **gate**, not a later phase. In many countries it is also a legal requirement. That means a court or a government office can act against you for getting it wrong. The legal side is covered in [the legal and platform chapter](../03-production/02-legal-and-platform.md).

**What "gate" means:** A gate is something you must pass through before you can ship. Nobody releases the app until these rules are met. It is not a job for "after launch". If you leave it for later, you will be changing every screen in the app to fix it.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **Accessibility** | Making the app usable by everyone. That includes people who cannot see well, people who cannot hear, and people who cannot use their hands easily. |
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, icons, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which text sizes exist, which gaps exist. Like a school uniform rule sheet, but for a screen. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `text.body = 16`. After that everyone types `text.body` instead of typing `16`. Change it in one place and it changes everywhere. |
| **Palette** | The full set of colours your app is allowed to use, each with a name. |
| **Type role** | A named text style with a job, such as `body`, `title`, `caption`. You do not pick a size each time. You pick the role, and the role decides the size. |
| **OS** | The software that runs the phone itself. Android and iOS are the two you know. Settings like text size live in the OS, not in your app. |
| **Font scaling** | The phone setting that makes all text bigger or smaller across every app. |
| **pt** | A unit of length on a screen, short for "point". Think of it like millimetres, but for phone screens. Bigger number means bigger letters. Normal reading text on a phone is around 16pt, so 18pt is a little larger than that. |
| **Weight** | How thick the letters are. Bold text is heavy weight. Thin grey text is light weight. |
| **Fixed height** | A box told to be exactly one height, for example "this row is 44 tall, always". Heights on a screen are counted in units. 44 units is about the height of a button you can tap with a fingertip. |
| **minHeight** | A box told "be at least this tall, and grow if you need to". |
| **Padding** | The empty space inside a box, between the box edge and the stuff in it. Like the white border inside a page of your notebook before the writing starts. |
| **Clipped** | Cut off. The text is bigger than the box, so the bottom of it is chopped away and you cannot read it. |
| **Contrast ratio** | A number saying how far apart two colours are in brightness. `1 : 1` means the same brightness, so the text is invisible. Bigger numbers are easier to read. `4.5 : 1` is a set minimum, not a guess. |
| **Focus** | Which single item on the screen is "selected" right now. Press the arrow keys or the Tab key and focus moves to the next item. Press Enter and the item that has focus is the one that gets pressed. |
| **Tab key** | The key on the left of a keyboard with two arrows on it. In an app it means "move to the next item". |
| **Interactive element** | Anything the user can act on: a button, a link, a checkbox, a row you can tap. Plain text that only sits there is not interactive. |
| **Switch control** | A way to use a phone with one or two big buttons instead of your fingers. The phone moves the selection along by itself, and you press the button to choose. |
| **Focus ring** | The visible outline drawn around the item that currently has focus, so you can see where you are. |
| **Screen reader** | Software that reads the screen out loud. Blind users listen to it instead of looking. They swipe or press keys to move from item to item, and the phone speaks each one. |
| **VoiceOver** | The screen reader built into the iPhone. |
| **TalkBack** | The screen reader built into Android. |
| **Role** | What kind of thing an item is: a button, a link, a checkbox. The screen reader says the role out loud, so the user knows it can be pressed. |
| **Label** | The words the screen reader says for an item. "Delete session", not "trash icon". |
| **State** | What condition the item is in right now: selected, expanded, disabled, busy. |
| **Disabled** | Switched off for now. A greyed-out "Send" button that you cannot press yet is disabled. The opposite word is **enabled**, which means it is switched on and ready to press. |
| **Modal** | A box that opens on top of the screen. It blocks everything behind it. Nothing else works until you answer it or close it. |
| **Divider** | A thin line drawn between two rows of a list to separate them. |
| **Dark mode** | The phone setting that turns app backgrounds dark and text light. |
| **CI** | Short for "continuous integration". A machine that checks your work every time you change the code. If a check fails, it stops the change from going in. |
| **Edge case** | A rare situation that almost never happens. Accessibility is **not** an edge case, and this chapter says so more than once. |

---

## 7.1 The big one: OS font scaling

This is the single biggest accessibility problem in most apps. The phone owns the text size, not your app. Your job is to grow with whatever the phone asks for.

Users can set system text size much larger. Many run at 130–150% every day. Some go to 200%+.

**What this means:** 130% means every piece of text is 1.3 times its normal size. 200% is double size. This is a setting in the phone's own settings, not in your app. Millions of people turn it on and leave it on forever. For them, 200% is normal, not an experiment.

### Two ways this breaks

There are exactly two ways your app can fail here. Both are common. In the two lines below, the arrow `→` means "and so this happens".

1. Your text ignores the setting → accessibility failure
2. Your text grows but **gets clipped**, because rows have fixed heights

**What the first one means:** The user set the phone to double size. Your text stayed small. You ignored the user. For a person with weak eyes, your app is now unreadable.

**What the second one means:** Your text did grow. But you told the row "you are exactly 44 tall, always". The text is now taller than 44. The bottom half is cut off. This looks worse than doing nothing.

### The three rules

Here are the three rules that stop both failures. Read each line, then read the plain-English version under the block.

```
1. Type roles declare whether they scale, and their max multiplier
2. NO container that holds text has a fixed height
   (use minHeight + padding instead)
3. Test the whole app at maximum font size, on the smallest device
```

**Rule 1 in plain words:** Take each named text style in your app: body, title, caption. For each one you write down two things. Does this text grow when the user turns up the phone text size? And how far is it allowed to grow? "Max multiplier" is that limit. A multiplier of 2 means "this text may reach double size, and no further". Without a written limit, one giant heading can push everything else off the screen.

**Rule 2 in plain words:** Never tell a box that holds text to be one exact height. Tell it a smallest height instead, and put padding inside it. Then the box grows when the text grows. Break this rule and the text gets cut off, which is the second failure above.

**Rule 3 in plain words:** Turn the phone text size up to its maximum. Use the smallest phone you support. Open every screen. Fixing what you find is the whole job. If you skip this test, your users find the broken screens for you, and they find them after launch.

The two blocks below are a short way of writing down one row of a screen. The word at the top is the thing itself. The lines under it are its settings. The number `44` means 44 units of screen height. That is roughly the height of a button big enough to tap with a fingertip.

The row below is wrong. Its height is locked at exactly 44, so bigger text gets cut off at the bottom.

```
Row
  height: 44
  Text: "Notification settings"
```

The row below is right. It starts at 44 and grows taller when the text needs more room. The line `paddingVertical: 12` means "leave 12 units of empty space above the text, and 12 below it".

```
Row
  minHeight: 44
  paddingVertical: 12
  Text: "Notification settings"
```

Going back and adding this later touches every screen. Decide it on day one.

**What this means:** Say you build the whole app first. Then you try to add font scaling. Now you have to open and change every single screen. That is weeks of work. Deciding it on day one costs you almost nothing.

### The test that finds everything

One test setting finds nearly every layout bug in the app at once. In the line below, each `×` means "and at the same time".

> **smallest device × largest font size × longest text × dark mode**

That single combination is where almost everything breaks.
Automate it as a visual regression test.

**What this means:** Put four hard things together at the same time. The smallest phone screen you support. The phone's biggest text setting. The longest name or message a real user might have. And dark mode switched on. Anything fragile in your layout falls apart under all four at once.

**What "automate it as a visual regression test" means:** Write a program that opens every screen in those four conditions. It takes a picture of each screen and saves it. The next time somebody changes the code, the program takes fresh pictures. It then compares the new pictures to the saved ones. If something got cut off, you see it in the picture before a user does.

---

## 7.2 Contrast

Your text and your icons must be bright enough against the background behind them. There is a minimum, and it is a number, not an opinion.

**Contrast ratio** is a number that says how far apart two colours are in brightness. Same colour on same colour is `1 : 1`, which is invisible. Black on white is the highest you can get. The bigger the number, the easier it is to read.

| Content | Minimum |
|---|---|
| Body text | 4.5 : 1 |
| Large text (18pt+ or 14pt bold) | 3 : 1 |
| **Icons, borders, focus rings, input outlines** | 3 : 1 |
| Disabled elements | No requirement, but keep readable |

Read the table one row at a time.

- **Body text** is normal reading text. It must reach at least `4.5 : 1` against whatever is behind it. Below that, people with weak eyes cannot read your app at all.
- **Large text** means 18pt or bigger, or 14pt and bold. Big letters are easier to read already. So large text only has to reach `3 : 1`.
- **Icons, borders, focus rings and input outlines** are not made of letters, but they still carry meaning. An input outline is the line drawn round a box you type into. All of these also need `3 : 1`.
- **Disabled elements** are the greyed-out ones you cannot press yet. There is no set minimum for them. You should still be able to read them, or nobody will know what the button was going to do.

The third row is the one that gets missed. A very light divider or a
thin grey icon fails for many users.

**What this means:** People check their text and stop there. Then they draw a very pale line between list rows. Or they draw a thin light-grey icon. Nobody ever tests those two. Now stand outside in bright sunlight and look at that screen. The pale line and the thin icon have vanished. If a thing carries meaning, it needs contrast, even when it is not made of letters.

The next two blocks use **token** names. `icon.muted` is the name of your quiet grey icon colour. `bg.primary` is the name of your main background colour. "A on B" means colour A is drawn on top of colour B.

The pairing below is wrong. The icon is far too pale against the background behind it.

```
icon.muted on bg.primary   →  below 3 : 1   FAIL
```

The pairing below is right. The same icon is darkened until it reaches the minimum.

```
icon.muted on bg.primary   →  3 : 1 or more   PASS
```

**Automate it.** A script that walks your token pairs and fails CI on
any pair below the limit. Run it on every change to the palette.

**What this means:** Write a small program. Your app puts colours together in pairs: this text colour on that background colour. The program walks through every pair your app is allowed to use. For each pair it works out the contrast ratio. If any pair is below the minimum, the program reports a failure. The change is then blocked and cannot go in. **CI** is the machine that runs this check by itself every time somebody edits the code. Run this check every single time anyone touches your colours. Do it by hand and you will forget, and a pale grey icon will reach real users.

---

## 7.3 Never use colour alone

Colour must never be the only thing telling the user something. Always add a second signal: a word, an icon, or a shape.

Many people cannot tell red from green. It is around 1 in 12 men, so in a class of 30 there is usually more than one. Other people are outdoors in bright sun, where all the colours wash out. If colour is the only difference, every one of those users gets nothing.

| Wrong | Right |
|---|---|
| Red text = error | Red text + an error icon + the word |
| Green / red diff lines | Also `+` / `−` prefixes and different lightness |
| Colored status dot | Dot + a text label, or different shapes |
| Chart lines by colour | Also dashes/solid, or labels on the lines |

Some rows in that table need spelling out.

**Red text = error.** Red on its own says nothing to someone who cannot see red. Show an error icon as well, and write the word "Error" in the message.

**Green / red diff lines.** A **diff** is a view that shows what changed in a piece of text. Added lines are drawn in green. Removed lines are drawn in red. Colour is doing all the work there. The fix is to also put a `+` in front of every added line. Put a `−` in front of every removed one. A mark added to the front like that is called a **prefix**. Then make one of the two shades lighter than the other, so they differ in brightness too.

**Coloured status dot.** A **status dot** is the small coloured circle that means online, away or offline. Green and red dots look the same to many people. The fix is to write the word next to the dot. Or give each state a different shape.

**Chart lines by colour.** Picture a graph with a red line and a blue line, and nothing else to tell them apart. Print that graph in black and white and it becomes useless. The fix is to make one line dashed and the other solid. Or write the name of each line on the line itself.

The message below is wrong. Take the colour away and nothing is left.

```
"Payment failed"        (shown in red, nothing else)
```

The message below is right. It still works in black and white.

```
[!] "Error: payment failed"     (icon + the word "Error" + red)
```

---

## 7.4 Screen readers

A **screen reader** is software that reads the screen out loud. Blind users move through your app by listening to it. VoiceOver is the one built into iPhone. TalkBack is the one built into Android.

Every interactive element needs three things:

**What "interactive element" means:** Anything the user can act on. A button, a link, a checkbox, a row you can tap. Plain text that only sits there is not interactive.

```
role     — is it a button, a link, a checkbox?
label    — what does it do? ("Delete session", not "trash icon")
state    — is it selected, expanded, disabled, busy?
```

**Role** tells the listener what kind of thing this is, so they know they can press it. **Label** tells them what it does. Describe the action, not the picture — "Delete session" is useful, "trash icon" is not. **State** tells them the condition it is in right now: ticked, opened up, switched off, still loading.

The button below is wrong. A blind user hears nothing useful. The screen reader has only a picture to work with, so it says "button" and stops. The user cannot tell whether pressing it deletes their work.

```
Button
  icon: trash
  (no role, no label, no state)
```

The button below is right. The screen reader can announce all three things.

```
Button
  icon: trash
  role: button
  label: "Delete session"
  state: enabled
```

Also:

- **Focus order matches visual order.** Never let focus jump around.
- **Announce changes.** When content loads or an error appears, say so.
- **Group related things.** A row with a title + subtitle + icon should
  read as one item, not four.
- **Modals trap focus.** You cannot tab out to the page behind.
- **Decorative images are hidden** from the screen reader.

Each of those in plain words:

**Focus order matches visual order.** **Focus** is which single item is selected right now. The user moves focus forward one item at a time. That order must run the way the eye reads the screen: top to bottom, left to right. Say focus jumps from the top of the screen straight to the bottom, then back up again. The listener now has no idea where they are on the page.

**Announce changes.** Sometimes the screen changes without the user doing anything. A list finishes loading. An error pops up. The screen reader must say those changes out loud. A sighted user sees them. A blind user hears nothing unless you tell the screen reader to speak.

**Group related things.** A list row usually has a picture, a name and a line of detail. Left alone, the screen reader treats those as three separate items. The user then has to swipe three times to get past one row. On a list of 50 rows that is 150 swipes. Group the three into one item instead. Then the screen reader says the whole row in one go, and one swipe moves on to the next row.

**Modals trap focus.** A **modal** is a box that opens on top and blocks the screen behind it. While it is open, focus must stay inside it. The user keeps pressing Tab. Focus should loop round and round the modal's own buttons. It must not wander onto the page behind, because that page is blocked and they cannot even see it.

**Decorative images are hidden.** Some pictures carry no information — a background pattern, a divider drawing. Mark those so the screen reader skips them. Otherwise the user hears "image, image, image" for no reason.

Test it by turning on VoiceOver / TalkBack and using the app with the
screen off. It takes 10 minutes and finds a lot.

**What this means:** Switch on the screen reader on your own phone. Then turn the display off, or close your eyes, and try to do one normal task in your app. Ten minutes of this will show you more problems than an hour of reading code.

---

## 7.5 Other OS settings you must handle

The phone has more accessibility settings than text size. Your app must respond to each one.

| Setting | Your response |
|---|---|
| **Reduce motion** | Cross-fade instead of slide/scale |
| **Reduce transparency** | Solid backgrounds instead of blur |
| **Increase contrast** | Stronger borders, darker text |
| **Bold text** | Bump your weights up one step |
| **Dark mode** | Follow the system by default |

That table is five separate jobs, so here they are one at a time.

**Reduce motion** is for people who feel sick or dizzy when things fly across the screen. When it is on, do not slide a panel in. Do not zoom it up from small to large. **Cross-fade** instead: the old screen fades out while the new one fades in, with nothing moving. Ignore this setting and you can make a real person feel ill.

**Reduce transparency** is for people who find see-through layers hard to read. **Blur** means a panel where you can dimly see the screen behind it. When this setting is on, make those panels a plain solid colour. Ignore it and the words on that panel sit on top of a mess of shapes. That is very hard to read.

**Increase contrast** is for people who need harder edges between things. When it is on, draw your borders stronger and make your text darker. Ignore it and your soft grey-on-grey design turns into a blank fog for those users.

**Bold text** is for people who find thin letters hard to see. **Weight** means how thick the letters are. When this setting is on, move every text style one step thicker than usual. Ignore it and thin light text stays thin, so those users cannot read your screens.

**Dark mode** is the phone setting that turns backgrounds dark and text light. Follow whatever the phone is set to, unless the user chose something else inside your app. Ignore it and your app flashes a bright white screen at someone reading in a dark room, which hurts.

These are inputs to your design system, not edge cases.

**What this means:** Do not treat these as rare situations to patch later. They are part of the rules your app is built from. They sit beside your colours and your text sizes, at the same level of importance. Every one of them changes what your app is allowed to draw.

---

## 7.6 Keyboard and other input

Not everyone taps the screen with a finger. Your app must work for people moving through it item by item.

Even on mobile:

- External keyboards exist (iPad, Android tablets)
- Switch control and voice control users navigate by focus
- Forms need a sensible next/previous order and a working return key

Each of those in plain words:

**External keyboards exist.** People plug real keyboards into tablets and type on them. They move around the screen with the Tab key and the arrow keys, not by touch. Build a button that only answers to a finger tap and those people cannot press it at all.

**Switch control and voice control users navigate by focus.** **Switch control** is for people who cannot tap accurately. They use one or two large buttons, sometimes pressed with a hand, a head or a foot. The phone moves focus from item to item, and they press the switch to choose. **Voice control** is the same idea using spoken commands. Both of them depend on focus working properly. So focus is not only a keyboard question. If focus skips your button, a switch user can never reach it.

**On a desktop app, the keyboard is not the edge case — it is the main input.** On a phone, keyboard users are the minority. On a computer, everyone has a keyboard, and many of your fastest users never touch the mouse. Every action must be reachable with Tab and the arrow keys, and the shortcuts you offer must be shown somewhere findable. A desktop app that needs the mouse for one step is broken for those users at that step. Desktop pointers can also aim more precisely than a fingertip, so smaller press targets are allowed there — but there is still a floor, and it returns to the touch size the moment a touch screen is involved. The exact numbers live in [the states chapter](../01-foundations/06-states-elevation-motion.md).

**Forms need a sensible next/previous order and a working return key.** A **form** is a screen with boxes to fill in. A sign-up screen asking for your name and your email is a form. Pressing "next" must move to the box below. It must not jump to some far-off box on the other side of the screen. Pressing the return key in the last box must send the form. Get this wrong and a keyboard user has to guess where they landed after every key press.

Rule: **a visible focus indicator on every focusable element.**
Never remove focus outlines without replacing them.

**What this means:** Every item that can take focus must show it in a way the user can see. That visible outline is the **focus ring**. Without it, a keyboard user is pressing Tab blindly, with no idea what is selected. Some people delete the default outline because they think it looks ugly. If you delete it, you must draw your own in its place. Deleting it and putting nothing back makes the app impossible to use with a keyboard.

The two blocks below are written the way styling code is written. `Button:focus` means "a button, at the moment it has focus". The lines under it say how to draw the button at that moment. `outline: none` means "draw no outline around it".

The code below is wrong. The outline is removed and nothing takes its place. Now a keyboard user cannot see where they are.

```
Button:focus
  outline: none
```

The code below is right. The default outline is replaced by a ring you designed yourself.

```
Button:focus
  outline: none
  ring: focusRing        (your own visible ring, contrast at least 3 : 1)
```

One detail about that `3 : 1`: measure the ring against the right colour. A focus ring sits on the **edge** of a thing, so it touches two colours at once — the fill of the button inside it, and the page behind it. Check the ring against **both**, in both themes. A ring that shines against the page can vanish against the button it is wrapped around, and then a keyboard user loses their place exactly when the ring mattered. This is a pair for your automated contrast check (section 7.2), not a thing to eyeball.

---

## 7.7 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] Font scaling decided per role, max multipliers set
  - For every text style you wrote down two things. Does it grow, and how far?
- [ ] No fixed-height text containers
  - No box holding text is locked to one exact height.
- [ ] Tested at max font size on the smallest device
  - Phone text turned up as far as it goes. Smallest screen you support.
- [ ] Contrast checked in CI (including 3:1 for non-text)
  - The machine checks every colour pair on every change. Icons and borders count too.
- [ ] No meaning from colour alone
  - Every colour signal also has a word, an icon or a shape.
- [ ] Role + label + state on every interactive element
  - The screen reader can say what it is, what it does, and what state it is in.
- [ ] Focus order matches visual order
  - Selection moves the way the eye reads. It never jumps about.
- [ ] Focus ring checked against both of its backgrounds
  - The ring reaches 3 : 1 against the fill inside it and the page behind it, in both themes, and the machine checks it.
- [ ] Modals trap focus
  - While a blocking box is open, focus cannot escape behind it.
- [ ] Reduce motion / transparency / bold text handled
  - The app draws differently when those phone settings are switched on.
- [ ] Tested with a screen reader, screen off
  - You did one real task in your own app using only your ears.
