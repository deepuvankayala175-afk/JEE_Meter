# JEEmeter — JEE Prep Hub

A simple, dependency-free browser app for JEE preparation:

- Concept-wise quizzes in **Physics, Chemistry and Mathematics**
- Separate **JEE Main** and **JEE Advanced** question sets for every concept
- Instant feedback with explanations after each question
- **Progress tracking** (best score per concept/level, subject accuracy, recent attempts) saved in the browser via `localStorage`

## Run locally

No build step or dependencies. Either:

**Option 1 — open directly**

Double-click `index.html` (or drag it into a browser).

**Option 2 — local server (recommended)**

```bash
cd jeemeter
python3 -m http.server 8000
# or: npx serve .
```

Then open http://localhost:8000

## Project structure

```
index.html   – page shell
styles.css   – styling
data.js      – question bank (concepts → main/advanced → questions)
app.js       – quiz flow, progress storage, rendering
```

## Adding questions

Edit `data.js`. Each concept looks like:

```js
{
  id: "kinematics",
  subject: "physics",          // physics | chemistry | maths
  title: "Kinematics",
  description: "…",
  questions: {
    main: [ { q, options: [4 strings], answer: 0-3, explanation } ],
    advanced: [ … ],
  },
}
```

## Push to GitHub

```bash
cd jeemeter
git init
git add .
git commit -m "Initial JEEmeter prep hub"
git branch -M main
git remote add origin https://github.com/<your-username>/jeemeter.git
git push -u origin main
```

To host for free, enable **GitHub Pages** in the repo settings (source: `main` branch, root) — the site is static so it works as-is.
