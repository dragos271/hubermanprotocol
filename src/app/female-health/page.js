import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Female Hormone Health – Huberman Protocol",
  description:
    "Cycle-aware routines that support estrogen, progesterone, and stress resilience throughout the month.",
};

const heroStats = [
  { value: "4", label: "Cycle Phases" },
  { value: "120 mg", label: "Daily Magnesium" },
  { value: "7-9 h", label: "Sleep Target" },
];

const protocols = [
  {
    icon: "🌸",
    timing: "Follicular",
    title: "High-Energy Training & Growth",
    description:
      "During days 1–14 (cycle-dependent), estrogen rises. Focus on strength gains, skill learning, and higher-intensity cardio.",
    actions: [
      "Schedule PR attempts or sprint work",
      "Increase complex skill practice (languages, instruments)",
      "Front-load iron-rich foods if menstruating",
    ],
    science:
      "Huberman interviews with Dr. Stacy Sims and others highlight greater pain tolerance and recovery capacity in early cycle due to estrogen’s anabolic effects.",
  },
  {
    icon: "🌿",
    timing: "Ovulation",
    title: "Recovery & Stress Management",
    description:
      "Around ovulation, maintain training but emphasize hydration, electrolytes, and parasympathetic practices to buffer cortisol spikes.",
    actions: [
      "Add electrolytes to water, especially in heat",
      "Integrate 5-minute breathwork post-training",
      "Prioritize sleep—progesterone will soon rise",
    ],
    science:
      "Elevated luteinizing hormone can increase sympathetic drive; Huberman recommends counterbalancing with deliberate recovery tools.",
  },
  {
    icon: "🧘",
    timing: "Luteal",
    title: "Calming & Anti-Inflammatory",
    description:
      "Progesterone dominates; temperature climbs. Shift to zone-2 cardio, Pilates, or lower-impact strength. Add magnesium, omega-3s, and sleep hygiene.",
    actions: [
      "Supplement magnesium glycinate (120–200 mg)",
      "Focus on 7–9 hours sleep with cool bedroom",
      "Use adaptogens (ashwagandha) if cleared by doctor",
    ],
    science:
      "Huberman notes progesterone-induced temperature rise can disrupt sleep. Cooling, magnesium, and breathwork mitigate PMS symptoms.",
  },
  {
    icon: "🍫",
    timing: "Menstruation",
    title: "Gentle Reset",
    description:
      "Emphasize iron intake, restorative movement (walking, yoga), and self-compassion. Monitor HRV and adjust workload.",
    actions: [
      "Consume heme iron + vitamin C pairing",
      "Swap intense sessions for mobility and NSDR",
      "Hydrate with electrolytes to replace losses",
    ],
    science:
      "Iron depletion contributes to fatigue. Huberman highlights NSDR and light movement for mood/stress regulation during this phase.",
  },
];

const steps = [
  {
    title: "Cycle Tracking",
    text: "Use an app or wearable to log phase, symptoms, and responses to training, caffeine, and supplements.",
  },
  {
    title: "Tailor Training",
    text: "Map workouts to energy: strength + HIIT follicular, skill + balance ovulation, deload & restorative luteal/menstruation.",
  },
  {
    title: "Support Nutrients",
    text: "Ensure adequate protein, omega-3s, magnesium, B-vitamins, and cyclical carb variations to match cravings without crashes.",
  },
  {
    title: "Consult Specialists",
    text: "Work with OB-GYN/endocrinologist for irregular cycles, PCOS, perimenopause, or when considering hormone therapy.",
  },
];

const resources = [
  {
    title: "Huberman Lab #97",
    detail: "Women’s hormones episode covering training, nutrition, and supplements by phase.",
  },
  {
    title: "Dr. Stacy Sims",
    detail: "Research on sex-differences in exercise and recovery protocols.",
  },
  {
    title: "Healthcare Team",
    detail: "Partner with OB-GYN, functional medicine, or fertility specialists for individualized plans.",
  },
];

export default function FemaleHealthPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="♀️"
          title="Female"
          accent="Health"
          subtitle="Align training, nutrition, and recovery with your hormone rhythm to create sustainable energy and fertility."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Cycle Intelligence</h2>
                <p className={styles.sectionSubtitle}>
                  Estrogen and progesterone shape metabolism, mood, and training tolerance. Huberman encourages women to leverage each phase instead of fighting it.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Track basal temperature, energy, cravings, and performance markers. Use the information to adjust food, exercise intensity, and sleep routines. Share data with your healthcare team, especially when using hormonal contraception, pregnant, or perimenopausal.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Phase-Specific Protocols</h2>
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
                <h2 className={styles.sectionTitle}>Implementation Roadmap</h2>
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
                <h2 className={styles.sectionTitle}>Partner With Professionals</h2>
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
                *Discuss supplements (ashwagandha, vitex, DIM), hormone therapy, or contraceptive changes with your clinician. Pregnancy and perimenopause require personalized plans.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
