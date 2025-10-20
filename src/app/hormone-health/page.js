import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Hormone Health – Huberman Protocol",
  description:
    "Daily levers for steady testosterone, estrogen, thyroid, and cortisol rhythms inspired by Huberman Lab discussions.",
};

const heroStats = [
  { value: "4", label: "Hormone Pillars" },
  { value: "7-9 h", label: "Sleep Target" },
  { value: "2x", label: "Strength Sessions" },
];

const protocols = [
  {
    icon: "🌞",
    timing: "AM",
    title: "Light, Movement & Protein",
    description:
      "Morning sunlight + movement anchor cortisol and thyroid output. A protein-rich meal provides amino acids for hormone synthesis.",
    actions: [
      "Sunlight + brisk walk within 60 minutes of waking",
      "20–30 g protein + healthy fats at breakfast",
      "Include iodized salt or seaweed twice weekly for thyroid support",
    ],
    science:
      "Huberman highlights circadian entrainment and adequate protein as prerequisites for optimal testosterone/estrogen and thyroid hormone conversion.",
  },
  {
    icon: "🏋️",
    timing: "Training",
    title: "Strength & Zone-2 Pair",
    description:
      "Resistance training boosts testosterone and growth hormone acutely, while zone-2 cardio improves insulin sensitivity supporting sex hormones.",
    actions: [
      "Lift heavy (compound lifts) 2–3x per week",
      "Add 150 minutes zone-2 cardio for mitochondrial health",
      "Use deliberate cold post-workout sparingly to avoid blunting gains",
    ],
    science:
      "Episodes #87 & #94 show resistance exercise increases androgen receptor density; zone-2 reduces visceral fat, lowering estrogen imbalance in men and supporting progesterone in women.",
  },
  {
    icon: "🥗",
    timing: "Daily",
    title: "Micronutrient Coverage",
    description:
      "Ensure adequate zinc, magnesium, omega-3s, and fiber for hormone production, detoxification, and gut health.",
    actions: [
      "Eat shellfish, pumpkin seeds, or supplement zinc if deficient",
      "Aim for 30+ plant varieties weekly for fiber",
      "Consider 1–2 g EPA/DHA for steroid hormone precursors",
    ],
    science:
      "Huberman references research linking zinc and magnesium with testosterone production and highlighting gut microbiome’s role in estrogen recycling.",
  },
  {
    icon: "🌙",
    timing: "PM",
    title: "Sleep & Stress Hygiene",
    description:
      "Low evening light, parasympathetic routines, and stress relief preserve melatonin and keep cortisol from spiking overnight.",
    actions: [
      "Ditch caffeine 8 hours before bed",
      "Integrate Yoga Nidra or cyclic sighing",
      "Track stress; use journaling or therapy to offload mental load",
    ],
    science:
      "Chronic sleep debt disrupts testosterone, estrogen, and thyroid hormones. Parasympathetic activation lowers ACTH, normalizing cortisol rhythms.",
  },
];

const steps = [
  {
    title: "Labs & Baseline",
    text: "Work with your physician to run fasting labs (CBC, CMP, lipid panel, testosterone/estrogen, thyroid, fasting insulin).",
  },
  {
    title: "Anchor Circadian",
    text: "Install consistent wake/sleep, morning light, and protein-forward meals for 2 weeks.",
  },
  {
    title: "Train & nourish",
    text: "Introduce strength + zone-2 template, increase micronutrient density, and hydrate with electrolytes.",
  },
  {
    title: "Refine & Retest",
    text: "After 12 weeks, retest labs, evaluate stress, and adjust supplementation or medical interventions with your provider.",
  },
];

const resources = [
  {
    title: "Huberman Lab #96",
    detail: "Men and women’s hormone optimization toolkit: behaviors, blood work, and supplementation considerations.",
  },
  {
    title: "Resistance Exercise Episode",
    detail: "Templates for hypertrophy and strength that positively influence androgen/estrogen balance.",
  },
  {
    title: "Medical Team",
    detail: "Endocrinologist, functional MD, or OB-GYN to interpret labs and monitor hormone therapies.",
  },
];

export default function HormoneHealthPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="⚖️"
          title="Hormone"
          accent="Health"
          subtitle="Protect and optimize your hormonal landscape with circadian alignment, nutrient density, and intelligent training."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Hormones Follow Habits</h2>
                <p className={styles.sectionSubtitle}>
                  Testosterone, estrogen, thyroid, and cortisol respond to light, sleep, nutrition, and stress. Huberman emphasizes establishing behavioral rhythms before pursuing pharmacology.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Morning sunlight and evening darkness anchor the hypothalamic-pituitary axis. Adequate protein, healthy fats, and micronutrients supply building blocks. Resistance training and zone-2 cardio modulate insulin and inflammatory signals, enabling balanced sex hormones. Chronic stress elevates cortisol, suppressing reproductive hormones—hence the focus on parasympathetic tools.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Daily Protocols</h2>
                <p className={styles.sectionSubtitle}>
                  Apply these four pillars consistently. Layer medical guidance when indicated.
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
                <h2 className={styles.sectionTitle}>Implementation Timeline</h2>
                <p className={styles.sectionSubtitle}>
                  Move through these phases with medical oversight.
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
                <h2 className={styles.sectionTitle}>Collaborate With Experts</h2>
                <p className={styles.sectionSubtitle}>
                  Hormones interact with every system. Review labs and protocols with professionals.
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
                *Never start hormone therapy or supplements (DHEA, testosterone, thyroid medication) without physician supervision. Track bloodwork at least annually.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
