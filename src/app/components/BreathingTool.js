"use client";
import { useState, useEffect } from "react";
import styles from "../styles/BreathingTool.module.css";

export default function BreathingTool() {
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState("ready");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!running) return;

    let i = 0;
    const phases = [
      { label: "Inhale (short)", duration: 1500 },
      { label: "Inhale again (top-up)", duration: 1000 },
      { label: "Exhale (long)", duration: 4000 },
    ];

    const runCycle = () => {
      const p = phases[i % phases.length];
      setPhase(p.label);
      setCount((prev) => prev + 1);

      setTimeout(() => {
        i++;
        if (running && count < 10) {
          runCycle();
        } else {
          setRunning(false);
          setPhase("done");
        }
      }, p.duration);
    };

    runCycle();
  }, [running]);

  return (
    <div className={styles.box}>
      <button
        className={styles.button}
        onClick={() => { setCount(0); setRunning(true); setPhase("ready"); }}
        disabled={running}
      >
        {running ? "Running..." : "Start Physiological Sigh (10 cycles)"}
      </button>

      <div className={styles.circleWrap}>
        <div
          className={[
            styles.circle,
            phase.includes("Inhale again") ? styles.topup :
            phase.includes("Inhale") ? styles.inhale :
            phase.includes("Exhale") ? styles.exhale : ""
          ].filter(Boolean).join(" ")}
        />
      </div>

      <div className={styles.phaseText}>
        {phase === "ready" && "Press start to begin"}
        {phase !== "ready" && phase !== "done" && <p>{phase}</p>}
        {phase === "done" && <p>✅ Complete</p>}
      </div>
    </div>
  );
}