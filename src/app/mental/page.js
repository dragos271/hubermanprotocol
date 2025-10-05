import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Motion";
import styles from "../sleep/page.module.css"; // Use shared styles

export const metadata = {
  title: "Mental Health & Focus - Huberman Protocol",
  description: "Optimize mental clarity, focus, and emotional regulation with evidence-based protocols.",
};

export default function MentalPage() {
  const mentalSupplements = [
    { name: "Alpha-GPC", dose: "300-600mg", timing: "Morning", note: "Enhances focus & acetylcholine production" },
    { name: "Lion's Mane", dose: "500-1000mg", timing: "Morning", note: "Supports neuroplasticity & brain health" },
    { name: "Omega-3 (EPA)", dose: "1-2g", timing: "With meals", note: "Reduces inflammation, supports mood" },
    { name: "Creatine", dose: "5g", timing: "Daily", note: "Brain energy, especially for vegetarians" },
    { name: "Bacopa Monnieri", dose: "300-600mg", timing: "With meals", note: "Memory enhancement & stress reduction" },
  ];

  const focusProtocols = [
    {
      name: "90-Minute Focus Blocks",
      description: "Align with natural ultradian rhythms",
      steps: [
        "Work in 90-minute focused blocks",
        "Take 20-minute breaks between blocks",
        "No phone/distractions during focus time",
        "Track your natural energy peaks"
      ]
    },
    {
      name: "Morning Focus Stack",
      description: "Prime your brain for peak performance",
      steps: [
        "Cold shower or splash (2-3 minutes)",
        "Bright light exposure (10+ minutes)",
        "Caffeine 90-120 minutes after waking",
        "Alpha-GPC or Lion's Mane supplementation"
      ]
    },
    {
      name: "Deep Work Environment",
      description: "Optimize your physical space for focus",
      steps: [
        "Phone in another room or airplane mode",
        "Cool temperature (68-70°F)",
        "Instrumental music or white noise",
        "Clean, minimalist workspace"
      ]
    }
  ];

  const mentalTips = [
    "Dopamine baseline sets your motivation - avoid dopamine stacking (music + caffeine + phone)",
    "Morning sunlight within 30-60 minutes boosts mood via serotonin pathways",
    "Exercise is more effective than antidepressants for mild-moderate depression",
    "Gratitude practice physically changes brain structure in 8 weeks",
    "Social connection releases oxytocin - prioritize face-to-face interactions",
    "NSDR restores dopamine baseline better than meditation for most people",
    "Intermittent fasting can improve brain-derived neurotrophic factor (BDNF)",
    "Cold exposure increases norepinephrine 2.5x, improving focus for hours",
  ];

  const lockInStrategies = [
    {
      category: "Eliminate Distractions",
      tactics: [
        "Use website blockers during work hours",
        "Put phone in drawer, not just face down", 
        "Close all unnecessary browser tabs",
        "Use noise-canceling headphones",
        "Work in dedicated space only"
      ]
    },
    {
      category: "Energy Management", 
      tactics: [
        "Match hardest tasks to your peak energy times",
        "Use the 2-minute rule: if it takes <2min, do it now",
        "Time-block your calendar with specific tasks",
        "Batch similar activities together",
        "Take breaks before you feel tired"
      ]
    },
    {
      category: "Mindset Shifts",
      tactics: [
        "Focus on process, not outcomes",
        "Celebrate small wins to maintain dopamine",
        "Use implementation intentions: 'If X, then Y'",
        "Reframe challenges as skill-building opportunities",
        "Practice self-compassion when you slip up"
      ]
    }
  ];

  const moodBoosters = [
    { activity: "Morning sunlight", time: "10-30 min", benefit: "Regulates circadian rhythm & serotonin" },
    { activity: "Gratitude journaling", time: "5 min", benefit: "Increases dopamine & reduces rumination" },
    { activity: "Social connection", time: "15+ min", benefit: "Releases oxytocin, reduces cortisol" },
    { activity: "Exercise", time: "20+ min", benefit: "Increases BDNF, endorphins, & neuroplasticity" },
    { activity: "Nature exposure", time: "15+ min", benefit: "Reduces stress hormones & mental fatigue" },
    { activity: "Deep breathing", time: "5 min", benefit: "Activates parasympathetic nervous system" },
  ];

  return (
    <>
      <Header />
      <main className="container">
        <div className={styles.pageWrap}>
          {/* HERO */}
          <section className={styles.hero}>
            <FadeIn>
              <h1 className={styles.pageTitle}>Mental Health & Peak Focus</h1>
              <p className={styles.pageSubtitle}>
                Get locked in, stay focused, and optimize your mental state with neuroscience-backed protocols.
              </p>
            </FadeIn>
          </section>

          {/* FOCUS PROTOCOLS */}
          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <h2>🎯 Lock-In Protocols</h2>
              <p className={styles.sectionDesc}>Science-based systems to achieve deep focus and sustained attention.</p>
              <div className={styles.protocolsGrid}>
                {focusProtocols.map((protocol, i) => (
                  <div key={i} className={styles.protocolCard}>
                    <h3>{protocol.name}</h3>
                    <p className={styles.protocolDesc}>{protocol.description}</p>
                    <ul>
                      {protocol.steps.map((step, j) => (
                        <li key={j}>{step}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* LOCK-IN STRATEGIES */}
          <FadeIn delay={0.2}>
            <section className={styles.section}>
              <h2>🔒 Lock-In Strategies</h2>
              <p className={styles.sectionDesc}>Practical tactics to eliminate distractions and maximize productivity.</p>
              <div className={styles.strategiesGrid}>
                {lockInStrategies.map((category, i) => (
                  <div key={i} className={styles.strategyCard}>
                    <h3>{category.category}</h3>
                    <ul>
                      {category.tactics.map((tactic, j) => (
                        <li key={j}>{tactic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* MOOD BOOSTERS */}
          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <h2>💫 Daily Mood Boosters</h2>
              <p className={styles.sectionDesc}>Simple activities with outsized impact on mental state.</p>
              <div className={styles.moodGrid}>
                {moodBoosters.map((item, i) => (
                  <div key={i} className={styles.moodCard}>
                    <h4>{item.activity}</h4>
                    <div className={styles.moodDetails}>
                      <span className={styles.time}>⏱️ {item.time}</span>
                      <span className={styles.benefit}>{item.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* MENTAL OPTIMIZATION TIPS */}
          <FadeIn delay={0.4}>
            <section className={styles.section}>
              <h2>Mental Optimization Tips</h2>
              <p className={styles.sectionDesc}>Evidence-based insights most people don&apos;t know about mental performance.</p>
              <div className={styles.tipsGrid}>
                {mentalTips.map((tip, i) => (
                  <div key={i} className={styles.tipCard}>
                    <span className={styles.tipIcon}>🧠</span>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* SUPPLEMENTS */}
          <FadeIn delay={0.5}>
            <section className={styles.section}>
              <h2>Focus & Mental Health Supplements</h2>
              <p className={styles.sectionDesc}>Evidence-based supplements for cognitive enhancement and mood regulation.</p>
              <div className={styles.supplementsTable}>
                <div className={styles.tableHeader}>
                  <span>Supplement</span>
                  <span>Dose</span>
                  <span>Timing</span>
                  <span>Effect</span>
                </div>
                {mentalSupplements.map((supp, i) => (
                  <div key={i} className={styles.tableRow}>
                    <span className={styles.suppName}>{supp.name}</span>
                    <span>{supp.dose}</span>
                    <span>{supp.timing}</span>
                    <span className={styles.suppNote}>{supp.note}</span>
                  </div>
                ))}
              </div>
              <div className={styles.disclaimer}>
                ⚠️ Individual responses vary. Start with lowest effective dose and monitor effects.
              </div>
            </section>
          </FadeIn>

          {/* SCIENCE */}
          <FadeIn delay={0.6}>
            <section className={styles.section}>
              <h2>The Science: How Focus & Mood Work</h2>
              <div className={styles.scienceGrid}>
                <div className={styles.scienceCard}>
                  <h3>Attention Networks</h3>
                  <p>Three attention networks: alerting, orienting, executive. Modern distractions hijack these systems. Meditation strengthens executive attention control.</p>
                </div>
                <div className={styles.scienceCard}>
                  <h3>Dopamine & Motivation</h3>
                  <p>Dopamine drives wanting, not liking. Constant stimulation raises dopamine baseline, reducing motivation. Strategic dopamine fasting restores sensitivity.</p>
                </div>
                <div className={styles.scienceCard}>
                  <h3>Neuroplasticity</h3>
                  <p>Brain changes throughout life. Focused attention triggers neuroplastic changes. Sleep consolidates new neural pathways formed during focused practice.</p>
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
