"use client";
import { useState } from "react";
import styles from "../styles/SleepTool.module.css";

export default function SleepTool() {
  const [wakeTime, setWakeTime] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!wakeTime) return;

    const [hours, minutes] = wakeTime.split(":").map(Number);
    const wake = new Date();
    wake.setHours(hours, minutes);

    // caffeine cutoff = +8h
    const caffeineCutoff = new Date(wake.getTime() + 8 * 60 * 60 * 1000);

    // ideal sleep window = wake + 16h to 18h
    const sleepStartMin = new Date(wake.getTime() + 16 * 60 * 60 * 1000);
    const sleepStartMax = new Date(wake.getTime() + 18 * 60 * 60 * 1000);

    const fmt = (d) =>
      d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setResult({
      caffeine: fmt(caffeineCutoff),
      sleepMin: fmt(sleepStartMin),
      sleepMax: fmt(sleepStartMax),
    });
  };

  return (
    <div className={styles.box}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.timeInputGroup}>
          <label htmlFor="wake-time" className={styles.timeLabel}>
            🌅 Wake-up time
          </label>
          <input
            id="wake-time"
            type="time"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
            required
            className={styles.timeInput}
          />
        </div>
        <button type="submit" className={styles.calculateBtn}>Calculate Sleep Schedule</button>
      </form>

      {result && (
        <div className={styles.results}>
          <p>☕ Cut off caffeine by <strong>{result.caffeine}</strong></p>
          <p>🌙 Ideal sleep window: <strong>{result.sleepMin} – {result.sleepMax}</strong></p>
        </div>
      )}
    </div>
  );
}