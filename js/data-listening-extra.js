/* ===================== Bank Soal Tambahan: Listening (+100 soal) =====================
   Format sama dengan bagian listening di data.js:
   - audio   : naskah percakapan yang dibacakan TTS
   - text    : instruksi + pertanyaan
   - options : 4 pilihan jawaban (Bahasa Indonesia)
   - answer  : indeks jawaban benar (0-3)
   - explain : pembahasan (Bahasa Indonesia)
================================================================ */

const EXTRA_LISTENING = [
  {
    audio: "Man: Excuse me, is this the line for the 10 a.m. flight to Denver? Woman: Yes, but the gate moved to 14. Follow the signs to the north.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhere should the man go to board his flight?",
    options: ["Gerbang 14 ke arah utara","Gerbang 10","Loket tiket","Restoran di utara"],
    answer: 0,
    explain: "Pramugari/petugas menyatakan gerbangnya pindah ke 14, dan arahnya mengikuti petunjuk ke utara."
  },
  {
    audio: "Woman: You can keep the book for two more weeks, but I see you already renewed it once. That means this is your last renewal. Man: That's a shame — I was hoping to extend it again.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the woman mean?",
    options: ["Buku harus dikembalikan hari ini", "Buku masih bisa diperpanjang sekali lagi", "Dua minggu terlalu lama", "Itu perpanjangan terakhir untuk buku tersebut"],
    answer: 3,
    explain: "'That means this is your last renewal' — peminjam tidak bisa memperpanjang lagi setelah ini."
  },
  {
    audio: "Man: The coffee machine in the break room is acting up again — it makes that loud grinding noise. Woman: I'll call the maintenance guy. He fixed it last Tuesday, so I have his number.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the woman do?",
    options: ["Memanggil teknisi pemeliharaan","Memperbaiki mesinnya sendiri","Membeli mesin baru","Melaporkan ke atasannya"],
    answer: 0,
    explain: "Wanita itu akan 'call the maintenance guy' — memanggil teknisi yang sudah pernah memperbaiki mesin itu."
  },
  {
    audio: "Man: Two tickets for the 7 p.m. showing, please. Woman: I'm sorry, the 7 p.m. show is sold out. The next one is at 9:15.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat is the problem?",
    options: ["Pertunjukan pukul 7 malam sudah habis","Harga tiket terlalu mahal","Cetakan pukul 9:15 sudah penuh","Loket belum dibuka"],
    answer: 0,
    explain: "'The 7 p.m. show is sold out' — tiket pertunjukan yang diinginkan pria itu sudah habis."
  },
  {
    audio: "Woman: Does this bus stop at the museum? Man: No, but you can transfer at the central station and take the number 22.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the man suggest?",
    options: ["Transit di stasiun pusat lalu naik bus 22","Mengambil bus nomor 22 langsung dari sini","Menunggu bus berikutnya","Berjalan kaki ke museum"],
    answer: 0,
    explain: "Pria menyarankan 'transfer at the central station and take the number 22' — transit dulu di stasiun pusat."
  },
  {
    audio: "Man: Look at those clouds — it's about to pour. You'd better take an umbrella. Woman: Thanks, I forgot mine. Can I borrow yours?",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the woman probably do?",
    options: ["Meminjam payung pria itu","Membeli payung baru","Menunggu hujan reda","Berlari ke tempat yang teduh"],
    answer: 0,
    explain: "Wanita itu lupa membawa payung dan langsung meminta 'Can I borrow yours?' — meminjam payung pria itu."
  },
  {
    audio: "Woman: Good morning. I have a reservation under the name Smith. Man: Let me check... yes, one double room for three nights. May I see your ID, please?",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhere does the conversation most probably take place?",
    options: ["Di meja resepsionis hotel","Di kantor travel","Di bandara","Di apartemen sewa"],
    answer: 0,
    explain: "Ucapan 'reservation', 'double room', dan permintaan menunjukkan identitas adalah ciri pendaftaran di hotel."
  },
  {
    audio: "Man: Professor, I really can't keep up in Advanced Chemistry. Can I switch to the regular section? Woman: The section change closes on Friday, so you'd better sign up before then.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the woman tell the man?",
    options: ["Pergantian kelas ditutup hari Jumat","Kelas reguler sudah penuh","Dia harus mengulang dari semester ini","Konselor akan menghubunginya"],
    answer: 0,
    explain: "Dosen menyatakan batas pergantian bagian kelas ('section change closes on Friday')."
  },
  {
    audio: "Woman: Where can I park near the theater? Man: The garage on Fifth Avenue is usually full at night, but the street lot is open until midnight.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the man say about the garage on Fifth Avenue?",
    options: ["Biasanya penuh saat malam","Tutup pada malam hari","Hanya untuk karyawan","Gratis sampai tengah malam"],
    answer: 0,
    explain: "Pria mengatakan garasi itu 'usually full at night' — biasanya penuh pada malam hari."
  },
  {
    audio: "Woman: Dr. Lopez will see you in a few minutes. In the meantime, how long have you had the headache? Man: About three days. It gets worse in the evening.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow long has the man had his headache?",
    options: ["Tiga hari","Tiga jam","Tiga minggu","Tiga bulan"],
    answer: 0,
    explain: "Pria menjawab langsung: 'About three days'."
  },
  {
    audio: "Man: Is the cafeteria open on weekends? Woman: Only on Saturdays, from 11 a.m. to 2 p.m. It's closed on Sundays.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhen is the cafeteria closed?",
    options: ["Setiap pagi", "Hari Sabtu siang", "Hari Minggu", "Setelah pukul 2 siang"],
    answer: 2,
    explain: "Kantin hanya buka hari Sabtu; 'It's closed on Sundays' — hari Minggu tutup."
  },
  {
    audio: "Woman: Thanks for coming in today. Could you tell me a little about yourself? Man: Certainly. I've worked in marketing for five years at two different tech companies.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat is the man most likely doing?",
    options: ["Menjalani wawancara kerja", "Menghadapi sidang skripsi", "Menyampaikan presentasi", "Melamar magang"],
    answer: 0,
    explain: "Pola 'Thanks for coming in' lalu meminta memperkenalkan diri adalah ciri wawancara kerja."
  },
  {
    audio: "Man: Sorry, the 6:30 train was delayed by twenty minutes because of track maintenance. Woman: Ugh, I'll miss my connection now.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhy was the train late?",
    options: ["Perawatan jalur rel","Cuaca buruk","Gangguan sinyal","Banyak penumpang"],
    answer: 0,
    explain: "Penundaan disebabkan 'track maintenance' — perawatan jalur rel."
  },
  {
    audio: "Woman: Would you like something to drink with that? Man: A glass of orange juice, please.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the man have to drink?",
    options: ["Jus jeruk","Air putih","Kopi hitam","Teh manis"],
    answer: 0,
    explain: "Pria memesan langsung: 'A glass of orange juice'."
  },
  {
    audio: "Man: The film starts in ten minutes, and the popcorn is half price tonight. Woman: Great, let's grab some before we find our seats.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat are the speakers doing?",
    options: ["Membeli popcorn di bioskop", "Menonton film di rumah", "Membeli tiket konser", "Antri di kantin"],
    answer: 0,
    explain: "Mereka di bioskop: film segera mulai dan popcorn sedang diskon, jadi mereka membeli popcorn."
  },
  {
    audio: "Woman: Hi, I left my umbrella at the coffee shop this morning. It's blue. Man: I'll check — ah, here it is. You have a good memory, we've got three blue umbrellas!",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow many blue umbrellas are there in total?",
    options: ["Satu", "Dua", "Tiga", "Empat"],
    answer: 2,
    explain: "Pemilik mengatakan 'we've got three blue umbrellas' — ada tiga payung biru."
  },
  {
    audio: "Man: I've been coming to the gym for two months, but I haven't lost any weight. Woman: Maybe you should try the evening classes — they burn more calories.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the woman suggest?",
    options: ["Mencoba kelas sore/malam","Berganti gym","Mengurangi makan","Latihan berenang"],
    answer: 0,
    explain: "Wanita menyarankan 'try the evening classes' karena membakar kalori lebih banyak."
  },
  {
    audio: "Woman: Are the ancient Egyptian exhibits on this floor? Man: No, take the elevator to the third floor. The mummies are in room 3B.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhere are the mummies?",
    options: ["Ruang 3B di lantai tiga","Lantai dasar","Lantai dua","Ruang 1B"],
    answer: 0,
    explain: "Mumi berada di 'room 3B' yang berada di lantai tiga."
  },
  {
    audio: "Man: I'd like to open a savings account, please. Woman: You'll need two forms of ID. A passport and a driver's license would do.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the man need to bring?",
    options: ["Dua identitas resmi","Satu foto saja","Surat pengantar RT","Jaminan properti"],
    answer: 0,
    explain: "Petugas bank meminta 'two forms of ID' — dua identitas resmi."
  },
  {
    audio: "Woman: The kitchen sink is leaking again. Man: I'll call the plumber. He's usually here by noon.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will happen next?",
    options: ["Mereka akan membeli wastafel baru","Mereka akan menutup keran air","Tukang pipa akan datang sebelum siang","Tetangga akan membantu"],
    answer: 2,
    explain: "Pria akan menelepon tukang pipa yang biasanya sudah datang 'by noon' (sebelum/saat siang)."
  },
  {
    audio: "Woman: Are you coming to Sara's birthday party on Saturday? Man: I can't — I have to work that weekend. But tell her happy birthday from me!",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhy can't the man attend the party?",
    options: ["Dia sakit","Dia tidak suka Sara","Dia harus bekerja di akhir pekan itu","Dia sudah ada acara keluarga"],
    answer: 2,
    explain: "Alasannya jelas: 'I have to work that weekend'."
  },
  {
    audio: "Man: Will the final exam cover the material from the first unit? Woman: Yes, but most of the questions will come from units three through five.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will most of the exam questions come from?",
    options: ["Unit pertama", "Unit dua", "Unit tiga sampai lima", "Materi di luar buku"],
    answer: 2,
    explain: "Dosen menyatakan sebagian besar soal berasal dari 'units three through five'."
  },
  {
    audio: "Woman: It's supposed to snow tomorrow, so the roads will be slippery. Man: Then I'll drive slowly and leave for work early.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the man do tomorrow?",
    options: ["Berangkat kerja lebih awal", "Mengambil cuti", "Naik kereta", "Bekerja dari rumah"],
    answer: 0,
    explain: "Karena jalan licin, pria itu memutuskan 'leave for work early' — berangkat lebih awal."
  },
  {
    audio: "Man: The band's concert is next Friday at eight. Woman: I already have plans that night. Can we watch it together on TV instead?",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the woman suggest?",
    options: ["Membatalkan rencana malam itu","Membeli tiket lebih awal","Menonton konsernya di televisi","Mengundang band ke rumah"],
    answer: 2,
    explain: "Wanita menawarkan alternatif: menonton konser bersama di TV."
  },
  {
    audio: "Woman: Do you have the new novel by Maria Chen? Man: Let me check... Sorry, we're out of stock. We can order it for you — it should arrive in a week.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat can the man offer?",
    options: ["Menjual versi bekas","Menjaminkan buku","Memesan novelnya (tiba dalam sepekan)","Mendiskonto harga"],
    answer: 2,
    explain: "Buku sedang kosong, tapi toko bisa memesankan — tiba dalam seminggu."
  },
  {
    audio: "Woman: How often should I brush my teeth? Man: Twice a day, for two minutes each time, and floss every night.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow often does the dentist recommend brushing?",
    options: ["Sekali sehari","Tiga kali sehari","Dua kali sehari","Setiap makan"],
    answer: 2,
    explain: "Dokter gigi menyarankan 'Twice a day'."
  },
  {
    audio: "Man: How much does it cost to send this package to Canada? Woman: It's twelve dollars by regular mail, or twenty-five by express.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow much is express delivery?",
    options: ["$12", "$13", "$25", "$37"],
    answer: 2,
    explain: "Ongkos express adalah 'twenty-five' dolar; reguler $12."
  },
  {
    audio: "Woman: The car won't start this morning. Man: It might be the battery — it's four years old. Let me check it at the shop.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat is the most likely problem with the car?",
    options: ["Kendali rem","Mesin","Aki (baterai)","Roda"],
    answer: 2,
    explain: "Pria menduga penyebabnya 'the battery' yang sudah berusia empat tahun."
  },
  {
    audio: "Woman: How long will it take to wash and iron these shirts? Man: Normally two hours, but today we're busy — pick them up this evening.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhen can the woman pick up her shirts?",
    options: ["Dua jam lagi", "Besok pagi", "Malam ini", "Besok malam"],
    answer: 2,
    explain: "Karena sibuk, cuci setrika meminta diambil 'this evening'."
  },
  {
    audio: "Man: I'm looking for the nearest bank. Woman: Walk straight for two blocks, then turn left at the pharmacy. The bank is right there.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow far is the bank?",
    options: ["Dua blok", "Lima blok", "Satu kilometer", "Sepuluh menit jalan kaki"],
    answer: 0,
    explain: "Petunjuk: jalan lurus 'two blocks' lalu belok kiri — bank ada di sana."
  },
  {
    audio: "Man: Ladies and gentlemen, the 4:15 flight to Jakarta is delayed by forty-five minutes due to heavy fog. Woman: Great — that gives us time for lunch.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhy was the flight delayed?",
    options: ["Mekanik sibuk","Bandarudaha penuh","Kabut tebal","Cuaca panas"],
    answer: 2,
    explain: "Penundaan disebabkan 'heavy fog' — kabut tebal."
  },
  {
    audio: "Woman: The printer keeps jamming every few pages. Man: I'll clear the paper tray — that usually fixes it.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the man do first?",
    options: ["Membeli printer baru","Menyelamati jaringan kantor","Membersihkan laci kertas","Menyalin ulang dokumen"],
    answer: 2,
    explain: "Dia akan 'clear the paper tray' — membersihkan laci kertas."
  },
  {
    audio: "Man: Our dorm room is really noisy at night. Can we get a quieter room? Woman: Let me check... rooms on the east side are quieter. There's one open on the fourth floor.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhich room is available?",
    options: ["Lantai dua, sisi barat","Lantai satu, sisi timur","Lantai empat, sisi timur","Lantai empat, sisi barat"],
    answer: 2,
    explain: "Kamar yang kosong berada di sisi timur, lantai empat ('east side... fourth floor')."
  },
  {
    audio: "Woman: How do you make this soup? It smells wonderful. Man: It's simple — onions, carrots, celery, and a lot of chicken broth.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhich of the following is NOT an ingredient in the soup?",
    options: ["Bawang bombay", "Wortel", "Kentang", "Kaldu ayam"],
    answer: 2,
    explain: "Bahan yang disebut: bawang, wortel, seledri, dan kaldu ayam — kentang tidak disebut."
  },
  {
    audio: "Man: Did you see the final match? Our team won three to two! Woman: I did! That goal in the last minute was unbelievable.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat was the final score?",
    options: ["2-1","3-1","3-2","2-0"],
    answer: 2,
    explain: "Pria menyatakan 'won three to two' — skor akhir 3-2."
  },
  {
    audio: "Woman: Mr. Baker, why were you absent from class yesterday? Man: I was sick — I had a bad flu. Here's a note from the doctor.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhy was the man absent yesterday?",
    options: ["Dia pergi ke dokter gigi","Dia lupa ada kelas","Dia sedang bekerja","Dia sakit flu"],
    answer: 3,
    explain: "Alasannya: 'I had a bad flu' — sakit flu."
  },
  {
    audio: "Woman: A table for two at seven, please. Man: We don't have anything at seven, but there's a table at seven-thirty. Would that be okay?",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat time is the available table?",
    options: ["Pukul tujuh","Pukul 8:00","Pukul 8:30","Pukul 7:30"],
    answer: 3,
    explain: "Mesa yang tersedia 'at seven-thirty' — pukul 7:30."
  },
  {
    audio: "Man: Can I get today's newspaper and the Sunday magazine? Woman: Sure, that's four dollars fifty.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow much will the man pay?",
    options: ["$4.00","$5.00","$5.50","$4.50"],
    answer: 3,
    explain: "Totalnya 'four dollars fifty' — $4.50."
  },
  {
    audio: "Woman: I sent you the report by email an hour ago. Did you get it? Man: Not in my inbox... let me check... ah, it's in my spam folder.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhere was the email?",
    options: ["Di kotak masuk","Tidak terkirim","Di folder arsip","Di folder spam"],
    answer: 3,
    explain: "Surel ternyata masuk ke 'spam folder'."
  },
  {
    audio: "Man: The picnic is canceled — it's raining too hard. Woman: That's okay. We can do it next weekend if the weather is nice.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the speakers probably do?",
    options: ["Membatalkan piknik selamanya","Piknik di dalam ruangan hari ini","Menonton film bersama","Piknik akhir pekan berikutnya"],
    answer: 3,
    explain: "Wanita mengusulkan menundanya 'next weekend' kalau cuacanya baik."
  },
  {
    audio: "Woman: You may now board at gate 22. Have your boarding passes ready. Man: Excuse me, my seat is 14A — where is it? Woman: Row 14, by the window on the left.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhere is the man's seat?",
    options: ["Baris 14, dekat jendela sebelah kiri", "Baris 22, dekat lorong", "Baris 41, di belakang", "Baris 14, dekat jendela kanan"],
    answer: 0,
    explain: "Disebutkan 'Row 14, by the window on the left'."
  },
  {
    audio: "Woman: I have a bad cough and a stuffy nose. Man: It sounds like a cold. Take this medicine — two pills, three times a day.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow often should the woman take the medicine?",
    options: ["Sekali sehari", "Dua kali sehari", "Tiga kali sehari", "Empat kali sehari"],
    answer: 2,
    explain: "Dosis: dua pil, 'three times a day'."
  },
  {
    audio: "Man: I'd like to apply for the sales position advertised in the paper. Woman: You can fill out this form first. The manager will call you if you're shortlisted.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat should the man do first?",
    options: ["Menghadapi manajer","Kirim surat lamaran","Menunggu di luar","Mengisi formulir"],
    answer: 3,
    explain: "Langkah pertama: 'fill out this form'."
  },
  {
    audio: "Man: What time does the new action movie start? Woman: At 2:00, 4:30, and 7:00. The 4:30 show is almost full.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhich showing is almost full?",
    options: ["Pukul 2:00","Pukul 7:00","Pukul 9:00","Pukul 4:30"],
    answer: 3,
    explain: "Cetakan yang hampir penuh adalah 'the 4:30 show'."
  },
  {
    audio: "Woman: How much is a one-month gym membership? Man: It's forty dollars, or three hundred sixty for the full year — that's a better deal.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow much is the yearly membership?",
    options: ["$40", "$120", "$360", "$400"],
    answer: 2,
    explain: "Anggotaan setahun: 'three hundred sixty' — $360."
  },
  {
    audio: "Woman: Excuse me, the music next door is really loud. It's almost midnight. Man: Oh, sorry! I didn't realize. I'll turn it down right away.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the man do?",
    options: ["Mematikan musik selamanya","Pindah tempat","Meminta maaf lalu tidur","Merendahkan volume musiknya"],
    answer: 3,
    explain: "Dia berjanji 'turn it down' — merendahkan volume."
  },
  {
    audio: "Man: When is the deadline for the scholarship application? Woman: March 15. Remember to attach your transcript and two letters of recommendation.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat must be attached to the application?",
    options: ["Pas foto dan KTP","Surat pengalaman kerja","Kartu keluarga","Transkrip nilai dan dua surat rekomendasi"],
    answer: 3,
    explain: "Lampiran yang diminta: 'transcript and two letters of recommendation'."
  },
  {
    audio: "Woman: What would you like? Man: A medium latte with oat milk, please. And one blueberry muffin to go.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the man take with him?",
    options: ["Kue blueberry (muffin)", "Espresso", "Roti bakar", "Air mineral"],
    answer: 0,
    explain: "'One blueberry muffin to go' — dibawa pulang."
  },
  {
    audio: "Man: A round-trip ticket to Chicago, please. Woman: It's two hundred ten dollars by coach, or three hundred fifty by business class.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow much is the business-class ticket?",
    options: ["$210","$560","$700","$350"],
    answer: 3,
    explain: "Kelas bisnis: 'three hundred fifty' — $350."
  },
  {
    audio: "Woman: Visiting hours are from 2 to 4 p.m. every day. Man: Thanks. I'll come this afternoon after work.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhen can the man visit the patient?",
    options: ["Pukul 10 pagi","Malam ini","Besok pagi","Siang ini pukul 2-4"],
    answer: 3,
    explain: "Jam besuk 'from 2 to 4 p.m.' — dia akan datang sore itu."
  },
  {
    audio: "Man: It's sunny today — perfect for a bike ride. Woman: Sounds great, but I have to study for my math test.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhy can't the woman join the bike ride?",
    options: ["Dia tidak punya sepeda","Dia sakit","Dia harus bekerja","Dia harus belajar untuk tes matematika"],
    answer: 3,
    explain: "Dia harus 'study for my math test'."
  },
  {
    audio: "Woman: I'd like to rent a car for four days. Man: Sure. That will be one hundred twenty dollars, plus a fifty-dollar deposit.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow much is the deposit?",
    options: ["$50", "$120", "$170", "$400"],
    answer: 0,
    explain: "Depositnya 'fifty dollars'; biaya sewa empat hari $120."
  },
  {
    audio: "Man: Can we move the meeting to Thursday? I have a doctor's appointment on Wednesday. Woman: Thursday works for me. Same time?",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhy does the man want to move the meeting?",
    options: ["Dia tidak suka rekan rapatnya","Ruang rapat sudah dibooking orang","Dia ingin pulang lebih cepat","Dia ada janji dokter hari Rabu"],
    answer: 3,
    explain: "Alasannya: 'doctor's appointment on Wednesday'."
  },
  {
    audio: "Woman: How much is the admission ticket? Man: It's ten dollars for adults, five for students, and free for children under twelve.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow much does a student pay?",
    options: ["Gratis","    0","    2","$5"],
    answer: 3,
    explain: "Harga pelajar: 'five for students'."
  },
  {
    audio: "Man: Our internet keeps disconnecting. Woman: I'll restart the modem first. If that doesn't work, we'll call the provider.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the woman do first?",
    options: ["Menelepon penyedia jasa","Membeli router baru","Melaporkan ke tetangga","Memulai ulang modem"],
    answer: 3,
    explain: "Langkah pertama: 'restart the modem'."
  },
  {
    audio: "Woman: Do you have any fresh strawberries? Man: Yes, in the produce section. They're two dollars a pound today.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow much are the strawberries?",
    options: ["$2 per biji","     per pon","$2.5 per pon","$2 per pon"],
    answer: 3,
    explain: "Harga: 'two dollars a pound'."
  },
  {
    audio: "Man: Should I review chapter seven or chapter eight first? Woman: Chapter eight — the professor said the test will focus more on it.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhich chapter should the man review first?",
    options: ["Bab 7","Bab 5","Keduanya sekaligus","Bab 8"],
    answer: 3,
    explain: "Ujian lebih fokus pada bab 8, jadi itu yang direview dulu."
  },
  {
    audio: "Woman: Does the room price include breakfast? Man: Yes, from six to ten a.m. in the restaurant on the first floor.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhen is breakfast served?",
    options: ["Pukul 5-8 pagi","Pukul 7-11 pagi","Sepanjang hari","Pukul 6-10 pagi"],
    answer: 3,
    explain: "Sarapan disediakan 'from six to ten a.m.'."
  },
  {
    audio: "Woman: We're planning a surprise party for Mom on Sunday. Man: Great idea! Can I bring the cake?",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the man bring to the party?",
    options: ["Kue (cake)", "Minuman", "Alat musik", "Hiasan ruangan"],
    answer: 0,
    explain: "Dia menawarkan membawa 'the cake'."
  },
  {
    audio: "Man: I can't log into the library computer. Woman: Are you using the student portal? You need the 'lib' prefix before your ID number.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat is the man's problem?",
    options: ["Komputernya rusak", "Dia lupa kata sandi", "Dia perlu menambah awalan 'lib' sebelum ID", "Jaringan lambat"],
    answer: 2,
    explain: "Format ID-nya kurang: harus ada awalan 'lib' sebelum nomor ID."
  },
  {
    audio: "Man: Are there still tickets for the semifinal? Woman: Only in the upper stands — forty dollars. The lower stands are sold out.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhere are the remaining tickets?",
    options: ["Di tribun bawah","Di kursi VIP","Di loket utama","Di tribun atas"],
    answer: 3,
    explain: "Tersisa hanya di 'the upper stands'."
  },
  {
    audio: "Woman: I'm thinking of taking the evening French class. Man: Be careful — it starts at seven, right after your dinner shift ends.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat is the problem with the class?",
    options: ["Biayanya mahal","Gurunya tidak bagus","Kelasnya sudah penuh","Jadwalnya bentrok dengan pekerjaan wanita itu"],
    answer: 3,
    explain: "Kelas mulai tepat saat shift malamnya berakhir — jadwalnya bentrok."
  },
  {
    audio: "Woman: You have a package here. Please sign. Man: Here. What does it weigh? Woman: Two kilograms.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow heavy is the package?",
    options: ["1 kg","3 kg","5 kg","2 kg"],
    answer: 3,
    explain: "Berat paketnya 'two kilograms'."
  },
  {
    audio: "Man: There's a big accident on the highway, so it will take at least an hour to reach the airport. Woman: Then we'd better take the underground.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat do they decide to do?",
    options: ["Meninggal bandara","Menunggu sampai kecelakaan ditangani","Mencari jalan lain dengan mobil","Mengambil kereta bawah tanah"],
    answer: 3,
    explain: "Mereka memutuskan 'take the underground' — kereta bawah tanah."
  },
  {
    audio: "Woman: Excuse me, this soup is cold. Man: I'm sorry, ma'am. I'll have the kitchen warm it up right away.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the man do?",
    options: ["Mengantarkan sup baru","Memberikan diskon","Melayani meja lain","Meminta dapur menghangatkan sup"],
    answer: 3,
    explain: "Dia akan 'have the kitchen warm it up'."
  },
  {
    audio: "Man: We're getting married in June at a beach resort in Bali. Woman: Congratulations! Where will the reception be held? Man: At the hotel's beach club, of course.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhere will the reception be held?",
    options: ["Di gereja","Di rumah pengantin","Di restoran kota","Di beach club hotel"],
    answer: 3,
    explain: "Resepsi diadakan di 'the hotel's beach club'."
  },
  {
    audio: "Woman: Registration for the online course ends next Friday. Man: I'll sign up tonight. Which platform do you use? Woman: It's on the university portal.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhen does the registration end?",
    options: ["Hari Jumat ini", "Jumat depan", "Akhir bulan", "Bulan depan"],
    answer: 1,
    explain: "Batas registrasi: 'next Friday'."
  },
  {
    audio: "Woman: The doctor told me to stop drinking coffee. Man: That's tough! I can't imagine my morning without it.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat did the doctor tell the woman?",
    options: ["Hindari kafein", "Berhenti minum kopi", "Kurangi gula", "Minum teh hijau"],
    answer: 1,
    explain: "Dokter menyuruhnya 'stop drinking coffee'."
  },
  {
    audio: "Man: To the city hotel, please. Woman: It's about twenty minutes unless there's traffic.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow long will the ride take?",
    options: ["Sekitar 10 menit", "Sekitar 20 menit", "Sekitar 40 menit", "Sekitar 1 jam"],
    answer: 1,
    explain: "Pengemudi menaksir 'about twenty minutes'."
  },
  {
    audio: "Woman: I twisted my ankle playing volleyball. Man: You should ice it and rest for a couple of days.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the man advise?",
    options: ["Segera main lagi", "Kompres es dan istirahat", "Minum vitamin", "Lari ringan"],
    answer: 1,
    explain: "Saran: 'ice it and rest for a couple of days'."
  },
  {
    audio: "Man: I need two tickets for the pop concert, center section, please. Woman: The center section is gone, but I have two in the front row — actually better!",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat seats are available?",
    options: ["Kursi bagian tengah", "Dua kursi di baris depan", "Kursi belakang", "Kursi berdiri"],
    answer: 1,
    explain: "Tersisa 'two in the front row'."
  },
  {
    audio: "Woman: Can you cover my shift on Friday? Man: I can, if you help me with my presentation on Monday.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat is the condition for the man to cover the shift?",
    options: ["Dia diberi uang", "Wanita itu membantunya dengan presentasi Senin", "Atasan menyetujui", "Mereka bergantian tiap minggu"],
    answer: 1,
    explain: "Syaratnya: 'if you help me with my presentation on Monday'."
  },
  {
    audio: "Woman: One loaf of whole-wheat bread and six eggs, please. Man: That's three dollars twenty.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow much will the woman pay?",
    options: ["$3.00", "$3.20", "$3.60", "$4.00"],
    answer: 1,
    explain: "Total belanja: 'three dollars twenty'."
  },
  {
    audio: "Man: Is this the train to Bandung? Woman: Platform 5, and it leaves at 2:30 p.m. It's on time.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhen does the train leave?",
    options: ["Pukul 2:00", "Pukul 2:30", "Pukul 3:00", "Pukul 5:20"],
    answer: 1,
    explain: "Keberangkatan: 'at 2:30 p.m.'."
  },
  {
    audio: "Woman: The book club meets every other Thursday. Man: Which book are you reading this month? Woman: Pride and Prejudice.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow often does the book club meet?",
    options: ["Setiap hari Kamis", "Dua kali sebulan", "Setiap dua minggu", "Setiap bulan"],
    answer: 2,
    explain: "'Every other Thursday' = setiap dua minggu."
  },
  {
    audio: "Woman: I think my suitcase is missing. It's black with a red strap. Man: Don't worry — it often arrives later. Stay here and I'll check the conveyor.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the man do?",
    options: ["Membeli koper baru", "Memeriksa conveyor koper", "Membuat laporan polisi", "Menelepon maskapai"],
    answer: 1,
    explain: "Dia akan 'check the conveyor' — memeriksa tempat keluarnya koper."
  },
  {
    audio: "Man: When does the statistics lecture start? Woman: Tuesdays and Thursdays, from 9 to 10:30 a.m. in room B2.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhen is the statistics lecture?",
    options: ["Senin dan Rabu pagi", "Selasa dan Kamis, 9-10:30 pagi", "Setiap Jumat sore", "Senin dan Kamis, 9-10:30"],
    answer: 1,
    explain: "Jadwalnya 'Tuesdays and Thursdays, from 9 to 10:30 a.m.'"
  },
  {
    audio: "Woman: I'm allergic to peanuts. Does this salad have any? Man: No, but I'll serve the sauce on the side so you can avoid the dressing.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhy is the sauce served separately?",
    options: ["Agar salad tidak basah", "Karena dia alergi dan bisa menghindari saus", "Sausnya hampir habis", "Itu permintaan restoran"],
    answer: 1,
    explain: "Saus terpisah supaya pelayan bisa 'avoid the dressing' karena alergi."
  },
  {
    audio: "Woman: How much is a full car wash? Man: Twenty dollars, and thirty-five if you add the interior cleaning.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow much is the wash with interior cleaning?",
    options: ["$20", "$35", "$15", "$55"],
    answer: 1,
    explain: "Dengan interior: 'thirty-five' dolar."
  },
  {
    audio: "Man: The music festival is this Saturday, and the line will be huge. Woman: Let's buy the tickets online tonight so we can skip the line.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhy do they want to buy tickets online?",
    options: ["Lebih murah", "Untuk menghindari antrian panjang", "Loket tutup Sabtu", "Tiket sudah hampir habis"],
    answer: 1,
    explain: "Tujuannya: 'so we can skip the line'."
  },
  {
    audio: "Woman: I keep making mistakes when I type. Man: Practice the home-row positions — it will improve in a week.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the man suggest?",
    options: ["Membeli keyboard baru", "Melatih posisi jari di home row", "Mengetik lebih lambat", "Menggunakan satu jari"],
    answer: 1,
    explain: "Saran: 'practice the home-row positions'."
  },
  {
    audio: "Man: Dad's condition is much better. The doctor says he can go home on Friday. Woman: That's wonderful news! I'll come to see him today.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhen can the father go home?",
    options: ["Hari ini", "Besok", "Hari Jumat", "Minggu depan"],
    answer: 2,
    explain: "Dokter memperbolehkan pulang 'on Friday'."
  },
  {
    audio: "Woman: Is there a direct flight to Singapore? Man: Only on Mondays and Fridays. Today's flight is at 3 p.m.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhen does the direct flight operate?",
    options: ["Setiap hari", "Senin dan Jumat", "Senin dan Rabu", "Jumat dan Minggu"],
    answer: 1,
    explain: "Penerbangan langsung hanya 'on Mondays and Fridays'."
  },
  {
    audio: "Woman: Where should we eat tonight? Man: Try the Italian place on Elm Street — their pizza is famous.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the man recommend?",
    options: ["Restoran Italia di Elm Street", "Restoran Jepang di Main Road", "Kantun kampus", "Warung dekat hotel"],
    answer: 0,
    explain: "Rekomendasinya: 'the Italian place on Elm Street'."
  },
  {
    audio: "Man: I didn't pass the driving test. Woman: Don't worry — you can take it again next month.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat can the man do?",
    options: ["Membeli SIM di luar negeri", "Mengikuti ujian ulang bulan depan", "Mengikuti kursus ulang", "Menunggu satu tahun"],
    answer: 1,
    explain: "Dia boleh 'take it again next month'."
  },
  {
    audio: "Woman: My phone screen is cracked. Man: I would recommend getting it replaced — it costs about fifty dollars.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow much does the repair cost?",
    options: ["Sekitar $5", "Sekitar $50", "Sekitar $150", "Sekitar $500"],
    answer: 1,
    explain: "Biaya penggantian layar: 'about fifty dollars'."
  },
  {
    audio: "Man: There's a two-dollar fine on your account for a late book. Woman: Oh no, I forgot. How can I pay it? Man: At the counter or online.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow much is the fine?",
    options: ["$1", "$2", "$5", "$10"],
    answer: 1,
    explain: "Dendanya 'two dollars'."
  },
  {
    audio: "Woman: It was so cold this morning, but the forecast says it will be warm by the afternoon. Man: Perfect — I'll take off my jacket.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat is the afternoon weather expected to be?",
    options: ["Dingin", "Hujan", "Hangat", "Berkabut"],
    answer: 2,
    explain: "Ramalan: 'it will be warm by the afternoon'."
  },
  {
    audio: "Man: The animal shelter needs volunteers on weekends. Woman: I'd love to help. How can I sign up? Man: Just email them before Friday.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow can the woman sign up?",
    options: ["Datang langsung ke tempat penampungan", "Mengirim email sebelum Jumat", "Memanggil telepon", "Mengisi formulir daring"],
    answer: 1,
    explain: "Cara daftar: 'just email them before Friday'."
  },
  {
    audio: "Woman: Which is faster to get downtown, the train or the bus? Man: The train — it takes twenty minutes, while the bus takes forty.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow long does the bus take?",
    options: ["20 menit", "30 menit", "40 menit", "1 jam"],
    answer: 2,
    explain: "Bus: 'takes forty minutes'."
  },
  {
    audio: "Woman: What should we get for their wedding? Man: How about a nice blender? They love cooking.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the man suggest as a gift?",
    options: ["Blender", "Setrika", "Peralatan makan", "Uang tunai"],
    answer: 0,
    explain: "Usulannya: 'a nice blender'."
  },
  {
    audio: "Man: That documentary about the ocean was amazing. Woman: Really? I've been meaning to see it. Is it still showing? Man: Yes, until Sunday.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nUntil when is the documentary showing?",
    options: ["Sampai hari ini", "Sampai Jumat", "Sampai Minggu", "Sampai akhir bulan"],
    answer: 2,
    explain: "Ditayangkan 'until Sunday'."
  },
  {
    audio: "Woman: I quit my job last month. Man: Wow! What are you doing now? Woman: I'm studying to become a nurse.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat is the woman doing now?",
    options: ["Bekerja di rumah sakit", "Belajar untuk menjadi perawat", "Membuka usaha sendiri", "Menganggur"],
    answer: 1,
    explain: "Dia kini 'studying to become a nurse'."
  },
  {
    audio: "Man: The elevator is out of order again, and there are six floors! Woman: Let's just take the stairs — it will keep us fit.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will they do?",
    options: ["Menunggu teknisi", "Naik tangga", "Pindah ke gedung lain", "Mencari tangga putar"],
    answer: 1,
    explain: "Mereka memutuskan 'take the stairs'."
  },
  {
    audio: "Woman: I'm sorry, the restaurant is completely full tonight. Man: No problem. Let's try the new place down the street.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the speakers do?",
    options: ["Pulang tanpa makan", "Mencoba restoran baru di ujung jalan", "Makan di restoran lain di seberang", "Mencari meja untuk besok"],
    answer: 1,
    explain: "Mereka beralih ke 'the new place down the street'."
  },
  {
    audio: "Man: When is the scholarship interview? Woman: Next Monday at 10 a.m. Please bring your ID and the completed form.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat should the man bring to the interview?",
    options: ["KTP dan formulir yang sudah diisi", "Surat pengantar sekolah", "Transkrip nilai", "Dua pas foto"],
    answer: 0,
    explain: "Yang harus dibawa: 'your ID and the completed form'."
  },
  {
    audio: "Woman: I'm soaked! It's pouring and I didn't bring an umbrella. Man: Come under the awning for a while — it might stop soon.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the man suggest?",
    options: ["Berlari ke halte", "Berteduh di bawah kanopi dulu", "Membeli payung", "Numpang di toko"],
    answer: 1,
    explain: "Saran: 'come under the awning for a while'."
  },
  {
    audio: "Man: All winter coats are thirty percent off this weekend only. Woman: My coat is old — I need a new one. How much is this one? Man: Normally eighty dollars, so with the discount it's fifty-six.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nHow much is the coat with the discount?",
    options: ["$30", "$48", "$56", "$80"],
    answer: 2,
    explain: "Harga setelah diskon 30%: 'fifty-six' dolar."
  },
  {
    audio: "Woman: I'm going to get lunch at the new salad place. Want to join? Man: I can't — I have to finish this report by noon.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhy can't the man join the woman?",
    options: ["Dia sedang sakit", "Dia harus menyelesaikan laporan sebelum siang", "Dia sudah makan", "Dia harus berangkat ke stasiun"],
    answer: 1,
    explain: "Dia harus 'finish this report by noon'."
  },
  {
    audio: "Man: Congratulations on graduating! Woman: Thank you! It took four years of hard work. Man: What are your plans? Woman: I'll work for a while, then apply for graduate school.",
    text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat are the woman's plans after graduation?",
    options: ["Langsung masuk pascasarjana", "Bekerja dulu, lalu mendaftar pascasarjana", "Buka usaha sendiri", "Liburan dulu tanpa rencana"],
    answer: 1,
    explain: "Rencananya: 'work for a while, then apply for graduate school'."
  }
];
