import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "General Health Foundations – Huberman Protocol",
  description:
    "Anchor your physiology with the fundamental Huberman Lab pillars: sleep, sunlight, movement, nutrition, and stress regulation.",
};

const heroStats = [
  { value: "5", label: "Daily Anchors" },
  { value: "30", label: "Minutes Movement" },
  { value: "2x", label: "Daylight Check-ins" },
];

const protocols = [
  {
    icon: "🌞",
    timing: "Morning",
    title: "Circadian Kickstart",
    description:
      "Sunlight within the first hour of waking sets cortisol peak, boosts mood, and locks sleep timing for that night.",
    actions: [
      "Step outside for 5–10 minutes of direct light",
      "Delay caffeine 90 minutes to allow adenosine clearance",
      "Pair with light mobility to raise body temperature",
    ],
    science:
      "Episodes 2 & 3 summarize how intrinsically photosensitive retinal ganglion cells signal the suprachiasmatic nucleus, reinforcing circadian rhythm and hormone timing.",
  },
  {
    icon: "🏃",
    timing: "Midday",
    title: "Movement Minimums",
    description:
      "Layer low-intensity movement with two strength sessions weekly and zone-2 cardio to support metabolic and brain health.",
    actions: [
      "Walk 7–10k steps or 30 minutes brisk daily",
      "Include 2 resistance workouts (big compound lifts)",
      "Dedicate 150 minutes per week to heart-rate 60–70% max",
    ],
    science:
      "Huberman references NIH data showing zone-2 enhances mitochondrial function while resistance training preserves muscle and insulin sensitivity—core longevity markers.",
  },
  {
    icon: "🥗",
    timing: "Meals",
    title: "Protein & Fiber Framework",
    description:
      "Balance macros for steady energy and satiety. Emphasize protein distribution, diverse plants, and mindful caffeine use.",
    actions: [
      "Target 0.7–1 g protein per pound bodyweight daily",
      "Fill half your plate with colorful vegetables",
      "Time caffeine before 2 p.m. to protect sleep",
    ],
    science:
      "Episode 21 highlights how amino acids regulate neurotransmitters, while fiber-rich plants feed the microbiome—critical for immune and brain health.",
  },
  {
    icon: "🛌",
    timing: "Evening",
    title: "Wind-Down Protocol",
    description:
      "Create a consistent pre-sleep routine with dim light, temperature drop, and parasympathetic activation.",
    actions: [
      "Lower lights 90 minutes before bed",
      "Use 5–10 minute box breathing or Yoga Nidra",
      "Keep bedroom cool (18–20°C) and device-free",
    ],
    science:
      "Huberman Lab sleep toolkits emphasize darkness and temperature as the strongest levers for melatonin and slow-wave sleep—cornerstones of recovery.",
  },
];

const steps = [
  {
    title: "Assess Current Baseline",
    text: "Log wake/sleep times, movement, meals, and stress triggers for 5 days. Identify the lowest-hanging anchor to improve.",
  },
  {
    title: "Lock Circadian Cues",
    text: "Adopt morning light plus a fixed wind-down window every day—even weekends—to stabilize hormones and appetite.",
  },
  {
    title: "Stack Movement",
    text: "Add a daily walk and schedule two resistance workouts. Layer cardio once the walking habit is automatic.",
  },
  {
    title: "Refine Nutrition & Stress",
    text: "Balance plates, add mindful breathing before meals, and keep an evening gratitude or reflection practice to close the loop.",
  },
];

const resources = [
  {
    title: "Huberman Lab Toolkit",
    detail: "hubermanlab.com/toolkit-for-sleep—comprehensive checklist covering light, temperature, and supplements.",
  },
  {
    title: "Exercise Episode (#87)",
    detail: "Breaks down strength, hypertrophy, and endurance protocols with weekly templates.",
  },
  {
    title: "Foundational Nutrition",
    detail: "Episode #21 covers fasting, protein timing, and blood-sugar strategies for cognitive performance.",
  },
];

export default function GeneralHealthPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="⚕️"
          title="General"
          accent="Health"
          subtitle="The daily minimum effective dose for resilient energy, focus, and longevity—distilled from Huberman Lab fundamentals."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Why Foundations Matter</h2>
                <p className={styles.sectionSubtitle}>
                  Before advanced stacks or diagnostics, most people need consistent anchors: light, sleep, movement, nutrition, and stress control. These levers modulate hormones, neurotransmitters, and inflammatory tone—setting the stage for every other protocol.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Huberman repeatedly reminds listeners that <strong>consistency beats intensity</strong>. Morning light establishes circadian rhythm, which guides cortisol, insulin, hunger, and mood. Movement builds metabolic flexibility and brain-derived neurotrophic factor. Stable meals prevent reactive snacking. Evening routines protect deep sleep—where repair, learning, and immune recalibration occur.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Daily Anchor Protocols</h2>
                <p className={styles.sectionSubtitle}>
                  Use this checklist as your baseline. Master these protocols before layering more advanced experimentation.
                </p>
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
                <h2 className={styles.sectionTitle}>Four-Week Integration</h2>
                <p className={styles.sectionSubtitle}>
                  Implement one step per week to avoid overwhelm. Track energy, mood, and sleep with a simple journal.
                </p>
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
                <h2 className={styles.sectionTitle}>Reference Huberman Episodes</h2>
                <p className={styles.sectionSubtitle}>
                  Revisit these show notes to reinforce habits or share with accountability partners.
                </p>
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
                *Consult your physician before changing exercise, cold exposure, or supplementation—especially if you have cardiovascular, metabolic, or hormonal conditions.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
