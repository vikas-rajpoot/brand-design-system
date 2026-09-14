# 15. Rules from Governments and App Stores

**In one line:** Some things in your app are not your choice. The law demands them. The app stores demand them. Until you build them, your app is blocked.

**Why this chapter exists:** Everything else in this guide makes your app better. This chapter is different. If you skip it, a real person at Apple or Google can refuse to publish your app. In some countries you can also be in trouble with the law. These are not opinions about looks. They are conditions for being allowed to exist.

These are "required" in the literal sense. You do not ship without them.

**What this means:** "Ship" means release the app to real users. There is no version of shipping where these parts are missing. You do not get to say "we will add it later".

> Note: laws differ by country and change over time. Confirm what
> actually applies to your product and your markets. This file lists
> the **design consequences**, which are the same either way.

**What this means:** The rules in India are not the rules in Germany. A rule that is true in 2026 may change in 2028. So do not treat this file as your legal answer. What this file gives you is the list of **screens you will have to design** because of these rules. That list stays the same no matter which country's rule forced it.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gap sizes exist, which screens exist. Like a school uniform rule sheet, but for a screen. |
| **App store** | The shop on a phone where people get apps. The App Store on iPhone, Google Play on Android. |
| **Platform** | The company and system you release on. Apple is one platform, Google is another. Each one has its own rule book, and the two rule books are not the same. |
| **Market** | A country or region where you release your app. India is one market. Germany is another. Laws change from market to market. |
| **Store listing** | Your app's page in the shop. The name, the pictures, the description and the data form people read before they download. |
| **App store review** | Before your app appears in the shop, a real person at Apple or Google opens it and checks it. They can say no. If they say no, your app is not published until you fix what they named. |
| **Ship / launch** | Release the app so real people can download and use it. |
| **Launch blocker** | A problem that stops the launch. You do not ship until it is fixed. |
| **OS** | Short for "operating system". The software that runs the whole phone: Android or iOS. It is above your app and controls it. |
| **Permission** | Your app asking the phone for the right to use something private, like the camera or the location. The phone will not hand it over unless the user agrees. |
| **Permission dialog** | The popup the phone itself shows: "Allow camera access?" with Allow and Don't Allow. You cannot design this popup. The phone owns it. |
| **Priming** | Showing your own screen first, to explain why you need a permission, before the phone's popup appears. Like telling a friend why you need their notebook before you put out your hand. |
| **Grant rate** | How many people tap Allow on the permission popup. If 100 people see the popup and 40 tap Allow, the grant rate is 40 out of 100. Higher is better. |
| **Flow** | A set of screens the user walks through in order, to finish one job. Signing up is a flow. Deleting an account is a flow. |
| **Consent** | The user saying yes to something, after being told plainly what it is. A yes that was tricked out of someone does not count. |
| **Settings** | The phone's own settings app, outside your app, where a user can turn a permission back on later. |
| **Screen reader** | Software that reads the screen out loud, for people who cannot see it. VoiceOver on iPhone, TalkBack on Android. |
| **Contrast** | How different two colours are in lightness. Light grey text on white has low contrast and is hard to read. Black text on white has high contrast. |
| **Font scaling** | The phone setting that makes all text bigger or smaller. Your app must still work when someone sets text to very large. |
| **Privacy policy** | A written page saying what information you collect about a user and what you do with it. |
| **Privacy labels / data safety** | A short form you fill in for the app store, listing what data your app collects. The shop shows it on your app's page, like an ingredients list on a food packet. |
| **Advertising identifier** | A number the phone gives your app that lets advertisers recognise the same person across different apps. |
| **Tracking consent** | Asking permission before you use that advertising identifier. |
| **Analytics** | Code that records what users do in your app, so you can count taps and screens. |
| **Cookie** | A small piece of data a website stores on the phone to remember a person between visits. |
| **Web view** | A web page shown inside your app, instead of in a browser. It looks like part of the app but it is a website. |
| **Age gate** | A screen that asks the user's age or date of birth before letting them in. |
| **In-app** | Inside your app itself. The opposite is sending the user out to a website in a browser. |
| **Deactivate** | Switch an account off for now, keeping the data, so the person can come back. Different from delete, which removes it. |
| **Irreversible** | Cannot be undone. Once done, there is no going back. |
| **Placeholder content** | Fake text or images put in during building, meant to be replaced before release. |
| **Lorem Ipsum** | The most common fake text. It looks like broken Latin: "Lorem ipsum dolor sit amet". |
| **Crash** | The app closing itself suddenly because something went wrong. |
| **Demo account** | A working username and password you give the app store reviewer, so they can log in and see your app. |
| **Sprint** | A short block of working time that a team plans in one go. Two weeks is the usual length. "Sprint 3" means the third block of work. |
| **Feed** | The scrolling list of posts on an app's home screen. |

---

## 15.1 Accessibility is often the law

Accessibility is not a favour you do for some users. In several places it is a legal requirement.

**What this means:** Accessibility means your app can be used by everyone. That includes people with low vision, people who hear poorly, and people whose hands shake. In several regions, ignoring this in an app for the public is against the law. Think of a new public building. It must have a ramp, not only steps. Software is now treated the same way.

In several regions, accessibility for consumer digital products is a
legal requirement, not a preference — for example the EU Accessibility
Act (applies to consumer digital products in the EU from mid-2025), and
ADA / Section 508 exposure in the US.

**What this means:** Two examples are named.

The **EU Accessibility Act** covers consumer digital products in the European Union. It applies from mid-2025.

**ADA** and **Section 508** are two United States rules. A company can be taken to court under them for shipping a product people with disabilities cannot use. In the United States this happens often, and it costs money and time even when the company wins.

"Consumer digital products" means apps and websites that ordinary people use. Tools built only for staff inside one company are a separate case.

**Design consequence:** everything in
[the accessibility chapter](../02-must-have/01-accessibility.md) stops being "nice to have".
Contrast, font scaling and screen reader support become launch blockers.

**What this means:** Three things change lists. They leave the "we should do this someday" list. They join the "we cannot release without this" list.

| Thing | What it means here |
|---|---|
| **Contrast** | Text must be different enough in lightness from the colour behind it to be readable. |
| **Font scaling** | When the user makes phone text large, your screens must still hold together. |
| **Screen reader support** | Every button must have a name that can be read out loud. |

A "launch blocker" is a problem that stops the release. Not a problem you note down for later.

The two plans below use the word **sprint**. A sprint is a short block of working time that a team plans in one go, usually two weeks. They also say "the feed", which is the scrolling list of posts on the home screen.

Below is the wrong way to plan this. Accessibility sits at the bottom, after the launch.

```
Sprint 1  Build the feed
Sprint 2  Build the profile
Sprint 3  LAUNCH
Sprint 4  Accessibility pass   <- too late, and in some markets illegal
```

Below is the right way. Accessibility is finished before the launch, not after it.

```
Sprint 1  Build the feed          (contrast + labels as you go)
Sprint 2  Build the profile       (contrast + labels as you go)
Sprint 3  Accessibility check     <- blocks the launch until it passes
Sprint 4  LAUNCH
```

The difference is not the amount of work. It is when the work happens. In the first plan, the app is already in front of real users before anyone checks it. Fixing contrast and labels then means changing screens you have already shipped.

Check with someone who knows your specific market. Do not guess.

**What this means:** Find a person who actually knows the law where you plan to release. Do not decide this from a blog post, and do not decide it from this file. Guessing about the law is how a launch gets cancelled.

---

## 15.2 Permission priming

Show your own explaining screen first. Only then let the phone show its popup.

**What this means:** A **permission** is your app asking the phone for something private, like the camera. The phone shows its own popup: "Allow camera access?" You cannot change that popup. **Priming** means putting your own screen in front of it, to explain why you are asking.

Never fire an OS permission dialog cold. You get **one** chance at
camera, microphone, notifications, location, contacts and photos.
If they say no, you cannot ask again — only send them to Settings.

**What this means:** "Cold" means with no explanation before it. This part is the reason the whole rule exists: **the phone shows that popup once**. If the user taps "Don't Allow", your app can never make the popup appear again. Not tomorrow, not after an update.

One route is left. You have to ask the user to open the phone's Settings app and turn the permission on by hand. Almost nobody does that. So in practice, a "Don't Allow" is permanent, and the feature behind it is dead for that user.

Six permissions are named as the ones this applies to: camera, microphone, notifications, location, contacts and photos.

Think of it like a single free ticket to a match. You cannot ask for a second one. So you do not waste it by showing up at the wrong gate.

### The pattern

Here is the order to follow. Read it top to bottom. Step 1 is your own screen. Step 2 is the phone's popup. Step 3 is what you do if the answer is no.

```
1. Your OWN screen first:
     - What you want access to
     - Why, in one sentence, in terms of their benefit
     - [ Not now ]   [ Continue ]

2. Only if they tap Continue → show the real OS dialog

3. If they say no to the OS dialog:
     - The app still works, in a reduced way
     - Show a clear path to enable it later in Settings
```

A few of those lines are worth spelling out.

**"Why, in one sentence, in terms of their benefit"** means say what the user gets, not what you get. Do not write "we need camera access for our media pipeline". Write "so you can add a photo to your post". ("Media pipeline" is builder talk. The person reading it has no idea what it means, and that is exactly why it is the bad example. Words the reader does not understand read as a reason to tap no.)

**"The app still works, in a reduced way"** means a no must not break the app. If someone refuses camera access, the rest of the app keeps running. They lose the photo button, not the whole product. An app that shows an error and stops working after a no will be uninstalled, and reviewers reject it too.

**"A clear path to enable it later"** means two things on screen. One line of text saying the feature needs the permission. One button that opens the right page in the phone's Settings app.

"Not now" must **not** trigger the OS dialog. That is the whole point —
it protects your one chance.

**What this means:** If a user taps "Not now" on your screen, nothing else happens. The phone's popup does not appear. Because the popup never appeared, your one chance is still unused. You can ask again next week, when they are actually trying to take a photo.

Below is the wrong version. Your screen and the phone's popup are both fired, so "Not now" still burns the one chance.

```
❌  Your screen: "Allow camera?"  [ Not now ]  [ Continue ]
        ↓ user taps Not now
    OS popup appears anyway → user taps Don't Allow
        ↓
    One chance gone. Forever.
```

Below is the right version. "Not now" ends the flow quietly, and the popup is still unused.

```
✅  Your screen: "Allow camera?"  [ Not now ]  [ Continue ]
        ↓ user taps Not now
    Nothing happens. Screen closes.
        ↓
    One chance still available. Ask again at a better moment.
```

This typically doubles grant rates. It is a designed screen and it
belongs in the design system.

**What this means:** The **grant rate** is how many people tap Allow. Adding your own explaining screen in front usually makes that number about twice as big. If 30 out of 100 people said yes before, roughly 60 say yes now. That is the same app, the same permission, and one extra screen.

This screen is something you design. It is not a small detail for one developer to invent alone on the day. It belongs in your **design system**, which is the written list of rules and screens your app follows. Keep it there and every permission in the app gets asked for in the same shape. Skip that step and each screen ends up worded differently. A user notices that. It looks careless, and fewer people say yes.

---

## 15.3 Ask at the right moment

Ask for a permission at the exact moment the user is trying to do the thing that needs it.

Ask for a permission at the point the user is trying to do the thing
that needs it — not at startup.

**What this means:** "At startup" means the moment the app opens for the first time. At that moment the user has seen nothing, wants nothing, and has no reason to say yes. Later, when they tap a button that plainly needs the permission, the request explains itself.

Below, the first line is the version to avoid and the second line is the version to use.

```
❌  App opens → "Allow notifications?"          (no context, gets denied)
✅  User taps "Notify me when done" → prime → ask
```

Read the good line in words. The user taps a button that says "Notify me when done". Your own explaining screen appears. If they tap Continue, the phone's popup appears. The request now matches what they were already trying to do.

Here is what goes wrong if you ignore this. Asking at startup means asking a person who has not seen your app yet. Most of them tap no. And a no is forever, as section 15.2 explained. So one badly timed popup on the first screen can kill notifications for most of your users, permanently.

---

## 15.4 Privacy and consent

Rules about privacy turn into real screens that someone on your team has to design.

Depending on your platform and market you may need:

- A privacy policy link, reachable from inside the app
- Privacy labels / data safety declarations in the store listing
- Tracking consent before any advertising identifier is used
- Cookie / analytics consent in web views
- Age gates, if relevant

Here is the same list again, one line each, in plain words.

| Item | What you actually build |
|---|---|
| Privacy policy link | A link inside the app that opens your privacy policy. Being on your website only is not enough — it must be reachable from inside the app. |
| Privacy labels / data safety | A form you fill in for the app store, listing what data you collect. The shop prints it on your app's page, where everyone can read it before downloading. Filling it in wrongly can get the app pulled from the shop. |
| Tracking consent | A screen that asks permission first. Permission to use the advertising identifier, which is the number that lets advertisers recognise the same person across different apps. |
| Cookie / analytics consent | A consent screen for web pages shown inside your app. It covers cookies, and any code that records what users do. |
| Age gate | A screen asking the user's age or date of birth before letting them in. Needed for some kinds of content. |

Pay attention to the words "if relevant" and "depending on your platform and market". They matter. Not every app needs every row in that list. Find out which rows apply to you, and to the countries you are releasing in.

Each of these is a **screen someone has to design**. Budget for them.

**What this means:** None of these appear by themselves. Each one is a real screen with text, buttons, spacing, and a plan for when something goes wrong. Put them in the plan with time attached, the same as any other feature. Teams that forget end up drawing a consent screen the night before launch. A screen made in an hour looks like a screen made in an hour. And this is often the very first screen a new user sees.

---

## 15.5 Account deletion

If people can make an account in your app, they must be able to delete it in your app.

Both major app stores require an **in-app** way to delete an account
if you allow account creation.

**What this means:** "Both major app stores" means Apple's App Store and Google Play. "In-app" means inside the app itself. Sending the user to your website to delete their account does not count. Telling them to email support does not count. The button must be in the app.

Design it properly:

Below are the four things the delete flow must do. The left side is the goal, the right side is what it looks like on screen.

```
Easy to find      → Settings → Account → Delete account
Explain clearly   → what is deleted, what is kept, how long it takes
Confirm properly  → this IS irreversible, so a real confirmation is right
Offer the middle  → "Deactivate instead?" if you support it
```

Each line, in more words.

**Easy to find** means a normal path through your settings, in the place a person would look first. Not buried five taps deep behind an odd name. Picture a reviewer hunting for the delete button for a minute. If they cannot find it, they treat it as missing. Then they say no to your app.

**Explain clearly** means three facts on screen before they press the button:

1. What gets removed. Their posts, their messages, their photos.
2. What you keep, and why. Some records, such as payment records, must be kept by law.
3. How long the deletion takes. It is rarely instant.

**Confirm properly** means one real confirmation step. Most of the time you should not put an "Are you sure?" popup in front of an action. It is better to let people do the thing and then undo it. Deletion is the exception. **Irreversible** means it cannot be undone, so there is nothing left to undo. That is why a confirmation is the right choice here.

**Offer the middle** means giving a softer option next to the hard one. **Deactivate** switches the account off and keeps the data, so the person can come back later. Offer it only if your app really supports it. Do not show that button without building it. Doing so is a lie told to someone at the exact moment they were deciding whether to trust you.

Below is the wrong version. There is no delete button in the app at all.

```
❌  Settings → Help → "To delete your account, visit our website"
```

Below is the right version. The action lives in the app, explains itself, and offers the softer option.

```
✅  Settings → Account → Delete account
        ↓
    "Your posts and messages are removed. Billing records are kept
     for 7 years by law. Deletion finishes within 30 days."
        [ Deactivate instead ]     [ Delete my account ]
```

Hiding it, or making it web-only, gets apps rejected.

**What this means:** "Rejected" means the reviewer at Apple or Google refuses your app. It does not go into the shop until you add the in-app delete option and submit again. This is a common reason for rejection, not a rare one.

---

## 15.6 Other common store rejection causes

These are the usual reasons a reviewer says no. Check each one before you submit.

**What this means:** Remember what a review is. A real person at Apple or Google installs your app and uses it, before anyone else is allowed to. Every item below is something that person notices in the first few minutes.

- Placeholder content or Lorem Ipsum left in
- Broken links (privacy policy, support)
- Crashes on the reviewer's device or on first launch
- Login required with no demo account provided for review
- Requesting permissions the app does not visibly need
- Payments outside the platform rules
- Missing accessibility support (increasingly checked)

Here is the same list with each cause explained.

| Cause | What it means |
|---|---|
| Placeholder content or Lorem Ipsum | Fake text or images left in from building. **Lorem Ipsum** is the standard fake text that looks like broken Latin. If it is on screen, the app looks unfinished. |
| Broken links | A link that leads nowhere. Your privacy policy link and your support link are the two that get tested. |
| Crashes | The app closing itself. On the reviewer's exact phone, or on the very first launch, a crash means an instant no. |
| Login required, no demo account | If the app needs a login, the reviewer cannot get past your first screen. Give them a working username and password with the submission. |
| Permissions you do not visibly need | Think of a torch app. Its only job is turning the phone's light on. It has no reason to ask for your friends' phone numbers. If the reviewer cannot see why you need a permission, it counts against you. |
| Payments outside the platform rules | Taking money in ways the store does not allow. Both stores want their own payment system used for things bought inside the app, and they take a cut. Going around that is one of the fastest ways to get removed. The rules are long and they differ by app type, so read the ones for your case. |
| Missing accessibility support | No screen reader labels, unreadable contrast, broken large text. The note says this is "increasingly checked", meaning reviewers look at it more now than they used to. |

A demo account is the cheapest item on this list to get right. It is also one of the most commonly forgotten. Create it. Test that the login still works today. Send it with the app. Forgetting it costs you a full review round, which can be another week of waiting.

---

## 15.7 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] Confirmed which accessibility rules apply to your markets — you asked someone who knows the law there. You did not guess.
- [ ] Permission priming screen for every OS permission — your own explaining screen comes first. Every time, for every permission.
- [ ] Permissions asked in context, never at startup — you ask when the user taps the thing that needs it. Not when the app opens.
- [ ] App still works when a permission is denied — saying no removes one feature. It does not break the app.
- [ ] Path to Settings when a permission was denied earlier — a clear route into the phone's settings, so it can be turned back on.
- [ ] Privacy policy reachable in-app — a link inside the app. On your website only is not enough.
- [ ] Consent flows designed, if needed — the tracking, cookie, analytics and age screens are properly designed. Not made up on the day.
- [ ] In-app account deletion, easy to find — a real delete button, in a place people would look first.
- [ ] Demo account ready for app review — a working login, sent with the app, tested today.
