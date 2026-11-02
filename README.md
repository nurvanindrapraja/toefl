# 📝 TOEFL Practice Web

Aplikasi simulasi ujian TOEFL (PBT) berbasis web — murni HTML/CSS/JS vanilla, tanpa dependensi.

## Fitur

- **🔐 Login & daftar (wajib Gmail)**:
  - **Tombol "Sign in with Google"** (Google Identity Services) — profil (nama, email, foto) diambil langsung dari API Google; token diverifikasi (issuer, audience, masa berlaku, email terverifikasi, khusus @gmail.com),
  - atau form email/kata sandi lokal sebagai cadangan.
  - Akun, sesi, dan riwayat tersimpan di `localStorage` browser (tanpa backend).
- **3 bagian ujian** sesuai struktur TOEFL PBT:
  - 🎧 **Listening Comprehension** (5 soal per ujian) — audio percakapan dibacakan browser (Web Speech API), maksimal 3× pemutaran per soal, ada tombol *transcript*
  - ✏️ **Structure & Written Expression** (20 soal per ujian) — melengkapi kalimat + mencari bagian salah (A/B/C/D)
  - 📖 **Reading Comprehension** (±15 soal per ujian) — passage utuh (tidak terpecah di tengah)
- **🔀 Randomisasi per user** — setiap sesi: soal diambil acak dari bank (105 listening · 120 structure · 107 reading) + urutan opsi jawaban diacak (kecuali soal A/B/C/D).
- **📊 Riwayat & Analisis (per user)**:
  - **Grafik line** perkembangan skor total (213–677) — digambar SVG murni, tanpa library,
  - **Tren**: skor terakhir dibanding tes sebelumnya & tes pertama (berkembang 📈 / menurun 📉 / stabil ➡️),
  - **Aspek yang perlu ditingkatkan**: rata-rata & tren per bagian (listening/structure/reading), bagian terlemah ditandai 🎯 lengkap dengan saran latihan,
  - **Daftar semua tes** dengan skor per aspek.
- **Timer per bagian** (8 / 12 / 15 menit) dengan peringatan merah di 60 detik terakhir; waktu habis → lanjut otomatis
- **Navigasi bebas**: soal sebelumnya/berikutnya, *palette* nomor soal, klik langsung untuk lompat
- **⚑ Tandai soal** untuk ditinjau ulang
- **Paket ujian**: ujian lengkap (±35–40 soal) atau satu bagian saja
- **Penilaian**: skor per bagian (skala 30–67, mirip ETS) + skor total skala **213–677**
- **Pembahasan lengkap** per soal (jawaban benar disorot, jawaban salah dicoret, ada penjelasan grammar/vocabulary)
- **🏆 Rekor tertinggi** per user (top 3) di beranda
- Responsif untuk mobile & desktop

## Menjalankan

Cukup buka `index.html` di browser, atau jalankan server lokal:

```bash
# pilihan 1
python3 -m http.server 8080
# lalu buka http://localhost:8080

# pilihan 2
npx serve .
```

> Bagian Listening butuh browser yang mendukung Web Speech API (Chrome/Edge/Safari).
> Tanpa suara, gunakan tombol **"Lihat teks (transcript)"**.

## Alur Aplikasi

```
[LOGIN: tombol Google / form email] → [BERANDA] → [UJIAN] → [HASIL + PEMBAHASAN]
        ▲                                    │  │                   │
        │                                logout└─ [RIWAYAT & ANALISIS] ←┘
        └─────────────────────────────── (grafik line, tren, aspek lemah, daftar tes)
```

- Tanpa sesi login yang valid, halaman **beranda/ujian tidak bisa diakses** — user selalu diarahkan ke layar login.
- Login Google: klik tombol → popup akun Google → ID token (JWT) diterima → profil (nama, email, foto, `email_verified`) dibaca dari payload token → akun lokal dibuat/tautan otomatis.
- Setelah login, nama akun di-prefill ke kolom "Nama Penguji"; foto profil (jika ada) tampil di userbar & dashboard.
- Setiap ujian yang diselesaikan otomatis masuk ke riwayat user tersebut.

## Mengaktifkan "Login dengan akun Google"

Tombol Google memakai **Google Identity Services** — butuh *OAuth Client ID* dari Google Cloud (gratis):

1. Buka <https://console.cloud.google.com> → buat proyek (atau pakai proyek yang ada).
2. **APIs & Services → OAuth consent screen** → pilih **External** → isi nama aplikasi & email pendukung. (Scope email/nama/foto sudah termasuk otomatis oleh GIS, tanpa perlu menambah scope.)
3. **APIs & Services → Credentials → Create Credentials → OAuth client ID** → tipe **Web application**.
4. Isi **Authorized JavaScript origins** dengan origin situs Anda, contoh:
   - `http://localhost:8080` (saat development)
   - `https://domain-anda.com` (saat produksi)
5. Salin **Client ID** ke `js/config.js` → `APP_CONFIG.googleClientId`.
6. Jalankan lewat server (`python3 -m http.server 8080`) lalu buka — tombol resmi Google muncul di layar login.

> ⚠️ Google Sign-In **tidak berjalan dari `file://`** (buka langsung file) — wajib lewat `http(s)://`. Jika skrip Google gagal dimuat (offline) atau Client ID kosong, tampil pesan peringatan dan form email lokal tetap bisa dipakai.

> 📌 Karena aplikasi ini tanpa backend, verifikasi token hanya di sisi klien (issuer/audience/masa berlaku). Tanda tangan JWT penuh hanya bisa diverifikasi di server. Data pun per-browser, bukan lintas perangkat.

## Struktur

```
coba/
├── index.html                # 5 layar: auth (tombol Google + form), beranda, ujian, hasil, dashboard
├── css/style.css             # styling (dark hero + kartu putih + auth + dashboard)
├── js/config.js              # KONFIGURASI: googleClientId untuk Login dengan Google
├── js/data.js                # bank soal dasar (32 soal + passage) + ukuran sampel per bagian
├── js/data-listening-extra.js    # +100 soal listening
├── js/data-structure-extra.js    # +100 soal structure (60 pelengkapan + 40 bagian salah)
├── js/data-reading-extra.js      # +100 soal reading (14 passage baru)
├── js/app.js                 # logika: auth (Google + lokal), riwayat, acak per sesi, timer, TTS, penilaian, dashboard
└── test/smoke.js             # smoke test E2E dengan mock DOM (node test/smoke.js)
```

## Penyimpanan (localStorage)

| Kunci | Isi |
|---|---|
| `toefl-users` | Daftar akun: `{ email: { name, hash, createdAt } }` (hash kata sandi lokal, bukan kriptografis kuat) |
| `toefl-session` | Email user yang sedang login (agar tidak perlu login ulang saat reload) |
| `toefl-history` | Riwayat skor per user: `{ email: [ { date, pkgLabel, total, sections: {…} } ] }` |

> Aplikasi ini **tanpa backend** — semua data hanya ada di browser masing-masing user. Untuk multi-user lintas perangkat, perlu server/autentikasi eksternal.

## Cara Kerja Acak (per sesi)

Di `js/app.js`:

1. `mergeExtraBanks` menggabung `EXTRA_*` ke `SECTIONS` saat aplikasi dimuat.
2. Saat ujian dimulai, `buildExamQuestions(sec)`:
   - **listening/structure**: ambil `sec.sampleSize` soal acak dari bank (Fisher–Yates),
   - **reading**: passage dipilih acak, soal di dalam passage diacak, passage tidak pernah dipotong,
   - lalu `withShuffledOptions` mengacak urutan 4 opsi dan memetakan ulang `answer` (dilewati untuk `fixedOptions: true`).
3. Semua rendering, navigasi, penilaian, dan pembahasan memakai array sesi `state.sections[sec.id]`.

Jumlah soal per ujian diatur lewat field `sampleSize` di `js/data.js`.

## Menambah Soal

Tambahkan ke file bank yang sesuai:

```js
{
  text: "Teks soal...",
  options: ["...", "...", "...", "..."],
  answer: 1,            // indeks jawaban benar (0-3)
  explain: "Penjelasan..."
}
```

- Listening: tambah field `audio: "naskah yang dibacakan"`
- Reading: tambah field `passage: "p3"` + definisikan passage di `sec.passages`
- Soal A/B/C/D: wajib `fixedOptions: true`

## Menjalankan Tes

```bash
node test/smoke.js
```

13 cek: layar login + kotak Google pertama, bank 105/120/107, render tombol Google (simulasi SDK GIS), penolakan token non-Gmail, login Google (profil nama/email/foto dipakai), logout, penolakan email non-Gmail & password salah di form lokal, daftar+login Gmail lokal, ujian penuh skor 677 tersimpan ke riwayat, dashboard (grafik line SVG + tren + 3 aspek + daftar tes), ujian kedua (grafik 2 titik + tren naik/turun), rekor per user, isolasi riwayat antar user (akun Google vs form lokal).
