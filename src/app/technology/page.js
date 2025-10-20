import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Technology & Nervous System – Huberman Protocol",
  description:
    "Manage screen time, dopamine, and social media to protect focus, sleep, and mental health."
};

const heroStats = [
  { value: "60 min", label: "Morning Offline" },
  { value: "1 h", label: "Evening Curfew" },
  { value: "2", label: "Deep Work Blocks" },
];

const protocols = [
  {
    icon: "📵",
    timing: "Morning",
    title: "Phone-Free First Hour",
    description:
      "Avoid screens upon waking. Anchor day with light, movement, and intention before dopamine-hijacking apps.",
    actions: [
      "Keep phone outside bedroom",
      "Use sunrise alarm or analog clock",
      "Complete morning light + movement before checking notifications",
    ],
    science:
      "Reducing immediate dopamine spikes preserves motivation and lowers cortisol surge.",
  },
  {
    icon: "📱",
    timing: "Midday",
    title: "Intentional Scroll",
    description:
      "Schedule social media in 10–15 minute windows with set intention (learning, connection).",
    actions: [
      "Batch notifications; turn off non-essential alerts",
      "Use grayscale mode to reduce visual reward",
      "Unfollow accounts that trigger comparison or anxiety",
    ],
    science:
      "Huberman warns that intermittent, variable rewards (scrolling) hijack dopamine. Scheduling reduces compulsive use.",
  },
  {
    icon: "💻",
    timing: "Work",
    title: "Focus Tools",
    description:
      "Use site blockers, full-screen apps, and brown noise to maintain focus during deep-work cycles.",
    actions: [
      "Run 90/20 focus cadence",
      "Disable badges and infinite feeds on desktop",
      "Leverage “reader view” for research",
    ],
    science:
      "Reducing context switching preserves prefrontal resources and dopamine for meaningful work.",
  },
  {
    icon: "🌙",
    timing: "Evening",
    title: "Digital Sunset",
    description:
      "Stop screens 60 minutes before bed or use night mode + blue blockers if unavoidable.",
    actions: [
      "Switch to analog entertainment—reading, journaling",
      "Install apps like Flux/Night Shift",
      "Place phone in charging station outside bedroom",
    ],
    science:
      "Blue light suppresses melatonin; late-night dopamine hits sustain arousal and impair sleep.",
  },
];

const steps = [
  {
    title: "Audit Usage",
    text: "Check screen-time reports; note highest dopamine-draining apps.",
  },
  {
    title: "Create Screen Zones",
    text: "Designate tech-free zones (bedroom, dinner table).",
  },
  {
    title: "Schedule Intentional Use",
    text: "Batch notifications, plan social media windows, and set app limits.",
  },
  {
    title: "Install Recovery",
    text: "Use cold, NSDR, nature, or breathwork after heavy tech days to reset dopamine.",
  },
];

const resources = [
  {
    title: "Huberman Lab #42",
    detail: "Social media, dopamine, and how to break compulsive loops.",
  },
  {
    title: "App Limits",
    detail: "Freedom, One Sec, and Screen Time settings for structured usage.",
  },
  {
    title: "Digital Minimalism",
    detail: "Cal Newport’s methods complement Huberman’s protocols for focus.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="📱"
          title="Tech"
          accent="Hygiene"
          subtitle="Use technology intentionally. Protect focus, dopamine, and sleep with proven guardrails."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Guard Your Dopamine</h2>
                <p className={styles.sectionSubtitle}>
                  Phones deliver variable rewards that hijack motivation. Huberman suggests friction and scheduling to regain control.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Set device boundaries like you would nutritional ones. Keep mornings and evenings tech-light, batch notifications, and follow social accounts that fuel learning and connection, not comparison.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Tech Protocols</h2>
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
                <h2 className={styles.sectionTitle}>Tools & Support</h2>
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
                *Seek professional help if technology use interferes with work, relationships, or mental health.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
