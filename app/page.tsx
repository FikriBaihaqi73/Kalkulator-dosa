"use client";

import { useState } from "react";
import Link from "next/link"; // Import Link
import CheckboxList from "@/components/CheckboxList";
import ManualInput from "@/components/ManualInput";
import ResultDisplay from "@/components/ResultDisplay";
import { checkboxDosaList } from "@/lib/dosaScore";

export default function Home() {
  const [checkboxScore, setCheckboxScore] = useState(0);
  const [textScore, setTextScore] = useState(0);
  const totalScore = checkboxScore + textScore;

  return (
    <main>
      <h1>Kalkulator Dosa</h1>
      <p className="disclaimer">
        Aplikasi ini bersifat edukatif dan bertujuan untuk menyadarkan pengguna terhadap tindakan buruk yang dilakukan, 
        bukan untuk menghakimi. Introspeksi diri adalah langkah awal menuju perubahan yang lebih baik.
      </p>
      <p className="disclaimer">Umar bin Khattab RA pernah berkata, "Hisablah dirimu sebelum amalmu dihisab dan persiapkanlah dirimu untuk menghadapi hari dimana semua mahluk dihadapkan kepada Allah, sungguh hisab terasa ringan dihari kiamat bagi orang-orang yang gemar mengoreksi dirinya di dunia." 
      </p>

      <CheckboxList 
        dosaItems={checkboxDosaList} 
        onScoreChange={(score) => setCheckboxScore(score)} 
      />
      
      <ManualInput onScoreChange={(score) => setTextScore(score)} />
      
      <ResultDisplay score={totalScore} />

      {/* Tombol navigasi ke halaman riwayat */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link href="/history" passHref>
          <button>Lihat Riwayat Dosa</button>
        </Link>
      </div>
    </main>
  );
}