# 11. Component API (the settings your components accept)

**In one line:** A component is one reusable piece of a screen, like a button. Decide once what settings a component takes. Use those same setting names on every component. Give every component good starting values, so the ordinary case needs no settings at all.

**Why this chapter exists:** Your colours and gap sizes are the rules for how the app *looks*. This chapter is the rules for how the app is *written*. An app can have perfect colours and still be painful to build with. Here is how that happens. One button takes a setting called `type`. One badge takes the very same setting, but calls it `variant`. Nobody can remember which is which. So every single time, someone has to stop and look it up. Looking things up should be rare. Using your own components should become a habit, like tying your shoes. Write this page before you build your first component. It has two halves: the rules every component follows (sections 11.1 to 11.8) and the list of which components you will build, in what order (section 11.9).

**If you do not know how to code yet, keep reading.** The code blocks below are only pictures of the idea. You do not have to read them as code. The ideas themselves are about naming, habits and agreements between people. You can understand every one of them without writing a line of code.

Three small hints will help you read those pictures.

- A component is written inside angle brackets, like `<Button>`. Anything written inside those brackets is a prop. So `<Button size="sm">` means "a button, set to small".
- Curly braces, like `{ }`, mean the value is coming from somewhere else in the code. It is not being typed out as plain text.
- Anything after `//` is a comment. That is a note written for people to read. The app ignores it.

**New words in this chapter**

*You do not have to read this table now. Skim it, or go straight to the chapter and come back when a word stops you. This table explains the words this chapter uses; the [glossary](../GLOSSARY.md) explains the words the whole guide uses.*

| Word | What it means |
|---|---|
| **UI** | Short for "user interface". Everything you see and touch on a screen: buttons, text, pictures, gaps. |
| **View** | One screen the user is looking at right now. |
| **Component** | One reusable piece of screen that you build once and use in many places. A button is a component. A card is a component. You build `Button` once, then use it on 40 screens. |
| **Prop** | One setting you pass to a component. Short for "property". You tell a button "be big" or "be red" by passing a prop. Like the size and sugar options when you order a drink. |
| **API** | Here it means: the full list of props a component accepts. It is the agreement between you and everyone else about how your component is used. Change it carelessly and you break their screens. |
| **Design system** | The written list of rules your app follows. Which colours exist, which gap sizes exist, which components exist and how they are used. Like a school uniform rule sheet, but for a screen. |
| **Token** | A name you give to a value. It is like `x = 5` in maths. Here you write `spacing.md = 12`. After that everyone types `spacing.md` instead of typing `12`. Change it in one place and it changes everywhere. |
| **Contract** | An agreement everyone follows. Tokens are the agreement about how things look. The props are the agreement about how things are used in code. |
| **Policy** | A decision you write down and then stick to, so that everybody does the same thing. |
| **Enforce** | To make a rule actually hold. Hoping people remember a rule is not enforcing it. Having the computer refuse the wrong thing is. |
| **Convention** | The one way your team has agreed to do something, even when other ways would also work. |
| **Variant** | A prop that says *what kind* of thing this is. A primary button and a ghost button are two variants of the same button. |
| **Tone** | A prop that says *what mood* something has: normal, success, warning, danger. |
| **Elevation** | How high something looks like it is floating above the page, usually shown with a soft shadow under it. |
| **State** | The information a component is holding right now. The letters you have typed into a search box are its state. |
| **Bug** | Something in the app behaving wrongly. A button that does nothing when you tap it is a bug. |
| **Element** | One basic thing on screen. The phone or the browser already knows how to draw it. A plain button and a plain text box are elements. Your components are built on top of these. |
| **Wrapper** | Your own component sitting around one of those basic elements. It adds your colours, your spacing and your rules to it. |
| **Render** | The part of the code that decides what actually appears on screen. |
| **Library** | Your whole collection of components, kept in one place, used by the whole app. |
| **Composition** | Building something by putting smaller parts inside a bigger part, in the order you want. |
| **Configuration** | Building something by flipping switches on one fixed part. |
| **Compound component** | A component made of named inner parts, like `Card.Header` and `Card.Body`, that are used inside the main one. |
| **Fork** | To copy someone's component into your own file and change your copy. Now there are two versions of it. Over time the two stop matching. |
| **Type system** | A feature of some coding languages. You write down which props are allowed and what kind of value each one takes. The computer then checks it and complains before the app ever runs. |
| **Accessibility** | Making the app usable by people who cannot see the screen. It also covers people who cannot see it well, and people who cannot tap small things. |
| **Screen reader** | Software that reads the screen out loud for a person who cannot see it. It reads the labels you write, so a button with no label is announced as nothing useful. |
| **testID** | A hidden name tag you put on a component so an automated test can find it. Users never see it. |
| **Automated test** | A small program that opens your app by itself, taps things and checks the result. It runs every time someone changes the code. |
| **ref** | A handle to the real element underneath your component. Code uses it to say "put the keyboard cursor in this box" or "scroll to this row". |
| **Dev warning** | A message printed only for you and your team while you build the app. Users never see it. |
| **Default** | The value a prop takes when nobody passes anything. |
| **Badge** | A small label stuck on something, like the tiny red number on an app icon. |
| **Card** | A rectangle on screen that holds one item's information. A single video on YouTube's home page sits in a card. |
| **Header** | The strip across the top of a card or a screen. It usually holds a title. |
| **Body** | The middle part of a card or a screen, where the main content sits. |
| **Footer** | The strip across the bottom of a card or a screen. It usually holds buttons or small notes. |
| **Sheet** | A panel that slides up from the bottom of the screen. The "Share to..." panel on Instagram is a sheet. |
| **Input** | A box you type into. The search bar is an input. |
| **Ghost** | A button style with no fill colour and no border. It looks almost like plain text until you tap it. |
| **Prop vocabulary** | The small set of prop names your whole app agrees to use. It also fixes the values each name may take. "Vocabulary" here only means "the list of words we allow". |
| **Parent** | The bigger component or screen that holds another one inside it. If a login screen holds a text box, the screen is the parent of that box. |
| **Layout** | Where a thing sits and how much room it takes up. That covers the space around it, how wide it is, and how it lines up with its neighbours. |
| **Margin** | The empty space *outside* a component, between it and the things next to it. |
| **Padding** | The empty space *inside* a component, between its edge and the words inside it. |
| **Radius** | How round the corners of a box are. A small radius is a slightly softened corner. A big one gives a pill shape. |
| **Flex** | A setting for sharing out leftover space. If a row has spare room in it, flex decides which things in that row grow to fill the gap. |
| **className** | On the web, a named set of look-and-feel rules. You attach that name to a thing on screen. The `style` prop does the same job, but writes the rules out directly instead of naming them. |
| **Hex colour code** | A colour written as `#` plus six letters and numbers, such as `#3B82F6`. It is one exact colour picked by hand, not a name from your system. |
| **Props interface** | The written list of props a component accepts, and the kind of value each one takes. |
| **Doc comment** | A short note written above a prop in the code, saying what that prop is for. The app ignores it. It is there for people. |
| **Raw value** | A number or a colour typed straight into a component instead of a token name. `12` is a raw value. So is `#3B82F6`. |
| **Rule of thumb** | A rough guide that is right most of the time. It is not an exact law. |
| **Density** | How tightly packed a whole screen is. A narrow always-visible panel is dense; a settings dialog is roomy. The screen declares it once and every component inside reads it. |
| **Interaction state** | How a component looks while someone is using it: hovered, pressed, focused, disabled, selected, loading. Different from the *value* it holds. |
| **Inventory** | The written list of which components exist, taken from the real screens, in the order you will build them. |

---

## 11.1 One prop vocabulary, everywhere

Use the same prop names, with the same allowed values, meaning the same thing, on every component.

**What this means:** A **prop** is one setting you pass to a component, like telling a button "be small". Your app will have many components: buttons, badges, cards, inputs. Say the button calls its setting `type`. Say the badge calls the very same setting `variant`. Now people must memorise which component uses which word. Pick one word and use it on all of them. If you do not, everyone building a screen keeps stopping to check. Sooner or later somebody guesses wrong. Then a button goes out to real users with a setting that it quietly ignores. Nothing looks broken, so nobody notices for weeks.

Here are the three main prop names and every value each one is allowed to take. The `|` symbol means "or".

```
variant   what kind      "primary" | "secondary" | "ghost" | "danger"
size      how big        "sm" | "md" | "lg"
tone      what mood      "neutral" | "success" | "warning" | "danger"
```

Reading that in words.

- `variant` says what kind of thing this is. `primary` is the loud main one. `secondary` is the quieter one. `ghost` is the almost-invisible one. `danger` is the one for actions like deleting.
- `size` says how big it is. `sm` is small. `md` is medium. `lg` is large.
- `tone` says the mood of a message. `neutral` is normal. `success` means "it worked". `warning` means "be careful". `danger` means "something is wrong".

**`size` follows the screen, not the call site.** If your system has a density setting — the screen says once whether it is a tight panel or a roomy dialog, and type and icon sizes come from that (see [the typography chapter](../01-foundations/04-typography.md)) — then a component reads its size from the screen's density by default. A per-component `size` prop exists only for a deliberate exception, such as one small button inside a row of text. Passing `size` on every call defeats the density setting and brings back the 40-screens-40-sizes problem.

Two more names belong in the vocabulary because components for pictures and labels need them: `icon` takes a **name from your icon inventory** (a closed list, never a free image or a typed symbol — see [the iconography chapter](../01-foundations/05-icons.md)), and `label` is the words a screen reader hears (section 11.5).

Those words, with those exact values, are all you need. Do not add a fourth name that means the same thing as one of these. If you do, two different words end up meaning one idea. Then nobody can tell which of the two a component wants. Half the app uses one word and half uses the other.

The table below shows three real mistakes and their fixes. The left column is what not to do.

| Bad | Good |
|---|---|
| `<Button type="primary">` and `<Badge variant="primary">` | both use `variant` |
| `<Input size="small">` and `<Button size="sm">` | both use `sm` |
| `<Card elevated>` and `<Sheet lifted>` | both use `elevation="raised"` |

Row by row.

- **First row.** Two components use two different words, `type` and `variant`, for the same idea. Pick one word. `variant` is the one to keep.
- **Second row.** Both use the word `size`. But one wants `"small"` and the other wants `"sm"`. The name matches and the value does not, so you still have to stop and remember which is which. The values must match too.
- **Third row.** One component says `elevated`. Another says `lifted`. Both mean "make it look like it is floating above the page". The fix is one prop, `elevation`, that takes one of the level names from [the elevation chapter](../01-foundations/06-states-elevation-motion.md) — names that say what the level *means* (`flat`, `raised`, `floating`, `modal`), never a size word like `md`. The prop values are the token names. The component never invents its own.

If names differ, people must memorise. If names match, they learn once.

**What this means:** With matching names, you learn the word `size` one time. It then works on every component in the app, forever. With different names, every component is a fresh lookup. That lookup costs ten seconds, and you will do it a thousand times.

Think of a school where every teacher marks presence differently. One writes P, one writes a tick, one writes 1. Nothing is wrong with any of them alone. Together they waste everyone's time.

---

## 11.2 Composition beats configuration

Do not build one component with a huge pile of props. Build a small component that other pieces can be placed inside.

A component with 30 props is one part trying to cover every case, and failing.

**What this means:** If your card needs 30 settings, that card is trying to be every card that could ever exist. That never works. Someone will always want a card you did not think of. Then they ask you to add prop number 31. Then 32. The component keeps growing until nobody can hold it in their head. After that, a change made for one screen quietly breaks another.

**Configuration** means one fixed part with lots of switches on it. **Composition** means small parts you stack in the order you want.

Three words show up in the pictures below. The **header** is the strip along the top of the card, where the title goes. The **body** is the middle, where the main content goes. The **footer** is the strip along the bottom.

Below is the version to avoid. Count the settings being passed in. Then look at `showFooter`. Someone had to guess in advance that a footer might one day be wanted.

```jsx
❌  <Card
      title="..." subtitle="..." icon="..." action="..."
      showFooter footerText="..." headerAlign="left" ...
    />
```

Below is the version to use. Look at how the card is now an empty box, and the header, body and footer are placed inside it.

```jsx
✅  <Card>
      <Card.Header>
        <Icon name="file" />
        <Card.Title>...</Card.Title>
      </Card.Header>
      <Card.Body>...</Card.Body>
      <Card.Footer>...</Card.Footer>
    </Card>
```

Reading that second block in plain words: this is a card. Inside its header there is an icon and a title. Inside its body is the main content. Inside its footer is whatever goes at the bottom. `Card.Header` means "the Header part that belongs to Card". Parts written like this are called **compound components**.

The second one handles cases you never predicted.
The first one needs a new prop every time.

**What this means:** Say someone wants two icons in the header. Or a picture where the title normally goes. With the second version they put those inside the header themselves. Nobody has to change your card at all. With the first version, every new idea means a new prop. Your card grows forever, and every screen already using it has to be tested again.

Think of a sandwich shop. The configuration shop has a fixed menu of six sandwiches and a few tick boxes. If you want something they never listed, the answer is no. The composition shop hands you bread and a counter of fillings, and you build what you want.

**Rule of thumb:** more than ~8 props means you should be composing.

**What this means:** Count the props on your component. The `~` sign means "about". A **rule of thumb** is a rough guide, not an exact law, so 9 props is not a crime. But once the count goes past about 8, stop adding props. Let people put parts inside instead. Ignore this and the component slowly turns into the 30-prop pile above. At that point nobody can tell which props work together and which quietly cancel each other out.

---

## 11.3 Style override policy

Decide what other people are allowed to change about your component from outside. Write that decision down. Then hold to it.

That written decision is your **policy**. To **enforce** a policy means to make it actually hold. Hoping people remember it is not enforcing it. Having the computer refuse the wrong thing is.

Pick one and enforce it. The rule this guide recommends:

> Components accept a `style`/`className` prop, but **only for layout**
> — margin, width, flex, alignment.
>
> **Never** for colour, font, radius or padding.

**What this means:** `style` and `className` are props that let someone pass in their own look-and-feel from outside the component. This rule says: allow that for *placement* only. That means where the thing sits, how wide it is, and how it lines up with its neighbours. Do not allow it for what the thing *looks like*. Not the colour. Not the font. Not the roundness of its corners. Not the space inside it.

The words in the rule, one at a time. **Margin** is the empty space outside the component. **Width** is how wide it is. **Flex** is how leftover space in a row gets shared out. **Alignment** is how it lines up with the things beside it. Those four are all about placement, so they are allowed. **Radius** is how round the corners are and **padding** is the empty space inside, so those two are not.

Below is the version to avoid. It passes in a colour and an inside space from outside. `#3B82F6` is a hex colour code, which means one exact blue that somebody picked by hand. This button now looks different from every other button in the app.

```jsx
❌  <Button style={{ backgroundColor: "#3B82F6", padding: 10 }}>Save</Button>
```

Below is the version to use. Only placement is passed in from outside. The look comes from the button itself.

```jsx
✅  <Button style={{ marginTop: spacing.lg, alignSelf: "flex-end" }}>Save</Button>
```

Reading that: `marginTop: spacing.lg` leaves one named gap of empty space above the button. `alignSelf: "flex-end"` pushes the button to the far end of the row or column it sits in. That is usually the right-hand side. Neither of those two settings touches how the button itself looks.

**Layout overrides still use tokens.** The override may only say *where*, and even the *where* is written with a spacing token, never a typed number. `marginTop: 16` is a raw value and the lint rule from [the enforcement chapter](06-enforcement.md) refuses it, exactly as it would inside the component. The policy opens a door for placement; it does not open a door for raw values.

The double curly braces `{{ }}` appear in both pictures. That is how this kind of code says "here comes a small list of look-and-feel settings". You do not need to remember that part.

Why: those are the tokens. Overriding them is how a design system silently dies.

**What this means:** A **token** is a name for a value, like `x = 5` in maths. Your colours, fonts, corner roundness and inside spacing all come from tokens. That is the whole reason changing one line can change the whole app. There is more on this in [the colour chapter](../01-foundations/02-color.md). The moment people override those from outside, the token stops controlling anything. Nothing breaks on the day it happens. Six months later, half the app ignores your system. No one can point to the day it went wrong, because there was no such day. That is what "silently dies" means.

But blocking overrides completely makes people fork your component, which is worse.

**What this means:** To **fork** means to copy your component into their own file and edit their copy. If you allow nothing at all, that is what people do when they need one small change. Now the app has two buttons that look the same today and will not look the same next year. Worse, you will not know the copy exists. One rule that bends a little is better than a second button hiding in somebody else's file.

If your type system can express it, enforce it in types.

**What this means:** Some coding languages let you write down which props are allowed. You also write down what kind of value each one takes. The computer checks all of that before the app ever runs. It refuses the wrong ones on the spot. If your language can do that, use it. A rule the computer enforces beats a rule written in a document, because documents get forgotten. When a rule lives only in a document, you find out it was broken months later. By then the app already looks wrong, and the fix is spread across many screens. More on making rules stick is in [the enforcement chapter](06-enforcement.md).

---

## 11.4 Controlled or uncontrolled — decide and be consistent

Decide who remembers the current value: the component itself, or the screen that uses it. Pick one way as the normal way, and use it across your whole library.

Here are the two ways, with the props each one uses.

```
Controlled:    value + onChange       parent owns the state
Uncontrolled:  defaultValue           component owns the state
```

**What this means:** **State** is the information a component is holding right now. The letters you have typed into a search box are its state. The **parent** is the screen or component that holds this one inside it.

In the **controlled** way, the parent holds that text. It hands the text down through the `value` prop. When the user types, the component calls `onChange` to say "something was typed, please update it".

In the **uncontrolled** way, the box keeps its own text. You give it a starting value through `defaultValue`. After that it looks after itself and the parent never sees the text.

Think of a cricket scoreboard. Controlled is the scorer keeping the score in their book and telling the board what to display. Uncontrolled is the board keeping its own count and you only setting the starting number.

Pick one style as the default across the library.

**What this means:** Do not have some components work one way and some the other. Someone using your library should know which way a component behaves without having to check. Mix the two ways and you get a **bug** that looks like magic. A bug is the app behaving wrongly. Here, a person types and nothing appears on screen. The reason is that nobody was holding the text.

Below is the version to avoid. Two text boxes in the same app, working in two different ways, for no reason.

```jsx
❌  <SearchInput value={query} onChange={setQuery} />
    <NameInput defaultValue="Vikas" />
```

Below is the version to use. Both work the same way, so nobody has to check.

```jsx
✅  <SearchInput value={query} onChange={setQuery} />
    <NameInput value={name} onChange={setName} />
```

Reading that: `value={query}` hands the box the text the screen is currently holding. `onChange={setQuery}` tells the screen to update that text whenever the user types. The curly braces `{ }` mean the value is coming from elsewhere in the code, not typed out as plain text.

If you support both, define what happens when someone passes both (usually: controlled wins, with a dev warning).

**What this means:** You may allow both ways. If you do, someone will one day pass `value` and `defaultValue` at the same time by mistake. Decide now what the component does in that case, and write it down. The usual answer is this. The controlled prop `value` wins. The component also prints a **dev warning**. That is a message only you and your team see while building the app. Users never see it. Without a written decision here, the same mistake behaves differently in different components. Finding the cause can then cost you a whole day.

**Value state is not interaction state.** The text in a box is its *value*; who owns it is the question above. Hovered, pressed, focused, disabled, selected and loading are *interaction states*, and they have only one sensible owner: the component, reading the state tokens from [the states chapter](../01-foundations/06-states-elevation-motion.md). The screen may tell a component a **fact** — `disabled`, `loading`, `selected`, `error` — as a plain yes/no prop. The screen never paints the look of that fact, and never passes a hover or pressed colour. Write this down beside your controlled/uncontrolled choice: "facts come in as props; looks come from state tokens inside the component". Every component then has the same set of states, in the same order, and the reference surface can draw the whole component × state table without anyone hand-writing it.

The same rule covers the three things a component must pull from context rather than from props: the screen's **density** (section 11.1), the **layer** it renders on (from [the layering chapter](04-layering.md)), and the **motion** it uses to appear ([the states chapter](../01-foundations/06-states-elevation-motion.md)). A caller should not be able to hand a dialog a number for any of these.

---

## 11.5 Always pass through

Three things must be accepted by every single component you build. No component gets an exception.

Every component, no exceptions:

- `testID` / `data-testid` — for automated tests
- Accessibility props — label, role, state, hint
- `ref` — forwarded to the real underlying element

**What this means:** Taking them one at a time.

`testID` (called `data-testid` on the web) is a hidden name tag. An **automated test** is a small program that opens your app by itself, taps things, and checks the result. It needs a reliable way to find the button. The name tag is that way. Users never see it.

**Accessibility props** are what a **screen reader** uses to describe your component. A screen reader is software that reads the screen out loud for a person who cannot see it. The *label* says what the thing is ("Save"). The *role* says what kind of thing it is ("button"). The *state* says its current condition ("selected", "disabled"). The *hint* says what will happen if you tap it. Leave these props out and a blind person hears "button" and nothing else. They cannot tell whether tapping it saves their work or deletes it. There is a whole chapter on this: [the accessibility chapter](01-accessibility.md).

`ref` is a handle to the real element underneath. An **element** is one basic thing on screen. The phone or the browser already knows how to draw it. A plain button is an element. Your `Button` component is a **wrapper**. That means it is your own component sitting around one of those plain elements, adding your colours and your rules. So inside that wrapper there is a real, plain button on the screen. `ref` passes a handle through your wrapper down to that real one. Other code can then say "put the keyboard cursor here" or "scroll to this row". "Forwarded" means your component takes the handle it was given and hands it down. Without that, the handle stops at your wrapper and does nothing, and the keyboard cursor lands in the wrong place.

**Where a component can be icon-only, the label is required, not optional.** A close button, a back arrow, a microphone toggle: the only words a screen reader has are the ones you pass. So the label prop on such a component is a required prop, refused by the type system when missing, and the default label for each icon comes from the icon inventory's own accessibility label. A status shown with a `tone` follows the same idea from the other side: the component renders the **icon and the word** together, never colour alone, because colour is invisible to some people and meaningless to a screen reader (see [the accessibility chapter](01-accessibility.md)). Hit-target size is the component's job too: however small the visible icon, the component pads itself to the minimum target from the state tokens, so no screen has to remember to.

Going back and adding these to 40 components later is miserable work.
Adding them to a template today is free.

**What this means:** Going back later to add something that should have been there from the start is slow, dull work. Say you skip these three now. Your library still grows to 40 components. Adding them later means opening 40 files. You change each one. You test each one. You miss two of them. Put them in the template on day one instead, and every new component gets them for nothing.

---

## 11.6 Sensible defaults

A component used with no props at all should already be correct, usable and correctly spaced.

A component with no props should already be correct and usable.

**What this means:** A **default** is the value a prop takes when nobody passes anything. Choose defaults that match the most common case. The normal case should need zero settings.

Below is what a bare button should already give you. Look at the comment line under it, which lists what you get without asking.

```jsx
<Button>Save</Button>
// = variant "secondary", size "md", full accessibility, correct spacing
```

Reading that: you wrote nothing except the word "Save". You still got a secondary-style button. It came out at medium size. It has a proper label for screen readers. It has the right amount of space inside it. Everything after `//` is a comment — a note written for humans, which the app ignores.

If people must pass 4 props to get the normal case, the defaults are wrong.

**What this means:** Count the props people write for the most ordinary use of your component. If the answer is 4, you picked your defaults for a rare case instead of the common one. Swap them around. If you leave it, people will copy those four props from screen to screen. One day somebody copies only three of them, and that screen quietly stops matching the rest of the app.

Below is the version to avoid. Every ordinary button needs four settings before it works properly.

```jsx
❌  <Button variant="secondary" size="md" accessibilityRole="button" padding="md">Save</Button>
```

Reading that: `variant="secondary"` asks for the quieter button style. `size="md"` asks for medium. `accessibilityRole="button"` tells a screen reader that this thing is a button. `padding="md"` sets the space inside it. All four of those should already have been true without anybody typing them.

Below is the version to use. The same result, with the defaults doing the work.

```jsx
✅  <Button>Save</Button>
```

---

## 11.7 A component template

Write every component in the same order, using the same six steps. Copy the same basic outline every time.

Every component in the library should be built in the same shape, with the same parts in the same order:

```
1. Types / props interface, with doc comments
2. Sensible defaults
3. Token lookups (never raw values) — colour roles, spacing, radius, type, icon sizes,
   state shifts, elevation level, layer tier, motion duration; density from context
4. Accessibility props
5. Forwarded ref, testID, style passthrough
6. The render
7. The usage note (when to use, when not to — section 11.8)
```

Each step, in plain words:

1. **Types / props interface, with doc comments** — the written list of which props this component accepts. It also says what kind of value each prop takes. Above each one, put a short note saying what it is for.
2. **Sensible defaults** — the values used when nobody passes anything, as in section 11.6.
3. **Token lookups (never raw values)** — take colours, spacing and roundness by name from your tokens. Write `spacing.md`, never `12`. Write the colour role name, never a hex colour code. A **raw value** is a number or a colour typed straight into the file, like `12` or `#3B82F6`. Type one of those and that component stops listening to your tokens. Change `spacing.md` a year later and every component moves except that one. Nobody will remember why.
4. **Accessibility props** — the label, role, state and hint that a screen reader reads out.
5. **Forwarded ref, testID, style passthrough** — the three things from section 11.5. Also let the allowed `style` from section 11.3 pass through.
6. **The render** — the part that says what actually appears on screen.
7. **The usage note** — the three-line "use for / never / instead" entry from section 11.8, kept in the same file as the component so it cannot drift away from it, and written in a shape a script can read.

Consistency here means a new developer can read any component in 30 seconds.

**What this means:** Every file has the same six parts, in the same order. So you already know where to look before you open it. Need the defaults? Second block, always. Need to see what appears on screen? Bottom of the file, always. A developer is a person who writes the app's code. One joining your team on Monday can read any component in half a minute. There is nothing to hunt for. Skip this and every file becomes a small puzzle. A five-minute change then turns into an hour of reading.

This is the same idea as your notebook having the date at the top corner of every page. You stop searching for the date. Your eye already knows.

---

## 11.8 Document *when*, not only *what*

Write down when to use each thing and when not to. Showing what it looks like is not enough.

A page showing your button colours teaches nothing about which to use.

**What this means:** A page with four coloured buttons on it answers the question "what do these look like?". Nobody was asking that. The real question is "which one do I put on this screen?" A picture cannot answer that. Only a written rule can.

Below is what a useful entry looks like. Notice that it has three lines, and none of them is about colour.

```
Button / primary
  Use for: the ONE most important action on a screen.
  Never:   two primaries in the same view.
  Instead: use secondary for the other actions.
```

Reading that: the primary button marks the single most important action on the screen. You never put two of them in the same view. A view is one screen the user is looking at. When there are other actions, those use the secondary style. Now a new person can decide correctly without asking anyone. Leave this note out and they will guess. Then two loud buttons end up fighting each other on the same screen.

Keep this note next to the component, in a fixed shape (the three lines above), so a script can collect every note and draw the component section of the reference surface from them (see [the enforcement chapter](06-enforcement.md), section 12.2). A page generated from the notes cannot drift away from the code. A page someone pastes the notes into will.

**The usage rules are the real system.** The appearance is only the output.

**What this means:** People think a design system is the colours and the shapes. It is not. It is the decisions about when to use them. The colours are what those decisions produce. Write down the look and skip the rules, and you have handed people paint with no plan. Two weeks later you find a screen with three primary buttons on it. Nobody looking at that screen can tell what they are meant to do first.

---

## 11.9 Which components, and in what order

List the components before you build the first one. Take the list from the screens you already have, not from a library you admire.

**What this means:** Open every real screen and circle each repeated piece: the button, the text box, the small status chip, the row with a title and a value, the dialog frame. That circled list is your **inventory**. It is usually far shorter than a famous component library, and everything on it is proven to be needed, because it is already on a screen. A component that is on no screen is a guess, and guesses are what the governance rule "three real uses or it waits" exists to stop.

Then put the inventory in build order. Two rules decide it.

- **Primitives before compounds.** A dialog is made of a frame, a heading, text and buttons. Build the button and the text before the dialog, or the dialog is born with its own private button inside it.
- **The most-used screen first.** Count which components each screen needs. Build the set that makes the most important screen real first, and prove the contract on it, before widening. Ten components that make one screen real beat forty that make none.

Write the inventory as a table: component · which screens use it · what it is made of · build order. That table is part of the contract page. It is the first thing to go stale if it lives anywhere else.

---

## 11.10 Quick checklist

Tick each line once your app actually does it, not once you agree with it.

- [ ] One prop vocabulary written down (`variant` / `size` / `tone`)
  - The same setting names on every component. The same allowed values too.
- [ ] Compound components instead of 30-prop components
  - Parts get placed inside the component. They are not switches piled on top of it.
- [ ] Style override policy decided and enforced
  - You have written down what outsiders may change. Placement is allowed.
  - Colour, font, corner roundness and inside spacing are not.
- [ ] Controlled vs uncontrolled convention chosen
  - You decided who remembers the current value: the parent screen, or the component itself.
  - Whichever you picked, it is the same across the whole library.
- [ ] `testID`, a11y props and `ref` pass through everywhere
  - Every component takes a hidden test name tag.
  - Every component takes the labels a screen reader needs. ("a11y" is short for accessibility.)
  - Every component passes a handle down to the real element underneath.
- [ ] Zero-prop usage is already correct
  - A component used with no settings at all already looks right and behaves right.
- [ ] Every component has a "when to use / when not to" note
  - A written rule, not only a picture of what the thing looks like.
  - It sits in the component's own file, in a fixed shape, so the reference surface can be generated from it.
- [ ] Size, layer and motion come from the screen's context, not from the call site
  - A screen declares its density once; components read it. No dialog accepts a layer number.
- [ ] Facts in as props, looks from state tokens
  - `disabled`, `loading`, `selected`, `error` are yes/no props; hover, pressed and focus looks come from the state tokens inside the component.
- [ ] Icon-only components refuse to build without a label
  - The label is a required prop; status tones always render icon and word; every component pads itself to the minimum hit target.
- [ ] The inventory table exists, taken from real screens, in build order
  - Component · screens that use it · what it is made of · order. Primitives before compounds.
