import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn, FadeInScale } from "../components/Motion";
import styles from "./page.module.css";

export const metadata = {
  title: "Light Exposure and Circadian Rhythm – Huberman Protocol",
  description: "Master your biological clock with science-based light protocols for optimal sleep, energy, and health.",
};

const lightProtocols = [
  {
    title: "Morning Light Exposure",
    icon: "🌅",
    timing: "Within 30-60 minutes of waking",
    description: "Set your circadian clock with bright light to optimize alertness and sleep timing",
    actions: [
      "Get 10-30 minutes of bright light exposure (10,000+ lux)",
      "Face east toward the rising sun if possible",
      "Avoid sunglasses and windows for maximum effect",
      "On cloudy days, increase exposure time to 30-60 minutes"
    ],
    science: "Morning light exposure triggers cortisol release and sets the circadian clock in the suprachiasmatic nucleus, establishing when you&apos;ll feel alert and sleepy throughout the day."
  },
  {
    title: "Afternoon Light Top-Up",
    icon: "☀️",
    timing: "Late afternoon (4-6 PM)",
    description: "Reinforce circadian rhythms and improve sleep quality with afternoon light",
    actions: [
      "Get 10-20 minutes of bright light exposure",
      "Focus on low-angle afternoon sun when possible",
      "Can be combined with outdoor exercise or walking",
      "Helps offset potential circadian drift"
    ],
    science: "Afternoon light exposure strengthens circadian amplitude and can advance sleep timing. It&apos;s particularly important for shift workers and those with delayed sleep phase."
  },
  {
    title: "Evening Light Management",
    icon: "🌅",
    timing: "2-3 hours before bed",
    description: "Minimize light exposure to support natural melatonin production",
    actions: [
      "Dim lights to 50% or less of daytime brightness",
      "Use warm, red-tinted lights in evening",
      "Avoid bright overhead lights",
      "Set devices to night mode or use blue light blocking"
    ],
    science: "Blue light suppresses melatonin production for 2-3 hours. Even small amounts of light can disrupt sleep quality and circadian timing."
  },
  {
    title: "Light Therapy for Shift Work",
    icon: "💡",
    timing: "During desired alert periods",
    description: "Use artificial light to shift circadian rhythms for non-traditional schedules",
    actions: [
      "Use 10,000 lux light box during desired alert periods",
      "Wear blue-light blocking glasses before desired sleep time",
      "Create consistent light/dark cycles even with irregular work",
      "Gradually shift light exposure timing over several days"
    ],
    science: "Controlled light exposure can shift circadian rhythms by up to 1-2 hours per day. This is the most effective non-pharmaceutical circadian intervention."
  },
  {
    title: "Seasonal Light Adaptation",
    icon: "🍂",
    timing: "Daily during darker months",
    description: "Combat seasonal affective patterns with strategic light exposure",
    actions: [
      "Increase morning light exposure duration in winter",
      "Use 10,000 lux light therapy box for 20-30 minutes",
      "Position light source 16-24 inches from face",
      "Combine with outdoor time even on cloudy days"
    ],
    science: "Seasonal changes in light exposure can disrupt circadian rhythms and mood. Light therapy can be as effective as antidepressants for seasonal affective disorder."
  },
  {
    title: "Travel and Jet Lag Protocols",
    icon: "✈️",
    timing: "Before, during, and after travel",
    description: "Minimize jet lag and speed circadian adaptation with strategic light timing",
    actions: [
      "Pre-shift circadian rhythm 2-3 days before travel",
      "Seek light during destination morning hours",
      "Avoid light during destination nighttime",
      "Use melatonin and light therapy in combination"
    ],
    science: "Light is the most powerful circadian zeitgeber. Strategic light exposure can reduce jet lag recovery time from 1 day per time zone to 1-2 days total."
  }
];

const lightSources = [
  {
    source: "Natural Sunlight",
    intensity: "10,000-100,000+ lux",
    benefits: "Full spectrum, free, vitamin D production",
    considerations: "Weather dependent, UV exposure"
  },
  {
    source: "Light Therapy Box",
    intensity: "10,000 lux",
    benefits: "Consistent, controllable, weather independent",
    considerations: "Cost, requires daily use"
  },
  {
    source: "Dawn Simulation Alarm",
    intensity: "100-300 lux gradual",
    benefits: "Gentle waking, convenient, consistent",
    considerations: "Lower intensity, not sufficient alone"
  },
  {
    source: "Red Light Therapy",
    intensity: "Variable",
    benefits: "No circadian disruption, may aid recovery",
    considerations: "Limited circadian benefits"
  }
];

const circadianDisruptors = [
  {
    title: "Blue Light at Night",
    impact: "Suppresses melatonin for 2-3 hours",
    solutions: [
      "Use blue light blocking glasses 2-3 hours before bed",
      "Install f.lux or similar software on devices",
      "Switch to warm, dim lighting in evening",
      "Use red light for nighttime activities"
    ]
  },
  {
    title: "Irregular Sleep Schedule",
    impact: "Weakens circadian amplitude and timing",
    solutions: [
      "Maintain consistent sleep/wake times ±30 minutes",
      "Use light exposure to reinforce desired timing",
      "Avoid social jet lag on weekends",
      "Gradually shift schedule if changes needed"
    ]
  },
  {
    title: "Insufficient Morning Light",
    impact: "Delayed circadian phase, poor sleep onset",
    solutions: [
      "Prioritize morning light exposure within 1 hour of waking",
      "Use light therapy box if natural light unavailable",
      "Exercise outdoors in morning when possible",
      "Avoid sunglasses during morning light exposure"
    ]
  }
];

export default function LightCircadianPage() {
  return (
    <>
      <Header />
      
      <main className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <FadeIn>
            <div className={styles.heroContent}>
              <div className={styles.heroIcon}>☀️</div>
              <h1 className={styles.title}>
                Light & Circadian
                <span className={styles.titleGradient}> Optimization</span>
              </h1>
              <p className={styles.subtitle}>
                Master your biological clock with science-based light protocols that optimize sleep timing, 
                energy levels, and overall health through circadian rhythm regulation.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10,000+</div>
                <div className={styles.statLabel}>Lux Morning Target</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>1-2</div>
                <div className={styles.statLabel}>Hours Daily Shift Possible</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>3-7</div>
                <div className={styles.statLabel}>Days to Reset Rhythm</div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CORE SCIENCE */}
        <section className={styles.scienceSection}>
          <FadeIn>
            <h2>The Science of Circadian Rhythms</h2>
            <p className={styles.scienceText}>
              Your circadian clock, located in the suprachiasmatic nucleus, controls when you feel alert 
              and sleepy through hormone release and body temperature regulation. Light is the primary 
              &quot;zeitgeber&quot; (time-giver) that sets this internal clock. By strategically timing light 
              exposure, you can optimize sleep quality, energy levels, mood, and metabolic health. 
              The timing, intensity, and color of light exposure determines its circadian effects.
            </p>
          </FadeIn>
        </section>

        {/* LIGHT PROTOCOLS */}
        <section className={styles.protocolsSection}>
          <FadeIn>
            <h2>Light Exposure Protocols</h2>
            <p className={styles.sectionSubtitle}>
              Six evidence-based protocols for optimizing circadian rhythm through strategic light exposure
            </p>
          </FadeIn>

          <div className={styles.protocolsGrid}>
            {lightProtocols.map((protocol, index) => (
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

        {/* LIGHT SOURCES */}
        <section className={styles.supplementsSection}>
          <FadeIn>
            <h2>Light Sources & Tools</h2>
            <p className={styles.sectionSubtitle}>
              Different light sources for various circadian optimization needs
            </p>
          </FadeIn>

          <div className={styles.supplementsGrid}>
            {lightSources.map((source, index) => (
              <FadeInScale key={source.source} delay={index * 0.1}>
                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>{source.source}</h3>
                    <div className={styles.supplementDosage}>{source.intensity}</div>
                  </div>
                  
                  <div className={styles.supplementTiming}>
                    <strong>Benefits:</strong> {source.benefits}
                  </div>
                  
                  <div className={styles.supplementEvidence}>
                    <strong>Considerations:</strong> {source.considerations}
                  </div>
                </div>
              </FadeInScale>
            ))}
          </div>
        </section>

        {/* CIRCADIAN DISRUPTORS */}
        <section className={styles.distractionsSection}>
          <FadeIn>
            <h2>Common Circadian Disruptors</h2>
            <p className={styles.sectionSubtitle}>
              Identify and eliminate factors that interfere with optimal circadian function
            </p>
          </FadeIn>

          <div className={styles.distractionsGrid}>
            {circadianDisruptors.map((disruptor, index) => (
              <FadeInScale key={disruptor.title} delay={index * 0.1}>
                <div className={styles.distractionCard}>
                  <h3>{disruptor.title}</h3>
                  <p className={styles.distractionDescription}>{disruptor.impact}</p>
                  
                  <div className={styles.distractionSolutions}>
                    <h4>Solutions:</h4>
                    <ul>
                      {disruptor.solutions.map((solution, idx) => (
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
                  <h3>Start with Morning Light</h3>
                  <p>Begin each day with 10-30 minutes of bright light exposure within 60 minutes of waking. This is the foundation of circadian health.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.2}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Manage Evening Light</h3>
                  <p>Dim lights 2-3 hours before bed and avoid blue light. This allows natural melatonin production and better sleep quality.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.3}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Add Afternoon Reinforcement</h3>
                  <p>Include afternoon light exposure to strengthen circadian rhythms and maintain consistent sleep timing.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.4}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Maintain Consistency</h3>
                  <p>Keep light exposure timing consistent daily. Your circadian system thrives on predictable patterns.</p>
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
