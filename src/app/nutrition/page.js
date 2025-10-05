import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Motion";
import styles from "../sleep/page.module.css";

export const metadata = {
  title: "Nutrition & Metabolic Health - Huberman Protocol",
  description: "Science-based nutrition protocols for optimal metabolic health, body composition, and performance.",
};

export default function NutritionPage() {
  const nutritionSupplements = [
    { name: "Omega-3 (EPA/DHA)", dose: "1-2g", timing: "With meals", note: "Reduces inflammation, supports brain health" },
    { name: "Vitamin D3", dose: "2000-4000 IU", timing: "With fat-containing meal", note: "Bone health, immune function, mood" },
    { name: "Magnesium", dose: "200-400mg", timing: "Evening", note: "Sleep, muscle function, glucose metabolism" },
    { name: "Probiotics", dose: "10-50 billion CFU", timing: "With or after meals", note: "Gut health, immune function, mood" },
    { name: "Fiber Supplement", dose: "20-35g total daily", timing: "With meals", note: "Digestive health, blood sugar control" },
  ];

  const macroGuidelines = [
    {
      macro: "Protein",
      amount: "0.8-1.2g per lb bodyweight",
      timing: "Spread across 3-4 meals",
      benefits: [
        "Muscle protein synthesis and maintenance",
        "Increased satiety and metabolic rate",
        "Better body composition",
        "Stable blood sugar levels"
      ],
      sources: "Lean meats, fish, eggs, dairy, legumes, protein powder"
    },
    {
      macro: "Carbohydrates", 
      amount: "45-65% of total calories",
      timing: "Around workouts and earlier in day",
      benefits: [
        "Primary fuel for brain and muscles",
        "Supports intense training performance", 
        "Aids in recovery and glycogen replenishment",
        "Helps with sleep when consumed at dinner"
      ],
      sources: "Fruits, vegetables, whole grains, legumes, tubers"
    },
    {
      macro: "Fats",
      amount: "20-35% of total calories", 
      timing: "Away from pre/post workout",
      benefits: [
        "Hormone production (testosterone, cortisol)",
        "Vitamin absorption (A, D, E, K)",
        "Satiety and meal satisfaction",
        "Cell membrane health"
      ],
      sources: "Nuts, seeds, avocado, olive oil, fatty fish, eggs"
    }
  ];

  const nutritionHacks = [
    "Eat protein first at meals to increase satiety and blunt glucose spikes",
    "Time-restricted eating (12-16h fast) may improve metabolic flexibility",
    "Cold water (50-60°F) can increase metabolism by 10% for 30-60 minutes",
    "Vinegar before meals reduces glucose response by 20-30%",
    "Eating slowly (20+ min per meal) improves satiety hormones",
    "Morning protein (30g+) improves satiety throughout the day",
    "Fiber with each meal slows glucose absorption and feeds gut bacteria",
    "Meal timing affects circadian rhythm - consistent timing helps metabolism"
  ];

  const mealTiming = [
    {
      period: "Upon Waking",
      recommendations: [
        "Wait 90-120 minutes before first meal if possible",
        "Hydrate with water + electrolytes",
        "Consider black coffee or tea (delays hunger)",
        "Get sunlight exposure to support circadian rhythm"
      ]
    },
    {
      period: "Pre-Workout",
      recommendations: [
        "2-3 hours: Normal mixed meal",
        "1-2 hours: Light carbs + minimal protein/fat",
        "30-60 min: Simple carbs only (banana, dates)",
        "Stay hydrated but don't overdo it"
      ]
    },
    {
      period: "Post-Workout", 
      recommendations: [
        "Within 2 hours: Protein + carbs for recovery",
        "3:1 or 4:1 carb to protein ratio ideal",
        "Liquid nutrition digests faster if needed",
        "Don't skip this meal - critical for adaptations"
      ]
    },
    {
      period: "Evening",
      recommendations: [
        "Stop eating 2-3 hours before bed",
        "Include some carbs to support sleep",
        "Avoid large, heavy meals close to bedtime",
        "Herbal tea can aid relaxation and digestion"
      ]
    }
  ];

  const foodQuality = [
    {
      category: "Prioritize",
      foods: [
        "Organic produce when possible (dirty dozen)",
        "Grass-fed/pasture-raised animal products",
        "Wild-caught fish (low mercury)",
        "Fermented foods (yogurt, kefir, sauerkraut)",
        "Nuts and seeds (unsalted, unprocessed)",
        "Extra virgin olive oil, avocado oil"
      ]
    },
    {
      category: "Minimize",
      foods: [
        "Ultra-processed foods with long ingredient lists", 
        "Added sugars and artificial sweeteners",
        "Trans fats and hydrogenated oils",
        "Excess alcohol (>1-2 drinks per day)",
        "High mercury fish (shark, swordfish, king mackerel)",
        "Excessive caffeine (>400mg daily)"
      ]
    },
    {
      category: "Meal Prep Hacks",
      foods: [
        "Batch cook proteins and grains on weekends",
        "Pre-cut vegetables for easy snacking",
        "Prepare emergency snacks (nuts, hard-boiled eggs)",
        "Keep frozen vegetables as backup options",
        "Use slow cooker or pressure cooker for convenience",
        "Plan meals to avoid decision fatigue"
      ]
    }
  ];

  const hydrationGuidelines = [
    { timepoint: "Upon Waking", amount: "16-24 oz water", note: "Rehydrate from overnight fast" },
    { timepoint: "Pre-Workout", amount: "8-16 oz", note: "15-30 minutes before exercise" },
    { timepoint: "During Workout", amount: "6-8 oz every 15-20 min", note: "For sessions >60 minutes" },
    { timepoint: "Post-Workout", amount: "150% of fluid lost", note: "Weigh before/after to calculate" },
    { timepoint: "Throughout Day", amount: "Half body weight in oz", note: "Spread evenly, more if sweating" },
    { timepoint: "Before Bed", amount: "Minimal", note: "Avoid disrupting sleep with bathroom trips" },
  ];

  return (
    <>
      <Header />
      <main className="container">
        <div className={styles.pageWrap}>
          {/* HERO */}
          <section className={styles.hero}>
            <FadeIn>
              <h1 className={styles.pageTitle}>Nutrition & Metabolic Health</h1>
              <p className={styles.pageSubtitle}>
                Science-based nutrition protocols for optimal metabolic health, body composition, 
                and performance. Fuel your body right.
              </p>
            </FadeIn>
          </section>

          {/* MACRONUTRIENT GUIDELINES */}
          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <h2>🍽️ Macronutrient Guidelines</h2>
              <p className={styles.sectionDesc}>Understanding the role of protein, carbs, and fats for optimal health and performance.</p>
              <div className={styles.protocolsGrid}>
                {macroGuidelines.map((macro, i) => (
                  <div key={i} className={styles.protocolCard}>
                    <h3>{macro.macro}</h3>
                    <div className={styles.protocolDesc}>
                      <strong>Amount:</strong> {macro.amount}
                    </div>
                    <div className={styles.protocolDesc}>
                      <strong>Timing:</strong> {macro.timing}
                    </div>
                    <div className={styles.protocolDesc} style={{marginBottom: '12px'}}>
                      <strong>Sources:</strong> {macro.sources}
                    </div>
                    <ul>
                      {macro.benefits.map((benefit, j) => (
                        <li key={j}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* MEAL TIMING */}
          <FadeIn delay={0.2}>
            <section className={styles.section}>
              <h2>⏰ Meal Timing & Circadian Nutrition</h2>
              <p className={styles.sectionDesc}>When you eat is almost as important as what you eat for metabolic health.</p>
              <div className={styles.phasesGrid}>
                {mealTiming.map((period, i) => (
                  <div key={i} className={styles.phaseCard}>
                    <h3>{period.period}</h3>
                    <ul>
                      {period.recommendations.map((rec, j) => (
                        <li key={j}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* HYDRATION */}
          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <h2>💧 Hydration Protocol</h2>
              <p className={styles.sectionDesc}>Proper hydration affects every bodily function. Here&apos;s how to optimize it.</p>
              <div className={styles.supplementsTable}>
                <div className={styles.tableHeader}>
                  <span>Timepoint</span>
                  <span>Amount</span>
                  <span>Notes</span>
                  <span>Why</span>
                </div>
                {hydrationGuidelines.map((guide, i) => (
                  <div key={i} className={styles.tableRow}>
                    <span className={styles.suppName}>{guide.timepoint}</span>
                    <span>{guide.amount}</span>
                    <span>{guide.note}</span>
                    <span className={styles.suppNote}>Optimal timing for absorption</span>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* FOOD QUALITY */}
          <FadeIn delay={0.4}>
            <section className={styles.section}>
              <h2>🥗 Food Quality & Choices</h2>
              <p className={styles.sectionDesc}>Not all calories are created equal. Food quality affects satiety, inflammation, and health.</p>
              <div className={styles.strategiesGrid}>
                {foodQuality.map((category, i) => (
                  <div key={i} className={styles.strategyCard}>
                    <h3>{category.category}</h3>
                    <ul>
                      {category.foods.map((food, j) => (
                        <li key={j}>{food}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* NUTRITION HACKS */}
          <FadeIn delay={0.5}>
            <section className={styles.section}>
              <h2>🧠 Nutrition Optimization Tips</h2>
              <p className={styles.sectionDesc}>Evidence-based nutrition strategies that most people don&apos;t know about.</p>
              <div className={styles.tipsGrid}>
                {nutritionHacks.map((tip, i) => (
                  <div key={i} className={styles.tipCard}>
                    <span className={styles.tipIcon}>💡</span>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* SUPPLEMENTS */}
          <FadeIn delay={0.6}>
            <section className={styles.section}>
              <h2>💊 Essential Nutrition Supplements</h2>
              <p className={styles.sectionDesc}>Evidence-based supplements to fill nutritional gaps and optimize health.</p>
              <div className={styles.supplementsTable}>
                <div className={styles.tableHeader}>
                  <span>Supplement</span>
                  <span>Dose</span>
                  <span>Timing</span>
                  <span>Effect</span>
                </div>
                {nutritionSupplements.map((supp, i) => (
                  <div key={i} className={styles.tableRow}>
                    <span className={styles.suppName}>{supp.name}</span>
                    <span>{supp.dose}</span>
                    <span>{supp.timing}</span>
                    <span className={styles.suppNote}>{supp.note}</span>
                  </div>
                ))}
              </div>
              <div className={styles.disclaimer}>
                ⚠️ Food first, supplements second. Get blood work to identify deficiencies. Consult healthcare provider.
              </div>
            </section>
          </FadeIn>

          {/* SCIENCE */}
          <FadeIn delay={0.7}>
            <section className={styles.section}>
              <h2>The Science: How Nutrition Affects Biology</h2>
              <div className={styles.scienceGrid}>
                <div className={styles.scienceCard}>
                  <h3>Insulin & Glucose</h3>
                  <p>Meal composition affects insulin sensitivity. Protein + fiber blunt glucose spikes. Time-restricted eating improves metabolic flexibility.</p>
                </div>
                <div className={styles.scienceCard}>
                  <h3>Gut-Brain Axis</h3>
                  <p>Gut bacteria influence mood, immunity, and metabolism. Diverse fiber intake feeds beneficial bacteria and produces helpful metabolites.</p>
                </div>
                <div className={styles.scienceCard}>
                  <h3>Circadian Metabolism</h3>
                  <p>Insulin sensitivity follows circadian rhythm - highest in morning, lowest at night. Meal timing affects metabolic health independent of calories.</p>
                </div>
              </div>
            </section>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
