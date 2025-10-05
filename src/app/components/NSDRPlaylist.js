"use client";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

const TRACKS = [
  { label: "10-Minute NSDR", src: "/audio/10_minute_nsdr.mp3", minutes: 10 },
  { label: "20-Minute NSDR", src: "/audio/20_minute_nsdr.mp3", minutes: 20 },
  { label: "30-Minute NSDR", src: "/audio/30_minute_nsdr.mp3", minutes: 30 },
];

export default function NSDRPlaylist() {
  const [i, setI] = useState(0);
  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
        {TRACKS.map((t, idx) => (
          <button
            key={t.label}
            onClick={() => setI(idx)}
            style={{
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid var(--border)",
              background: idx === i ? "rgba(255,255,255,0.08)" : "var(--panel)",
              color: "var(--text)",
              cursor: "pointer"
            }}
            aria-pressed={idx === i}
          >
            {t.label}
          </button>
        ))}
      </div>
      <AudioPlayer key={TRACKS[i].src} src={TRACKS[i].src} label={TRACKS[i].label} />
    </div>
  );
}
