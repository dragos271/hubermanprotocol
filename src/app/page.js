import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import AudioPlayer from "../app/components/AudioPlayer";
import SectionCard from "../app/components/SectionCard";
import ArticleCard from "../app/components/ArticleCard";
import styles from "./page.module.css";
import SleepTool from "./components/SleepTool";
import BreathingTool from "./components/BreathingTool";

const protocols = [
  {
    id: "sleep",
    title: "Sleep",
    icon: "🌅",
    bullets: [
      "Morning light: 10–30 min sunlight within 60 min of waking.",
      "Evening light: Dim lights and avoid bright screens 90 min before bed.",
      "Caffeine cut-off: 8–10 hours before sleep.",
      "Cool room (18–20°C). Keep it dark & quiet.",
    ],
    footnote: "Light anchors circadian rhythm; dim evenings support melatonin.",
  },
  {
    id: "stress",
    title: "Stress",
    icon: "🌬️",
    bullets: [
      "Physiological sigh: 1× double inhale through nose, long exhale; repeat 1–3 minutes.",
      "NSDR/Yoga Nidra: 10–40 min sessions to restore dopamine & reduce cortisol.",
      "Cold exposure: short deliberate bouts (end on cold) to build stress resilience.",
      "Walks: 10–20 min brisk walks reduce stress reactivity.",
    ],
    footnote: "Breath & state control leverage autonomic nervous system mechanisms.",
  },
  {
    id: "mental",
    title: "Mental Health",
    icon: "🧠",
    bullets: [
      "Gratitude: 2–3 min daily—specific, other-focused events.",
      "Social connection: schedule meaningful interactions weekly.",
      "Non-sleep deep rest: use after high-stress or poor sleep days.",
      "Sunlight & exercise: foundational for mood regulation.",
    ],
    footnote: "Simple, repeated behaviors shift baseline neurochemistry over time.",
  },
  {
    id: "physical",
    title: "Physical",
    icon: "🏋️",
    bullets: [
      "Strength: 3–5×/week; compound lifts; progressive overload.",
      "Zone 2: 150–180 min/week conversational-pace cardio.",
      "Zone 5: 2–3 short HIIT bouts/week for VO₂ peak.",
      "Walk after meals: 10 min blunts glucose spike.",
    ],
    footnote: "Blend resistance + aerobic for longevity, metabolic & brain health.",
  },
  {
    id: "nutrition",
    title: "Nutrition",
    icon: "🥗",
    bullets: [
      "Protein: ~1 g per lb body weight/day; spread across meals.",
      "Fasting window: 12–16 h daily (as tolerated; not for everyone).",
      "Electrolytes: hydrate with sodium/potassium esp. during fasts & workouts.",
      "Caffeine timing: use early day to support circadian alignment.",
    ],
    footnote: "Adjust to context; quality whole foods, adequate protein, fiber.",
  },
];

const articles = [
  {
    title: "How Light Controls Sleep",
    blurb: "Circadian entrainment via ipRGCs; why morning & evening light set your clock.",
    url: "#sleep",
  },
  {
    title: "Cold Exposure for Stress",
    blurb: "Catecholamines, deliberate stress, and safe protocols for adaptation.",
    url: "#stress",
  },
  {
    title: "NSDR: Practical Recovery",
    blurb: "Non-sleep deep rest boosts dopamine & focus; when and how to use it.",
    url: "#nsdr",
  },
];

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className="container">
        {/* HERO */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Science-based protocols for your brain & body</h1>
          <p className={styles.subtitle}>
            Practical, fact-driven tools inspired by neuroscience & physiology to improve sleep,
            stress, mental & physical health.
          </p>
        </section>

        {/* PROTOCOL CARDS */}
        <section aria-label="Protocols" className={styles.sectionsGrid}>
          {protocols.map((p) => (
            <>
              <SectionCard key={p.id} title={p.title} icon={p.icon} bullets={p.bullets} footnote={p.footnote} id={p.id} />
              {p.id === "sleep" && <SleepTool />}
              {p.id === "stress" && <BreathingTool />}
            </>
          ))}
        </section>

        <div className={styles.divider} />

        {/* NSDR + NEWSLETTER */}
        <section id="nsdr" className={`${styles.block} ${styles.twoCol}`}>
          <div>
            <h2 className={styles.blockTitle}>NSDR / Yoga Nidra</h2>
            <p className={styles.blockSubtitle}>
              Use 10–40 minute non-sleep deep rest to restore dopamine, reduce stress, and improve learning.
            </p>

            <AudioPlayer label="10-Minute NSDR" src="/audio/nsdr-10m.mp3" />
            <AudioPlayer label="20-Minute NSDR" src="/audio/nsdr-20m.mp3" />
            <AudioPlayer label="40-Minute NSDR" src="/audio/nsdr-40m.mp3" />
          </div>

          <div>
            <h3 className={styles.blockTitle}>Get the weekly protocol digest</h3>
            <p className={styles.blockSubtitle}>
              One concise email with actionable steps, references, and tools.
            </p>
            <form
              action="https://formspree.io/f/xayvlqyy" /* replace with your Formspree endpoint */
              method="POST"
            >
              <input
                type="email"
                name="email"
                placeholder="you@domain.com"
                required
                aria-label="Email address"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  background: "var(--panel)",
                  color: "var(--text)",
                  outline: "none",
                  marginBottom: "12px",
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid var(--border-strong)",
                  background: "linear-gradient(180deg, #1a1a1a, #0e0e0e)",
                  color: "var(--text)",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </form>
            <p className={styles.blockSubtitle} style={{ marginTop: 10 }}>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>

        <div className={styles.divider} />

        {/* ARTICLES */}
        <section aria-label="Articles" className={styles.sectionsGrid}>
          {articles.map((a) => (
            <ArticleCard key={a.title} title={a.title} blurb={a.blurb} href={a.url} />
          ))}
        </section>

        <div style={{ height: 48 }} />

        <p className={styles.footerNote}>
          Content compiled from peer-reviewed research discussed on the Huberman Lab Podcast.
          This educational site is not medical advice.
        </p>

        <div style={{ height: 32 }} />
      </main>

      <Footer />
    </div>
  );
}