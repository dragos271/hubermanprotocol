import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Sleep Hygiene – Huberman Protocol",
  description:
    "Master restorative sleep with Huberman Lab protocols that align light, temperature, and circadian timing.",
};

const heroStats = [
  { value: "25-50%", label: "Faster Sleep Onset*" },
  { value: "20-30%", label: "Sleep Quality Lift" },
  { value: "7-14", label: "Days for Adaptation" },
];

const sleepProtocols = [
  {
    icon: "🌡️",
    timing: "1-2 h before bed",
    title: "Temperature Optimization",
    description: "Cool your core while keeping extremities warm to accelerate sleep onset.",
    actions: [
      "Set bedroom to 18-20°C (65-68°F)",
      "Take hot shower/bath 1–2 hours pre-bed",
      "Use breathable sheets + warming socks",
      "Avoid intense exercise in final hour",
    ],
    science:
      "Core temperature naturally drops before sleep. Heating extremities while cooling the room speeds this vasodilation-driven process.",
  },
  {
    icon: "💡",
    timing: "2-3 h before bed",
    title: "Light Environment",
    description: "Dim lights and reduce blue spectrum to support melatonin production.",
    actions: [
      "Dim household lights to <50%",
      "Switch to warm (<2,700K) bulbs at night",
      "Limit screens 1–2 hours before bed",
      "Ensure full darkness with blackout shades",
    ],
    science:
      "Blue light suppresses melatonin for hours. Even low levels during sleep can fragment deep and REM stages.",
  },
  {
    icon: "⏰",
    timing: "Daily",
    title: "Timing Consistency",
    description: "Maintain a regular sleep-wake schedule to strengthen circadian rhythms.",
    actions: [
      "Target the same bedtime/wake-up ±30 minutes",
      "Expose to morning light within 60 minutes of waking",
      "Keep weekend schedules similar",
      "Use short (20 min) early naps only if needed",
    ],
    science:
      "The SCN (master clock) relies on consistent cues. Regularity boosts circadian amplitude and sleep efficiency.",
  },
  {
    icon: "🧘",
    timing: "60-90 min before bed",
    title: "Wind-Down Ritual",
    description: "Transition the nervous system into parasympathetic dominance.",
    actions: [
      "10–20 minute NSDR or meditation",
      "Journal or gratitude list to offload thoughts",
      "Gentle stretching or yoga",
      "Read non-work fiction under warm light",
    ],
    science:
      "Lowering cortisol prior to bed improves latency and increases slow-wave sleep.",
  },
  {
    icon: "🛏️",
    timing: "Setup once",
    title: "Environment Design",
    description: "Optimize the bedroom for comfort, sound, and association with sleep.",
    actions: [
      "Invest in supportive mattress & pillows",
      "Use white noise or earplugs if needed",
      "Remove non-sleep electronics",
      "Reserve bedroom for sleep & intimacy only",
    ],
    science:
      "The brain links environment with state; minimizing cues for wakefulness reduces arousal in bed.",
  },
  {
    icon: "🍽️",
    timing: "3+ h before bed",
    title: "Nutrition Timing",
    description: "Finish meals early and limit stimulants to support adenosine.",
    actions: [
      "End last meal 3–4 hours pre-bed",
      "Cut caffeine 8 hours before sleep",
      "Limit alcohol (it fragments REM)",
      "Use small protein snack if genuinely hungry",
    ],
    science:
      "Digestion and caffeine delay sleep via temperature and adenosine blockade. Alcohol disrupts REM and deep sleep.",
  },
];

const sleepSupplements = [
  {
    name: "Magnesium Glycinate",
    dosage: "200–400 mg",
    timing: "30–60 min pre-bed",
    mechanism: "GABA support, muscle relaxation",
    evidence: "Clinical studies show reduced sleep latency and improved quality.",
  },
  {
    name: "Melatonin",
    dosage: "0.5–3 mg",
    timing: "30 min before target bedtime",
    mechanism: "Circadian phase shift",
    evidence: "Best for jet lag/shift work; minimal benefit for otherwise healthy sleepers.",
  },
  {
    name: "L-theanine",
    dosage: "100–200 mg",
    timing: "30 min pre-bed",
    mechanism: "Alpha brain waves, cortisol reduction",
    evidence: "Improves sleep quality without sedation; complements magnesium.",
  },
  {
    name: "Glycine",
    dosage: "1–3 g",
    timing: "30 min pre-bed",
    mechanism: "Core temperature reduction, NMDA modulation",
    evidence: "Trials show faster sleep onset and subjective sleep improvements.",
  },
];

export default function SleepHygienePage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="🛏️"
          title="Sleep"
          accent="Hygiene"
          subtitle="Stack behaviors that align circadian rhythm, adenosine pressure, and nervous-system calm for world-class sleep."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Sleep Architecture 101</h2>
                <p className={styles.sectionSubtitle}>
                  Sleep quality hinges on two systems: circadian clock (light-driven) and sleep pressure (adenosine buildup). Manipulate light, temperature, and routine to maximize both.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Morning sunlight anchors the circadian clock, while consistent wind-down cues allow adenosine to take over at night. Layer the protocols below slowly—stacking habits over 1–2 weeks for lasting change.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Evidence-Based Protocols</h2>
                <p className={styles.sectionSubtitle}>
                  Address the inputs that most affect latency, depth, and recovery.
                </p>
              </div>
              <div className={styles.protocolsGrid}>
                {sleepProtocols.map((protocol, index) => (
                  <FadeInScale key={protocol.title} delay={index * 0.05}>
                    <article className={styles.protocolCard}>
                      <div className={styles.protocolHeader}>
                        <div className={styles.protocolIcon}>{protocol.icon}</div>
                        <div className={styles.protocolTiming}>{protocol.timing}</div>
                      </div>
                      <h3>{protocol.title}</h3>
                      <p className={styles.protocolDescription}>{protocol.description}</p>
                      <div className={styles.protocolActions}>
                        <h4>Implementation</h4>
                        <ul>
                          {protocol.actions.map((action) => (
                            <li key={action}>{action}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.protocolScience}>
                        <h4>Why it works</h4>
                        <p>{protocol.science}</p>
                      </div>
                    </article>
                  </FadeInScale>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Supplement Framework</h2>
                <p className={styles.sectionSubtitle}>
                  Add only after behavioral foundations. Introduce one compound at a time and consult your clinician.
                </p>
              </div>
              <div className={styles.resourceList}>
                {sleepSupplements.map((supplement) => (
                  <div key={supplement.name} className={styles.resourceItem}>
                    <strong>{supplement.name}</strong>
                    <span>Dosage: {supplement.dosage}</span>
                    <span>Timing: {supplement.timing}</span>
                    <span>Mechanism: {supplement.mechanism}</span>
                    <span>Evidence: {supplement.evidence}</span>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Implementation Roadmap</h2>
              </div>
              <div className={styles.implementationSteps}>
                {[
                  {
                    title: "Set Consistent Timing",
                    text: "Fix wake and sleep windows first—everything else hinges on this rhythm.",
                  },
                  {
                    title: "Optimize Environment",
                    text: "Adjust bedroom light, temperature, and noise to match sleep cues.",
                  },
                  {
                    title: "Layer Behavioral Tools",
                    text: "Add temperature hacks, wind-down rituals, and nutrition timing gradually.",
                  },
                  {
                    title: "Consider Supplements",
                    text: "Introduce one evidence-backed supplement at a time while monitoring sleep data.",
                  },
                ].map((step, index) => (
                  <FadeInScale key={step.title} delay={index * 0.05}>
                    <div className={styles.implementationStep}>
                      <div className={styles.stepNumber}>{index + 1}</div>
                      <div className={styles.stepContent}>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  </FadeInScale>
                ))}
              </div>
              <p className={styles.note}>
                *Percent improvements reflect aggregated findings from Stanford Sleep Lab and Huberman Lab toolkits. Individual results vary—partner with a sleep specialist for persistent issues.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
