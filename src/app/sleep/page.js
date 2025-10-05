import Header from "../components/Header";
import Footer from "../components/Footer";
import SleepTool from "../components/SleepTool";
import { FadeIn } from "../components/Motion";
import styles from "./page.module.css";

export const metadata = {
  title: "Sleep Optimization - Huberman Protocol",
  description: "Complete sleep optimization system with circadian timing, environment setup, and science-backed supplements.",
};

export default function SleepPage() {
  const supplements = [
    { name: "Magnesium Glycinate", dose: "200-400mg", timing: "30-60min before bed", note: "Promotes relaxation & muscle recovery" },
    { name: "Theanine", dose: "100-400mg", timing: "30-60min before bed", note: "Reduces anxiety without sedation" },
    { name: "Apigenin", dose: "50mg", timing: "30-60min before bed", note: "Mild sedative effect from chamomile" },
    { name: "Melatonin", dose: "0.5-3mg", timing: "30min before bed", note: "Start low - less is often more effective" },
    { name: "Glycine", dose: "2-3g", timing: "Before bed", note: "Lowers core body temperature" },
  ];

  const tips = [
    "Keep room temperature 65-68°F (18-20°C) - your brain needs to cool down to sleep",
    "No screens 1-2 hours before bed - blue light suppresses melatonin by 50%+",
    "If you wake up at 3am, don't check the time - creates anxiety and cortisol spike",
    "Mouth tape can improve sleep quality by forcing nasal breathing",
    "Cold shower 1-3 hours before bed can improve sleep onset via temperature drop",
    "Wear blue light blocking glasses if you must use screens in evening",
    "Keep consistent sleep/wake times - even 30min variance affects circadian rhythm",
    "Morning sunlight within 30-60min of waking sets your circadian clock",
  ];

  const phases = [
    { name: "Wind Down (2 hours before)", items: ["Dim all lights", "No more food/water", "Gentle stretching", "Read fiction"] },
    { name: "Pre-Sleep (1 hour before)", items: ["Cool room to 65-68°F", "No screens", "Meditation/breathing", "Take supplements"] },
    { name: "Sleep Environment", items: ["Blackout curtains/eye mask", "White noise or earplugs", "Comfortable temperature", "Phone in airplane mode"] },
    { name: "Morning Protocol", items: ["No snooze button", "Immediate bright light", "Hydrate first", "Movement within 1 hour"] },
  ];

  return (
    <>
      <Header />
      <main className="container">
        <div className={styles.pageWrap}>
          {/* HERO */}
          <section className={styles.hero}>
            <FadeIn>
              <h1 className={styles.pageTitle}>Sleep Optimization System</h1>
              <p className={styles.pageSubtitle}>
                Master your circadian rhythm, environment, and recovery. Quality sleep is the foundation of everything else.
              </p>
            </FadeIn>
          </section>

          {/* SLEEP CALCULATOR */}
          <FadeIn delay={0.1}>
            <section className={styles.toolSection}>
              <h2>Sleep Timing Calculator</h2>
              <p className={styles.sectionDesc}>Calculate your optimal caffeine cutoff and sleep window based on wake time.</p>
              <SleepTool />
            </section>
          </FadeIn>

          {/* SLEEP PHASES */}
          <FadeIn delay={0.2}>
            <section className={styles.section}>
              <h2>4-Phase Sleep Protocol</h2>
              <div className={styles.phasesGrid}>
                {phases.map((phase, i) => (
                  <div key={i} className={styles.phaseCard}>
                    <h3>{phase.name}</h3>
                    <ul>
                      {phase.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* SCIENCE-BACKED TIPS */}
          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <h2>Sleep Optimization Tips</h2>
              <p className={styles.sectionDesc}>Non-obvious but scientifically validated strategies for better sleep.</p>
              <div className={styles.tipsGrid}>
                {tips.map((tip, i) => (
                  <div key={i} className={styles.tipCard}>
                    <span className={styles.tipIcon}>💡</span>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* SUPPLEMENTS */}
          <FadeIn delay={0.4}>
            <section className={styles.section}>
              <h2>Sleep Supplements Stack</h2>
              <p className={styles.sectionDesc}>Evidence-based supplements that can improve sleep quality. Start with one at a time.</p>
              <div className={styles.supplementsTable}>
                <div className={styles.tableHeader}>
                  <span>Supplement</span>
                  <span>Dose</span>
                  <span>Timing</span>
                  <span>Effect</span>
                </div>
                {supplements.map((supp, i) => (
                  <div key={i} className={styles.tableRow}>
                    <span className={styles.suppName}>{supp.name}</span>
                    <span>{supp.dose}</span>
                    <span>{supp.timing}</span>
                    <span className={styles.suppNote}>{supp.note}</span>
                  </div>
                ))}
              </div>
              <div className={styles.disclaimer}>
                ⚠️ Consult healthcare provider before starting supplements. Individual responses vary significantly.
              </div>
            </section>
          </FadeIn>

          {/* CIRCADIAN SCIENCE */}
          <FadeIn delay={0.5}>
            <section className={styles.section}>
              <h2>The Science: Why This Works</h2>
              <div className={styles.scienceGrid}>
                <div className={styles.scienceCard}>
                  <h3>Circadian Clock (SCN)</h3>
                  <p>Your suprachiasmatic nucleus responds to light/dark cycles. Morning light advances your phase, evening light delays it. This is why consistent timing matters more than duration.</p>
                </div>
                <div className={styles.scienceCard}>
                  <h3>Temperature Regulation</h3>
                  <p>Core body temperature drops 1-2°C during sleep. Cool environments facilitate this drop. Hot baths work because the subsequent cooling triggers sleepiness.</p>
                </div>
                <div className={styles.scienceCard}>
                  <h3>Adenosine Clearance</h3>
                  <p>Sleep clears adenosine (fatigue chemical) from your brain. Caffeine blocks adenosine receptors - why timing matters for sleep quality.</p>
                </div>
              </div>
            </section>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
