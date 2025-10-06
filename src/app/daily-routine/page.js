import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn, FadeInScale } from "../components/Motion";
import styles from "./page.module.css";

export const metadata = {
  title: "Daily Routine Optimization – Huberman Protocol",
  description: "Build an evidence-based daily routine that optimizes circadian rhythms, dopamine function, and performance using precise timing of light, movement, and recovery protocols.",
};

const dailyProtocols = [
  {
    title: "Morning Light Exposure",
    icon: "☀️",
    timing: "Within 30-60 minutes of waking",
    description: "Set your circadian clock and trigger cortisol awakening response",
    actions: [
      "Get 10-30 minutes of bright light exposure outside",
      "Face east (toward sunrise) if possible",
      "Avoid sunglasses during this window",
      "If cloudy, extend exposure time to 60-90 minutes",
      "Use 10,000 lux light therapy lamp if necessary"
    ],
    science: "Morning light exposure advances your circadian phase, suppresses melatonin, and triggers the cortisol awakening response. This sets your internal clock and improves sleep quality 14-16 hours later."
  },
  {
    title: "Delayed Caffeine Consumption",
    icon: "☕",
    timing: "90-120 minutes after waking",
    description: "Optimize caffeine timing to prevent afternoon crashes",
    actions: [
      "Wait 90-120 minutes after waking before first caffeine",
      "Consume caffeine when cortisol naturally dips",
      "Cut off caffeine 8-10 hours before planned bedtime",
      "Consider L-theanine (100-200mg) with caffeine to reduce jitters"
    ],
    science: "Adenosine builds during sleep and is naturally high upon waking. Immediate caffeine blocks this clearance, leading to crashes. Delaying caffeine allows natural cortisol to wake you up properly."
  },
  {
    title: "Temperature Minimum Tracking",
    icon: "🌡️",
    timing: "2-4 hours before your usual wake time",
    description: "Use your body's natural temperature rhythm for optimal timing",
    actions: [
      "Track your temperature minimum (usually 2-4 AM)",
      "Schedule light exposure 6-8 hours after this minimum",
      "Use this reference point for jet lag recovery",
      "Avoid bright light 6 hours before temperature minimum"
    ],
    science: "Your circadian clock is anchored by core body temperature rhythms. The temperature minimum serves as a reliable reference point for timing light exposure and other interventions."
  },
  {
    title: "Midday Movement & Sunlight",
    icon: "🚶",
    timing: "10 AM - 2 PM",
    description: "Reinforce circadian rhythms and maintain metabolic health",
    actions: [
      "Take a 10-15 minute walk outside during peak sun hours",
      "Get overhead sunlight exposure (activates melanopsin)",
      "Combine with movement to boost metabolism",
      "Use this for vitamin D synthesis if skin type appropriate"
    ],
    science: "Midday light exposure reinforces circadian rhythms and provides the photons necessary for robust circadian amplitude. Movement amplifies these benefits through multiple pathways."
  },
  {
    title: "Evening Light Management",
    icon: "🕯️",
    timing: "2-3 hours before bed",
    description: "Prepare your nervous system for sleep onset",
    actions: [
      "Dim lights to 25-50% of daytime brightness",
      "Use warm-colored lights (red/orange spectrum)",
      "Avoid overhead lighting - use lamps at eye level or below",
      "Limit screen time or use blue light blocking glasses",
      "Create a consistent dim light routine"
    ],
    science: "Light exposure in the evening delays circadian phase and suppresses melatonin production. Even small amounts of light can significantly impact sleep quality and timing."
  },
  {
    title: "Non-Sleep Deep Rest (NSDR)",
    icon: "🧘",
    timing: "Mid-afternoon or post-stress",
    description: "Restore dopamine baseline and enhance neuroplasticity",
    actions: [
      "Practice 10-30 minute NSDR or Yoga Nidra",
      "Use after periods of high cognitive demand",
      "Ideal timing: 6-8 hours after waking",
      "Don't replace nighttime sleep with NSDR"
    ],
    science: "NSDR increases dopamine in the basal forebrain by 65%, enhances neuroplasticity, and provides cognitive restoration without the grogginess of napping."
  }
];

const routineTools = [
  {
    name: "Light Meter App",
    purpose: "Measure light exposure",
    timing: "Morning and evening",
    description: "Track lux levels to ensure adequate morning light and proper evening dimming"
  },
  {
    name: "Core Body Temperature",
    purpose: "Find your temperature minimum",
    timing: "For 3-7 nights",
    description: "Use continuous glucose monitor or wearable to identify your personal circadian anchor point"
  },
  {
    name: "Caffeine Calculator",
    purpose: "Optimize timing and dosage",
    timing: "Daily planning",
    description: "Calculate ideal caffeine timing based on your wake time and sleep goals"
  },
  {
    name: "NSDR Audio",
    purpose: "Guided deep rest sessions",
    timing: "Midday or post-stress",
    description: "10-30 minute guided sessions for dopamine restoration and stress recovery"
  }
];

export default function DailyRoutinePage() {
  return (
    <>
      <Header />
      
      <main className="container" style={{ marginTop: '70px' }}>
        {/* HERO */}
        <section className={styles.hero}>
          <FadeIn>
            <div className={styles.heroContent}>
              <div className={styles.heroIcon}>📅</div>
              <h1 className={styles.title}>
                Daily Routine
                <span className={styles.titleGradient}> Optimization</span>
              </h1>
              <p className={styles.subtitle}>
                Build an evidence-based daily routine that optimizes circadian rhythms, dopamine function, 
                and performance using precise timing of light, movement, and recovery protocols.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>20-30%</div>
                <div className={styles.statLabel}>Better Sleep Quality</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>15-25%</div>
                <div className={styles.statLabel}>Improved Alertness</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10-21</div>
                <div className={styles.statLabel}>Days to Optimize</div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CORE SCIENCE */}
        <section className={styles.scienceSection}>
          <FadeIn>
            <h2>The Science of Routine Optimization</h2>
            <p className={styles.scienceText}>
              Your daily routine should align with your biology, not fight against it. By timing light exposure, 
              movement, food intake, and recovery practices according to your circadian rhythms, you can 
              optimize energy, focus, and sleep quality. The key is understanding that every behavior sends 
              signals to your internal clock - and these signals either enhance or disrupt your natural cycles.
            </p>
          </FadeIn>
        </section>

        {/* DAILY PROTOCOLS */}
        <section className={styles.protocolsSection}>
          <FadeIn>
            <h2>Core Daily Protocols</h2>
            <p className={styles.sectionSubtitle}>
              Six evidence-based protocols that form the foundation of an optimized daily routine
            </p>
          </FadeIn>

          <div className={styles.protocolsGrid}>
            {dailyProtocols.map((protocol, index) => (
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

        {/* TOOLS */}
        <section className={styles.supplementsSection}>
          <FadeIn>
            <h2>Optimization Tools</h2>
            <p className={styles.sectionSubtitle}>
              Practical tools to track and optimize your daily routine implementation
            </p>
          </FadeIn>

          <div className={styles.supplementsGrid}>
            {routineTools.map((tool, index) => (
              <FadeInScale key={tool.name} delay={index * 0.1}>
                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>{tool.name}</h3>
                    <div className={styles.supplementDosage}>🔧</div>
                  </div>
                  
                  <div className={styles.supplementTiming}>
                    <strong>Purpose:</strong> {tool.purpose}
                  </div>
                  
                  <div className={styles.supplementMechanism}>
                    <strong>Timing:</strong> {tool.timing}
                  </div>
                  
                  <div className={styles.supplementEvidence}>
                    <strong>Use case:</strong> {tool.description}
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
                  <h3>Track Your Baseline</h3>
                  <p>Monitor your current sleep, wake times, energy levels, and light exposure for 3-7 days to understand your starting point.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.2}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Start with Light</h3>
                  <p>Begin with morning light exposure and evening light management - these are the most powerful circadian signals.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.3}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Add Movement & Timing</h3>
                  <p>Layer in midday movement and caffeine timing optimization after light protocols are established (1-2 weeks).</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.4}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Integrate Recovery</h3>
                  <p>Add NSDR and temperature minimum tracking once the basic routine is solid (3-4 weeks in).</p>
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
