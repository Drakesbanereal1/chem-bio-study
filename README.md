# Chemistry & Biology Study App

An offline practice-question app for chemistry and biology. Same engine as the CNA app — only the content differs. No account, no internet, no personal data collected.

## How to open it
Double-click **`index.html`** — it opens in your browser and runs fully offline. On a phone, copy the folder over (or host it) and open `index.html`.

## How to add your questions (the only file you edit for content)
All questions live in **`questions.js`** as one array. Each item looks like this:

```js
{ id:"C7", bank:"CHEM", type:"mc", sub:"Stoichiometry", pg:"Ch. 3",
  q:"How many moles are in 36 g of water (H2O, 18 g/mol)?",
  o:["1 mol","2 mol","18 mol","36 mol"], a:1,
  e:"36 g / 18 g per mol = 2 mol." }
```

Field guide:
| Field | Meaning |
|---|---|
| `id` | unique id (e.g., `C7`, `B12`) |
| `bank` | **`"CHEM"`** or **`"BIO"`** (this is what the Chemistry/Biology/Combined buttons filter on) |
| `type` | `"mc"` (multiple choice) or `"tf"` (true/false) |
| `sub` | topic — becomes a "Test by topic" option and a results bar (e.g., "Cell Biology") |
| `pg` | optional source/chapter, shown in review (e.g., "Ch. 3") |
| `q` | the question text |
| `o` | the answer choices. For `tf`, use `["True","False"]` |
| `a` | index of the correct choice (0 = first, 1 = second, …) |
| `e` | short explanation shown after answering |

**You don't have to hand-edit this** — send me your materials (PDFs, notes) and I'll generate the `questions.js` for you, verified and organized by topic.

## What the app does
- **Tests:** Chemistry, Biology, Combined, Randomized, by-topic, and retest-my-missed
- **Modes:** Practice (instant feedback + explanation) and Exam (answers hidden until submit)
- One question at a time, prev/next, progress bar, mark-for-review, navigator, unanswered warning
- **Grading:** total / correct / incorrect / unanswered, overall %, correct-to-incorrect ratio, per-topic bars, N/A-safe
- Color-coded review (green/red/yellow) with correct answer + explanation + source
- Saves on the device (resume, history, most-missed), print, download results
- Configurable practice target, large readable text, high contrast, light/dark, mobile + keyboard support
- **Installable PWA** + offline caching (`manifest.json`, `sw.js`); `noindex` + `robots.txt` so a hosted copy isn't searchable

## Files
`index.html` · `styles.css` · `app.js` (engine) · `questions.js` / `questions.json` (content) · `manifest.json` · `sw.js` · `robots.txt` · icons · `README.md`

## Current status
Running with **6 placeholder sample questions** (3 chemistry, 3 biology) just to prove it works. Replace them with your real content — upload your source PDFs and I'll build the banks section by section.
