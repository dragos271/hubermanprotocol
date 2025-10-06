import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn, FadeInScale } from "../components/Motion";
import styles from "./page.module.css";

export const metadata = {
  title: "Cold Plunges and Deliberate Cooling – Huberman Protocol",
  description: "Master cold exposure protocols for enhanced resilience, recovery, and mental performance based on neuroscience research.",
};

const coldProtocols = [
  {
    title: "Cold Water Immersion",
    icon: "🛀",
    timing: "2-4x per week",
    description: "Full-body cold exposure for maximum physiological adaptation",
    actions: [
      "Water temperature: 50-59°F (10-15°C) for beginners",
      "Duration: 2-5 minutes initially, work up to 11 minutes total per week",
      "Enter water slowly, focus on controlling breathing",
      "Exit before hypothermia sets in (shivering, confusion)"
    ],
    science: "Cold water immersion triggers massive catecholamine release (dopamine, norepinephrine, epinephrine) that can last 2-3 hours, enhancing mood, focus, and stress resilience."
  },
  {
    title: "Cold Showers",
    icon: "🚿",
    timing: "Daily or every other day",
    description: "Accessible cold exposure method for building cold adaptation",
    actions: [
      "Start with 30 seconds of coldest water at end of shower",
      "Gradually increase to 2-3 minutes of cold exposure",
      "Focus on breathing: inhale slowly, exhale controlled",
      "End with cold - avoid warming up immediately after"
    ],
    science: "Even brief cold exposure (30 seconds - 2 minutes) can significantly increase stress resilience and activate the sympathetic nervous system in beneficial ways."
  },
  {
    title: "Breathing During Cold Exposure",
    icon: "🫁",
    timing: "Throughout cold exposure",
    description: "Proper breathing technique to maximize benefits and safety",
    actions: [
      "Take deep, slow breaths - avoid hyperventilating",
      "Focus on long exhales to activate parasympathetic response",
      "Use breathing to stay calm and present",
      "Never hold breath during cold exposure"
    ],
    science: "Controlled breathing during stress (cold) trains the prefrontal cortex to maintain calm under pressure, building real-world stress resilience."
  },
  {
    title: "Post-Cold Recovery",
    icon: "🔥",
    timing: "After cold exposure",
    description: "Optimal recovery strategy to maximize adaptation benefits",
    actions: [
      "Allow natural rewarming - avoid immediate heat/sauna",
      "Light movement or exercise can help with rewarming",
      "Stay hydrated and consume warm (not hot) beverages",
      "Wait 4+ hours before heat exposure if doing contrast therapy"
    ],
    science: "Natural rewarming maximizes the metabolic and cardiovascular benefits. Immediate heating blunts many of the positive adaptations from cold exposure."
  },
  {
    title: "Progressive Cold Adaptation",
    icon: "📈",
    timing: "Over weeks/months",
    description: "Systematic approach to building cold tolerance safely",
    actions: [
      "Week 1-2: 30-60 seconds at uncomfortably cool temperature",
      "Week 3-4: 1-2 minutes at colder temperature",
      "Week 5+: Work toward 2-5 minutes at 50-55°F",
      "Never force - discomfort should be manageable"
    ],
    science: "Gradual adaptation allows brown fat development, improved circulation, and nervous system conditioning without overwhelming stress response."
  },
  {
    title: "Timing Optimization",
    icon: "⏰",
    timing: "Strategic throughout day",
    description: "When to use cold exposure for specific benefits",
    actions: [
      "Morning: For alertness and energy (avoid if you have heart conditions)",
      "Pre-workout: For enhanced performance and recovery",
      "Avoid within 6 hours of intended sleep time",
      "Not immediately after strength training (can blunt adaptations)"
    ],
    science: "Cold exposure timing affects circadian rhythms and exercise adaptations. Morning exposure enhances alertness; evening exposure can disrupt sleep."
  }
];

const coldBenefits = [
  {
    category: "Mental Performance",
    benefits: [
      "250% increase in dopamine levels lasting 2-3 hours",
      "Enhanced focus and attention",
      "Improved stress resilience and emotional regulation",
      "Increased willpower and mental toughness"
    ]
  },
  {
    category: "Physical Health",
    benefits: [
      "Increased brown fat and improved metabolism",
      "Enhanced immune system function",
      "Reduced inflammation markers",
      "Improved cardiovascular health"
    ]
  },
  {
    category: "Recovery & Performance",
    benefits: [
      "Faster muscle recovery between sessions",
      "Reduced muscle soreness (DOMS)",
      "Enhanced sleep quality when done properly",
      "Increased cold tolerance and adaptability"
    ]
  }
];

const safetyGuidelines = [
  {
    title: "Medical Considerations",
    warnings: [
      "Consult doctor if you have heart conditions",
      "Avoid if pregnant or have eating disorders",
      "Stop if you experience chest pain or irregular heartbeat",
      "Never do cold exposure alone in natural bodies of water"
    ]
  },
  {
    title: "Environmental Safety",
    warnings: [
      "Start in controlled environments (shower, ice bath)",
      "Have a warm space readily available",
      "Use timer - easy to lose track of time in cold",
      "Have someone nearby for emergencies"
    ]
  },
  {
    title: "Physical Warning Signs",
    warnings: [
      "Uncontrollable shivering = time to get out",
      "Confusion or difficulty thinking clearly",
      "Numbness in extremities lasting >10 minutes",
      "Skin turning blue or white"
    ]
  }
];

export default function ColdExposurePage() {
  return (
    <>
      <Header />
      
      <main className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <FadeIn>
            <div className={styles.heroContent}>
              <div className={styles.heroIcon}>🧊</div>
              <h1 className={styles.title}>
                Cold Exposure
                <span className={styles.titleGradient}> Protocols</span>
              </h1>
              <p className={styles.subtitle}>
                Master deliberate cold exposure to enhance stress resilience, boost mental performance, 
                and optimize recovery through evidence-based protocols.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>250%</div>
                <div className={styles.statLabel}>Dopamine Increase</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>2-3</div>
                <div className={styles.statLabel}>Hours of Enhanced Focus</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>11</div>
                <div className={styles.statLabel}>Min/Week Minimum Effective</div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CORE SCIENCE */}
        <section className={styles.scienceSection}>
          <FadeIn>
            <h2>The Science of Cold Exposure</h2>
            <p className={styles.scienceText}>
              Deliberate cold exposure triggers a controlled stress response that activates the sympathetic 
              nervous system, releasing catecholamines (dopamine, norepinephrine, epinephrine) and promoting 
              neuroplasticity. Regular cold exposure builds stress resilience by training the mind to remain 
              calm under pressure, while physiological adaptations include increased brown fat, improved 
              circulation, and enhanced immune function.
            </p>
          </FadeIn>
        </section>

        {/* COLD PROTOCOLS */}
        <section className={styles.protocolsSection}>
          <FadeIn>
            <h2>Cold Exposure Protocols</h2>
            <p className={styles.sectionSubtitle}>
              Six evidence-based protocols for safe and effective cold exposure practice
            </p>
          </FadeIn>

          <div className={styles.protocolsGrid}>
            {coldProtocols.map((protocol, index) => (
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

        {/* BENEFITS */}
        <section className={styles.benefitsSection}>
          <FadeIn>
            <h2>Cold Exposure Benefits</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive benefits across mental performance, physical health, and recovery
            </p>
          </FadeIn>

          <div className={styles.benefitsGrid}>
            {coldBenefits.map((category, index) => (
              <FadeInScale key={category.category} delay={index * 0.1}>
                <div className={styles.benefitCard}>
                  <h3>{category.category}</h3>
                  <ul>
                    {category.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </FadeInScale>
            ))}
          </div>
        </section>

        {/* SAFETY GUIDELINES */}
        <section className={styles.safetySection}>
          <FadeIn>
            <h2>⚠️ Safety Guidelines</h2>
            <p className={styles.sectionSubtitle}>
              Essential safety considerations for cold exposure practice
            </p>
          </FadeIn>

          <div className={styles.safetyGrid}>
            {safetyGuidelines.map((guideline, index) => (
              <FadeInScale key={guideline.title} delay={index * 0.1}>
                <div className={styles.safetyCard}>
                  <h3>{guideline.title}</h3>
                  <ul>
                    {guideline.warnings.map((warning, idx) => (
                      <li key={idx}>{warning}</li>
                    ))}
                  </ul>
                </div>
              </FadeInScale>
            ))}
          </div>
        </section>

        {/* IMPLEMENTATION GUIDE */}
        <section className={styles.implementationSection}>
          <FadeIn>
            <h2>Getting Started Safely</h2>
          </FadeIn>
          
          <div className={styles.implementationSteps}>
            <FadeInScale delay={0.1}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Start with Cold Showers</h3>
                  <p>Begin with 30 seconds of cold water at the end of your regular shower. Focus on breathing calmly and staying present.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.2}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Build Duration Gradually</h3>
                  <p>Increase cold exposure by 15-30 seconds each week until you reach 2-3 minutes. Quality over quantity - stay calm.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.3}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Consider Ice Baths</h3>
                  <p>After 2-3 weeks of cold showers, you may progress to ice baths for more intense exposure and greater benefits.</p>
                </div>
              </div>
            </FadeInScale>
            
            <FadeInScale delay={0.4}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Maintain Consistency</h3>
                  <p>Aim for 11+ minutes total per week, spread across 2-4 sessions. Consistency matters more than intensity.</p>
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
