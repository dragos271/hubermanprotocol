import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Longevity Science – Huberman Protocol",
  description:
    "Stack behavioral levers that slow biological aging—sleep, nutrition, movement, heat/cold, and deliberate recovery.",
};

const heroStats = [
  { value: "5", label: "Longevity Pillars" },
  { value: "150", label: "Min Zone-2 /wk" },
  { value: "11", label: "Min Cold Exposure" },
];

const protocols = [
  {
    icon: "🧬",
    timing: "Daily",
    title: "Metabolic Flexibility",
    description:
      "Combine time-restricted eating (10–12 h feeding window) with protein-forward meals and low-glycemic carbs to stabilize insulin and mTOR signaling.",
    actions: [
      "Finish last meal 2–3 hours before bed",
      "Hit 1.6–2.2 g/kg protein and diverse plants",
      "Use occasional 24-hour fasts quarterly if medically cleared",
    ],
    science:
      "Huberman references Dr. David Sinclair and others showing how caloric timing and amino acid balance influence mTOR/AMPK, impacting cell repair.",
  },
  {
    icon: "🏃",
    timing: "Weekly",
    title: "Cardio Spectrum",
    description:
      "Blend zone-2 (150 min), zone-5 sprints (6–8 bouts), and two strength sessions to protect cardiovascular, mitochondrial, and musculoskeletal health.",
    actions: [
      "Zone-2: 30-minute brisk walks or cycling 5x/week",
      "Sprints: 10-second hill or bike sprints with full rest",
      "Strength: compound lifts to maintain muscle & bone",
    ],
    science:
      "Exercise episode (#87) highlights VO₂max and muscle mass as leading longevity predictors.",
  },
  {
    icon: "🔥",
    timing: "Heat & Cold",
    title: "Hormetic Stress",
    description:
      "Use sauna 2–4x weekly (20 minutes, 80–90°C) and deliberate cold totaling 11 minutes per week to enhance cardiovascular health and dopamine.",
    actions: [
      "Alternate sauna rounds with cold plunge or cool shower",
      "End sessions on cold if you want lingering dopamine",
      "Stay hydrated with electrolytes",
    ],
    science:
      "Huberman cites Finnish data linking sauna frequency to reduced all-cause mortality and research suggesting cold increases brown fat and metabolic rate.",
  },
  {
    icon: "🧠",
    timing: "Recovery",
    title: "Stress Resilience",
    description:
      "Regular NSDR, breathwork, and social connection lower chronic cortisol—protecting telomeres and cardiovascular health.",
    actions: [
      "Use 10–30 minute NSDR daily",
      "Practice gratitude journaling or service",
      "Include play/social time each week to raise oxytocin",
    ],
    science:
      "Episodes on stress and longevity note that parasympathetic practices improve HRV and reduce inflammatory load, key for healthy aging.",
  },
];

const steps = [
  {
    title: "Measure Baseline",
    text: "Collect labs (glucose, lipids, CRP), VO₂max, grip strength, and sleep data.",
  },
  {
    title: "Foundation Cycle (Weeks 1-4)",
    text: "Install consistent sleep, feeding window, and zone-2 routine. Track resting heart rate and energy.",
  },
  {
    title: "Hormetic Layer (Weeks 5-8)",
    text: "Add sauna + cold, sprints, and progressive overload in strength training.",
  },
  {
    title: "Quarterly Review",
    text: "Repeat labs, assess recovery, adjust fasting/heat/cold dose, and celebrate gains in HRV, body composition, and VO₂max.",
  },
];

const resources = [
  {
    title: "Huberman Lab #86",
    detail: "Toolkit for longevity: sleep, nutrition, exercise, and hormesis breakdowns.",
  },
  {
    title: "Zone-2 Guide",
    detail: "Episode notes detailing heart-rate targets and progression for mitochondrial health.",
  },
  {
    title: "Heat/Cold Protocols",
    detail: "hubermanlab.com/toolkit-for-heat-and-cold—safety guidelines and dosing.",
  },
];

export default function LongevityPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="⏳"
          title="Longevity"
          accent="Science"
          subtitle="Slow biological aging by stacking circadian alignment, metabolic flexibility, intelligent training, and hormetic stressors."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Longevity = Damage Control + Renewal</h2>
                <p className={styles.sectionSubtitle}>
                  Huberman distills longevity to three aims: reduce chronic inflammation, maintain muscle and brain volume, and trigger cellular cleanup (autophagy, hormesis).
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Consistent sleep and nutrition reduce baseline damage. Exercise and hormesis stimulate repair. Stress management keeps cortisol in check, preserving telomeres and cardiovascular health. Track metrics to ensure hormetic stress doesn’t become chronic stress.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Core Longevity Protocols</h2>
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
                <h2 className={styles.sectionTitle}>Implementation Cycle</h2>
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
                <h2 className={styles.sectionTitle}>Further Reading & Support</h2>
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
                *Consult your physician before fasting, sauna, or cold protocols—especially with cardiovascular or metabolic conditions.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
