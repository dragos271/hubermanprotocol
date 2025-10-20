import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Daily Routine – Huberman Protocol",
  description:
    "Structure your day around light, movement, nutrition, and recovery anchors inspired by Huberman Lab.",
};

const heroStats = [
  { value: "4", label: "Core Anchors" },
  { value: "2", label: "Deep Work Blocks" },
  { value: "10-30", label: "Min NSDR" },
];

const dayTimeline = [
  {
    icon: "🌅",
    timing: "0-60 min after wake",
    title: "Morning Activation",
    description: "Sunlight, hydration, movement, and gratitude to set circadian rhythm and mindset.",
    actions: [
      "Get outside for 10–30 minutes of light",
      "Hydrate with electrolytes, delay caffeine 90 min",
      "Perform 5–10 min mobility or brisk walk",
      "Set day’s priority + gratitude reflection",
    ],
  },
  {
    icon: "🎯",
    timing: "90-240 min",
    title: "Deep Work Block 1",
    description: "Match highest cognitive task with 90/20 focus cycle.",
    actions: [
      "Physiological sigh before block",
      "Eliminate notifications, monotask",
      "Use NSDR or walk during 20 min break",
      "Refuel with protein-forward meal afterward",
    ],
  },
  {
    icon: "🥗",
    timing: "Midday",
    title: "Refuel + Zone-2",
    description: "Eat balanced meal and accumulate movement to maintain energy.",
    actions: [
      "Protein + fiber-rich lunch",
      "30 min zone-2 walk or cardio",
      "Expose to afternoon sunlight",
      "Short gratitude or breathing reset",
    ],
  },
  {
    icon: "🧠",
    timing: "Early afternoon",
    title: "Deep Work Block 2",
    description: "Second focused block if energy allows; otherwise collaborative tasks.",
    actions: [
      "Cold exposure or NSDR pre-block if sluggish",
      "Follow 90/20 cadence again",
      "Use light snack (protein + fruit) post block",
      "Transition to creative or social work after",
    ],
  },
  {
    icon: "🌇",
    timing: "Late afternoon",
    title: "Training + Play",
    description: "Strength or skill practice aligned with goals.",
    actions: [
      "Resistance training or sport",
      "Cool down, stretch, or sauna",
      "Protein-rich recovery shake/meal",
      "Review wins of the day",
    ],
  },
  {
    icon: "🌙",
    timing: "Evening",
    title: "Wind-Down",
    description: "Dim lights, light dinner, NSDR/gratitude, prepare for sleep.",
    actions: [
      "Finish eating 2–3 hours before bed",
      "Switch to warm lighting, limit screens",
      "10–20 min NSDR, reading, or stretch",
      "List tasks for tomorrow to offload mind",
    ],
  },
];

const habitAnchors = [
  {
    name: "Light",
    details: "Morning sun, afternoon top-up, evening dimness to guide hormones and sleep.",
  },
  {
    name: "Movement",
    details: "Zone-2 daily, strength 2–3x/week, sprints weekly, mobility daily.",
  },
  {
    name: "Nutrition",
    details: "Protein-rich meals in 8–10 hour window, electrolyte hydration, limited evening eating.",
  },
  {
    name: "State Control",
    details: "Physiological sigh, NSDR, gratitude, and nature time to regulate stress.",
  },
];

const implementationSteps = [
  {
    title: "Map Current Routine",
    text: "Track wake/sleep times, meals, work blocks, and energy for a baseline week.",
  },
  {
    title: "Install Anchors",
    text: "Schedule morning light, zone-2, feeding window, and wind-down first.",
  },
  {
    title: "Layer Focus",
    text: "Add 90/20 deep work, NSDR recovery, and mid-day movement breaks.",
  },
  {
    title: "Review Weekly",
    text: "Reflect on energy, focus, and mood; adjust timeline and habits accordingly.",
  },
];

export default function DailyRoutinePage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="📅"
          title="Daily"
          accent="Routine"
          subtitle="Design a circadian-aligned schedule that fuels deep work, movement, and recovery."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Anchor the Day</h2>
                <p className={styles.sectionSubtitle}>
                  Huberman’s routine revolves around light exposure, deliberate work cycles, movement, and NSDR. Apply these anchors in a way that fits your context.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Timeline</h2>
              </div>
              <div className={styles.protocolsGrid}>
                {dayTimeline.map((block, index) => (
                  <FadeInScale key={block.title} delay={index * 0.05}>
                    <article className={styles.protocolCard}>
                      <div className={styles.protocolHeader}>
                        <div className={styles.protocolIcon}>{block.icon}</div>
                        <div className={styles.protocolTiming}>{block.timing}</div>
                      </div>
                      <h3>{block.title}</h3>
                      <p className={styles.protocolDescription}>{block.description}</p>
                      <div className={styles.protocolActions}>
                        <h4>Implementation</h4>
                        <ul>
                          {block.actions.map((action) => (
                            <li key={action}>{action}</li>
                          ))}
                        </ul>
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
                <h2 className={styles.sectionTitle}>Daily Anchors</h2>
              </div>
              <div className={styles.resourceList}>
                {habitAnchors.map((anchor) => (
                  <div key={anchor.name} className={styles.resourceItem}>
                    <strong>{anchor.name}</strong>
                    <span>{anchor.details}</span>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Implementation Steps</h2>
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
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
