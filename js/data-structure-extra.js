/* ===================== Bank Soal Tambahan: Structure & Written Expression (+100 soal) =====================
   Format sama dengan bagian structure di data.js:
   - Soal pelengkapan: kalimat dengan __________, pilih kata/frasa yang tepat
   - Soal bagian salah: kalimat diberi label (A)-(D), options ["A","B","C","D"] + fixedOptions: true
   - answer : indeks jawaban benar (0-3)
   - explain : pembahasan (Bahasa Indonesia)
================================================================ */

const EXTRA_STRUCTURE = [
  /* ---------- Pelengkapan kalimat (1-60) ---------- */
  {
    text: "The company __________ its headquarters to a larger building in 2019.",
    options: ["moves","is moving","moved","has been moving"],
    answer: 2,
    explain: "Keterangan 'in 2019' adalah waktu lampau yang spesifik → simple past 'moved'."
  },
  {
    text: "She has worked at the hospital __________ she graduated in 2015.",
    options: ["for","from","during","since"],
    answer: 3,
    explain: "'Since' diikuti titik waktu (she graduated in 2015); 'for' diikuti durasi."
  },
  {
    text: "The report must __________ to the client by Friday.",
    options: ["send","sent","sending","be sent"],
    answer: 3,
    explain: "Laporan dikenai tindakan → modal passive: 'must be sent'."
  },
  {
    text: "__________ you review your notes every day, you will be ready for the test.",
    options: ["Unless","Although","Because","If"],
    answer: 3,
    explain: "Hubungan sebab-akibat kondisional: 'If you review..., you will be ready'."
  },
  {
    text: "She is the __________ candidate for the position; no one else has her experience.",
    options: ["good", "better", "best", "most good"],
    answer: 2,
    explain: "Perbandingan tertinggi (superlative) untuk satu orang: 'the best'."
  },
  {
    text: "By this time next year, the new library __________.",
    options: ["will be completed","has been completed","will have been completed","will complete"],
    answer: 2,
    explain: "'By this time next year' → future perfect; perpustakaan dikenai tindakan → passive: 'will have been completed'."
  },
  {
    text: "The scientist __________ a new method for purifying water last year.",
    options: ["has developed","develops","is developing","developed"],
    answer: 3,
    explain: "'Last year' → simple past 'developed' (bukan present perfect)."
  },
  {
    text: "We __________ to leave early because of the approaching storm.",
    options: ["decide","have decided","were deciding","decided"],
    answer: 3,
    explain: "Keputusan sudah diambil dalam situasi lampau → simple past 'decided'."
  },
  {
    text: "The children played __________ in the garden all afternoon.",
    options: ["happy", "happier", "happily", "happiness"],
    answer: 2,
    explain: "Membentuk kata kerja 'played' dibutuhkan adverb: 'happily'."
  },
  {
    text: "__________ the heavy fog, the flight was postponed.",
    options: ["Despite","Although","Because of","In spite"],
    answer: 2,
    explain: "Aneh: kabut adalah ALASAN penundaan → 'Because of + noun phrase'. 'Despite/Although' bermakna meskipun (tidak sesuai)."
  },
  {
    text: "I __________ been to Bali, so I can't tell you what it's like.",
    options: ["have", "have never", "never have", "had never"],
    answer: 1,
    explain: "Present perfect untuk pengalaman: 'I have never been to...'"
  },
  {
    text: "The manager __________ the staff to stay until the project was finished.",
    options: ["asks","is asking","asked","would ask"],
    answer: 2,
    explain: "Kejadian lampau (project was finished) → simple past 'asked'."
  },
  {
    text: "This is the restaurant __________ we celebrated my mother's birthday.",
    options: ["which", "who", "where", "what"],
    answer: 2,
    explain: "Kata ganti tempat dalam relative clause: 'where' (restoran = tempat perayaan)."
  },
  {
    text: "The number of cars on the highway __________ since the toll was raised.",
    options: ["have increased","increases","has increased","increasing"],
    answer: 2,
    explain: "'The number of + noun jamak' berpredikat TUNGGAL → 'has increased'."
  },
  {
    text: "If I __________ you, I would accept the offer.",
    options: ["am", "was", "were", "be"],
    answer: 2,
    explain: "Subjunctive untuk situasi khayalan: 'If I were you, I would...'"
  },
  {
    text: "The documentary was __________ informative than I expected.",
    options: ["most","much","more","very"],
    answer: 2,
    explain: "Ada 'than' → bentuk komparatif: 'more informative than'."
  },
  {
    text: "She is well known __________ her generous nature.",
    options: ["as", "for", "with", "by"],
    answer: 1,
    explain: "Idiom: 'be known for' (dikenal karena sesuatu)."
  },
  {
    text: "The concert will begin __________ the rain stops.",
    options: ["unless","although","as soon as","therefore"],
    answer: 2,
    explain: "Hubungan waktu: konser mulai 'as soon as' (segera setelah) hujan berhenti."
  },
  {
    text: "__________ the students passed the final examination.",
    options: ["Every","Each","None","All"],
    answer: 3,
    explain: "'All the students' (jamak) + kata kerja jamak 'passed'. 'Every/Each' berpredikat tunggal."
  },
  {
    text: "He speaks three languages __________ he traveled a lot as a child.",
    options: ["so", "because", "although", "but"],
    answer: 1,
    explain: "Alasan bisa berbicara tiga bahasa: 'because he traveled a lot'."
  },
  {
    text: "The government __________ new regulations to reduce air pollution.",
    options: ["introduce", "introduced", "introducing", "to introduce"],
    answer: 1,
    explain: "Kejadian selesai di masa lampau → simple past 'introduced'."
  },
  {
    text: "You __________ fasten your seatbelt while the plane is taking off.",
    options: ["can", "may", "must", "would"],
    answer: 2,
    explain: "Kewajiban/peraturan → 'must'."
  },
  {
    text: "The old bridge __________ last year to make way for the new one.",
    options: ["tore","is tearing","has tearing","was torn"],
    answer: 3,
    explain: "Jembatan dikenai tindakan → passive past: 'was torn (down)'."
  },
  {
    text: "She __________ her homework before dinner every evening.",
    options: ["finished","has finished","is finishing","finishes"],
    answer: 3,
    explain: "Kebiasaan rutin ('every evening') → simple present 'finishes'."
  },
  {
    text: "__________ carefully he listened, he couldn't understand the instructions.",
    options: ["Whatever","Whenever","Wherever","However"],
    answer: 3,
    explain: "Pola 'However + adj/adv + S + V, ...': 'However carefully he listened...'"
  },
  {
    text: "The meeting __________ until the chairman arrives.",
    options: ["postponed","has postponing","is postponing","was postponed"],
    answer: 3,
    explain: "Rapat dikenai penundaan → passive: 'was postponed'."
  },
  {
    text: "We haven't heard from her __________ she moved to another city.",
    options: ["for", "since", "from", "by"],
    answer: 1,
    explain: "'Since' + klausa waktu lampau: 'since she moved...'."
  },
  {
    text: "The committee __________ the results of the survey next week.",
    options: ["announces", "will announce", "has announced", "is announced"],
    answer: 1,
    explain: "'Next week' → simple future: 'will announce'."
  },
  {
    text: "__________ you had studied harder, you would have passed the exam.",
    options: ["If", "Unless", "Although", "Because"],
    answer: 0,
    explain: "Third conditional (kecelaan masa lampau): 'If + past perfect, would have + past participle'."
  },
  {
    text: "The two firms __________ a partnership to expand into Asia.",
    options: ["established", "establishes", "are establishing", "establishing"],
    answer: 0,
    explain: "Kejadian selesai → simple past 'established' (subjek jamak)."
  },
  {
    text: "Please __________ the volume; the baby is sleeping.",
    options: ["raise", "lower", "increase", "lift"],
    answer: 1,
    explain: "Bayi tidur → volume perlu diturunkan: 'lower the volume'."
  },
  {
    text: "There are __________ people in the office today; almost everyone is on vacation.",
    options: ["few", "a few", "many", "a lot"],
    answer: 0,
    explain: "Makna negatif (hampir tidak ada orang) → 'few' tanpa 'a'."
  },
  {
    text: "He has been working at the firm __________ 2015.",
    options: ["for", "since", "during", "while"],
    answer: 1,
    explain: "'Since 2015' = sejak titik waktu tertentu (present perfect continuous)."
  },
  {
    text: "The storm __________ severe damage to the coastal village.",
    options: ["caused", "made", "took", "gave"],
    answer: 0,
    explain: "Kolibokasi: 'cause damage to...' — menyebabkan kerusakan."
  },
  {
    text: "__________ breaks the law will be punished.",
    options: ["Who", "Whom", "Whoever", "Whose"],
    answer: 2,
    explain: "'Whoever' = 'siapa pun yang' berfungsi sebagai subjek klausa nomina."
  },
  {
    text: "The medicine should be taken __________ a meal.",
    options: ["before", "into", "beneath", "through"],
    answer: 0,
    explain: "Preposisi waktu yang tepat: 'before a meal' (sebelum makan)."
  },
  {
    text: "She __________ to learn the piano when she was five years old.",
    options: ["started", "start", "starts", "starting"],
    answer: 0,
    explain: "Kejadian lampau → simple past 'started'."
  },
  {
    text: "The train arrives __________ noon sharp.",
    options: ["in", "at", "on", "by"],
    answer: 1,
    explain: "Preposisi waktu: 'at noon' (tengah hari tepat)."
  },
  {
    text: "__________ the ticket price is high, the concert is worth attending.",
    options: ["Although", "Because", "Unless", "So"],
    answer: 0,
    explain: "Kontras: meskipun mahal, tetap worth it → 'Although'."
  },
  {
    text: "The company's profits __________ by 20 percent last quarter.",
    options: ["rose", "raised", "arose", "lifted"],
    answer: 0,
    explain: "'Rise' (naik sendiri, intransitif) vs 'raise' (mengangkat sesuatu): keuntungan naik sendiri → 'rose'."
  },
  {
    text: "I'd rather __________ at home tonight than go out in this weather.",
    options: ["stay", "to stay", "staying", "stayed"],
    answer: 0,
    explain: "Pola 'would rather + V1 (bare infinitive)': 'I'd rather stay...'"
  },
  {
    text: "The witness __________ the entire accident from his balcony.",
    options: ["saw", "looked", "watched", "observed"],
    answer: 0,
    explain: "Melihat tanpa sengaja/penginderaan: 'saw'. 'Watch' untuk menonton dengan sengaja."
  },
  {
    text: "The document needs __________ before it is signed by the director.",
    options: ["to be printed", "printed", "print", "to print"],
    answer: 0,
    explain: "'Need to be + past participle' untuk makna pasif: dokumen perlu dicetak (oleh orang lain)."
  },
  {
    text: "__________ does it take to fly from Jakarta to Singapore?",
    options: ["How long", "How often", "How far", "How much"],
    answer: 0,
    explain: "Menanyakan durasi penerbangan: 'How long does it take...?'"
  },
  {
    text: "Students __________ not use their phones during the examination.",
    options: ["should", "must", "can", "may"],
    answer: 1,
    explain: "Larangan tegas → 'must not'."
  },
  {
    text: "His explanation was so __________ that everyone understood immediately.",
    options: ["clear", "clearly", "cleared", "clarify"],
    answer: 0,
    explain: "'So + adjective + that' → dibutuhkan kata sifat 'clear'."
  },
  {
    text: "The famous painting __________ in a private gallery last month.",
    options: ["was exhibited", "exhibited", "has exhibited", "is exhibiting"],
    answer: 0,
    explain: "Lukisan dikenai tindakan → passive past: 'was exhibited'."
  },
  {
    text: "They __________ each other in the hallway and went their separate ways.",
    options: ["greeted", "greeting", "to greet", "greets"],
    answer: 0,
    explain: "Jajaran kata kerja lampau ('greeted' sejajar dengan 'went')."
  },
  {
    text: "The project __________ ahead of schedule thanks to the team's effort.",
    options: ["was completed", "completed", "has completed", "completes"],
    answer: 0,
    explain: "Proyek dikenai penyelesaian → passive: 'was completed'."
  },
  {
    text: "The news __________ over the radio this morning and shocked everyone.",
    options: ["was broadcast", "broadcasts", "has broadcast", "broadcasting"],
    answer: 0,
    explain: "Berita disiarkan (pasif) pagi ini → 'was broadcast'."
  },
  {
    text: "She apologized for __________ late to the meeting.",
    options: ["to be", "being", "be", "been"],
    answer: 1,
    explain: "Setelah kata kerja + preposisi ('for') → gerund: 'for being late'."
  },
  {
    text: "The __________ speed limit on the highway is 100 kilometers per hour.",
    options: ["minimum", "maximum", "smallest", "shortest"],
    answer: 1,
    explain: "Batas kecepatan TERTINGGI: 'maximum speed limit'."
  },
  {
    text: "I'm looking forward to __________ from you soon.",
    options: ["hearing", "hear", "heard", "be heard"],
    answer: 0,
    explain: "'Look forward to' — 'to' di sini preposisi → diikuti gerund: 'to hearing'."
  },
  {
    text: "The contract __________ between the two parties was signed yesterday.",
    options: ["negotiated", "negotiates", "negotiating", "to negotiate"],
    answer: 0,
    explain: "Reduced relative clause pasif: 'the contract (which was) negotiated between...'"
  },
  {
    text: "The teacher asked us __________ our answers before leaving the room.",
    options: ["to check", "check", "checking", "checked"],
    answer: 0,
    explain: "Kata kerja 'ask' diikuti objek + to-infinitive: 'asked us to check'."
  },
  {
    text: "This medicine is not __________ for children under six years old.",
    options: ["suitable", "suit", "suiting", "suits"],
    answer: 0,
    explain: "Setelah 'is not' dibutuhkan kata sifat: 'is not suitable' (tidak cocok)."
  },
  {
    text: "All __________ of the library must sign out their books at the desk.",
    options: ["visitors", "visitor", "visit", "visiting"],
    answer: 0,
    explain: "'All' + kata benda jamak: 'all visitors'."
  },
  {
    text: "By the time the ambulance arrived, the patient __________ consciousness.",
    options: ["had lost", "lost", "has lost", "loses"],
    answer: 0,
    explain: "Dua kejadian lampau; kehilangan kesadaran terjadi lebih dulu → past perfect 'had lost'."
  },
  {
    text: "The flight was canceled __________ the pilot's sudden illness.",
    options: ["due to", "because", "since", "although"],
    answer: 0,
    explain: "'Due to + noun phrase' (the pilot's illness). 'Because/since' harus diikuti klausa."
  },
  {
    text: "__________ he is only a beginner, he plays the guitar surprisingly well.",
    options: ["Although", "Because", "So", "Unless"],
    answer: 0,
    explain: "Kontras (pemula tapi jago) → 'Although'."
  },

  /* ---------- Mencari bagian yang salah (61-100) ---------- */
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) Each (B) of the students (C) have (D) their own notebook.",
    options: ["A", "B", "C", "D"],
    answer: 2,
    fixedOptions: true,
    explain: "'Each of + noun jamak' berpredikat tunggal → harus 'has', bukan 'have'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The more (B) you read, (C) the (D) much you learn.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "Pola 'The + komparatif, the + komparatif' → harus 'the more you learn'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) She has been (B) working here (C) since (D) five years.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "'Since' untuk titik waktu; durasi memakai 'for' → 'for five years'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The number of people (B) who attended (C) the conference (D) were over five hundred.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "'The number of' berpredikat tunggal → 'was over five hundred'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) He is (B) not only (C) a talented singer (D) but also dancer.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "Parallel structure: 'not only a talented singer but also A dancer' — artikel 'a' harus dipertahankan."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) She was (B) so tired (C) that (D) to fall asleep in class.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "'So...that' diikuti klausa (subjek + kata kerja): 'that she fell asleep in class'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) I look forward (B) to (C) receive (D) your reply soon.",
    options: ["A", "B", "C", "D"],
    answer: 2,
    fixedOptions: true,
    explain: "'Look forward to' diikuti gerund → 'to receiving your reply'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) Each (B) employee (C) receive (D) a bonus at the end of the year.",
    options: ["A", "B", "C", "D"],
    answer: 2,
    fixedOptions: true,
    explain: "'Each employee' subjek tunggal → 'receives'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The man (B) who (C) I met yesterday (D) is a engineer.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "Artikel sebelum kata berawalan bunyi vokal: 'an engineer'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) She ran (B) more (C) fast (D) than her sister does.",
    options: ["A", "B", "C", "D"],
    answer: 2,
    fixedOptions: true,
    explain: "Komparatif kata sifat pendek: 'faster', bukan 'more fast'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The experiment (B) was (C) conducteded (D) carefully by the team.",
    options: ["A", "B", "C", "D"],
    answer: 2,
    fixedOptions: true,
    explain: "Past participle 'conduct' adalah 'conducted' (tidak ada '-ed' ganda)."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) If I (B) was (C) you, (D) I would take the job.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "Subjunctive: 'If I were you...' (bukan 'was') untuk situasi khayalan."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The students are (B) looking forward (C) to (D) visit the museum.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "'Look forward to + gerund' → 'to visiting the museum'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) Hardly (B) we had arrived (C) when (D) the movie began.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "Setelah 'Hardly' di awal kalimat diperlukan inversion → 'had we arrived'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The news (B) were (C) spread (D) quickly throughout the city.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "'News' (kabar) bersifat tunggal → 'was spread'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) He has (B) been living (C) here (D) for since 2010.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "'For' dan 'since' tidak dipakai bersamaan → 'since 2010' (titik waktu)."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The more crowded (B) the city is, (C) the worse (D) the traffic.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "Pola 'the + komparatif, the + komparatif' membutuhkan klausa kedua: 'the worse the traffic is'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) She (B) don't (C) like (D) coffee at all.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "Subjek ketiga tunggal 'she' → 'doesn't'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The building (B) is (C) destroyed (D) in the earthquake last year.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "'Last year' → passive past: 'was destroyed'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The children (B) enjoys (C) playing (D) in the park.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "Subjek jamak 'the children' → kata kerja 'enjoy' (tanpa -s)."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) My brother, (B) which (C) lives in Bali, (D) is a teacher.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "Relative pronoun untuk orang: 'who', bukan 'which'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) She asked me (B) where (C) did I live (D) before.",
    options: ["A", "B", "C", "D"],
    answer: 2,
    fixedOptions: true,
    explain: "Indirect question memakai urutan kalimat biasa: 'where I lived before' (tanpa 'did' dan tanpa inversion)."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) Both (B) the manager (C) and (D) the employees was happy.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "'Both...and' membuat subjek jamak → 'were happy'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) I suggested (B) that he (C) to see (D) a doctor immediately.",
    options: ["A", "B", "C", "D"],
    answer: 2,
    fixedOptions: true,
    explain: "Setelah 'suggest that' → bare infinitive: 'that he see a doctor'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The data (B) from the survey (C) was (D) lost during the transfer.",
    options: ["A", "B", "C", "D"],
    answer: 2,
    fixedOptions: true,
    explain: "'Data' bentuk jamak dari 'datum' → 'were lost' (dalam bahasa formal)."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) She is (B) the most tallest (C) woman (D) in the office.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "Superlative tidak digandakan: 'the tallest', bukan 'the most tallest'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) He (B) works (C) here since (D) he was twenty.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "Bekerja sejak usia 20 dan masih berlanjut → present perfect: 'has worked'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The students (B) must (C) to submit (D) their assignments on time.",
    options: ["A", "B", "C", "D"],
    answer: 2,
    fixedOptions: true,
    explain: "Setelah modal 'must' langsung bare infinitive: 'must submit' (tanpa 'to')."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) Neither (B) answers (C) was (D) accepted by the board.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "'Neither' merujuk dua benda → kata benda tunggal: 'neither answer was accepted'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The painting (B) hanging (C) on the wall (D) were stolen last week.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "Subjek 'the painting' tunggal → 'was stolen'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) If she (B) had known (C) about the meeting, (D) she would come.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "Third conditional: 'would have come' (kecelaan lampau), bukan 'would come'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The government (B) have (C) announced (D) new tax rules.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "'The government' (lembaga) diperlakukan tunggal → 'has announced'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) He is used to (B) wake (C) up (D) very early every morning.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "'Be used to + gerund' (terbiasa dengan): 'used to waking up'. ('Used to + V1' = dahulu pernah.)"
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The less (B) you sleep, (C) the (D) tired you will feel.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "Pola 'the + komparatif, the + komparatif' → 'the more tired you will feel'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) She (B) got married (C) with (D) her cousin last year.",
    options: ["A", "B", "C", "D"],
    answer: 2,
    fixedOptions: true,
    explain: "Kolibokasi: 'get married TO someone'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The film (B) who (C) stars a famous actor (D) is very popular.",
    options: ["A", "B", "C", "D"],
    answer: 1,
    fixedOptions: true,
    explain: "Relative pronoun untuk benda (film): 'which', bukan 'who'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) We have (B) been waiting (C) here (D) since two hours.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "Durasi ('two hours') memakai 'for' → 'for two hours'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The weather is (B) more (C) cold (D) than it was yesterday.",
    options: ["A", "B", "C", "D"],
    answer: 2,
    fixedOptions: true,
    explain: "Komparatif kata sifat pendek: 'colder', bukan 'more cold'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) All (B) of the furniture (C) were (D) made in China.",
    options: ["A", "B", "C", "D"],
    answer: 2,
    fixedOptions: true,
    explain: "'Furniture' uncountable/tunggal → 'was made'."
  },
  {
    text: "Perhatikan kalimat berikut. Pilih bagian yang salah.\n\n(A) The company (B) founded (C) in 1990 (D) are still profitable today.",
    options: ["A", "B", "C", "D"],
    answer: 3,
    fixedOptions: true,
    explain: "Subjek 'the company' tunggal → 'is still profitable'."
  }
];
