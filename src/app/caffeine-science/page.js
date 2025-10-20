import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Caffeine Science – Huberman Protocol",
  description:
    "Strategic caffeine timing, dosing, and stacking based on adenosine and dopamine physiology discussed on Huberman Lab.",
};

const heroStats = [
  { value: "90 min", label: "Delay After Wake" },
  { value: "1-3", label: "mg/kg Ideal Dose" },
  { value: "8 h", label: "Cutoff Before Sleep" },
];

const protocols = [
  {
    icon: "⏳",
    timing: "Morning",
    title: "Adenosine Clearance Window",
    description:
      "Delay caffeine 90–120 minutes post-wake to allow adenosine to drop naturally, preventing afternoon crashes.",
    actions: [
      "Hydrate and move before caffeinating",
      "Use sunlight to promote cortisol peak",
      "If needed sooner, opt for half-dose green tea",
    ],
    science:
      "Huberman Lab explains caffeine blocks adenosine receptors; consuming too early masks fatigue temporarily and rebounds later when adenosine accumulates.",
  },
  {
    icon: "☕",
    timing: "Pre-Performance",
    title: "Targeted Dosing",
    description:
      "Match dose to body weight and task: 1–3 mg/kg for general focus, up to 6 mg/kg for endurance (if tolerated).",
    actions: [
      "Start at 1 mg/kg and build slowly",
      "Combine with L-theanine (100–200 mg) for smoother focus",
      "Use espresso or caffeine gum 30 minutes prior for rapid onset",
    ],
    science:
      "Episodes 13 & 21 cite studies on adenosine antagonism and increased dopamine availability in the prefrontal cortex, enhancing vigilance and reaction time.",
  },
  {
    icon: "🏋️",
    timing: "Training",
    title: "Exercise Stack",
    description:
      "For strength or HIIT, ingest caffeine 45–60 minutes prior. Pair with beta-alanine or creatine if already in your regimen.",
    actions: [
      "Use 2–3 mg/kg for explosive, short-duration efforts",
      "Ensure hydration—caffeine is mild diuretic at high doses",
      "Avoid stacking with yohimbine if anxiety-prone",
    ],
    science:
      "Meta-analyses show caffeine improves power output and rate of perceived exertion; Huberman notes synergy with deliberate cold for post-training dopamine.",
  },
  {
    icon: "🌙",
    timing: "Cutoff",
    title: "Sleep Protection",
    description:
      "Stop caffeine 8–10 hours before bed to allow half-life clearance and preserve deep sleep.",
    actions: [
      "Replace afternoon coffee with herbal tea or electrolytes",
      "Use NSDR for afternoon slumps instead of extra caffeine",
      "If you slip, extend next-day delay to reset",
    ],
    science:
      "Huberman shares EEG data demonstrating that caffeine even 8 hours pre-bed reduces deep sleep by ~15%, impacting hormone and learning consolidation.",
  },
];

const steps = [
  {
    title: "Audit Intake",
    text: "Track timing, total milligrams, and subjective focus or anxiety for one week.",
  },
  {
    title: "Implement Delay",
    text: "Shift first caffeine to 90 minutes after waking. Notice mid-afternoon energy changes.",
  },
  {
    title: "Dial In Dose",
    text: "Calibrate 1–3 mg/kg per use-case. Reserve higher doses for key workouts or exams.",
  },
  {
    title: "Guard Evenings",
    text: "Maintain 8-hour cutoff. Pair with breathwork or magnesium stack to optimize sleep quality.",
  },
];

const resources = [
  {
    title: "Huberman Lab #13",
    detail: "Caffeine, adenosine, and how to use light + movement to replace afternoon cups.",
  },
  {
    title: "Caffeine Toolkit",
    detail: "hubermanlab.com/toolkit-for-caffeine—dosage charts, stacking considerations, and taper guides.",
  },
  {
    title: "Sleep Episodes",
    detail: "Episodes #2 and #3 detail how caffeine interacts with circadian biology and sleep architecture.",
  },
];

export default function CaffeineSciencePage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="☕"
          title="Caffeine"
          accent="Science"
          subtitle="Use caffeine as a precision tool—timed, dosed, and stacked to support focus, physical performance, and sleep integrity."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Adenosine & Dopamine Basics</h2>
                <p className={styles.sectionSubtitle}>
                  Caffeine doesn’t add energy; it blocks adenosine from binding, buying time before fatigue. The goal is to integrate caffeine with light, movement, and nutrition so you ride its benefits without wrecking cortisol or sleep.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Huberman recommends respecting caffeine’s half-life (4–6 hours) and leveraging cofactors such as L-theanine for smoother focus or electrolytes for hydration. Cycle dosage to maintain sensitivity and avoid needing escalating amounts. When stacking with stimulants or supplements, consult a healthcare professional.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Strategic Protocols</h2>
                <p className={styles.sectionSubtitle}>
                  Align caffeine with your circadian rhythm and daily demands.
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
                <h2 className={styles.sectionTitle}>Four-Step Integration</h2>
                <p className={styles.sectionSubtitle}>
                  Gradually shift habits to avoid withdrawal and reveal true baseline energy.
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
                <h2 className={styles.sectionTitle}>Further Study</h2>
                <p className={styles.sectionSubtitle}>
                  Nerd out on caffeine pharmacology and practical playbooks.
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
                *Monitor heart rate, anxiety, and sleep latency when adjusting caffeine. Discuss high doses or stacking with your healthcare provider, especially if pregnant, hypertensive, or using medications.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
