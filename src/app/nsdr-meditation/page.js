import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "NSDR & Meditation – Huberman Protocol",
  description:
    "Deploy Non-Sleep Deep Rest, meditation, and breathwork to reset dopamine, improve learning, and calm the nervous system.",
};

const heroStats = [
  { value: "10-20", label: "Min NSDR Session" },
  { value: "1-3", label: "Times/Day On Demand" },
  { value: "5", label: "Min Breath Reset" },
];

const nsdrProtocols = [
  {
    icon: "🛌",
    timing: "Post-focus",
    title: "NSDR Session",
    description: "Use 10–20 minute guided NSDR to restore dopamine and accelerate learning consolidation.",
    actions: [
      "Find quiet space, lie down, eyes closed",
      "Follow body scan + breath guidance",
      "Allow mind to wander—no sleep pressure",
      "Use after intense work or poor sleep",
    ],
    science:
      "NSDR increases parasympathetic tone and replenishes dopamine, improving focus and neuroplasticity.",
  },
  {
    icon: "🧘",
    timing: "Morning/Evening",
    title: "Physiological Sigh Meditation",
    description: "Pair breathwork with brief meditation to settle stress quickly.",
    actions: [
      "Two double inhales + long exhale",
      "Repeat 3–5 times, then normal breathing",
      "Observe sensations without judgment",
      "Use before meetings or sleep",
    ],
    science:
      "Double inhale/long exhale activates parasympathetic pathways within a few breaths.",
  },
  {
    icon: "🎧",
    timing: "Daily",
    title: "Yoga Nidra Audio",
    description: "Use audio scripts (Huberman Lab, Reveri) for structured NSDR and hypnosis.",
    actions: [
      "Select 10, 20, or 30 minute script",
      "Use headphones and eye mask",
      "Incorporate intention setting before session",
      "Practice consistently for cumulative benefit",
    ],
    science:
      "Guided scripts foster deep relaxation and neuroplasticity by targeting thalamocortical networks.",
  },
  {
    icon: "📝",
    timing: "Evening",
    title: "Gratitude Protocol",
    description: "Replay a time someone helped you to induce parasympathetic calm and improve sleep.",
    actions: [
      "Journal specific gratitude story",
      "Relive sensory detail and emotion",
      "Share with person when appropriate",
      "Pair with NSDR for emotional reset",
    ],
    science:
      "Huberman explains gratitude increases activity in neural circuits linked to contentment and resilience.",
  },
];

const integrationTips = [
  {
    name: "Environment",
    detail: "Dim lights, use eye mask, and minimize temperature swings for deeper relaxation.",
  },
  {
    name: "Consistency",
    detail: "Schedule NSDR at same time after intense work to train the nervous system.",
  },
  {
    name: "Stacking",
    detail: "Combine NSDR with learning: study → NSDR → revisit key points for faster retention.",
  },
];

const implementationSteps = [
  {
    title: "Learn the Script",
    text: "Listen to Huberman’s 10-minute NSDR or Reveri hypnosis once to understand flow.",
  },
  {
    title: "Schedule Sessions",
    text: "Insert NSDR after deep work or mid-afternoon slump; keep 5–20 minute options.",
  },
  {
    title: "Add Breath Reset",
    text: "Use physiological sigh anytime stress spikes to maintain control.",
  },
  {
    title: "Reflect",
    text: "Journal brief notes on focus, sleep, and mood changes to reinforce practice.",
  },
];

export default function NsdrMeditationPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="🧘"
          title="NSDR"
          accent="Meditation"
          subtitle="Reset your nervous system with Non-Sleep Deep Rest, breathwork, and gratitude."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Rest to Perform</h2>
                <p className={styles.sectionSubtitle}>
                  NSDR restores dopamine, sleep debt, and focus. Combine with breathwork for rapid state control.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Huberman recommends NSDR after intense work or poor sleep, pairing it with physiological sighs and gratitude practices to stabilize mood and cognitive performance.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Core Protocols</h2>
              </div>
              <div className={styles.protocolsGrid}>
                {nsdrProtocols.map((protocol, index) => (
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
                *NSDR complements, not replaces, medical treatment. For anxiety, depression, or trauma, integrate with professional care.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
