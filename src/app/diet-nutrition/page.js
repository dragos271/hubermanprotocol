import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Diet & Nutrition – Huberman Protocol",
  description:
    "Fuel cognition, metabolism, and longevity with Huberman Lab-informed nutrition timing and nutrient strategies.",
};

const heroStats = [
  { value: "16:8", label: "TRE Baseline" },
  { value: "1 g/lb", label: "Protein Target" },
  { value: "30+", label: "Plants / Week" },
];

const nutritionProtocols = [
  {
    icon: "⏰",
    timing: "Daily",
    title: "Time-Restricted Eating",
    description: "Align meals with circadian biology using 8–10 hour feeding windows.",
    actions: [
      "Finish last meal 2–3 hours before bed",
      "Maintain consistent window (e.g., 10 a.m.–6 p.m.)",
      "Extend fast to 12–14 h on rest days",
      "Hydrate with electrolytes during fasting",
    ],
    science:
      "TRE improves insulin sensitivity, mitochondrial efficiency, and sleep quality by syncing with peripheral clocks.",
  },
  {
    icon: "🥩",
    timing: "Per meal",
    title: "Protein Distribution",
    description: "Hit 0.8–1 g per pound of bodyweight, spread across meals for muscle and neurotransmitter support.",
    actions: [
      "Aim 30–40 g protein breakfast",
      "Include leucine-rich sources (eggs, lean meats)",
      "Combine with fiber + healthy fats for satiety",
      "Use plant + animal diversity for amino acid coverage",
    ],
    science:
      "Sufficient protein supplies amino acids for neurotransmitters (dopamine, serotonin) and preserves lean mass.",
  },
  {
    icon: "🥦",
    timing: "Daily",
    title: "Phytonutrient Diversity",
    description: "Eat 30+ different plants weekly to support microbiome and inflammation control.",
    actions: [
      "Track plant count (spices, herbs count)",
      "Prioritize cruciferous and leafy greens",
      "Rotate colors for polyphenol variety",
      "Add fermented foods 3–5x/week",
    ],
    science:
      "Microbiome diversity improves metabolic health, immunity, and mood through gut-brain signaling.",
  },
  {
    icon: "💧",
    timing: "All day",
    title: "Hydration & Electrolytes",
    description: "Balance sodium, potassium, and magnesium to maintain energy and cognition.",
    actions: [
      "Start day with 500 ml water + electrolytes",
      "Target 3–5 g sodium (adjust for sweat)",
      "Supplement magnesium glycinate (120–200 mg)",
      "Add potassium-rich foods (avocado, leafy greens)",
    ],
    science:
      "Electrolyte balance stabilizes blood pressure, nerve conduction, and focus—especially with TRE or training.",
  },
];

const nutrientFocus = [
  {
    name: "Omega-3 EPA/DHA",
    benefit: "Brain health, anti-inflammatory",
    sources: "Fatty fish, algae oil",
  },
  {
    name: "Magnesium",
    benefit: "Sleep, glucose control, muscle relaxation",
    sources: "Legumes, pumpkin seeds, supplementation",
  },
  {
    name: "Vitamin D + K2",
    benefit: "Immune, hormone, bone health",
    sources: "Sunlight, fatty fish, quality supplements",
  },
  {
    name: "Creatine",
    benefit: "Cognitive and muscular energy",
    sources: "Red meat, 5 g micronized creatine",
  },
];

const nutritionMistakes = [
  {
    title: "Chronic Snacking",
    description: "Keeps insulin elevated and blunts fat oxidation.",
    solutions: ["Adopt TRE windows", "Drink electrolytes between meals", "Use protein-rich meals for satiety"],
  },
  {
    title: "Underfueling Protein",
    description: "Impairs recovery, hormone production, and focus.",
    solutions: ["Anchor meals around 30–40 g protein", "Supplement whey or plant blends", "Distribute evenly across day"],
  },
  {
    title: "Sleep-Disrupting Meals",
    description: "Large late meals raise body temperature and hinder sleep.",
    solutions: ["Finish dinner early", "Prioritize carbs earlier in day", "Use light protein snack if needed"],
  },
  {
    title: "Electrolyte Neglect",
    description: "Leads to brain fog, headaches, and poor training output.",
    solutions: ["Add 1/4 tsp salt to water", "Track intake on hot/training days", "Include potassium/magnesium sources"],
  },
];

const implementationSteps = [
  {
    title: "Audit Baseline",
    text: "Log meals, timing, and symptoms for 3 days to identify patterns.",
  },
  {
    title: "Fix Timing",
    text: "Install consistent feeding window and pre-bed cutoff.",
  },
  {
    title: "Upgrade Plate",
    text: "Anchor each meal with protein, fiber-rich plants, and healthy fats.",
  },
  {
    title: "Dial Micronutrients",
    text: "Add omega-3s, magnesium, vitamin D/K2, and creatine as needed with labs.",
  },
  {
    title: "Review Quarterly",
    text: "Retest labs (lipids, glucose, vitamin D) and adjust.",
  },
];

export default function DietNutritionPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="🥗"
          title="Diet"
          accent="Nutrition"
          subtitle="Structure meals, macros, and micronutrients to power brain and body." stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Nutrition as a System</h2>
                <p className={styles.sectionSubtitle}>
                  Huberman emphasizes timing, protein density, phytonutrient diversity, and electrolyte balance as foundations before advanced stacks.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Synchronize meals with circadian cues, stabilize blood sugar, and feed the microbiome. Layer supplements only after consistent habits and lab work.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Core Protocols</h2>
              </div>
              <div className={styles.protocolsGrid}>
                {nutritionProtocols.map((protocol, index) => (
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
                <h2 className={styles.sectionTitle}>Nutrient Focus</h2>
                <p className={styles.sectionSubtitle}>
                  Ensure these keystones are covered before adding exotic stacks.
                </p>
              </div>
              <div className={styles.resourceList}>
                {nutrientFocus.map((item) => (
                  <div key={item.name} className={styles.resourceItem}>
                    <strong>{item.name}</strong>
                    <span>Benefits: {item.benefit}</span>
                    <span>Sources: {item.sources}</span>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Common Pitfalls</h2>
              </div>
              <div className={styles.protocolsGrid}>
                {nutritionMistakes.map((mistake, index) => (
                  <FadeInScale key={mistake.title} delay={index * 0.05}>
                    <article className={styles.protocolCard}>
                      <h3>{mistake.title}</h3>
                      <p className={styles.protocolDescription}>{mistake.description}</p>
                      <div className={styles.protocolActions}>
                        <h4>Solutions</h4>
                        <ul>
                          {mistake.solutions.map((solution) => (
                            <li key={solution}>{solution}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </FadeInScale>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.4}>
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
                *Consult your physician or dietitian for personalized protocols and lab interpretation—especially when fasting, supplementing, or managing medical conditions.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
