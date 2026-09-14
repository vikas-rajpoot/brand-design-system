# 16. The Words in Your App

**In one line:** The words on your screens are part of the design. Pick one name for each thing. Write buttons that say what will happen. Keep every word in one file.

**Why this chapter exists:** Text **is** UI. The words are not a layer painted on top of the design. The words *are* the design, the same way the colours are.

Of all the parts of a product, the words usually have the fewest rules. Most teams write down rules for their colours and their gaps. Then they type their text in a hurry, with no rules at all. So one screen says "Session" and the next says "Chat". A button says "OK" when it should say "Delete project". The user reads those words far more than they study your colours. Fixing the words costs almost nothing. It makes the app feel like one product instead of five.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps, menus. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gaps exist, which words you use. Like a school uniform rule sheet, but for a screen. |
| **Component** | A reusable piece of screen that you build once and use in many places. A button is a component. A card is a component. |
| **String** | A piece of text in your app's code. "Delete session" is a string. Programmers call text "a string" because it is a string of letters joined together. |
| **Glossary** | A list of words with their agreed meanings. Your science textbook has one at the back. Here it is a list of the words your app is allowed to use. |
| **Terminology** | The set of words a product uses for its own things. Two apps can do the same job and still pick different terminology for it. One says "folder", the other says "album". |
| **Sentence case** | Writing a phrase the way you write a sentence. Only the first letter is a capital: "Delete session". |
| **Title case** | Writing a phrase with a capital on most words: "Delete Session". Newspaper headlines use this. |
| **Label** | The text written on or next to a control. The word on a button is the button's label. |
| **Verb** | A doing word. "Save", "Delete", "Send", "Book" are verbs. |
| **Outcome** | What actually happens after you press. Pressing a button has an outcome. |
| **Error message** | The text your app shows when something did not work. |
| **Stack trace** | A long, ugly block of code text that appears when a program breaks. It helps programmers. It means nothing to a normal user. |
| **Toggle** | A small control that opens and closes something, or switches it on and off. A "Details" toggle hides text until you tap it. |
| **Empty state** | What a screen shows when there is nothing to show yet. "No messages yet." |
| **Filter** | A control that hides everything except the items you asked for. Searching "auth" filters the list down to items containing "auth". |
| **Active voice** | A sentence where the doer comes first. "We could not connect." |
| **Passive voice** | A sentence where the doer is hidden or comes last. "A connection could not be established." |
| **Jargon** | Special words that only people inside a job understand. "Cache invalidation" is jargon. |
| **Notification** | A message your app sends that appears outside the app, for example on the phone's lock screen. |
| **i18n** | Short for "internationalization". It means getting an app ready to work in other languages. There are 18 letters between the "i" and the "n" of that long word, so people write i18n. |
| **i18n file** | One file that holds every piece of text in your app, each with a short name. Your code asks the file for text instead of holding the text itself. |
| **Translate** | To turn your app's text into another language. |

---

## 16.1 A terminology glossary

Give every thing in your app exactly one name, and never use a second name for it.

**What this means:** Before you write any screen, make a list. Each row says: this thing is called *this*, and never *that*. That list is your **glossary** — a list of agreed words, like the one at the back of a school textbook. Then everybody on the team uses the list.

One concept = one word, everywhere.

Below is what goes wrong when you skip this step. The block marked ❌ is the version to avoid. The block marked ✅ is the version to use.

```
❌  "Session" on one screen
    "Conversation" on another
    "Chat" in the settings
    → three names for one thing
    → users think they are three different features

✅  Pick "Session". Use it in the UI, the docs, the errors,
    the notifications, the support articles. Forever.
```

Read the ❌ block in plain words. One feature exists in your app. Three screens each invented their own name for it. A user who sees all three assumes your app has three separate features. They then hunt for the difference between them, find nothing, and decide your app is confusing.

Think about a shop that sells one drink. The shelf label says "Cola". The price board says "Soft drink". The bill says "Beverage". Nothing is wrong with any of those words on its own. Together they make a customer ask whether they were charged for the right item.

Keep a simple table:

| Concept | We call it | Never call it |
|---|---|---|
| A running task | Session | Chat, conversation, thread |
| A connected machine | Host | Server, device, computer |
| An approval request | Permission | Confirmation, prompt |

Read the table row by row. The left column names the idea. The middle column is the only word you are allowed to write. The right column lists the words that are now banned, even though they mean roughly the same thing.

Notice something about that right column. Every banned word is a reasonable word. "Server" is not wrong English. It is wrong *here*, because you already chose "Host". The point is not that one word is better. The point is that you picked one and stopped switching.

The glossary covers more places than the screens. Use the chosen word everywhere the word can show up:

- In the **UI** — everything the user sees and touches on the screen.
- In the help pages and any guide you write.
- Inside **error messages** — the text shown when something fails.
- Inside **notifications** — messages that appear outside the app, such as on a phone's lock screen.
- In the support articles your team writes later.

Miss one of those places and the user meets the old word again. The confusion you cleaned up comes straight back.

This costs 20 minutes and quietly makes the product feel like one
thing built by one team.

**What this means:** Writing this table takes less time than one class period. Nobody will ever compliment you on it. Users will only notice that your app feels solid and does not contradict itself.

---

## 16.2 Capitalisation — pick one and enforce it

Choose one rule for which letters are capitals, then use that rule on every piece of text in the app.

There are two common rules. Here they are side by side. Look at the capital `S` in the second line.

```
Sentence case:  "Delete session"     ← recommended
Title case:     "Delete Session"
```

**Sentence case** means you write a phrase the way you write a normal sentence. The first letter is a capital. Everything else stays small, unless it is a name. **Title case** means most words start with a capital, the way a newspaper headline is written.

The arrow marks the recommended one: sentence case.

Sentence case is easier to translate, easier to read, and harder to
get wrong.

**What this means:** Three separate reasons, one at a time.

- *Easier to translate:* many languages do not use capitals the way English does. When you later **translate** your app into another language, a sentence-case phrase carries over without a fight.
- *Easier to read:* your eye moves faster across small letters. A line of capitals slows reading down slightly.
- *Harder to get wrong:* title case has fiddly exceptions. Is it "Sign Out of All Devices" or "Sign Out of all Devices"? Do small words like "of" and "to" get capitals? People argue. Sentence case has one instruction: capital at the start, nothing else.

Below is text that follows no rule. Four labels, three different habits.

```
Button:      "Delete Session"
Heading:     "Your sessions"
Menu item:   "Session settings"
Screen title: "Active Sessions"
```

Below is the same text with sentence case used everywhere.

```
Button:      "Delete session"
Heading:     "Your sessions"
Menu item:   "Session settings"
Screen title: "Active sessions"
```

Whatever you pick, apply it to buttons, headings, labels,
menu items and titles equally.

**What this means:** The rule has no exceptions. If you choose sentence case, then a big page heading also uses sentence case. If you choose title case, then a tiny menu item also uses title case.

Do not apply the rule to some text and skip the rest. Half a rule leaves you with the same messy screens you were trying to fix. The app then reads as if several different people wrote it and never spoke to each other.

---

## 16.3 Button labels

Write the **verb of the outcome** on the button. That means the doing word for what really happens when the button is pressed.

**What this means:** A **verb** is a doing word, like "save" or "delete". The **outcome** is what happens after the press. So the button that saves your work says "Save". The button that deletes a project says "Delete project". You do not write a general-purpose word like "OK" that would fit any button anywhere.

Use the **verb of the outcome**, not a generic word.

The table below has the weak label on the left and the strong label on the right.

| Bad | Good |
|---|---|
| OK | Save |
| Yes | Delete project |
| Submit | Send message |
| Confirm | Book flight |

Look at the left column. Every word there could sit on any button in any app. "OK" tells you nothing about whether you are about to save your work or wipe it. The right column tells you the exact result before you touch it.

Test: can a user read only the button and know what happens?
If not, rewrite it.

**What this means:** Here is how to run that test yourself. Cover the rest of the screen with your hand. Leave only the button visible. Read it. If you can now say out loud what pressing it will do, the label is good. If you have to uncover the screen to find out, the label has failed and needs new words.

This matters most when the button destroys something. Picture a box that asks "Are you sure?" with buttons "Yes" and "No". Now picture the same box with "Delete project" and "Keep project".

The second pair is much harder to press by mistake. The words themselves say which button wipes your work. With "Yes" and "No" the user has to read the question above the buttons first. People in a hurry do not read that question. They press "Yes" out of habit and lose the project.

---

## 16.4 Error messages

Every **error message** must answer three questions: what happened, why it happened, and what the user can do now.

An error message is the text your app shows when something did not work.

Below is the shape of a complete error. The left column is the question, and the right shows a real answer.

```
1. What happened      "Could not save your changes."
2. Why                "You are offline."
3. What now           [ Retry ]  Your text is saved.
```

Read the three lines together as one small screen. The user learns the save failed. They learn the reason is their internet, not a bug. They get a button to try again, and a promise that their typing is not lost. Nothing is left for them to guess.

Now compare that with a message that answers only the first question. "Could not save your changes." on its own leaves two questions open. The user does not know why it failed. The user does not know whether their work is gone. So they sit there guessing, and often they close the app and lose the work for real.

Rules:

- Plain language. No stack traces or codes as the main message.
- Never blame the user. "Password is incorrect", not "You entered a wrong password".
- Technical detail goes behind a "Details" toggle, for support.
- Banned: "Something went wrong" with no cause and no action.

Those four rules are short, so here is each one expanded.

**Plain language. No stack traces or codes as the main message.**
What this means: a **stack trace** is a long block of code text that appears when a program breaks. It lists file names and line numbers. It is useful to a programmer and meaningless to everybody else. An error code such as `ERR_CONN_4032` is the same problem in a shorter form. Neither belongs in the big text the user reads first.

Below is the version to avoid.

```
TypeError: cannot read property 'id' of undefined
  at SessionStore.save (store.js:214)
```

Below is the version to use.

```
Could not save your changes. You are offline.
```

**Never blame the user.**
What this means: describe the situation, not the person's mistake. Say what is true about the thing, not what the user did wrong. "Password is incorrect" describes the password. "You entered a wrong password" points a finger. Both carry the same information. Only one of them makes a person feel accused while they are already stuck.

Below is the version to avoid.

```
You entered a wrong password.
```

Below is the version to use.

```
Password is incorrect.
```

**Technical detail goes behind a "Details" toggle, for support.**
What this means: do not throw the technical text away. A **toggle** is a small control that opens and closes a piece of the screen. Put the stack trace and the error code inside one, closed by default, labelled "Details". A normal user never opens it. When they contact your support team, the team asks them to open it and read out what is inside.

Below is the shape of that.

```
Could not save your changes.
You are offline.
[ Retry ]

▸ Details            ← closed. Opens to show the code and stack trace.
```

**Banned: "Something went wrong" with no cause and no action.**
What this means: that sentence answers question 1 and skips questions 2 and 3. The user learns only that you already knew it broke. They have no reason, no button, and no idea whether to wait, retry, or give up. If you truly cannot name the cause, you can still give an action: "Could not load your sessions. Check your connection and try again. [ Retry ]"

---

## 16.5 Empty state text

Write different words for each kind of empty screen, because the three kinds mean different things to the user.

An **empty state** is what a screen shows when there is nothing on it. A phone gallery with no photos is in an empty state.

Match the tone to the feeling (see [the content states chapter](../02-must-have/02-content-states.md)).

**What this means:** "Tone" is how the words sound. A teaching tone, a sorry tone and a calm tone are three different tones.

A brand new user sees an empty screen because they have not made anything yet. A searching user sees an empty screen because nothing matched their search. Those two people need different words. The linked chapter covers these screen states in full.

Below are the three kinds and the words each one needs. The left column names the situation. The middle column names the job of the text. The right column shows real wording.

Two of the middle-column words need explaining. "Acknowledge" means say back to the user what they did, so they know the app heard them. "Confirm calmly" means tell them the work is done, without any fuss.

```
First run       Teach + invite:   "Sessions you start will appear here."
                                  [ Start a session ]
Filtered empty  Acknowledge:      "No results for 'auth'."  [ Clear filter ]
Cleared         Confirm calmly:   "All caught up."
```

Here is each row in plain words.

*First run* is the user's first visit, when nothing exists yet. The text has two jobs. The first job is to teach them what will live on this screen later. The second job is to invite them to make the first one. That is why it explains ("Sessions you start will appear here") and then offers a button. Skip either job and a new user stares at a blank screen, decides the app is broken, and leaves.

*Filtered empty* is when the user **filtered** the list and nothing matched. To filter is to ask the app to hide everything except the items you want. The text repeats their search word back to them. That way they can see they typed "auth" and not "auht". Then it offers a way out: clear the filter and get the full list back. Without that way out, the user is stuck. They stare at an empty list and cannot see how to fill it again.

*Cleared* is when the user finished everything. The list is empty because they did the work. This is the one empty screen that is good news, so the words stay short and calm. "All caught up." Nothing to teach, nothing to fix.

Below is the version to avoid, where one message is reused for all three.

```
First run       "No items."
Filtered empty  "No items."
Cleared         "No items."
```

That single message is not false in any of the three cases. It is useless in all three. A new user is not told what this screen is for. A searching user cannot tell whether their spelling was wrong or the app broke. A user who finished their work is given a flat shrug instead of a small reward.

---

## 16.6 General writing rules

These seven rules apply to every piece of text in the app, not only to errors and buttons.

- **Short.** Cut every word that does not change the meaning.
- **Active voice.** "We could not connect", not "A connection could not be established".
- **You, not the user.** "Your files", not "The user's files".
- **No jargon** the user did not choose to learn.
- **Say the number.** "3 files changed", not "Several files changed".
- **No exclamation marks** in error or system messages.
- **No cleverness in serious moments.** A joke in an error message
  about lost data is not funny.

Each rule again, with an example. Bad version first, good version second.

**Short.**
What this means: read your sentence, remove a word, then read it again. If the meaning did not change, the word was decoration. Keep removing until every remaining word is doing a job.

What goes wrong if you skip this: long text gets skipped. A user in a hurry reads the first few words and guesses the rest. Extra words push the one word that mattered out of the part they actually read.

```
Bad:   "Please note that you are currently not connected to the internet."
Good:  "You are offline."
```

**Active voice.**
What this means: **active voice** puts the doer at the front of the sentence. **Passive voice** hides the doer or pushes them to the end. Active voice is shorter and says who is responsible. Passive voice sounds like nobody wants to admit what happened.

```
Bad:   "A connection could not be established."
Good:  "We could not connect."
```

**You, not the user.**
What this means: write to the person reading, the same way you would speak to them. Never describe them from outside as "the user". The person holding the phone does not think of themselves as "the user". They read that word and feel they have opened somebody else's notes by mistake.

```
Bad:   "The user's files were not uploaded."
Good:  "Your files were not uploaded."
```

**No jargon the user did not choose to learn.**
What this means: **jargon** is a word that only people inside a job or a hobby understand. Some jargon is fair, because the user asked for it. A chess app may say "castling", which is the name of a chess move. Anyone who opens a chess app came for chess words.

The problem is words the user never asked for. Your app's private names for its own inner parts are in that group. A user who hits one of those words stops dead. They cannot tell what the app wants them to do next.

```
Bad:   "Token refresh failed. Re-authenticate to renew your session."
Good:  "Your sign-in expired. Sign in again."
```

**Say the number.**
What this means: when you know the exact count, print the exact count. Vague words like "several", "some" and "a few" hide something you already know. The user then has to open the screen and count for themselves. The number takes the same space on screen and answers the question at once.

```
Bad:   "Several files changed."
Good:  "3 files changed."
```

**No exclamation marks in error or system messages.**
What this means: an exclamation mark adds excitement. An error is not exciting for the person reading it. Putting one in makes the app sound cheerful about the user's problem, which reads as rude. This rule covers system messages too — the app's own announcements about what it is doing.

```
Bad:   "Could not save your changes!"
Good:  "Could not save your changes."
```

**No cleverness in serious moments.**
What this means: a joke works when the reader is relaxed. A person who might have lost an hour of work is not relaxed. The same sentence that reads as friendly on a welcome screen reads as mocking on a failure screen. Save the personality for the calm screens.

```
Bad:   "Oops! Your work took a little holiday."
Good:  "Could not save your changes. Your text is saved on this device."
```

---

## 16.7 Where the words live

Keep every piece of text the user can read in one single file, not spread across your code.

Put user-facing strings in one place (an i18n file), not scattered
across components — even if you only support one language.

**What this means:** A **string** is what programmers call a piece of text in code. "Delete session" is a string. A **component** is a reusable piece of screen, such as a button, built once and used in many places. Normally people type the text directly inside each component. Instead, you move all the text into one file and give each piece a short name. The component then asks that file for the text by name.

That file is usually called an **i18n file**. "i18n" is short for "internationalization", the work of getting an app ready for other languages. The word has 18 letters between its first "i" and its last "n", so people write i18n to save time.

Below is the version to avoid. The text lives inside the components, so it is scattered across many files.

```
DeleteButton.js     text: "Delete session"
SettingsScreen.js   text: "Delete Session"
ConfirmDialog.js    text: "Remove chat"
```

Notice what that scattering already caused. Three files, three spellings, three different names for one action. Nobody chose that. It happened because no one person could see all three at the same time.

Below is the version to use. All the text sits in one file with short names, and the components ask for it by name.

```
strings.json
  session.delete  = "Delete session"

DeleteButton.js     text: strings.session.delete
SettingsScreen.js   text: strings.session.delete
ConfirmDialog.js    text: strings.session.delete
```

Now there is one sentence in one place. Change it once and all three screens change together.

Benefits: you can read all your copy at once, spot inconsistencies,
give it to a writer, and translate it later without a rewrite.

Those are four separate benefits, so here they are one at a time.

- *Read all your copy at once.* "Copy" is the writing trade's word for the text itself. Opening one file shows you every sentence your app can say. You can read it end to end in a few minutes.
- *Spot inconsistencies.* When "Delete session" and "Remove chat" sit four lines apart, the mismatch is impossible to miss. When they sit in different files, it survives for years.
- *Give it to a writer.* Some people are very good with words but do not write code. Such a person can improve your whole app by editing one file. They never have to open your program.
- *Translate it later without a rewrite.* When you want a second language, you copy the file. Then you replace each sentence in the copy. Your components do not change at all. They were only ever asking for names.

Do this even if you only support one language today. The point is not translation on its own. The point is that all your words are in one place where you can see them.

---

## 16.8 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] Terminology glossary written down — one agreed name for each thing, on paper, banned words listed
- [ ] One capitalisation rule, applied everywhere — buttons, headings, labels, menu items and titles all follow it
- [ ] Buttons use outcome verbs — the label names what will happen, not "OK" or "Submit"
- [ ] Every error says what / why / what next — what broke, the reason, and an action the user can take
- [ ] "Something went wrong" is banned — no error with no cause and no next step
- [ ] Three distinct empty-state voices — different words for first run, nothing matched the filter, and all done
- [ ] All strings in one file — every user-facing sentence lives in one place, even with one language
