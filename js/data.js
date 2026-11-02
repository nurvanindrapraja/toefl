/* ===================== Bank Soal TOEFL =====================
   Setiap soal:
   - text     : teks/pernyataan soal
   - audio    : (listening) naskah yang dibacakan TTS
   - options  : array pilihan A-D
   - answer   : indeks jawaban benar (0-3)
   - explain  : penjelasan singkat (Bahasa Indonesia)
   - passage  : (reading) teks bacaan, hanya untuk soal pertama tiap passage
================================================================ */

const SECTIONS = [
  {
    id: "listening",
    name: "Bagian 1: Listening Comprehension",
    desc: "Dengarkan percakapan pendek, lalu pilih jawaban yang paling tepat. Audio dapat diputar 3 kali.",
    time: 8 * 60, // detik
    sampleSize: 5, // jumlah soal yang diambil acak dari bank per sesi
    icon: "🎧",
    questions: [
      {
        audio: "Man: Could you tell me where the library is? Woman: Sure. It's right next to the post office, on Main Street.",
        text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhere is the library?",
        options: ["Di dalam kantor pos", "Di sebelah kantor pos", "Di pojok Main Street", "Di seberang kantor pos"],
        answer: 1,
        explain: "Wanita mengatakan pustaka ada 'right next to the post office' (tepat di sebelah kantor pos)."
      },
      {
        audio: "Woman: I'm sorry I'm late. The elevator was out of order, so I had to take the stairs. Man: That's okay. We just got here ourselves.",
        text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhy was the woman late?",
        options: ["Dia menumpang taksi yang lambat", "Lift rusak sehingga dia naik tangga", "Dia menunggu teman", "Jalanan macet"],
        answer: 1,
        explain: "Alasan keterlambatan wanita adalah 'the elevator was out of order' — lift rusak, sehingga dia harus naik tangga."
      },
      {
        audio: "Man: Would you like to join us for lunch in the cafeteria? Woman: I'd love to, but I have to meet my research advisor at noon.",
        text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat will the woman probably do?",
        options: ["Makan siang di kantin", "Menemui penelitiannya", "Menemui pembimbing penelitiannya", "Kembali ke kelas"],
        answer: 2,
        explain: "Meskipun ingin ikut, wanita itu harus 'meet my research advisor at noon', jadi yang paling mungkin dia lakukan adalah menemui pembimbingnya."
      },
      {
        audio: "Woman: Your term paper is due tomorrow at nine a.m. Man: I see. I was hoping you might give me an extension.",
        text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the man want?",
        options: ["Nilai yang lebih tinggi", "Perpanjangan waktu pengumpulan", "Topik tugas yang baru", "Untuk membatalkan tugas"],
        answer: 1,
        explain: "'Extension' artinya perpanjangan waktu. Mahasiswa berharap mendapat tambahan waktu untuk mengumpulkan makalah."
      },
      {
        audio: "Man: The concert starts at eight, but we should get there early if we want good seats. Woman: Good idea. I'll meet you at the entrance at seven.",
        text: "Dengarkan percakapan berikut, lalu jawab pertanyaannya.\n\nWhat does the man suggest?",
        options: ["Tiba sebelum konser dimulai", "Membeli tiket yang mahal", "Datang tepat pukul delapan", "Mengubah tempat nonton"],
        answer: 0,
        explain: "Pria menyarankan 'get there early' — datang lebih awal sebelum pukul delapan supaya dapat kursi yang baik."
      }
    ]
  },
  {
    id: "structure",
    name: "Bagian 2: Structure and Written Expression",
    desc: "Pilih jawaban yang melengkapi kalimat, atau tunjukkan bagian yang salah (A/B/C/D).",
    time: 12 * 60,
    sampleSize: 20,
    icon: "✏️",
    questions: [
      {
        text: "The new office policy __________ in effect last month.\n\n(Pilih kata yang tepat untuk melengkapi kalimat.)",
        options: ["was introduced", "introduced", "introducing", "to be introduced"],
        answer: 0,
        explain: "Keterangan waktu 'last month' menunjukkan lampau; subjek 'policy' dikenai tindakan → passive voice: 'was introduced'."
      },
      {
        text: "__________ the heavy rain, the outdoor concert continued as scheduled.",
        options: ["Because", "Despite", "Although", "Since"],
        answer: 1,
        explain: "Setelah 'despite' langsung diikuti kata benda/frasa noun phrase ('the heavy rain'). 'Although' dan 'because' diikuti klausa (subjek + kata kerja)."
      },
      {
        text: "One of the most important __________ of solar energy is that it is renewable.",
        options: ["advantage", "advantages", "advantageous", "advantageously"],
        answer: 1,
        explain: "'One of the + noun jamak' → harus 'advantages'. Kata benda tunggal (A) dan kata sifat/adv verbs (C, D) tidak tepat."
      },
      {
        text: "Before the experiment began, the scientist __________ all of the equipment carefully.",
        options: ["had checked", "checked", "has checked", "is checking"],
        answer: 0,
        explain: "Ada dua kejadian lampau; mengecek alat terjadi lebih dulu → past perfect 'had checked'."
      },
      {
        text: "Perhatikan kalimat berikut. Salah satu bagian (A), (B), (C), atau (D) tidak tepat. Pilih bagian yang salah.\n\n(A) The students (B) have studied (C) English (D) since two years.",
        options: ["A", "B", "C", "D"],
        answer: 3,
        explain: "'Since' diikuti titik waktu (since 2020), sedangkan rentang waktu memakai 'for' → 'for two years'."
      },
      {
        text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) Although (B) he is tired (C) but (D) he works every single day.",
        options: ["A", "B", "C", "D"],
        answer: 2,
        explain: "'Although' dan 'but' adalah dua konjungsi subordinating yang tidak boleh dipakai bersamaan dalam satu kalimat → hapus salah satunya. Bagian yang salah: (C) 'but'."
      },
      {
        text: "Each of the employees __________ given a copy of the annual report.",
        options: ["were", "was", "are", "have"],
        answer: 1,
        explain: "'Each of + noun jamak' berpredikat tunggal → 'was'. (Bandingkan: 'All of the employees were...')"
      },
      {
        text: "The quarterly report __________ to the board by the end of this week.",
        options: ["will be submitted", "will submit", "is submitting", "submits"],
        answer: 0,
        explain: "Laporan tidak meng-submit dirinya sendiri; perlu passive future: 'will be submitted'."
      },
      {
        text: "I wish I __________ more time to prepare for the examination.",
        options: ["have", "had", "will have", "would have"],
        answer: 1,
        explain: "'I wish + past simple' menyatakan harapan atas situasi yang tidak nyata saat ini → 'had'."
      },
      {
        text: "The book, __________ was published in 1990, is still one of the bestsellers in the country.",
        options: ["who", "which", "where", "what"],
        answer: 1,
        explain: "Non-defining relative clause untuk benda (book) memakai 'which'. 'Who' untuk orang, 'where' untuk tempat."
      },
      {
        text: "She is __________ intelligent student in her class.",
        options: ["a more", "the most", "more", "the more"],
        answer: 1,
        explain: "Perbandingan tertinggi (superlative) untuk kata sifat panjang: 'the most intelligent'."
      },
      {
        text: "__________ has the right to free public education in this country.",
        options: ["Everyone", "Everybody's", "All people", "Each people"],
        answer: 0,
        explain: "Kata kerja 'has' tunggal → subjek tunggal 'Everyone'. 'All people' butuh 'have'; 'each people' tidak gramatikal."
      },
      {
        text: "The more the pianist practiced, __________ her performance became.",
        options: ["good", "better", "the better", "best"],
        answer: 2,
        explain: "Pola 'The + komparatif, the + komparatif': 'The more ... , the better ...'."
      },
      {
        text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) Neither of the answers (B) are (C) correct (D) according to the manual.",
        options: ["A", "B", "C", "D"],
        answer: 1,
        explain: "'Neither of + noun jamak' berpredikat tunggal → harus 'is', bukan 'are'."
      },
      {
        text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) To pass the certification (B) you must (C) studied (D) hard for at least six months.",
        options: ["A", "B", "C", "D"],
        answer: 2,
        explain: "Setelah 'must' harus bare infinitive tanpa 'to' → 'study', bukan 'studied'."
      },
      {
        text: "Hardly __________ the office when the telephone rang.",
        options: ["I had reached", "I reached", "had I reached", "did I reach"],
        answer: 2,
        explain: "Setelah 'Hardly' di awal kalimat terjadi inverted word order dengan past perfect: 'Hardly had I reached...'."
      },
      {
        text: "The manager promised __________ the complete report to the client by Friday.",
        options: ["to send", "sending", "sent", "sends"],
        answer: 0,
        explain: "Kata kerja 'promise' diikuti infinitive 'to + V1': 'promised to send'."
      },
      {
        text: "__________ the instructions carefully before you operate the machine.",
        options: ["Read", "Reading", "To read", "Reads"],
        answer: 0,
        explain: "Kalimat perintah (imperative) diawali kata kerja bentuk dasar: 'Read the instructions...'"
      },
      {
        text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) Despite (B) of the bad weather (C) we went (D) hiking in the mountains.",
        options: ["A", "B", "C", "D"],
        answer: 1,
        explain: "'Despite' langsung diikuti noun phrase: 'Despite the bad weather'. Dengan 'of' harus 'In spite of the bad weather'."
      },
      {
        text: "The documentary was so __________ that the audience gave a ten-minute standing ovation.",
        options: ["interestingly", "interesting", "interest", "interests"],
        answer: 1,
        explain: "Pola 'so + adjective + that' → dibutuhkan kata sifat 'interesting' (bukan adverb, kata benda, atau kata kerja)."
      }
    ]
  },
  {
    id: "reading",
    name: "Bagian 3: Reading Comprehension",
    desc: "Bacalah setiap passage, lalu jawab pertanyaannya.",
    time: 15 * 60,
    sampleSize: 14, // target soal reading; passage tetap utuh (hasil ~14-18 soal)
    icon: "📖",
    passages: {
      p1: {
        title: "Passage 1 — The Honey Bee",
        text: "Honey bees live in highly organized colonies that can contain tens of thousands of individuals. Within a colony, each bee performs a specific role based on age: young workers clean the hive, feed the larvae, and regulate temperature, while older workers forage for nectar and pollen. The most remarkable behavior of honey bees is the waggle dance, a communication method in which a forager conveys the direction and distance of a food source relative to the sun. This dance allows the entire colony to coordinate efficiently, making the honey bee one of the most complex social insects on Earth."
      },
      p2: {
        title: "Passage 2 — The Printing Press",
        text: "Before the 1450s, books in Europe were copied by hand, a slow and expensive process that limited reading to the wealthy and the clergy. In about 1450, Johannes Gutenberg, a goldsmith from Mainz, developed a printing press that used movable metal type and oil-based ink. His invention made it possible to produce books quickly and at a fraction of the previous cost. As a result, knowledge that had once been guarded by a few institutions became widely available. Literacy rates rose, scientific ideas spread rapidly, and entire fields of learning were transformed. Historians often describe Gutenberg's press as the technology that set the modern world in motion."
      }
    },
    questions: [
      {
        passage: "p1",
        text: "According to Passage 1, the waggle dance allows a forager to communicate __________.",
        options: ["the temperature inside the hive", "the direction and distance of a food source", "the age of each worker bee", "the number of bees in the colony"],
        answer: 1,
        explain: "Paragraf menyatakan: 'a forager conveys the direction and distance of a food source relative to the sun'."
      },
      {
        passage: "p1",
        text: "It can be inferred from Passage 1 that the main purpose of the honey bee's division of labor is to __________.",
        options: ["increase the size of the hive", "allow the colony to function efficiently", "protect the bees from predators", "reduce the number of foragers"],
        answer: 1,
        explain: "Setiap peran (membersihkan sarang, memberi makan larva, mencari nektar) disebut memungkinkan koloni 'coordinate efficiently' → tujuan utamanya efisiensi koloni."
      },
      {
        passage: "p1",
        text: "The word 'complex' in the last sentence is closest in meaning to __________.",
        options: ["confusing", "simple", "sophisticated", "dangerous"],
        answer: 2,
        explain: "'Complex' di sini berarti rumit-teratur/tingkatannya tinggi → paling dekat dengan 'sophisticated' (canggih, berstruktur rumit)."
      },
      {
        passage: "p2",
        text: "According to Passage 2, before Gutenberg's invention, books in Europe were __________.",
        options: ["printed on paper in large quantities", "copied by hand and available only to the rich and clergy", "written exclusively in Latin by printers", "distributed by the government"],
        answer: 1,
        explain: "Kalimat pertama: 'books ... were copied by hand, a slow and expensive process that limited reading to the wealthy and the clergy'."
      },
      {
        passage: "p2",
        text: "Which of the following is mentioned in Passage 2 as a consequence of the printing press?",
        options: ["A decline in literacy rates", "The invention of oil-based ink", "The rapid spread of scientific ideas", "The closure of scientific institutions"],
        answer: 2,
        explain: "Passage menyebutkan 'scientific ideas spread rapidly' sebagai akibat dari menurunnya biaya dan naiknya produksi buku."
      },
      {
        passage: "p2",
        text: "The phrase 'set the modern world in motion' in the last sentence most probably means that the printing press __________.",
        options: ["physically moved cities in Europe", "started major changes that shaped the modern era", "made goldsmiths famous worldwide", "caused books to be sold internationally"],
        answer: 1,
        explain: "Kiasan ini bermakna: cetakan Gutenberg memicu rangkaian perubahan besar yang membentuk dunia modern."
      },
      {
        passage: "p2",
        text: "According to Passage 2, Gutenberg's printing press improved on hand-copying mainly by __________.",
        options: ["using only wooden type", "producing books faster and cheaper", "limiting books to the clergy", "introducing new languages"],
        answer: 1,
        explain: "'His invention made it possible to produce books quickly and at a fraction of the previous cost' → lebih cepat dan murah."
      }
    ]
  }
];
