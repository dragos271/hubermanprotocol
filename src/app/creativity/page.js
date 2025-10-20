import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Unlocking Creativity – Huberman Protocol",
  description:
    "Neuroscience-backed routines that oscillate between divergent thinking, focused execution, and recovery to keep ideas flowing.",
};

const heroStats = [
  { value: "3", label: "Creative States" },
  { value: "90 min", label: "Divergent Sprint" },
  { value: "20 min", label: "Reset Windows" },
];

const protocols = [
  {
    icon: "🌅",
    timing: "Morning",
    title: "State Priming Walk",
    description:
      "Combine natural light, panoramic vision, and brisk walking to reduce amygdala activity and invite associative thought.",
    actions: [
      "10–20 minute outdoor walk with soft, panoramic gaze",
      "Alternate pace every few minutes to introduce novelty",
      "Capture quick ideas via voice memo without editing",
    ],
    science:
      "Huberman explains that panoramic vision shifts the nervous system toward parasympathetic balance, broadening attentional aperture—the ideal substrate for divergent thinking.",
  },
  {
    icon: "🌀",
    timing: "Ideation",
    title: "Divergent Cycles",
    description:
      "Use 90-minute expansive sessions that mix brainstorming, mind-wandering, and cross-domain input, then deliberately close the loop.",
    actions: [
      "Stack 3–4 prompts that push beyond your discipline",
      "Inject novelty: read, sketch, or listen to contrasting content",
      "End each cycle by selecting one idea to evaluate later",
    ],
    science:
      "Episodes on creativity highlight dopamine’s role in linking disparate concepts. Novel stimuli plus mild adrenaline (movement, deep breathing) increase signal-to-noise for idea generation.",
  },
  {
    icon: "🧠",
    timing: "Execution",
    title: "Focused Convergence",
    description:
      "Switch to 45–60 minute focused bouts to refine ideas. Narrow your gaze, use binaural beats, and apply constraints to drive completion.",
    actions: [
      "Transition with a 3-minute physiological sigh or box breath",
      "Close unused tabs; hold a single metric for success",
      "End with a 5-minute retrospective to note wins/gaps",
    ],
    science:
      "According to Huberman Lab, toggling between divergent and convergent states maintains dopamine. Constraining focus engages prefrontal circuits that translate concepts into output.",
  },
  {
    icon: "🌙",
    timing: "Night",
    title: "Incubation & Sleep",
    description:
      "Protect slow-wave and REM sleep with dim light, low temperature, and NSDR to consolidate creative insights.",
    actions: [
      "List open problems before lights-down; avoid solving",
      "Use 10-minute NSDR if ideas loop at bedtime",
      "Keep notebook bedside for hypnagogic downloads",
    ],
    science:
      "Episode 13 details how REM sleep recombines memories and experiences. A calm pre-sleep routine preserves REM density, boosting creative breakthroughs.",
  },
];

const steps = [
  {
    title: "Audit Current Rhythm",
    text: "Document energy peaks, existing routines, and the environments where ideas emerge effortlessly.",
  },
  {
    title: "Prime Divergent State",
    text: "Create a morning walk ritual and schedule two 90-minute sessions for exploration during your biologically alert window.",
  },
  {
    title: "Insert Convergence Blocks",
    text: "Follow each ideation sprint with a shorter convergence block. Use constraints (word limits, mock deadlines) to force shipping.",
  },
  {
    title: "Harvest & Review",
    text: "End the week with a reflection session: catalog ideas, choose next experiments, and adjust environmental cues for the upcoming cycle.",
  },
];

const resources = [
  {
    title: "Huberman Lab #74",
    detail: "Explores creative state toggling, the dopamine-adrenaline dance, and how to structure divergent vs. convergent work.",
  },
  {
    title: "NSDR Library",
    detail: "Free guided sessions (10–30 min) to accelerate recovery between ideation and execution windows.",
  },
  {
    title: "Vision-Based Tools",
    detail: "Episode notes on panoramic vs. focal vision for shifting nervous-system state and creativity on demand.",
  },
];

export default function CreativityPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="💡"
          title="Unlocking"
          accent="Creativity"
          subtitle="Engineer conditions for inspiration by alternating expansive thinking, focused execution, and restorative recovery using Huberman Lab tools."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Design The Creative Nervous System</h2>
                <p className={styles.sectionSubtitle}>
                  Creativity is not random—it leverages predictable neurochemistry. Dopamine supports exploration, adrenaline sharpens execution, and acetylcholine locks attention. Your job is to choreograph state shifts that keep these messengers in balance.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Huberman stresses three pillars: <strong>physiology before philosophy</strong> (prime the body for the state you need), <strong>structural novelty</strong> (change inputs to refresh dopamine), and <strong>deliberate rest</strong> (NSDR, sleep, nature exposure) to consolidate associative links. Adopt these patterns independent of artistic medium—music, code, strategy, or product design.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Creative Protocol Stack</h2>
                <p className={styles.sectionSubtitle}>
                  Sequence these behaviors across the day to keep ideas flowing and finishes frequent.
                </p>
              </div>
              <div className={styles.protocolsGrid}>
                {protocols.map((protocol) => (
                  <FadeInScale key={protocol.title}>
                    <article className={styles.protocolCard}>
                      <div className={styles.protocolHeader}>
                        <div className={styles.protocolIcon}>{protocol.icon}</div>
                        <div className={styles.protocolTiming}>{protocol.timing}</div>
                      </div>
                      <h3>{protocol.title}</h3>
                      <p className={styles.protocolDescription}>{protocol.description}</p>
                      <div className={styles.protocolActions}>
                        <h4>Implementation</h4>
                        <ul>
                          {protocol.actions.map((action) => (
                            <li key={action}>{action}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.protocolScience}>
                        <h4>Why it works</h4>
                        <p>{protocol.science}</p>
                      </div>
                    </article>
                  </FadeInScale>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Weekly Progression</h2>
                <p className={styles.sectionSubtitle}>
                  Integrate the stack methodically so you avoid burnout and capture breakthroughs.
                </p>
              </div>
              <div className={styles.implementationSteps}>
                {steps.map((step, index) => (
                  <FadeInScale key={step.title} delay={index * 0.05}>
                    <div className={styles.implementationStep}>
                      <div className={styles.stepNumber}>{index + 1}</div>
                      <div className={styles.stepContent}>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  </FadeInScale>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Go Deeper</h2>
                <p className={styles.sectionSubtitle}>
                  Use these references to expand or share your protocol.
                </p>
              </div>
              <div className={styles.resourceList}>
                {resources.map((resource) => (
                  <div key={resource.title} className={styles.resourceItem}>
                    <strong>{resource.title}</strong>
                    <span>{resource.detail}</span>
                  </div>
                ))}
              </div>
              <p className={styles.note}>
                *Adjust stimulant use, cold exposure, or supplement stacks with your healthcare team. Creativity thrives when physiology and mental health are stable.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
