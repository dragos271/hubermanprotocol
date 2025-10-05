"use client";
import { useState } from "react";

/**
 * Time-based reminders for key protocols throughout the day
 */
export default function Reminders() {
  const [enabled, setEnabled] = useState(false);

  const reminders = [
    { time: '07:00', text: '☀️ Time for morning light exposure!' },
    { time: '12:00', text: '🚶 Consider a post-meal walk' },
    { time: '14:00', text: '🧘 NSDR break to restore dopamine' },
    { time: '18:00', text: '☕ Last call for caffeine (adjust based on your schedule)' },
    { time: '20:00', text: '🌙 Start dimming lights for better sleep' },
  ];

  const requestNotifications = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support notifications');
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      setEnabled(true);
      // In a real implementation, you'd set up the actual notifications here
      alert('Reminders enabled! (Note: This is a demo - full implementation would schedule actual notifications)');
    }
  };

  return (
    <div style={wrap}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '18px' }}>Daily Reminders</h3>
        <button 
          onClick={requestNotifications}
          disabled={enabled}
          style={btn}
        >
          {enabled ? '✅ Enabled' : 'Enable Notifications'}
        </button>
      </div>
      
      <div style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '12px' }}>
        Gentle nudges throughout your day to stay on track with protocols.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {reminders.map((reminder, i) => (
          <div key={i} style={reminderStyle}>
            <span style={{ fontFamily: 'monospace', fontSize: '14px', opacity: 0.8 }}>
              {reminder.time}
            </span>
            <span style={{ fontSize: '14px' }}>
              {reminder.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--muted)', opacity: 0.8 }}>
        💡 Tip: Adjust these times based on your personal schedule and sleep/wake times.
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

const btn = {
  padding: "8px 12px",
  borderRadius: 8,
  border: "1px solid var(--border)",
  background: "var(--panel)",
  color: "var(--text)",
  cursor: "pointer",
  fontSize: '12px',
};

const reminderStyle = {
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  padding: '8px 0',
  borderBottom: '1px solid var(--border)',
};
