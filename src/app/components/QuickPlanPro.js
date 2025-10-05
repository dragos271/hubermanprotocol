"use client";
import { useEffect, useRef, useState } from "react";

/**
 * QuickPlanPro
 * - Polished presets for real daily use
 * - Morning / Midday / Evening blocks with micro-actions
 * - Evidence badges (short mechanisms)
 * - Hooks into existing tools by ID (nsdr, sleep, stress)
 *
 * Integrates with:
 *  - SleepTool section: ensure it’s within the element with id="sleep"
 *  - BreathingTool section: ensure it’s within the element with id="stress"
 *  - NSDR block: ensure the block container uses id="nsdr"
 */

const PRESETS = {
  "Better Sleep": {
    tagline: "Anchor circadian rhythm, reduce sleep latency, and improve quality.",
    evidence: ["Circadian light → SCN", "Evening dim light → melatonin", "NSDR → recovery"],
    morning: [
      { text: "10–30 min morning sunlight within 60 min of waking", action: "none" },
      { text: "Walk 5–10 min outdoors after light exposure", action: "none" },
      { text: "Caffeine OK (early); hydrate w/ electrolytes", action: "none" },
    ],
    midday: [
      { text: "Zone 2: 20–40 min walk/cycle (conversational pace)", action: "none" },
      { text: "If sleepy: 10–20 min NSDR", action: "nsdr" },
    ],
    evening: [
      { text: "Caffeine cutoff: calculate yours", action: "sleep" },
      { text: "Dim lights 90 min before bed; screens low-brightness", action: "none" },
      { text: "Cool room ~18–20°C; dark & quiet environment", action: "none" },
    ],
  },
  "Stress Down": {
    tagline: "Lower stress reactivity and improve state control.",
    evidence: ["Physiological sigh → CO₂ offload", "NSDR → dopamine reset"],
    morning: [
      { text: "5–10 min light + movement (walk/stretch)", action: "none" },
      { text: "2 min physiological sigh if spiked", action: "breath" },
    ],
    midday: [
      { text: "10–20 min brisk walk after lunch", action: "none" },
      { text: "Optional NSDR 10–20 min", action: "nsdr" },
    ],
    evening: [
      { text: "Limit stimulants; dim environment", action: "none" },
      { text: "Physiological sigh 1–3 min before bed if keyed up", action: "breath" },
    ],
  },
  "Focus at Work": {
    tagline: "Create high-quality work blocks with proper arousal & recovery.",
    evidence: ["90/20 cycles", "NSDR improves learning", "Caffeine timing → circadian"],
    morning: [
      { text: "Light + movement, then 60–90 min deep work block", action: "none" },
      { text: "Caffeine early only; hydrate w/ electrolytes", action: "none" },
    ],
    midday: [
      { text: "10 min walk or 2–3 min breath between cycles", action: "breath" },
      { text: "NSDR 10 min after heavy learning", action: "nsdr" },
    ],
    evening: [
      { text: "Plan tomorrow’s first deep work task", action: "none" },
      { text: "Caffeine cutoff: calculate yours", action: "sleep" },
    ],
  },
  "Energy & Metabolic Health": {
    tagline: "Support glucose control, energy, and longevity markers.",
    evidence: ["Zone 2 → mitochondria", "Walk after meals → glucose"],
    morning: [
      { text: "Protein-rich breakfast; light exposure + movement", action: "none" },
      { text: "Zone 2/strength (alternate days)", action: "none" },
    ],
    midday: [
      { text: "10–15 min walk post-meal", action: "none" },
      { text: "Optional NSDR for afternoon dip", action: "nsdr" },
    ],
    evening: [
      { text: "Stop eating 2–3h before bed; dim lights", action: "none" },
      { text: "Caffeine cutoff: calculate yours", action: "sleep" },
    ],
  },
};

const GOALS = Object.keys(PRESETS);

export default function QuickPlanPro() {
  const [goal, setGoal] = useState(GOALS[0]);
  const nsdrRef = useRef(null);
  const sleepRef = useRef(null);
  const stressRef = useRef(null);

  // Grab targets by ID once mounted
  useEffect(() => {
    nsdrRef.current = document.getElementById("nsdr");
    sleepRef.current = document.getElementById("sleep");
    stressRef.current = document.getElementById("stress");
  }, []);

  const act = (action) => {
    if (action === "nsdr" && nsdrRef.current) {
      nsdrRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (action === "sleep" && sleepRef.current) {
      sleepRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      // (Optional) autofocus the time input if you add an id to it
      const timeInput = sleepRef.current.querySelector('input[type="time"]');
      timeInput?.focus();
      return;
    }
    if (action === "breath" && stressRef.current) {
      stressRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      // (Optional) auto-click start if you add an id to the button
      const startBtn = stressRef.current.querySelector("button");
      // Be polite—don’t auto-start without user intent on mobile
      return;
    }
  };

  const p = PRESETS[goal];

  return (
    <div style={{
      marginTop: 18,
      border: "1px solid var(--border)",
      borderRadius: "14px",
      background: "var(--panel)",
      padding: 16,
    }}>
      {/* Header */}
      <div style={{
        display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap"
      }}>
        <div>
          <label style={{ color: "var(--muted)", fontSize: 13, marginRight: 8 }}>Goal</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            style={{
              background: "var(--panel)", color: "var(--text)",
              border: "1px solid var(--border)", borderRadius: 10, padding: "8px 10px",
            }}
          >
            {GOALS.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {p.evidence?.map((tag, i) => (
            <span key={i} style={{
              fontSize: 12, color: "var(--muted)",
              border: "1px solid var(--border)", borderRadius: 999,
              padding: "6px 10px", background: "rgba(255,255,255,0.03)"
            }}>{tag}</span>
          ))}
        </div>
      </div>

      <p style={{ margin: "10px 0 14px", color: "var(--muted)" }}>{p.tagline}</p>

      {/* Blocks */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr", gap: 12,
      }}>
        <Block title="Morning" items={p.morning} onAction={act} />
        <Block title="Midday" items={p.midday} onAction={act} />
        <Block title="Evening" items={p.evening} onAction={act} />
      </div>
    </div>
  );
}

function Block({ title, items, onAction }) {
  return (
    <div style={{
      border: "1px solid var(--border)",
      borderRadius: 12,
      padding: 12,
      background: "rgba(255,255,255,0.02)"
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <h4 style={{ margin: 0, fontSize: 16, letterSpacing: "-0.01em" }}>{title}</h4>
      </div>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        {items.map((it, i) => (
          <li key={i} style={{ margin: "6px 0" }}>
            <span>{it.text}</span>
            {it.action !== "none" && (
              <button
                onClick={() => onAction(it.action)}
                style={{
                  marginLeft: 10,
                  padding: "4px 10px",
                  borderRadius: 999,
                  border: "1px solid var(--border)",
                  background: "var(--panel)",
                  color: "var(--text)",
                  cursor: "pointer",
                  fontSize: 12
                }}
                aria-label={`Do now: ${it.action}`}
              >
                Do now
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
