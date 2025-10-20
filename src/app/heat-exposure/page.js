import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Sauna & Heat Exposure – Huberman Protocol",
  description:
    "Guidelines for using sauna and deliberate heat to improve cardiovascular health, stress resilience, and growth hormone levels.",
};

const heroStats = [
  { value: "20 min", label: "Sauna Bout" },
  { value: "4x", label: "Sessions / Week" },
  { value: "176%", label: "GH Surge (Nordic data)" },
];

const protocols = [
  {
    icon: "🔥",
    timing: "Standard Session",
    title: "Finnish-Style Sauna",
    description:
      "Use a dry sauna at 80–90°C for 20 minutes, 2–4 times weekly, to cut cardiovascular risk and raise heat-shock proteins.",
    actions: [
      "Hydrate with 500 ml water + electrolytes pre-session",
      "Sit upright, breathe steadily; exit if dizzy",
      "Cool down with ambient air before next round",
    ],
    science:
      "Huberman cites Laukkanen et al. showing 2–4 sauna sessions per week reduce fatal cardiovascular events by up to 50%.",
  },
  {
    icon: "💪",
    timing: "Performance",
    title: "Post-Training Heat",
    description:
      "Apply sauna after workouts (not before) to boost growth hormone, cardiovascular adaptations, and endurance.",
    actions: [
      "Wait 10–15 minutes after exercise before entering",
      "Aim for 2 rounds of 15 minutes with cool-down",
      "Rehydrate with electrolytes and protein after",
    ],
    science:
      "Sauna post-exercise can increase growth hormone 5–16× (Nordic studies). Heat-shock proteins assist muscle repair.",
  },
  {
    icon: "🧠",
    timing: "Mood",
    title: "Heat for Stress Relief",
    description:
      "Use sauna on high-stress days paired with NSDR or breathwork to increase endorphins and relax muscles.",
    actions: [
      "Practice 4-7-8 breathing while in sauna",
      "Follow with contrast shower or cool plunge",
      "Journal or plan after session to capture insights",
    ],
    science:
      "Heat raises dynorphin, which makes the subsequent endorphin surge feel stronger—explaining post-sauna calm and euphoria.",
  },
  {
    icon: "⚠️",
    timing: "Safety",
    title: "Contraindications",
    description:
      "Avoid sauna if pregnant, intoxicated, or with uncontrolled cardiovascular disease. Always exit if lightheaded.",
    actions: [
      "Check with doctor if on antihypertensives",
      "Do not combine sauna with alcohol",
      "Cool gradually—no sudden cold plunge if dizzy",
    ],
    science:
      "Huberman stresses medical clearance for heart conditions and the importance of hydration/electrolytes to prevent arrhythmias.",
  },
];

const steps = [
  {
    title: "Start Low",
    text: "Begin with 10-minute sessions at 70°C to assess tolerance.",
  },
  {
    title: "Progress Duration",
    text: "Add 2–3 minutes per session until you comfortably reach 20 minutes.",
  },
  {
    title: "Add Rounds",
    text: "Layer up to three rounds separated by cool-down once adaptation occurs.",
  },
  {
    title: "Integrate Contrast",
    text: "Experiment with cold showers or plunges after sauna to amplify circulation and dopamine—if cleared by your doctor.",
  },
];

const resources = [
  {
    title: "Huberman Lab Heat Toolkit",
    detail: "hubermanlab.com/toolkit-for-heat—step-by-step guide and contraindications.",
  },
  {
    title: "Laukkanen Studies",
    detail: "Longitudinal Finnish cohorts demonstrating sauna’s impact on mortality and dementia risk.",
  },
  {
    title: "Medical Clearance",
    detail: "Consult cardiologist or primary care physician—especially with blood pressure or pregnancy considerations.",
  },
];

export default function HeatExposurePage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="🔥"
          title="Heat"
          accent="Exposure"
          subtitle="Harness sauna and deliberate heat as hormetic stress to improve cardiovascular health, growth hormone, and mental well-being."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Heat Physiology</h2>
                <p className={styles.sectionSubtitle}>
                  Raising core temperature triggers heat-shock proteins, increases blood flow, and challenges cardiovascular and endocrine systems similar to moderate exercise.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Huberman highlights sauna’s impact on heart health, growth hormone, and dopamine. Respect the stress: hydrate, replenish electrolytes, and progress gradually. Pair with cold immersion for additional hormetic benefits.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Heat Protocols</h2>
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
                <h2 className={styles.sectionTitle}>Progression Roadmap</h2>
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
                <h2 className={styles.sectionTitle}>Resources & Safety</h2>
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
                *Consult your healthcare provider before starting sauna or heat exposure if you are pregnant, have cardiovascular disease, or take medications affecting blood pressure.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
