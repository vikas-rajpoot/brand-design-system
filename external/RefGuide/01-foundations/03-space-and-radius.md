# 3. Space and Rounded Corners

**In one line:** Pick a small set of gap sizes and a small set of corner roundness values, then use only those, everywhere.

**Why this chapter exists:** Build this second. It gives the biggest visual improvement for the least effort. Most apps that "look wrong" are not wrong because of colour. They are wrong because one gap is 13 wide, the next is 17, and the next is 22. Fixing the gaps costs you an afternoon and changes how the whole app feels.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gap sizes exist, which corner shapes exist. Like a school uniform rule sheet, but for a screen. |
| **Space** | The empty gap between things on a screen. Not a thing you draw. A thing you leave out. |
| **Radius** | How rounded a corner is. Radius 0 is a sharp corner like a sheet of paper. Radius 12 is a soft corner like a WhatsApp message bubble. |
| **pt** | A unit of length on a screen, short for "point". Think of it like millimetres, but for phone screens. `4pt` means 4 units wide. |
| **The 4pt grid** | A rule that says every gap you use must be a multiple of 4. So 4, 8, 12, 16 are allowed. 5, 13, 17 are not. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `spacing.md = 12`. After that everyone types `spacing.md` instead of typing `12`. Change it in one place and it changes everywhere. |
| **Scale** | The full set of allowed values, in order. Your spacing scale is your list of allowed gap sizes. |
| **Padding** | The empty space **inside** a box, between the edge of the box and the stuff in it. Like the white border inside a page of your notebook before the writing starts. |
| **Margin** | The empty space **outside** a box, pushing other things away from it. Like the space you leave around a photo when you stick it in a scrapbook. |
| **Gap** | The empty space **between** items in a stack or a row, set once on the box that holds them. You say "put 12 between every pair" and the screen works it out. |
| **Flexbox** | A common way of laying out a screen. You put items inside a box, and the box arranges them in a row or a column for you. A flexbox box can be given a `gap`. |
| **Container / parent** | The box that holds other things. |
| **Child** | A thing inside a container. |
| **Card** | A rectangle on screen that holds one item's information. A single video on YouTube's home page sits in a card. |
| **Chip / tag** | A tiny rounded label, usually one or two words. The small "Sports", "Music" buttons at the top of YouTube are chips. |
| **Input** | A box you type into. The search bar is an input. |
| **Modal** | A box that opens on top of the screen and blocks what is behind it until you answer or close it. |
| **Sheet** | A panel that slides up from the bottom of the screen. The "Share to..." panel on Instagram is a sheet. |
| **Composer pill** | The long rounded box you type a message into at the bottom of a chat app. |
| **Empty state** | What a screen shows when there is nothing to show. "No messages yet." |

---

## 3.1 Space is the most powerful layer

Space matters more than colour. If you can only fix one thing in your app, fix the spacing.

Here is the trade-off, stated plainly:

- Good spacing + average colours = looks intentional
- Great colours + messy spacing = looks sloppy

**What this means:** "Looks intentional" means it looks like a person decided it. "Looks sloppy" means it looks like nobody checked. A reader cannot name the difference, but they feel it in one second.

Think of a shop. A shop with plain shelves, neatly arranged, feels good. A shop with beautiful shelves where the goods are stacked crooked feels cheap. The goods are the same. The arrangement is doing the work.

If you only fix one thing, fix spacing.

---

## 3.2 One unit: 4pt

Every space value in your app is a multiple of 4. No exceptions.

**What this means:** You are allowed to use 4, 8, 12, 16, 24, 32, 48. You are not allowed to use 5, 7, 13, 18, 22. This rule is called **the 4pt grid**. `pt` is a length unit on screens, a bit like millimetres.

Why 4? Because it removes the argument. Nobody has to think "should this be 14 or 15?" There is no 14 and no 15. There is 12 and there is 16. You pick one and move on.

The gaps below are wrong. They are not multiples of 4, and no two agree with each other.

```
padding: 13
gap: 7
margin: 22
```

The gaps below are right. Every number is a multiple of 4.

```
padding: 12
gap: 8
margin: 24
```

Now give each allowed value a short name. These names are your **tokens** — a token is a name for a value, like `x = 5` in maths. Below is the full list of allowed space values and their names. Learn these seven names; they are the only ones you will use.

```
xs   4
sm   8
md   12
lg   16
xl   24
2xl  32
3xl  48
```

The names are short on purpose. `xs` means extra small. `sm` means small. `md` means medium. `lg` means large. `xl` means extra large. `2xl` is the step above `xl`, and `3xl` is the step above that.

---

## 3.3 The scale must grow non-linearly

Your list of allowed gap sizes must get bigger in bigger jumps as it goes up. It must not climb in equal steps.

**What this means:** "Linear" means each step adds the same amount: 4, 8, 12, 16, 20, 24, 28, 32 — always +4. "Non-linear" means the steps get bigger as the numbers get bigger: 4, 8, 12, 16, then a jump to 24, then 32, then 48.

| Scale | Values | Verdict |
|---|---|---|
| Linear | 4, 8, 12, 16, 20, 24, 28, 32 | Bad |
| Non-linear | 4, 8, 12, 16, 24, 32, 48 | Good |

Read the table like this: the first row is the version to avoid, the second row is the version to use.

**Why:** a linear scale has too many similar options at the small end (people argue about 20 vs 24) and not enough separation at the large end (32 vs 28 makes no visual difference).

**What this means:** Look at the small end first. On screen, 20 and 24 look almost the same. Your team still stops to argue about which one to use. That argument buys you nothing, because nobody can see the difference anyway.

Now the big end. 28 and 32 also look almost the same. So having both is pointless. You wanted a *clearly* bigger gap, and the scale did not give you one.

A linear scale hands you fake choices at both ends.

Here is the same idea in shoe sizes. If a shop stocked sizes 7, 7.1, 7.2, 7.3, you would waste an hour and still not feel a difference. Whole sizes are enough.

Non-linear = every step is clearly different. No arguing.

---

## 3.4 Where each step is used

Each of the seven space tokens has a normal job. Use this table so you are not guessing every time.

| Token | Typical use |
|---|---|
| `xs` 4 | Gap between an icon and its label |
| `sm` 8 | Gap between related items in a row |
| `md` 12 | Padding inside a card, gap between rows |
| `lg` 16 | Screen edge padding, gap between cards |
| `xl` 24 | Gap between sections |
| `2xl` 32 | Above a section heading |
| `3xl` 48 | Big empty-state padding |

A few of those rows use words worth spelling out. An **icon and its label** means the small picture and the word next to it, like the home symbol and the word "Home". **Padding inside a card** is the space between a card's edge and the text inside it. **Screen edge padding** is the space between the left edge of the phone and where your content starts. An **empty state** is what a screen shows when there is nothing in it yet, such as "No messages yet". It needs a lot of space around it, so that it does not look like a mistake.

Notice the pattern: the closer two things are related, the smaller the gap. An icon and its own label are the most related pair on screen, so they get 4. Two different sections of a page are barely related, so they get 24.

---

## 3.5 Radius scale

Do the same thing for rounded corners. Pick a short list of allowed roundness values and use only those.

**Radius** is how rounded a corner is. A bigger number means a rounder, softer corner. A radius of 0 is a sharp square corner.

Below is the list of allowed radius values, with what each one is for. The arrow marks the one you will use most often.

```
xs    6    Small chips, tags
sm    8    Buttons, inputs
md    12   Cards, rows        ← the default
lg    18   Sheets, modals, the composer pill
pill  999  Fully round
```

Some of those names again, plainly. A **chip** or **tag** is a tiny rounded label, like the "Music" and "Gaming" buttons across the top of YouTube. An **input** is a box you type into. A **card** is a rectangle holding one item's information. A **sheet** is a panel that slides up from the bottom. A **modal** is a box that opens on top of everything and blocks the screen behind it. The **composer pill** is the long rounded box you type your message into in a chat app.

`pill 999` is a trick, not a real measurement. The number is set far larger than the box itself. So the ends go as round as they possibly can. You get a shape like a tablet or a running track. You never have to work out the exact number for each box, because 999 always wins.

Keep it to 4 or 5 values.

**What this means:** Five roundness values is already enough for a whole app. If you find yourself adding a sixth, you are decorating, not deciding.

---

## 3.6 The nested radius rule

When you put a rounded box inside another rounded box, the two curves fight each other unless the inner one is less round. This is the rule that fixes it:

```
inner radius = outer radius − padding
```

**What this means:** "Nested" means one box sitting inside another box. "Padding" is the empty space inside the outer box, between its edge and the inner box. Take the outer box's roundness. Subtract that padding. The answer is the roundness the inner box must have.

### Why the curves fight

Picture the corner of a photo frame with a photo inside it. The frame is rounded. Now round the photo by the *same* amount. Along the straight edges the gap between frame and photo is thin. In the middle of the corner that same gap goes wide. Your eye reads the uneven gap as a mistake, even if you cannot say why.

Here is the corner, drawn large. `#` is the outer box's edge. `o` is the inner box's edge. The distance between them should stay the same all the way round the curve.

```
  Wrong — inner corner is as round as the outer corner:

      # # # #
    #         #
  #             #
  #   o o o o       <- gap is thin here...
  #  o
  #  o                 ...but wide here, in the middle of the curve
  #  o
```

```
  Right — inner corner is gently rounder-in, so the gap stays even:

      # # # #
    #         #
  #    o o o o
  #  o
  #  o                 <- same gap everywhere along the corner
  #  o
```

### Example

Work through the arithmetic. In each pair below, the top line is the outer box and the line under it is what the inner box must use.

```
Card:  radius 12, padding 8
   └─ Inner box radius must be 12 − 8 = 4

Card:  radius 16, padding 4
   └─ Inner box radius must be 16 − 4 = 12
```

Read the first one in words: the card's corners are rounded by 12, and there is 8 of empty space inside its edge. 12 minus 8 is 4. So the box sitting in that space gets a radius of 4.

If padding >= outer radius, the inner radius is 0 (square).

**What this means:** Say the padding is as big as the outer radius, or bigger. The sum then gives you zero or a negative number. There is no such thing as negative roundness. So you stop at 0 and make the inner corner square. Example: outer radius 12, padding 16. 12 − 16 = −4, which is not possible, so the inner radius is 0.

Nobody consciously notices this. Everybody feels it.

**What this means:** No user will ever say "the inner radius is wrong". They will say the screen looks a bit cheap and not know why. Getting this right is invisible work, and it is worth doing.

---

## 3.7 Use gap, not margins

To put space between a list of items, set `gap` once on the box that holds them. Do not set `marginBottom` on every item inside.

**What this means:** There are two ways to push things apart. A **margin** is space you attach to each item, pushing outwards from it. A **gap** is space you attach to the container — the box holding the items — and the screen puts that space between every pair of items for you.

Prefer `gap` on a flex container over `marginBottom` on children.

**What this means:** A **flex container** (from **flexbox**, a common way to arrange a screen) is a box that stacks its contents in a row or a column for you. Its **children** are the items inside it. `marginBottom` means "space stuck under this item".

| Approach | Problem |
|---|---|
| `marginBottom: 12` on each child | Last child has extra space. Margins collapse oddly. Reordering breaks it. |
| `gap: 12` on the parent | Space only between items. Reorder freely. |

That table packs in three separate problems, so here they are one at a time.

**Last child has extra space.** Every item carries space under it, including the final one. So a stray 12 hangs below the list with nothing after it.

**Margins collapse oddly.** When two margins meet, the screen sometimes merges them into one instead of adding them. You expected 24 and you got 12.

**Reordering breaks it.** Move an item to the end of the list. It now leaves that stray gap. And the item that used to be last needs a margin it does not have.

Below is the version to avoid. Every row carries its own space, and the bottom row leaves a gap under nothing.

```
Column
  ├─ Row A   marginBottom: 12
  ├─ Row B   marginBottom: 12
  └─ Row C   marginBottom: 12   <- stray space under the last row
```

Below is the version to use. The space is declared once, on the container, and only lands between rows.

```
Column   gap: 12
  ├─ Row A
  ├─ Row B
  └─ Row C   <- nothing hanging under the last row
```

Think of students lining up for assembly. Tell each student "stand 12 behind the person in front". That is the gap way, and it keeps working when two of them swap places. Now tell each student "carry a 12-wide plank behind you". That is the margin way, and the last student is carrying a plank for no reason.

---

## 3.8 Screen edge padding is one value

Pick one number for the space between the edge of the phone and your content. Use that same number on every single screen.

Pick one (usually 16) and use it on every screen.

**What this means:** On the home screen, the settings screen, the profile screen — the left and right space is 16 on all of them. Not 16 on one and 20 on another.

Different edge padding per screen is the fastest way to make an app feel like five different apps.

**What this means:** When the edge padding changes between screens, the text shifts sideways as you move around. A user notices that jump even if they cannot explain it. The app then stops feeling like one product.

Below is the version to avoid. Three screens, three different edge values.

```
HomeScreen      paddingHorizontal: 16
SettingsScreen  paddingHorizontal: 20
ProfileScreen   paddingHorizontal: 12
```

Below is the version to use. One value, named once, used everywhere.

```
spacing.lg = 16

HomeScreen      paddingHorizontal: spacing.lg
SettingsScreen  paddingHorizontal: spacing.lg
ProfileScreen   paddingHorizontal: spacing.lg
```

`paddingHorizontal` means padding on the left and right sides only.

---

## 3.9 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] 4pt base unit — every space value is a multiple of 4
- [ ] Non-linear scale, max 7 steps — the steps get bigger as the numbers get bigger, and there are no more than 7 of them
- [ ] 4–5 radius values — only four or five allowed corner roundness values exist
- [ ] Nested radius formula applied — for a box inside a box: inner radius = outer radius − padding
- [ ] `gap` preferred over margins — space is set once on the container, not on each item
- [ ] One screen-edge padding value everywhere — the same left and right space on every screen
