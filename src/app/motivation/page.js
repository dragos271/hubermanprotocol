import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Motivation & Dopamine – Huberman Protocol",
  description:
    "Understand how dopamine peaks, dips, and recovery cycles drive motivation and how to manage them."
};

const heroStats = [
  { value: "90 min", label: "Effort Blocks" },
  { value: "20 min", label: "Recovery Windows" },
  { value: "4", label: "Reset Tools" },
];

const protocols = [
  {
    icon: "🔋",
    timing: "Planning",
    title: "Reward Prediction Loops",
    description:
      "Break large goals into daily wins. Attach small celebrations (journal entry, share with friend) immediately after completion.",
    actions: [
      "Define the smallest actionable step",
      "Log completion with physical checkmark",
      "Pair finished tasks with brief enjoyment (walk, favorite song)",
    ],
    science:
      "Huberman shows that self-reward post effort reinforces dopamine circuits, making future effort easier.",
  },
  {
    icon: "🧊",
    timing: "Midday",
    title: "Dopamine Reset Tools",
    description:
      "Use deliberate cold (1–2 min) or NSDR to raise dopamine baseline without ongoing stimulation.",
    actions: [
      "Cold shower finisher or plunge when motivation dips",
      "10–15 minute NSDR for non-stimulus recovery",
      "Take panoramic vision walks to reduce stress",
    ],
    science:
      "Cold exposure increases dopamine 2–3× for hours. NSDR restores dopamine receptors after heavy effort.",
  },
  {
    icon: "🚫",
    timing: "Evening",
    title: "Avoid Dopamine Overload",
    description:
      "Limit late-night scrolling, binge TV, or junk food that spike dopamine and erode motivation next morning.",
    actions: [
      "Keep 1-hour device curfew",
      "Plan low-dopamine wind-down (reading, stretching)",
      "Use blue light blockers if screens unavoidable",
    ],
    science:
      "Huberman explains that stacking dopamine hits without effort blunts baseline and reduces drive.",
  },
  {
    icon: "📆",
    timing: "Weekly",
    title: "Pain & Effort Allocation",
    description:
      "Schedule high-friction tasks early in the day/week when dopamine is highest. Rotate challenges to keep the system fresh.",
    actions: [
      "Assign most meaningful project to Monday mornings",
      "Use accountability partner for follow-through",
      "Allow one true rest day—no major demands",
    ],
    science:
      "Effortful work releases dopamine when the brain associates struggle with reward. Spacing keeps receptor sensitivity high.",
  },
];

const steps = [
  {
    title: "Audit Dopamine Sources",
    text: "List high/low-quality sources (social media, exercise, cold, junk food). Reduce passive hits, increase effort-based ones.",
  },
  {
    title: "Install Morning Primers",
    text: "Sunlight, movement, and clear win-of-the-day set motivation tone.",
  },
  {
    title: "Add Recovery",
    text: "Use NSDR, naps, or calm walks after intense work to avoid dopamine depletion.",
  },
  {
    title: "Review Weekly",
    text: "Track wins, setbacks, and dopamine traps. Adjust and recommit.",
  },
];

const resources = [
  {
    title: "Huberman Lab #65",
    detail: "Dopamine deep dive—motivation, addiction, and balancing highs and lows.",
  },
  {
    title: "NSDR Library",
    detail: "Short practices to restore dopamine after effort-heavy blocks.",
  },
  {
    title: "Accountability Group",
    detail: "Share goals with friends or coaches to increase dopamine through social reinforcement.",
  },
];

export default function MotivationPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="💥"
          title="Motivation"
          accent="Playbook"
          subtitle="Balance dopamine peaks and resets to stay driven without burning out."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Motivation Is a Cycle</h2>
                <p className={styles.sectionSubtitle}>
                  Huberman frames motivation as effort → reward → rest. Skip rest and you crash; skip reward and the brain stops trying.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Build loops consciously: define wins, celebrate them, and recover dopamine with low-stimulation practices. Avoid stacking instant dopamine without effort (social scroll, sugar). Pair motivation with meaning and service to sustain it.
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
                *If motivation challenges stem from depression, ADHD, or addiction, pair these tools with professional care.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
