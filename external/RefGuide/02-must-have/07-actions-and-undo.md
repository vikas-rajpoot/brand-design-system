# 13. Deleting Things, and Taking It Back

**In one line:** Let people delete straight away. Then give them a few seconds to take it back. Do not ask "Are you sure?" every single time.

**Why this chapter exists:** This is a short chapter. You decide these rules once. After that, every screen in your app follows them. Think about how many times you have tapped delete on your phone. A popup asked "Are you sure?". You tapped Yes without reading a word. The popup did not protect you. It only slowed you down. There is a better way. It costs you about one afternoon to build.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, popups. |
| **Action** | Something the user does that changes things. Sending a message. Deleting a photo. Paying for something. |
| **Destructive action** | An action that removes something or loses something. Deleting a chat is destructive. Opening a chat is not. |
| **Irreversible** | Cannot be taken back. Once it happens, there is no way to get things back the way they were before. Sending a message to a group is irreversible. You cannot un-see it for them. |
| **Backup** | A spare copy of something, kept somewhere else. If the first copy is lost, the spare is still there. Photos that also sit in the cloud have a backup. |
| **Confirmation dialog** | The popup that appears and asks "Are you sure?" before doing something. It waits for you to answer. |
| **Dialog / modal** | A box that opens on top of the screen. It blocks everything behind it until you answer it or close it. A confirmation dialog is one kind of modal. |
| **Toast** | A short message that slides in near the bottom of the screen, says one thing, and disappears by itself. "Message sent." is a toast. |
| **Undo** | A button that takes back what you did a moment ago. Gmail shows "Message sent. [Undo]" for a few seconds after you send an email. That is exactly this. |
| **Undo window** | The number of seconds during which the Undo button still works. After that, the action is final. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `undo.window = 7`. After that everyone types `undo.window` instead of typing `7`. Change it in one place and it changes everywhere. |
| **Danger colour** | The one colour in your app that means "this removes something". Usually a red. It is used for delete buttons and for nothing else. |
| **Focus** | The one thing on screen that is "selected" right now. If you press Enter, that is the button that gets pressed. |
| **Default focused button** | The button that already has focus the moment a popup opens. Press Enter without looking and this is what you hit. |
| **Navigate away** | Leave the screen you are on and go to another one. Tapping back, or opening a different tab, is navigating away. |
| **Swipe-to-delete** | Dragging a row sideways with your finger to delete it. Most mail apps do this. |
| **Row** | One line in a list. One chat in your chat list is a row. One email in your inbox is a row. |
| **Hover** | Resting the mouse pointer on something without clicking it. This happens on computers, not on touch phones. |
| **Verb** | A doing word. Delete, send, pay and leave are all verbs. Button labels in this chapter are built from them. |
| **Flag** | A small yes/no note that your code sticks onto an item. Here you use a flag that means "this item is on its way out". |
| **Millisecond** | One thousandth of a second. Most code counts time this way, so 7 seconds is written as `7000`. |

---

## 13.1 Let people take it back, instead of asking first

Delete straight away, then show an Undo button for a few seconds. Do not ask "Are you sure?" first.

Here is the reason, stated plainly. A confirmation dialog charges **every correct action** a tax, to prevent a **rare wrong** one. And people click through them without reading anyway.

**What this means:** Out of every 100 times a person taps Delete, about 99 times they meant it. The popup makes all 100 of those people stop, read, and tap again. That extra tap is the "tax". It is paid by the 99 people who were right, to help the 1 person who was wrong. And because the popup appears so often, everyone learns to tap Yes without reading it. So the 1 person who was wrong taps Yes too. The tax is collected, and nobody is protected.

Think of a school gate where a guard checks every student's ID card, every morning, for months. After a while the guard stops looking properly. Everyone waves a card and walks in. The check costs everyone time and now catches nobody.

The first line below is the version to avoid. The second line is the version to use. Look at how many taps each one costs.

```
❌  Delete → "Are you sure?" → Yes → gone

✅  Delete → gone immediately + toast: "Deleted.  [Undo]"
```

A **toast** is a short message that appears near the bottom of the screen and goes away on its own. In the good version, it carries an **Undo** button.

Undo is faster for the 99% and safer for the 1%.

**What this means:** It is faster for the 99%, because they tap once instead of twice. It is safer for the 1% too, and here is why. The person who deletes the wrong thing *sees* it vanish from the screen. Seeing it go is what makes them realise the mistake. Then they tap Undo. A popup asks you to imagine what will happen. Undo shows you what has already happened. People are much better at spotting a mistake they can see with their own eyes.

---

## 13.2 When to still use a confirmation

Keep the "Are you sure?" popup only when the action is **truly irreversible**. Irreversible means it cannot be taken back, by you or by anyone.

Use a confirmation for these:

- Deleting an account
- Permanently removing data with no backup
- Sending something to other people
- Spending money
- Anything that cannot be undone within your undo window

**What this means, line by line.**

*Deleting an account* wipes out everything the person ever made in your app. Their account is gone, so there is nothing left to undo with.

*Permanently removing data with no backup* means you kept no spare copy anywhere. Undo would have nothing to bring back.

*Sending something to other people* cannot be taken back. The other person may have already read it. You cannot reach into their phone and unread it for them.

*Spending money* moves real money out of a real bank account. Getting it back means asking a bank, not tapping a button.

*Anything that cannot be undone within your undo window* means this. Say your Undo button only works for 7 seconds. Say this action becomes final the instant it happens. Then Undo can never help here, so you need the popup instead.

### Rules for the dialog

When you do show a confirmation popup, it must follow all five rules below. Each line names one part of the popup, then says what it must do.

```
Title:    Name the exact thing.
          ✅ "Delete 'Project Alpha'?"      ❌ "Are you sure?"
Body:     Say what is lost and whether it is permanent.
Buttons:  Label with the VERB, not "Yes"/"OK".
          ✅ [ Cancel ]  [ Delete project ]
Style:    Destructive button uses the danger color.
Default:  The SAFE option is focused, not the destructive one.
```

Now each of those five rules in slower words.

**Title — name the exact thing.** "Are you sure?" tells the reader nothing. Sure about what? They may have tapped the wrong row and not know it. Writing the item's real name in the title is what catches that mistake. The person reads "Delete 'Project Alpha'?" and thinks: no, I wanted Project Beta. If the title never names the item, nothing on screen can tell them they picked the wrong one.

**Body — say what is lost and whether it is permanent.** The body is the smaller text under the title. It must answer two questions: what goes away, and can it come back. "This will delete 40 files. This cannot be undone." is a body. "This action is irreversible." on its own is not. It never says what is being lost. The reader is left guessing whether they are about to lose 3 files or three years of work.

**Buttons — label with the verb, not "Yes"/"OK".** A **verb** is a doing word: delete, send, pay, leave. Now picture buttons that say Yes and No. To know which one is safe, the reader has to remember the question above them. Look away for a second and that memory is gone, so the tap becomes a guess. Buttons that say Cancel and Delete project need no memory at all. The button tells you what it does. This also protects the person who never read the title.

**Style — the destructive button uses the danger colour.** The **danger colour** is the one colour in your app that means "this removes something", usually a red. Your colour rules live in [the colour chapter](../01-foundations/02-color.md). The red makes the eye stop for half a second before the finger lands. Without it, the dangerous button looks the same as the safe one, and a fast reader picks whichever is nearer. Colour is never the only signal though. The word on the button still says "Delete", because some people cannot tell red from grey.

**Default — the safe option is focused, not the destructive one.** **Focus** is the thing that is selected right now. It is the one that gets pressed if you hit Enter without looking. Put focus on Cancel. People tap and press keys faster than they read, so a popup often surprises them mid-press. When that happens, the accident should be "nothing happened". If focus sat on Delete instead, the accident would be "everything is gone".

Below is a popup that gets the rules wrong. Count the mistakes as you read it. It never names what is being deleted. It never says what is lost. Its buttons say No and Yes. The dangerous button has no danger colour. Yes is the button already focused.

```
❌
   Are you sure?

   This action cannot be undone.

   [ No ]     [ Yes ]        <- Yes is focused, and it is grey like No
```

Below is the same popup following all five rules. It names the item. It says what is lost. Its buttons are verbs. The dangerous button carries the danger colour. Focus starts on the safe button.

```
✅
   Delete "Project Alpha"?

   This deletes 40 files. This cannot be undone.

   [ Cancel ]     [ Delete project ]
     ^focused        ^danger colour
```

For extremely destructive actions, require typing the name to confirm. Use this rarely — it is annoying by design.

**What this means:** For the very worst actions, do not accept a tap at all. Make the person type the item's name into a box first. The button stays switched off until the typing matches. To delete an account called "Project Alpha", they have to type `Project Alpha` themselves. Typing is slow and needs your attention, so it cannot happen by accident. That slowness is the whole point. It is also irritating, so keep it for one or two actions in your whole app. Never use it for ordinary deletes, or people will start to dread using your app at all.

---

## 13.3 The undo pattern

Now the rules for Undo itself. These five lines are the whole pattern. Each line names one decision you have to make once.

```
Undo window:   5–10 seconds (make it a token)
Where:         A toast at the bottom with an [Undo] button
Extends:       Hovering / touching the toast pauses the timer
Multiple:      Undoing several at once? Group them into one toast.
Leaves screen: Undo must still work if the user navigates away
```

Each line explained.

**Undo window: 5–10 seconds (make it a token).** The **undo window** is how long the Undo button stays available. Pick a number between 5 and 10 seconds. Under 5 seconds is too short. The person has to notice the mistake and move their thumb, and that takes longer than you think. Over 10 seconds is too long. The toast sits there covering part of the screen long after everyone has moved on.

"Make it a token" means this. Write the number down once, under a name, like `undo.window = 7`. Then have every screen read that name instead of typing its own number. A **token** is a name for a value, the same idea as `x = 5` in maths. If you later decide 7 seconds is too short, you change that one line. The whole app changes with it. Skip this and you end up hunting for the number in twenty different files.

Below is the version to avoid. The same idea is typed in three places, and the three do not agree. The numbers are in **milliseconds**, which are thousandths of a second, so `5000` means 5 seconds. Most code counts time this way.

```
DeleteMessage    undo timer: 5000
DeletePhoto      undo timer: 8000
ArchiveChat      undo timer: 3000
```

Here the app gives you 5 seconds to undo a deleted message. A photo gets 8 seconds. A chat gets only 3. Nobody chose those three numbers on purpose. They grew apart one screen at a time. The person using your app can never learn a rule that changes on every screen.

Below is the version to use. One name, one value, used everywhere. `7000` is 7 seconds.

```
undo.window = 7000

DeleteMessage    undo timer: undo.window
DeletePhoto      undo timer: undo.window
ArchiveChat      undo timer: undo.window
```

**Where: a toast at the bottom with an [Undo] button.** A **toast** is a short strip of text near the bottom of the screen that goes away by itself. Put it at the bottom, because that is where the thumb already is. Put it in the same place every time, so people learn where to look without thinking. Never use a popup for this. A popup blocks the screen and waits for an answer. That is the exact thing this chapter is trying to get rid of.

**Extends: hovering or touching the toast pauses the timer.** If the person rests a finger on the toast, stop the countdown. Do the same if they rest a mouse pointer on it. **Hover** means resting the pointer on a thing without clicking. Someone reaching for Undo is usually still reading the toast. If it vanishes from under their finger, they lose their one chance to take the delete back. They will blame your app for it.

**Multiple: undoing several at once? Group them into one toast.** If the person deletes 12 photos in one go, do not show 12 toasts stacked up the screen. Show one toast saying "12 photos deleted. [Undo]". That single Undo brings all 12 back. Twelve separate toasts would cover half the screen, and each one would carry its own timer. The person would have to tap Undo twelve times, racing twelve countdowns, to get their photos back.

Below is the version to avoid. Twelve toasts, one per photo, filling the screen.

```
❌  Photo deleted.  [Undo]
    Photo deleted.  [Undo]
    Photo deleted.  [Undo]
    ... nine more ...
```

Below is the version to use. One toast, one count, one Undo.

```
✅  12 photos deleted.  [Undo]
```

**Leaves screen: Undo must still work if the user navigates away.** **Navigating away** means leaving the screen you are on. Tapping back is navigating away. So is opening a different tab. People delete something and move on at once. Two seconds later they realise the mistake. If your Undo died the moment they left that screen, it was never a real safety net. The toast and its timer belong to the whole app, not to one screen. That is the same idea as the layers plan in [the layering chapter](../02-must-have/04-layering.md). The toast sits above everything else, instead of living inside one page.

### How to build it

Here is the rule for building it. Mark as deleted, hide from the UI immediately, actually delete after the window closes.

**What this means:** Do not really delete the thing when the person taps Delete. Do these three steps instead.

1. Put a small "deleted" **flag** on the item. A flag is a yes/no note your code sticks onto something. This one tells your code the item is on its way out.
2. Hide it from the screen at once. To the person holding the phone, it looks gone.
3. Wait out the undo window. Only then destroy it for real.

If Undo is tapped during those seconds, you take the flag off. The item comes straight back on screen. Nothing was ever thrown away, so nothing has to be rebuilt. Suppose you delete for real on the first tap instead. Then Undo has nothing left to bring back, and the button is a lie.

Think of a bin in your room. Throwing a paper in the bin is not the same as the rubbish truck taking it away. Between those two moments you can still reach in and pull the paper out.

---

## 13.4 Destructive actions in the UI

These five rules are about placing dangerous buttons on the screen so nobody hits them by mistake. A **destructive action** is one that removes or loses something.

- Danger colour for the action itself, never for the whole row
- Never make a destructive action the easiest thing to hit by accident
- Never put Delete next to a common action with no gap
- Swipe-to-delete should need a deliberate distance, not a flick
- Never place a destructive action as the default focused button

Each rule again, with an example.

**Danger colour for the action itself, never for the whole row.** Colour the Delete button red. Do not colour the whole line red. A **row** is one line in a list, like one chat in your chat list. A red row looks like something already went wrong with that chat. Worse, when everything is red, nothing stands out. The eye can no longer find the one part that is actually dangerous.

Below is the version to avoid. The whole row is red, so the red means nothing.

```
❌  ┌────────────────────────────────────┐
    │ ██ Project Alpha         Delete ██ │   <- everything red
    └────────────────────────────────────┘
```

Below is the version to use. Only the one dangerous word carries the danger colour.

```
✅  ┌────────────────────────────────────┐
    │    Project Alpha         Delete    │   <- only "Delete" is red
    └────────────────────────────────────┘
```

**Never make a destructive action the easiest thing to hit by accident.** Do not put Delete where the thumb naturally lands. Do not make it the biggest button on the screen either. Size and position quietly tell people what a screen wants them to do. A screen should never want you to delete. Make Delete the easy target and people will hit it while reaching for something else.

**Never put Delete next to a common action with no gap.** A common action is one people press all day, like Share. If Share and Delete touch each other, a slightly off tap on Share becomes a delete. Fingers are wider than buttons, so those near misses happen every day. Put clear space between the two, or move Delete somewhere else entirely.

Below is the version to avoid. The two buttons touch, and Delete is the one the thumb slides into.

```
❌  [ Share ][ Delete ]
```

Below is the version to use. There is real space between them, so a near miss hits nothing.

```
✅  [ Share ]              [ Delete ]
```

**Swipe-to-delete should need a deliberate distance, not a flick.** **Swipe-to-delete** is dragging a row sideways with your finger to remove it. Make the finger travel a good distance before the delete happens. A tiny flick must not be enough. People flick sideways by accident all the time while scrolling a list. Scrolling through your messages should never delete one of them.

**Never place a destructive action as the default focused button.** This is the same rule as in section 13.2. It is said again here because it applies outside popups too. The **default focused button** is the one already selected when a screen opens. It is the button that gets pressed if the person hits Enter without looking. That must never be the delete button. If it is, one stray press of the Enter key destroys someone's work.

Below is the version to avoid. Enter deletes.

```
❌  [ Cancel ]     [ Delete project ]
                     ^focused
```

Below is the version to use. Enter cancels.

```
✅  [ Cancel ]     [ Delete project ]
      ^focused
```

---

## 13.5 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] **Undo is the default; confirm is the exception.**
      Deleting happens straight away and shows an Undo button. The "Are you sure?" popup is kept for things that truly cannot be taken back.
- [ ] **Confirm dialogs name the object and use verb buttons.**
      The popup says the item's real name. The buttons say "Delete project", not "Yes".
- [ ] **Safe option is the default focus.**
      When the popup opens, the harmless button is the one already selected.
- [ ] **Undo window is a token (5–10 seconds).**
      The number of seconds is written once under a name. Every screen reads that name.
- [ ] **Undo survives navigation.**
      The Undo button still works after the person leaves the screen.
- [ ] **Destructive actions are not next to common ones.**
      Delete never sits touching a button people press all day.
