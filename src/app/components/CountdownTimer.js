"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Simple, precise countdown timer (mm:ss), resilient to tab switches.
 * Default: 10 minutes.
 */
export default function CountdownTimer({ minutes = 10, label = "Timer" }) {
  const [target, setTarget] = useState(null);
  const [running, setRunning] = useState(false);
  const [display, setDisplay] = useState(fmt(minutes * 60));
  const raf = useRef();

  useEffect(() => {
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const start = () => {
    const durMs = minutes * 60 * 1000;
    const now = Date.now();
    setTarget(now + durMs);
    setRunning(true);
    loop(now + durMs);
  };

  const stop = () => {
    setRunning(false);
    setTarget(null);
    setDisplay(fmt(minutes * 60));
    cancelAnimationFrame(raf.current);
  };

  const loop = (deadline) => {
    const tick = () => {
      const left = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
      setDisplay(fmt(left));
      if (left <= 0) {
        setRunning(false);
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  };

  return (
    <div style={box}>
      <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>{display}</div>
      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        {!running ? (
          <button style={btn} onClick={start}>Start</button>
        ) : (
          <button style={btn} onClick={stop}>Reset</button>
        )}
        <button style={btnAlt} onClick={() => {
          const audio = new Audio("/audio/nsdr-10m.mp3");
          audio.play().catch(()=>{});
        }}>Play subtle chime (test)</button>
      </div>
    </div>
  );
}

const box = {
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: 12,
  background: "rgba(255,255,255,0.02)",
};
const btn = {
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid var(--border)",
  background: "var(--panel)",
  color: "var(--text)",
  cursor: "pointer",
};
const btnAlt = { ...btn, opacity: 0.8, fontSize: 12 };

function fmt(total) {
  const m = String(Math.floor(total / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return `${m}:${s}`;
}
