import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Quote from "../app/components/Quote";
import { FadeIn, FadeInScale } from "../app/components/Motion";
import CircadianWheel from "../app/components/CircadianWheel";
import BodySystemDiagram from "../app/components/BodySystemDiagram";
import NeurotransmitterBalance from "../app/components/NeurotransmitterBalance";
import styles from "./page.module.css";

export const metadata = {
  title: "Huberman Protocol – Science-Based Systems for Mind & Body",
  description: "Understand the neuroscience-based framework for optimizing sleep, stress, focus, and recovery.",
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="container">
        {/* HERO */}
        <section className={styles.hero}>
          <FadeIn>
            <h1 className={styles.title}>Science-Based Systems for the Brain & Body</h1>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className={styles.subtitle}>
              A framework built on validated neuroscience to regulate sleep, stress,
              focus, and recovery — inspired by Dr. Andrew Huberman and supported by current research.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className={styles.ctas}>
              <a href="/daily" className={styles.buttonPrimary}>Start Daily Protocol</a>
              <a href="#pillars" className={styles.buttonGhost}>Learn the Science</a>
            </div>
          </FadeIn>
        </section>

        {/* QUOTE */}
        <Quote />

        {/* FIVE PILLARS */}
        <section id="pillars" className={styles.pillars}>
          <FadeIn><h2>Core Pillars of Human Optimization</h2></FadeIn>
          <div className={styles.grid}>
            {pillars.map((p, idx) => (
              <FadeInScale key={p.title} delay={idx * 0.06}>
                <div className={styles.card}>
                  <div className={styles.icon}>{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul>
                    {p.actions.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                </div>
              </FadeInScale>
            ))}
          </div>
        </section>

        {/* THE SCIENCE */}
        <section className={styles.science}>
          <FadeIn><h2>The Neuroscience Behind the System</h2></FadeIn>
          <FadeIn delay={0.05}>
            <p>
              Your biology follows predictable rhythms. Light, movement, breath, and rest
              determine hormone release, attention, and recovery. By aligning these behaviors
              with your natural cycles, you can improve performance, mood, and longevity
              without willpower or supplements.
            </p>
          </FadeIn>

          <div className={styles.scienceGrid}>
            {science.map((s, i) => (
              <FadeIn key={s.t} delay={i * 0.05}>
                <div className={styles.card}>
                  <h4 style={{ marginTop: 0 }}>{s.t}</h4>
                  <p style={{ color: "var(--muted)" }}>{s.p}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
{/* PROTOCOL LIBRARY (actionable) */}
<section className={styles.library}>
  <h2>Protocol Library (Do These Today)</h2>
  <div className={styles.protoGrid}>

    {/* SLEEP */}
    <article id="sleep" className={styles.proto}>
      <h3>Sleep Protocol</h3>
      <p>Anchor circadian rhythm and reduce sleep latency.</p>
      <ul>
        <li>🌅 <strong>Morning light:</strong> 10–30 min outdoors within 60 min of waking.</li>
        <li>☕ <strong>Caffeine cutoff:</strong> ~8–10 hours before intended sleep.</li>
        <li>🕯️ <strong>Evening dim:</strong> 90 min before bed, reduce bright screens; use warm/low lights.</li>
        <li>❄️ <strong>Cool, dark room:</strong> ~18–20 °C; blackout and quiet if possible.</li>
        <li>🧘 <strong>NSDR:</strong> 10–20 min on low-sleep days to restore alertness.</li>
      </ul>
      <p className={styles.smallNote}>Why it works: light → ipRGCs → SCN entrainment; dim evenings support melatonin.</p>
    </article>

    {/* STRESS */}
    <article id="stress" className={styles.proto}>
      <h3>Stress Regulation</h3>
      <p>Rapid state control via breath + deliberate recovery.</p>
      <ul>
        <li>💨 <strong>Physiological sigh:</strong> 1× double nasal inhale + long exhale, 1–3 min during spikes.</li>
        <li>🧘 <strong>NSDR/Yoga Nidra:</strong> 10–40 min to reduce cortisol and reset dopamine.</li>
        <li>🚶 <strong>Walk:</strong> 10–20 min brisk walk, especially post-meal or during work breaks.</li>
        <li>❄️ <strong>Optional cold:</strong> Short, safe cold exposure; end on cold for adaptation (screen for contraindications).</li>
      </ul>
      <p className={styles.smallNote}>Why it works: CO₂ offload + vagal tone shift; deliberate stress improves stress tolerance.</p>
    </article>

    {/* FOCUS */}
    <article id="focus" className={styles.proto}>
      <h3>Focus & Productivity</h3>
      <p>Structure dopamine and attention with timed effort/recovery.</p>
      <ul>
        <li>⏱️ <strong>90/20 cycles:</strong> Deep work 60–90 min → 10–20 min reset (walk, breath, eyes off screens).</li>
        <li>☕ <strong>Caffeine timing:</strong> Use early day; avoid after midday if sleep is a goal.</li>
        <li>🧘 <strong>NSDR after heavy learning:</strong> 10 min to consolidate memory.</li>
        <li>🌅 <strong>Light + movement first:</strong> Set arousal before cognitive blocks.</li>
      </ul>
      <p className={styles.smallNote}>Why it works: controlled arousal windows + parasympathetic resets maintain performance.</p>
    </article>

    {/* RECOVERY */}
    <article id="recovery" className={styles.proto}>
      <h3>Recovery & Resilience</h3>
      <p>Intentional down-regulation to improve baseline.</p>
      <ul>
        <li>🧘 <strong>NSDR:</strong> 10–30 min on high-stress or low-sleep days.</li>
        <li>💨 <strong>Downshift breathing:</strong> slow nasal exhales (e.g., 4–6 breaths/min for 5 min).</li>
        <li>🌙 <strong>Evening routine:</strong> dim environment, low stimulation, consistent sleep window.</li>
        <li>📓 <strong>Gratitude:</strong> 2–3 min, specific and other-focused (pro-social bias).</li>
      </ul>
      <p className={styles.smallNote}>Why it works: parasympathetic activation restores dopaminergic tone and sleep readiness.</p>
    </article>

    {/* NUTRITION */}
    <article id="nutrition" className={styles.proto}>
      <h3>Nutrition & Movement</h3>
      <p>Stable energy, better glucose control, mitochondrial health.</p>
      <ul>
        <li>🥚 <strong>Protein target:</strong> ~1.6–2.2 g/kg per body weight/day , spread across meals.</li>
        <li>🚶 <strong>Post-meal walk:</strong> 10–15 min to blunt glucose spikes.</li>
        <li>🚴 <strong>Zone 2:</strong> 150–180 min/week conversation-pace cardio; add 2–3 short HIIT bouts.</li>
        <li>🕰️ <strong>Feeding window:</strong> 12–16 h daily if appropriate; finish eating 2–3 h before bed.</li>
        <li>🧂 <strong>Hydration & electrolytes:</strong> especially with fasts or training.</li>
      </ul>
      <p className={styles.smallNote}>Why it works: better glycemic control and aerobic base support brain & body performance.</p>
    </article>

  </div>
</section>

        {/* INTERACTIVE VISUALIZATIONS */}
        <section className={styles.visualizations}>
          <FadeIn><h2>Interactive Science Visualizations</h2></FadeIn>
          <FadeIn delay={0.05}>
            <p>Explore how protocols affect your biology in real-time</p>
          </FadeIn>
          
          <div className={styles.visualGrid}>
            <FadeIn delay={0.1}>
              <div className={styles.visualCard}>
                <CircadianWheel />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.15}>
              <div className={styles.visualCard}>
                <BodySystemDiagram />
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.2}>
            <div className={styles.visualCardFull}>
              <NeurotransmitterBalance />
            </div>
          </FadeIn>
        </section>

        {/* CTA */}
        <FadeIn>
          <section className={styles.ctaBlock}>
            <h2>Start Your Daily Neuroscience System</h2>
            <p>
              Move from knowledge to action. The Daily page guides you step-by-step through
              morning light, breathing, NSDR, and sleep planning.
            </p>
            <a href="/daily" className={styles.buttonPrimaryLarge}>Begin My Day →</a>
          </section>
        </FadeIn>
      </main>

      <Footer />
    </>
  );
}

const pillars = [
  { title: "Sleep", icon: "🌙", desc: "Anchor circadian rhythm and improve recovery.", actions: ["Morning light exposure", "Caffeine cutoff", "NSDR or nap"] },
  { title: "Stress", icon: "💨", desc: "Regulate your autonomic nervous system.", actions: ["Physiological sigh", "Cold exposure", "Evening calm routine"] },
  { title: "Focus", icon: "🧠", desc: "Control dopamine and attention through structured effort & rest.", actions: ["90/20 deep-work cycles", "NSDR after intense focus", "Caffeine timing"] },
  { title: "Recovery", icon: "🧘", desc: "Reset your nervous system and build resilience.", actions: ["NSDR", "Breathwork", "Sleep hygiene"] },
  { title: "Nutrition & Movement", icon: "🥗", desc: "Fuel mitochondria and stabilize energy.", actions: ["Protein-rich meals", "Zone-2 cardio", "Post-meal walks"] },
];

const science = [
  { t: "🔆 Light & Circadian Rhythm", p: "Morning sunlight activates ipRGCs, anchoring the SCN and regulating cortisol & melatonin." },
  { t: "💨 Breath & State Control", p: "Physiological sighs modulate CO₂ and vagal tone, shifting you from stress to calm." },
  { t: "🧘 Recovery & Learning", p: "NSDR restores dopamine and accelerates learning via parasympathetic activation." },
];
