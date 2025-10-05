"use client";
import { FadeIn } from "./Motion";

export default function Quote() {
  return (
    <FadeIn>
      <section
        style={{
          margin: "72px 0 16px",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: 24,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "clamp(18px, 2.2vw, 26px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            background:
              "linear-gradient(180deg, #fff, rgba(255,255,255,0.65))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          “You don’t need more motivation. You need alignment with biology.”
        </p>
        <div
          style={{
            marginTop: 10,
            color: "var(--muted)",
            fontSize: 14,
          }}
        >
          — Inspired by Dr. Andrew Huberman
        </div>
      </section>
    </FadeIn>
  );
}
