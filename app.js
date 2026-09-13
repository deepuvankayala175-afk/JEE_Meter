// JEEmeter — simple client-side quiz app. Progress is stored in localStorage.

const STORAGE_KEY = "jeemeter-progress-v1";

// ---------- storage ----------
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { attempts: [] };
  } catch {
    return { attempts: [] };
  }
}

function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

function bestScore(conceptId, level) {
  const rel = state.progress.attempts.filter(a => a.conceptId === conceptId && a.level === level);
  if (!rel.length) return null;
  return Math.max(...rel.map(a => a.correct / a.total));
}

function conceptById(id) {
  return CONCEPTS.find(c => c.id === id);
}

// ---------- state ----------
const state = {
  view: "home",
  subjectFilter: "all",
  levelFilter: "all",
  progress: loadProgress(),
  quiz: null, // { conceptId, level, index, answers: [], revealed: bool }
};

const app = document.getElementById("app");

// ---------- helpers ----------
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pct(x) {
  return Math.round(x * 100);
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  navigate();
}

// ---------- views ----------
function renderHome() {
  const subjectChips = ["all", ...Object.keys(SUBJECTS)]
    .map(s => `<button class="chip ${state.subjectFilter === s ? "active" : ""}" data-subject="${s}">${s === "all" ? "All" : SUBJECTS[s].name}</button>`)
    .join("");
  const levelChips = ["all", "main", "advanced"]
    .map(l => `<button class="chip ${state.levelFilter === l ? "active" : ""}" data-level="${l}">${l === "all" ? "Both levels" : LEVELS[l]}</button>`)
    .join("");

  const concepts = CONCEPTS.filter(c => state.subjectFilter === "all" || c.subject === state.subjectFilter);

  const cards = concepts.map(c => {
    const levels = ["main", "advanced"].filter(l => state.levelFilter === "all" || state.levelFilter === l);
    const levelBtns = levels.map(l => {
      const best = bestScore(c.id, l);
      const score = best === null ? "Not attempted" : `Best: ${pct(best)}%`;
      return `<button class="btn level-btn" data-start="${c.id}" data-lvl="${l}">
        <span class="lvl-name">${LEVELS[l]}</span>
        <span class="lvl-score">${c.questions[l].length} Qs · ${score}</span>
      </button>`;
    }).join("");

    const attempts = state.progress.attempts.filter(a => a.conceptId === c.id).length;
    const scores = ["main", "advanced"].map(l => bestScore(c.id, l)).filter(v => v !== null);
    const overall = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;

    return `<div class="card concept-card">
      <div><span class="tag tag-${c.subject}">${SUBJECTS[c.subject].name}</span></div>
      <div class="concept-title">${escapeHtml(c.title)}</div>
      <div class="meta">${escapeHtml(c.description)}</div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct(overall)}%"></div></div>
      <div class="meta">${attempts} attempt${attempts === 1 ? "" : "s"} · mastery ${pct(overall)}%</div>
      <div class="levels">${levelBtns}</div>
    </div>`;
  }).join("");

  app.innerHTML = `
    <h1>Concept-wise Quizzes</h1>
    <p class="subtitle">Pick a concept and level. Each quiz gives instant feedback and saves your score.</p>
    <div class="filters">
      <span class="label">Subject:</span><div class="chip-group">${subjectChips}</div>
    </div>
    <div class="filters">
      <span class="label">Level:</span><div class="chip-group">${levelChips}</div>
    </div>
    <div class="grid">${cards}</div>`;

  app.querySelectorAll("[data-subject]").forEach(b => b.onclick = () => { state.subjectFilter = b.dataset.subject; render(); });
  app.querySelectorAll("[data-level]").forEach(b => b.onclick = () => { state.levelFilter = b.dataset.level; render(); });
  app.querySelectorAll("[data-start]").forEach(b => b.onclick = () => startQuiz(b.dataset.start, b.dataset.lvl));
}

function startQuiz(conceptId, level) {
  state.quiz = { conceptId, level, index: 0, answers: [], revealed: false, startedAt: Date.now() };
  state.view = "quiz";
  navigate();
}

function renderQuiz() {
  const { conceptId, level, index, answers, revealed } = state.quiz;
  const concept = conceptById(conceptId);
  const questions = concept.questions[level];
  const q = questions[index];
  const chosen = answers[index];
  const keys = ["A", "B", "C", "D"];

  const options = q.options.map((opt, i) => {
    let cls = "option";
    if (revealed) {
      if (i === q.answer) cls += " correct";
      else if (i === chosen) cls += " wrong";
    } else if (i === chosen) cls += " selected";
    return `<button class="${cls}" data-opt="${i}" ${revealed ? "disabled" : ""}>
      <span class="opt-key">${keys[i]}</span><span>${escapeHtml(opt)}</span>
    </button>`;
  }).join("");

  const isCorrect = chosen === q.answer;
  const explanation = revealed
    ? `<div class="explanation ${isCorrect ? "good" : "bad"}">
        <strong>${isCorrect ? "Correct!" : `Incorrect — answer is ${keys[q.answer]}`}</strong>${escapeHtml(q.explanation)}
      </div>`
    : "";

  const last = index === questions.length - 1;

  app.innerHTML = `
    <div class="card">
      <div class="quiz-header">
        <div>
          <span class="tag tag-${concept.subject}">${SUBJECTS[concept.subject].name}</span>
          <span class="tag tag-level">${LEVELS[level]}</span>
          <h2 style="margin-top:8px">${escapeHtml(concept.title)}</h2>
        </div>
        <div class="info">Question ${index + 1} / ${questions.length}</div>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct(index / questions.length)}%"></div></div>
      <p class="question-text">${escapeHtml(q.q)}</p>
      <div class="options">${options}</div>
      ${explanation}
      <div class="quiz-actions">
        <button class="btn btn-ghost" id="quit-btn">Quit</button>
        ${revealed
          ? `<button class="btn btn-primary" id="next-btn">${last ? "Finish" : "Next →"}</button>`
          : `<button class="btn btn-primary" id="check-btn" ${chosen === undefined ? "disabled" : ""}>Check answer</button>`}
      </div>
    </div>`;

  app.querySelectorAll("[data-opt]").forEach(b => b.onclick = () => {
    state.quiz.answers[index] = Number(b.dataset.opt);
    render();
  });
  const check = document.getElementById("check-btn");
  if (check) check.onclick = () => { state.quiz.revealed = true; render(); };
  const next = document.getElementById("next-btn");
  if (next) next.onclick = () => {
    if (last) finishQuiz();
    else { state.quiz.index++; state.quiz.revealed = false; navigate(); }
  };
  document.getElementById("quit-btn").onclick = () => {
    if (confirm("Quit this quiz? Progress on it won't be saved.")) { state.quiz = null; setView("home"); }
  };
}

function finishQuiz() {
  const { conceptId, level, answers, startedAt } = state.quiz;
  const questions = conceptById(conceptId).questions[level];
  const correct = questions.filter((q, i) => answers[i] === q.answer).length;
  const attempt = {
    conceptId, level, correct, total: questions.length,
    answers: [...answers],
    date: new Date().toISOString(),
    seconds: Math.round((Date.now() - startedAt) / 1000),
  };
  state.progress.attempts.push(attempt);
  saveProgress(state.progress);
  state.lastAttempt = attempt;
  state.quiz = null;
  state.view = "result";
  navigate();
}

function renderResult() {
  const a = state.lastAttempt;
  const concept = conceptById(a.conceptId);
  const questions = concept.questions[a.level];
  const keys = ["A", "B", "C", "D"];
  const ratio = a.correct / a.total;

  const review = questions.map((q, i) => {
    const ok = a.answers[i] === q.answer;
    return `<div class="review-item">
      <div class="q">${i + 1}. ${escapeHtml(q.q)}</div>
      <div class="ans">Your answer: <span class="${ok ? "ok" : "bad-text"}">${keys[a.answers[i]] ?? "—"}</span>
        ${ok ? "" : ` · Correct: <span class="ok">${keys[q.answer]}</span>`}</div>
      <div class="ans muted">${escapeHtml(q.explanation)}</div>
    </div>`;
  }).join("");

  const verdict = ratio === 1 ? "Perfect score!" : ratio >= 0.6 ? "Good work — keep going." : "Review the concept and try again.";

  app.innerHTML = `
    <div class="card">
      <span class="tag tag-${concept.subject}">${SUBJECTS[concept.subject].name}</span>
      <span class="tag tag-level">${LEVELS[a.level]}</span>
      <h2 style="margin-top:8px">${escapeHtml(concept.title)}</h2>
      <div class="score-big">${a.correct} / ${a.total}</div>
      <p class="muted">${verdict}</p>
      <div class="result-row">
        <div class="stat"><div class="val">${pct(ratio)}%</div><div class="lbl">Accuracy</div></div>
        <div class="stat"><div class="val">${a.seconds}s</div><div class="lbl">Time taken</div></div>
        <div class="stat"><div class="val">${pct(bestScore(a.conceptId, a.level))}%</div><div class="lbl">Best so far</div></div>
      </div>
      <div class="quiz-actions">
        <button class="btn" id="home-btn">Back to quizzes</button>
        <button class="btn btn-primary" id="retry-btn">Retry quiz</button>
      </div>
    </div>
    <div class="card" style="margin-top:16px">
      <h2>Review</h2>
      ${review}
    </div>`;

  document.getElementById("home-btn").onclick = () => setView("home");
  document.getElementById("retry-btn").onclick = () => startQuiz(a.conceptId, a.level);
}

function renderProgress() {
  const attempts = state.progress.attempts;
  if (!attempts.length) {
    app.innerHTML = `<h1>Your Progress</h1><div class="card empty">No quizzes attempted yet. Complete a quiz to see your stats here.</div>`;
    return;
  }

  const subjectCards = Object.keys(SUBJECTS).map(s => {
    const ids = CONCEPTS.filter(c => c.subject === s).map(c => c.id);
    const rel = attempts.filter(a => ids.includes(a.conceptId));
    const correct = rel.reduce((n, a) => n + a.correct, 0);
    const total = rel.reduce((n, a) => n + a.total, 0);
    const acc = total ? correct / total : 0;
    const attemptedConcepts = new Set(rel.map(a => a.conceptId)).size;
    return `<div class="card subject-card">
      <span class="tag tag-${s}">${SUBJECTS[s].name}</span>
      <div class="big">${pct(acc)}%</div>
      <div class="muted">${correct}/${total} correct · ${attemptedConcepts}/${ids.length} concepts tried</div>
      <div class="progress-bar" style="margin-top:8px"><div class="progress-fill" style="width:${pct(acc)}%"></div></div>
    </div>`;
  }).join("");

  const rows = CONCEPTS.map(c => {
    const cells = ["main", "advanced"].map(l => {
      const best = bestScore(c.id, l);
      const n = attempts.filter(a => a.conceptId === c.id && a.level === l).length;
      if (best === null) return `<td class="muted">—</td>`;
      return `<td><span class="mini-bar"><span style="width:${pct(best)}%"></span></span>${pct(best)}% <span class="muted">(${n})</span></td>`;
    }).join("");
    return `<tr><td><span class="tag tag-${c.subject}">${SUBJECTS[c.subject].name}</span></td><td>${escapeHtml(c.title)}</td>${cells}</tr>`;
  }).join("");

  const recent = [...attempts].reverse().slice(0, 8).map(a => {
    const c = conceptById(a.conceptId);
    const d = new Date(a.date);
    return `<tr>
      <td>${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</td>
      <td>${escapeHtml(c.title)}</td>
      <td>${LEVELS[a.level]}</td>
      <td class="${a.correct / a.total >= 0.6 ? "ok" : "bad-text"}">${a.correct}/${a.total}</td>
    </tr>`;
  }).join("");

  const totalCorrect = attempts.reduce((n, a) => n + a.correct, 0);
  const totalQ = attempts.reduce((n, a) => n + a.total, 0);

  app.innerHTML = `
    <h1>Your Progress</h1>
    <p class="subtitle">${attempts.length} quizzes · ${totalCorrect}/${totalQ} questions correct (${pct(totalCorrect / totalQ)}%)</p>
    <div class="subject-row">${subjectCards}</div>
    <div class="card">
      <h2>Best score by concept</h2>
      <table>
        <thead><tr><th>Subject</th><th>Concept</th><th>JEE Main</th><th>JEE Advanced</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <p class="muted" style="font-size:13px">Number in brackets = attempts.</p>
    </div>
    <div class="card" style="margin-top:16px">
      <h2>Recent attempts</h2>
      <table>
        <thead><tr><th>When</th><th>Concept</th><th>Level</th><th>Score</th></tr></thead>
        <tbody>${recent}</tbody>
      </table>
    </div>`;
}

// ---------- router ----------
function render() {
  if (state.view === "home") renderHome();
  else if (state.view === "quiz") renderQuiz();
  else if (state.view === "result") renderResult();
  else if (state.view === "progress") renderProgress();
}

function navigate() {
  render();
  window.scrollTo({ top: 0 });
}

document.querySelectorAll(".nav-btn").forEach(b => b.onclick = () => {
  if (state.view === "quiz" && !confirm("Leave the quiz? Progress on it won't be saved.")) return;
  state.quiz = null;
  setView(b.dataset.view);
});

document.getElementById("reset-btn").onclick = () => {
  if (confirm("Delete all saved progress? This cannot be undone.")) {
    state.progress = { attempts: [] };
    saveProgress(state.progress);
    render();
  }
};

render();
