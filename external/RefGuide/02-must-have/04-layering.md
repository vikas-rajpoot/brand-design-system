# 10. Layering (what sits on top of what)

**In one line:** The screen is flat, but things can pile up on top of each other. Decide once, for the whole app, which thing sits above which.

**Why this chapter exists:** This is a short chapter that stops a whole family of bugs. Picture this. A message pops up to say "Saved". Nobody can see it. A panel is sitting on top of it. Nothing crashed. No error appeared. The app is quietly broken, and you will spend an hour finding out why.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, panels. |
| **Layer** | One sheet in the stack. The screen is flat glass, but you can pile things on it like sheets of paper on a desk. Each sheet is a layer. |
| **z-index** | The number that says which sheet is on top. Higher number wins. A thing with z-index 400 covers a thing with z-index 100. |
| **Tier** | One named step in your list of layers. `modal` is a tier. `toast` is a tier. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `layers.modal = 400`. After that everyone types `layers.modal` instead of typing `400`. Change it in one place and it changes everywhere. |
| **Component** | One reusable piece of UI that you build once and use in many places. A button is a component. A card is a component. |
| **Render** | To draw something on the screen. "The card renders" means the card gets drawn. |
| **Modal** | A box that opens on top of the screen. It blocks everything behind it. You have to answer it or close it before you can carry on. The "Delete this photo?" box is a modal. |
| **Dialog** | Another word for a modal. A box that asks you something and waits. |
| **Sheet** | A panel that slides up from the bottom of the screen. The "Share to..." panel on Instagram is a sheet. |
| **Dropdown** | A small list that opens under something you tapped, and closes when you pick an item. |
| **Autocomplete** | The list of suggestions that appears under a search box as you type. |
| **Picker** | A small panel for choosing one value, like a date or a country. |
| **Tooltip** | A tiny label that appears next to a thing to explain it, then goes away. |
| **Coach mark** | A one-time hint pointing at a button, shown to teach a new user what it does. |
| **Toast** | A short message that slides in, says one thing, and disappears on its own. "Message sent." |
| **Snackbar** | Another word for a toast. A short strip of text near the bottom of the screen. |
| **Scrim** | The dark see-through sheet that covers the screen behind a modal or a sheet. It dims the background so your eye goes to the panel. |
| **Overlay** | Anything that sits on top of the normal page: a modal, a sheet, a scrim, a loading cover. |
| **Portal** | A trick that moves a piece of UI out of the spot where you wrote it. It gets drawn at the very top of the screen instead. Without it, a small box inside a card can get cut off by the card's edges. |
| **Sticky header** | A bar that stays glued to the top of the screen while you scroll. |
| **Floating button** | A round button that sits on top of the page and stays there while you scroll. The blue pencil button in Gmail is one. |
| **Body** | The whole page, everything on it. "Body scroll" means scrolling the page itself, not scrolling a small box inside it. |
| **Focus** | The one thing on screen that is "selected" right now. If you type, the text goes there. |
| **Role** | A name that describes a job, not a look. `layers.modal` says "the modal layer", it does not say "400". |
| **Dev-only** | Something only you and your team can see while building the app. Users never see it. |
| **Window** | One separate box the operating system draws for your app. A phone app usually has one window that fills the screen. A desktop app can have several at once: a main window, a settings window, a pop-up. |
| **OS** | The software that runs the device itself — Android, iOS, Windows, macOS. The OS owns things your app cannot control from inside, like which window sits on top of which. |
| **Always on top** | A setting a window can ask the OS for, meaning "keep me above other apps' windows". It is a window setting, not a z-index. |

---

## 10.1 The problem

Every temporary thing in your app wants to be on top, and they cannot all win.

Modals, sheets, dropdowns, tooltips, toasts, the phone keyboard and loading covers all compete for the top.

**What this means:** These are the things that appear over your normal page. A **modal** blocks the screen until you answer. A **sheet** slides up from the bottom. A **dropdown** is a small list under a button. A **tooltip** is a tiny explaining label. A **toast** is a short message that fades away. The **keyboard** is the one your phone slides up when you tap a text box. A **loading cover** is the dim screen with a spinning circle on it.

Each one is a **layer** — one sheet in a stack. The screen is flat, but layers pile up on it like sheets of paper on a desk. The number that decides which sheet is on top is called **z-index**. Higher number wins.

Without a plan you get this. Look at the numbers. Each one is bigger than the last, and no rule decided any of them.

```
zIndex: 10
zIndex: 100
zIndex: 999
zIndex: 9999
zIndex: 99999    ← someone was in a hurry
```

That last line is what happens when a person cannot see the other numbers. They cannot find out what the highest one is, so they type a bigger one and hope.

Then: "why is the toast hidden behind the sheet?"

**What this means:** The user taps Send. Your app shows a small "Message sent" strip. But the share panel is still open. The panel's number is bigger than the strip's number. So the strip gets drawn underneath the panel, where nobody can see it. The user thinks nothing happened and taps Send again. Now the same message goes out twice.

---

## 10.2 Name your layers once

Write one list of allowed layer numbers. Give every number a name. After that, nobody types a bare number into a component again.

A **bare number** is a plain number like `400`. It is typed straight into the code. It carries no name, so nobody reading it later can tell what it was competing with.

Below is the full list. It has three columns. The left word is the name you type. The middle number is the z-index that the name stands for. The right words say what belongs on that layer.

```
base        0     Normal page content
raised      10    Cards that lift, sticky rows
dropdown    100   Menus, autocomplete, pickers
sticky      200   Sticky headers, floating buttons
overlay     300   The dark scrim
modal       400   Sheets, dialogs
toast       500   Snackbars, alerts
tooltip     600   Tooltips, coach marks
debug       900   Dev-only overlays
```

Some of those rows are worth spelling out. **Cards that lift** are cards that rise a little when you press them. A **sticky row** or **sticky header** stays glued in place while the rest scrolls. **Autocomplete** is the suggestion list under a search box. A **picker** is a small panel for choosing a date or a country. The **scrim** is the dark see-through sheet that dims the background behind a panel. A **snackbar** is another word for a toast. A **coach mark** is a one-time hint pointing at a button. **Menus** are the lists of choices that open when you tap a button, like the one behind the three dots. An **alert** is a short message that warns you about something, such as "No internet". **Dev-only overlays** are test panels that only you and your team can see while you build the app.

Read the numbers as an order, not as sizes. A tooltip at 600 sits above a toast at 500. The toast at 500 sits above a modal at 400. The modal at 400 sits above the dark scrim at 300. So a tooltip can never be hidden by a modal, because 600 always beats 400.

**Rule:** components use `layers.modal`, never a raw number.

**What this means:** A **component** is one reusable piece of UI, like a button or a card. When you build one, you type the name of the layer, not the number. `layers.modal` is a **token**. A token is a name that stands for a value, the same way `x = 5` works in maths. Here `layers.modal = 400`.

**If you break this rule:** somebody types a number by hand and picks one that is too small. Two things then sit in the wrong order, and one hides the other. Nobody notices until a user complains, because the app does not crash. It keeps running and shows the wrong thing on top.

Below is the version to avoid. The number is typed straight into the component. Nobody can see what that number is competing with.

```
Sheet      zIndex: 400
Toast      zIndex: 380      <- now the toast is under the sheet
```

Below is the version to use. Each component asks for a layer by name. The names already carry the right order inside them. The toast lands above the sheet, and nobody had to think about it.

```
Sheet      zIndex: layers.modal
Toast      zIndex: layers.toast
```

Same principle as colour roles.

**What this means:** In the [colour chapter](../01-foundations/02-color.md) you never type a colour code into a component. You type a name that says the job, like "danger" or "surface". This is the same idea. `layers.modal` says the job. `400` says nothing.

Leave gaps between tiers so you can insert one later.

**What this means:** A **tier** is one named step in the list. Notice the list jumps 100, 200, 300, 400. It does not go 1, 2, 3, 4. Every number between 100 and 200 is free, and nothing is using them yet. Next year you will invent a new kind of panel. With gaps, you slide it in at 150 and you are done.

**If you leave no gaps:** the new panel has nowhere to go. You then have to change the number of every layer above it. After that, every component that used those layers has to be checked again. That is a day of boring work, and a good chance of breaking something that used to work.

---

## 10.3 Decide the hard cases in advance

One day two overlays will want the top of the screen at the same moment. Decide now what should happen. Deciding now is a calm ten-minute chat. Deciding later means guessing at midnight with a broken app and an angry user waiting.

Write down the answer for each. These all happen in real apps.

| Situation | Decide |
|---|---|
| Toast fires while a sheet is open | Does it show above the sheet, or wait? |
| Error appears while the keyboard is up | Does it sit above the keyboard? |
| Two sheets stacked | Allowed, or does the second replace the first? |
| Dropdown inside a modal | Must be above the modal, not clipped by it |
| Tooltip near the screen edge | Flip side automatically |
| Loading overlay + modal | Which one wins? |
| Back gesture with a sheet open | Closes the sheet, not the screen |

Read the table like this. The left column is the clash. The right column is the question your team has to answer. Write that answer down somewhere the whole team can read it. A few rows use words worth explaining.

**Fires** means the thing appears on its own, without the user asking for it at that moment. A toast fires when the app finishes saving.

**Two sheets stacked** means a second sheet opens while the first one is still open. Now two of them are piled up.

A **loading overlay** is the dim cover with a spinning circle on it. It sits over the screen while the app waits for something to finish.

**The keyboard is up** means the phone's typing keyboard is covering the lower half of the screen. If your error message is drawn under it, the user reads nothing.

**Clipped** means cut off at the edge. A **dropdown** opened inside a **modal** can get sliced by the modal's border, so half the list is invisible. It has to be drawn above the modal instead.

**Flip side automatically** means this. A **tooltip** normally opens to the right of the thing it explains. Sometimes that thing is already at the right edge of the screen. Then the tooltip must open to the left instead. It has to work this out by itself, every time, with no special code from you. If it does not flip, half the label sits off the screen and cannot be read.

**Back gesture** is the swipe or the back button that takes you to the previous screen. With a sheet open, that action must close the sheet first. If it closes the whole screen, the user loses their place and blames the app.

Only two of the seven rows tell you the answer. The other five ask you a question, because the right answer depends on your app. What matters is that the answer exists in writing. Everyone then builds the same behaviour.

**If nobody writes the answers down:** each person guesses. One screen shows the toast above the sheet, another screen hides it. The app now behaves one way here and another way there. No single line of code looks wrong, so this bug is very hard to hunt down.

---

## 10.4 One overlay manager

One piece of code owns every overlay in the app. Not each component for itself.

Do not let each component render its own portal.

**What this means:** To **render** something is to draw it on the screen. An **overlay** is anything that sits on top of the normal page. A **portal** is a trick that moves a piece of UI out of the spot where you wrote it. The UI gets drawn at the very top of the screen instead, so nothing can cut it off.

Now picture every component opening its own portal. Nobody is in charge. Two overlays can open at the same moment, and neither one knows the other is there.

Think of a school assembly with one microphone. If there is one microphone and one teacher holding it, one person speaks at a time. If every student brings their own speaker, everybody shouts at once.

**If you break this rule:** nothing stops two panels from opening at the same moment. The screen goes double dark, because each panel brought its own dark cover. Pressing back closes the wrong panel, or closes nothing at all. Each of those bugs then has to be fixed in every component that opens a panel. Fix it in ten places and you will miss one, and the bug comes back.

Have **one** place that owns overlays. That one place can then make all of these true, every time:

- Only one modal at a time (or a defined stack limit)
- Escape / back always closes the topmost one
- Focus is trapped in the topmost one
- The scrim is shared, not stacked (two scrims = double darkness)
- Body scroll is locked while a modal is open

Each of those lines is doing real work, so here they are one at a time.

**Only one modal at a time** means a second modal cannot open on top of the first one. The only exception is a limit you chose on purpose. "A defined stack limit" means you picked a number first and wrote it down. Say you picked two. The manager then lets two modals open and turns down the third. Without this, boxes pile up. The user closes one and finds another, then another, and cannot get back to the app.

**Escape / back always closes the topmost one.** On a computer that is the Escape key. On a phone it is the back gesture or the back button. Either one closes the panel that is on top right now. It does not close the one underneath. Without this rule the user gets stuck, tapping back over and over while nothing moves.

**Focus is trapped in the topmost one.** **Focus** is the one thing on screen that is selected right now. It is where your typing goes. Trapping it means focus cannot wander into the page behind the modal while the modal is open. The **Tab** key on a keyboard jumps you from one thing to the next thing. In a trapped modal, Tab only moves you around inside that modal. When you reach the last item, the next press sends you back to the first. Without this, a user pressing Tab lands on a form behind the modal. They then type into a box they cannot even see.

**The scrim is shared, not stacked.** The **scrim** is the dark see-through sheet behind a panel. Each scrim dims the screen a little. If two overlays each add their own scrim, the dimming adds up. The background then goes almost black and the app looks broken. One shared scrim keeps the darkness the same, no matter how many panels are open.

**Body scroll is locked while a modal is open** means the page behind the modal cannot be scrolled. Remember, the **body** is the whole page under the panel. Without the lock, dragging inside a sheet scrolls that page underneath. You then close the sheet. You are now somewhere else in the list, and you have no idea how you got there.

Below is the version to avoid. Three components, three portals, nobody in charge.

```
PhotoCard    -> opens its own portal, own scrim
ShareSheet   -> opens its own portal, own scrim   <- screen now double dark
DeleteDialog -> opens its own portal, own scrim
```

Below is the version to use. Every overlay is asked for through one manager, which owns the portal, the scrim and the focus.

```
OverlayManager
  ├─ owns the one portal
  ├─ owns the one scrim
  ├─ owns focus and back / escape
  └─ PhotoCard, ShareSheet, DeleteDialog all ask it to open them
```

---

## 10.5 When your app is itself a window on top

Most of this chapter assumes your app owns the whole screen. Some apps do not. A floating helper pinned above other apps, a picture-in-picture video, a small assistant window sitting over a call — these apps are themselves a layer on someone else's screen.

For them there are **two stacks, not one**, and they must not be confused.

**Stack 1: windows.** The **OS** decides which window sits above which. Your app asks for that with a window setting, such as **always on top**. Your z-index numbers have no power here. Typing `zIndex: 99999` inside your window will never lift it above another app's window, because z-index only orders things *inside* one window.

**Stack 2: inside each window.** Everything in this chapter — the named tiers, the one overlay manager, the shared scrim — applies as normal, but **per window**. Each window is its own flat sheet of glass, and its stack starts again at `base`.

Two rules follow.

**Rule: window order is a window setting, never a z-index.** If your window must float above other apps, that is asked of the OS, once, in one place. Write down which windows ask for it.

**Rule: decide early which overlays live inside the window and which are windows of their own.** A dialog can be drawn inside your main window, or it can be a second OS window. The choice changes everything in section 10.4. An in-window dialog gets the manager, the shared scrim and the focus trap for free. A dialog that is its own window gets none of that — the manager cannot reach across windows, a scrim cannot dim another window, and the OS decides its order. Neither choice is wrong. What is wrong is not choosing, so that some dialogs are windows and some are not, and each behaves differently.

**If nobody decides:** one dialog dims the screen behind it and another does not. Escape closes one kind and ignores the other. A "Saved" toast fires in the main window while a dialog window covers it, and nobody sees it. Each of these looks like a small unrelated bug, and all of them are this one missing decision.

---

## 10.6 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] Named tiers, no raw z-index numbers in components
  - Every component types a name like `layers.modal`. Nobody types a bare `400`.
- [ ] Gaps between tiers
  - The numbers jump in hundreds. You can add a new layer later without changing the numbers of the old ones.
- [ ] The 7 conflict cases above have written answers
  - Someone has decided each one. The decision is written down where the whole team can read it.
- [ ] One overlay manager owns portals, focus and the scrim
  - One piece of code is in charge. Everything that opens on top goes through it.
- [ ] Back / escape always closes the topmost layer
  - The back gesture closes the panel on top. It does not close the whole screen.
- [ ] If the app or any dialog is its own OS window, that is written down
  - Window order is asked of the OS, never faked with a big z-index. The tier list applies inside each window, starting again at `base`. Every dialog is deliberately either in-window or a window of its own — not an accident of who built it.
