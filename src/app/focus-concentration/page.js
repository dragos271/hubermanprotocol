import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn, FadeInScale } from "../components/Motion";
import styles from "./page.module.css";

export const metadata = {
  title: "Focus and Concentration – Huberman Protocol",
  description: "Enhance cognitive performance with neuroscience-based protocols for sustained attention and deep focus.",
};

const focusProtocols = [
  {
    title: "90-Minute Focus Blocks",
    icon: "⏱️",
    timing: "Throughout workday",
    description: "Align work sessions with natural ultradian rhythms for peak cognitive performance",
    actions: [
      "Work in focused 90-minute blocks with 20-minute breaks",
      "Start each block with 1-2 minutes of breathing or meditation",
      "Eliminate all distractions during focus blocks",
      "Schedule most demanding tasks during your peak alertness window"
    ],
    science: "The brain operates on 90-minute ultradian cycles of high and low alertness. Working with these natural rhythms optimizes cognitive performance and prevents mental fatigue."
  },
  {
    title: "Physiological Sigh",
    icon: "🫁",
    timing: "When feeling stressed/unfocused",
    description: "Reset your nervous system in real-time to restore calm focus",
    actions: [
      "Take a deep inhale through your nose",
      "Take a second, smaller inhale on top of the first",
      "Long, slow exhale through your mouth",
      "Repeat 1-3 times as needed"
    ],
    science: "Double inhales followed by long exhales activate the parasympathetic nervous system within 1-3 breaths, rapidly reducing stress and improving focus."
  },
  {
    title: "Visual Focus Training",
    icon: "👁️",
    timing: "5-10 minutes daily",
    description: "Strengthen cognitive focus through deliberate visual attention training",
    actions: [
      "Focus on a small visual target 3-6 feet away for 1-3 minutes",
      "Maintain steady gaze without letting eyes wander",
      "Practice vergence: focus on finger close to face, then distant object",
      "Do this before important cognitive work"
    ],
    science: "Visual attention and cognitive attention share neural circuits. Training visual focus strengthens the prefrontal cortex networks responsible for sustained attention."
  },
  {
    title: "Cold Exposure for Alertness",
    icon: "🚿",
    timing: "Morning or before focused work",
    description: "Use controlled stress to enhance sustained attention and mental clarity",
    actions: [
      "Take 1-3 minute cold shower (50-60°F or as cold as tolerable)",
      "Focus on controlling your breathing during exposure",
      "Alternatively, cold face plunge for 30-60 seconds",
      "Use 2-3 times per week maximum"
    ],
    science: "Cold exposure increases dopamine levels by 250% for several hours, enhancing focus and motivation. It also strengthens prefrontal cortex control over stress responses."
  },
  {
    title: "Movement for Cognitive Enhancement",
    icon: "🚶",
    timing: "Between focus blocks",
    description: "Use specific movement patterns to enhance neuroplasticity and attention",
    actions: [
      "Take 5-10 minute walks between focus sessions",
      "Do cross-lateral movements (opposite arm/leg coordination)",
      "Practice balance challenges (single-leg stands, yoga poses)",
      "Avoid phones/screens during movement breaks"
    ],
    science: "Physical movement increases BDNF (brain-derived neurotrophic factor) and promotes neuroplasticity. Cross-lateral movements enhance prefrontal cortex function."
  },
  {
    title: "Nutrition Timing for Focus",
    icon: "🧠",
    timing: "Strategic throughout day",
    description: "Time food intake to optimize cognitive performance and sustained attention",
    actions: [
      "Fast or eat lightly during peak focus hours",
      "Consume tyrosine-rich foods (almonds, bananas) for dopamine support",
      "Stay hydrated but avoid excessive water during focus blocks",
      "Use strategic caffeine timing (90-120 minutes after waking)"
    ],
    science: "Digestion competes with cognitive resources. Fasting enhances focus through increased alertness. Tyrosine is a precursor to dopamine, essential for sustained attention."
  }
];

const focusSupplements = [
  {
    name: "Alpha-GPC",
    dosage: "300-600mg",
    timing: "30 minutes before focused work",
    mechanism: "Increases acetylcholine, enhances attention and learning",
    evidence: "Clinical studies show improved cognitive performance and attention span"
  },
  {
    name: "Rhodiola Rosea",
    dosage: "100-200mg",
    timing: "Morning on empty stomach",
    mechanism: "Adaptogen that reduces mental fatigue and enhances focus",
    evidence: "Multiple studies show reduced mental fatigue and improved cognitive performance under stress"
  },
  {
    name: "L-Theanine + Caffeine",
    dosage: "200mg theanine + 100mg caffeine",
    timing: "30-60 minutes before cognitive work",
    mechanism: "Combines alertness with calm focus, reduces caffeine jitters",
    evidence: "Synergistic effects on attention and cognitive performance without anxiety"
  },
  {
    name: "Lion&apos;s Mane Mushroom",
    dosage: "500-1000mg",
    timing: "Daily with food",
    mechanism: "Promotes nerve growth factor, supports neuroplasticity",
    evidence: "Studies show improved cognitive function and memory over time"
  }
];

const distractionTypes = [
  {
    title: "Internal Distractions",
    description: "Mind wandering, anxiety, physical discomfort",
    solutions: [
      "Use physiological sighs to reset nervous system",
      "Practice noting technique: acknowledge thoughts and return to task",
      "Address physical needs before starting focus blocks",
      "Set clear intentions at start of each session"
    ]
  },
  {
    title: "External Distractions",
    description: "Notifications, noise, visual disruptions",
    solutions: [
      "Turn off all notifications during focus blocks",
      "Use noise-canceling headphones or white noise",
      "Clear visual workspace of distracting items",
      "Inform others of your focus schedule"
    ]
  },
  {
    title: "Digital Distractions",
    description: "Social media, emails, random browsing",
    solutions: [
      "Use website/app blockers during focus time",
      "Keep phone in another room or airplane mode",
      "Use single-purpose devices for focused work",
      "Schedule specific times for email/social media"
    ]
  }
];

export default function FocusConcentrationPage() {
  return (
    <>
      <Header />
      
      <main className="container" style={{ marginTop: '70px' }}>
        {/* HERO */}
        <section className={styles.hero}>
          <FadeIn>
            <div className={styles.heroContent}>
              <div className={styles.heroIcon}>🎯</div>
              <h1 className={styles.title}>
                Focus & Concentration
                <span className={styles.titleGradient}> Enhancement</span>
              </h1>
              <p className={styles.subtitle}>
                Master the neuroscience of sustained attention with evidence-based protocols that enhance 
                cognitive performance, reduce distractions, and optimize mental clarity.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>40-60%</div>
                <div className={styles.statLabel}>Improved Focus Duration</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>25-35%</div>
                <div className={styles.statLabel}>Enhanced Productivity</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>1-2</div>
                <div className={styles.statLabel}>Weeks to Notice</div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CORE SCIENCE */}
        <section className={styles.scienceSection}>
          <FadeIn>
            <h2>The Neuroscience of Attention</h2>
            <p className={styles.scienceText}>
              Focus is controlled by networks in the prefrontal cortex that must actively suppress 
              distractions while maintaining goal-directed attention. These networks operate optimally 
              during specific periods aligned with your circadian rhythm and require strategic rest 
              to prevent depletion. By understanding and working with these biological systems, 
              you can dramatically enhance sustained attention and cognitive performance.
            </p>
          </FadeIn>
        </section>

        {/* FOCUS PROTOCOLS */}
        <section className={styles.protocolsSection}>
          <FadeIn>
            <h2>Evidence-Based Focus Protocols</h2>
            <p className={styles.sectionSubtitle}>
              Six core protocols that optimize attention networks and cognitive performance
            </p>
          </FadeIn>

          <div className={styles.protocolsGrid}>
            {focusProtocols.map((protocol, index) => (
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
            <h2>Cognitive Enhancement Supplements</h2>
            <p className={styles.sectionSubtitle}>
              Evidence-based supplements that can enhance focus when used strategically
            </p>
          </FadeIn>

          <div className={styles.supplementsGrid}>
            {focusSupplements.map((supplement, index) => (
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

        {/* DISTRACTION MANAGEMENT */}
        <section className={styles.distractionsSection}>
          <FadeIn>
            <h2>Distraction Management</h2>
            <p className={styles.sectionSubtitle}>
              Systematic approaches to identify and eliminate common focus disruptors
            </p>
          </FadeIn>

          <div className={styles.distractionsGrid}>
            {distractionTypes.map((type, index) => (
              <FadeInScale key={type.title} delay={index * 0.1}>
                <div className={styles.distractionCard}>
                  <h3>{type.title}</h3>
                  <p className={styles.distractionDescription}>{type.description}</p>
                  
                  <div className={styles.distractionSolutions}>
                    <h4>Solutions:</h4>
                    <ul>
                      {type.solutions.map((solution, idx) => (
                        <li key={idx}>{solution}</li>
                      ))}
                    </ul>
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
                  <h3>Identify Your Peak Hours</h3>
                  <p>Track your natural alertness patterns for one week. Most people have peak focus 1-3 hours and 9-11 hours after waking.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.2}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Start with 90-Minute Blocks</h3>
                  <p>Begin with one focused 90-minute session during your peak hours. Gradually add more blocks as your focus endurance improves.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.3}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Eliminate Distractions</h3>
                  <p>Systematically remove internal and external distractions. Start with the easiest wins like turning off notifications.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.4}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Add Training Protocols</h3>
                  <p>Layer in visual focus training, breathing techniques, and strategic movement to strengthen attention networks.</p>
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
