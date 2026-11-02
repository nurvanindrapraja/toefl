/* Smoke test E2E dengan mock DOM sederhana */
const fs = require("fs");

function makeEl(id) {
  const listeners = {};
  const classes = new Set();
  return {
    id,
    textContent: "",
    innerHTML: "",
    value: "",
    src: "",
    hidden: false,
    disabled: false,
    dataset: {},
    style: {},
    classList: {
      add: (c) => classes.add(c),
      remove: (c) => classes.delete(c),
      toggle: (c, force) => {
        const want = force === undefined ? !classes.has(c) : !!force;
        if (want) classes.add(c); else classes.delete(c);
      },
      contains: (c) => classes.has(c),
    },
    addEventListener(type, fn) { (listeners[type] ||= []).push(fn); },
    fire(type, ev) { (listeners[type] || []).forEach((f) => f(ev || { preventDefault() {} })); },
    querySelectorAll(sel) {
      if (sel !== ".option") return [];
      // cache per innerHTML agar listener tetap menempel (mengimitasi live DOM)
      if (!this._optCache || this._optCache.html !== this.innerHTML) {
        const out = [];
        const re = /data-i="(\d+)"/g;
        let m;
        while ((m = re.exec(this.innerHTML))) {
          const stub = makeEl("option-" + m[1]);
          stub.dataset.i = m[1];
          out.push(stub);
        }
        this._optCache = { html: this.innerHTML, stubs: out };
      }
      return this._optCache.stubs;
    },
    querySelector() { return null; },
    scrollIntoView() {},
    reset() { this.value = ""; },
    click() { this.fire("click"); },
  };
}

const els = {};
function getEl(sel) {
  const key = sel.replace(/^#/, "");
  if (!els[key]) els[key] = makeEl(key);
  return els[key];
}

global.window = { scrollTo() {} };
global.document = {
  querySelector: (sel) => {
    if (sel === 'input[name="pkg"]:checked') return { value: "full" };
    if (sel.startsWith("#")) return getEl(sel);
    return null;
  },
  querySelectorAll: () => [],
  createElement: (t) => makeEl("dyn-" + t),
  body: { appendChild() {} },
};
global.localStorage = {
  _d: {},
  getItem(k) { return this._d[k] ?? null; },
  setItem(k, v) { this._d[k] = v; },
  removeItem(k) { delete this._d[k]; },
};
global.confirm = () => true;
global.alert = (m) => { throw new Error("alert dipanggil: " + m); };
global.requestAnimationFrame = (fn) => fn();

(0, eval)(
  fs.readFileSync("js/config.js", "utf8") + "\n;" +
  fs.readFileSync("js/data.js", "utf8") + "\n;" +
  fs.readFileSync("js/data-listening-extra.js", "utf8") + "\n;" +
  fs.readFileSync("js/data-structure-extra.js", "utf8") + "\n;" +
  fs.readFileSync("js/data-reading-extra.js", "utf8") + "\n;" +
  fs.readFileSync("js/app.js", "utf8") +
  "\nglobalThis.__toefl = { SECTIONS, state, currentSection, getHistory, APP_CONFIG, handleGoogleCredential, initGoogleSignin };"
);

const { SECTIONS, state, currentSection, getHistory, APP_CONFIG, handleGoogleCredential, initGoogleSignin } = globalThis.__toefl;
const byId = Object.fromEntries(SECTIONS.map((s) => [s.id, s]));
const EMAIL = "budi.siswa@gmail.com";
const PASS = "rahasia123";
const GEMAIL = "googletest@gmail.com";

function fakeJwt(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return "header." + body + ".signature";
}

// --- 1) Layar login tampil pertama + kotak tombol Google ---
if (!getEl("screen-auth").classList.contains("active")) throw new Error("layar auth tidak aktif saat init");
if (getEl("google-status").classList.contains("hidden")) throw new Error("status memuat Google seharusnya tampil dulu");
console.log("✔ Layar login tampil pertama, kotak Google Sign-In siap");

// --- 2) Bank soal gabungan terpasang ---
if (byId.listening.questions.length !== 105) throw new Error("bank listening harus 105");
if (byId.structure.questions.length !== 120) throw new Error("bank structure harus 120");
if (byId.reading.questions.length !== 107) throw new Error("bank reading harus 107");
console.log("✔ Bank gabungan: 105 listening · 120 structure · 107 reading");

// --- 3) Simulasi SDK Google siap → tombol dirender ---
APP_CONFIG.googleClientId = "test-client-id";
globalThis.google = {
  accounts: {
    id: {
      _init: null,
      initialize(opts) { this._init = opts; },
      renderButton(el) { el.innerHTML = "<button>Sign in with Google</button>"; },
    },
  },
};
initGoogleSignin();
if (!globalThis.google.accounts.id._init || globalThis.google.accounts.id._init.client_id !== "test-client-id") throw new Error("initialize() tidak dipanggil dengan client id");
if (!getEl("google-btn-container").innerHTML.includes("Sign in with Google")) throw new Error("tombol Google tidak ter-render");
if (!getEl("google-status").classList.contains("hidden")) throw new Error("status 'memuat' harus hilang setelah SDK siap");
console.log("✔ SDK Google siap: initialize + tombol resmi dirender");

// --- 4) Login Google ditolak: email bukan Gmail ---
handleGoogleCredential({ credential: fakeJwt({
  iss: "accounts.google.com", aud: "test-client-id", sub: "1",
  email: "orang@outlook.com", email_verified: true, name: "Orang Lain",
  exp: Math.floor(Date.now() / 1000) + 3600,
}) });
if (getEl("screen-home").classList.contains("active")) throw new Error("login non-Gmail tidak boleh masuk");
if (getEl("google-status").classList.contains("hidden")) throw new Error("penolakan non-Gmail tidak ditampilkan");
if (!getEl("google-status").textContent.toLowerCase().includes("gmail")) throw new Error("pesan penolakan harus menyebut Gmail");
console.log("✔ Token Google non-Gmail ditolak dengan pesan jelas");

// --- 5) Login Google Gmail berhasil → profil (nama, email, foto) dipakai ---
handleGoogleCredential({ credential: fakeJwt({
  iss: "accounts.google.com", aud: "test-client-id", sub: "2",
  email: GEMAIL, email_verified: true, name: "Google Test",
  picture: "https://lh3.googleusercontent.com/a/avatar-123",
  exp: Math.floor(Date.now() / 1000) + 3600,
}) });
if (!getEl("screen-home").classList.contains("active")) throw new Error("login Google Gmail harus masuk beranda");
if (!getEl("userbar-email").textContent.includes(GEMAIL)) throw new Error("userbar tidak menampilkan email Google");
if (!getEl("userbar-email").textContent.includes("via Google")) throw new Error("penanda 'via Google' tidak tampil");
if (getEl("userbar-avatar").src !== "https://lh3.googleusercontent.com/a/avatar-123") throw new Error("foto profil Google tidak dipakai");
if (getEl("userbar-avatar").hidden) throw new Error("avatar Google tersembunyi");
if (getEl("inp-name").value !== "Google Test") throw new Error("nama dari profil Google tidak di-prefill");
const users = JSON.parse(global.localStorage.getItem("toefl-users") || "{}");
if (!users[GEMAIL] || users[GEMAIL].provider !== "google" || users[GEMAIL].name !== "Google Test") throw new Error("profil Google tidak tersimpan: " + JSON.stringify(users[GEMAIL]));
console.log("✔ Login Google sukses: profil (nama, email, foto) dari API Google dipakai, akun lokal dibuat");

// --- 6) Logout → kembali ke login ---
getEl("btn-logout").fire("click");
if (!getEl("screen-auth").classList.contains("active")) throw new Error("logout harus kembali ke layar auth");
console.log("✔ Logout OK");

// --- 7) Form lokal: email non-Gmail ditolak ---
getEl("tab-register").fire("click");
if (getEl("form-register").classList.contains("hidden")) throw new Error("tab daftar tidak menampilkan form daftar");
getEl("reg-name").value = "Budi";
getEl("reg-email").value = "budi@yahoo.com";
getEl("reg-pass").value = PASS;
getEl("reg-pass2").value = PASS;
getEl("form-register").fire("submit");
if (getEl("auth-error-register").classList.contains("hidden")) throw new Error("error gmail tidak tampil");
if (!getEl("auth-error-register").textContent.toLowerCase().includes("gmail")) throw new Error("pesan error harus menyebut Gmail");
console.log("✔ Form lokal: email non-Gmail ditolak");

// --- 8) Form lokal: daftar Gmail berhasil ---
getEl("reg-email").value = EMAIL;
getEl("form-register").fire("submit");
if (!getEl("screen-home").classList.contains("active")) throw new Error("setelah daftar harus ke beranda");
if (getEl("inp-name").value !== "Budi") throw new Error("nama penguji tidak di-prefill dari akun");
getEl("btn-logout").fire("click");
getEl("login-email").value = EMAIL;
getEl("login-pass").value = "salah123";
getEl("form-login").fire("submit");
if (getEl("auth-error-login").classList.contains("hidden")) throw new Error("error password salah tidak tampil");
getEl("login-pass").value = PASS;
getEl("form-login").fire("submit");
if (!getEl("screen-home").classList.contains("active")) throw new Error("login benar harus masuk beranda");
console.log("✔ Form lokal: daftar + login Gmail OK (password salah ditolak)");

// --- 9) Ujian 1: semua benar → 677, tersimpan ke riwayat budi ---
getEl("form-start").fire("submit");
if (!getEl("screen-exam").classList.contains("active")) throw new Error("ujian tidak dimulai");
let answered = 0;
for (let guard = 0; guard < 100; guard++) {
  if (getEl("screen-result").classList.contains("active")) break;
  const qs = state.sections[currentSection().id];
  const q = qs[state.qIdx];
  const opts = getEl("question-area").querySelectorAll(".option");
  if (!opts.length) throw new Error("opsi tidak ter-render");
  opts[q.answer].fire("click"); // jawaban benar
  answered++;
  getEl("btn-next").fire("click");
}
if (!getEl("screen-result").classList.contains("active")) throw new Error("layar hasil tidak aktif");
if (Number(getEl("result-total").textContent) !== 677) throw new Error("skor semua benar harus 677");
if (getHistory(EMAIL).length !== 1 || getHistory(EMAIL)[0].total !== 677) throw new Error("riwayat budi tidak tersimpan");
console.log("✔ Ujian 1: " + answered + " soal benar → 677, riwayat tersimpan");

// --- 10) Dashboard dari hasil: grafik line + analisis aspek ---
getEl("btn-to-dashboard").fire("click");
if (!getEl("screen-dashboard").classList.contains("active")) throw new Error("dashboard tidak aktif");
if (!getEl("chart-total").innerHTML.includes("<svg")) throw new Error("grafik line SVG tidak ter-render");
if (!getEl("chart-total").innerHTML.includes("c-pt")) throw new Error("titik data grafik tidak ada");
if (!getEl("chart-trend").innerHTML.includes("minimal 2 tes")) throw new Error("pesan tren (1 tes) tidak tampil");
if ((getEl("weak-sections").innerHTML.match(/weak-card/g) || []).length < 3) throw new Error("kartu aspek kurang dari 3");
if (!getEl("weak-sections").innerHTML.includes("Aspek yang paling perlu ditingkatkan")) throw new Error("aspek fokus tidak ditandai");
if (!getEl("history-list").innerHTML.includes("#1")) throw new Error("daftar tes kosong");
console.log("✔ Dashboard: grafik line SVG, tren, 3 aspek, daftar 1 tes");

// --- 11) Ujian 2 (sembarang) → grafik 2 titik + tren naik/turun ---
getEl("btn-back-home").fire("click");
getEl("form-start").fire("submit");
for (let guard = 0; guard < 100; guard++) {
  if (getEl("screen-result").classList.contains("active")) break;
  getEl("question-area").querySelectorAll(".option")[0].fire("click"); // sembarang
  getEl("btn-next").fire("click");
}
if (!getEl("screen-result").classList.contains("active")) throw new Error("ujian 2 tidak selesai");
getEl("btn-to-dashboard").fire("click");
const chart = getEl("chart-total").innerHTML;
if ((chart.match(/class="c-pt"/g) || []).length !== 2) throw new Error("grafik harus 2 titik");
if (!chart.includes("c-line")) throw new Error("garis penghubung grafik tidak ada");
if (!getEl("chart-trend").innerHTML.includes("tes sebelumnya")) throw new Error("tren vs tes sebelumnya tidak tampil");
if (!getEl("history-list").innerHTML.includes("#2")) throw new Error("daftar tes harus 2 entri");
console.log("✔ Ujian 2: grafik 2 titik + garis, tren terhitung, riwayat 2 entri");

// --- 12) Rekor beranda per user ---
getEl("btn-back-home").fire("click");
if (!getEl("home-best").innerHTML.includes("677")) throw new Error("rekor beranda harus menampilkan 677");
if (!getEl("home-best").innerHTML.includes(EMAIL)) throw new Error("rekor harus milik user yang login");
console.log("✔ Rekor tertinggi beranda per user OK (677)");

// --- 13) Riwayat per user terisolasi (Google user vs form lokal) ---
if (getHistory(GEMAIL).length !== 0) throw new Error("user Google tidak boleh punya riwayat dari tes budi");
if (getHistory(EMAIL).length !== 2) throw new Error("riwayat budi harus tetap 2 entri");
console.log("✔ Riwayat per-user terisolasi (akun Google terpisah dari akun form lokal)");

console.log("\nSMOKE TEST LULUS ✔ (13/13)");
