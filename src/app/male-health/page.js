import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Male Sexual Health – Huberman Protocol",
  description:
    "Protocols supporting testosterone, fertility, and vitality for men, based on Huberman Lab guidance.",
};

const heroStats = [
  { value: "+15%", label: "Test Boost (Sleep)" },
  { value: "2-3x", label: "Weekly Strength" },
  { value: "3", label: "Fertility Pillars" },
];

const protocols = [
  {
    icon: "🛌",
    timing: "Night",
    title: "Protect Deep Sleep",
    description:
      "Seven to nine hours of quality sleep increases testosterone 10–15% compared with five hours. Dim evening light and keep a strict sleep schedule.",
    actions: [
      "Cut caffeine 8 hours prior",
      "Use warm shower then cool bedroom (18–20°C)",
      "Practice 10-minute NSDR if mind races",
    ],
    science:
      "Huberman cites studies showing a week of 5-hour sleep cut testosterone levels equivalent to aging 10–15 years.",
  },
  {
    icon: "🏋️",
    timing: "Training",
    title: "Resistance + Sprint",
    description:
      "Prioritize heavy compound lifts and short sprint sets to stimulate androgen receptors and growth hormone.",
    actions: [
      "Squat/deadlift/push 2–3x weekly (3–5 sets, 5–8 reps)",
      "Add 6–8 sprint intervals (10–20 seconds) once weekly",
      "Avoid chronic endurance without strength balance",
    ],
    science:
      "Episodes #87/#96 share data linking resistance + sprint work with increased testosterone and improved erectile function.",
  },
  {
    icon: "🥗",
    timing: "Nutrition",
    title: "Macro & Micronutrients",
    description:
      "Support hormones with sufficient protein, healthy fats, zinc, magnesium, and omega-3s.",
    actions: [
      "0.8–1 g protein/lb bodyweight",
      "Include eggs, grass-fed beef, or shellfish for zinc",
      "Supplement magnesium + vitamin D if deficient",
    ],
    science:
      "Zinc and magnesium correlate with higher testosterone; omega-3s aid sperm membrane integrity. Huberman advises lab-guided supplementation.",
  },
  {
    icon: "🚫",
    timing: "Lifestyle",
    title: "Avoid Hormone Killers",
    description:
      "Limit alcohol, manage heat exposure to testes, and reduce endocrine disruptors (plastics, phthalates).",
    actions: [
      "Keep laptops off lap; wear breathable clothing",
      "Swap plastic food storage for glass",
      "If using sauna, keep sessions moderate and allow cooling",
    ],
    science:
      "Huberman references fertility clinics noting heat and alcohol reduce sperm count. Plastics leach xenoestrogens impacting endocrine balance.",
  },
];

const steps = [
  {
    title: "Baseline Labs",
    text: "Test total and free testosterone, SHBG, LH/FSH, prolactin, fasting insulin, and vitamin D with your doctor.",
  },
  {
    title: "Dial Sleep & Training",
    text: "Install consistent sleep hygiene and start a progressive resistance + sprint template.",
  },
  {
    title: "Optimize Nutrition",
    text: "Distribute protein across meals, increase whole-food fats (olive oil, avocado), and ensure micronutrient coverage.",
  },
  {
    title: "Reassess & Adjust",
    text: "Retest labs in 12 weeks. Discuss TRT only if clinically indicated and lifestyle boxes are ticked.",
  },
];

const resources = [
  {
    title: "Huberman Lab #96",
    detail: "Men’s hormone episode—behaviors, supplements, and medical options (TRT, enclomiphene, etc.).",
  },
  {
    title: "Fertility Episode",
    detail: "Explains sperm quality, timing, and lifestyle factors influencing conception.",
  },
  {
    title: "Medical Partner",
    detail: "Work with an endocrinologist or urologist for lab interpretation and fertility assessment.",
  },
];

export default function MaleHealthPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="♂️"
          title="Male"
          accent="Health"
          subtitle="Support testosterone, fertility, and vitality by combining sleep, training, nutrition, and toxin avoidance."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Build Androgen-Friendly Habits</h2>
                <p className={styles.sectionSubtitle}>
                  Most declines in male hormones stem from sleep debt, excess alcohol, poor nutrition, and low muscle mass. Correct these first.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Huberman emphasizes prioritizing sleep, intense-but-brief strength work, high-quality protein, and micronutrient sufficiency. Combine these with managed stress (breathwork, sunlight, social connection) to stabilize testosterone, libido, and mood.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Key Protocols</h2>
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
                <h2 className={styles.sectionTitle}>Professional Support</h2>
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
                *Testosterone replacement therapy (TRT) or fertility medications require physician oversight. Lifestyle remains the foundation.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
