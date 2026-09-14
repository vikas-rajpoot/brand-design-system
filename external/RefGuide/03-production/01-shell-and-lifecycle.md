# 14. The Screens Around Your App

**In one line:** Your app needs screens for opening and for updating. It needs them for logging back in, and for coming back after the phone closed it. Design these on purpose. Do not build them in a panic the week before launch.

**Why this chapter exists:** These screens do not belong to any feature, so nobody is put in charge of them. They get built at the last minute by whoever is free. Yet a user sees the opening screen every single time they open your app. It is the most-viewed screen you own. It is also usually the least designed.

Other chapters call these the **shell** screens, and the moments they cover are your app's **lifecycle**. Both words are explained in the table below.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps. |
| **OS** | Short for "operating system". The software that runs the whole phone: Android or iOS. Your app is a guest inside it. The OS can close your app whenever it wants. |
| **Shell** | The screens wrapped around your real app. Not the feed, not the chat, not the profile. The opening screen, the "please update" screen, the "you are logged out" screen. |
| **Lifecycle** | The life of your app from opening to closing. Opening, going to the background, being killed by the phone, being opened again. |
| **Splash screen** | The screen you see for the first second after tapping the app icon, before the real content appears. WhatsApp shows its name and logo for a moment. That moment is the splash screen. |
| **Cold start** | Opening the app when it was fully closed, not sitting in the background. The app has to build itself from nothing. This is the slowest way to open an app. |
| **Onboarding** | The screens shown the very first time somebody opens your app. "Welcome", "choose your language", "allow notifications". |
| **Force upgrade** | A screen that blocks the app and says "you must update to continue". You use it when the old app version no longer works with your server. |
| **Server** | The computer, somewhere else, that your app talks to over the internet. It holds the messages, the accounts, the videos. Your app is mostly a window onto it. |
| **Maintenance mode** | You switch the server off on purpose to fix or upgrade it. The app must say so instead of showing a broken screen. |
| **Session** | Your state of being logged in. When you log in, a session starts. When it ends, the app forgets who you are and asks you to log in again. |
| **Session expired** | Your logged-in state ran out. The app no longer knows who you are, so it asks you to log in again. |
| **Re-auth** | Short for "re-authenticate". Proving who you are again, usually by logging in a second time. |
| **Not authorised** | The thing exists, but this account is not allowed to see it. Like a school notice board that only teachers can read. |
| **Deep link** | A link that opens one exact page inside an app, not the app's home screen. A YouTube link opens that one video, not the YouTube home feed. |
| **State restoration** | Putting the user back exactly where they were after the phone closed your app in the background. Same screen, same scroll position, same half-typed text. |
| **State** | What the app is currently holding: which screen is open, what you have typed, how far you have scrolled. |
| **Scroll position** | How far down a list you had scrolled. Halfway down a long chat, for example. |
| **Draft text** | Text you have typed but not sent yet. The half-written message sitting in the box. |
| **App switcher** | The screen you get when you swipe up and hold, or double-tap the home button. It shows small pictures of your open apps so you can jump between them. |
| **Foreground / background** | An app is in the **foreground** when it is on screen and you are using it. It goes to the **background** when you switch away without closing it. |
| **Force-kill** | Closing an app completely by swiping it away in the app switcher. Switching away from an app is not the same thing. Force-kill really ends it. |
| **Crash** | The app stops on its own because of a bug, and shuts down without asking. |
| **Crash report** | A file your app sends to you after a crash, describing what went wrong. Useful, but it can accidentally contain private data. |
| **Skeleton (layout skeleton)** | The bare shape of a screen with no content in it yet. Grey blocks where the text and pictures will land. Like a page with the boxes drawn but nothing written in them. |
| **Header** | The bar across the top of a screen. It usually holds the screen's title, and a back arrow on the left. |
| **Brand colour** | The main colour of your app, taken from your logo. Purple if your logo is purple, green if it is green. |
| **Sheet** | A panel that slides up from the bottom of the screen. The "Share to..." panel on Instagram is a sheet. |
| **Store** | The App Store or Google Play, where a user downloads and updates apps. |
| **Startup budget** | A time limit you set for how long opening the app may take. If it goes over the limit, that counts as a bug. |
| **Notification** | The message your app pushes to the phone when the app is not open. The banner at the top, or the line on the lock screen. |
| **Lock screen** | The screen you see before unlocking the phone. Anybody holding the phone can read it without a password. |
| **Screen share** | Showing your live screen to other people over a call, the way a teacher projects their laptop. Everyone on the call sees whatever is on the screen, including your app. |
| **Capture** | Any way a screen's contents get copied: a screenshot, a screen recording, or a screen share. Some platforms let a window ask to be left out of capture. |
| **Badge** | The little number on your app icon. "3" on WhatsApp means three unread things. |
| **Quiet hours** | A time range when your app may not send notifications. It stops your app waking people at night. |
| **Opt-out** | A switch the user turns off to stop getting one kind of message, while still getting the others. |
| **Secrets** | Private values like passwords, login keys and card numbers. Things that must never be written into a log file or shown on screen. |
| **Log** | A running list of notes your app writes down about what it did. You read it later to work out why something broke. |
| **API** | The agreed way two pieces of software talk to each other. Your app and your server both follow that agreement. If you change the agreement, old copies of the app stop working. |
| **Error code** | A short code a computer shows when something fails, like "404". It means something to an engineer. It means nothing to the person holding the phone. |
| **One-time password (OTP)** | The short code sent to your phone or email. You type it in once, to prove it is really you. |
| **Request in flight** | A message your app has sent to the server, where the answer has not come back yet. It is "in the air". |
| **Empty stack** | The app's list of screens you can go back through has run out. You press back and land on nothing. |

---

## 14.1 The screens you must design

There are ten of these screens. Design all ten.

These moments happen whether you plan for them or not. If you do not design a screen for one, the user still gets shown something. It is usually a blank page or a raw error code. So the only real choice you have is whether the screen looks planned or accidental.

| Screen | When it shows |
|---|---|
| **Splash / cold start** | App opening |
| **First run / onboarding** | Very first launch |
| **Force upgrade** | This app version no longer works with the server |
| **Maintenance mode** | Server is down on purpose |
| **Session expired** | Login is no longer valid |
| **Not authorised** | Deep link to something you cannot see |
| **Not found** | Deep link to something deleted |
| **No connection** | Offline at startup |
| **Crash recovery** | App restarted after crashing |
| **App switcher preview** | The OS screenshot of your app |

Read the table as a list of moments, not features. Each row is a moment where the normal app is not available. Here is each row in plain words:

- **Splash / cold start.** The app is opening from fully closed. Nothing of yours is on screen yet.
- **First run / onboarding.** The welcome screens on the very first launch. The user has never seen your app before.
- **Force upgrade.** The app version on the phone no longer works with your server. The screen blocks the app until the user updates.
- **Maintenance mode.** You switched the server off yourself, to fix or upgrade it. Nothing is broken. It is planned.
- **Session expired.** The login ran out. The app no longer knows who the user is.
- **Not authorised.** The thing exists, but this user is not allowed to see it.
- **Not found.** The thing has been deleted. Nobody can see it now.
- **No connection.** There was no internet at the moment the app opened.
- **Crash recovery.** The app died from a bug and the user has opened it again.
- **App switcher preview.** The small picture of your app that the phone shows when the user swipes between open apps.

Each needs: a clear message, one obvious action, and a way out.

**What this means:** Three things, every time.

1. The **message** says what happened, in words a normal person understands. Without it the user has no idea what went wrong.
2. The **one obvious action** is a single main button. Give the user four choices while they are already confused and most of them will pick nothing and leave.
3. The **way out** means the user is never trapped. There is always a back arrow, a close button, or a "go home". The one exception is a screen whose whole job is to block, like force upgrade.

Below is a "not found" screen that fails all three. The message says nothing, there is no button, and there is no way back. "Error 404" is a code from the web. It means something to an engineer. To the person holding the phone it is noise.

```
❌  "Error 404"
    (no button, no back arrow)
```

Below is the same screen done right. One plain sentence, one main button, and a way back.

```
✅  "This post was deleted."
    [ Go to Home ]        ← one obvious action
    ← back arrow          ← a way out
```

---

## 14.2 Cold start

The splash screen should look **exactly** like the first real screen's
background and layout skeleton. Then there is no jump when it swaps.

**What this means:** The **splash screen** is the first second after the app icon is tapped. The **first real screen** is what comes right after. Make the splash use the same background colour as that real screen. Give it the same rough shapes too. Then, when the swap happens, almost nothing moves and the eye sees no jump.

A **layout skeleton** is the bare shape of a screen with no content in it. The **header** is part of that shape: the bar across the top holding the title. Under it sit the empty rows where the real content will land.

If you skip this, the user sees a flash of one colour and then another. Everything on screen also slides into a new place. The app feels cheap and slow before it has shown a single word.

Think of a stage curtain painted to match the set behind it. When the curtain lifts, nothing jumps.

Below, look at what the eye sees between the two lines. In the first pair the colour and the shape both change at once. So the screen visibly flashes and jumps. ("Brand purple" here means a purple taken from the app's logo.)

```
❌  Splash: big centered logo on brand purple
    Then:   white list screen        ← visible flash and jump

✅  Splash: app background color + the header shape
    Then:   the same header, list fades in
```

In the second pair the background is already the right colour and the header is already in place. Only the list content arrives, and it fades in instead of snapping in.

Set a startup budget (see [the performance chapter](04-performance-and-assets.md)) and measure it.

**What this means:** A **startup budget** is a time limit you agree on before you build. It says how long opening the app is allowed to take. Write that number down. Then time the real app on a real phone, again and again.

A budget you never measure is a wish, not a budget. Without the measuring, the app gets a little slower with every new feature. Nobody notices from the inside, and one day users start saying the app is slow.

---

## 14.3 Force upgrade

You will need this eventually. Build it before you need it.

**What this means:** One day you will change your server in a way that breaks old copies of the app. On that day you need a screen that says "please update".

If you have not built that screen by then, it is too late. The old apps on people's phones will fail in strange ways. You cannot fix them from your side. The fix would have to live inside a new app version. That is exactly the version those users have not installed.

A **force upgrade** screen blocks the app completely until the user updates.

Below is how the check works. Read it top to bottom as the steps the app takes when it opens.

```
The server tells the app the minimum supported version.
If the app is older:
   Show a blocking screen.
   Message: what happened + what to do.
   Button:  "Update" → opens the store.
   No dismiss. No way past it.
```

Line by line:

- The **server** is the computer your app talks to. It sends down the oldest app version it still supports.
- The app compares that number with its own version number.
- If the app is older, it shows a screen that covers everything.
- The message says two things: what happened, and what to do about it.
- One button sends the user to the **store**, meaning the App Store or Google Play.
- There is no close button and no way around the screen. A user who slipped past would only land on broken screens and think your app is rubbish.

This is the one place in this chapter where "a way out" does not apply. The screen exists to block.

Below is a force upgrade screen that fails. The wording is written for engineers. It also has a "Later" button, which lets the user into an app that cannot work.

An **API** is the agreed way two programs talk to each other. Your app and your server both follow that agreement. That word belongs in your team chat, never on a user's screen.

```
❌  "API version mismatch (v3 < v5)"
    [ Update ]  [ Later ]     ← Later leads to a broken app
```

Below is the same screen done right. Plain words, one button, no escape.

```
✅  "This version of the app no longer works.
     Update to keep using it."
    [ Update ]                ← only one button, on purpose
```

Add a **soft** version too: "A new version is available [Update] [Later]".

**What this means:** A soft upgrade is the gentle version. The old app still works fine. You would like people to move to the newer one, but you are not going to force them. So you offer the update and you let them say "Later".

Two screens, two different jobs. The force upgrade is for when the old app is dead. The soft one is for when the old app is only out of date. Build both, and never use the blocking one for a small update. Block people too often and they stop opening the app at all.

---

## 14.4 Session expiry and re-auth

Your **session** is your state of being logged in. It does not last forever. When it ends, the app stops knowing who you are and has to ask again. **Re-auth** is the short name for that second login.

This never happens at a convenient time. It lands in the middle of whatever the user was doing. So decide in advance how it behaves, instead of finding out from an angry review.

Decide:

- Does the user land back on the same screen after logging in again?
  (They should.)
- Is their unsent input preserved? (It should be.)
- Does it show as a full screen or a sheet over the current screen?
- What if the session expires while a request is in flight?

Those four in plain words:

1. **Same screen after logging in again.** Say they were reading message 40 in a chat. After the second login they should be back at message 40. They should not be dumped on the home feed. The words "(They should.)" are the answer, not a soft suggestion. Send them home instead and they have to find their place again by hand.
2. **Unsent input preserved.** **Unsent input** is anything typed but not yet sent or saved. It must survive the login. Again, the bracket gives you the answer. Lose it and the user has to type the whole thing a second time.
3. **Full screen or a sheet.** A **sheet** slides up from the bottom. The screen behind it stays visible. A full screen replaces everything instead. Pick one of the two and use it everywhere. If different parts of the app do it differently, the app feels like it was built by strangers.
4. **Expires while a request is in flight.** A **request in flight** is a message already sent to the server. The answer has not come back yet. If the session dies at that exact moment, what should happen? Either the app sends the request again after login, or it drops the request and tells the user. Choose one now, for the whole app. If you leave it to each screen, each screen will do something different.

Losing a half-written message to a session expiry is a memorable
bad experience.

**What this means:** People forgive slow apps. They do not forgive an app that ate three paragraphs they had typed a minute earlier. A person remembers that. They tell a friend about it. They leave a one-star review about it.

Below is the bad version. The typed text is thrown away and the user is dumped at the start of the app.

```
❌  Session expires while typing
    → app jumps to Login
    → after login, lands on Home
    → the half-written message is gone
```

Below is the good version. The text is held, and the user returns to the exact place they left.

```
✅  Session expires while typing
    → login sheet slides up, draft kept
    → after login, same chat, same text still in the box
```

---

## 14.5 State restoration

The OS can kill your app at any time in the background.
When the user returns, they expect to be exactly where they were.

**What this means:** The **OS** is the operating system, Android or iOS. It needs memory for whatever the person is using right now. When memory runs short, it closes background apps to get some back. It does this without warning and without asking you. Your app does not get a say.

So your app has to save small notes about where the user was. Then it can rebuild itself from those notes when it opens again. That rebuilding is called **state restoration**.

Think of leaving a book face-down on the table and someone tidying it away. If you wrote the page number on a slip of paper first, you carry on reading. If not, you start hunting through the whole book.

Restore: current screen, scroll position, draft text, open sheets,
form values.

Those five, one at a time:

- **Current screen.** Which page was open when the app was closed.
- **Scroll position.** How far down the list they had reached.
- **Draft text.** Anything typed and not yet sent.
- **Open sheets.** Panels that had been slid up from the bottom of the screen.
- **Form values.** The boxes already filled in on a form: name, address, whatever they had done so far.

Miss any one of these and the user has to redo that piece of work by hand.

Test it by force-killing the app and reopening it.

**What this means:** **Force-killing** means swiping the app away in the app switcher, so that it fully ends. Only switching away from the app is not the same thing. Do the real force-kill on purpose, then open the app again.

That is the only honest test. Switching apps and switching back proves nothing, because the app never actually died in between.

Below is what a failed test looks like. Everything the user had built up is gone.

```
❌  Force-kill, reopen
    → back at Home
    → list scrolled to the top
    → the form is blank again
```

Below is what a passing test looks like.

```
✅  Force-kill, reopen
    → same screen
    → same scroll position
    → the form still filled in
```

---

## 14.6 Deep links

A **deep link** is a link that opens one exact page inside an app instead of the app's home screen. Tapping a YouTube link in WhatsApp opens that one video. That is a deep link doing its job.

The trouble is that a deep link can arrive at any moment, in any situation. The user might be logged out. The thing might be deleted. Your app must have an answer ready for each case.

Every deep link needs an answer for:

Below are the five situations. The left side is the situation, the right side is what your app must do.

```
Not logged in       → login, then continue to the target
Not authorised      → clear "you do not have access" screen
Target deleted      → "not found", with a way back
App not installed   → store page, then continue after install
Already deep inside → does back go to the previous screen, or home?
```

Each row in words:

- **Not logged in.** Show the login screen, and remember where they were going. After login, take them there. Do not drop them on the home screen and make them find the link again.
- **Not authorised.** **Not authorised** means the thing exists but this account may not see it. Say that plainly. Do not show a blank screen or a raw error code.
- **Target deleted.** The thing is gone for everyone. Say "not found", and give a button back to somewhere real.
- **App not installed.** Send them to the **store** — App Store or Google Play. After they install and open the app, continue to the page the link pointed at.
- **Already deep inside.** The user is already three screens into your app. They tap a link that opens a fourth screen. Decide now what the back button does from there. If you do not decide, the code will do whatever it happens to do. That is rarely what a person expects.

That last one is a real bug source: a user opens a link, taps back,
and lands on an empty stack.

**What this means:** Your app keeps a list of the screens you can go back through. An **empty stack** means that list has run out. The user presses back and there is nothing behind. They get a blank screen, or the app shuts. To them it looks like a crash, even though nothing crashed.

Below is the broken behaviour.

```
❌  Deep link opens Post #12
    → user taps back
    → blank screen, nothing behind it
```

Below is the fixed behaviour. Something sensible is always waiting behind the linked page.

```
✅  Deep link opens Post #12
    → user taps back
    → Home
```

---

## 14.7 Privacy in the app switcher

The OS takes a screenshot of your app when it goes to the background,
and shows it in the app switcher.

**What this means:** The **app switcher** shows your open apps as small pictures. You get to it by swiping up and holding, or by double-tapping the home button. Those small pictures are real screenshots. The phone took them of your app at the moment you left it. You did not ask for that and you cannot switch it off. Whoever is holding the phone can see them.

If your app shows private content (messages, money, health, files):

Below is what your app must do at the two moments. **Background** is when the app leaves the screen; **foreground** is when it comes back.

```
On background  → blur or cover the screen
On foreground  → remove the cover
```

So, the moment the app is leaving the screen, you drop something over the content. That can be a blur, or a plain panel with your logo on it. The phone then photographs the cover instead of the real content. When the user comes back, you take the cover off again.

Below is the bad case. Somebody borrows the phone, opens the app switcher, and reads a private chat without unlocking anything.

```
❌  Bank app in the switcher showing the account balance
```

Below is the good case.

```
✅  Bank app in the switcher showing a plain logo panel
```

Also consider blocking screenshots on genuinely sensitive screens,
and never logging secrets where a screen recording or crash report
could capture them.

**What this means:** Two more habits.

First, some screens are private enough that you stop the phone taking a screenshot of them at all. A **one-time password** screen is a good example. That is the short code sent to a phone to prove it is really you. A photo of that code should not be sitting in anybody's gallery.

Second, **secrets** are values like passwords, login keys and card numbers. Never print them onto the screen. Never write them into your app's **log** either. The log is the running list of notes your app keeps about what it did.

Why it matters: a **crash report** is the file your app sends you after it dies from a bug. It carries those notes with it. A screen recording captures whatever was visible at the time. Both will carry a secret straight off the phone and out to you, or to somebody else. Once a password has been copied out like that, you have to treat it as no longer private.

### Screen sharing

The app switcher is not the only way other people see your screen. A **screen share** shows the live screen to everyone on a call, and people share their screens all day now — in meetings, in classes, on recordings that get kept forever. If your app is the kind that is open *during* those calls — notes, messages, a helper window, anything with private content — then a screen share shows your app to an audience the user never counted.

Decide this on purpose, the same way you decided the app-switcher cover:

- Some platforms let a window ask to be **excluded from capture** — it stays visible to the user but never appears in the share, the recording, or the screenshot. If your app's whole job is to be private while other people watch the screen, this is a launch feature, not polish.
- Where exclusion does not exist, give the user one obvious switch that hides the private content, and say plainly what it hides.
- Either way, tell the user which of the two they have. An app that *silently claims* to be invisible in shares, and is wrong on one platform, has published someone's private notes to a meeting.

Below is the failure, and it only has to happen once.

```
❌  User presents in a meeting → your helper window, full of their
    private notes, is in the recording → forever
```

Below is the version to use.

```
✅  Window marked excluded-from-capture where supported
    → the user sees it, the meeting never does
    Elsewhere: one switch — "Hide in screen shares" — honest about
    what it can and cannot do
```

---

## 14.8 Notifications

A **notification** is a message your app sends to the phone when the app is not open. The banner at the top of the screen, or the line on the lock screen.

A design surface you do not fully control, usually designed last.

**What this means:** A **design surface** is any place your app's design shows up. A notification is one of them, even though it sits outside your app. The phone decides how notifications look. It decides how long they can be and where they appear. You only supply the words and a few settings.

So this is a place where your app shows up in public wearing clothes you did not choose. Most teams never think about it until the week of launch. Then the words get written in a hurry, and that is what millions of people read.

Decide:

- Title / body style and length limits
- Grouping — 20 messages should be one grouped notification, not 20
- Badge rules — what counts, when it clears
- What a tap opens (a deep link, and all the cases in 14.6)
- Quiet hours, and per-type opt-outs
- **Never** put private content in a lock-screen notification by default

Each of those, spelled out:

- **Title / body style and length limits.** The **title** is the bold first line. The **body** is the line under it. Decide how both are written and how long each may be. The phone cuts off anything too long. Decide where the cut lands, or the phone will decide for you and chop a sentence in half.
- **Grouping.** **Grouping** means stacking related notifications into one. If twenty messages arrive from one chat, the user should see one line saying so. Twenty separate banners is how an app gets its notifications switched off for good.
- **Badge rules.** The **badge** is the small number on your app icon. Decide what counts towards it: unread messages only, or likes as well, or news from you as well. Then decide when it goes back to zero. A badge that never clears teaches people to ignore it.
- **What a tap opens.** Tapping a notification should open the exact page it is about. That is a **deep link**. So every one of the five cases in section 14.6 applies here too. A tapped notification can arrive while the user is logged out, or point at something already deleted.
- **Quiet hours, and per-type opt-outs.** **Quiet hours** is a time range where you send nothing. It exists so you do not wake somebody at 2 a.m. A **per-type opt-out** lets a user switch off one kind of message and keep the rest. They can turn off "someone liked your post" and keep "someone messaged you". Without that switch, their only choice is to block everything.
- **Never put private content in a lock-screen notification by default.** The **lock screen** can be read by anybody holding the phone. No password needed. So by default the notification must hide what it says. The user can turn the content back on if they want to. That choice is theirs, not yours.

Below is the bad notification. It groups nothing and it spills a private message onto a locked phone.

```
❌  Lock screen:
    "Riya: I'm leaving the hostel tonight, don't tell anyone"
    (and 19 more banners under it)
```

Below is the good version. One grouped line, and the content stays hidden until the phone is unlocked.

```
✅  Lock screen:
    "20 new messages"
```

---

## 14.9 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] **All 10 shell screens designed.** Every row of the table in 14.1 has a real design.
- [ ] **Splash matches the first screen — no flash.** The opening screen uses the same background and the same shapes as the screen after it.
- [ ] **Force upgrade built before it is needed.** The "you must update" screen exists now. Not on the day the old app breaks.
- [ ] **Session expiry preserves screen + unsent input.** After logging in again, the user is back where they were. Their typed text is still there.
- [ ] **State restoration tested by force-killing the app.** You swiped the app away, opened it again, and landed in the same place.
- [ ] **All 5 deep link cases handled.** Logged out, not allowed, deleted, app not installed, and where the back button goes.
- [ ] **App switcher blurred if content is private.** The phone's screenshot of your app shows a cover, not the real content.
- [ ] **Screen-share behaviour decided.** If the app holds private content and lives on screen during calls, it is excluded from capture where the platform allows it, offers a hide switch where it does not, and is honest with the user about which one they have.
- [ ] **Notification style, grouping and badge rules defined.** Written down and agreed as a team, not decided message by message.
