import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Evidence-Based Supplementation – Huberman Protocol",
  description:
    "Build a deliberate supplement stack that complements foundational behaviors and aligns with Huberman Lab guidance.",
};

const heroStats = [
  { value: "3", label: "Decision Filters" },
  { value: "6", label: "Core Compounds" },
  { value: "1x", label: "Quarterly Review" },
];

const protocols = [
  {
    icon: "🧪",
    timing: "Morning",
    title: "Baseline Support",
    description:
      "Cover common gaps first: omega-3s (EPA/DHA), vitamin D3 + K2, and electrolytes if training hard or fasting.",
    actions: [
      "1–2 g combined EPA/DHA with food",
      "Follow lab-guided D3 dosing (often 2,000–5,000 IU)",
      "Add sodium/potassium packet to first liter of water",
    ],
    science:
      "Huberman underscores resolving deficiencies before exotic stacks. Omega-3s influence neuronal membranes; vitamin D modulates immune and hormone function.",
  },
  {
    icon: "🧠",
    timing: "Focus",
    title: "Cognitive Toolkit",
    description:
      "Combine L-tyrosine or Alpha-GPC with caffeine for demanding work blocks, and L-theanine to smooth jitter.",
    actions: [
      "Tyrosine 500–1,000 mg 30 minutes before intense work",
      "Alpha-GPC 300 mg for acetylcholine support",
      "L-theanine 100–200 mg alongside caffeine",
    ],
    science:
      "Episodes on focus describe how tyrosine replenishes catecholamine precursors, while Alpha-GPC increases acetylcholine for plasticity.",
  },
  {
    icon: "😴",
    timing: "Evening",
    title: "Sleep Stack",
    description:
      "Deploy magnesium threonate or bisglycinate, theanine, and apigenin to reduce sleep latency when needed.",
    actions: [
      "Magnesium 140–200 mg 1–2 hours pre-bed",
      "L-theanine 100 mg (skip if already high dose earlier)",
      "Apigenin 50 mg for GABAergic support",
    ],
    science:
      "Huberman reports this stack in personal use; studies show magnesium and theanine increase slow-wave sleep while apigenin acts on GABA receptors.",
  },
  {
    icon: "📊",
    timing: "Quarterly",
    title: "Lab-Guided Adjustments",
    description:
      "Run bloodwork to track lipids, ferritin, vitamin D, endocrine panels, and adjust supplements with medical supervision.",
    actions: [
      "Review labs with physician before dose changes",
      "Audit overlapping ingredients across products",
      "Cycle off stimulatory compounds every 8–12 weeks",
    ],
    science:
      "Huberman repeatedly cautions that lab data and professional input should drive supplementation—not marketing claims.",
  },
];

const steps = [
  {
    title: "Clarify Goals",
    text: "Define the problem you are solving: sleep, focus, inflammation, or recovery. Supplements should support an outcome, not be default.",
  },
  {
    title: "Fix Foundations",
    text: "Ensure sleep, light, nutrition, and movement are stable. Without these, supplement effects are unpredictable.",
  },
  {
    title: "Add One Variable",
    text: "Introduce one new compound at a time for 2–3 weeks while tracking subjective and objective markers.",
  },
  {
    title: "Review & Cycle",
    text: "Re-test labs and reevaluate quarterly. Remove anything unhelpful; avoid stacking redundant stimulants or sedatives.",
  },
];

const resources = [
  {
    title: "Huberman Lab #86",
    detail: "Comprehensive overview of foundational supplements, dosages, and safety considerations.",
  },
  {
    title: "Examine.com",
    detail: "Evidence summaries on supplement efficacy, interactions, and dose ranges.",
  },
  {
    title: "Healthcare Team",
    detail: "Share your protocol with your physician or registered dietitian—especially before combining with prescriptions.",
  },
];

export default function SupplementationPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="💊"
          title="Supplement"
          accent="Strategy"
          subtitle="Use supplements as precision tools layered on top of robust lifestyle pillars and guided by data."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Decision Filters</h2>
                <p className={styles.sectionSubtitle}>
                  Huberman encourages three filters before adding anything: (1) Identify the physiological lever (sleep, dopamine, inflammation), (2) verify research quality, and (3) consult a professional when stacking with medications or chronic conditions.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Start with the essentials (omega-3, vitamin D, electrolytes) if labs or behavior suggest gaps. Build a log that includes brand, dose, timing, and perceived effect. Supplements work best when treated like experiments—not permanent fixtures.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Stack Archetypes</h2>
                <p className={styles.sectionSubtitle}>
                  Reference these common Huberman-inspired stacks, then tailor with your healthcare team.
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
                <h2 className={styles.sectionTitle}>Experiment Roadmap</h2>
                <p className={styles.sectionSubtitle}>
                  Deploy supplements intentionally using this cycle.
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
                <h2 className={styles.sectionTitle}>Safety & References</h2>
                <p className={styles.sectionSubtitle}>
                  Dig into primary literature and partner with professionals for personalized plans.
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
                *Supplements can interact with prescriptions, lab tests, and existing conditions. Review every addition with a qualified healthcare provider.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
