"use client";
import { useState } from "react";

/**
 * Simple daily checklist for Huberman protocols
 */
export default function DailyChecklist() {
  const [checked, setChecked] = useState({});

  const items = [
    { id: 'morning-light', label: '☀️ Morning light exposure (10-30 min)' },
    { id: 'caffeine-timing', label: '☕ Caffeine before cutoff time' },
    { id: 'walk-meal', label: '🚶 Walk after meal' },
    { id: 'nsdr', label: '🧘 NSDR/meditation session' },
    { id: 'exercise', label: '🏋️ Exercise/movement' },
    { id: 'evening-dim', label: '🌙 Dim lights 90min before bed' },
    { id: 'cool-room', label: '❄️ Cool, dark, quiet sleep environment' },
  ];

  const toggle = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completed = Object.values(checked).filter(Boolean).length;
  const percentage = Math.round((completed / items.length) * 100);

  return (
    <div style={wrap}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px' }}>Daily Protocol Checklist</h3>
      <div style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--muted)' }}>
        Progress: {completed}/{items.length} ({percentage}%)
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {items.map(item => (
          <label key={item.id} style={itemStyle}>
            <input
              type="checkbox"
              checked={checked[item.id] || false}
              onChange={() => toggle(item.id)}
              style={checkbox}
            />
            <span style={{ opacity: checked[item.id] ? 0.7 : 1 }}>
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

const wrap = {
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: 16,
  background: "rgba(255,255,255,0.02)",
  marginTop: 24,
};

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  padding: '4px 0',
};

const checkbox = {
  width: '16px',
  height: '16px',
  accentColor: 'var(--accent, #0070f3)',
};
