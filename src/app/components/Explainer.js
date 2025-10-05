"use client";
import { useState } from "react";

export default function Explainer({ title = "Why it works", points = [], refs = [] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      marginTop: 10, borderTop: "1px solid var(--border)", paddingTop: 10,
      background: "transparent", borderRadius: 12
    }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          padding: "8px 12px", borderRadius: 8, border: "1px solid var(--border)",
          background: "var(--panel)", color: "var(--text)", cursor: "pointer"
        }}
      >
        {open ? "Hide" : "Show"} {title}
      </button>

      {open && (
        <div style={{ marginTop: 10, color: "var(--muted)" }}>
          {points.length > 0 && (
            <>
              <strong>Mechanism:</strong>
              <ul style={{ margin: "6px 0 10px 18px" }}>
                {points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </>
          )}
          {refs.length > 0 && (
            <>
              <strong>References:</strong>
              <ul style={{ margin: "6px 0 0 18px" }}>
                {refs.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
