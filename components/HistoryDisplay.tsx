"use client";

import { useState, useEffect } from "react";
import styles from "./HistoryDisplay.module.css";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DosaEntry {
  score: number;
  timestamp: string; // ISO string
}

// Definisikan tipe baru untuk data yang diproses
interface ProcessedDosaEntry {
  date: string;
  score: number;
}

export default function HistoryDisplay() {
  const [historyData, setHistoryData] = useState<DosaEntry[]>([]);
  // Perbarui tipe filteredData
  const [filteredData, setFilteredData] = useState<ProcessedDosaEntry[]>([]);
  const [filter, setFilter] = useState("day"); // 'day', 'week', 'month', '3month', 'year'

  useEffect(() => {
    // Load data from local storage on mount
    try {
      const savedScores = JSON.parse(localStorage.getItem("dosaHistory") || "[]");
      // Sort data by timestamp ascending
      const sortedScores = savedScores.sort((a: DosaEntry, b: DosaEntry) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
      setHistoryData(sortedScores);
    } catch (error) {
      console.error("Gagal memuat riwayat dari local storage:", error);
      setHistoryData([]);
    }
  }, []);

  useEffect(() => {
    // Apply filter whenever historyData or filter changes
    const now = new Date();
    let filtered = historyData;

    if (filter === 'week') {
      const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));
      filtered = historyData.filter(entry => new Date(entry.timestamp) >= oneWeekAgo);
    } else if (filter === 'month') {
      const oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1));
      filtered = historyData.filter(entry => new Date(entry.timestamp) >= oneMonthAgo);
    } else if (filter === '3month') {
      const threeMonthsAgo = new Date(now.setMonth(now.getMonth() - 3));
      filtered = historyData.filter(entry => new Date(entry.timestamp) >= threeMonthsAgo);
    } else if (filter === 'year') {
      const oneYearAgo = new Date(now.setFullYear(now.getFullYear() - 1));
      filtered = historyData.filter(entry => new Date(entry.timestamp) >= oneYearAgo);
    }
    // 'day' filter is the default, no need to filter further

    // Group data by day for display on chart
    const groupedByDay: { [key: string]: number[] } = {};
    filtered.forEach(entry => {
      const date = new Date(entry.timestamp);
      const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD
      if (!groupedByDay[dateString]) {
        groupedByDay[dateString] = [];
      }
      groupedByDay[dateString].push(entry.score);
    });

    // Calculate average score per day (or total, depending on preference)
    const processedData: ProcessedDosaEntry[] = Object.entries(groupedByDay).map(([date, scores]) => ({
      date: date,
      score: scores.reduce((sum, s) => sum + s, 0) / scores.length, // Using average score per day
    })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort by date

    // Set filteredData with the correct type
    setFilteredData(processedData);
  }, [historyData, filter]);

  const chartData = {
    labels: filteredData.map(entry => entry.date),
    datasets: [
      {
        label: 'Rata-rata Skor Dosa Harian',
        data: filteredData.map(entry => entry.score),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Grafik Riwayat Skor Dosa',
        color: '#f1f1f1', // Match text color
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Tanggal',
          color: '#f1f1f1',
        },
        ticks: {
          color: '#f1f1f1',
        },
        grid: {
          color: '#333', // Darker grid lines
        }
      },
      y: {
        title: {
          display: true,
          text: 'Skor Dosa',
          color: '#f1f1f1',
        },
        ticks: {
          color: '#f1f1f1',
        },
        grid: {
          color: '#333', // Darker grid lines
        }
      },
    },
  };


  return (
    <div className={styles.historyContainer}>
      <div className={styles.filterControls}>
        <label htmlFor="filter">Filter:</label>
        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)} className={styles.filterSelect}>
          <option value="day">Hari Ini</option>
          <option value="week">Seminggu Terakhir</option>
          <option value="month">Sebulan Terakhir</option>
          <option value="3month">3 Bulan Terakhir</option>
          <option value="year">Setahun Terakhir</option>
        </select>
      </div>

      {historyData.length === 0 ? (
        <p>Belum ada riwayat dosa yang tersimpan.</p>
      ) : (
        <div className={styles.chartContainer}>
           <Line data={chartData} options={chartOptions as any} /> {/* Cast options to any */}
        </div>
      )}

      {/* Optional: Display raw list of history entries */}
      {/*
      <h3>Semua Riwayat Tersimpan:</h3>
      <ul>
        {historyData.map((entry, index) => (
          <li key={index}>
            Skor: {entry.score}, Tanggal: {new Date(entry.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
      */}
    </div>
  );
}