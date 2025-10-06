import Header from "../components/Header";
import Footer from "../components/Footer";
import { FadeIn, FadeInScale } from "../components/Motion";
import styles from "./page.module.css";

export const metadata = {
  title: "Nervous System Regulation – Huberman Protocol",
  description: "Evidence-based protocols to understand and regulate your autonomic nervous system for stress control, focus, recovery, and performance.",
};

// Core regulation protocols based on Huberman discussed mechanisms
const regulationProtocols = [
  {
    title: "Physiological Sigh (Double Inhale + Long Exhale)",
    icon: "🌬️",
    timing: "Acute stress (1–3 repetitions)",
    description: "Rapidly reduce autonomic arousal and CO₂ buildup to downshift stress response",
    actions: [
      "Take a deep nasal inhale",
      "Add a second quick top-off inhale",
      "Long slow exhale through the mouth (twice as long)",
      "Repeat 1–3 times; measurable reduction in sigh rate + heart rate"
    ],
    science: "Shown to quickly restore proper CO₂/O₂ balance and activate parasympathetic rebound via stretch receptors in lungs. Huberman cites Stanford lab data showing rapid state shift in <1 minute."
  },
  {
    title: "Deliberate Cold Exposure",
    icon: "🧊",
    timing: "3–11 min total / session (multiple short bouts)",
    description: "Train stress resilience and increase baseline dopamine 2–3x sustainably",
    actions: [
      "Use cold plunge, shower, or immersion (10–15°C typical)",
      "Focus on maintaining calm nasal breathing",
      "End on cold (don’t reheat immediately for hormetic benefit)",
      "Progressively increase total weekly minutes"
    ],
    science: "Cold exposure triggers epinephrine + norepinephrine release and sustained dopamine elevation (Huberman citing Huberman Lab podcast + peer-reviewed data e.g. Søberg et al.). Builds top-down control over autonomic reflexes." 
  },
  {
    title: "Cyclic Hyperventilation + Breath Holds (Tummo-style)",
    icon: "🔥",
    timing: "1–3 rounds in morning or pre-training",
    description: "Increase alertness and autonomic control; not for sleep prep",
    actions: [
      "Inhale vigorously through nose or mouth, passive exhale (20–30 cycles)",
      "Final exhale then hold (CO₂ tolerance adaptation)",
      "Deep recovery inhale, 10–15s hold at top",
      "Repeat up to 3 rounds; sit safely (can cause lightheadedness)"
    ],
    science: "Deliberate hypocapnia followed by hold increases adrenaline transiently while improving tolerance to CO₂ fluctuations. Not for those with seizure or cardiovascular risk without clearance."
  },
  {
    title: "Non-Sleep Deep Rest (NSDR / Yoga Nidra)",
    icon: "🧘",
    timing: "10–30 min mid-day or post high-focus block",
    description: "Facilitate deep neural recovery and dopamine replenishment",
    actions: [
      "Lie down or recline in quiet setting",
      "Follow scripted body scan + breath guidance",
      "Let mind drift without sleep pressure",
      "Use after poor sleep to restore cognitive performance"
    ],
    science: "NSDR increases parasympathetic tone, reduces cortisol, and restores striatal dopamine availability. Cited by Huberman as accelerating neuroplastic recovery windows."
  },
  {
    title: "Vision Gaze Modulation (Panoramic vs. Focal)",
    icon: "👁️",
    timing: "Use panoramic to reduce stress; focal for deliberate focus",
    description: "Control arousal by actively shifting visual aperture",
    actions: [
      "When stressed: soften gaze, widen visual field (panoramic)",
      "For focus: narrow gaze to a single point for task onset",
      "Alternate every 90 mins to reduce mental fatigue",
      "Avoid prolonged screen tunnel vision without breaks"
    ],
    science: "Visual focus narrows and recruits sympathetic activation (magnocellular pathways). Panoramic gaze reduces amygdala activity and lowers autonomic arousal (Huberman Lab explanations)."
  },
  {
    title: "Respiratory Rate Awareness + CO₂ Tolerance Walks",
    icon: "🚶",
    timing: "2–3x/week light walk",
    description: "Enhance interoceptive control + autonomic flexibility",
    actions: [
      "Walk at easy pace nasal-only",
      "Gradually extend exhale length",
      "Occasionally insert controlled breath holds after exhale",
      "Track calm heart rate recovery"
    ],
    science: "Nasal walking with extended exhales increases parasympathetic tone and raises CO₂ tolerance—improving calm under stress (Huberman protocols referencing athletic breathing research)."
  }
];

const nervousSupplements = [
  {
    name: "L-Theanine",
    dosage: "100–200mg",
    timing: "During high stress or with caffeine",
    mechanism: "Increases alpha waves; smooths caffeine-driven adenosine blockade",
    evidence: "Shown to reduce anxiety and jitter without sedation; supports focused calm (Huberman cites multiple meta-analyses)."
  },
  {
    name: "Ashwagandha (KSM-66)",
    dosage: "300–600mg",
    timing: "Morning or early afternoon",
    mechanism: "Modulates HPA axis; lowers cortisol",
    evidence: "Randomized trials show reduced perceived stress and improved HRV; Huberman recommends cycling."
  },
  {
    name: "Magnesium Threonate or Glycinate",
    dosage: "140–300mg elemental",
    timing: "Evening",
    mechanism: "Supports GABAergic tone and nervous system relaxation",
    evidence: "Improves sleep quality and reduces neural excitability; frequently discussed in Huberman sleep + stress episodes."
  },
  {
    name: "Apigenin",
    dosage: "50mg",
    timing: "Evening (with magnesium + theanine stack)",
    mechanism: "Acts at GABA A receptors for mild calming effect",
    evidence: "Huberman personal protocol for sleep onset latency reduction; emerging but supportive data."
  }
];

export default function NervousSystemPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ marginTop: '70px' }}>
        {/* HERO */}
        <section className={styles.hero}>
          <FadeIn>
            <div className={styles.heroContent}>
              <div className={styles.heroIcon}>⚡</div>
              <h1 className={styles.title}>
                Nervous System
                <span className={styles.titleGradient}> Regulation</span>
              </h1>
              <p className={styles.subtitle}>
                Practical tools to understand and direct your autonomic state—shifting between high alertness, focused engagement, and deep recovery on demand.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>1 min</div>
                <div className={styles.statLabel}>To Downshift Stress</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>2–3x</div>
                <div className={styles.statLabel}>Dopamine Lift (Cold)</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10–30 min</div>
                <div className={styles.statLabel}>NSDR Recovery</div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CORE SCIENCE */}
        <section className={styles.scienceSection}>
          <FadeIn>
            <h2>Autonomic System Fundamentals</h2>
            <p className={styles.scienceText}>
              Your autonomic nervous system (ANS) toggles between sympathetic (alert/action) and parasympathetic (rest/recover) dominance. Tools like breath control, gaze modulation, temperature shifts, and deliberate state training allow you to influence these circuits. By practicing controlled stress (cold, cyclic breathing) and rapid calm-inducing methods (physiological sigh, panoramic vision), you increase flexibility—what Huberman often calls “top-down control” over reflexive states.
            </p>
          </FadeIn>
        </section>

        {/* REGULATION PROTOCOLS */}
        <section className={styles.protocolsSection}>
          <FadeIn>
            <h2>State Regulation Protocols</h2>
            <p className={styles.sectionSubtitle}>
              Core methods to shift autonomic tone deliberately
            </p>
          </FadeIn>
          <div className={styles.protocolsGrid}>
            {regulationProtocols.map((protocol, index) => (
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
            <h2>Supportive Compounds</h2>
            <p className={styles.sectionSubtitle}>
              Compounds that can modulate autonomic balance when used appropriately
            </p>
          </FadeIn>
          <div className={styles.supplementsGrid}>
            {nervousSupplements.map((supplement, index) => (
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
            <h2>Adoption Strategy</h2>
          </FadeIn>
          <div className={styles.implementationSteps}>
            <FadeInScale delay={0.1}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Baseline Awareness</h3>
                  <p>Track resting heart rate variability (HRV), sleep, and subjective stress for 1 week before adding protocols.</p>
                </div>
              </div>
            </FadeInScale>
            <FadeInScale delay={0.2}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Add Rapid Downshift</h3>
                  <p>Use physiological sigh daily once or during acute stress to develop reliable state control.</p>
                </div>
              </div>
            </FadeInScale>
            <FadeInScale delay={0.3}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Layer Controlled Stress</h3>
                  <p>Add cold exposure or cyclic hyperventilation 2–4x/week to expand your autonomic range.</p>
                </div>
              </div>
            </FadeInScale>
            <FadeInScale delay={0.4}>
              <div className={styles.implementationStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Recovery & Neuroplasticity</h3>
                  <p>Integrate NSDR post high-focus or stress blocks to accelerate reset and learning consolidation.</p>
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
