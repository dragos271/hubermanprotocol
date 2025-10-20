import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Emotional Intelligence & Relationships – Huberman Protocol",
  description:
    "Strengthen social bonds and emotional regulation with neuroscience-backed tools from Huberman Lab.",
};

const heroStats = [
  { value: "3", label: "Connection Pillars" },
  { value: "2x", label: "Check-ins /Week" },
  { value: "5 min", label: "Repair Window" },
];

const protocols = [
  {
    icon: "💞",
    timing: "Daily",
    title: "Oxytocin Micro-Habits",
    description:
      "Verbal affirmation, physical touch, or eye contact releases oxytocin and lowers stress for both parties.",
    actions: [
      "Offer specific appreciation (“I value how you...”)",
      "Use 20-second hug or hand on shoulder with consent",
      "Create shared rituals (coffee, walk, gratitude)",
    ],
    science:
      "Huberman notes that oxytocin counters cortisol and fosters bonding, improving resilience to stress.",
  },
  {
    icon: "🧘",
    timing: "Conflict",
    title: "State Regulation Before Dialogue",
    description:
      "Use physiological sigh, 5-minute pause, or NSDR before engaging in tough conversations to keep prefrontal control online.",
    actions: [
      "Two physiological sighs to reduce autonomic arousal",
      "Set conversation intent and listening goal",
      "Use timeouts if heart rate stays elevated",
    ],
    science:
      "Regulating autonomic state allows access to empathy circuits and reduces defensive reactivity.",
  },
  {
    icon: "📝",
    timing: "Weekly",
    title: "Relationship Debrief",
    description:
      "Schedule a short meeting to review wins, stressors, and needs. Pair with gratitude to solidify memory of positive moments.",
    actions: [
      "Use prompts: What worked? What felt challenging?",
      "Share one gratitude per person",
      "Plan supportive actions for the coming week",
    ],
    science:
      "Regular reflection anchors positive memories and rewires narrative networks toward trust.",
  },
  {
    icon: "🌐",
    timing: "Community",
    title: "Expand Social Resilience",
    description:
      "Maintain 2–3 close ties and contribute to a wider community. Service increases dopamine, oxytocin, and longevity.",
    actions: [
      "Schedule friend or family check-ins twice weekly",
      "Volunteer or mentor monthly",
      "Pursue shared goals (workout partner, learning group)",
    ],
    science:
      "Social connection reduces all-cause mortality. Huberman references data showing prosocial behavior boosts dopamine reward circuits.",
  },
];

const steps = [
  {
    title: "Self-Regulate",
    text: "Master breathwork, NSDR, and physiological sigh so you can enter conversations calm.",
  },
  {
    title: "Practice Active Listening",
    text: "Mirror back what you heard, validate emotions, and stay curious rather than defensive.",
  },
  {
    title: "Schedule Connection",
    text: "Put recurring bonds on the calendar—date night, friend call, family walk.",
  },
  {
    title: "Repair Quickly",
    text: "Use the “5-minute repair” rule: acknowledge impact, apologize, restate commitment, and agree on next step.",
  },
];

const resources = [
  {
    title: "Huberman Lab #54",
    detail: "Science of social bonding, oxytocin, and trust-building.",
  },
  {
    title: "Breathwork Toolkit",
    detail: "Physiological sigh and NSDR scripts to regulate state before tough talks.",
  },
  {
    title: "Therapy & Coaching",
    detail: "Couples therapy, NVC (Nonviolent Communication), or coaches when conflict persists.",
  },
];

export default function RelationshipsPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="❤️"
          title="Relationships"
          accent="Playbook"
          subtitle="Regulate your nervous system, communicate with empathy, and reinforce trust-building rituals."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Connection as Biology</h2>
                <p className={styles.sectionSubtitle}>
                  Strong relationships extend lifespan and buffer stress. Huberman highlights oxytocin, dopamine, and parasympathetic tone as the glue.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Give your nervous system rituals for safety (touch, eye contact, shared routines) and tools for downregulation before discussing issues. Invest time in both intimate and community ties.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Connection Protocols</h2>
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
                <h2 className={styles.sectionTitle}>Support & Learning</h2>
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
                *For persistent conflict or trauma, partner with therapists or counselors. These tools complement—not replace—professional care.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
