import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Fitness & Workouts – Huberman Protocol",
  description:
    "Combine strength, endurance, and recovery protocols backed by neuroscience for maximal performance and longevity.",
};

const heroStats = [
  { value: "2-3", label: "Strength Days" },
  { value: "150", label: "Min Zone-2 /wk" },
  { value: "6-8", label: "Sprint Bouts" },
];

const workoutProtocols = [
  {
    icon: "🏋️",
    timing: "Weekly",
    title: "Strength Foundation",
    description: "Perform 2–3 full-body resistance sessions emphasizing compound lifts.",
    actions: [
      "Focus on squat, hinge, push, pull",
      "3–5 sets of 5–10 reps",
      "Rest 2 min between heavy sets",
      "Progress load or volume weekly",
    ],
    science:
      "Strength preserves muscle, bone density, and metabolic health—top longevity predictor per Huberman & Galpin.",
  },
  {
    icon: "🚴",
    timing: "Weekly",
    title: "Zone-2 Cardio",
    description: "Accumulate 150 minutes at conversational pace for mitochondrial health.",
    actions: [
      "Split into 30-minute sessions",
      "Use HR 60–70% max (nose breathing guide)",
      "Mix modalities: walk, cycle, row",
      "Track with wearable for consistency",
    ],
    science:
      "Zone-2 increases mitochondrial density and fat oxidation, supporting brain and heart longevity.",
  },
  {
    icon: "⚡",
    timing: "1x/week",
    title: "Sprint/Zone-5",
    description: "Perform high-intensity intervals to push VO₂max and resilience.",
    actions: [
      "6–8 sprints of 10–20 seconds",
      "Rest fully (2–3 minutes) between reps",
      "Warm up thoroughly before",
      "Alternate modalities (bike, hill sprint)",
    ],
    science:
      "VO₂max correlates strongly with longevity; brief intense efforts maintain it.",
  },
  {
    icon: "🧘",
    timing: "Post-training",
    title: "Recovery Stack",
    description: "Use heat, cold, and NSDR intelligently to support adaptation.",
    actions: [
      "Sauna 20 min 2–3x/week (post-workout)",
      "NSDR 10–20 min after heavy sessions",
      "Cold immersion separated from strength days if hypertrophy goal",
      "Sleep 7–9 hours nightly",
    ],
    science:
      "Recovery practices lower cortisol, increase growth hormone, and consolidate motor learning.",
  },
];

const mobilityHabits = [
  {
    name: "Daily Mobility",
    details: "10 minutes CARs or yoga flow to maintain joint range.",
  },
  {
    name: "Posture Breaks",
    details: "Micro-breaks every 60 minutes of desk work (chin tucks, thoracic extension).",
  },
  {
    name: "Play & Skill",
    details: "Weekly sport or novel movement for coordination and joy.",
  },
];

const implementationSteps = [
  {
    title: "Assess Baseline",
    text: "Test strength (5RM), aerobic base (zone-2 heart rate), and mobility gaps.",
  },
  {
    title: "Build Weekly Template",
    text: "Slot strength, zone-2, sprints, and recovery days; protect rest day.",
  },
  {
    title: "Track & Progress",
    text: "Log weights, distances, and HR; increase load/volume gradually.",
  },
  {
    title: "Recover Hard",
    text: "Prioritize sleep, protein (1 g/lb), and electrolytes; deploy sauna/NSDR post sessions.",
  },
];

export default function FitnessWorkoutsPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="🏋️"
          title="Fitness"
          accent="Workouts"
          subtitle="Blend strength, endurance, and recovery protocols for a resilient body and brain."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Programming Principles</h2>
                <p className={styles.sectionSubtitle}>
                  Huberman + Dr. Andy Galpin recommend two strength sessions, zone-2 cardio, and occasional sprints layered with recovery and mobility.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Organize training so each modality supports the others: strength preserves muscle, cardio protects heart and brain, sprints maintain VO₂max, and recovery consolidates adaptations.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Training Protocols</h2>
              </div>
              <div className={styles.protocolsGrid}>
                {workoutProtocols.map((protocol, index) => (
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
                <h2 className={styles.sectionTitle}>Mobility & Play</h2>
              </div>
              <div className={styles.resourceList}>
                {mobilityHabits.map((habit) => (
                  <div key={habit.name} className={styles.resourceItem}>
                    <strong>{habit.name}</strong>
                    <span>{habit.details}</span>
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
                *Consult a medical professional before starting a new exercise program, especially if you have existing health conditions.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
