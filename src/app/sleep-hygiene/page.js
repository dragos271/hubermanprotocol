import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn, FadeInScale } from "../components/Motion";
import styles from "./page.module.css";

export const metadata = {
  title: "Sleep Hygiene – Huberman Protocol",
  description: "Master the science of restorative sleep with Dr. Huberman's evidence-based protocols for better sleep quality and recovery.",
};

const sleepProtocols = [
  {
    title: "Temperature Optimization",
    icon: "🌡️",
    timing: "1-2 hours before bed",
    description: "Cool your body to trigger natural sleep onset",
    actions: [
      "Drop bedroom temperature to 65-68°F (18-20°C)",
      "Take a hot bath or shower 1-2 hours before bed",
      "Use cooling mattress pad or breathable sheets",
      "Keep hands and feet warm while core stays cool"
    ],
    science: "Core body temperature naturally drops 2-3°F before sleep onset. Cooling the environment and warming extremities accelerates this process through vasodilation."
  },
  {
    title: "Light Environment",
    icon: "💡",
    timing: "2-3 hours before bed",
    description: "Optimize light exposure to support natural melatonin production",
    actions: [
      "Dim lights to 50% or less after sunset",
      "Use warm, red-tinted lights in evening",
      "Avoid blue light from screens 1-2 hours before bed",
      "Use blackout curtains or eye mask for complete darkness"
    ],
    science: "Blue light suppresses melatonin production for 2-3 hours. Even small amounts of light can disrupt sleep architecture and reduce sleep quality."
  },
  {
    title: "Sleep Timing Consistency",
    icon: "⏰",
    timing: "Daily",
    description: "Maintain consistent sleep-wake times to strengthen circadian rhythms",
    actions: [
      "Go to bed and wake up at the same time daily (±30 minutes)",
      "Avoid sleeping in on weekends",
      "If you must nap, limit to 20 minutes before 3 PM",
      "Use light exposure to shift timing if needed"
    ],
    science: "The suprachiasmatic nucleus relies on consistent timing cues. Irregular sleep schedules weaken circadian amplitude and reduce sleep quality."
  },
  {
    title: "Pre-Sleep Wind-Down",
    icon: "🧘",
    timing: "60-90 minutes before bed",
    description: "Create a buffer between daily stress and sleep",
    actions: [
      "Practice NSDR or meditation for 10-20 minutes",
      "Write down 3 things you&apos;re grateful for",
      "Do gentle stretching or yoga",
      "Read fiction (not work-related material)"
    ],
    science: "The parasympathetic nervous system needs time to activate. Wind-down routines reduce cortisol and activate rest-and-digest responses."
  },
  {
    title: "Sleep Environment Optimization",
    icon: "🛏️",
    timing: "Setup once",
    description: "Create an environment that supports deep, restorative sleep",
    actions: [
      "Invest in a comfortable, supportive mattress",
      "Use white noise or earplugs to mask disruptive sounds",
      "Remove electronic devices from bedroom",
      "Keep bedroom for sleep and intimacy only"
    ],
    science: "Environmental factors account for 15-20% of sleep quality variance. The brain forms strong associations between environment and sleep states."
  },
  {
    title: "Nutrition Timing",
    icon: "🍽️",
    timing: "3+ hours before bed",
    description: "Time food intake to support natural sleep onset",
    actions: [
      "Finish last meal 3-4 hours before bedtime",
      "Avoid caffeine after 2 PM (or 8 hours before bed)",
      "Limit alcohol consumption, especially near bedtime",
      "If hungry, eat a small protein snack 1 hour before bed"
    ],
    science: "Digestion raises core body temperature and activates the sympathetic nervous system. Caffeine has a 6-8 hour half-life and blocks adenosine receptors."
  }
];

const sleepSupplements = [
  {
    name: "Magnesium Glycinate",
    dosage: "200-400mg",
    timing: "30-60 minutes before bed",
    mechanism: "GABA receptor activation, muscle relaxation",
    evidence: "Multiple studies show improved sleep quality and reduced time to fall asleep"
  },
  {
    name: "Melatonin",
    dosage: "0.5-3mg",
    timing: "30 minutes before desired sleep time",
    mechanism: "Direct circadian rhythm entrainment",
    evidence: "Most effective for shift work and jet lag; minimal benefit for healthy adults"
  },
  {
    name: "Theanine",
    dosage: "100-200mg",
    timing: "30-60 minutes before bed",
    mechanism: "Alpha brain wave promotion, reduced cortisol",
    evidence: "Improves sleep quality without sedation; enhances REM sleep"
  },
  {
    name: "Glycine",
    dosage: "1-3g",
    timing: "30 minutes before bed",
    mechanism: "Core body temperature reduction, NMDA receptor modulation",
    evidence: "Clinical trials show faster sleep onset and improved subjective sleep quality"
  }
];

export default function SleepHygienePage() {
  return (
    <>
      <Header />
      
      <main className="container" style={{ marginTop: '70px' }}>
        {/* HERO */}
        <section className={styles.hero}>
          <FadeIn>
            <div className={styles.heroContent}>
              <div className={styles.heroIcon}>🛏️</div>
              <h1 className={styles.title}>
                Sleep Hygiene
                <span className={styles.titleGradient}> Mastery</span>
              </h1>
              <p className={styles.subtitle}>
                Master the science of restorative sleep with evidence-based protocols that optimize sleep quality, 
                reduce time to fall asleep, and enhance recovery.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>25-50%</div>
                <div className={styles.statLabel}>Faster Sleep Onset</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>20-30%</div>
                <div className={styles.statLabel}>Improved Sleep Quality</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>7-14</div>
                <div className={styles.statLabel}>Days to See Results</div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CORE SCIENCE */}
        <section className={styles.scienceSection}>
          <FadeIn>
            <h2>The Science of Sleep</h2>
            <p className={styles.scienceText}>
              Sleep is controlled by two primary systems: the circadian clock (when you feel sleepy) and 
              sleep pressure (how sleepy you feel). Your circadian rhythm is driven by light exposure, 
              temperature, and timing cues, while sleep pressure builds through adenosine accumulation 
              during wakefulness. Optimizing both systems through evidence-based protocols can dramatically 
              improve sleep quality and overall health.
            </p>
          </FadeIn>
        </section>

        {/* SLEEP PROTOCOLS */}
        <section className={styles.protocolsSection}>
          <FadeIn>
            <h2>Evidence-Based Sleep Protocols</h2>
            <p className={styles.sectionSubtitle}>
              Six foundational protocols that address the key mechanisms of healthy sleep
            </p>
          </FadeIn>

          <div className={styles.protocolsGrid}>
            {sleepProtocols.map((protocol, index) => (
              <FadeInScale key={protocol.title} delay={index * 0.1}>
                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>{protocol.icon}</div>
                    <div className={styles.protocolTiming}>{protocol.timing}</div>
                  </div>
                  
                  <h3>{protocol.title}</h3>
                  <p className={styles.protocolDescription}>{protocol.description}</p>
                  
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      {protocol.actions.map((action, idx) => (
                        <li key={idx}>{action}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.protocolScience}>
                    <h4>The Science:</h4>
                    <p>{protocol.science}</p>
                  </div>
                </div>
              </FadeInScale>
            ))}
          </div>
        </section>

        {/* SUPPLEMENTS */}
        <section className={styles.supplementsSection}>
          <FadeIn>
            <h2>Sleep-Supporting Supplements</h2>
            <p className={styles.sectionSubtitle}>
              Evidence-based supplements that can enhance sleep quality when protocols alone aren&apos;t sufficient
            </p>
          </FadeIn>

          <div className={styles.supplementsGrid}>
            {sleepSupplements.map((supplement, index) => (
              <FadeInScale key={supplement.name} delay={index * 0.1}>
                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>{supplement.name}</h3>
                    <div className={styles.supplementDosage}>{supplement.dosage}</div>
                  </div>
                  
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> {supplement.timing}
                  </div>
                  
                  <div className={styles.supplementMechanism}>
                    <strong>How it works:</strong> {supplement.mechanism}
                  </div>
                  
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> {supplement.evidence}
                  </div>
                </div>
              </FadeInScale>
            ))}
          </div>
        </section>

        {/* IMPLEMENTATION GUIDE */}
        <section className={styles.implementationSection}>
          <FadeIn>
            <h2>Implementation Strategy</h2>
          </FadeIn>
          
          <div className={styles.implementationSteps}>
            <FadeInScale delay={0.1}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Start with Timing</h3>
                  <p>Establish consistent sleep and wake times first. This is the foundation that makes everything else work better.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.2}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Optimize Environment</h3>
                  <p>Set up your sleep environment for success: cool, dark, quiet, and comfortable.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.3}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Add Behavioral Protocols</h3>
                  <p>Layer in temperature, light, and wind-down protocols gradually over 2-3 weeks.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.4}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Consider Supplements</h3>
                  <p>Only add supplements after establishing strong behavioral foundations, starting with one at a time.</p>
                </div>
              </div>
            </FadeInScale>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
