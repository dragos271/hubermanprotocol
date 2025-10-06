import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn, FadeInScale } from "../components/Motion";
import styles from "./page.module.css";

export const metadata = {
  title: "NSDR, Meditation and Breathwork – Huberman Protocol",
  description: "Master stress resilience and recovery with Non-Sleep Deep Rest, meditation, and breathwork protocols based on neuroscience.",
};

const nsdrProtocols = [
  {
    title: "Basic NSDR Protocol",
    icon: "🧘",
    timing: "10-30 minutes daily",
    description: "Non-Sleep Deep Rest practice for stress reduction and nervous system reset",
    actions: [
      "Lie down in comfortable position, eyes closed",
      "Focus on long, slow exhales (longer than inhales)",
      "Progressive body scan from toes to head",
      "Don&apos;t worry if you fall asleep - it&apos;s still beneficial"
    ],
    science: "NSDR activates the parasympathetic nervous system, reducing cortisol and increasing GABA. Studies show it can restore cognitive function as effectively as sleep."
  },
  {
    title: "Physiological Sigh",
    icon: "🫁",
    timing: "As needed for stress",
    description: "Rapid stress reset technique using controlled breathing",
    actions: [
      "Double inhale through nose (big breath + small top-off breath)",
      "Long, slow exhale through mouth",
      "Repeat 1-3 times as needed",
      "Can be done anywhere, anytime"
    ],
    science: "Double inhales maximally inflate lung sacs, activating the vagus nerve. This rapidly shifts from sympathetic to parasympathetic nervous system dominance."
  },
  {
    title: "Box Breathing",
    icon: "📦",
    timing: "5-10 minutes",
    description: "Structured breathing pattern for focus and calm",
    actions: [
      "Inhale for 4 counts",
      "Hold for 4 counts",
      "Exhale for 4 counts", 
      "Hold empty for 4 counts, repeat"
    ],
    science: "Equal breathing patterns balance the autonomic nervous system and improve heart rate variability, enhancing both calm and focused states."
  },
  {
    title: "Cyclic Hyperventilation",
    icon: "⚡",
    timing: "1-3 rounds, use carefully",
    description: "Controlled stress technique for resilience building",
    actions: [
      "25-30 deep, rapid breaths through nose or mouth",
      "Exhale and hold breath as long as comfortable",
      "Take recovery breath and hold 15 seconds",
      "Rest 1-2 minutes between rounds"
    ],
    science: "Deliberate hyperventilation triggers controlled stress response, building stress resilience. Increases adrenaline and can enhance cold tolerance."
  },
  {
    title: "4-7-8 Breathing",
    icon: "😴",
    timing: "Before sleep or for relaxation",
    description: "Breathing technique specifically for calming and sleep preparation",
    actions: [
      "Inhale through nose for 4 counts",
      "Hold breath for 7 counts",
      "Exhale through mouth for 8 counts",
      "Repeat 3-4 cycles maximum"
    ],
    science: "Extended exhale activates parasympathetic nervous system. The pattern forces focus away from anxious thoughts while promoting relaxation."
  },
  {
    title: "Body Scan Meditation",
    icon: "🔍",
    timing: "10-20 minutes",
    description: "Mindfulness practice for present-moment awareness and relaxation",
    actions: [
      "Lie down comfortably, eyes closed",
      "Start with feet, notice sensations without judgment",
      "Slowly move attention up through entire body",
      "End with few minutes of whole-body awareness"
    ],
    science: "Body scanning activates the insula, improving interoceptive awareness. Regular practice reduces default mode network activity, decreasing anxiety and rumination."
  }
];

const meditationTypes = [
  {
    type: "Focused Attention",
    duration: "5-20 minutes",
    benefits: "Improved concentration, reduced mind-wandering",
    technique: "Focus on single object (breath, mantra, sound)"
  },
  {
    type: "Open Monitoring",
    duration: "10-30 minutes", 
    benefits: "Enhanced metacognition, emotional regulation",
    technique: "Observe thoughts and feelings without attachment"
  },
  {
    type: "Loving-Kindness",
    duration: "10-20 minutes",
    benefits: "Increased compassion, social connection",
    technique: "Direct well-wishes toward self and others"
  },
  {
    type: "Movement Meditation",
    duration: "15-45 minutes",
    benefits: "Embodied awareness, stress reduction",
    technique: "Walking, yoga, or tai chi with mindful attention"
  }
];

const stressProtocols = [
  {
    title: "Acute Stress Reset",
    when: "During high stress moments",
    steps: [
      "Recognize stress response in body",
      "Use physiological sigh (2-3 times)",
      "Pause and take inventory of the situation",
      "Choose conscious response rather than reactive"
    ]
  },
  {
    title: "Daily Stress Inoculation", 
    when: "Daily practice",
    steps: [
      "10-20 minutes NSDR or meditation",
      "Cold exposure or deliberate discomfort",
      "Practice gratitude and perspective",
      "Regular exercise and movement"
    ]
  },
  {
    title: "Evening Wind-Down",
    when: "1-2 hours before bed",
    steps: [
      "Dim lights and reduce stimulation",
      "Practice 4-7-8 breathing or body scan",
      "Journaling or gratitude practice",
      "Avoid work and stressful content"
    ]
  }
];

export default function NSMeditationPage() {
  return (
    <>
      <Header />
      
      <main className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <FadeIn>
            <div className={styles.heroContent}>
              <div className={styles.heroIcon}>🧘</div>
              <h1 className={styles.title}>
                NSDR & Meditation
                <span className={styles.titleGradient}> Protocols</span>
              </h1>
              <p className={styles.subtitle}>
                Master stress resilience and recovery with Non-Sleep Deep Rest, meditation, and breathwork 
                techniques backed by neuroscience research for optimal mental performance.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>1-3</div>
                <div className={styles.statLabel}>Breaths for Stress Reset</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>20%</div>
                <div className={styles.statLabel}>Cortisol Reduction</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10-30</div>
                <div className={styles.statLabel}>Minutes Daily Practice</div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CORE SCIENCE */}
        <section className={styles.scienceSection}>
          <FadeIn>
            <h2>The Science of Stress & Recovery</h2>
            <p className={styles.scienceText}>
              Your autonomic nervous system has two branches: sympathetic (stress/alertness) and 
              parasympathetic (rest/recovery). Modern life often keeps us in chronic sympathetic 
              activation. NSDR, meditation, and breathwork provide tools to consciously activate 
              the parasympathetic system, reducing cortisol, improving recovery, and building 
              stress resilience through neuroplasticity.
            </p>
          </FadeIn>
        </section>

        {/* NSDR PROTOCOLS */}
        <section className={styles.protocolsSection}>
          <FadeIn>
            <h2>NSDR & Breathwork Protocols</h2>
            <p className={styles.sectionSubtitle}>
              Six evidence-based techniques for stress management and nervous system regulation
            </p>
          </FadeIn>

          <div className={styles.protocolsGrid}>
            {nsdrProtocols.map((protocol, index) => (
              <FadeInScale key={protocol.title} delay={index * 0.1}>
                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>{protocol.icon}</div>
                    <div className={styles.protocolTiming}>{protocol.timing}</div>
                  </div>
                  
                  <h3>{protocol.title}</h3>
                  <p className={styles.protocolDescription}>{protocol.description}</p>
                  
                  <div className={styles.protocolActions}>
                    <h4>Technique:</h4>
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

        {/* MEDITATION TYPES */}
        <section className={styles.supplementsSection}>
          <FadeIn>
            <h2>Meditation Approaches</h2>
            <p className={styles.sectionSubtitle}>
              Different meditation styles for various benefits and preferences
            </p>
          </FadeIn>

          <div className={styles.supplementsGrid}>
            {meditationTypes.map((type, index) => (
              <FadeInScale key={type.type} delay={index * 0.1}>
                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>{type.type}</h3>
                    <div className={styles.supplementDosage}>{type.duration}</div>
                  </div>
                  
                  <div className={styles.supplementTiming}>
                    <strong>Benefits:</strong> {type.benefits}
                  </div>
                  
                  <div className={styles.supplementEvidence}>
                    <strong>Technique:</strong> {type.technique}
                  </div>
                </div>
              </FadeInScale>
            ))}
          </div>
        </section>

        {/* STRESS MANAGEMENT */}
        <section className={styles.distractionsSection}>
          <FadeIn>
            <h2>Stress Management Protocols</h2>
            <p className={styles.sectionSubtitle}>
              Systematic approaches for different stress scenarios and time frames
            </p>
          </FadeIn>

          <div className={styles.distractionsGrid}>
            {stressProtocols.map((protocol, index) => (
              <FadeInScale key={protocol.title} delay={index * 0.1}>
                <div className={styles.distractionCard}>
                  <h3>{protocol.title}</h3>
                  <p className={styles.distractionDescription}>{protocol.when}</p>
                  
                  <div className={styles.distractionSolutions}>
                    <h4>Protocol Steps:</h4>
                    <ul>
                      {protocol.steps.map((step, idx) => (
                        <li key={idx}>{step}</li>
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
            <h2>Building Your Practice</h2>
          </FadeIn>
          
          <div className={styles.implementationSteps}>
            <FadeInScale delay={0.1}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Start with Physiological Sighs</h3>
                  <p>Master this technique first - it&apos;s the fastest way to reset your nervous system and can be used anywhere, anytime.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.2}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Add Daily NSDR</h3>
                  <p>Commit to 10-20 minutes of NSDR daily. Start with guided sessions, then develop your own practice.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.3}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Explore Meditation Styles</h3>
                  <p>Try different meditation approaches to find what resonates. Consistency matters more than duration.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.4}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Build Stress Resilience</h3>
                  <p>Use controlled stressors (like cyclic hyperventilation) to build your capacity to remain calm under pressure.</p>
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
