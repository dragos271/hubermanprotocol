import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Cold Exposure Protocols – Huberman Protocol",
  description:
    "Use deliberate cold to elevate dopamine, build stress resilience, and speed recovery the Huberman way.",
};

const heroStats = [
  { value: "11 min", label: "Weekly Total" },
  { value: "250%", label: "Dopamine Rise" },
  { value: "2-3x", label: "Sessions / Week" },
];

const coldProtocols = [
  {
    icon: "❄️",
    timing: "Primary",
    title: "Immersion Protocol",
    description: "Accumulate ~11 minutes per week across 2–3 sessions in 10–15°C water.",
    actions: [
      "Start with 1 minute; build toward 3–5 minutes",
      "Keep breathing steady (nasal inhale, slow exhale)",
      "Exit when shivering uncontrollably or numb",
      "End on cold if seeking lingering dopamine",
    ],
    science:
      "Huberman cites research demonstrating large dopamine and norepinephrine surges lasting hours after cold exposure.",
  },
  {
    icon: "🚿",
    timing: "Accessibility",
    title: "Cold Shower Finishers",
    description: "Use 1–3 minute cold rinses when immersion isn’t available.",
    actions: [
      "Begin hot, then switch to cold",
      "Rotate water across body, face last",
      "Maintain relaxed breathing",
      "Use daily or alternate days",
    ],
    science:
      "Cold showers provide hormetic stress and dopamine benefits, though less potent than immersion.",
  },
  {
    icon: "🏋️",
    timing: "Training",
    title: "Timing Considerations",
    description: "Separate cold from strength sessions if hypertrophy is the goal; use post-cardio for performance.",
    actions: [
      "Wait 4–6 hours after strength training",
      "Cold immediately post-endurance to speed recovery",
      "Pair with sauna for contrast only if heat cleared",
      "Avoid cold before heavy lifting (blunts performance)",
    ],
    science:
      "Cold post strength can dampen hypertrophy signaling; post-endurance it aids recovery and mitochondrial biogenesis.",
  },
  {
    icon: "⚠️",
    timing: "Safety",
    title: "Risk Management",
    description: "Screen for cardiovascular issues and respect physiological limits.",
    actions: [
      "Avoid alone or unsupervised water entry",
      "Never hyperventilate before cold exposure",
      "Warm up with movement afterward",
      "Consult doctor if pregnant, cardiac concerns",
    ],
    science:
      "Cold shock can trigger arrhythmias in susceptible individuals—medical clearance essential.",
  },
];

const integrationTips = [
  {
    name: "Breath Control",
    detail: "Use physiological sighs before entering to calm the nervous system.",
  },
  {
    name: "Mindset",
    detail: "Reframe discomfort as training. Huberman suggests focusing on the benefit, not pain.",
  },
  {
    name: "Tracking",
    detail: "Log duration, water temperature, and perceived effort to gauge adaptation.",
  },
];

const implementationSteps = [
  {
    title: "Start Gradual",
    text: "Begin with cool showers or short immersions; extend duration week by week.",
  },
  {
    title: "Hit Weekly Dose",
    text: "Aim for 11 cumulative minutes split across sessions for consistent benefits.",
  },
  {
    title: "Pair With Goals",
    text: "Time cold relative to workouts and stress levels to match objectives (alertness vs recovery).",
  },
  {
    title: "Recover Warm",
    text: "Allow body to reheat naturally—move, dress warmly, hydrate.",
  },
];

export default function ColdExposurePage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="🧊"
          title="Cold"
          accent="Exposure"
          subtitle="Harness deliberate cold for dopamine, resilience, and recovery."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Why Cold Works</h2>
                <p className={styles.sectionSubtitle}>
                  Cold triggers dopamine and norepinephrine surges, training the nervous system to stay calm under stress.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Huberman recommends deliberate cold for alertness, fat loss, and resilience—but always respect safety guidelines and medical constraints.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Protocols</h2>
              </div>
              <div className={styles.protocolsGrid}>
                {coldProtocols.map((protocol, index) => (
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
                <h2 className={styles.sectionTitle}>Integration Tips</h2>
              </div>
              <div className={styles.resourceList}>
                {integrationTips.map((tip) => (
                  <div key={tip.name} className={styles.resourceItem}>
                    <strong>{tip.name}</strong>
                    <span>{tip.detail}</span>
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
                {implementationSteps.map((step, index) => (
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
                *Cold exposure is a hormetic stressor. Consult your physician if you have cardiovascular, neurological, or metabolic conditions.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
