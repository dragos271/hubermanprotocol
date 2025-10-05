import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Motion";
import styles from "../sleep/page.module.css";

export const metadata = {
  title: "Physical Training & Performance - Huberman Protocol",
  description: "Science-based fitness protocols for strength, endurance, recovery, and longevity.",
};

export default function PhysicalPage() {
  const fitnessSupplements = [
    { name: "Creatine Monohydrate", dose: "5g", timing: "Daily (any time)", note: "Increases power output & muscle recovery" },
    { name: "Citrulline Malate", dose: "6-8g", timing: "30min pre-workout", note: "Enhances blood flow & reduces fatigue" },
    { name: "Beta-Alanine", dose: "3-5g", timing: "Pre-workout", note: "Buffers lactic acid, improves endurance" },
    { name: "HMB", dose: "3g", timing: "With meals", note: "Reduces muscle breakdown, aids recovery" },
    { name: "Whey Protein", dose: "25-40g", timing: "Post-workout", note: "Maximizes muscle protein synthesis" },
  ];

  const trainingProtocols = [
    {
      name: "Strength Training",
      frequency: "3-5x per week",
      description: "Build muscle mass, bone density, and metabolic health",
      guidelines: [
        "Focus on compound movements (squat, deadlift, press)",
        "Progressive overload: increase weight/reps weekly",
        "3-5 sets x 6-12 reps for hypertrophy",
        "2-3 minute rest between sets for strength",
        "Train each muscle group 2x per week minimum"
      ]
    },
    {
      name: "Zone 2 Cardio", 
      frequency: "150-180 min/week",
      description: "Improve mitochondrial function and fat oxidation",
      guidelines: [
        "Conversational pace - can speak in full sentences",
        "Heart rate: 180 minus your age (rough estimate)",
        "Nasal breathing only during exercise",
        "Long, steady sessions (45-90 minutes)",
        "Examples: brisk walking, easy cycling, swimming"
      ]
    },
    {
      name: "High-Intensity Training",
      frequency: "2-3x per week",
      description: "Boost VO2 max and cardiovascular capacity",
      guidelines: [
        "All-out effort for 30 seconds to 4 minutes", 
        "Rest 1:1 or 2:1 ratio (work:rest)",
        "Examples: sprints, bike intervals, rowing",
        "Total session: 15-25 minutes including warm-up",
        "Don't do more than 3 sessions per week"
      ]
    }
  ];

  const recoveryStrategies = [
    {
      category: "Sleep Optimization",
      tactics: [
        "7-9 hours of quality sleep for muscle recovery",
        "Cool room temperature (65-68°F) enhances deep sleep",
        "Consistent sleep/wake times regulate growth hormone",
        "Avoid screens 1-2 hours before bed for better recovery"
      ]
    },
    {
      category: "Active Recovery",
      tactics: [
        "Light movement on rest days (walking, yoga, stretching)",
        "Sauna 2-4x per week (15-20 minutes at 175-195°F)",
        "Cold exposure 2-4x per week (2-4 minutes at 50-59°F)",
        "Massage or self-massage with foam roller/lacrosse ball"
      ]
    },
    {
      category: "Nutrition Timing",
      tactics: [
        "Protein within 2 hours post-workout (muscle synthesis)",
        "Carbs post-workout to replenish glycogen stores",
        "Stay hydrated: body weight in lbs ÷ 2 = ounces per day",
        "Electrolytes during/after intense or long sessions"
      ]
    }
  ];

  const fitnessHacks = [
    "Exercise within 3 hours of waking optimizes circadian rhythm and cortisol",
    "Resistance training increases BDNF more than cardio alone",
    "Walking after meals improves glucose uptake by 30%+",
    "Cold exposure post-workout may blunt strength gains - separate by 4+ hours",
    "Sauna use increases growth hormone by 16x when used post-workout",
    "Morning exercise improves sleep quality more than evening workouts",
    "Eccentric movements (lowering phase) drive more muscle growth",
    "Zone 2 training improves mitochondrial efficiency within 6-8 weeks"
  ];

  const workoutSplits = [
    {
      name: "Push/Pull/Legs (3-6 days)",
      schedule: [
        "Push: Chest, shoulders, triceps",
        "Pull: Back, biceps, rear delts", 
        "Legs: Quads, hamstrings, glutes, calves",
        "Repeat cycle or add rest days"
      ]
    },
    {
      name: "Upper/Lower (4 days)",
      schedule: [
        "Upper: All upper body muscles",
        "Lower: All lower body muscles",
        "Rest day",
        "Repeat cycle"
      ]
    },
    {
      name: "Full Body (3 days)",
      schedule: [
        "Full body workout with compound movements",
        "Rest day between sessions",
        "Perfect for beginners or time-constrained"
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="container">
        <div className={styles.pageWrap}>
          {/* HERO */}
          <section className={styles.hero}>
            <FadeIn>
              <h1 className={styles.pageTitle}>Physical Training & Performance</h1>
              <p className={styles.pageSubtitle}>
                Science-based fitness protocols for strength, endurance, recovery, and longevity.
                Train smarter, not just harder.
              </p>
            </FadeIn>
          </section>

          {/* TRAINING PROTOCOLS */}
          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <h2>🏋️ Training Protocols</h2>
              <p className={styles.sectionDesc}>Evidence-based approaches to build strength, endurance, and metabolic health.</p>
              <div className={styles.protocolsGrid}>
                {trainingProtocols.map((protocol, i) => (
                  <div key={i} className={styles.protocolCard}>
                    <h3>{protocol.name}</h3>
                    <div className={styles.protocolDesc}>
                      <strong>Frequency:</strong> {protocol.frequency}
                    </div>
                    <p className={styles.sectionDesc}>{protocol.description}</p>
                    <ul>
                      {protocol.guidelines.map((guideline, j) => (
                        <li key={j}>{guideline}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* WORKOUT SPLITS */}
          <FadeIn delay={0.2}>
            <section className={styles.section}>
              <h2>📅 Workout Split Options</h2>
              <p className={styles.sectionDesc}>Choose a training split that fits your schedule and recovery capacity.</p>
              <div className={styles.techniquesGrid}>
                {workoutSplits.map((split, i) => (
                  <div key={i} className={styles.techniqueCard}>
                    <h3>{split.name}</h3>
                    <div className={styles.techDetails}>
                      {split.schedule.map((day, j) => (
                        <span key={j}><strong>Day {j + 1}:</strong> {day}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* RECOVERY STRATEGIES */}
          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <h2>🔄 Recovery & Regeneration</h2>
              <p className={styles.sectionDesc}>Recovery is where adaptations happen. Optimize these pillars for maximum gains.</p>
              <div className={styles.strategiesGrid}>
                {recoveryStrategies.map((category, i) => (
                  <div key={i} className={styles.strategyCard}>
                    <h3>{category.category}</h3>
                    <ul>
                      {category.tactics.map((tactic, j) => (
                        <li key={j}>{tactic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* FITNESS HACKS */}
          <FadeIn delay={0.4}>
            <section className={styles.section}>
              <h2>💡 Performance Optimization Tips</h2>
              <p className={styles.sectionDesc}>Science-backed strategies that most people don&apos;t know about training and recovery.</p>
              <div className={styles.tipsGrid}>
                {fitnessHacks.map((tip, i) => (
                  <div key={i} className={styles.tipCard}>
                    <span className={styles.tipIcon}>⚡</span>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* SUPPLEMENTS */}
          <FadeIn delay={0.5}>
            <section className={styles.section}>
              <h2>💊 Performance Supplements</h2>
              <p className={styles.sectionDesc}>Evidence-based supplements for training performance and recovery.</p>
              <div className={styles.supplementsTable}>
                <div className={styles.tableHeader}>
                  <span>Supplement</span>
                  <span>Dose</span>
                  <span>Timing</span>
                  <span>Effect</span>
                </div>
                {fitnessSupplements.map((supp, i) => (
                  <div key={i} className={styles.tableRow}>
                    <span className={styles.suppName}>{supp.name}</span>
                    <span>{supp.dose}</span>
                    <span>{supp.timing}</span>
                    <span className={styles.suppNote}>{supp.note}</span>
                  </div>
                ))}
              </div>
              <div className={styles.disclaimer}>
                ⚠️ Supplements are not magic. Focus on training, nutrition, and sleep first. Consult healthcare provider.
              </div>
            </section>
          </FadeIn>

          {/* SCIENCE */}
          <FadeIn delay={0.6}>
            <section className={styles.section}>
              <h2>The Science: How Training Adaptations Work</h2>
              <div className={styles.scienceGrid}>
                <div className={styles.scienceCard}>
                  <h3>Muscle Protein Synthesis</h3>
                  <p>Resistance training triggers mTOR pathway, increasing protein synthesis for 24-48 hours. Progressive overload ensures continued adaptation.</p>
                </div>
                <div className={styles.scienceCard}>
                  <h3>Mitochondrial Biogenesis</h3>
                  <p>Zone 2 training increases mitochondrial density and efficiency. More mitochondria = better fat oxidation and endurance capacity.</p>
                </div>
                <div className={styles.scienceCard}>
                  <h3>BDNF & Neuroplasticity</h3>
                  <p>Exercise increases brain-derived neurotrophic factor, promoting new neural connections and improved cognitive function.</p>
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
