"use client";
import { useState } from "react";

/**
 * Minimal wake-time → caffeine cutoff + ideal sleep window.
 * Keeps things local, no deps.
 */
export default function CaffeineQuickCalc() {
  const [wake, setWake] = useState("");
  const [res, setRes] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!wake) return;
    const [h, m] = wake.split(":").map(Number);
    const base = new Date();
    base.setHours(h, m, 0, 0);

    const cutoff = addHours(base, 8);
    const sleepMin = addHours(base, 16);
    const sleepMax = addHours(base, 18);

    setRes({
      cutoff: t(cutoff),
      sleepMin: t(sleepMin),
      sleepMax: t(sleepMax),
    });
  };

  return (
    <div style={wrap}>
      <form onSubmit={submit} style={formStyle}>
        <div style={inputGroup}>
          <label htmlFor="wake-time-daily" style={labelStyle}>
            🌅 Wake time
          </label>
          <input
            id="wake-time-daily"
            type="time"
            value={wake}
            onChange={(e) => setWake(e.target.value)}
            required
            style={timeInput}
          />
        </div>
        <button style={calculateButton} type="submit">Calculate</button>
      </form>
      {res && (
        <div style={{ marginTop: 8 }}>
          <div>☕ Cut off caffeine by <strong>{res.cutoff}</strong></div>
          <div>🌙 Ideal sleep window: <strong>{res.sleepMin} – {res.sleepMax}</strong></div>
        </div>
      )}
    </div>
  );
}

const wrap = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 24,
  background: "rgba(255,255,255,0.02)",
  backdropFilter: "blur(10px)",
};

const formStyle = { 
  display: "flex", 
  flexDirection: "column",
  gap: 20, 
  alignItems: "center"
};

const inputGroup = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 12,
};

const labelStyle = {
  fontSize: 16,
  fontWeight: 500,
  color: "var(--text)",
  textAlign: "center",
};

const timeInput = {
  padding: "12px 16px",
  borderRadius: 12,
  border: "2px solid var(--border)",
  background: "rgba(255,255,255,0.05)",
  color: "var(--text)",
  fontSize: 18,
  fontWeight: 500,
  textAlign: "center",
  minWidth: 140,
  transition: "all 0.2s ease",
  backdropFilter: "blur(10px)",
};

const calculateButton = {
  padding: "12px 24px",
  borderRadius: 12,
  border: "2px solid var(--accent, #0070f3)",
  background: "linear-gradient(135deg, var(--accent, #0070f3), rgba(0, 112, 243, 0.8))",
  color: "white",
  fontWeight: 600,
  fontSize: 14,
  cursor: "pointer",
  transition: "all 0.2s ease",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const row = { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" };
const inp = {
  marginLeft: 8,
  padding: "6px 10px",
  borderRadius: 8,
  border: "1px solid var(--border)",
  background: "var(--bg)",
  color: "var(--text)",
};
const btn = {
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid var(--border)",
  background: "var(--panel)",
  color: "var(--text)",
  cursor: "pointer",
};

function addHours(d, h) {
  const x = new Date(d.getTime());
  x.setHours(x.getHours() + h);
  return x;
}
function t(d) {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
