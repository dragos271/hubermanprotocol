"use client";
import { useState, useEffect } from "react";
import styles from "../styles/BreathingTool.module.css";

export default function BreathingTool() {
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState("ready");

  useEffect(() => {
    if (!running) return undefined;

    const totalCycles = 10;
    const phases = [
      { label: "Inhale (short)", duration: 1500 },
      { label: "Inhale again (top-up)", duration: 1000 },
      { label: "Exhale (long)", duration: 4000 },
    ];

    let cycle = 0;
    let phaseIndex = 0;
    let timeoutId;
    let active = true;

    const runPhase = () => {
      if (!active) return;

      const current = phases[phaseIndex];
      setPhase(current.label);

      timeoutId = setTimeout(() => {
        if (!active) return;

        phaseIndex += 1;
        if (phaseIndex >= phases.length) {
          phaseIndex = 0;
          cycle += 1;
          if (cycle >= totalCycles) {
            setRunning(false);
            setPhase("done");
            return;
          }
        }
        runPhase();
      }, current.duration);
    };

    runPhase();

    return () => {
      active = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [running]);

  return (
    <div className={styles.box}>
      <button
        className={styles.button}
        onClick={() => {
          setPhase("ready");
          setRunning(true);
        }}
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
