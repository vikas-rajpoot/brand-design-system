# 8. Content States

**In one line:** One screen is really eight screens. It can be full of data. It can be empty. It can still be loading. It can have failed. You have to design every one of those, not only the one where everything works.

**Why this chapter exists:** This is where apps most visibly look unfinished. The **happy path** — the screen when everything works and the data is there — always gets designed. The other seven do not. Open a brand new phone and tap on a chat app: the chat list is empty. That empty screen is a real screen, and somebody had to decide what it says.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: text, buttons, pictures, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gaps exist, what an error message looks like. Like a school uniform rule sheet, but for a screen. |
| **State** | The condition a screen is in right now. Same screen, different condition: full of data, empty, loading, broken. A cricket scoreboard before the match starts and during the match is the same board in two states. |
| **Component** | One reusable piece of UI that you build once and use in many places. A button is a component. An error box is a component. |
| **Empty state** | What a screen shows when there is nothing to show. "No messages yet." |
| **Loading** | The moment after you asked for something and before it arrives. |
| **Spinner** | The small circle that turns round and round while you wait. |
| **Skeleton** | Grey blocks drawn in the exact shape of the content that is coming. YouTube shows grey rectangles where the video pictures will be. |
| **Loading indicator** | Anything on screen whose only job is to say "please wait". A spinner is one. A skeleton is one. A progress bar is one. |
| **Layout** | How the pieces are arranged on a screen. What sits where, and how much room each piece takes up. |
| **Layout shift** | The page jumping around while it loads. You go to tap something. The content finishes arriving and everything slides down. Your finger lands on the wrong thing. |
| **Toast** | A small message that appears on top of the screen and disappears by itself after a few seconds. "Copied" is a toast. |
| **Banner** | A strip of message that stays on screen until the situation changes. The "No internet" strip is a banner. |
| **Popup** | A box that lands on top of everything and makes you tap it before you can carry on. It stops whatever you were doing. |
| **Server** | The other computer your app talks to over the internet. Your phone asks it for data, and it sends the data back. When people say "the app is down", they usually mean the server did not answer. |
| **Offline** | The phone has no working internet connection right now. |
| **Stale data** | Data on screen that was correct earlier but may be wrong now. Old data. |
| **Timestamp** | The way a computer writes down a moment in time. Often a long number, such as `1755353011`. A person cannot read it at a glance. |
| **Optimistic** | Showing the result of an action straight away, before the server has confirmed it. If it later fails, you undo it on screen. |
| **Truncate** | To cut text short because there is not enough room for all of it. |
| **Wrap** | What text does when it runs out of room on one line and carries on onto the next line. |
| **Ellipsis** | The three dots `…` you put at the end of cut text, to show there is more. |
| **Tooltip** | A small label that appears on a computer screen when you rest the mouse pointer on something without clicking. |
| **Virtualise** | Only draw the rows that are on screen right now. If the list has 4000 rows and 15 fit on the screen, you draw 15. The app still knows about the rest, but it does not draw one until you scroll down to it. |
| **Frame / dropped frames** | A screen redraws itself many times a second. Each redraw is a frame. If your app cannot keep up, frames get dropped and scrolling looks jerky. |
| **Input** | A box you type into. The search bar is an input. |
| **Field** | One single question in a form, such as the email box. |
| **Card** | A rectangle on screen that holds one item's information. One video on YouTube's home page sits in a card. |
| **Filter** | A rule you switch on to hide items you do not want to see, such as "show only unread". |
| **Onboarding** | The teaching screens a new user sees when they first use a feature. |
| **Queue an action** | Store what the user did and send it later, when the internet comes back. |
| **URL** | A web address, such as `https://example.com/some/very/long/path`. |
| **Plural forms** | The way a word changes for one thing versus many things. "1 message" but "3 messages". |
| **Taxonomy** | A sorted list of types. In this chapter it means the list of the kinds of error your app can have. Each kind gets its own fixed place on screen. |

---

## 8.1 The seven states beyond the happy path

Besides the one screen where everything works, every screen in your app has seven more states. Design all seven, or your app will look unfinished in the places users notice most.

Here are the seven, and the question each one has to answer for the user.

| State | Question it answers |
|---|---|
| Empty | There is nothing here. Why, and what now? |
| Loading | Something is coming. How long? |
| Error | It failed. What do I do? |
| Offline / stale | This data is old. How old? |
| Partial | Some of it arrived. |
| Too long | The text is huge. Where does it cut? |
| Too many | 4000 items in a list designed for 12. |

Two rows in that table need a few extra words.

**Partial** means part of the data arrived and part of it did not. The list of chats loaded, but the profile pictures next to them are still blank squares.

**Too many** means the list grew far past the size you pictured. You designed it while imagining about 12 items. A real user has 4000 in it.

Design them as **system patterns**, not per screen.

**What this means:** A "system pattern" is one design that you decide once and then use on every screen. Decide once what every empty screen looks like. Decide once what every error box looks like. Do not decide again on each new screen.

Otherwise every screen invents its own and the app feels like five apps.

**What this means:** Say the home screen shows "Nothing here". The search screen shows "0 results found". The profile screen shows a sad face picture. To the user it feels like three different products stuck together. They will not be able to say why. They will feel it anyway. And an app that feels stuck together is an app people trust less.

Below is the version to avoid. Three screens, three separate inventions, decided by whoever built each screen.

```
HomeScreen     empty text: "Nothing here"       big grey circle
SearchScreen   empty text: "0 results found"    no picture
InboxScreen    empty text: "Your inbox is bare" small sad face
```

Below is the version to use. One shared design, filled in with different words.

```
EmptyState component  =  picture + title + one line of explanation + one button

HomeScreen     EmptyState  title: "No posts yet"
SearchScreen   EmptyState  title: "No results for 'shoes'"
InboxScreen    EmptyState  title: "You are all caught up"
```

---

## 8.2 Empty is three different designs

"Empty" is not one situation. It is three. Each one needs its own screen, because the user is feeling three different things.

This is the most common mistake. One generic "No items" for all three.

**What this means:** "Generic" means one all-purpose message, written to cover every case at once. It ends up fitting none of them properly. The screen is technically correct and completely useless.

| Type | User feeling | What to show |
|---|---|---|
| **Never had any** (first run) | Curious | Teach. Explain the feature + a primary action to create the first one. |
| **Filtered to nothing** | Frustrated | "No results for *xyz*." + a **Clear filter** button. Never show onboarding here. |
| **Cleared on purpose** | Satisfied | A calm confirmation. "All done." No sales pitch. |

Read that table one row at a time.

**Never had any** is a brand new user on a brand new phone. Their chat list has never had a single chat in it. They are curious, not annoyed. So you teach them. Say what this screen is for. Then give them one clear button that makes their first item. A "primary action" is the single most important button on the screen. It is the one you make look strongest, so the eye lands on it first.

**Filtered to nothing** is a user who asked for something and got nothing back. Maybe they typed "shoes" in the search box. Maybe they switched on a filter. They are frustrated. They know the app works, because they had items a second ago. Showing them a teaching screen here is insulting, because they are not new. Worse, it hides the one thing they actually need: the way back to their items. So show what they searched for, and give them a button that clears the filter.

**Cleared on purpose** is a user who finished everything. Their to-do list is empty because they did all the tasks. They feel good. Do not sell them anything here. Drop an advert or a "Try Pro" button into that moment and you take a small win away from them. You hand them a chore instead. They will remember your app as the thing that nagged them. A calm "All done" is the whole design.

Below is the version to avoid. One message covering three completely different moments.

```
Wrong:  all three show  "No items yet"
```

Below is the version to use. Three separate screens, one for each feeling.

```
Right:  three different screens

  First run       "Keep your tasks here"   [ Add your first task ]
  Filtered        "No results for 'xyz'"   [ Clear filter ]
  Cleared         "All done."              (no button needed)
```

---

## 8.3 Loading

### The under-200ms rule

> If it will finish in under ~200ms, **show nothing**.

**What this means:** `ms` means millisecond, one thousandth of a second. 200ms is one fifth of a second. If the thing you are waiting for will arrive faster than that, do not show a spinner at all. Leave the screen as it is.

A spinner that flashes for 100ms makes the app feel *slower*, not
faster. Add a delay before showing any loading indicator.

**What this means:** A **loading indicator** is anything on screen whose only job is to say "please wait". A **spinner** is the most common one. It is the little circle that turns while you wait. If it appears and vanishes in 100ms, the user sees a flicker. Their eye catches the flash and reads it as "something is struggling here". Nothing would have felt instant. A flash feels broken. So you wait about 200ms first. Only show the spinner if the answer has still not arrived by then.

Below is the version to avoid. The spinner appears the moment you ask.

```
tap  ->  show spinner immediately  ->  data arrives after 90ms  ->  hide spinner
         (the user sees a 90ms flicker)
```

Below is the version to use. The spinner waits its turn.

```
tap  ->  wait 200ms  ->  data arrived at 90ms?  yes -> never show a spinner at all
                      ->  still nothing?         yes -> now show the spinner
```

### Which indicator to use

There is more than one way to say "please wait". Pick by situation, using this table.

| Situation | Use |
|---|---|
| You know the layout that is coming | **Skeleton** (grey blocks in the real shape) |
| You do not know the shape | Spinner |
| The action is small and likely to succeed | **Optimistic** — show the result immediately, roll back if it fails |
| Long job with known progress | Progress bar with a percentage |

Some of those words, spelled out.

A **skeleton** is grey blocks drawn in the exact shape of the content that is coming. Open YouTube on a slow connection. You see grey rectangles where the video pictures will be. You see grey bars where the titles will be. You already know the shape of what is coming, so you draw that shape while the user waits.

**Optimistic** means you show the result before the **server** has answered. Send a message on WhatsApp when the signal is weak. The message appears in the chat straight away. Beside it sits a small clock or a single tick, which means "not confirmed yet". The app has assumed the message will go through. If it does not, the app takes the message back and tells you. That taking back is what "roll back" means in the table. Only do this for small actions that nearly always work. Do not do it for something serious, like sending money. The user watches it succeed, then watches it get taken back. That is frightening.

A **progress bar with a percentage** is for a long job. Use it only when you can really measure how far along you are. Uploading a video is the normal example, because you know how much of the file has been sent. Only show a percentage if you truly know the number. A made-up percentage jumps to 99% and sits there for a minute. After that the user stops believing anything your app says.

### Skeletons must match the real layout

If your skeleton is 3 rows and the real content is 5 rows, the page
jumps when it loads. That jump is called layout shift and it feels
broken. Reserve the exact space.

**What this means:** **Layout shift** is the page jumping while it loads. You see a button. You move your thumb towards it. The rest of the content loads and everything slides down. Your thumb lands on the wrong thing. It is one of the most annoying things a screen can do. The user blames your app for whatever they hit by mistake. "Reserve the exact space" means one thing. The grey blocks must take up as much room as the real content will need. Then nothing moves when the real content arrives.

Below is the version to avoid. The grey blocks are smaller than what arrives.

```
While loading:        After loading:
  [ grey row ]          [ real row 1 ]
  [ grey row ]          [ real row 2 ]
  [ grey row ]          [ real row 3 ]
  [ Open button ]       [ real row 4 ]
                        [ real row 5 ]
                        [ Open button ]   <- the button jumped down two rows
```

Below is the version to use. The grey blocks hold the exact space the real rows will need.

```
While loading:        After loading:
  [ grey row ]          [ real row 1 ]
  [ grey row ]          [ real row 2 ]
  [ grey row ]          [ real row 3 ]
  [ grey row ]          [ real row 4 ]
  [ grey row ]          [ real row 5 ]
  [ Open button ]       [ Open button ]   <- the button did not move
```

---

## 8.4 Error — you need a sorted list of error kinds, not one error box

Errors are not all the same size, so one error box cannot do the job. You need a short sorted list of error types. Each type needs a fixed place on screen.

The proper name for a sorted list of kinds is a **taxonomy**. You do not have to use that word, but you will meet it, so it is worth knowing.

**What this means:** A **component** is one reusable piece of UI. Building a single "ErrorBox" component and using it everywhere is the mistake. A wrong email address and a **server** that is not answering are not the same event. They must not look the same. They must not appear in the same place. If they do, the user cannot tell a small typing mistake from a total failure. They will not know whether to fix something or to wait.

| Level | Where it shows | Example |
|---|---|---|
| **Field** | Under one input | "Email is not valid" |
| **Section** | Inside one card or list | "Could not load messages. Retry" |
| **Screen** | Full page | "This session could not be opened" |
| **Toast** | Floating, temporary | "Copied" / "Failed to send" |

Read the table as four sizes, smallest first.

A **field** error is about one box you typed in. It sits right under that box, where your eye already is.

A **section** error is about one part of the screen. It sits inside that part, and the rest of the screen keeps working normally.

A **screen** error means nothing on this page could load. The message takes the whole page, because there is nothing else to show. The table says "This session could not be opened". A "session" there means one thing the user had open, such as one chat or one document.

A **toast** is a small message that appears on top of the screen and fades away by itself. Use it only for news the user does not have to act on. It will be gone before a slow reader has finished it. So never hide something important in one. If you put "Your payment failed" in a toast, some people will never see it at all.

### Every error message answers three questions

Below are the three questions, with a real example answer next to each. If your message cannot answer all three, it is not finished.

```
1. What happened?     "Could not save your changes."
2. Why?               "You are offline."
3. What do I do now?  [ Retry ]  (your text is saved)
```

Banned: `"Something went wrong"` with no cause and no action.
It is the most common mistake in shipped apps.

**What this means:** "Something went wrong" tells the user nothing they did not already know. It gives no reason and no next step, so the user is stuck. This is the mistake real shipped apps make more than any other. Do not ship it.

Below is the version to avoid.

```
Something went wrong.
                     [ OK ]
```

Below is the version to use. Same failure, three answers.

```
Could not save your changes.
You are offline.
Your text is saved on this phone.
                     [ Retry ]
```

### Error text rules

Four rules for the words themselves.

- Plain language. No error codes as the main message.
- Never blame the user.
- If there is a technical detail, hide it behind "Details".
- Always give a way forward: Retry, Go back, Contact support.

Each of those, one at a time, with the bad version first.

**Plain language. No error codes as the main message.** An error code is a number or a short label written for programmers. `ERR_CONN_REFUSED` and `Error 500` are error codes. The user cannot do anything with one. As the main message it is the same as telling them nothing at all.

```
Bad:   Error 500
Good:  We could not reach the server.   [ Retry ]
```

**Never blame the user.** The message should describe what happened. It should not tell the person off. Words like "invalid" and "you failed to" make people feel stupid. People who feel stupid stop using the app. Say what the app needs instead.

```
Bad:   You entered an invalid date.
Good:  Use the format DD/MM/YYYY, for example 05/08/2026.
```

**If there is a technical detail, hide it behind "Details".** The technical text can stay in the app. Your support team may need it, or a friend who is good with computers. It does not go first. It sits underneath, behind a tap, where only the people who want it will find it. A line like `TypeError at line 412 in uploader.js` is programmer's language for "the code broke, and here is the spot". It means nothing to the person holding the phone. Showing it first tells them the app has given up on explaining itself.

```
Bad:   Upload failed: TypeError at line 412 in uploader.js
Good:  Upload failed. Check your connection.
       [ Retry ]   [ Details ]      <- the code lives behind "Details"
```

**Always give a way forward.** Every error screen ends with something the user can press. An error with no button is a dead end. The only move left is to close the app. A good number of the people who leave an app that way never open it again.

```
Bad:   This page could not be opened.
Good:  This page could not be opened.
       [ Retry ]   [ Go back ]   [ Contact support ]
```

---

## 8.5 Offline and stale data

When the internet is gone, the user must be told. Tell them quietly. Never block the screen to do it. And any old data still on screen must be labelled as old.

**What this means:** **Offline** means the phone has no working internet right now. **Stale data** is data that was right earlier and may be wrong now. A bank balance you loaded an hour ago is stale data.

Decide and show:

- Am I offline right now? (a persistent, quiet banner — not a popup)
- How old is this data? ("Updated 4 minutes ago")
- Can I still act? (queue the action, or disable it and say why)
- What happens when I come back online? (auto-retry, or a Retry button)

Each of those four, in easy words.

**Am I offline right now?** Show a thin strip at the top saying "No internet". A **banner** stays until the situation changes. "Persistent" means it does not disappear on its own. It must not be a **popup**. A popup is a box that covers the screen and makes you tap it before you can carry on. The user did nothing wrong. Stopping their work to announce it makes a small problem feel like a big one.

```
Bad:   a popup in the middle:  "You are offline."  [ OK ]
Good:  a thin grey strip at the top:  No internet — showing saved data
```

**How old is this data?** Put the age next to the data, in words a person can read. "Updated 4 minutes ago" is the exact style. Do not print a raw **timestamp**. A timestamp is how a computer writes down a moment in time, usually as a long number. Nobody can work out from `1755353011` whether the number on screen is fresh or a day old. ("Sync" in the bad example below is short for synchronise. It means the moment your app last fetched fresh data from the **server**.)

```
Bad:   Last sync: 1755353011
Good:  Updated 4 minutes ago
```

**Can I still act?** You have two honest choices. The first is to **queue the action**. That means you store what the user did. You send it later, when the internet comes back. The second choice is to switch the button off and write one short line saying why. What you must not do is leave the button looking normal and then ignore the tap. The user will press it again and again. Then they will decide the app is broken.

```
Bad:   [ Send ]     (looks fine, tap does nothing, no message)
Good:  [ Send ]     -> "Will send when you are back online"
  or:  [ Send ]     switched off, with the line "Needs internet"
```

**What happens when I come back online?** Decide this before you build it. Either the app retries by itself, or the user gets a Retry button. Tell the user which one it is.

```
Bad:   the banner disappears and nothing else happens
Good:  the banner turns into "Back online — updating…" and the data refreshes
```

Never silently show old data as if it were live.

**What this means:** Showing an hour-old number with no label is the app lying to the user. A person may act on that number. Always mark old data as old.

---

## 8.6 Long content

Text does not care about your layout. Somebody out there has a name that is 60 letters long. Somebody will paste in a web address longer than the whole screen. Decide now what happens to text that does not fit. If you do not decide, the layout decides for you, and it always decides badly.

Write the rules once:

| Thing | Rule |
|---|---|
| List row title | 1 line, ellipsis at the end |
| List row subtitle | 2 lines max |
| Card body | 4 lines, then a "Show more" |
| Very long word / URL | Break it, do not let it push the layout wide |
| Code block | Scroll horizontally inside its own box — never scroll the page |

That table decides what happens to text that does not fit, in five common places.

A **list row** is one item in a list, such as one chat in a chat list. Its title is the name at the top. Its subtitle is the smaller line underneath, like the preview of the last message.

An **ellipsis** is the `…` you put at the end of cut text, so the reader knows there was more.

A **URL** is a web address. A **code block** is a box of computer code. The code block rule matters because a page that scrolls sideways is horrible to read. The reader has to drag left and right for every line of ordinary text. Keep the sideways scrolling inside the box.

Every limit in that table is there to stop a real problem. Here is the problem each one stops.

**List row title, 1 line.** Give it one line and every row in the list is the same height. Let it **wrap** onto three lines and the rows become different heights. A list of uneven rows is hard to skim, because the eye has nowhere steady to land.

**List row subtitle, 2 lines.** Two lines is enough to preview a message. Without a limit, one chatty person's message pushes the next row half a screen down. The user then scrolls past three rows thinking they have seen ten.

**Card body, 4 lines then "Show more".** Without a limit, one very long post fills the whole screen. Everything under it is buried, and the user never learns those other cards exist.

**Very long word or URL, break it.** A single unbroken word that is wider than the screen drags the whole layout sideways with it. Every other screen in the app then looks slightly wrong too, because the page has grown wider than the phone.

"Write the rules once" means these decisions belong to the whole app, not to each screen. Decide once that every list row title is 1 line. Then no one has to think about it again.

Below is the version to avoid. Nothing was decided, so every place behaves differently.

```
Chat list:     long names wrap onto 3 lines, rows become different heights
Search list:   long names get cut with no dots, so it looks like the real name
Profile card:  a long URL pushes the whole screen sideways
```

Below is the version to use. The rules from the table, applied.

```
Chat list title:     Ramachandran Venkatarama…      (1 line, ends in …)
Chat list subtitle:  Hey, are you coming to the
                     match tomorrow evening or…     (2 lines maximum)
Card body:           4 lines, then  [ Show more ]
Long URL:            https://example.com/a/very/
                     long/path/that/wraps          (broken, screen stays put)
Code block:          < the box itself scrolls sideways, the page does not >
```

Also decide: does truncated text get a way to see the full value?
(Tap to expand, long-press to copy, tooltip on desktop.)

**What this means:** **Truncated** text is text you cut short. If you cut a name, the full name still exists somewhere. Decide how a user gets to see all of it. There are three normal ways. Tap it and let it open out. Hold a finger on it to copy it. On a computer, rest the mouse pointer on it and let a small label appear. That small label is called a **tooltip**. Pick one way and use it everywhere in the app, so the user only has to learn it once.

---

## 8.7 Zero, one, many

A list of 1 item and a list of 4000 items are different designs.

**What this means:** The same list screen behaves completely differently at different sizes. You must test it empty, with exactly one item, and with thousands. Most bugs live at those edges, not in the middle.

- 0 → empty state
- 1 → does the header still say "1 items"? Fix plurals.
- Many → virtualise the list, or you will drop frames
- Very many → do you need search, grouping, or a cap with "Show all"?

Each line, in easy words.

**0 items** means you are showing an empty state. Go back to section 8.2 and decide which of the three empties this one is.

**1 item** is the plural trap. **Plural forms** are how a word changes between one and many: "1 message" but "3 messages". Most people write the counting text once, for many, and never check what it says at 1. Then the screen reads "1 items". It is a tiny mistake, and it makes the whole app look careless.

```
Bad:   1 items
Good:  1 item
```

Different languages change words differently, which is covered in [the languages chapter](03-internationalization.md).

**Many** means you must **virtualise** the list. Virtualise means: only draw the rows that are actually on screen right now. A phone can draw about a screenful of rows smoothly. Ask it to draw 4000 and it will stutter. The screen redraws itself many times a second. Each one of those redraws is a **frame**. When the phone cannot keep up, some frames never get drawn at all. That is what "dropped frames" means, and the user sees it as jerky, sticky scrolling.

```
Bad:   draw all 4000 rows, keep 3990 of them off screen, scrolling stutters
Good:  draw the ~15 rows on screen, swap them as the user scrolls
```

**Very many** is a design question, not a speed question. Even a perfectly smooth list of 4000 rows is unusable if the user cannot find anything. So decide: a search box, groups with headings, or showing the first few with a "Show all" button. A "cap" means a limit on how many you show at first.

```
Bad:   4000 rows, no search, no grouping — the user scrolls forever
Good:  a search box at the top, rows grouped by date, [ Show all ] at the end
```

---

## 8.8 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] Three separate empty designs (first-run / filtered / cleared). A new user, a search with no results, and a finished list each get their own screen.
- [ ] Loading indicators delayed ~200ms. Nothing spinning appears until the wait passes about one fifth of a second.
- [ ] Skeletons match the real layout exactly. The grey blocks hold the same space as the real content, so nothing jumps.
- [ ] Four error levels defined (field / section / screen / toast). Under one input. Inside one card or list. The whole page. And the small message that fades away.
- [ ] Every error says what, why, and what next. It names what happened, gives the reason, and offers a button to press.
- [ ] Offline banner + data age + queued actions. A quiet strip when there is no internet. A line saying how old the data is. Actions stored and sent later.
- [ ] Truncation rules written down per role. You decided in advance how many lines each kind of text gets before it is cut.
- [ ] Plurals handled. The app says "1 item", never "1 items".
- [ ] Long lists virtualised. Only the rows on screen are drawn, so scrolling stays smooth.
