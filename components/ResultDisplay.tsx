"use client";

import { useState, useEffect } from "react";
import { getComment } from "@/lib/dosaScore";
import styles from "./ResultDisplay.module.css";

interface ResultDisplayProps {
  score: number;
}

export default function ResultDisplay({ score }: ResultDisplayProps) {
  const [displayedScore, setDisplayedScore] = useState(0);
  const [typingComment, setTypingComment] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  // const fullComment = getComment(score); // Hapus baris ini
  const [selectedComment, setSelectedComment] = useState(""); // Tambahkan state baru untuk komentar
  const [saveStatus, setSaveStatus] = useState<string | null>(null); // State untuk status penyimpanan

  // Animasi untuk skor
  useEffect(() => {
    if (score > 0) {
      let start = 0;
      const duration = 1500; // ms
      const step = Math.max(1, Math.floor(score / (duration / 20))); // Update setiap 20ms

      const timer = setInterval(() => {
        start += step;
        if (start >= score) {
          setDisplayedScore(score);
          clearInterval(timer);
        } else {
          setDisplayedScore(start);
        }
      }, 20);

      return () => clearInterval(timer);
    } else {
      setDisplayedScore(0);
    }
  }, [score]);

  // Effect untuk memilih komentar ketika skor berubah
  useEffect(() => {
    if (score > 0) {
      setSelectedComment(getComment(score)); // Pilih komentar hanya ketika skor berubah
    } else {
      setSelectedComment(""); // Reset komentar jika skor 0
    }
  }, [score]); // Bergantung pada skor

  // Efek typing untuk komentar
  useEffect(() => {
    // Gunakan selectedComment di sini
    if (score > 0 && typingIndex < selectedComment.length) {
      const typingTimer = setTimeout(() => {
        setTypingComment(selectedComment.substring(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, 50);

      return () => clearTimeout(typingTimer);
    }
  }, [typingIndex, selectedComment, score]); // Bergantung pada selectedComment

  // Reset typing index ketika komentar berubah (selectedComment)
  useEffect(() => {
    setTypingIndex(0);
    setTypingComment("");
  }, [selectedComment]); // Bergantung pada selectedComment

  // Fungsi untuk menyimpan skor ke local storage
  const saveScore = () => {
    if (score <= 0) {
      setSaveStatus("Skor 0 tidak perlu disimpan.");
      return;
    }
    try {
      const savedScores = JSON.parse(localStorage.getItem("dosaHistory") || "[]");
      const newEntry = {
        score: score,
        timestamp: new Date().toISOString(), // Simpan timestamp dalam format ISO
      };
      savedScores.push(newEntry);
      localStorage.setItem("dosaHistory", JSON.stringify(savedScores));
      setSaveStatus("Skor berhasil disimpan!");
      // Reset status setelah beberapa detik
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (error) {
      console.error("Gagal menyimpan skor ke local storage:", error);
      setSaveStatus("Gagal menyimpan skor.");
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  return (
    <div className={styles.resultContainer}>
      <h2>Hasil Perhitungan</h2>
      <div className={styles.scoreDisplay}>
        <h3>Total Skor Dosa</h3>
        <div className={`${styles.scoreValue} ${displayedScore > 150 ? styles.critical : displayedScore > 50 ? styles.warning : ""}`}>
          {displayedScore}
        </div>
      </div>
      
      {score > 0 && (
        <>
          <div className={styles.commentContainer}>
            <div className={styles.typingIndicator}>
              <span className={styles.typingDot}></span>
              <span className={styles.typingDot}></span>
              <span className={styles.typingDot}></span>
            </div>
            <p className={styles.comment}>
              {typingComment}
              <span className={styles.cursor}></span>
            </p>
          </div>
          <button onClick={saveScore} className={styles.saveButton}>
            Simpan Hasil
          </button>
          {saveStatus && <p className={styles.saveStatus}>{saveStatus}</p>}
        </>
      )}
    </div>
  );
}