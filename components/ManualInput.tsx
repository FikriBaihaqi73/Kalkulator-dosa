"use client";

import { useState, useEffect } from "react";
import { analyzeText } from "@/lib/dosaScore";
import styles from "./ManualInput.module.css";

interface ManualInputProps {
  onScoreChange: (score: number) => void;
}

export default function ManualInput({ onScoreChange }: ManualInputProps) {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");
  const [score, setScore] = useState(0);

  // Debounce effect untuk mengurangi analisis teks yang terlalu sering
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  // Effect untuk menganalisis teks ketika debounced text berubah
  useEffect(() => {
    if (debouncedText) {
      const newScore = analyzeText(debouncedText);
      setScore(newScore);
      onScoreChange(newScore);
    } else {
      setScore(0);
      onScoreChange(0);
    }
  }, [debouncedText, onScoreChange]);

  return (
    <div className={styles.inputContainer}>
      <h2>Tulis Dosa Lainnya yang Belum Tercantum</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tulis dosa-dosa yang belum tercantum dalam daftar di atas..."
        className={styles.textarea}
        rows={5}
      />
      <div className={styles.scoreInfo}>
        {score > 0 && (
          <p>Sistem mendeteksi dosa tambahan: <span className={styles.scoreValue}>{score} poin</span></p>
        )}
      </div>
    </div>
  );
}