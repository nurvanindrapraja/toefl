/* ===================== Bank Soal Tambahan: Reading Comprehension (+100 soal) =====================
   Format sama dengan bagian reading di data.js:
   - passages : objek { id: { title, text } } — id baru p3..p16 (p1-p2 ada di data.js)
   - questions : array soal; field passage: "p3" dst.
================================================================ */

const EXTRA_READING = {
  passages: {
    p3: {
      title: "Passage 3 — The History of Tea",
      text: "Tea is one of the world's oldest and most popular beverages. Although tea has been enjoyed for thousands of years, its story began in China. According to legend, in 2737 BC, Emperor Shennong was boiling water when leaves from a nearby wild tree drifted into his pot. The resulting infusion was pleasantly fragrant, and he drank it without ill effect — this is said to be the first cup of tea. Tea was originally used as a medicine before it became a daily drink. By the 9th century, tea culture had spread across East Asia. In Japan, drinking tea evolved into the formal tea ceremony, while in China it remained a more casual part of life. In the 1600s, Dutch traders brought tea to Europe, and it quickly became fashionable, especially in Britain. Today, more than two billion cups of tea are consumed every day, making it the most drunk beverage in the world after water."
    },
    p4: {
      title: "Passage 4 — Volcanoes",
      text: "Volcanoes are openings in the Earth's crust through which lava, ash, and hot gases escape. They are formed where tectonic plates meet or where one plate slides beneath another. When a plate sinks into the mantle, it melts, and the molten rock rises to the surface as magma. Volcanoes can be active, dormant, or extinct. Active volcanoes erupt regularly, while dormant ones have not erupted for a long time but may still do so. Although volcanic eruptions are destructive — they can bury towns, create tsunamis, and change the climate — they also have benefits. Volcanic ash enriches the soil, making it extremely fertile, which is why many communities farm near volcanoes. Geologists monitor volcanic activity using instruments that measure earthquakes and gas emissions, allowing them to warn people before an eruption."
    },
    p5: {
      title: "Passage 5 — The Early Internet",
      text: "The Internet began in the 1960s as a military research project. The first version, called ARPANET, connected four computers at universities and research centers in the United States. Its purpose was to allow researchers to share expensive computer resources and to create a network that would keep working even if part of it were destroyed. For decades, the network was used only by scientists, academics, and the government. Everything changed in the early 1990s with the invention of the World Wide Web, which let ordinary people browse information using simple programs called web browsers. The number of Internet users exploded: from a few million in 1995 to over a billion by 2005. Today, the Internet is used for almost everything — shopping, banking, education, and communication — and more than four billion people are online."
    },
    p6: {
      title: "Passage 6 — The Human Brain",
      text: "The human brain is the most complex organ in the body. It contains about 86 billion neurons, each connected to thousands of others by electrical signals. Despite making up only two percent of body weight, the brain consumes roughly twenty percent of the body's energy. Brain activity begins even before birth and continues throughout life. New connections can form in response to experience, a property called neuroplasticity, which is why learning never stops. The brain is divided into specialized regions: the cerebrum handles thinking and planning, the cerebellum controls balance, and the brainstem regulates automatic functions such as breathing and heartbeat. Damage to a specific region can impair a particular ability, which is how scientists mapped the brain. Even so, many questions remain — no one fully understands how physical processes give rise to consciousness."
    },
    p7: {
      title: "Passage 7 — The Silk Road",
      text: "The Silk Road was not a single road but a network of trade routes linking China to the Mediterranean for nearly two thousand years. Although it was named after the silk that Chinese traders sold to the west, caravans also carried spices, jade, glass, and precious metals. More important than the goods, however, was the exchange of ideas. Along the routes traveled merchants, monks, and soldiers who carried religions, languages, music, and technologies. Papermaking and gunpowder spread westward from China, while glassmaking and astronomy traveled east. The routes reached their peak between the 2nd and 14th centuries, when empires such as the Han, Roman, and Mongol helped keep them safe. As sea routes developed in the 15th century, overland trade declined. Today, the term 'Silk Road' is used again in a new project to build modern infrastructure across the same regions."
    },
    p8: {
      title: "Passage 8 — Recycling",
      text: "Recycling is the process of converting waste materials into new products. The idea is simple: materials such as paper, glass, aluminum, and plastic can be reused many times instead of being thrown away. Recycling saves natural resources, reduces pollution, and cuts the energy needed to make new products — an aluminum can, for example, requires ninety-five percent less energy to remake from scrap than to produce from raw ore. Despite these benefits, recycling has problems. Not all plastics can be recycled, and mixed waste is often contaminated. In many cities, less than half of recyclable material is actually collected. Success depends on both technology and habit: governments must provide convenient collection systems, and citizens must separate their waste correctly. The most effective strategy, experts agree, is to recycle as much as possible and waste as little as possible."
    },
    p9: {
      title: "Passage 9 — The History of Chocolate",
      text: "Long before chocolate became a sweet treat, it was a bitter drink. The first people to use cacao were the Olmecs of Mesoamerica, around 1500 BC. The Maya and later the Aztecs fermented, roasted, and ground cacao beans into a spicy, bitter beverage that was served at feasts and used as money. A handful of cacao beans could buy a turkey or a day's labor. When Spanish conquistadors arrived in the 16th century, they brought cacao to Europe. At first, few Europeans liked the bitter drink, but after sugar and milk were added, chocolate became a hit. By the 1800s, factories had made chocolate affordable, and the solid chocolate bar we know today was invented. Today, about three million metric tons of cocoa are produced each year, mostly in West Africa."
    },
    p10: {
      title: "Passage 10 — Bird Migration",
      text: "Every year, millions of birds travel thousands of kilometers between breeding grounds and wintering sites. The reasons are complex, but food is the main driver: insects and berries become scarce in winter, while milder regions offer plenty. Many birds navigate by the position of the sun and stars, and some also detect the Earth's magnetic field. Migration is exhausting: a bar-tailed godwit can fly over 11,000 kilometers nonstop from Alaska to New Zealand. To prepare, birds double or triple their body weight in fat before departure. Climate change is now disrupting these ancient journeys. Flowers bloom earlier, and the insects that hatch on them appear before the arriving birds, so some species arrive to find their food gone. Scientists worry that migration times may not be able to adapt quickly enough."
    },
    p11: {
      title: "Passage 11 — The Olympic Games",
      text: "The Olympic Games began in ancient Greece in 776 BC, when athletes competed in the village of Olympia in honor of the god Zeus. Originally, the only event was a footrace of about 200 meters, but over time running, wrestling, boxing, and chariot racing were added. Women were not allowed to compete — in fact, they could not even watch. The games were held every four years, a period called an Olympiad, and for a few days, warring city-states usually stopped fighting in a tradition known as the Olympic Truce. The ancient games ended in 393 AD when the Roman emperor closed the sanctuary. They were revived in 1896 in Athens by Pierre de Coubertin, a French educator who believed sport could promote international peace. Today, more than two hundred countries compete in over three hundred events, and the Games remain the world's largest sporting celebration."
    },
    p12: {
      title: "Passage 12 — The Deep Sea",
      text: "More than half of the human population has visited a mountain higher than Everest — yet few have seen the deepest part of the ocean. The deepest point, the Challenger Deep in the Mariana Trench, lies about 11,000 meters below the surface. The pressure there is over a thousand times greater than at sea level, the temperature hovers near freezing, and there is no sunlight at all. And yet life flourishes. Around hydrothermal vents — fissures in the seafloor that release superheated, mineral-rich water — thrive communities of tubeworms, crabs, and shrimp that were unknown to science before 1977. These creatures do not rely on the sun; instead, bacteria convert chemicals from the vents into energy, forming the base of a food chain that exists in total darkness. Because the deep sea is hard to reach and study, scientists believe most of its species have yet to be discovered."
    },
    p13: {
      title: "Passage 13 — The History of Money",
      text: "People have always needed a way to exchange goods. In early societies, people bartered — trading fish for shoes, for example — but bartering required a 'double coincidence of wants': both parties had to want what the other had. Shells, salt, and cattle served as early money because they were valuable and portable. The first true coins appeared in Lydia, in modern-day Turkey, around 600 BC: small pieces of a metal alloy stamped with official symbols that guaranteed their weight. Coins spread across the ancient world, and each new empire minted its own. Paper money appeared much later, in 7th-century China, where carrying heavy metal coins was inconvenient. Banknotes later reached Europe through Italian and Dutch banks. Today, most transactions are electronic, and some countries are moving toward digital-only currencies."
    },
    p14: {
      title: "Passage 14 — Sleep",
      text: "Sleep is not a passive state. During a normal night, the brain cycles through several stages: light sleep, deep sleep, and rapid eye movement (REM) sleep, in which most dreaming occurs. Each cycle lasts about ninety minutes, and most people complete four to six cycles per night. Deep sleep is when the body repairs tissue and strengthens the immune system; REM sleep is linked to memory and emotion. Skipping sleep has measurable costs. After one night without sleep, reaction time slows to the level of a legally drunk person; after several nights, the brain begins to lose the ability to regulate mood and judgment. Yet many people believe they have adapted to running on six hours — studies suggest they have not, simply unaware of their impairment. Experts recommend seven to nine hours for adults, and the quality of sleep matters as much as the quantity."
    },
    p15: {
      title: "Passage 15 — The History of Photography",
      text: "Photography changed the way humans see. Before the camera, the only way to record an image was to draw or paint it, a slow and expensive process. In 1826, a French inventor named Joseph Niepce made the first permanent photograph by exposing a pewter plate coated with a light-sensitive oil. The image, taken from a window in his estate, shows a roof and a yard in a blur that took eight hours to capture. Twenty years later, Louis Daguerre improved the process, cutting exposure time to minutes, and in 1839 the French government presented the daguerreotype to the world. Photographs of ordinary people followed quickly: shopkeepers posed with their wares, families gathered for formal portraits. By the late 1800s, George Eastman's Kodak camera let anyone take a snapshot with the famous slogan 'You press the button, we do the rest.' Today, most people take thousands of photos a year with phones, and photography is as much about memory as about art."
    },
    p16: {
      title: "Passage 16 — Coral Reefs",
      text: "Coral reefs are among the most productive ecosystems on Earth, covering less than one percent of the ocean floor yet supporting about a quarter of all marine species. Reefs are built by tiny animals called coral polyps, each of which secretes a hard calcium skeleton. Over centuries, millions of these skeletons accumulate into massive structures. Coral reefs depend on a partnership with microscopic algae that live inside their tissues: the algae photosynthesize and feed the coral, while the coral provides shelter and nutrients. This relationship is fragile. When ocean temperatures rise even slightly, corals expel their algae and turn white — a phenomenon called bleaching. If the stress continues, the coral starves and dies, and the reef collapses. Reefs also protect coastlines by absorbing wave energy, and they support fisheries that feed hundreds of millions of people. Yet one-third of the world's reefs have already been lost, and scientists warn that without rapid action on climate change, most of the rest could vanish by 2050."
    }
  },

  questions: [
    /* ---------- Passage 3: The History of Tea ---------- */
    {
      passage: "p3",
      text: "According to the passage, where did tea originate?",
      options: ["China","Japan","Britain","The Netherlands"],
      answer: 0,
      explain: "Paragraf 1: 'its story began in China'."
    },
    {
      passage: "p3",
      text: "The word 'infusion' in paragraph 1 is closest in meaning to __________.",
      options: ["a liquid made from leaves soaked in water","a kind of medicine","a type of wild tree","a boiling pot"],
      answer: 0,
      explain: "'Infusion' = hasil rendaman daun teh dalam air panas."
    },
    {
      passage: "p3",
      text: "According to the passage, tea was originally used as __________.",
      options: ["a daily drink", "a luxury item for emperors", "a medicine", "an offering to gods"],
      answer: 2,
      explain: "Paragraf 1: 'Tea was originally used as a medicine before it became a daily drink'."
    },
    {
      passage: "p3",
      text: "According to legend, the first cup of tea was drunk __________.",
      options: ["in 2737 BC","in 1600 AD","in the 9th century","in 1839 AD"],
      answer: 0,
      explain: "Legenda: Kaisar Shennong, tahun 2737 BC."
    },
    {
      passage: "p3",
      text: "It can be inferred from the passage that the Japanese tea ceremony is __________.",
      options: ["a formal ritual","a casual everyday habit","a military tradition","a commercial event"],
      answer: 0,
      explain: "Di Jepang, minum teh 'evolved into the formal tea ceremony' — menjadi ritual formal."
    },
    {
      passage: "p3",
      text: "The word 'casual' in paragraph 1 is closest in meaning to __________.",
      options: ["relaxed and informal", "expensive", "dangerous", "complicated"],
      answer: 0,
      explain: "'Casual' di sini bermakna santai/tidak formal, berlawanan dengan 'formal'."
    },
    {
      passage: "p3",
      text: "Which of the following is NOT stated in the passage?",
      options: ["Dutch traders brought tea to Europe", "Tea was originally used as a medicine", "Tea is now the most drunk beverage after water", "Tea was first cultivated as a commercial crop"],
      answer: 3,
      explain: "Tiga opsi pertama ada di teks; soal penanaman komersial pertama kali tidak disebutkan."
    },

    /* ---------- Passage 4: Volcanoes ---------- */
    {
      passage: "p4",
      text: "According to the passage, a volcano is __________.",
      options: ["an opening in the Earth's crust where lava and gases escape","a mountain made of metal","a large crater filled with water","a type of earthquake"],
      answer: 0,
      explain: "Definisi di kalimat pertama: 'openings in the Earth's crust through which lava, ash, and hot gases escape'."
    },
    {
      passage: "p4",
      text: "What happens when a tectonic plate sinks into the mantle?",
      options: ["It melts","It cools and hardens","It rises to the surface","It splits in two"],
      answer: 0,
      explain: "Paragraf 1: 'When a plate sinks into the mantle, it melts'."
    },
    {
      passage: "p4",
      text: "The word 'dormant' in paragraph 2 is closest in meaning to __________.",
      options: ["inactive for the time being","destroyed","extremely active","underground"],
      answer: 0,
      explain: "Gunung 'dormant' belum meletus dalam waktu lama tapi masih mungkin meletus — sementara tidak aktif."
    },
    {
      passage: "p4",
      text: "Which of the following is mentioned as a benefit of volcanoes?",
      options: ["They create tsunamis", "They bury towns", "They enrich the soil", "They change the climate"],
      answer: 2,
      explain: "Paragraf 3: 'Volcanic ash enriches the soil, making it extremely fertile'."
    },
    {
      passage: "p4",
      text: "It can be inferred that many communities farm near volcanoes because __________.",
      options: ["the soil there is very fertile", "it is close to cities", "volcanoes never erupt", "the land is cheap"],
      answer: 0,
      explain: "Teks: tanah vulkanis 'extremely fertile' → cocok untuk pertanian."
    },
    {
      passage: "p4",
      text: "According to the passage, geologists monitor volcanoes by __________.",
      options: ["measuring earthquakes and gas emissions","climbing the mountains","waiting for eruptions","reading ancient maps"],
      answer: 0,
      explain: "Paragraf terakhir: 'instruments that measure earthquakes and gas emissions'."
    },
    {
      passage: "p4",
      text: "The word 'they' in paragraph 3 ('they can bury towns') refers to __________.",
      options: ["volcanic eruptions","geologists","communities","volcanic ash"],
      answer: 0,
      explain: "Subjek yang membicarakan kemampuan 'membangun/merusak kota' adalah 'volcanic eruptions'."
    },

    /* ---------- Passage 5: The Early Internet ---------- */
    {
      passage: "p5",
      text: "What was the main purpose of ARPANET?",
      options: ["To share computer resources and survive partial failure","To help ordinary people shop online","To connect European universities","To replace the telephone"],
      answer: 0,
      explain: "Paragraf 1: berbagi sumber daya komputer dan 'keep working even if part of it were destroyed'."
    },
    {
      passage: "p5",
      text: "The word 'exploded' in paragraph 2 is closest in meaning to __________.",
      options: ["disappeared","became dangerous","increased dramatically","slowed down"],
      answer: 2,
      explain: "'The number of users exploded' = jumlah pengguna meningkat drastis."
    },
    {
      passage: "p5",
      text: "According to the passage, what changed the Internet for ordinary people?",
      options: ["ARPANET","Web browsers for scientists","The World Wide Web","Military funding"],
      answer: 2,
      explain: "Paragraf 2: 'Everything changed in the early 1990s with the invention of the World Wide Web'."
    },
    {
      passage: "p5",
      text: "It can be inferred that ARPANET was designed to __________.",
      options: ["be the cheapest network","connect four countries","keep functioning if part of it was damaged","store government secrets"],
      answer: 2,
      explain: "Tujuan: 'a network that would keep working even if part of it were destroyed'."
    },
    {
      passage: "p5",
      text: "According to the passage, how many people were online by 2005?",
      options: ["A few million","Two billion","Over one billion","Four billion"],
      answer: 2,
      explain: "'from a few million in 1995 to over a billion by 2005'."
    },
    {
      passage: "p5",
      text: "Which of the following is NOT mentioned as a use of the Internet today?",
      options: ["Shopping", "Education", "Communication", "Repairing automobiles"],
      answer: 3,
      explain: "Teks menyebut shopping, banking, education, communication — bukan memperbaiki mobil."
    },
    {
      passage: "p5",
      text: "The word 'network' in paragraph 1 refers to __________.",
      options: ["a group of musicians","a sports league","a system of connected computers","a family tree"],
      answer: 2,
      explain: "Dalam konteks, 'network' adalah kumpulan komputer yang saling terhubung."
    },

    /* ---------- Passage 6: The Human Brain ---------- */
    {
      passage: "p6",
      text: "According to the passage, how many neurons does the human brain contain?",
      options: ["About 86 million","About 2 billion","About 86 billion","About 20 billion"],
      answer: 2,
      explain: "Paragraf 1: 'about 86 billion neurons'."
    },
    {
      passage: "p6",
      text: "The term 'neuroplasticity' in the passage refers to __________.",
      options: ["the brain's ability to form new connections", "the size of the brain at birth", "brain damage after injury", "the speed of electrical signals"],
      answer: 0,
      explain: "'New connections can form in response to experience, a property called neuroplasticity'."
    },
    {
      passage: "p6",
      text: "According to the passage, the brainstem __________.",
      options: ["handles thinking and planning", "controls balance", "regulates automatic functions like breathing", "produces consciousness"],
      answer: 2,
      explain: "Paragraf 2: 'the brainstem regulates automatic functions such as breathing and heartbeat'."
    },
    {
      passage: "p6",
      text: "It can be inferred from the passage that the brain is __________.",
      options: ["a small user of the body's energy","the heaviest organ in the body","a large consumer of energy relative to its size","only active in adults"],
      answer: 2,
      explain: "Hanya 2% berat tubuh tapi memakai 20% energi → sangat boros energi relatif terhadap ukurannya."
    },
    {
      passage: "p6",
      text: "The word 'impair' in paragraph 2 is closest in meaning to __________.",
      options: ["improve","test","map","weaken or damage"],
      answer: 3,
      explain: "Kerusakan pada area otak dapat 'mengganggu/mengurangi' kemampuan tertentu."
    },
    {
      passage: "p6",
      text: "Which of the following is NOT a part of the brain mentioned in the passage?",
      options: ["The cerebrum", "The cerebellum", "The brainstem", "The spinal cord"],
      answer: 3,
      explain: "Teks menyebut cerebrum, cerebellum, dan brainstem — sumsum tulang belakang tidak disebut."
    },
    {
      passage: "p6",
      text: "According to the passage, what remains unexplained?",
      options: ["How neurons connect","How the brainstem works","Why the brain uses so little energy","How consciousness arises from physical processes"],
      answer: 3,
      explain: "Kalimat terakhir: 'no one fully understands how physical processes give rise to consciousness'."
    },

    /* ---------- Passage 7: The Silk Road ---------- */
    {
      passage: "p7",
      text: "According to the passage, the Silk Road was __________.",
      options: ["a single paved highway","a river in China","a maritime canal","a network of trade routes"],
      answer: 3,
      explain: "Kalimat pertama: 'not a single road but a network of trade routes'."
    },
    {
      passage: "p7",
      text: "According to the passage, what was MORE important than the goods traded?",
      options: ["The speed of the caravans","The size of the empires","The quality of the silk","The exchange of ideas"],
      answer: 3,
      explain: "Paragraf 2: 'More important than the goods... was the exchange of ideas'."
    },
    {
      passage: "p7",
      text: "The word 'caravans' in paragraph 1 refers to __________.",
      options: ["groups of traveling traders", "a type of silk fabric", "ancient ships", "religious festivals"],
      answer: 0,
      explain: "Karawan = kafilah pedagang yang menempuh perjalanan jauh bersama."
    },
    {
      passage: "p7",
      text: "Which technology spread WESTWARD from China according to the passage?",
      options: ["Glassmaking", "Astronomy", "Papermaking", "Irrigation"],
      answer: 2,
      explain: "Paragraf 2: 'Papermaking and gunpowder spread westward from China'."
    },
    {
      passage: "p7",
      text: "According to the passage, the routes reached their peak __________.",
      options: ["between the 2nd and 14th centuries", "in the 15th century", "after 1900", "during the Mongol invasion only"],
      answer: 0,
      explain: "'The routes reached their peak between the 2nd and 14th centuries'."
    },
    {
      passage: "p7",
      text: "It can be inferred that the Mongol Empire __________.",
      options: ["destroyed the Silk Road","banned silk trade","moved all trade to sea","helped keep the routes safe for trade"],
      answer: 3,
      explain: "Empire seperti Han, Romawi, dan Mongol 'helped keep them safe'."
    },
    {
      passage: "p7",
      text: "The word 'declined' in the last paragraph is closest in meaning to __________.",
      options: ["refused","improved","expanded","decreased"],
      answer: 3,
      explain: "'Overland trade declined' = perdagangan darat menurun."
    },

    /* ---------- Passage 8: Recycling ---------- */
    {
      passage: "p8",
      text: "According to the passage, recycling is __________.",
      options: ["burning waste for energy","burying waste in landfills","collecting waste for export","converting waste materials into new products"],
      answer: 3,
      explain: "Kalimat pertama: 'the process of converting waste materials into new products'."
    },
    {
      passage: "p8",
      text: "According to the passage, remaking an aluminum can from scrap requires __________ less energy than producing it from raw ore.",
      options: ["50 percent", "75 percent", "95 percent", "100 percent"],
      answer: 2,
      explain: "Paragraf 1: 'ninety-five percent less energy'."
    },
    {
      passage: "p8",
      text: "The word 'scrap' in paragraph 1 is closest in meaning to __________.",
      options: ["new raw ore","liquid waste","metal alloy","recycled material"],
      answer: 3,
      explain: "'Remake from scrap' = membuat ulang dari bahan daur ulang."
    },
    {
      passage: "p8",
      text: "Which of the following is a PROBLEM with recycling mentioned in the passage?",
      options: ["Paper cannot be recycled","Aluminum is too expensive","Citizens refuse to separate waste completely","Mixed waste is often contaminated"],
      answer: 3,
      explain: "Paragraf 2: 'mixed waste is often contaminated'."
    },
    {
      passage: "p8",
      text: "It can be inferred from the passage that successful recycling requires __________.",
      options: ["only better technology","banning all plastics","importing waste from other countries","cooperation between governments and citizens"],
      answer: 3,
      explain: "'Success depends on both technology and habit: governments must... and citizens must...'"
    },
    {
      passage: "p8",
      text: "According to experts, the most effective strategy is to __________.",
      options: ["recycle as much as possible and waste as little as possible", "throw away only recyclables", "build more landfills", "recycle only aluminum"],
      answer: 0,
      explain: "Kalimat terakhir merangkum strategi paling efektif."
    },
    {
      passage: "p8",
      text: "According to the passage, in many cities, how much of recyclable material is actually collected?",
      options: ["All of it", "More than half", "Less than half", "Only 5 percent"],
      answer: 2,
      explain: "'In many cities, less than half of recyclable material is actually collected'."
    },

    /* ---------- Passage 9: The History of Chocolate ---------- */
    {
      passage: "p9",
      text: "According to the passage, what was the original form of chocolate?",
      options: ["A sweet bar","A type of candy","A hot soup","A bitter drink"],
      answer: 3,
      explain: "Kalimat pertama: 'Long before chocolate became a sweet treat, it was a bitter drink'."
    },
    {
      passage: "p9",
      text: "Among the Aztecs, cacao beans were also used as __________.",
      options: ["medicine", "jewelry", "money", "paint"],
      answer: 2,
      explain: "Paragraf 1: 'served at feasts and used as money'."
    },
    {
      passage: "p9",
      text: "The word 'conquistadors' in paragraph 2 refers to __________.",
      options: ["European soldiers/explorers", "Maya farmers", "chocolate factory owners", "Spanish priests"],
      answer: 0,
      explain: "Konkistador = penakluk/penegak Spanyol yang tiba di Meksik pada abad ke-16."
    },
    {
      passage: "p9",
      text: "According to the passage, what made chocolate popular in Europe?",
      options: ["The addition of sugar and milk", "The invention of the factory", "The arrival of tourists", "The price drop"],
      answer: 0,
      explain: "'after sugar and milk were added, chocolate became a hit'."
    },
    {
      passage: "p9",
      text: "According to the passage, the solid chocolate bar was invented __________.",
      options: ["around 1500 BC", "in the 16th century", "by the 1800s", "in the 1900s"],
      answer: 2,
      explain: "'By the 1800s... the solid chocolate bar we know today was invented'."
    },
    {
      passage: "p9",
      text: "It can be inferred from the passage that early Europeans' reaction to chocolate was __________.",
      options: ["immediately enthusiastic","hostile","indifferent for centuries","lukewarm at first"],
      answer: 3,
      explain: "'At first, few Europeans liked the bitter drink' — reaksi awalnya kurang antusias."
    },
    {
      passage: "p9",
      text: "According to the passage, most cocoa today is produced in __________.",
      options: ["Mesoamerica", "Europe", "West Africa", "China"],
      answer: 2,
      explain: "Kalimat terakhir: 'mostly in West Africa'."
    },

    /* ---------- Passage 10: Bird Migration ---------- */
    {
      passage: "p10",
      text: "According to the passage, what is the MAIN driver of bird migration?",
      options: ["Temperature alone","Daylight changes","Predators","Food availability"],
      answer: 3,
      explain: "Paragraf 1: 'food is the main driver'."
    },
    {
      passage: "p10",
      text: "How do many birds navigate during migration?",
      options: ["Only by landmarks","By following rivers","By flying in straight lines","By the sun, stars, and in some cases the magnetic field"],
      answer: 3,
      explain: "Paragraf 1: 'navigate by the position of the sun and stars, and some also detect the Earth's magnetic field'."
    },
    {
      passage: "p10",
      text: "The word 'milder' in paragraph 1 is closest in meaning to __________.",
      options: ["colder","wetter","darker","warmer"],
      answer: 3,
      explain: "'Milder regions' = daerah yang cuacanya lebih hangat saat musim dingin."
    },
    {
      passage: "p10",
      text: "According to the passage, a bar-tailed godwit can fly nonstop for __________.",
      options: ["over 11,000 kilometers", "about 1,000 kilometers", "only a few hundred kilometers", "less than one day"],
      answer: 0,
      explain: "Paragraf 1: 'can fly over 11,000 kilometers nonstop'."
    },
    {
      passage: "p10",
      text: "Why do birds gain extra weight before departure?",
      options: ["To attract mates","To protect against cold only","Because food is scarce at destination","Fat serves as fuel for the long flight"],
      answer: 3,
      explain: "Lemak ekstra ('double or triple their body weight in fat') adalah bahan bakar untuk perjalanan panjang."
    },
    {
      passage: "p10",
      text: "According to the passage, what problem does climate change create for migrating birds?",
      options: ["Nests are destroyed","The magnetic field is changing","Breeding grounds are moving north","Insects appear before the birds arrive"],
      answer: 3,
      explain: "Paragraf 2: 'the insects that hatch on them appear before the arriving birds'."
    },
    {
      passage: "p10",
      text: "It can be inferred from the passage that the godwit's nonstop flight __________.",
      options: ["lasts only a few hours","always ends in New Zealand","requires frequent stops","lasts several days without rest"],
      answer: 3,
      explain: "Terbang 11.000 km nonstop secara fisika berarti berlangsung beberapa hari tanpa istirahat."
    },

    /* ---------- Passage 11: The Olympic Games ---------- */
    {
      passage: "p11",
      text: "According to the passage, the ancient Olympic Games began __________.",
      options: ["in 1896 AD", "in 393 AD", "in 776 BC", "in 2000 BC"],
      answer: 2,
      explain: "Kalimat pertama: 'began in ancient Greece in 776 BC'."
    },
    {
      passage: "p11",
      text: "What was the ONLY event in the original ancient Games?",
      options: ["Wrestling","Chariot racing","Boxing","A footrace of about 200 meters"],
      answer: 3,
      explain: "Paragraf 1: 'the only event was a footrace of about 200 meters'."
    },
    {
      passage: "p11",
      text: "According to the passage, an 'Olympiad' is __________.",
      options: ["a type of sport","a village in Greece","a religious festival","a period of four years"],
      answer: 3,
      explain: "'The games were held every four years, a period called an Olympiad'."
    },
    {
      passage: "p11",
      text: "The word 'Truce' in paragraph 1 is closest in meaning to __________.",
      options: ["a battle", "an agreement to stop fighting", "a celebration", "a treaty of alliance"],
      answer: 1,
      explain: "'Olympic Truce' = gencatan senjata sementara saat Olimpiade berlangsung."
    },
    {
      passage: "p11",
      text: "Who revived the modern Olympic Games?",
      options: ["A Roman emperor", "Joseph Niepce", "Pierre de Coubertin", "The Greek government"],
      answer: 2,
      explain: "Paragraf 2: 'revived in 1896 in Athens by Pierre de Coubertin'."
    },
    {
      passage: "p11",
      text: "It can be inferred from the passage that the ancient Games __________.",
      options: ["were purely athletic competitions", "had a religious purpose", "were open to all women", "took place in Rome"],
      answer: 1,
      explain: "Kompetisi diadakan 'in honor of the god Zeus' → memiliki tujuan keagamaan."
    },
    {
      passage: "p11",
      text: "Which of the following is NOT stated in the passage?",
      options: ["The games were held every four years", "Women could not watch in ancient times", "The ancient games ended in 393 AD", "The first modern games were held in Paris"],
      answer: 3,
      explain: "Olimpiade modern pertama diadakan di Athena (1896), bukan Paris — tiga opsi lainnya disebut teks."
    },

    /* ---------- Passage 12: The Deep Sea ---------- */
    {
      passage: "p12",
      text: "According to the passage, the Challenger Deep is __________.",
      options: ["the highest mountain", "the deepest point of the ocean", "a type of submarine", "a volcanic island"],
      answer: 1,
      explain: "Paragraf 1: 'The deepest point, the Challenger Deep in the Mariana Trench'."
    },
    {
      passage: "p12",
      text: "Which of the following describes conditions at the bottom of the Mariana Trench?",
      options: ["Hot, bright, low pressure", "High pressure, near freezing, no sunlight", "Moderate pressure and warm water", "Sunlight and mild temperatures"],
      answer: 1,
      explain: "Paragraf 1: tekanan >1000×, suhu mendekati beku, dan tidak ada cahaya."
    },
    {
      passage: "p12",
      text: "The word 'flourishes' in paragraph 1 is closest in meaning to __________.",
      options: ["disappears", "thrives or grows well", "freezes", "sinks"],
      answer: 1,
      explain: "'Life flourishes' = kehidupan tumbuh/subur meskipun kondisinya ekstrem."
    },
    {
      passage: "p12",
      text: "According to the passage, what provides the base of the food chain around hydrothermal vents?",
      options: ["Sunlight", "Plankton from the surface", "Bacteria converting vent chemicals", "Dead fish"],
      answer: 2,
      explain: "Paragraf 2: 'bacteria convert chemicals from the vents into energy, forming the base of a food chain'."
    },
    {
      passage: "p12",
      text: "According to the passage, the communities around hydrothermal vents were unknown to science before __________.",
      options: ["1826", "1900", "1977", "2005"],
      answer: 2,
      explain: "'...that were unknown to science before 1977'."
    },
    {
      passage: "p12",
      text: "It can be inferred from the passage that __________.",
      options: ["all deep-sea species have been catalogued", "most deep-sea species are still undiscovered", "the deep sea has no food chains", "deep-sea creatures rely on sunlight"],
      answer: 1,
      explain: "Kalimat terakhir: 'scientists believe most of its species have yet to be discovered'."
    },
    {
      passage: "p12",
      text: "The word 'there' in paragraph 1 ('The pressure there...') refers to __________.",
      options: ["at sea level", "at the deepest point of the ocean", "in the atmosphere", "on the seafloor near the shore"],
      answer: 1,
      explain: "'There' merujuk pada Challenger Deep, titik terdalam lautan."
    },

    /* ---------- Passage 13: The History of Money ---------- */
    {
      passage: "p13",
      text: "According to the passage, what problem did bartering have?",
      options: ["It required a double coincidence of wants", "Coins were too heavy", "People did not trust each other", "It was illegal in early societies"],
      answer: 0,
      explain: "Paragraf 1: barter butuh 'double coincidence of wants' — kedua pihak harus menginginkan barang satu sama lain."
    },
    {
      passage: "p13",
      text: "According to the passage, the first true coins appeared __________.",
      options: ["in 7th-century China", "around 600 BC in Lydia", "in 16th-century Europe", "in ancient Rome"],
      answer: 1,
      explain: "Paragraf 1: 'The first true coins appeared in Lydia... around 600 BC'."
    },
    {
      passage: "p13",
      text: "The word 'minted' in paragraph 1 is closest in meaning to __________.",
      options: ["designed", "produced or made (coins)", "painted", "distributed"],
      answer: 1,
      explain: "'Minted' = memproduksikan/kemirkan koin."
    },
    {
      passage: "p13",
      text: "According to the passage, why did paper money appear in China?",
      options: ["To replace shells", "Because carrying heavy metal coins was inconvenient", "To pay soldiers", "Because paper was cheaper than metal"],
      answer: 1,
      explain: "Paragraf 2: 'where carrying heavy metal coins was inconvenient'."
    },
    {
      passage: "p13",
      text: "According to the passage, what guaranteed a coin's value?",
      options: ["Its size", "Official symbols guaranteeing its weight", "The king's signature", "Its color"],
      answer: 1,
      explain: "'stamped with official symbols that guaranteed their weight'."
    },
    {
      passage: "p13",
      text: "It can be inferred from the passage that early money items (shells, salt, cattle) were chosen because __________.",
      options: ["they were rare in nature", "they were valuable and portable", "they were easy to counterfeit", "they lasted forever"],
      answer: 1,
      explain: "Paragraf 1: 'because they were valuable and portable'."
    },
    {
      passage: "p13",
      text: "According to the passage, what is the current trend in money?",
      options: ["Return to bartering", "Mostly electronic transactions and digital currencies", "More paper money", "Only gold coins"],
      answer: 1,
      explain: "Kalimat terakhir: 'most transactions are electronic... moving toward digital-only currencies'."
    },

    /* ---------- Passage 14: Sleep ---------- */
    {
      passage: "p14",
      text: "According to the passage, most dreaming occurs during __________.",
      options: ["light sleep", "deep sleep", "REM sleep", "naps only"],
      answer: 2,
      explain: "Paragraf 1: 'REM sleep, in which most dreaming occurs'."
    },
    {
      passage: "p14",
      text: "According to the passage, each sleep cycle lasts about __________.",
      options: ["45 minutes", "90 minutes", "3 hours", "6 hours"],
      answer: 1,
      explain: "Paragraf 1: 'Each cycle lasts about ninety minutes'."
    },
    {
      passage: "p14",
      text: "The word 'impairment' in the last paragraph is closest in meaning to __________.",
      options: ["improvement", "reduced ability", "awareness", "fatigue only"],
      answer: 1,
      explain: "'Unaware of their impairment' = tidak menyadari penurunan kemampuannya."
    },
    {
      passage: "p14",
      text: "According to the passage, deep sleep helps the body to __________.",
      options: ["dream vividly", "repair tissue and strengthen the immune system", "increase body weight", "regulate memory only"],
      answer: 1,
      explain: "Paragraf 1: 'Deep sleep is when the body repairs tissue and strengthens the immune system'."
    },
    {
      passage: "p14",
      text: "It can be inferred from the passage that people who think they have adapted to little sleep __________.",
      options: ["are actually fine", "are impaired but unaware of it", "need more caffeine", "sleep better at night"],
      answer: 1,
      explain: "'studies suggest they have not, simply unaware of their impairment'."
    },
    {
      passage: "p14",
      text: "According to experts, adults need __________ of sleep.",
      options: ["4-5 hours", "6 hours exactly", "7-9 hours", "10-12 hours"],
      answer: 2,
      explain: "Kalimat terakhir: 'Experts recommend seven to nine hours for adults'."
    },
    {
      passage: "p14",
      text: "Which of the following is NOT stated in the passage?",
      options: ["Most dreaming occurs in REM sleep", "People complete 4-6 cycles per night", "Deep sleep strengthens the immune system", "Caffeine improves sleep quality"],
      answer: 3,
      explain: "Kafein tidak dibahas dalam passage; tiga opsi lainnya disebutkan."
    },

    /* ---------- Passage 15: The History of Photography ---------- */
    {
      passage: "p15",
      text: "According to the passage, the first permanent photograph was made __________.",
      options: ["in 1839 by Daguerre", "in 1826 by Joseph Niepce", "in the late 1800s by Eastman", "in 1900 by an unknown inventor"],
      answer: 1,
      explain: "Paragraf 1: 'In 1826... Joseph Niepce made the first permanent photograph'."
    },
    {
      passage: "p15",
      text: "How long did Niepce's exposure take?",
      options: ["Eight minutes", "Eight hours", "Eight days", "Eight seconds"],
      answer: 1,
      explain: "Paragraf 1: 'a blur that took eight hours to capture'."
    },
    {
      passage: "p15",
      text: "In the passage, 'exposure' refers to __________.",
      options: ["the time the plate was exposed to light", "a camera brand", "a printing technique", "a chemical bath"],
      answer: 0,
      explain: "Exposure = lama plat terkena cahaya untuk merekam gambar."
    },
    {
      passage: "p15",
      text: "According to the passage, what did Louis Daguerre improve?",
      options: ["The color of photographs", "He cut exposure time to minutes", "The size of cameras", "The cost of film"],
      answer: 1,
      explain: "Paragraf 1: 'Louis Daguerre improved the process, cutting exposure time to minutes'."
    },
    {
      passage: "p15",
      text: "The slogan 'You press the button, we do the rest' suggests that __________.",
      options: ["Kodak made photography easy for ordinary people", "Photographs were developed in a week", "Only professionals could use Kodak", "Cameras were very expensive"],
      answer: 0,
      explain: "Slogan itu menekankan kemudahan: pengguna cukup menekan tombol, sisanya ditangani perusahaan."
    },
    {
      passage: "p15",
      text: "It can be inferred from the passage that before photography, recording an image __________.",
      options: ["was fast and cheap", "was slow and expensive", "did not exist at all", "was only done by machines"],
      answer: 1,
      explain: "Paragraf 1: 'a slow and expensive process' (melukis/menggambar)."
    },
    {
      passage: "p15",
      text: "According to the passage, today photography is described as __________.",
      options: ["only an art", "only a hobby", "as much about memory as about art", "a dying tradition"],
      answer: 2,
      explain: "Kalimat terakhir: 'photography is as much about memory as about art'."
    },

    /* ---------- Passage 16: Coral Reefs (9 soal) ---------- */
    {
      passage: "p16",
      text: "According to the passage, coral reefs cover __________ of the ocean floor.",
      options: ["less than one percent", "about one quarter", "half", "more than half"],
      answer: 0,
      explain: "Kalimat pertama: 'covering less than one percent of the ocean floor'."
    },
    {
      passage: "p16",
      text: "According to the passage, coral reefs are built by __________.",
      options: ["large fish", "rocks from the seafloor", "tiny animals called coral polyps", "algae only"],
      answer: 2,
      explain: "Paragraf 1: 'Reefs are built by tiny animals called coral polyps'."
    },
    {
      passage: "p16",
      text: "The word 'secretes' in paragraph 1 is closest in meaning to __________.",
      options: ["produces", "loses", "breaks", "absorbs"],
      answer: 0,
      explain: "Polip 'secretes a hard calcium skeleton' = menghasilkan kerangka kapur."
    },
    {
      passage: "p16",
      text: "According to the passage, what do the microscopic algae provide for the coral?",
      options: ["Shelter", "Food through photosynthesis", "Salt", "Oxygen only"],
      answer: 1,
      explain: "Paragraf 2: 'the algae photosynthesize and feed the coral'."
    },
    {
      passage: "p16",
      text: "According to the passage, coral bleaching is caused by __________.",
      options: ["pollution from plastic", "a slight rise in ocean temperatures", "too many tourists", "excessive rainfall"],
      answer: 1,
      explain: "Paragraf 2: 'When ocean temperatures rise even slightly, corals expel their algae and turn white'."
    },
    {
      passage: "p16",
      text: "It can be inferred from the passage that if corals lose their algae and the stress continues, __________.",
      options: ["they grow faster", "they starve and die", "they change color permanently", "they move to deeper water"],
      answer: 1,
      explain: "'If the stress continues, the coral starves and dies, and the reef collapses'."
    },
    {
      passage: "p16",
      text: "According to the passage, how do reefs protect coastlines?",
      options: ["By absorbing wave energy", "By producing sand", "By attracting fish away from shore", "By cooling the water"],
      answer: 0,
      explain: "Paragraf 3: 'Reefs also protect coastlines by absorbing wave energy'."
    },
    {
      passage: "p16",
      text: "The word 'they' in paragraph 3 ('...and they support fisheries') refers to __________.",
      options: ["the algae", "the corals only", "the reefs", "the waves"],
      answer: 2,
      explain: "'They' merujuk pada terumbu karang (reefs) yang mendukung perikanan."
    },
    {
      passage: "p16",
      text: "According to scientists, what could happen to most of the world's reefs by 2050?",
      options: ["They will double in size", "They could vanish without rapid climate action", "They will move to polar seas", "They will become fully artificial"],
      answer: 1,
      explain: "Kalimat terakhir: 'without rapid action on climate change, most of the rest could vanish by 2050'."
    }
  ]
};
