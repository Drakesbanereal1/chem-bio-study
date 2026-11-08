/* ============================================================
   Chemistry & Biology Study - app.js
   Data source: window.QUIZ_DATA (questions.js). Same content is
   mirrored in questions.json for portability/inspection.
   Each item: {id, bank:"CHEM"|"BIO", type:"mc"|"tf",
               sub, pg, q, o:[...], a:correctIndex, e:explanation}
   ============================================================ */
(function () {
  "use strict";

  // ---------- Data guard ----------
  var DATA = (typeof window.QUIZ_DATA !== "undefined") ? window.QUIZ_DATA : [];
  var $ = function (id) { return document.getElementById(id); };
  var LETTERS = ["A", "B", "C", "D"];
  var DEFAULT_TARGET = 80;         // practice target %, configurable; NOT the official passing score
  var EXAM_SECONDS = 2 * 60 * 60;  // 2 hours for full/exam-style tests
  var K_PROGRESS = "chembio_progress_v1";
  var K_HISTORY = "chembio_history_v1";
  var K_MISSED = "chembio_missed_v1";
  var K_TARGET = "chembio_target_v1";

  // ---------- Storage helpers (safe) ----------
  function lsGet(k) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) {} }
  function getTarget() { var v = parseInt(lsGet(K_TARGET), 10); return (v >= 1 && v <= 100) ? v : DEFAULT_TARGET; }
  function setTarget(v) { v = parseInt(v, 10); if (!(v >= 1 && v <= 100)) v = DEFAULT_TARGET; lsSet(K_TARGET, v); return v; }

  // ---------- Utilities ----------
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); }
  function fmtTime(s) { s = Math.max(0, Math.round(s)); var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60; var mm = (h > 0 ? String(m).padStart(2, "0") : String(m)); return (h > 0 ? h + ":" : "") + mm + ":" + String(sec).padStart(2, "0"); }
  function bankName(b) { return b === "CHEM" ? "Chemistry" : "Biology"; }
  function sourceLine(item) { return bankName(item.bank) + (item.pg ? " - " + item.pg : ""); }

  // ============================================================
  //  PURE GRADING (also used by self-tests) — must be exact.
  // ============================================================
  // answers: array parallel to questions; each is chosen index or null.
  function grade(questions, answers, targetPct) {
    if (targetPct === undefined) targetPct = DEFAULT_TARGET;
    var total = questions.length, correct = 0, incorrect = 0, unanswered = 0;
    for (var i = 0; i < total; i++) {
      var ch = answers[i];
      if (ch === null || ch === undefined) { unanswered++; }
      else if (ch === questions[i].a) { correct++; }
      else { incorrect++; }
    }
    var answered = correct + incorrect;                       // answered = correct + incorrect
    var overall = total ? (correct / total) * 100 : 0;        // overall = correct / total * 100
    var correctPct = answered ? (correct / answered) * 100 : 0;
    var incorrectPct = answered ? (incorrect / answered) * 100 : 0;
    var g = gcd(correct, incorrect);
    return {
      total: total, correct: correct, incorrect: incorrect, unanswered: unanswered,
      answered: answered,
      overall: overall,
      correctPct: correctPct, incorrectPct: incorrectPct,
      ratioRaw: correct + " : " + incorrect,
      ratioSimple: (correct / g) + " : " + (incorrect / g),
      passed: total > 0 && overall >= targetPct,
      valid: (correct + incorrect + unanswered) === total     // must always hold
    };
  }

  // ============================================================
  //  SELF-TESTS (requirement 9). Run once on load; report result.
  // ============================================================
  function runSelfTests() {
    function mk(n) { var q = []; for (var i = 0; i < n; i++) q.push({ a: 0 }); return q; }
    var results = [];
    // Case 1: all correct -> 100%
    (function () { var q = mk(50), an = q.map(function () { return 0; }); var r = grade(q, an); results.push(r.overall === 100 && r.valid && r.unanswered === 0); })();
    // Case 2: all incorrect -> 0%
    (function () { var q = mk(50), an = q.map(function () { return 1; }); var r = grade(q, an); results.push(r.overall === 0 && r.correct === 0 && r.valid); })();
    // Case 3: 80 correct / 20 incorrect -> 80%
    (function () { var q = mk(100), an = []; for (var i = 0; i < 100; i++) an.push(i < 80 ? 0 : 1); var r = grade(q, an); results.push(r.overall === 80 && r.correctPct === 80 && r.incorrectPct === 20 && r.answered === 100 && r.valid); })();
    // Case 4: 50 correct / 25 incorrect / 25 unanswered -> 50% overall
    (function () { var q = mk(100), an = []; for (var i = 0; i < 100; i++) { if (i < 50) an.push(0); else if (i < 75) an.push(1); else an.push(null); } var r = grade(q, an); results.push(r.overall === 50 && r.correct === 50 && r.incorrect === 25 && r.unanswered === 25 && r.correctPct === (50 / 75 * 100) && r.valid); })();
    // Case 5: counts always sum to total (random)
    (function () { var q = mk(37), an = q.map(function (_, i) { return i % 3 === 0 ? null : (i % 2); }); var r = grade(q, an); results.push((r.correct + r.incorrect + r.unanswered) === 37 && r.valid); })();
    // Ratio simplification sanity: 160:40 -> 4:1
    (function () { var q = mk(200), an = []; for (var i = 0; i < 200; i++) an.push(i < 160 ? 0 : 1); var r = grade(q, an); results.push(r.ratioRaw === "160 : 40" && r.ratioSimple === "4 : 1"); })();

    var passed = results.every(Boolean);
    var el = $("selfTestLine");
    if (passed) el.innerHTML = "Grading self-tests: <b class='ok'>all " + results.length + " passed</b> (100% / 0% / 80% / 50% cases, count sums, ratio).";
    else el.innerHTML = "Grading self-tests: <b class='no'>FAILED " + results.filter(function (x) { return !x; }).length + " of " + results.length + "</b> — see console.";
    if (!passed) console.error("Self-test results:", results);
    return passed;
  }

  // Data integrity check (requirement 8): one valid answer, unique ids, options present.
  function runDataAudit() {
    var ids = {}, problems = [];
    DATA.forEach(function (it, idx) {
      if (ids[it.id]) problems.push("Duplicate id " + it.id);
      ids[it.id] = true;
      if (!it.o || (it.type === "mc" && it.o.length !== 4) || (it.type === "tf" && it.o.length !== 2)) problems.push(it.id + " bad option count");
      if (typeof it.a !== "number" || it.a < 0 || it.a >= it.o.length) problems.push(it.id + " invalid answer index");
      if (!it.q || !it.e) problems.push(it.id + " missing text");
    });
    var chem = DATA.filter(function (x) { return x.bank === "CHEM"; }).length;
    var bio = DATA.filter(function (x) { return x.bank === "BIO"; }).length;
    console.log("[C&B] Loaded " + DATA.length + " questions (Chemistry " + chem + ", Biology " + bio + ").");
    if (problems.length) console.error("[C&B] Data audit problems:", problems);
    else console.log("[C&B] Data audit: OK - unique ids, one valid answer each, options intact.");
    return { count: DATA.length, chem: chem, bio: bio, problems: problems };
  }

  // ============================================================
  //  APP STATE
  // ============================================================
  var mode = "practice";          // "practice" | "exam"
  var session = null;             // {items:[...], answers:[], flags:[], cur, timed, secondsLeft, title}
  var timerId = null;
  var reviewFilter = "all";
  var lastResult = null;

  // ---------- Subject / chapter / topic taxonomy (drives navigation) ----------
  var TAXONOMY = {
    chem: { label: "Chemistry", chapters: [
      { id:"ch13", label:"Chapter 13 - Organic Structures & Addition", topics:[
        { id:"structures", label:"Organic structures & addition" } ] },
      { id:"ch14", label:"Chapter 14 - Alcohols, Oxidation & Chirality", topics:[
        { id:"alcohols", label:"Alcohols, oxidation & chirality" } ] },
      { id:"ch15", label:"Chapter 15 - Aldehydes, Ketones & Acetals", topics:[
        { id:"carbonyl", label:"Aldehydes, ketones & acetals" } ] },
      { id:"ch16", label:"Chapter 16 - Carbohydrates", topics:[
        { id:"carbs", label:"Carbohydrates" } ] },
      { id:"ch17", label:"Chapter 17 - Carboxylic Acids, Esters & Amides", topics:[
        { id:"aea", label:"Carboxylic acids, esters & amides" } ] },
      { id:"ch18", label:"Chapter 18 - Lipids", topics:[
        { id:"fattyacids", label:"Fatty acids & melting point" },
        { id:"waxestag", label:"Waxes & triacylglycerols" },
        { id:"membranes", label:"Phospholipids & membranes" },
        { id:"steroids", label:"Steroids & lipoproteins" },
        { id:"eicosanoids", label:"Eicosanoids & NSAIDs" } ] },
      { id:"unit7", label:"Unit 7 - Bisphenols & Hormone Mimics", topics:[
        { id:"bisphenols", label:"Bisphenols & hormone mimics" } ] },
      { id:"skills", label:"Skills & Review (Ch 13-16)", topics:[
        { id:"readstructure", label:"Read the structure" },
        { id:"drawproduct", label:"Draw the product" },
        { id:"formulas", label:"Formulas & counting" },
        { id:"esters", label:"Esters & biomolecules (optional)" } ] },
      { id:"math", label:"Exam Math", topics:[
        { id:"exammath", label:"Exam math practice" },
        { id:"moremath", label:"More math practice (optional)" } ] }
    ] },
    bio: { label: "Biology", chapters: [
      { id:"bio7", label:"Chapter 7 - Gene Expression & the lac Operon", topics:[
        { id:"all", label:"Gene expression & the lac operon" } ] },
      { id:"bio8", label:"Chapter 8 - Genetics, Mutation & Gene Transfer", topics:[
        { id:"all", label:"Genetics, mutation & gene transfer" } ] },
      { id:"bio9", label:"Chapter 9 - Biotechnology", topics:[
        { id:"all", label:"Biotechnology (PCR, cloning, sequencing)" } ] },
      { id:"bio10", label:"Chapter 10 - Classification & Identification", topics:[
        { id:"all", label:"Classification & identification" } ] }
    ] }
  };
  var SUBJECT_ORDER = ["chem", "bio"];
  var nav = { subjectId: null, modeSel: null, chapterId: null };  // modeSel: "study" | "quiz"

  // taxonomy lookups
  function getChapter(subjectId, chapterId) {
    var s = TAXONOMY[subjectId]; if (!s) return null;
    for (var i = 0; i < s.chapters.length; i++) if (s.chapters[i].id === chapterId) return s.chapters[i];
    return null;
  }
  function getTopic(subjectId, chapterId, topicId) {
    var c = getChapter(subjectId, chapterId); if (!c) return null;
    for (var i = 0; i < c.topics.length; i++) if (c.topics[i].id === topicId) return c.topics[i];
    return null;
  }
  // data filters by taxonomy ids
  function qForChapter(subjectId, chapterId) { return DATA.filter(function (x) { return x.subjectId === subjectId && x.chapterId === chapterId; }); }
  function qForTopic(subjectId, chapterId, topicId) { return DATA.filter(function (x) { return x.subjectId === subjectId && x.chapterId === chapterId && x.topicId === topicId; }); }
  function studyFor(subjectId, chapterId, topicId) {
    var arr = window.STUDY_DATA || [];
    for (var i = 0; i < arr.length; i++) { var d = arr[i]; if (d.subjectId === subjectId && d.chapterId === chapterId && d.topicId === topicId) return d; }
    return null;
  }

  // ---------- Build item lists ----------
  function byBank(b) { return DATA.filter(function (x) { return x.bank === b; }); }
  function subjectsList() {
    // preserve first-seen order, grouped by bank
    var seen = [], out = [];
    DATA.forEach(function (x) { var key = x.bank + "|" + x.sub; if (seen.indexOf(key) === -1) { seen.push(key); out.push({ bank: x.bank, sub: x.sub }); } });
    return out;
  }

  function startTest(items, title, opts) {
    opts = opts || {};
    if (!items.length) { toast("No questions in that set."); return; }
    var arr = items.slice();
    if (opts.shuffle) shuffle(arr);
    session = {
      items: arr.map(function (it) {
        // clone options with shuffled order so the correct letter isn't predictable
        var opts2 = it.o.map(function (t, i) { return { t: t, correct: i === it.a }; });
        if (opts.shuffleOptions !== false) shuffle(opts2);
        return { ref: it, opts: opts2 };
      }),
      answers: [], flags: [], cur: 0,
      timed: !!opts.timed, secondsLeft: opts.timed ? EXAM_SECONDS : 0,
      title: title, startedAt: Date.now()
    };
    for (var i = 0; i < session.items.length; i++) { session.answers.push(null); session.flags.push(false); }
    saveProgress();
    enterQuiz();
  }

  function enterQuiz() {
    showScreen("quizScreen");
    $("navbar").hidden = false;
    $("answeredStat").hidden = false;
    $("timer").hidden = !session.timed;
    if (session.timed) startTimer();
    renderQuestion();
  }

  // ---------- Timer ----------
  function startTimer() {
    stopTimer(); updateTimer();
    timerId = setInterval(function () {
      session.secondsLeft--;
      if (session.secondsLeft <= 0) { session.secondsLeft = 0; updateTimer(); finish(true); return; }
      updateTimer();
      if (session.secondsLeft % 10 === 0) saveProgress();
    }, 1000);
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
  function updateTimer() { $("timeVal").textContent = fmtTime(session.secondsLeft); $("timer").classList.toggle("warn", session.secondsLeft <= 300); }

  // ---------- Render a question ----------
  function currentGraded(i) {
    // in practice mode, once answered it's locked & shown
    return mode === "practice" && session.answers[i] !== null;
  }
  function renderQuestion() {
    var i = session.cur, cell = session.items[i], item = cell.ref;
    $("qCount").textContent = "Question " + (i + 1) + " of " + session.items.length;
    $("qSub").textContent = item.sub;
    $("qType").textContent = item.type === "tf" ? "True / False" : "Multiple choice";
    $("flagBtn").classList.toggle("on", session.flags[i]);
    $("flagBtn").setAttribute("aria-pressed", session.flags[i]);
    $("flagLbl").textContent = session.flags[i] ? "Marked" : "Mark for review";
    $("qText").textContent = item.q;

    var locked = currentGraded(i);
    var box = $("options"); box.innerHTML = "";
    cell.opts.forEach(function (opt, oi) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "opt"; b.setAttribute("role", "radio");
      var chosen = session.answers[i] === oi;
      b.setAttribute("aria-checked", chosen);
      if (chosen) b.classList.add("selected");
      if (locked) {
        b.classList.add("locked");
        if (opt.correct) b.classList.add("correct");
        else if (chosen) b.classList.add("wrong");
      }
      b.innerHTML = '<span class="mk">' + LETTERS[oi] + '</span><span class="ot"></span>';
      b.querySelector(".ot").textContent = opt.t;
      b.addEventListener("click", function () { choose(oi); });
      box.appendChild(b);
    });

    // feedback (practice mode only, after answering)
    var fb = $("feedback");
    if (locked) {
      var right = cell.opts.findIndex(function (o) { return o.correct; });
      var isRight = session.answers[i] === right;
      fb.hidden = false;
      fb.className = "feedback " + (isRight ? "ok" : "no");
      fb.innerHTML = '<div class="tag">' + (isRight ? "&#10003; Correct" : "&#10007; Incorrect") + '</div>' +
        '<div>' + (isRight ? "" : "<strong>Correct answer: " + LETTERS[right] + " &mdash; " + esc(cell.opts[right].t) + "</strong><br>") + esc(item.e) + '</div>' +
        '<div class="src">' + esc(sourceLine(item)) + " &bull; " + esc(item.sub) + '</div>';
    } else { fb.hidden = true; }

    $("prevBtn").disabled = i === 0;
    var last = i === session.items.length - 1;
    $("nextBtn").hidden = last;
    $("submitBtn").hidden = !last;
    updateProgress();
  }

  function choose(oi) {
    var i = session.cur;
    if (currentGraded(i)) return;      // locked in practice mode
    session.answers[i] = oi;
    renderQuestion();
    saveProgress();
    if (mode === "exam") {
      // brief auto-advance is NOT used; user controls navigation
    }
  }

  function updateProgress() {
    var answered = session.answers.filter(function (a) { return a !== null; }).length;
    $("answeredStat").textContent = answered + " / " + session.items.length + " answered";
    $("progressFill").style.width = ((session.cur + 1) / session.items.length * 100) + "%";
  }

  function go(delta) {
    var n = session.cur + delta;
    if (n < 0 || n >= session.items.length) return;
    session.cur = n; renderQuestion(); saveProgress();
  }
  function jump(n) { session.cur = n; renderQuestion(); saveProgress(); }
  function toggleFlag() { var i = session.cur; session.flags[i] = !session.flags[i]; renderQuestion(); toast(session.flags[i] ? "Marked for review" : "Mark removed"); saveProgress(); }

  // ---------- Navigator drawer ----------
  function openDrawer() {
    var grid = $("pgrid"); grid.innerHTML = "";
    session.items.forEach(function (_, i) {
      var c = document.createElement("button");
      c.type = "button";
      c.className = "pcell" + (session.answers[i] !== null ? " answered" : "") + (session.flags[i] ? " flagged" : "") + (i === session.cur ? " current" : "");
      c.textContent = i + 1;
      c.addEventListener("click", function () { jump(i); closeDrawer(); });
      grid.appendChild(c);
    });
    $("overlay").classList.add("show"); $("drawer").classList.add("show");
  }
  function closeDrawer() { $("overlay").classList.remove("show"); $("drawer").classList.remove("show"); }

  // ---------- Finish & grade ----------
  function finish(auto) {
    var answered = session.answers.filter(function (a) { return a !== null; }).length;
    var blank = session.items.length - answered;
    if (!auto) {
      var msg = blank > 0
        ? "You have " + blank + " unanswered question" + (blank > 1 ? "s" : "") + ". Submit anyway?"
        : "Submit this test and see your results?";
      if (!confirm(msg)) return;
    }
    stopTimer();
    // build parallel arrays for pure grade()
    var qs = session.items.map(function (cell) { return { a: cell.opts.findIndex(function (o) { return o.correct; }) }; });
    var res = grade(qs, session.answers, getTarget());
    res.timeUsed = session.timed ? (EXAM_SECONDS - session.secondsLeft) : Math.round((Date.now() - session.startedAt) / 1000);
    res.title = session.title;
    lastResult = res;
    recordMissed();
    recordHistory(res);
    lsDel(K_PROGRESS);
    renderResults(res);
    showScreen("resultScreen");
    $("navbar").hidden = true; $("timer").hidden = true; $("answeredStat").hidden = true;
  }

  function recordMissed() {
    var missed = lsGet(K_MISSED) || {};
    session.items.forEach(function (cell, i) {
      var right = cell.opts.findIndex(function (o) { return o.correct; });
      var id = cell.ref.id;
      if (session.answers[i] !== null && session.answers[i] !== right) {
        missed[id] = (missed[id] || 0) + 1;
      }
    });
    lsSet(K_MISSED, missed);
    refreshMissedUI();
  }
  function recordHistory(res) {
    var hist = lsGet(K_HISTORY) || [];
    hist.unshift({ title: res.title, total: res.total, correct: res.correct, incorrect: res.incorrect,
      unanswered: res.unanswered, overall: Math.round(res.overall * 10) / 10, passed: res.passed, when: Date.now() });
    if (hist.length > 50) hist = hist.slice(0, 50);
    lsSet(K_HISTORY, hist);
  }

  // ---------- Results rendering ----------
  function renderResults(res) {
    var target = getTarget();
    var v = $("verdict");
    v.className = "verdict " + (res.passed ? "pass" : "fail");
    v.textContent = res.passed ? ("At or above your " + target + "% practice target") : ("Below your " + target + "% practice target");

    var pct = Math.round(res.overall);
    $("scorePct").textContent = pct + "%";
    $("scoreFrac").textContent = res.correct + " / " + res.total;
    var circ = 2 * Math.PI * 68;
    var ring = $("ringFill");
    ring.style.transition = "none"; ring.setAttribute("stroke-dashoffset", circ);
    ring.style.stroke = res.passed ? "var(--good)" : "var(--warn)";
    // force reflow then animate
    void ring.getBoundingClientRect();
    requestAnimationFrame(function () { ring.style.transition = "stroke-dashoffset 1s ease"; ring.setAttribute("stroke-dashoffset", (circ * (1 - res.correct / res.total)).toFixed(1)); });

    $("stTotal").textContent = res.total;
    $("stCorrect").textContent = res.correct;
    $("stWrong").textContent = res.incorrect;
    $("stBlank").textContent = res.unanswered;
    $("stOverall").textContent = (Math.round(res.overall * 10) / 10) + "%";
    $("stCorrectPct").textContent = res.answered ? (Math.round(res.correctPct * 10) / 10) + "%" : "N/A";
    $("stWrongPct").textContent = res.answered ? (Math.round(res.incorrectPct * 10) / 10) + "%" : "N/A";
    $("stRatio").textContent = res.answered ? (res.ratioRaw + (res.ratioSimple !== res.ratioRaw ? "  (" + res.ratioSimple + ")" : "")) : "N/A (no questions answered)";
    $("stTime").textContent = fmtTime(res.timeUsed);

    $("resultMsg").textContent = res.passed
      ? ("Strong work — that's at or above your " + target + "% practice target. This is a personal study goal, not an official exam score. Do it once more and review any misses below.")
      : (res.unanswered > 0
        ? "Unanswered questions count against the overall score. Review the misses below (and any skipped items), then retake."
        : ("Not at your " + target + "% practice target yet — that's what practice is for. Review every miss below and focus on the lowest subject bars."));

    renderDomainTable();
    reviewFilter = "all"; setFilterChips(); renderReview();
  }

  function renderDomainTable() {
    var groups = {};
    session.items.forEach(function (cell, i) {
      var key = cell.ref.sub;
      if (!groups[key]) groups[key] = { c: 0, t: 0 };
      groups[key].t++;
      var right = cell.opts.findIndex(function (o) { return o.correct; });
      if (session.answers[i] === right) groups[key].c++;
    });
    var order = Object.keys(groups);
    var tbl = $("domainTable"); tbl.innerHTML = "";
    order.forEach(function (k) {
      var o = groups[k], p = Math.round(o.c / o.t * 100);
      var cls = p >= 80 ? "" : (p >= 60 ? "mid" : "low");
      var row = document.createElement("div"); row.className = "drow";
      row.innerHTML = '<div class="dn">' + esc(k) + '</div>' +
        '<div class="bar"><div class="bf ' + cls + '" style="width:' + p + '%"></div></div>' +
        '<div class="dscore mono">' + o.c + "/" + o.t + " &middot; " + p + '%</div>';
      tbl.appendChild(row);
    });
  }

  function renderReview() {
    var list = $("reviewList"); list.innerHTML = ""; var shown = 0;
    session.items.forEach(function (cell, i) {
      var item = cell.ref;
      var right = cell.opts.findIndex(function (o) { return o.correct; });
      var chosen = session.answers[i];
      var state = chosen === null ? "blank" : (chosen === right ? "correct" : "wrong");
      if (reviewFilter === "wrong" && state !== "wrong") return;
      if (reviewFilter === "blank" && state !== "blank") return;
      if (reviewFilter === "flagged" && !session.flags[i]) return;
      shown++;

      var badge = state === "correct" ? '<span class="badge c">Correct</span>'
        : state === "wrong" ? '<span class="badge w">Incorrect</span>'
          : '<span class="badge b">Unanswered</span>';
      var optsHTML = "";
      cell.opts.forEach(function (o, oi) {
        var cls = "revopt", tail = "";
        if (o.correct) { cls += " correct"; tail = '<span class="tail">Correct answer</span>'; }
        else if (chosen === oi) { cls += " chosen"; tail = '<span class="tail">Her answer</span>'; }
        optsHTML += '<div class="' + cls + '"><span class="rmk">' + LETTERS[oi] + '</span><span>' + esc(o.t) + '</span>' + tail + '</div>';
      });
      var flagTag = session.flags[i] ? ' <span class="badge" style="background:var(--accent-soft);color:var(--accent);border:1px solid var(--accent)">Flagged</span>' : "";
      var div = document.createElement("div");
      div.className = "revitem " + state;
      div.innerHTML =
        '<div class="rhead"><span class="rnum">Question ' + (i + 1) + '</span><span class="qsub">' + esc(item.sub) + '</span>' + badge + flagTag + '</div>' +
        '<div class="rq">' + esc(item.q) + '</div>' + optsHTML +
        '<div class="revexpl"><div class="lab">Explanation</div>' + esc(item.e) + '</div>' +
        '<div class="revmeta">Source: ' + esc(sourceLine(item)) + '</div>';
      list.appendChild(div);
    });
    if (!shown) list.innerHTML = '<div class="revitem" style="text-align:center;color:var(--muted);border-left-color:var(--line)">Nothing matches this filter.</div>';
  }
  function setFilterChips() { document.querySelectorAll("#reviewFilter .chip").forEach(function (c) { c.classList.toggle("on", c.dataset.f === reviewFilter); }); }

  // ---------- Export / print ----------
  function exportResults() {
    if (!lastResult) return;
    var r = lastResult, lines = [];
    lines.push("WASHINGTON CNA PRACTICE EXAM — RESULTS");
    lines.push("Test: " + r.title);
    lines.push("Date: " + new Date().toLocaleString());
    lines.push("");
    lines.push("Total questions : " + r.total);
    lines.push("Correct         : " + r.correct);
    lines.push("Incorrect       : " + r.incorrect);
    lines.push("Unanswered      : " + r.unanswered);
    lines.push("Overall score   : " + (Math.round(r.overall * 10) / 10) + "%");
    lines.push("Correct % (of answered)   : " + (r.answered ? (Math.round(r.correctPct * 10) / 10) + "%" : "N/A"));
    lines.push("Incorrect % (of answered) : " + (r.answered ? (Math.round(r.incorrectPct * 10) / 10) + "%" : "N/A"));
    lines.push("Ratio correct:incorrect   : " + (r.answered ? (r.ratioRaw + " (simplified " + r.ratioSimple + ")") : "N/A"));
    lines.push("Result          : " + (r.passed ? ("AT/ABOVE " + getTarget() + "% PRACTICE TARGET") : "NEEDS MORE STUDY") + "  (practice goal, not the official exam result)");
    lines.push("Time used       : " + fmtTime(r.timeUsed));
    lines.push("");
    lines.push("BY SUBJECT / SKILL:");
    var groups = {};
    session.items.forEach(function (cell, i) { var k = cell.ref.sub; if (!groups[k]) groups[k] = { c: 0, t: 0 }; groups[k].t++; var right = cell.opts.findIndex(function (o) { return o.correct; }); if (session.answers[i] === right) groups[k].c++; });
    Object.keys(groups).forEach(function (k) { var o = groups[k]; lines.push("  " + k + ": " + o.c + "/" + o.t + " (" + Math.round(o.c / o.t * 100) + "%)"); });
    var blob = new Blob([lines.join("\n")], { type: "text/plain" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "CNA_results_" + new Date().toISOString().slice(0, 10) + ".txt";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
    toast("Results downloaded");
  }

  // ============================================================
  //  HOME screen wiring
  // ============================================================
  function refreshMissedUI() {
    var missed = lsGet(K_MISSED) || {};
    var ids = Object.keys(missed);
    $("missedBadge").textContent = ids.length;
    $("retestMissedBtn").disabled = ids.length === 0;

    var box = $("missedSummary");
    if (!ids.length) { box.innerHTML = ""; return; }
    // most-missed first
    ids.sort(function (a, b) { return missed[b] - missed[a]; });
    var top = ids.slice(0, 8);
    var html = '<h3 style="font-size:1rem;margin:16px 0 8px;color:var(--brand)">Most-missed questions</h3>';
    top.forEach(function (id) {
      var item = DATA.find(function (x) { return x.id === id; });
      if (!item) return;
      html += '<div class="missrow"><span class="mcount">&times;' + missed[id] + '</span><span>' + esc(item.q) + ' <span class="muted small">(' + esc(item.sub) + ')</span></span></div>';
    });
    box.innerHTML = html;
  }

  function refreshHistoryUI() {
    var hist = lsGet(K_HISTORY) || [];
    var list = $("historyList");
    $("historyEmpty").hidden = hist.length > 0;
    list.innerHTML = "";
    hist.slice(0, 10).forEach(function (h) {
      var row = document.createElement("div"); row.className = "histrow";
      var d = new Date(h.when);
      row.innerHTML = '<div><div class="ht">' + esc(h.title) + '</div><div class="hd">' + d.toLocaleDateString() + " " + d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " &bull; " + h.correct + "/" + h.total + '</div></div>' +
        '<div class="hd">' + h.incorrect + " wrong &bull; " + h.unanswered + ' skipped</div>' +
        '<div class="hs ' + (h.passed ? "pass" : "fail") + '">' + h.overall + '%</div>';
      list.appendChild(row);
    });
  }

  function buildSubjectDropdown() {
    var sel = $("subjectSelect");
    sel.innerHTML = "";
    var groups = subjectsList();
    // group into two optgroups
    var og1 = document.createElement("optgroup"); og1.label = "Chemistry - topics";
    var og2 = document.createElement("optgroup"); og2.label = "Biology - topics";
    groups.forEach(function (g) {
      var count = DATA.filter(function (x) { return x.bank === g.bank && x.sub === g.sub; }).length;
      var o = document.createElement("option");
      o.value = g.bank + "|" + g.sub;
      o.textContent = g.sub + " (" + count + ")";
      (g.bank === "CHEM" ? og1 : og2).appendChild(o);
    });
    sel.appendChild(og1); sel.appendChild(og2);
  }

  function checkResume() {
    var p = lsGet(K_PROGRESS);
    if (p && p.items && p.items.length) {
      var answered = p.answers.filter(function (a) { return a !== null; }).length;
      $("resumeText").innerHTML = "<b>Unfinished test:</b> " + esc(p.title) + " &mdash; " + answered + "/" + p.items.length + " answered" + (p.timed ? ", " + fmtTime(p.secondsLeft) + " left" : "") + ".";
      $("resumeBanner").hidden = false;
    } else { $("resumeBanner").hidden = true; }
  }

  // ---------- Progress persistence ----------
  function saveProgress() {
    if (!session) return;
    lsSet(K_PROGRESS, {
      title: session.title, cur: session.cur, timed: session.timed, secondsLeft: session.secondsLeft,
      startedAt: session.startedAt, mode: mode,
      answers: session.answers, flags: session.flags,
      items: session.items.map(function (cell) {
        return { id: cell.ref.id, opts: cell.opts.map(function (o) { return { t: o.t, c: o.correct }; }) };
      })
    });
  }
  function restoreProgress(p) {
    mode = p.mode || "practice"; setModeUI();
    session = {
      title: p.title, cur: p.cur || 0, timed: !!p.timed, secondsLeft: p.secondsLeft || 0,
      startedAt: p.startedAt || Date.now(), answers: p.answers, flags: p.flags,
      items: p.items.map(function (s) {
        var ref = DATA.find(function (x) { return x.id === s.id; }) || { id: s.id, q: "(missing)", sub: "", e: "", bank: "CHEM", pg: 0, type: "mc", o: [] };
        return { ref: ref, opts: s.opts.map(function (o) { return { t: o.t, correct: o.c }; }) };
      })
    };
    enterQuiz();
  }

  // ---------- Screen switching ----------
  function showScreen(id) {
    ["homeScreen", "quizScreen", "resultScreen", "studyScreen"].forEach(function (s) { var el = $(s); if (el) el.classList.toggle("active", s === id); });
    window.scrollTo(0, 0);
    if (id === "homeScreen") { refreshHistoryUI(); refreshMissedUI(); checkResume(); renderBrowse(); }
  }

  // ---------- Guided navigation: Subject -> Mode -> Chapter -> Topic ----------
  function card(name, desc, fn, extra) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "testcard" + (extra ? (" " + extra) : "");
    b.innerHTML = '<span class="tname"></span><span class="tdesc"></span>';
    b.querySelector(".tname").textContent = name;
    b.querySelector(".tdesc").textContent = desc;
    b.addEventListener("click", fn);
    return b;
  }
  function modeToggleEl() {
    var box = document.createElement("div"); box.className = "browse-modewrap";
    var wrap = document.createElement("div"); wrap.className = "modeswitch"; wrap.setAttribute("role", "tablist"); wrap.setAttribute("aria-label", "Quiz mode");
    var p = document.createElement("button"); p.type = "button"; p.className = (mode === "practice" ? "on" : ""); p.textContent = "Practice mode";
    var e = document.createElement("button"); e.type = "button"; e.className = (mode === "exam" ? "on" : ""); e.textContent = "Exam mode";
    p.addEventListener("click", function () { mode = "practice"; renderBrowse(); });
    e.addEventListener("click", function () { mode = "exam"; renderBrowse(); });
    wrap.appendChild(p); wrap.appendChild(e);
    var hint = document.createElement("p"); hint.className = "small muted browse-modehint";
    hint.textContent = mode === "practice"
      ? "Practice: each answer is checked right away with an explanation."
      : "Exam: answers stay hidden until you submit.";
    box.appendChild(wrap); box.appendChild(hint);
    return box;
  }
  function renderBreadcrumb() {
    var bc = $("breadcrumb"); if (!bc) return; bc.innerHTML = "";
    function add(label, fn) {
      var b = document.createElement("button"); b.type = "button"; b.className = "crumb"; b.textContent = label;
      if (fn) b.addEventListener("click", fn); else b.classList.add("current");
      bc.appendChild(b);
    }
    add("Home", nav.subjectId ? function () { nav.subjectId = null; nav.modeSel = null; nav.chapterId = null; renderBrowse(); } : null);
    if (nav.subjectId) add(TAXONOMY[nav.subjectId].label, nav.modeSel ? function () { nav.modeSel = null; nav.chapterId = null; renderBrowse(); } : null);
    if (nav.modeSel) add(nav.modeSel === "study" ? "Study Material" : "Quiz", nav.chapterId ? function () { nav.chapterId = null; renderBrowse(); } : null);
    if (nav.chapterId) add(getChapter(nav.subjectId, nav.chapterId).label.split(" - ")[0], null);
  }
  function renderBrowse() {
    renderBreadcrumb();
    var box = $("browseList"); if (!box) return; box.innerHTML = "";
    var hint = $("browseHint");

    if (!nav.subjectId) {
      if (hint) hint.textContent = "Step 1 of 4 — choose a subject.";
      SUBJECT_ORDER.forEach(function (sid) {
        var s = TAXONOMY[sid];
        var qn = DATA.filter(function (x) { return x.subjectId === sid; }).length;
        box.appendChild(card(s.label, s.chapters.length + " chapters · " + qn + " questions", function () { nav.subjectId = sid; renderBrowse(); }, "big"));
      });
      return;
    }
    if (!nav.modeSel) {
      if (hint) hint.textContent = "Step 2 of 4 — " + TAXONOMY[nav.subjectId].label + ": study or quiz?";
      box.appendChild(card("Study Material", "Read the notes, diagrams and takeaways.", function () { nav.modeSel = "study"; renderBrowse(); }, "big"));
      box.appendChild(card("Quiz", "Practice with feedback, or exam-style.", function () { nav.modeSel = "quiz"; renderBrowse(); }, "big"));
      return;
    }
    if (!nav.chapterId) {
      if (hint) hint.textContent = "Step 3 of 4 — choose a chapter or unit.";
      if (nav.modeSel === "quiz") {
        box.appendChild(modeToggleEl());
        var allN = DATA.filter(function (x) { return x.subjectId === nav.subjectId; }).length;
        box.appendChild(card("Whole subject", "All " + TAXONOMY[nav.subjectId].label + " questions (" + allN + ")", function () { startSubjectQuiz(nav.subjectId); }, "wide"));
      }
      TAXONOMY[nav.subjectId].chapters.forEach(function (ch) {
        var tn = ch.topics.length;
        var desc = nav.modeSel === "quiz"
          ? (qForChapter(nav.subjectId, ch.id).length + " questions · " + tn + " topic" + (tn > 1 ? "s" : ""))
          : (tn + " topic" + (tn > 1 ? "s" : ""));
        box.appendChild(card(ch.label, desc, function () { nav.chapterId = ch.id; renderBrowse(); }));
      });
      return;
    }
    // topic step
    var ch = getChapter(nav.subjectId, nav.chapterId);
    if (hint) hint.textContent = "Step 4 of 4 — choose a topic" + (nav.modeSel === "quiz" ? ", or quiz the whole chapter." : ".");
    if (nav.modeSel === "quiz") {
      box.appendChild(modeToggleEl());
      var chN = qForChapter(nav.subjectId, nav.chapterId).length;
      box.appendChild(card("Whole chapter", "All " + ch.label.split(" - ")[0] + " questions (" + chN + ")", function () { startChapterQuiz(nav.subjectId, nav.chapterId); }, "wide"));
      ch.topics.forEach(function (t) {
        var n = qForTopic(nav.subjectId, nav.chapterId, t.id).length;
        if (!n) return;
        box.appendChild(card(t.label, n + " question" + (n > 1 ? "s" : ""), function () { startTopicQuiz(nav.subjectId, nav.chapterId, t.id); }));
      });
    } else {
      ch.topics.forEach(function (t) {
        var doc = studyFor(nav.subjectId, nav.chapterId, t.id);
        var desc = doc ? ((doc.sections || []).length + " section" + ((doc.sections || []).length > 1 ? "s" : "")) : "No notes yet · quiz only";
        box.appendChild(card(t.label, desc, function () { openStudyTopic(nav.subjectId, nav.chapterId, t.id); }, doc ? "" : "muted"));
      });
    }
  }

  // ---------- Quiz starters ----------
  function startTopicQuiz(subjectId, chapterId, topicId) {
    var items = qForTopic(subjectId, chapterId, topicId);
    var t = getTopic(subjectId, chapterId, topicId);
    startTest(items, (t ? t.label : topicId), { timed: false });
  }
  function startChapterQuiz(subjectId, chapterId) {
    var ch = getChapter(subjectId, chapterId);
    startTest(qForChapter(subjectId, chapterId), (ch ? ch.label : chapterId), { timed: false, shuffle: true });
  }
  function startSubjectQuiz(subjectId) {
    startTest(DATA.filter(function (x) { return x.subjectId === subjectId; }), TAXONOMY[subjectId].label + " — all questions", { timed: false, shuffle: true });
  }

  // ---------- Study topic reading ----------
  var currentStudy = null;
  function openStudyTopic(subjectId, chapterId, topicId) {
    currentStudy = { subjectId: subjectId, chapterId: chapterId, topicId: topicId };
    var t = getTopic(subjectId, chapterId, topicId);
    var doc = studyFor(subjectId, chapterId, topicId);
    var ch = getChapter(subjectId, chapterId);
    $("studyTitle").textContent = (t ? t.label : (doc ? doc.title : topicId));
    var body = $("studyBody"); body.innerHTML = "";

    var crumbEl = document.createElement("p"); crumbEl.className = "studycrumb";
    crumbEl.textContent = TAXONOMY[subjectId].label + "  ›  " + ch.label.split(" - ")[0];
    body.appendChild(crumbEl);

    if (doc) {
      if (doc.overview) { var ov = document.createElement("p"); ov.className = "studyoverview"; ov.textContent = doc.overview; body.appendChild(ov); }
      var secs = doc.sections || [];
      if (secs.length) {
        var tools = document.createElement("div"); tools.className = "studytools";
        var expand = document.createElement("button"); expand.type = "button"; expand.className = "btn btn-ghost btn-sm"; expand.textContent = "Expand all sections";
        tools.appendChild(expand); body.appendChild(tools);
        var detailsEls = [];
        secs.forEach(function (sec) {
          var d = document.createElement("details"); d.className = "studysec";
          var sm = document.createElement("summary"); sm.textContent = sec.h; d.appendChild(sm);
          var inner = document.createElement("div"); inner.className = "studysec-body";
          if (sec.fig) {
            var fig = document.createElement("figure"); fig.className = "studyfig";
            var im = document.createElement("div"); im.className = "studyfig-img"; im.innerHTML = sec.fig; fig.appendChild(im);
            if (sec.figcap) { var fc = document.createElement("figcaption"); fc.textContent = sec.figcap; fig.appendChild(fc); }
            inner.appendChild(fig);
          }
          var ul = document.createElement("ul");
          (sec.items || []).forEach(function (it) { var li = document.createElement("li"); li.textContent = it; ul.appendChild(li); });
          if (ul.children.length) inner.appendChild(ul);
          d.appendChild(inner); body.appendChild(d); detailsEls.push(d);
        });
        expand.addEventListener("click", function () {
          var anyClosed = detailsEls.some(function (d) { return !d.open; });
          detailsEls.forEach(function (d) { d.open = anyClosed; });
          expand.textContent = anyClosed ? "Collapse all sections" : "Expand all sections";
        });
      }
    } else {
      var none = document.createElement("p"); none.className = "studyoverview";
      none.textContent = "Reading notes for this topic haven't been added yet — you can still practice its questions below.";
      body.appendChild(none);
    }

    var pb = $("studyPracticeBtn");
    var qn = qForTopic(subjectId, chapterId, topicId).length;
    if (qn) { pb.hidden = false; pb.textContent = "Quiz this topic (" + qn + ")"; } else { pb.hidden = true; }
    $("navbar").hidden = true; $("timer").hidden = true; $("answeredStat").hidden = true;
    showScreen("studyScreen");
  }
  function quizThisTopic() {
    if (!currentStudy) return;
    startTopicQuiz(currentStudy.subjectId, currentStudy.chapterId, currentStudy.topicId);
  }
  function goHome() {
    stopTimer(); session = null;
    $("navbar").hidden = true; $("timer").hidden = true; $("answeredStat").hidden = true;
    $("progressFill").style.width = "0";
    showScreen("homeScreen");
  }

  // ---------- Mode ----------
  function setMode(m) { mode = m; setModeUI(); }
  function setModeUI() {
    // The practice/exam toggle is rendered dynamically inside the Quiz browse step;
    // if it's on screen, re-render so it reflects the current mode.
    if ($("browseList") && nav.modeSel === "quiz") renderBrowse();
  }

  // ---------- Toast ----------
  var toastTimer = null;
  function toast(msg) { var t = $("toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2000); }

  // ============================================================
  //  WIRE UP
  // ============================================================
  function init() {
    runDataAudit();
    runSelfTests();
    renderBrowse();
    showScreen("homeScreen");

    if ($("studyPracticeBtn")) $("studyPracticeBtn").addEventListener("click", quizThisTopic);
    if ($("studyBackBtn")) $("studyBackBtn").addEventListener("click", goHome);
    if ($("studyBackBtn2")) $("studyBackBtn2").addEventListener("click", goHome);

    var rb = $("randStartBtn");
    if (rb) rb.addEventListener("click", function () {
      var n = Math.min(Math.max(parseInt($("randSize").value, 10) || 25, 5), DATA.length);
      startTest(shuffle(DATA.slice()).slice(0, n), "Randomized practice (" + n + ")", { timed: false, shuffle: true });
    });

    $("retestMissedBtn").addEventListener("click", function () {
      var missed = lsGet(K_MISSED) || {}; var ids = Object.keys(missed);
      var items = DATA.filter(function (x) { return ids.indexOf(x.id) !== -1; });
      if (!items.length) { toast("No missed questions saved yet."); return; }
      startTest(items, "Retest: previously missed (" + items.length + ")", { timed: false, shuffle: true });
    });

    $("clearHistoryBtn").addEventListener("click", function () {
      if (confirm("Clear all saved scores and the missed-question list? This cannot be undone.")) {
        lsDel(K_HISTORY); lsDel(K_MISSED); refreshHistoryUI(); refreshMissedUI(); toast("History cleared");
      }
    });

    $("resumeBtn").addEventListener("click", function () { var p = lsGet(K_PROGRESS); if (p) restoreProgress(p); });
    $("discardBtn").addEventListener("click", function () { lsDel(K_PROGRESS); checkResume(); toast("Saved test discarded"); });

    // quiz nav
    $("prevBtn").addEventListener("click", function () { go(-1); });
    $("nextBtn").addEventListener("click", function () { go(1); });
    $("flagBtn").addEventListener("click", toggleFlag);
    $("paletteBtn").addEventListener("click", openDrawer);
    $("quitBtn").addEventListener("click", function () { if (confirm("Quit this test? Your progress is saved and you can resume from the home screen.")) { saveProgress(); goHome(); } });
    $("submitBtn").addEventListener("click", function () { finish(false); });
    $("drawerClose").addEventListener("click", closeDrawer);
    $("overlay").addEventListener("click", closeDrawer);
    $("drawerSubmit").addEventListener("click", function () { closeDrawer(); finish(false); });

    // results
    $("retakeBtn").addEventListener("click", function () {
      var srcItems = session.items.map(function (c) { return c.ref; });
      var timed = session.timed, title = session.title;
      startTest(srcItems, title, { timed: timed, shuffle: true });
    });
    $("reviewMissedResBtn").addEventListener("click", function () {
      var missItems = session.items.filter(function (cell, i) { var right = cell.opts.findIndex(function (o) { return o.correct; }); return session.answers[i] !== right; }).map(function (c) { return c.ref; });
      if (!missItems.length) { toast("No missed questions — perfect run!"); return; }
      startTest(missItems, "Retest missed (" + missItems.length + ")", { timed: false, shuffle: true });
    });
    $("printBtn").addEventListener("click", function () { window.print(); });
    $("exportBtn").addEventListener("click", exportResults);
    $("homeFromResultBtn").addEventListener("click", goHome);

    document.querySelectorAll("#reviewFilter .chip").forEach(function (c) {
      c.addEventListener("click", function () { reviewFilter = c.dataset.f; setFilterChips(); renderReview(); });
    });

    // keyboard
    document.addEventListener("keydown", function (e) {
      if (!$("quizScreen").classList.contains("active")) return;
      if ($("drawer").classList.contains("show")) { if (e.key === "Escape") closeDrawer(); return; }
      var cell = session.items[session.cur];
      var k = e.key.toLowerCase();
      if (e.key === "ArrowRight") { go(1); }
      else if (e.key === "ArrowLeft") { go(-1); }
      else if (k === "m") { toggleFlag(); }                 // M = mark for review
      else if (/^[1-4]$/.test(e.key)) { var idx = +e.key - 1; if (cell.opts[idx]) choose(idx); }
      else if (k === "t") { var ti = cell.opts.findIndex(function (o) { return o.t === "True"; }); if (ti > -1) choose(ti); }
      else if (k === "f") { var fi = cell.opts.findIndex(function (o) { return o.t === "False"; }); if (fi > -1) choose(fi); }
    });

    window.addEventListener("beforeunload", saveProgress);

    // practice target
    $("targetInput").value = getTarget();
    $("targetInput").addEventListener("change", function () { this.value = setTarget(this.value); toast("Practice target set to " + this.value + "%"); });

    checkResume();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
