/* ===================== TOEFL Practice Web - Logika Aplikasi ===================== */

/* ---------- State ---------- */
const state = {
  user: null,            // email gmail user yang sedang login
  name: "",
  sectionIds: [],        // bagian yang dikerjakan (urut)
  sectionIdx: 0,         // indeks bagian aktif
  qIdx: 0,               // indeks soal aktif dalam bagian
  sections: {},          // { sectionId: [soal sudah diacak untuk sesi ini] }
  answers: {},           // { sectionId: [choiceIdx|null, ...] }
  flags: {},             // { sectionId: { qIdx: true } }
  timeLeft: 0,
  timerId: null,
  playCounts: {},        // { sectionId: { qIdx: count } }
  finished: false,
};

const $ = (sel) => document.querySelector(sel);
const screens = {
  auth: $("#screen-auth"),
  home: $("#screen-home"),
  exam: $("#screen-exam"),
  result: $("#screen-result"),
  dashboard: $("#screen-dashboard"),
};

/* ===================== Akun & Sesi (Gmail, tersimpan lokal) =====================
   Catatan: aplikasi ini tanpa backend — akun & riwayat disimpan di localStorage
   browser. Hash kata sandi bukan kriptografis kuat; cukup untuk data lokal. */
const USERS_KEY = "toefl-users";
const SESSION_KEY = "toefl-session";
const HISTORY_KEY = "toefl-history";

function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || "{}"); } catch { return {}; }
}
function saveUsers(u) { localStorage.setItem(USERS_KEY, JSON.stringify(u)); }

function hashPassword(pw) {
  const s = "toefl::" + pw + "::salt";
  let h1 = 0x811c9dc5 >>> 0, h2 = 0x01000193 >>> 0;
  for (let round = 0; round < 4; round++) {
    for (let i = 0; i < s.length; i++) {
      h1 = Math.imul(h1 ^ (s.charCodeAt(i) + round * 7), 0x01000193) >>> 0;
      h2 = (Math.imul(h2 ^ s.charCodeAt(s.length - 1 - i), 0x85ebca6b) + round) >>> 0;
    }
  }
  return h1.toString(16).padStart(8, "0") + h2.toString(16).padStart(8, "0");
}

function isGmail(email) {
  return /^[a-z0-9._%+-]+@gmail\.com$/.test(String(email).trim().toLowerCase());
}

function registerUser(name, email, pass) {
  email = String(email).trim().toLowerCase();
  if (!String(name).trim()) return { ok: false, error: "Nama wajib diisi." };
  if (!isGmail(email)) return { ok: false, error: "Harus menggunakan email Gmail (berakhiran @gmail.com)." };
  if (String(pass).length < 6) return { ok: false, error: "Kata sandi minimal 6 karakter." };
  const users = getUsers();
  if (users[email]) return { ok: false, error: "Email sudah terdaftar. Silakan masuk." };
  users[email] = { name: String(name).trim(), hash: hashPassword(pass), createdAt: Date.now() };
  saveUsers(users);
  return { ok: true, email };
}

function loginUser(email, pass) {
  email = String(email).trim().toLowerCase();
  const users = getUsers();
  if (!users[email]) return { ok: false, error: "Email belum terdaftar. Silakan daftar dulu." };
  if (users[email].hash !== hashPassword(pass)) return { ok: false, error: "Kata sandi salah." };
  return { ok: true, email };
}

function getSession() { return localStorage.getItem(SESSION_KEY) || null; }
function setSession(email) { localStorage.setItem(SESSION_KEY, email); }
function clearSession() { localStorage.removeItem(SESSION_KEY); }

/* ===================== Riwayat Skor (per user) ===================== */
function getHistory(email) {
  try {
    const all = JSON.parse(localStorage.getItem(HISTORY_KEY) || "{}");
    return (all[email] || []).slice().sort((a, b) => a.date - b.date);
  } catch { return []; }
}
function addHistory(email, entry) {
  try {
    const all = JSON.parse(localStorage.getItem(HISTORY_KEY) || "{}");
    (all[email] = all[email] || []).push(entry);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(all));
  } catch { /* abaikan */ }
}

/* ===================== Login dengan Google (Google Identity Services) =====================
   Klik tombol resmi Google → callback menerima ID token (JWT) → profil
   (nama, email, foto) dibaca dari payload token. Verifikasi sisi klien:
   issuer, audience (client id), masa berlaku, email terverifikasi, dan
   khusus @gmail.com. (Verifikasi tanda tangan penuh membutuhkan server.) */
let googleSigninReady = false;

function decodeJwtPayload(token) {
  const part = String(token).split(".")[1] || "";
  const b64 = part.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (part.length % 4)) % 4);
  const bin = atob(b64);
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return JSON.parse(new TextDecoder("utf-8").decode(bytes));
}

function handleGoogleCredential(response) {
  const status = $("#google-status");
  const fail = (msg) => {
    status.textContent = "⚠️ " + msg;
    status.classList.remove("hidden");
    showScreen("auth");
  };
  let payload;
  try {
    payload = decodeJwtPayload(response.credential);
  } catch (err) {
    return fail("Gagal membaca token Google: " + err.message);
  }
  const nowSec = Math.floor(Date.now() / 1000);
  const email = String(payload.email || "").trim().toLowerCase();
  if (APP_CONFIG.googleClientId && payload.aud !== APP_CONFIG.googleClientId)
    return fail("Token bukan ditujukan untuk aplikasi ini (audience tidak cocok).");
  if (payload.iss !== "accounts.google.com" && payload.iss !== "https://accounts.google.com")
    return fail("Token tidak berasal dari Google (issuer tidak dikenal).");
  if (!payload.exp || payload.exp < nowSec)
    return fail("Token Google sudah kedaluwarsa. Silakan coba lagi.");
  if (payload.email_verified !== true && String(payload.email_verified) !== "true")
    return fail("Email akun Google belum terverifikasi.");
  if (!isGmail(email))
    return fail("Hanya akun Gmail (@gmail.com) yang dapat dipakai untuk aplikasi ini.");

  // Simpan/tautkan profil Google ke akun lokal, lalu masuk
  const users = getUsers();
  const existing = users[email];
  users[email] = {
    name: payload.name || email,
    picture: payload.picture || null,
    provider: "google",
    hash: existing && existing.provider === "local" ? existing.hash : null,
    createdAt: existing ? existing.createdAt : Date.now(),
    linkedAt: Date.now(),
  };
  saveUsers(users);
  setSession(email);
  status.textContent = "";
  status.classList.add("hidden");
  enterApp(email);
}

function showGoogleStatus(kind) {
  const el = $("#google-status");
  if (kind === "ready") { el.textContent = ""; el.classList.add("hidden"); return; }
  el.classList.remove("hidden");
  el.textContent = kind === "not-configured"
    ? "⚠️ Google Sign-In belum dikonfigurasi — isi googleClientId di js/config.js (petunjuk lengkap di README). Sementara gunakan form email di bawah."
    : "⚠️ Google Sign-In tidak dapat dimuat (periksa koneksi internet). Sementara gunakan form email di bawah.";
}

/* Dipanggil dari onload script GIS di index.html (juga dicoba saat init). */
function initGoogleSignin() {
  if (googleSigninReady) return;
  if (typeof google === "undefined" || !google.accounts || !google.accounts.id) return; // belum terisi
  if (!APP_CONFIG.googleClientId) { showGoogleStatus("not-configured"); return; }
  try {
    google.accounts.id.initialize({
      client_id: APP_CONFIG.googleClientId,
      callback: handleGoogleCredential,
      auto_select: false,
    });
    google.accounts.id.renderButton($("#google-btn-container"), {
      type: "standard", theme: "outline", size: "large",
      text: "signin_with", logo_alignment: "left", width: 320,
    });
    googleSigninReady = true;
    showGoogleStatus("ready");
  } catch (err) {
    showGoogleStatus("unavailable");
  }
}
window.initGoogleSignin = initGoogleSignin;

/* Dipanggil dari onerror script GIS di index.html (jaringan/file:// gagal). */
window.onGoogleScriptError = function () {
  if (!googleSigninReady) showGoogleStatus(APP_CONFIG.googleClientId ? "unavailable" : "not-configured");
};

/* ---------- Gabungan bank soal (dasar + bank tambahan) ----------
   File data-listening-extra.js / data-structure-extra.js / data-reading-extra.js
   dimuat sebelum app.js; di sini digabung ke SECTIONS. */
(function mergeExtraBanks() {
  const byId = {};
  SECTIONS.forEach((s) => (byId[s.id] = s));
  if (typeof EXTRA_LISTENING !== "undefined")
    byId.listening.questions = byId.listening.questions.concat(EXTRA_LISTENING);
  if (typeof EXTRA_STRUCTURE !== "undefined")
    byId.structure.questions = byId.structure.questions.concat(EXTRA_STRUCTURE);
  if (typeof EXTRA_READING !== "undefined") {
    byId.reading.passages = Object.assign({}, EXTRA_READING.passages, byId.reading.passages);
    byId.reading.questions = byId.reading.questions.concat(EXTRA_READING.questions);
  }
})();

/* ---------- Randomisasi per sesi ----------
   Setiap user yang memulai ujian mendapat:
   1) sampel soal acak dari bank (ukuran = section.sampleSize), dan
   2) urutan opsi jawaban diacak (kecuali soal A/B/C/D yang fixedOptions). */
function shuffleArr(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function withShuffledOptions(q) {
  if (q.fixedOptions || q.options.length < 2) return Object.assign({}, q);
  const order = shuffleArr(q.options.map((_, i) => i));
  return Object.assign({}, q, {
    options: order.map((i) => q.options[i]),
    answer: order.indexOf(q.answer),
  });
}

function buildExamQuestions(sec) {
  const target = sec.sampleSize || sec.questions.length;
  let picked;
  if (sec.id === "reading") {
    // Kelompokkan soal per passage supaya satu passage tidak terpecah di tengah
    picked = [];
    for (const key of shuffleArr(Object.keys(sec.passages))) {
      if (picked.length >= target) break;
      const qs = shuffleArr(sec.questions.filter((q) => q.passage === key));
      if (picked.length === 0 || picked.length + qs.length <= target + 4) {
        picked = picked.concat(qs);
      } else break;
    }
    if (!picked.length) picked = sec.questions.slice(0, target);
  } else {
    picked = shuffleArr(sec.questions).slice(0, target);
  }
  return picked.map(withShuffledOptions);
}

/* Soal bagian aktif sesuai urutan sesi (sudah diacak) */
const getQs = (sec) => state.sections[sec.id] || sec.questions;

function showScreen(key) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[key].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function currentSection() {
  return SECTIONS.find((s) => s.id === state.sectionIds[state.sectionIdx]);
}

/* ---------- Beranda ---------- */
function loadBestScores() {
  const el = $("#home-best");
  if (!state.user) { el.classList.add("hidden"); return; }
  const hist = getHistory(state.user);
  const best = hist.slice().sort((a, b) => b.total - a.total).slice(0, 3);
  if (!best.length) { el.classList.add("hidden"); return; }
  el.classList.remove("hidden");
  el.style.background = "linear-gradient(135deg,#1d4ed8,#7c3aed)";
  el.innerHTML =
    `<div class="best-title">🏆 Rekor Tertinggi — ${escapeHtml(state.user)}</div>` +
    best.map((b) =>
      `<div class="best-row"><span>${escapeHtml(b.pkgLabel || "Ujian")} — ${new Date(b.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</span><span><strong>${b.total}</strong> / 677</span></div>`
    ).join("");
}

/* ---------- Login / Daftar ---------- */
function showAuthTab(which) {
  const login = which === "login";
  $("#form-login").classList.toggle("hidden", !login);
  $("#form-register").classList.toggle("hidden", login);
  $("#tab-login").classList.toggle("active", login);
  $("#tab-register").classList.toggle("active", !login);
  $("#auth-title").textContent = login ? "Masuk" : "Daftar Akun";
  $("#auth-sub").textContent = login
    ? "Gunakan akun Gmail yang sudah terdaftar"
    : "Daftar dengan akun Gmail untuk mulai latihan";
}

function showAuthError(which, msg) {
  const el = which === "login" ? $("#auth-error-login") : $("#auth-error-register");
  if (msg) { el.textContent = "⚠️ " + msg; el.classList.remove("hidden"); }
  else { el.textContent = ""; el.classList.add("hidden"); }
}

/* ---------- Avatar: foto Google, fallback inisial nama ----------
   URL foto di token Google bersifat sementara dan bisa kedaluwarsa; jika
   gambar gagal dimuat, tampilkan lingkaran inisial (warna turunan email). */
const AVATAR_COLORS = ["#1d4ed8", "#7c3aed", "#db2777", "#ea580c", "#059669", "#0891b2", "#4f46e5", "#b91c1c"];
function avatarColor(email) {
  const s = String(email || "");
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(h, 31) + s.charCodeAt(i)) >>> 0;
  return AVATAR_COLORS[h % AVATAR_COLORS.length];
}
function setAvatar(imgSel, initialsSel, u) {
  const img = $(imgSel), ini = $(initialsSel);
  const showInitials = () => {
    img.hidden = true;
    const label = (u && (u.name || u.email)) || "?";
    ini.textContent = String(label).trim().charAt(0).toUpperCase();
    ini.style.background = avatarColor((u && u.email) || label);
    ini.classList.remove("hidden");
  };
  if (u && u.picture) {
    ini.textContent = "";
    ini.classList.add("hidden");
    img.onerror = showInitials;
    img.src = u.picture;
    img.hidden = false;
  } else {
    img.hidden = true;
    showInitials();
  }
}

function enterApp(email) {
  state.user = email;
  const u = getUsers()[email] || {};
  $("#userbar-name").textContent = u.name ? u.name : "👤";
  $("#userbar-email").textContent = (u.provider === "google" ? "🔵 via Google · " : "") + email;
  setAvatar("#userbar-avatar", "#userbar-initials", u);
  const nameInp = $("#inp-name");
  nameInp.value = u.name || ""; // prefill/segarkan nama penguji sesuai akun yang login
  loadBestScores();
  showScreen("home");
}

function logoutUser() {
  clearInterval(state.timerId);
  stopSpeaking();
  state.user = null;
  state.finished = false;
  clearSession();
  $("#form-login").reset();
  $("#form-register").reset();
  showAuthError("login", null);
  showAuthError("register", null);
  showAuthTab("login");
  showScreen("auth");
}

$("#tab-login").addEventListener("click", () => showAuthTab("login"));
$("#tab-register").addEventListener("click", () => showAuthTab("register"));

$("#form-login").addEventListener("submit", (e) => {
  e.preventDefault();
  const r = loginUser($("#login-email").value, $("#login-pass").value);
  if (!r.ok) { showAuthError("login", r.error); return; }
  showAuthError("login", null);
  setSession(r.email);
  enterApp(r.email);
});

$("#form-register").addEventListener("submit", (e) => {
  e.preventDefault();
  if ($("#reg-pass").value !== $("#reg-pass2").value) {
    showAuthError("register", "Kata sandi dan ulangan tidak sama.");
    return;
  }
  const r = registerUser($("#reg-name").value, $("#reg-email").value, $("#reg-pass").value);
  if (!r.ok) { showAuthError("register", r.error); return; }
  showAuthError("register", null);
  setSession(r.email);
  enterApp(r.email);
});

$("#btn-logout").addEventListener("click", () => {
  if (confirm("Yakin ingin keluar dari akun ini?")) logoutUser();
});

$("#form-start").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!state.user) { showScreen("auth"); return; } // gerbang: harus login dulu
  const name = $("#inp-name").value.trim();
  if (!name) return;
  const pkg = document.querySelector('input[name="pkg"]:checked').value;
  const ids = pkg === "full" ? SECTIONS.map((s) => s.id) : [pkg];
  state.pkgLabel = pkg === "full" ? "Ujian Lengkap" : pkg;
  startExam(name, ids);
});

/* ---------- Mulai Ujian ---------- */
function startExam(name, sectionIds) {
  state.name = name;
  state.sectionIds = sectionIds;
  state.sectionIdx = 0;
  state.finished = false;
  state.sections = {};
  SECTIONS.forEach((s) => {
    if (sectionIds.includes(s.id)) {
      state.sections[s.id] = buildExamQuestions(s); // sampel + acak per sesi
      state.answers[s.id] = new Array(state.sections[s.id].length).fill(null);
      state.flags[s.id] = {};
      state.playCounts[s.id] = {};
    }
  });
  $("#exam-name").textContent = name;
  startSection();
  showScreen("exam");
}

function startSection() {
  const sec = currentSection();
  state.qIdx = 0;
  stopSpeaking();
  $("#section-banner").innerHTML =
    `${sec.icon} <strong>${sec.name}</strong><small>${sec.desc}</small>`;
  state.timeLeft = sec.time;
  startTimer();
  renderQuestion();
}

function nextSection() {
  if (state.sectionIdx < state.sectionIds.length - 1) {
    state.sectionIdx++;
    startSection();
  } else {
    finishExam();
  }
}

/* ---------- Timer ---------- */
function startTimer() {
  clearInterval(state.timerId);
  updateTimerDisplay();
  state.timerId = setInterval(() => {
    state.timeLeft--;
    if (state.timeLeft <= 0) {
      state.timeLeft = 0;
      updateTimerDisplay();
      stopSpeaking();
      toast("⏰ Waktu bagian ini habis! Melanjutkan ke bagian berikutnya...");
      nextSection();
      return;
    }
    if (state.timeLeft <= 60) {
      const t = $("#exam-timer");
      t.classList.add("warn");
      t.textContent = "⏱ 00:" + String(state.timeLeft).padStart(2, "0");
    }
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const t = $("#exam-timer");
  const m = Math.floor(state.timeLeft / 60);
  const s = state.timeLeft % 60;
  if (state.timeLeft > 60) t.classList.remove("warn");
  t.textContent = `⏱ ${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/* ---------- Render Soal ---------- */
const LETTERS = ["A", "B", "C", "D"];

function renderQuestion() {
  const sec = currentSection();
  const qs = getQs(sec);
  const q = qs[state.qIdx];
  const answers = state.answers[sec.id];
  const area = $("#question-area");
  let html = "";

  // Progress
  const total = state.sectionIds.length;
  const doneBefore = SECTIONS.filter((s) => state.sectionIds.indexOf(s.id) < state.sectionIdx)
    .reduce((n, s) => n + getQs(s).length, 0);
  const overall = doneBefore + state.qIdx + 1;
  const overallTotal = SECTIONS.filter((s) => state.sectionIds.includes(s.id))
    .reduce((n, s) => n + getQs(s).length, 0);
  $("#exam-progress").textContent = `Soal ${overall} dari ${overallTotal} · Bagian ${state.sectionIdx + 1}/${total}`;

  // Passage (reading) / Audio (listening)
  if (sec.id === "listening") {
    const plays = state.playCounts[sec.id][state.qIdx] || 0;
    const left = Math.max(0, 3 - plays);
    html += `
      <div class="audio-box">
        <button class="btn btn-play" id="btn-play" ${left === 0 ? "disabled" : ""}>
          🔊 Putar Audio
        </button>
        <span class="play-info">${left > 0 ? `${left}× kesempatan tersisa` : "Audio selesai diputar"}</span>
        <button class="btn btn-transcript" id="btn-transcript">Lihat teks (transcript)</button>
        <div id="transcript" class="transcript hidden"></div>
      </div>`;
  }

  if (sec.id === "reading" && q.passage) {
    const p = sec.passages[q.passage];
    html += `<div class="review-passage" style="margin-bottom:16px"><strong>${p.title}</strong>\n${p.text}</div>`;
  }

  // Nomor + flag
  const flagged = state.flags[sec.id][state.qIdx];
  html += `
    <div class="q-head">
      <span class="q-number">Soal ${state.qIdx + 1} dari ${qs.length}</span>
      ${flagged ? '<span class="q-flag-mark">⚑ Ditandai</span>' : ""}
    </div>
    <div class="q-text">${escapeHtml(q.text)}</div>
    <div class="options">` +
    q.options.map((opt, i) =>
      `<div class="option ${answers[state.qIdx] === i ? "selected" : ""}" data-i="${i}" role="button" tabindex="0">
        <span class="letter">${LETTERS[i]}</span>
        <span class="opt-text">${escapeHtml(opt)}</span>
      </div>`
    ).join("") + `</div>`;

  area.innerHTML = html;

  // Event listener pilihan jawaban
  area.querySelectorAll(".option").forEach((el) => {
    el.addEventListener("click", () => {
      state.answers[sec.id][state.qIdx] = Number(el.dataset.i);
      renderQuestion();
      renderPalette();
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.click(); }
    });
  });

  // Audio
  if (sec.id === "listening") {
    const btnPlay = $("#btn-play");
    if (btnPlay) btnPlay.addEventListener("click", () => playAudio(sec, q));
    const btnT = $("#btn-transcript");
    if (btnT) btnT.addEventListener("click", () => {
      const t = $("#transcript");
      t.textContent = q.audio;
      t.classList.toggle("hidden");
    });
  }

  renderPalette();
  updateNavButtons();
}

function playAudio(sec, q) {
  if (!("speechSynthesis" in window)) {
    alert("Browser Anda tidak mendukung suara sintetis. Silakan gunakan teks di bawah (tombol 'Lihat teks').");
    return;
  }
  const key = state.qIdx;
  const count = (state.playCounts[sec.id][key] || 0) + 1;
  state.playCounts[sec.id][key] = count;
  if (count > 3) return;

  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(q.audio);
  u.lang = "en-US";
  u.rate = 0.92;
  window.speechSynthesis.speak(u);
  renderQuestion();
  renderPalette();
}

function stopSpeaking() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

/* ---------- Palette & Navigasi ---------- */
function renderPalette() {
  const sec = currentSection();
  const answers = state.answers[sec.id];
  const pal = $("#palette");
  pal.innerHTML = getQs(sec)
    .map((_, i) => {
      const answered = answers[i] !== null;
      const flagged = state.flags[sec.id][i];
      return `<button class="pal ${answered ? "answered" : ""} ${i === state.qIdx ? "current" : ""} ${flagged ? "flagged" : ""}" data-i="${i}" title="Soal ${i + 1}">${i + 1}</button>`;
    })
    .join("");
  pal.querySelectorAll(".pal").forEach((el) =>
    el.addEventListener("click", () => {
      state.qIdx = Number(el.dataset.i);
      renderQuestion();
    })
  );
}

function updateNavButtons() {
  const sec = currentSection();
  const isLastInSec = state.qIdx === getQs(sec).length - 1;
  const isLastSection = state.sectionIdx === state.sectionIds.length - 1;
  $("#btn-prev").disabled = state.qIdx === 0;
  $("#btn-next").textContent =
    isLastInSec ? (isLastSection ? "Selesai ✓" : "Lanjut Bagian →") : "Berikutnya →";
  $("#btn-flag").classList.toggle("active", !!state.flags[sec.id][state.qIdx]);
}

$("#btn-prev").addEventListener("click", () => {
  if (state.qIdx > 0) { state.qIdx--; renderQuestion(); }
});

$("#btn-next").addEventListener("click", () => {
  const sec = currentSection();
  if (state.qIdx < getQs(sec).length - 1) {
    state.qIdx++;
    renderQuestion();
  } else {
    nextSection();
  }
});

$("#btn-flag").addEventListener("click", () => {
  const sec = currentSection();
  if (state.flags[sec.id][state.qIdx]) delete state.flags[sec.id][state.qIdx];
  else state.flags[sec.id][state.qIdx] = true;
  renderQuestion();
});

$("#btn-submit").addEventListener("click", () => {
  if (confirm("Yakin ingin menyelesaikan seluruh ujian sekarang? Jawaban yang belum diisi dianggap kosong.")) {
    clearInterval(state.timerId);
    stopSpeaking();
    finishExam();
  }
});

/* ---------- Penilaian ---------- */
function sectionScore(sec) {
  const qs = getQs(sec);
  const raw = qs.reduce((n, q, i) => n + (state.answers[sec.id][i] === q.answer ? 1 : 0), 0);
  const pct = raw / qs.length;
  // skala per bagian: 30–67 (mirip ETS)
  const scaled = Math.round(30 + pct * 37);
  return { raw, total: qs.length, pct, scaled };
}

function totalScaledScore(scales) {
  // gabungkan skala bagian → skala total 213–677 berdasarkan persentase benar
  const rawTotal = scales.reduce((n, s) => n + s.raw, 0);
  const qTotal = scales.reduce((n, s) => n + s.total, 0);
  const pct = rawTotal / qTotal;
  return Math.round(213 + pct * (677 - 213));
}

function finishExam() {
  state.finished = true;
  clearInterval(state.timerId);
  stopSpeaking();

  const playedSections = SECTIONS.filter((s) => state.sectionIds.includes(s.id));
  const breakdown = playedSections.map((s) => ({ sec: s, ...sectionScore(s) }));
  const total = totalScaledScore(breakdown);

  // Simpan ke riwayat user (untuk grafik & analisis)
  const pkgLabel = state.pkgLabel || (playedSections.length === SECTIONS.length ? "Ujian Lengkap" : playedSections[0].id);
  if (state.user) {
    addHistory(state.user, {
      date: Date.now(),
      pkgLabel,
      total,
      sections: Object.fromEntries(
        breakdown.map((b) => [b.sec.id, { raw: b.raw, total: b.total, scaled: b.scaled, pct: b.pct }])
      ),
    });
  }

  // Render hasil
  $("#result-title").textContent = `Hasil Ujian — ${state.name}`;
  $("#result-sub").textContent =
    `${playedSections.length} bagian · ${breakdown.reduce((n, b) => n + b.total, 0)} soal · ` +
    new Date().toLocaleString("id-ID");

  $("#result-total").textContent = total;

  const [grade, cls] =
    total >= 600 ? ["Sangat Baik 🌟", "great"] :
    total >= 550 ? ["Baik 👍", "good"] :
    total >= 500 ? ["Cukup, Terus Latihan 💪", "ok"] :
    ["Perlu Latihan Lebih Banyak 📚", "low"];
  const g = $("#result-grade");
  g.textContent = grade;
  g.className = "grade-badge " + cls;

  $("#result-breakdown").innerHTML = breakdown.map((b) => `
    <div class="bd-row">
      <span class="bd-name">${b.sec.icon} ${b.sec.name.replace("Bagian ", "")}</span>
      <span class="bd-score">${b.scaled} / 67</span>
      <div class="bd-bar"><div class="bd-fill" style="width:0%"></div></div>
      <div class="bd-detail">Benar ${b.raw} dari ${b.total} soal (${Math.round(b.pct * 100)}%)</div>
    </div>`).join("");

  renderReview(breakdown);
  showScreen("result");

  // animasi bar setelah tampil
  requestAnimationFrame(() => {
    document.querySelectorAll("#result-breakdown .bd-fill").forEach((el, i) => {
      el.style.width = Math.round(breakdown[i].pct * 100) + "%";
    });
  });
}

/* ---------- Pembahasan ---------- */
function renderReview(breakdown) {
  const area = $("#review-area");
  area.innerHTML = breakdown.map(({ sec, raw, total }) => `
    <div class="review-section">
      <h3>${sec.icon} ${sec.name} — Benar ${raw}/${total}</h3>
      ${getQs(sec).map((q, i) => {
        const user = state.answers[sec.id][i];
        const correct = user === q.answer;
        const unanswered = user === null || user === undefined;
        const firstOfPassage = q.passage ? getQs(sec).findIndex((x) => x.passage === q.passage) === i : false;
        return `
        <div class="review-item">
          ${firstOfPassage ? `<div class="review-passage"><strong>${escapeHtml(sec.passages[q.passage].title)}</strong>\n${escapeHtml(sec.passages[q.passage].text)}</div>` : ""}
          ${q.audio ? `<div class="review-passage" style="background:#f0f9ff;border-color:#bae6fd"><strong>🎧 Audio:</strong> ${escapeHtml(q.audio)}</div>` : ""}
          <div class="rq"><strong>Q${i + 1}.</strong> ${escapeHtml(q.text)}</div>` +
          q.options.map((opt, oi) => {
            let cls = "ro";
            if (oi === q.answer) cls += " correct";
            else if (oi === user) cls += " wrong";
            return `<div class="${cls}"><span class="letter">${LETTERS[oi]}.</span> ${escapeHtml(opt)}${oi === q.answer ? " ✔" : ""}${oi === user && oi !== q.answer ? " (jawaban Anda)" : ""}</div>`;
          }).join("") + `
          <div class="review-verdict ${correct ? "ok" : "bad"}">
            ${unanswered ? "⚠️ Tidak dijawab" : correct ? "✅ Benar" : "❌ Salah"} — jawaban yang benar: ${LETTERS[q.answer]}
          </div>
          <div class="review-expl"><strong>Pembahasan:</strong> ${escapeHtml(q.explain)}</div>
        </div>`;
      }).join("")}
    </div>`).join("");
  area.classList.add("hidden");
  $("#btn-review").textContent = "🔍 Lihat Pembahasan";
}

$("#btn-review").addEventListener("click", () => {
  const area = $("#review-area");
  area.classList.toggle("hidden");
  $("#btn-review").textContent = area.classList.contains("hidden")
    ? "🔍 Lihat Pembahasan" : "🔍 Sembunyikan Pembahasan";
  if (!area.classList.contains("hidden")) area.scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#btn-restart").addEventListener("click", () => {
  clearInterval(state.timerId);
  stopSpeaking();
  $("#form-start").reset();
  const u = state.user ? getUsers()[state.user] : null;
  if (u) $("#inp-name").value = u.name; // prefill ulang setelah reset
  showScreen("home");
  loadBestScores();
});

/* ===================== Dashboard: Riwayat & Analisis ===================== */
const SEC_META = {
  listening: {
    icon: "🎧", name: "Listening",
    tip: "Dengarkan audio 2–3× berturut-turut tanpa membaca teks; catat detail angka, waktu, tempat, dan alasan (why). Fokus pada pertanyaan 'what does the speaker suggest/mean'.",
  },
  structure: {
    icon: "✏️", name: "Structure",
    tip: "Review tata bahasa: tense, passive voice, subject–verb agreement, comparative/superlative, parallel structure, serta pola error spotting (A/B/C/D) seperti since/for, although/but, dan 'the more...the more...'.",
  },
  reading: {
    icon: "📖", name: "Reading",
    tip: "Baca pertanyaannya lebih dulu, lalu cari detailnya di passage. Latih soal vocabulary (closest in meaning) dan inferensi (it can be inferred).",
  },
};

function fmtDate(t) {
  return new Date(t).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}

/* Grafik line sederhana dalam SVG (tanpa library) */
function lineChartSVG(points, opts) {
  const W = opts.width, H = opts.height;
  const padL = 50, padR = 16, padT = 22, padB = 32;
  const min = opts.min, max = opts.max;
  const n = points.length;
  const iw = W - padL - padR, ih = H - padT - padB;
  const x = (i) => (n === 1 ? padL + iw / 2 : padL + (iw * i) / (n - 1));
  const y = (v) => padT + ih - ((v - min) / (max - min)) * ih;
  let grid = "";
  for (const g of opts.grid) {
    grid += `<line class="c-grid" x1="${padL}" y1="${y(g).toFixed(1)}" x2="${W - padR}" y2="${y(g).toFixed(1)}"/>` +
            `<text class="c-axis" x="${padL - 8}" y="${(y(g) + 4).toFixed(1)}" text-anchor="end">${g}</text>`;
  }
  const path = points.map((p, i) => (i ? "L" : "M") + x(i).toFixed(1) + " " + y(p.y).toFixed(1)).join(" ");
  const dots = points.map((p, i) => `<circle class="c-pt" cx="${x(i).toFixed(1)}" cy="${y(p.y).toFixed(1)}" r="4.5"/>`).join("");
  const vals = points.map((p, i) => `<text class="c-val" x="${x(i).toFixed(1)}" y="${(y(p.y) - 10).toFixed(1)}" text-anchor="middle">${p.y}</text>`).join("");
  const dates = points.map((p, i) => `<text class="c-axis" x="${x(i).toFixed(1)}" y="${H - 8}" text-anchor="middle">${escapeHtml(p.label)}</text>`).join("");
  return `<svg class="chart-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Grafik perkembangan skor">` +
    grid + (n > 1 ? `<path class="c-line" d="${path}"/>` : "") + dots + vals + dates + `</svg>`;
}

/* Tren: berkembang / menurun / stabil */
function trendParts(hist) {
  const n = hist.length;
  if (n < 2) {
    return [{ cls: "flat", text: "📊 Kerjakan minimal 2 tes untuk melihat tren perkembangan (naik/turun)." }];
  }
  const last = hist[n - 1], prev = hist[n - 2], first = hist[0];
  const d1 = last.total - prev.total;
  const d2 = last.total - first.total;
  const word = (d) => (d > 0 ? "berkembang 📈" : d < 0 ? "menurun 📉" : "stabil ➡️");
  const cls = (d) => (d > 0 ? "up" : d < 0 ? "down" : "flat");
  return [
    { cls: cls(d1), text: `Berbanding tes sebelumnya: ${d1 >= 0 ? "+" : ""}${d1} poin — ${word(d1)}` },
    { cls: cls(d2), text: `Berbanding tes pertama (${fmtDate(first.date)}): ${d2 >= 0 ? "+" : ""}${d2} poin — tren keseluruhan ${word(d2)}` },
  ];
}

/* Analisis per aspek (bagian ujian) */
function analyzeSections(hist) {
  return ["listening", "structure", "reading"].map((id) => {
    const rows = hist.map((h) => h.sections && h.sections[id]).filter(Boolean);
    if (!rows.length) return null;
    const avg = rows.reduce((s, r) => s + r.pct, 0) / rows.length;
    const latest = rows[rows.length - 1].pct;
    const delta = latest - rows[0].pct;
    const m = SEC_META[id];
    let status, sCls;
    if (avg >= 0.8) { status = "Bagus 👍"; sCls = "great"; }
    else if (avg >= 0.6) { status = "Cukup — pertahankan 💪"; sCls = "ok"; }
    else { status = "Perlu latihan lebih banyak 📚"; sCls = "low"; }
    return {
      id, icon: m.icon, name: m.name, tip: m.tip,
      n: rows.length, avg, latest, delta,
      arrow: delta > 0.05 ? "↑ membaik" : delta < -0.05 ? "↓ menurun" : "→ stabil",
      status, sCls,
    };
  }).filter(Boolean);
}

function renderDashboard() {
  const email = state.user;
  const u = email ? getUsers()[email] : null;
  $("#dash-user").textContent = email ? (u && u.name ? u.name + " · " : "") + email : "";
  setAvatar("#dash-avatar", "#dash-initials", u);
  const hist = getHistory(email);
  if (!hist.length) {
    $("#dash-empty").classList.remove("hidden");
    $("#dash-content").classList.add("hidden");
    return;
  }
  $("#dash-empty").classList.add("hidden");
  $("#dash-content").classList.remove("hidden");

  // 1) Grafik line skor total
  const pts = hist.map((h) => ({
    y: h.total,
    label: new Date(h.date).toLocaleDateString("id-ID", { day: "numeric", month: "short" }),
  }));
  $("#chart-total").innerHTML = lineChartSVG(pts, { width: 760, height: 290, min: 213, max: 677, grid: [213, 329, 445, 561, 677] });
  $("#chart-trend").innerHTML = trendParts(hist).map((t) => `<div class="trend-item ${t.cls}">${escapeHtml(t.text)}</div>`).join("");

  // 2) Aspek yang perlu ditingkatkan
  const secs = analyzeSections(hist);
  const focusId = secs.slice().sort((a, b) => a.avg - b.avg)[0].id;
  $("#weak-sections").innerHTML = secs.map((s) => `
    <div class="weak-card ${s.id === focusId ? "focus" : ""}">
      <div class="weak-head">
        <span class="weak-name">${s.icon} ${s.name}</span>
        <span class="weak-badge ${s.sCls}">${escapeHtml(s.status)}</span>
      </div>
      <div class="weak-stats">
        <span>Rata-rata: <strong>${Math.round(s.avg * 100)}%</strong></span>
        <span>Terbaru: <strong>${Math.round(s.latest * 100)}%</strong></span>
        <span>Tren: <strong>${escapeHtml(s.arrow)}</strong></span>
        <span>${s.n} tes dikerjakan</span>
      </div>
      <div class="bd-bar"><div class="bd-fill" style="width:${Math.round(s.avg * 100)}%"></div></div>
      ${s.id === focusId ? `<div class="weak-tip">🎯 <strong>Aspek yang paling perlu ditingkatkan.</strong> Saran: ${escapeHtml(s.tip)}</div>` : ""}
    </div>`).join("");

  // 3) Daftar semua tes (terbaru di atas)
  $("#history-list").innerHTML = hist.slice().reverse().map((h, i) => {
    const secStr = Object.entries(h.sections || {}).map(([id, r]) =>
      `${SEC_META[id] ? SEC_META[id].icon : "•"} ${Math.round(r.pct * 100)}%`).join(" · ");
    return `<div class="hist-row">
      <span class="hist-no">#${hist.length - i}</span>
      <span class="hist-date">${fmtDate(h.date)}<br><small>${escapeHtml(h.pkgLabel || "Ujian")}</small></span>
      <span class="hist-sec">${secStr}</span>
      <span class="hist-total"><strong>${h.total}</strong> / 677</span>
    </div>`;
  }).join("");
}

$("#btn-dashboard").addEventListener("click", () => {
  if (!state.user) { showScreen("auth"); return; }
  renderDashboard();
  showScreen("dashboard");
});

$("#btn-to-dashboard").addEventListener("click", () => {
  if (!state.user) { showScreen("auth"); return; }
  renderDashboard();
  showScreen("dashboard");
});

$("#btn-back-home").addEventListener("click", () => {
  loadBestScores();
  showScreen("home");
});

/* ---------- Util ---------- */
let toastTimer = null;
function toast(msg) {
  let el = $("#toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3500);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/* ---------- Init ----------
   Jika ada sesi login yang valid → langsung ke beranda; kalau tidak, tampilkan halaman login. */
(function init() {
  initGoogleSignin(); // coba langsung; jika GIS belum siap, onload di index.html akan memanggil ulang
  const email = getSession();
  if (email && getUsers()[email]) {
    enterApp(email);
  } else {
    clearSession();
    showAuthTab("login");
    showScreen("auth");
  }
})();
