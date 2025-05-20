"use client";

import { useState } from "react";
import { DosaItem } from "@/lib/dosaScore";
import styles from "./CheckboxList.module.css";

interface CheckboxListProps {
  dosaItems: DosaItem[];
  onScoreChange: (score: number) => void;
}

export default function CheckboxList({ dosaItems, onScoreChange }: CheckboxListProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleCheckboxChange = (id: string, score: number) => {
    const newCheckedItems = {
      ...checkedItems,
      [id]: !checkedItems[id],
    };
    
    setCheckedItems(newCheckedItems);
    
    // Hitung total skor
    let totalScore = 0;
    Object.entries(newCheckedItems).forEach(([itemId, isChecked]) => {
      if (isChecked) {
        const item = dosaItems.find((dosa) => dosa.id === itemId);
        if (item) {
          totalScore += item.score;
        }
      }
    });
    
    onScoreChange(totalScore);
  };

  return (
    <div className={styles.checkboxContainer}>
      <h2>Ceklis Dosa yang Pernah Kamu Lakukan</h2>
      <div className={styles.checkboxList}>
        {dosaItems.map((item) => (
          <div key={item.id} className={styles.checkboxItem}>
            <input
              type="checkbox"
              id={item.id}
              checked={checkedItems[item.id] || false}
              onChange={() => handleCheckboxChange(item.id, item.score)}
              className={styles.checkbox}
            />
            <label htmlFor={item.id} className={styles.checkboxLabel}>
              {item.question} {/* Menghapus tampilan skor di sini */}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}