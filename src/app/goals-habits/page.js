import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Goals & Habits – Huberman Protocol",
  description:
    "Leverage neuroscience of dopamine, vision, and habit loops to build goals that stick.",
};

const heroStats = [
  { value: "3", label: "Phases" },
  { value: "0-1", label: "New Habits /Month" },
  { value: "2x", label: "Daily Check-ins" },
];

const protocols = [
  {
    icon: "🎯",
    timing: "Morning",
    title: "Vision & Dopamine Priming",
    description:
      "Write a single priority, visualize completion, and use panoramic vision + light movement to set autonomic tone.",
    actions: [
      "Define ‘win the day’ in one sentence",
      "Use panoramic gaze or outdoor walk to reduce stress",
      "Stack habit immediately after an existing routine (habit stacking)",
    ],
    science:
      "Huberman explains that intentional visualization plus small wins releases dopamine, reinforcing progress.",
  },
  {
    icon: "📈",
    timing: "Work Blocks",
    title: "Progressive Difficulty",
    description:
      "Start with low-friction actions and increase difficulty 10–20% weekly to avoid plateau.",
    actions: [
      "Define baseline (e.g., 5-minute writing) and add 1 minute per week",
      "Use friction to break bad habits (remove cues, add steps)",
      "Reward completion with brief celebration or log entry",
    ],
    science:
      "Dopamine spikes when progress is tracked. Slight increases keep the nervous system engaged without burnout.",
  },
  {
    icon: "🔁",
    timing: "Evening",
    title: "Retrospection & Reset",
    description:
      "Review wins, note obstacles, and plan the next cue/behavior/reward. End with gratitude to close the loop.",
    actions: [
      "Log habit in tracker (paper or app)",
      "Rate effort 1–5 to identify fatigue",
      "Write one sentence of gratitude to reinforce meaning",
    ],
    science:
      "Huberman stresses self-reward and reflection to cement habit circuitry by engaging prefrontal cortex and basal ganglia.",
  },
  {
    icon: "🛡️",
    timing: "Roadblocks",
    title: "If You Slip",
    description:
      "Anticipate failure points. Use ‘when X, then Y’ implementation intentions.",
    actions: [
      "Identify triggers (stress, social events)",
      "Prepare immediate alternative (NSDR instead of scrolling)",
      "Do one rep to keep streak alive (Huberman’s ‘never miss twice’ rule)",
    ],
    science:
      "Implementation intentions rewire associations; even partial completion preserves dopamine pathways linked to the habit.",
  },
];

const steps = [
  {
    title: "Set Identity Goal",
    text: "Phrase the goal as ‘I am someone who…’ to align behavior with identity.",
  },
  {
    title: "Design Cues",
    text: "Place tools in line of sight, schedule calendar blocks, and communicate habits to accountability partners.",
  },
  {
    title: "Track & Reward",
    text: "Use habit tracker, weekly review, and self-reward to keep dopamine engaged.",
  },
  {
    title: "Iterate",
    text: "Every 4 weeks, review metrics, adjust difficulty, or remove habits that no longer serve your identity.",
  },
];

const resources = [
  {
    title: "Huberman Lab #53",
    detail: "Goal-setting episode covering visualization, effort, and reward timing.",
  },
  {
    title: "Behavioral Science Toolkit",
    detail: "Implementation intention templates, habit tracker PDFs, and friction audits.",
  },
  {
    title: "Accountability Circle",
    detail: "Create a weekly meeting or chat to share wins, obstacles, and experiments.",
  },
];

export default function GoalsHabitsPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="🎯"
          title="Goals"
          accent="& Habits"
          subtitle="Engineer habits with neuroscience: clarity, cues, progressive difficulty, and reward."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Habit Science 101</h2>
                <p className={styles.sectionSubtitle}>
                  Dopamine spikes when you anticipate and achieve progress. Pair cues with quick wins, track them visually, and self-reward immediately after completion.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Huberman encourages an identity-based approach: prove the new identity to yourself with a single action daily, then progressively increase challenge. Remove friction from good habits; add friction to bad ones.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Daily Protocols</h2>
              </div>
              <div className={styles.protocolsGrid}>
                {protocols.map((protocol) => (
                  <FadeInScale key={protocol.title}>
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
                <h2 className={styles.sectionTitle}>Implementation Steps</h2>
              </div>
              <div className={styles.implementationSteps}>
                {steps.map((step, index) => (
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
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Resources</h2>
              </div>
              <div className={styles.resourceList}>
                {resources.map((resource) => (
                  <div key={resource.title} className={styles.resourceItem}>
                    <strong>{resource.title}</strong>
                    <span>{resource.detail}</span>
                  </div>
                ))}
              </div>
              <p className={styles.note}>
                *Changing behavior can surface emotional patterns. If habits relate to addiction or mental health, collaborate with therapists or support groups.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
