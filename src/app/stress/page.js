import Header from "../components/Header";
import Footer from "../components/Footer";
import BreathingTool from "../components/BreathingTool";
import { FadeIn } from "../components/Motion";
import styles from "../sleep/page.module.css"; // Use shared styles

export const metadata = {
  title: "Stress Management & Focus - Huberman Protocol",
  description: "Evidence-based stress management tools, breathing techniques, and focus optimization strategies.",
};

export default function StressPage() {
  const stressSupplements = [
    { name: "Ashwagandha", dose: "300-600mg", timing: "Morning or evening", note: "Reduces cortisol & stress response" },
    { name: "L-Theanine", dose: "100-400mg", timing: "As needed", note: "Calm focus without sedation" },
    { name: "Magnesium", dose: "200-400mg", timing: "Evening", note: "Nervous system regulation" },
    { name: "Rhodiola", dose: "100-400mg", timing: "Morning on empty stomach", note: "Adaptogen for stress resilience" },
    { name: "Phosphatidylserine", dose: "100-200mg", timing: "Evening", note: "Blunts cortisol response" },
  ];

  const stressTips = [
    "Cold exposure 2-4x per week builds stress resilience through controlled stress",
    "Double inhale + long exhale activates parasympathetic nervous system in real-time",
    "NSDR (Yoga Nidra) restores dopamine levels depleted by chronic stress",
    "Morning sunlight exposure regulates cortisol awakening response",
    "Limit news/social media in first hour of waking to prevent cortisol spike",
    "Exercise within 2-8 hours of waking optimizes cortisol rhythm",
    "Gratitude practice rewires stress response circuits in prefrontal cortex",
    "Box breathing (4-4-4-4) before stressful events improves performance",
  ];

  const focusTechniques = [
    { 
      name: "Physiological Sigh", 
      duration: "1-3 minutes", 
      when: "Real-time stress", 
      how: "Double inhale through nose, long exhale through mouth" 
    },
    { 
      name: "Box Breathing", 
      duration: "5-10 minutes", 
      when: "Before focus sessions", 
      how: "Inhale 4 → Hold 4 → Exhale 4 → Hold 4" 
    },
    { 
      name: "Wim Hof Breathing", 
      duration: "10-15 minutes", 
      when: "Morning routine", 
      how: "30 deep breaths → Hold → Repeat 3 rounds" 
    },
    { 
      name: "4-7-8 Breathing", 
      duration: "5 minutes", 
      when: "Before sleep/relaxation", 
      how: "Inhale 4 → Hold 7 → Exhale 8" 
    },
  ];

  const addictionStrategies = [
    {
      addiction: "Social Media",
      strategies: [
        "Delete apps from phone, use browser versions only",
        "Set specific times: check 2-3x daily for 10 minutes max",
        "Use app timers and grayscale mode to reduce dopamine hits",
        "Replace scroll time with physical activity or reading",
        "Keep phone outside bedroom - use analog alarm clock"
      ]
    },
    {
      addiction: "Gaming", 
      strategies: [
        "Set strict time limits using built-in controls",
        "Schedule gaming after productive activities only",
        "Use the 'gaming as reward' system for completing goals",
        "Find multiplayer activities that involve physical movement",
        "Replace competitive games with creative or educational ones"
      ]
    },
    {
      addiction: "Junk Food",
      strategies: [
        "Don't buy it - if it's not in the house, you can't eat it",
        "Eat protein first at every meal to increase satiety",
        "Stay hydrated - thirst often masquerades as hunger",
        "Plan and prep whole food meals in advance",
        "Use smaller plates and eat slowly to enhance satisfaction"
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="container">
        <div className={styles.pageWrap}>
          {/* HERO */}
          <section className={styles.hero}>
            <FadeIn>
              <h1 className={styles.pageTitle}>Stress Management & Focus</h1>
              <p className={styles.pageSubtitle}>
                Master your stress response, build resilience, and optimize focus with science-backed tools.
              </p>
            </FadeIn>
          </section>

          {/* BREATHING TOOL */}
          <FadeIn delay={0.1}>
            <section className={styles.toolSection}>
              <h2>Physiological Sigh Tool</h2>
              <p className={styles.sectionDesc}>The fastest way to shift from stress to calm. Based on neuroscience research.</p>
              <BreathingTool />
            </section>
          </FadeIn>

          {/* BREATHING TECHNIQUES */}
          <FadeIn delay={0.2}>
            <section className={styles.section}>
              <h2>Breathing Techniques Arsenal</h2>
              <p className={styles.sectionDesc}>Different techniques for different situations and goals.</p>
              <div className={styles.techniquesGrid}>
                {focusTechniques.map((tech, i) => (
                  <div key={i} className={styles.techniqueCard}>
                    <h3>{tech.name}</h3>
                    <div className={styles.techDetails}>
                      <span><strong>Duration:</strong> {tech.duration}</span>
                      <span><strong>Best for:</strong> {tech.when}</span>
                      <span><strong>How:</strong> {tech.how}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* ADDICTION CONTROL */}
          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <h2>Addiction Control Strategies</h2>
              <p className={styles.sectionDesc}>Practical approaches to manage modern addictions and build healthier habits.</p>
              <div className={styles.addictionGrid}>
                {addictionStrategies.map((item, i) => (
                  <div key={i} className={styles.addictionCard}>
                    <h3>🎯 {item.addiction}</h3>
                    <ul>
                      {item.strategies.map((strategy, j) => (
                        <li key={j}>{strategy}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* STRESS TIPS */}
          <FadeIn delay={0.4}>
            <section className={styles.section}>
              <h2>Stress Optimization Tips</h2>
              <p className={styles.sectionDesc}>Science-backed strategies that most people don&apos;t know about.</p>
              <div className={styles.tipsGrid}>
                {stressTips.map((tip, i) => (
                  <div key={i} className={styles.tipCard}>
                    <span className={styles.tipIcon}>⚡</span>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* SUPPLEMENTS */}
          <FadeIn delay={0.5}>
            <section className={styles.section}>
              <h2>Stress & Focus Supplements</h2>
              <p className={styles.sectionDesc}>Evidence-based supplements for stress resilience and mental clarity.</p>
              <div className={styles.supplementsTable}>
                <div className={styles.tableHeader}>
                  <span>Supplement</span>
                  <span>Dose</span>
                  <span>Timing</span>
                  <span>Effect</span>
                </div>
                {stressSupplements.map((supp, i) => (
                  <div key={i} className={styles.tableRow}>
                    <span className={styles.suppName}>{supp.name}</span>
                    <span>{supp.dose}</span>
                    <span>{supp.timing}</span>
                    <span className={styles.suppNote}>{supp.note}</span>
                  </div>
                ))}
              </div>
              <div className={styles.disclaimer}>
                ⚠️ Start with one supplement at a time. Consult healthcare provider for interactions.
              </div>
            </section>
          </FadeIn>

          {/* SCIENCE */}
          <FadeIn delay={0.6}>
            <section className={styles.section}>
              <h2>The Science: How Stress Actually Works</h2>
              <div className={styles.scienceGrid}>
                <div className={styles.scienceCard}>
                  <h3>HPA Axis</h3>
                  <p>Hypothalamic-Pituitary-Adrenal axis controls stress response. Chronic activation leads to burnout. Controlled stress (exercise, cold) builds resilience.</p>
                </div>
                <div className={styles.scienceCard}>
                  <h3>Vagus Nerve</h3>
                  <p>Longest cranial nerve connecting brain to organs. Breathing techniques activate vagal tone, shifting from sympathetic to parasympathetic dominance.</p>
                </div>
                <div className={styles.scienceCard}>
                  <h3>Dopamine Dysregulation</h3>
                  <p>Modern addictions hijack reward pathways. Intermittent reinforcement creates strongest addiction patterns. Controlled dopamine spikes restore baseline.</p>
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
