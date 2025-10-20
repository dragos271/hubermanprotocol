import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Happiness & Wellbeing – Huberman Protocol",
  description:
    "Habits that elevate baseline mood by aligning with dopamine, serotonin, and oxytocin systems."
};

const heroStats = [
  { value: "3", label: "Mood Systems" },
  { value: "5 min", label: "Gratitude Dose" },
  { value: "2x", label: "Nature Sessions /Week" },
];

const protocols = [
  {
    icon: "🌿",
    timing: "Weekly",
    title: "Nature Immersion",
    description:
      "Two 120-minute blocks in nature boost mood and reduce stress. Even urban parks with greenery count.",
    actions: [
      "Schedule weekend hikes or park walks",
      "Leave phone in pocket—focus on senses",
      "Practice panoramic vision to widen awareness",
    ],
    science:
      "Huberman shares studies showing nature exposure reduces rumination and lowers cortisol.",
  },
  {
    icon: "🙏",
    timing: "Daily",
    title: "Gratitude Rehearsal",
    description:
      "Spend 5 minutes recalling a time someone extended help to you. Replay the scene in detail.",
    actions: [
      "Write or voice note the memory",
      "Focus on emotional tone and specifics",
      "Share gratitude with the person if possible",
    ],
    science:
      "Huberman cites fMRI data showing gratitude increases activity in brain regions linked to contentment and prosocial behavior.",
  },
  {
    icon: "🏃",
    timing: "Movement",
    title: "Joyful Cardio",
    description:
      "Use moderate exercise with music or friends to release endorphins and endocannabinoids.",
    actions: [
      "Pick activities you enjoy (dance, cycling, hiking)",
      "Maintain conversational pace for 20–30 minutes",
      "Combine with sun exposure when possible",
    ],
    science:
      "Exercise episode notes movement as potent mood elevator. Endocannabinoid release explains ‘runner’s high’.",
  },
  {
    icon: "💤",
    timing: "Night",
    title: "Sleep & Light Hygiene",
    description:
      "High-quality sleep and evening darkness stabilize serotonin and dopamine. Avoid doomscrolling before bed.",
    actions: [
      "Dim lights 90 minutes before sleep",
      "Use NSDR if stressed",
      "Keep consistent wake time—even weekends",
    ],
    science:
      "Sleep deficits increase amygdala reactivity and depression risk; Huberman frames sleep as mood insurance.",
  },
];

const steps = [
  {
    title: "Mood Tracking",
    text: "Log energy, sleep, and gratitude using a simple 1–5 scale.",
  },
  {
    title: "Install Keystone Habit",
    text: "Choose the one habit that gives biggest mood boost (sleep, exercise, nature) and protect it fiercely.",
  },
  {
    title: "Add Gratitude & Service",
    text: "Pair gratitude practice with weekly service or kindness acts to boost oxytocin and meaning.",
  },
  {
    title: "Review & Adjust",
    text: "Monthly reflection: what brightened mood, what drained it? Iterate habits accordingly.",
  },
];

const resources = [
  {
    title: "Huberman Lab #54",
    detail: "Science of gratitude and its lasting happiness effects.",
  },
  {
    title: "Exercise Episode",
    detail: "Detailed protocols for mood-enhancing cardio and strength sessions.",
  },
  {
    title: "Mental Health Support",
    detail: "Therapist, coach, or peer group for deeper emotional work or persistent low mood.",
  },
];

export default function HappinessPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="😊"
          title="Happiness"
          accent="Toolkit"
          subtitle="Elevate baseline mood with gratitude, nature, joyful movement, and sleep alignment."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Mood Systems in Balance</h2>
                <p className={styles.sectionSubtitle}>
                  Huberman highlights dopamine (motivation), serotonin (contentment), and oxytocin (connection). Balanced habits nourish all three.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Start with gratitude journaling, spend time outdoors, move your body, and protect sleep. Combine with service and social connection for lasting wellbeing.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Mood-Boosting Protocols</h2>
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
                <h2 className={styles.sectionTitle}>Resources & Support</h2>
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
                *Seek professional mental-health support if low mood persists, even while using these habits.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
