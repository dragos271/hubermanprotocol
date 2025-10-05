import Header from "../components/Header";
import Footer from "../components/Footer";
import NSDRPlaylist from "../components/NSDRPlaylist";
import { FadeIn } from "../components/Motion";
import styles from "../sleep/page.module.css";

export const metadata = {
  title: "NSDR & Recovery Protocols - Huberman Protocol",
  description: "Non-Sleep Deep Rest protocols for dopamine restoration, stress reduction, and enhanced neuroplasticity.",
};

export default function NSDRPage() {
  const nsdrBenefits = [
    {
      benefit: "Dopamine Restoration",
      description: "NSDR replenishes dopamine in the basal forebrain by 65% in 20 minutes",
      mechanism: "Parasympathetic activation allows dopamine neurons to recover from depletion"
    },
    {
      benefit: "Stress Reduction", 
      description: "Reduces cortisol levels and sympathetic nervous system activation",
      mechanism: "Vagal tone increase shifts autonomic balance toward rest-and-digest"
    },
    {
      benefit: "Enhanced Neuroplasticity",
      description: "Improves learning and memory consolidation when done after skill practice",
      mechanism: "Theta waves during NSDR promote neural pathway strengthening"
    },
    {
      benefit: "Improved Sleep Quality",
      description: "Regular NSDR practice improves subsequent nighttime sleep",
      mechanism: "Trains parasympathetic activation and reduces anxiety/rumination"
    }
  ];

  const nsdrTypes = [
    {
      type: "Yoga Nidra",
      duration: "10-60 minutes",
      description: "Traditional practice of conscious sleep",
      when: "Anytime, especially afternoon energy dip",
      characteristics: [
        "Body scanning and progressive relaxation",
        "Visualization and intention setting", 
        "Maintains thread of consciousness throughout",
        "Can be done sitting or lying down"
      ]
    },
    {
      type: "Body Scan Meditation",
      duration: "10-30 minutes", 
      description: "Systematic attention to different body parts",
      when: "After stress or physical activity",
      characteristics: [
        "Progressive muscle relaxation",
        "Heightened body awareness",
        "Releases physical tension patterns",
        "Simple and accessible for beginners"
      ]
    },
    {
      type: "Guided Hypnosis",
      duration: "15-45 minutes",
      description: "Directed relaxation with specific suggestions",
      when: "For specific goals (sleep, confidence, habits)",
      characteristics: [
        "Focused suggestion and imagery",
        "Can target specific behaviors or states",
        "Often includes progressive relaxation",
        "May have specific therapeutic applications"
      ]
    }
  ];

  const nsdrTiming = [
    {
      time: "Early Morning (6-9 AM)",
      benefits: ["Enhances focus for day ahead", "Helps if you didn't sleep well"],
      cautions: ["Don't replace needed sleep", "Keep sessions shorter (10-20 min)"],
      note: "Good for setting intentions and priming nervous system"
    },
    {
      time: "Midday (12-3 PM)", 
      benefits: ["Combats afternoon energy dip", "Restores dopamine after work"],
      cautions: ["Don't exceed 30-40 minutes", "May affect evening sleep if too late"],
      note: "Optimal timing for most people - matches natural circadian low"
    },
    {
      time: "Evening (6-9 PM)",
      benefits: ["Helps transition from work mode", "Prepares body for sleep"],
      cautions: ["Avoid if it makes you too alert", "Choose shorter, gentler sessions"],
      note: "Good for winding down but timing matters for sleep"
    },
    {
      time: "Post-Learning",
      benefits: ["Enhances memory consolidation", "Improves skill acquisition"],
      cautions: ["Do within 4 hours of learning", "Keep it focused and intentional"],
      note: "Most powerful for neuroplasticity when paired with new learning"
    }
  ];

  const nsdrTips = [
    "Start with shorter sessions (10-15 min) and build up gradually",
    "Lie down but avoid getting too comfortable (risk of falling asleep)",
    "Use the same time each day to build a consistent practice",
    "Don't judge if your mind wanders - gently return attention to guidance",
    "NSDR after learning enhances retention better than more practice",
    "Cool room temperature (68-72°F) helps maintain optimal alertness",
    "Some people prefer sitting to avoid falling fully asleep",
    "Even 'failed' sessions where you fall asleep have restorative benefits"
  ];

  const troubleshooting = [
    {
      problem: "I Fall Asleep Every Time",
      solutions: [
        "Try sitting up instead of lying down",
        "Keep room slightly cooler",
        "Do shorter sessions (10-15 minutes)",
        "Practice earlier in the day when less tired",
        "Don't worry - sleep is also restorative!"
      ]
    },
    {
      problem: "My Mind Races/Can't Relax",
      solutions: [
        "This is normal - don't fight the thoughts",
        "Gently return attention to the guide's voice",
        "Try body scan style rather than visualization",
        "Consider doing some light exercise first",
        "Practice consistently - it gets easier"
      ]
    },
    {
      problem: "I Don't Feel Any Different",
      solutions: [
        "Benefits are often subtle and cumulative",
        "Track sleep quality and stress levels over time",
        "Try different types of NSDR to find what works",
        "Be patient - neuroplasticity takes time",
        "Focus on the process, not immediate outcomes"
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
              <h1 className={styles.pageTitle}>NSDR & Recovery Protocols</h1>
              <p className={styles.pageSubtitle}>
                Non-Sleep Deep Rest: the ultimate recovery tool for dopamine restoration, 
                stress reduction, and enhanced neuroplasticity.
              </p>
            </FadeIn>
          </section>

          {/* NSDR PLAYLIST */}
          <FadeIn delay={0.1}>
            <section className={styles.toolSection}>
              <h2>🎧 NSDR Audio Library</h2>
              <p className={styles.sectionDesc}>
                Choose your session length and begin your journey into conscious rest and restoration.
              </p>
              <NSDRPlaylist />
            </section>
          </FadeIn>

          {/* BENEFITS */}
          <FadeIn delay={0.2}>
            <section className={styles.section}>
              <h2>🧠 Why NSDR Works</h2>
              <p className={styles.sectionDesc}>The neuroscience behind non-sleep deep rest and its powerful effects on brain and body.</p>
              <div className={styles.scienceGrid}>
                {nsdrBenefits.map((item, i) => (
                  <div key={i} className={styles.scienceCard}>
                    <h3>{item.benefit}</h3>
                    <p style={{marginBottom: '12px', fontWeight: '500'}}>{item.description}</p>
                    <p><strong>Mechanism:</strong> {item.mechanism}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* TYPES OF NSDR */}
          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <h2>🎯 Types of NSDR</h2>
              <p className={styles.sectionDesc}>Different approaches to non-sleep deep rest and when to use each one.</p>
              <div className={styles.protocolsGrid}>
                {nsdrTypes.map((type, i) => (
                  <div key={i} className={styles.protocolCard}>
                    <h3>{type.type}</h3>
                    <div className={styles.protocolDesc}>
                      <strong>Duration:</strong> {type.duration}
                    </div>
                    <div className={styles.protocolDesc}>
                      <strong>Best for:</strong> {type.when}
                    </div>
                    <p className={styles.sectionDesc}>{type.description}</p>
                    <ul>
                      {type.characteristics.map((char, j) => (
                        <li key={j}>{char}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* TIMING GUIDELINES */}
          <FadeIn delay={0.4}>
            <section className={styles.section}>
              <h2>⏰ Optimal Timing Guidelines</h2>
              <p className={styles.sectionDesc}>When you do NSDR matters as much as how you do it. Choose timing based on your goals.</p>
              <div className={styles.phasesGrid}>
                {nsdrTiming.map((timing, i) => (
                  <div key={i} className={styles.phaseCard}>
                    <h3>{timing.time}</h3>
                    <div style={{marginBottom: '12px'}}>
                      <strong>Benefits:</strong>
                      <ul style={{margin: '4px 0 8px 16px'}}>
                        {timing.benefits.map((benefit, j) => (
                          <li key={j} style={{fontSize: '14px', color: 'var(--muted)'}}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div style={{marginBottom: '12px'}}>
                      <strong>Cautions:</strong>
                      <ul style={{margin: '4px 0 8px 16px'}}>
                        {timing.cautions.map((caution, j) => (
                          <li key={j} style={{fontSize: '14px', color: 'var(--muted)'}}>{caution}</li>
                        ))}
                      </ul>
                    </div>
                    <p style={{fontSize: '13px', fontStyle: 'italic', color: 'var(--muted)'}}>{timing.note}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* OPTIMIZATION TIPS */}
          <FadeIn delay={0.5}>
            <section className={styles.section}>
              <h2>💡 NSDR Optimization Tips</h2>
              <p className={styles.sectionDesc}>Practical strategies to get the most out of your NSDR practice.</p>
              <div className={styles.tipsGrid}>
                {nsdrTips.map((tip, i) => (
                  <div key={i} className={styles.tipCard}>
                    <span className={styles.tipIcon}>✨</span>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* TROUBLESHOOTING */}
          <FadeIn delay={0.6}>
            <section className={styles.section}>
              <h2>🔧 Common Issues & Solutions</h2>
              <p className={styles.sectionDesc}>Troubleshoot common NSDR challenges and optimize your practice.</p>
              <div className={styles.strategiesGrid}>
                {troubleshooting.map((issue, i) => (
                  <div key={i} className={styles.strategyCard}>
                    <h3>{issue.problem}</h3>
                    <ul>
                      {issue.solutions.map((solution, j) => (
                        <li key={j}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* SCIENCE DEEP DIVE */}
          <FadeIn delay={0.7}>
            <section className={styles.section}>
              <h2>The Science: Neural Mechanisms of NSDR</h2>
              <div className={styles.scienceGrid}>
                <div className={styles.scienceCard}>
                  <h3>Dopamine System Recovery</h3>
                  <p>NSDR allows depleted dopamine neurons in the basal forebrain to replenish. This system is crucial for motivation, focus, and reward sensitivity.</p>
                </div>
                <div className={styles.scienceCard}>
                  <h3>Default Mode Network</h3>
                  <p>NSDR modulates the default mode network, reducing rumination and self-referential thinking while maintaining conscious awareness.</p>
                </div>
                <div className={styles.scienceCard}>
                  <h3>Theta Wave States</h3>
                  <p>NSDR induces theta wave activity (4-8 Hz) associated with learning, memory consolidation, and reduced anxiety without losing consciousness.</p>
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
