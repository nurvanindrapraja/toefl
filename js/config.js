/* ===================== Konfigurasi Aplikasi =====================
   LOGIN DENGAN GOOGLE — langkah pengaktifan:
   1. Buka https://console.cloud.google.com → buat proyek baru.
   2. "APIs & Services" → "OAuth consent screen" → pilih External →
      isi nama aplikasi & email pendukung (scope email/profil sudah termasuk
      secara otomatis oleh Google Identity Services).
   3. "Credentials" → "Create Credentials" → "OAuth client ID" →
      tipe: "Web application".
   4. Isi "Authorized JavaScript origins" dengan origin situs Anda,
      contoh:  http://localhost:8080   (WAJIB — Google Sign-In tidak
      berjalan dari file://, jalankan lewat server lokal / hosting).
   5. Salin "Client ID" ke googleClientId di bawah, lalu reload halaman.
   Jika dikosongkan, tombol Google disembunyikan dan form email lokal
   tetap bisa dipakai.
================================================================ */
const APP_CONFIG = {
  // contoh: "1234567890-abcdefg1234567hij.apps.googleusercontent.com"
  googleClientId: "317863563278-be22fb974u39uhqqvg0snds6mv4fn3jn.apps.googleusercontent.com",
};
