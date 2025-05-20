// Daftar dosa dan skor masing-masing
export interface DosaItem {
    id: string;
    question: string;
    score: number;
  }

  export const checkboxDosaList: DosaItem[] = [
    { id: "berbohong", question: "Apakah kamu pernah berbohong?", score: 20 },
    { id: "mencuri", question: "Apakah kamu pernah mencuri atau maling?", score: 30 },
    { id: "filmnonton", question: "Apakah kamu pernah menonton film haram?", score: 40 },
    { id: "selingkuh", question: "Apakah kamu pernah selingkuh atau berzina?", score: 180 }, // Diperbarui: Skor dinaikkan karena dosa besar
    { id: "pacaran", question: "Apakah kamu pernah pacaran?", score: 25 },
    { id: "fitnah", question: "Apakah kamu pernah memfitnah atau menuduh orang lain?", score: 35 }, // Diperbarui
    { id: "mabuk", question: "Apakah kamu pernah mabuk atau minum alkohol?", score: 60 }, // Diperbarui: Skor dinaikkan sedikit
    { id: "korupsi", question: "Apakah kamu pernah korupsi?", score: 150 },
    { id: "narkoba", question: "Apakah kamu pernah memakai narkoba?", score: 100 },
    { id: "membunuh", question: "Apakah kamu pernah membunuh?", score: 150 },
    { id: "bully", question: "Apakah kamu pernah membully atau merundung orang lain?", score: 40 }, // Diperbarui
    { id: "durhaka", question: "Apakah kamu pernah durhaka atau melawan orang tua?", score: 60 },
    { id: "syirik", question: "Apakah kamu pernah menyekutukan Allah (syirik)?", score: 200 }, // Dosa baru: Skor tertinggi
    { id: "riba", question: "Apakah kamu pernah terlibat riba (bunga/rentenir)?", score: 80 }, // Dosa baru
    { id: "sihir", question: "Apakah kamu pernah melakukan sihir atau perdukunan?", score: 220 }, // Dosa baru: Skor dinaikkan, terkait syirik
    { id: "ghibah", question: "Apakah kamu pernah menggunjing (ghibah) atau membicarakan keburukan orang lain?", score: 30 }, // Dosa baru
    { id: "namimah", question: "Apakah kamu pernah mengadu domba (namimah)?", score: 45 }, // Dosa baru
    { id: "saksi_palsu", question: "Apakah kamu pernah memberikan kesaksian palsu?", score: 70 }, // Dosa baru
    { id: "makan_harta_yatim", question: "Apakah kamu pernah memakan harta anak yatim secara zalim?", score: 120 }, // Dosa baru
    { id: "tinggalkan_shalat", question: "Apakah kamu pernah sengaja meninggalkan shalat fardhu?", score: 120 }, // Dosa baru: Skor dinaikkan, dosa besar terhadap Allah
    { id: "tinggalkan_puasa", question: "Apakah kamu pernah sengaja meninggalkan puasa Ramadhan?", score: 100 }, // Dosa baru: Skor dinaikkan
    { id: "judi", question: "Apakah kamu pernah berjudi?", score: 60 }, // Dosa baru
    { id: "kikir", question: "Apakah kamu terlalu kikir atau pelit?", score: 20 }, // Dosa baru
    { id: "takabur", question: "Apakah kamu pernah sombong atau takabur?", score: 55 }, // Dosa baru
    { id: "merokok", question: "Apakah kamu pernah merokok?", score: 25 }, // Dosa baru
  ];

  // Keyword untuk analisis text
  export const textKeywords: Record<string, number> = {
    "nyolong": 30,
    "maling": 30,
    "mencuri": 30,
    "ngambil barang orang": 30, // Variasi
    "rampok": 30, // Variasi
    "curi": 30, // Variasi
    "nyuri": 30, // Variasi typo/slang
    "kemalingan": 30, // Variasi (meskipun pasif, bisa mengindikasikan kejadian)
    "ngutil": 30, // Variasi slang

    "bohong": 20,
    "berbohong": 20,
    "dusta": 20, // Variasi
    "ngibul": 20, // Variasi
    "ngebohong": 20, // Variasi
    "hoax": 20, // Variasi (tergantung konteks, tapi sering terkait kebohongan)
    "tipu": 20, // Variasi
    "menipu": 20, // Variasi

    "nonton film haram": 40,
    "film haram": 40,
    "blufilm": 40,
    "film porno": 40, // Variasi
    "nonton bokep": 40, // Variasi
    "konten dewasa": 40, // Variasi
    "video porno": 40, // Variasi
    "nonton bf": 40, // Variasi slang
    "nonton 18+": 40, // Variasi slang

    "selingkuh": 180, // Diperbarui
    "berzinah": 180, // Diperbarui
    "zina": 180, // Variasi, Diperbarui
    "main serong": 180, // Variasi, Diperbarui
    "tidur sama bukan istri": 180, // Variasi, Diperbarui
    "tidur sama bukan suami": 180, // Variasi, Diperbarui
    "hubungan gelap": 180, // Variasi, Diperbarui
    "kumpul kebo": 180, // Variasi slang, Diperbarui
    "perzinahan": 180, // Variasi, Diperbarui
    "maksiat": 50, // Variasi (skor lebih rendah karena umum)
    "bermaksiat": 50, // Variasi (skor lebih rendah karena umum)

    "pacaran": 25,
    "pacaran beda agama": 35, // Variasi dengan skor berbeda? (opsional)
    "pegangan tangan sama pacar": 25, // Variasi
    "pacaran di luar nikah": 25, // Variasi
    "berpacaran": 25, // Variasi

    "fitnah": 35,
    "memfitnah": 35,
    "nuduh orang": 35, // Variasi
    "nyebar hoax": 35, // Variasi (overlap dengan bohong, tapi bisa dibiarkan)
    "menuduh tanpa bukti": 35, // Variasi
    "fitnah keji": 35, // Variasi

    "mabuk": 60, // Diperbarui
    "alkohol": 60, // Diperbarui
    "minum alkohol": 60, // Diperbarui
    "minum miras": 60, // Variasi, Diperbarui
    "minum khamr": 60, // Variasi, Diperbarui
    "ngefly": 60, // Variasi (bisa juga narkoba, tapi umum untuk mabuk), Diperbarui
    "teler": 60, // Variasi slang, Diperbarui
    "mabok": 60, // Variasi typo/slang, Diperbarui
    "minum bir": 60, // Variasi spesifik, Diperbarui
    "minum arak": 60, // Variasi spesifik, Diperbarui

    "makan yang haram": 50,
    "makanan haram": 50,
    "makan babi": 50,
    "makan daging babi": 50,
    "daging babi": 50,
    "makan bangkai": 50, // Variasi
    "makan darah": 50, // Variasi
    "babi hutan": 50, // Variasi
    "daging anjing": 50, // Variasi
    "makan anjing": 50, // Variasi

    "korupsi": 150,
    "korup": 150,
    "nyolong duit negara": 150,
    "makan uang rakyat": 150, // Variasi
    "terima suap": 150, // Variasi
    "memberi suap": 150, // Variasi
    "uang haram": 150, // Variasi (tergantung konteks)
    "gratifikasi": 150, // Variasi
    "pungli": 150, // Variasi slang

    "narkoba": 100,
    "obat terlarang": 100,
    "nyabu": 100,
    "ngeganja": 100,
    "pakai narkoba": 100,
    "sabu": 100, // Variasi
    "ganja": 100, // Variasi
    "ekstasi": 100, // Variasi
    "putaw": 100, // Variasi
    "obat-obatan terlarang": 100, // Variasi
    "narkotika": 100, // Variasi
    "obat bius": 100, // Variasi (tergantung konteks)
    "sakau": 100, // Variasi (kondisi)

    "membunuh": 150,
    "bunuh": 150,
    "ngehabisin nyawa": 150,
    "bunuh orang": 150,
    "menghilangkan nyawa": 150, // Variasi
    "pembunuhan": 150, // Variasi
    "bunuh diri": 150, // Variasi (dosa besar)
    "membunuh diri": 150, // Variasi
    "aborsi": 150, // Variasi (tergantung pandangan)

    "membully": 40,
    "bully": 40,
    "ngebully": 40,
    "merundung": 40,
    "ngejek orang": 40,
    "menghina orang": 40, // Variasi
    "mengolok-olok": 40, // Variasi
    "perundungan": 40, // Variasi
    "ejekan": 40, // Variasi
    "intimidasi": 40, // Variasi

    "durhaka": 60,
    "melawan orang tua": 60,
    "ngelawan ortu": 60,
    "durhaka sama orang tua": 60,
    "nyakitin orang tua": 60,
    "bentak orang tua": 60, // Variasi
    "tidak hormat orang tua": 60, // Variasi
    "lawan ibu": 60, // Variasi spesifik
    "lawan bapak": 60, // Variasi spesifik
    "ngelawan ibu": 60, // Variasi spesifik
    "ngelawan bapak": 60, // Variasi spesifik

    "syirik": 200, // Keyword baru
    "menyekutukan allah": 200, // Keyword baru
    "percaya dukun": 200, // Keyword baru
    "minta ke selain allah": 200, // Keyword baru
    "sesajen": 200, // Keyword baru
    "musyrik": 200, // Keyword baru
    "percaya jimat": 200, // Variasi
    "pesugihan": 200, // Variasi
    "menyembah selain allah": 200, // Variasi

    "riba": 80, // Keyword baru
    "rentenir": 80, // Keyword baru
    "bunga bank haram": 80, // Keyword baru
    "pinjaman riba": 80, // Keyword baru
    "uang panas": 80, // Variasi slang
    "jual beli riba": 80, // Variasi
    "transaksi riba": 80, // Variasi

    "sihir": 220, // Keyword baru, Diperbarui
    "perdukunan": 220, // Keyword baru, Diperbarui
    "santet": 220, // Keyword baru, Diperbarui
    "guna-guna": 220, // Keyword baru, Diperbarui
    "pelet": 220, // Keyword baru, Diperbarui
    "ilmu hitam": 220, // Variasi, Diperbarui
    "main dukun": 220, // Variasi slang, Diperbarui
    "tukang sihir": 220, // Variasi, Diperbarui

    "ghibah": 30, // Keyword baru
    "menggunjing": 30, // Keyword baru
    "ngerumpiin orang": 30, // Keyword baru
    "gosip": 30, // Keyword baru
    "ngomongin keburukan orang": 30, // Keyword baru
    "gibah": 30, // Variasi typo/slang
    "ngerumpi": 30, // Variasi
    "membicarakan aib orang": 30, // Variasi

    "namimah": 45, // Keyword baru
    "mengadu domba": 45, // Keyword baru
    "nyebar fitnah": 45, // Variasi (overlap dengan fitnah, tapi bisa dibiarkan)
    "komporin orang": 45, // Variasi slang
    "adu domba": 45, // Variasi
    "memecah belah": 45, // Variasi

    "saksi palsu": 70, // Keyword baru
    "bersaksi palsu": 70, // Keyword baru
    "sumpah palsu": 70, // Keyword baru
    "jadi saksi bohong": 70, // Variasi
    "memberi keterangan palsu": 70, // Variasi

    "makan harta yatim": 120, // Keyword baru
    "mengambil harta anak yatim": 120, // Keyword baru
    "zalimi anak yatim": 120, // Keyword baru
    "makan hak anak yatim": 120, // Variasi
    "menggelapkan dana yatim": 120, // Variasi

    "tinggalkan shalat": 120, // Keyword baru, Diperbarui
    "tidak shalat": 120, // Keyword baru, Diperbarui
    "shalat bolong": 120, // Variasi slang, Diperbarui
    "tidak solat": 120, // Variasi typo, Diperbarui
    "tidak pernah shalat": 300, // Variasi (skor sangat tinggi jika tidak pernah sama sekali)
    "shalat jumat bolong": 120, // Variasi spesifik, Diperbarui
    "tidak sholat": 120, // Variasi typo, Diperbarui

    "tinggalkan puasa": 100, // Keyword baru, Diperbarui
    "tidak puasa": 100, // Keyword baru, Diperbarui
    "puasa bolong": 100, // Variasi slang, Diperbarui
    "tidak puasa ramadhan": 100, // Variasi, Diperbarui
    "tidak pernah puasa": 100, // Variasi, Diperbarui
    "batal puasa sengaja": 100, // Variasi, Diperbarui

    "judi": 60, // Keyword baru
    "berjudi": 60, // Keyword baru
    "main judi": 60, // Keyword baru
    "taruhan": 60, // Variasi
    "slot online": 60, // Variasi modern
    "main kartu": 60, // Variasi (tergantung konteks, tapi bisa dimasukkan)
    "togel": 60, // Variasi spesifik
    "sabung ayam": 60, // Variasi spesifik
    "pasang taruhan": 60, // Variasi
    "judol": 60, // Variasi

    "kikir": 20, // Keyword baru
    "pelit": 20, // Keyword baru
    "medit": 20, // Variasi slang
    "tidak mau sedekah": 20, // Variasi
    "susah ngasih": 20, // Variasi slang
    "bakhil": 20, // Variasi

    "sombong": 55, // Keyword baru
    "takabur": 55, // Keyword baru
    "merasa paling benar": 55, // Variasi
    "angkuh": 55, // Variasi
    "ujub": 55, // Variasi (merasa kagum diri)
    "riya": 55, // Variasi (pamer amal)
    "merasa hebat": 55, // Variasi
    "merokok": 25, // Keyword baru
    "rokok": 25, // Variasi
    "ngepul": 25, // Variasi slang
    "hisap rokok": 25, // Variasi
    "nyebat": 25, // Variasi slang
    "sebat": 25, // Variasi slang
    "udud": 25, // Variasi slang
    "ngerokok": 25, // Variasi typo/slang
    "asap rokok": 25, // Variasi (tergantung konteks)

    "menyiksa hewan": 60, // Keyword baru
    "aniaya hewan": 60, // Keyword baru
    "pukul hewan": 60, // Variasi
    "sakiti hewan": 60, // Variasi
    "bunuh hewan sembarangan": 60, // Variasi
    "telantarkan hewan": 60, // Variasi
    "tidak beri makan hewan": 60, // Variasi
    "kekerasan pada hewan": 60, // Variasi

    "masturbasi": 30, // Keyword baru
    "onani": 30, // Keyword baru
    "colmek": 30, // Variasi slang
    "solo seks": 30, // Variasi
    "main sendiri": 30, // Variasi slang

    "tinggalkan zakat": 120, // Keyword baru
    "tidak bayar zakat": 120, // Keyword baru
    "enggan zakat": 120, // Variasi
    "tidak keluarkan zakat": 120, // Variasi
    "hindari zakat": 120, // Variasi

    "tinggalkan haji": 180, // Keyword baru (jika mampu)
    "tidak haji padahal mampu": 180, // Keyword baru
    "enggan haji": 180, // Variasi
    "tidak tunaikan haji": 180, // Variasi

    "berkata kasar": 30, // Keyword baru
    "mencela": 30, // Keyword baru
    "menghina": 30, // Variasi
    "memaki": 30, // Variasi
    "ngomong kotor": 30, // Variasi slang
    "misuh": 30, // Variasi slang Jawa
    "ngata-ngatain orang": 30, // Variasi slang

    "mengambil hak orang lain": 70, // Keyword baru
    "makan hak orang": 70, // Keyword baru
    "merampas hak": 70, // Variasi
    "tidak bayar hutang": 70, // Variasi (jika disengaja dan mampu)
    "menunda bayar hutang": 70, // Variasi (jika disengaja dan mampu)
    "ingkar janji": 50, // Keyword baru (skor sedikit lebih rendah dari mengambil hak)
    "tidak tepati janji": 50, // Variasi
    "bohong janji": 50, // Variasi

    "tidak amanah": 50, // Keyword baru
    "khianat": 50, // Keyword baru
    "tidak jujur": 50, // Variasi (overlap dengan bohong, tapi bisa dibiarkan)
    "menyalahgunakan kepercayaan": 50, // Variasi

    "iri": 30, // Keyword baru
    "dengki": 30, // Keyword baru
    "cemburu buta": 30, // Variasi (tergantung konteks)
    "tidak suka lihat orang senang": 30, // Variasi

    "suudzon": 25, // Keyword baru
    "berburuk sangka": 25, // Keyword baru
    "curiga berlebihan": 25, // Variasi
    "negatif thinking": 25, // Variasi slang

    "israf": 30, // Keyword baru
    "tabdzir": 30, // Keyword baru
    "boros": 30, // Keyword baru
    "menghamburkan uang": 30, // Variasi
    "buang-buang makanan": 30, // Variasi
    "terlalu mewah": 30, // Variasi (tergantung konteks)

    "tidak mau belajar": 30, // Keyword baru
    "tidak mau beribadah": 30, // Keyword baru
    "malas":9, // Keyword baru

  };

  // Fungsi untuk analisis text
  export const analyzeText = (text: string): number => {
    let score = 0;
    const lowerText = text.toLowerCase();

    // Periksa setiap keyword
    Object.entries(textKeywords).forEach(([keyword, value]) => {
      if (lowerText.includes(keyword)) {
        score += value;
      }
    });

    return score;
  };

  // Fungsi untuk memberikan komentar berdasarkan skor
  export const getComment = (score: number): string => {
    if (score < 20) {
      // Variasi komentar untuk skor sangat ringan
      const comments = [
        "Skor dosamu sangat rendah. Terus jaga kebaikanmu dan tingkatkan ibadah!",
        "Alhamdulillah, kamu di jalan yang benar. Jangan pernah berhenti berbuat baik.",
        "Sedikit dosa bukan berarti aman. Tetap waspada dan perbanyak istighfar.",
        "Ini awal yang baik. Teruslah mendekat kepada Allah.",
      ];
      return comments[Math.floor(Math.random() * comments.length)]; // Pilih komentar secara acak
    } else if (score < 50) {
      // Variasi komentar untuk skor ringan
      const comments = [
        "Skor dosamu masih rendah, ini kesempatan bagus untuk terus memperbaiki diri dan mendekatkan diri pada Allah. Semangat tobat!",
        "Alhamdulillah, skor dosamu masih ringan. Pertahankan dan tingkatkan amal baikmu!",
        "Jalanmu masih panjang menuju kebaikan. Terus istiqomah ya!",
        "Dosa kecil segera dihapus dengan istighfar dan amal shalih. Jangan tunda!",
        "Jangan remehkan dosa kecil, bisa menumpuk jadi besar. Segera perbaiki!",
      ];
      return comments[Math.floor(Math.random() * comments.length)]; // Pilih komentar secara acak
    } else if (score <= 100) {
      // Variasi komentar untuk skor sedang
      const comments = [
        "Mulai waspada, bro. Hati kecil lo pasti gelisah.",
        "Skor dosamu mulai naik, ini alarm untuk segera introspeksi dan bertaubat.",
        "Jangan biarkan dosa menumpuk. Segera perbaiki diri sebelum terlambat.",
        "Ingat mati, bro. Dosa-dosa ini bisa jadi beban di akhirat.",
        "Segera cari teman shalih yang bisa membimbingmu.",
        "Perbanyak dzikir dan ingat Allah agar hati tenang.",
      ];
      return comments[Math.floor(Math.random() * comments.length)]; // Pilih komentar secara acak
    } else if (score <= 200) {
      // Variasi komentar untuk skor tinggi
      const comments = [
        "Skor dosamu sudah tinggi. Kamu butuh bimbingan serius dan usaha keras untuk bertaubat.",
        "Jangan putus asa dari rahmat Allah, tapi sadari dosamu sangat berat. Segera ambil langkah nyata untuk berubah.",
        "Perbanyak istighfar, shalat taubat, dan amal kebaikan. Hanya itu jalanmu.",
        "Lo butuh ustadz, dan psikolog sekaligus. jangan lupa tobat broo",
        "Dosa-dosa ini bisa menghalangimu masuk surga. Segera bertobat!",
        "Minta pertolongan Allah agar dimudahkan bertaubat.",
      ];
      return comments[Math.floor(Math.random() * comments.length)]; // Pilih komentar secara acak
    } else if (score <= 300) {
       // Variasi komentar untuk skor sangat tinggi
       const comments = [
        "Skor dosamu sudah sangat tinggi. Ini peringatan keras untuk segera kembali ke jalan Allah.",
        "Kamu berada di tepi jurang dosa. Segera tarik dirimu dan bertaubat nasuha.",
        "Jangan tunda lagi! Setiap detik berharga untuk memohon ampunan Allah.",
        "Perbaiki hubunganmu dengan Allah dan sesama manusia.",
        "Cari lingkungan yang mendukungmu untuk berubah menjadi lebih baik.",
       ];
       return comments[Math.floor(Math.random() * comments.length)]; // Pilih komentar secara acak
    } else if (score <= 1000) { // Rentang skor tinggi sebelum skor parah
      // Variasi komentar untuk skor parah (sebelum 1000)
      const comments = [
        "Skor dosa lo udah parah banget bro! Segera tobat nasuha dan minta ampunan kepada Allah. Jangan tunda lagi!",
        "Astaghfirullah, dosamu sudah menggunung! Hanya tobat nasuha yang bisa menolongmu.",
        "Kamu dalam bahaya besar, bro. Segera cari pertolongan Allah dan tinggalkan semua maksiatmu.",
        "Ini bukan main-main. Segera kembali ke jalan yang benar sebelum ajal menjemput.",
        "Menangislah di hadapan Allah, mohon ampunan-Nya dengan sungguh-sungguh.",
        "Tidak ada yang bisa menyelamatkanmu selain rahmat Allah. Segera bertobat!",
      ];
      return comments[Math.floor(Math.random() * comments.length)]; // Pilih komentar secara acak
    }
    else { // Kondisi baru untuk skor di atas 1000
      // Variasi komentar untuk skor ekstrem
      const comments = [
        "Skor dosamu sudah melampaui batas! Bahkan iblis pun mungkin akan terkejut. Segera bertaubat nasuha dengan sungguh-sungguh sebelum terlambat!",
        "Astaghfirullahaladzim! Dosamu sudah di level yang sangat mengerikan. Hanya keajaiban rahmat Allah yang bisa menolongmu. Segera kembali ke jalan-Nya!",
        "Ini bukan lagi soal waspada, ini soal keselamatan abadi. Tinggalkan semua dosamu sekarang juga dan mohon ampunan Allah dengan seluruh jiwa ragamu!",
        "Skor ini menunjukkan kamu dalam bahaya besar. Jangan pernah putus asa dari rahmat Allah, tapi sadari betapa besar dosamu. Segera cari bimbingan dan bertaubat!",
        "Mungkin kamu merasa sudah terlalu jauh, tapi pintu taubat selalu terbuka sampai nyawa di kerongkongan. Segera ambil langkah pertama menuju perubahan!",
      ];
      return comments[Math.floor(Math.random() * comments.length)]; // Pilih komentar secara acak
    }
  };
  