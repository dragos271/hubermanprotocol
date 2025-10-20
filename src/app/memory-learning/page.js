import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Memory & Learning – Huberman Protocol",
  description:
    "Deploy Huberman Lab-inspired techniques to encode, consolidate, and retrieve information effectively.",
};

const heroStats = [
  { value: "90", label: "Minute Learning Cycles" },
  { value: "10-30", label: "Min NSDR Sessions" },
  { value: "2-4", label: "Hours Sleep Consolidation" },
];

const learningProtocols = [
  {
    icon: "⏰",
    timing: "Per session",
    title: "90-Minute Learning Blocks",
    description: "Align studying with ultradian attention cycles and plan rest windows.",
    actions: [
      "Study up to 90 minutes",
      "Insert 20–30 minute breaks",
      "Schedule hardest topics at peak alertness",
      "Track energy to find best times",
    ],
    science:
      "Neural attention operates in ~90-minute cycles; respecting peaks improves encoding and reduces fatigue.",
  },
  {
    icon: "🔄",
    timing: "Daily/Weekly",
    title: "Spaced Repetition",
    description: "Review material at increasing intervals to strengthen retrieval.",
    actions: [
      "Review after 1 day, 3 days, 1 week",
      "Extend to 2 weeks, 1 month, 3 months",
      "Adjust spacing based on difficulty",
      "Use active recall during reviews",
    ],
    science:
      "Spacing activates forgetting curve just before information fades, fortifying neural connections.",
  },
  {
    icon: "🎯",
    timing: "Per block",
    title: "Focused Attention Training",
    description: "Strengthen cognitive control by practicing sustained single-tasking.",
    actions: [
      "Start with 10–15 min focus drills",
      "Gradually increase duration",
      "Note distractions, return attention",
      "Use monotasking across daily tasks",
    ],
    science:
      "Attention control circuits strengthen with deliberate practice, enhancing encoding efficiency.",
  },
  {
    icon: "🧩",
    timing: "Active study",
    title: "Active Recall",
    description: "Retrieve information without cues to cement pathways.",
    actions: [
      "Close notes and explain concepts aloud",
      "Teach someone else",
      "Create mind maps from memory",
      "Use flashcards with self-testing",
    ],
    science:
      "Retrieval practice outperforms re-reading by strengthening synaptic connections through repeated access.",
  },
  {
    icon: "😴",
    timing: "Post-learning",
    title: "Sleep-Dependent Learning",
    description: "Use sleep and naps to consolidate encoded memories.",
    actions: [
      "Target 7–9 hours nightly",
      "Review key points before bed",
      "Avoid heavy learning within 3 hours of sleep",
      "Use 10–20 minute naps after intense sessions",
    ],
    science:
      "Deep and REM sleep migrate information from short-term to long-term stores and integrate knowledge.",
  },
  {
    icon: "🌊",
    timing: "Pre-study",
    title: "Neuroplasticity Primers",
    description: "Prime brain chemistry for learning with movement, cold, or breath.",
    actions: [
      "20 min cardio to raise BDNF",
      "1–3 min cold exposure for dopamine",
      "Breathwork meditation to dial attention",
      "Practice novel motor skills",
    ],
    science:
      "BDNF, adrenaline, and dopamine create an ideal neuroplasticity window for encoding new information.",
  },
];

const memoryTechniques = [
  {
    name: "Method of Loci",
    type: "Spatial",
    technique: "Anchor information to familiar locations",
    benefits: "Harnesses strong spatial memory for sequences",
    application: "Design mental journey and place concepts along the route",
  },
  {
    name: "Elaborative Encoding",
    type: "Semantic",
    technique: "Link new ideas to existing knowledge",
    benefits: "Creates multiple retrieval pathways",
    application: "Ask why/how questions; relate to personal stories",
  },
  {
    name: "Dual Coding",
    type: "Visual",
    technique: "Pair visuals with verbal info",
    benefits: "Engages multiple memory systems",
    application: "Draw diagrams, mental imagery, annotate notes",
  },
  {
    name: "Chunking",
    type: "Organizational",
    technique: "Group related items into meaningful units",
    benefits: "Circumvents working-memory limits",
    application: "Spot patterns, build categories, summarize",
  },
  {
    name: "Testing Effect",
    type: "Retrieval",
    technique: "Self-test without looking",
    benefits: "Strengthens recall and identifies gaps",
    application: "Create practice quizzes, explain from memory",
  },
  {
    name: "Interleaving",
    type: "Practice",
    technique: "Alternate problem types/topics",
    benefits: "Improves discrimination and transfer",
    application: "Mix subjects within sessions, vary examples",
  },
];

const learningMistakes = [
  {
    title: "Passive Reading",
    description: "Highlighting without engagement yields poor retention.",
    solutions: [
      "Summarize in own words",
      "Create questions while reading",
      "Use active recall", 
      "Teach concepts aloud",
    ],
  },
  {
    title: "Massed Practice",
    description: "Cramming overloads memory and fades quickly.",
    solutions: [
      "Distribute practice over days",
      "Apply spaced repetition",
      "Keep sessions shorter + frequent",
      "Review before forgetting",
    ],
  },
  {
    title: "Multitasking",
    description: "Divided attention weakens encoding.",
    solutions: [
      "Monotask with focus blocks",
      "Eliminate digital distractions",
      "Practice attention training",
      "Batch communication windows",
    ],
  },
  {
    title: "Neglecting Sleep",
    description: "Inadequate sleep sabotages consolidation.",
    solutions: [
      "Prioritize 7–9 hours",
      "Maintain consistent schedule",
      "Avoid late-night cramming",
      "Use short naps strategically",
    ],
  },
];

const implementationSteps = [
  {
    title: "Optimize Environment",
    text: "Design a distraction-free workspace with proper lighting, ergonomics, and minimal devices.",
  },
  {
    title: "Plan Learning Cycles",
    text: "Schedule 90-minute blocks with clear goals and recovery windows.",
  },
  {
    title: "Use Active Techniques",
    text: "Leverage active recall, spaced repetition, and elaborative encoding over passive review.",
  },
  {
    title: "Prime Neuroplasticity",
    text: "Before demanding sessions, deploy exercise, cold, or breathwork to prime the brain.",
  },
  {
    title: "Sleep for Consolidation",
    text: "Review key points before bed, protect 7–9 hours of sleep, and use naps when needed.",
  },
];

export default function MemoryLearningPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="🧠"
          title="Memory"
          accent="Learning"
          subtitle="Stack protocols that boost encoding, strengthen consolidation, and sharpen recall."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Learn How You Learn</h2>
                <p className={styles.sectionSubtitle}>
                  Encoding, consolidation, and retrieval depend on attention, repetition, and sleep. Work with your biology to accelerate skill acquisition.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Huberman Lab protocols emphasize intentional focus blocks, active recall, priming neurochemistry, and prioritizing sleep. Apply them methodically for compounding gains.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Learning Protocols</h2>
              </div>
              <div className={styles.protocolsGrid}>
                {learningProtocols.map((protocol, index) => (
                  <FadeInScale key={protocol.title} delay={index * 0.05}>
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
                <h2 className={styles.sectionTitle}>Memory Techniques</h2>
                <p className={styles.sectionSubtitle}>
                  Mix techniques to engage multiple encoding pathways.
                </p>
              </div>
              <div className={styles.protocolsGrid}>
                {memoryTechniques.map((technique, index) => (
                  <FadeInScale key={technique.name} delay={index * 0.05}>
                    <article className={styles.protocolCard}>
                      <div className={styles.protocolHeader}>
                        <h3>{technique.name}</h3>
                        <div className={styles.protocolTiming}>{technique.type}</div>
                      </div>
                      <p className={styles.protocolDescription}>{technique.technique}</p>
                      <div className={styles.protocolActions}>
                        <h4>Benefits</h4>
                        <ul>
                          <li>{technique.benefits}</li>
                        </ul>
                      </div>
                      <div className={styles.protocolScience}>
                        <h4>Application</h4>
                        <p>{technique.application}</p>
                      </div>
                    </article>
                  </FadeInScale>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Common Mistakes</h2>
                <p className={styles.sectionSubtitle}>
                  Avoid these traps to maintain steady progress.
                </p>
              </div>
              <div className={styles.protocolsGrid}>
                {learningMistakes.map((mistake, index) => (
                  <FadeInScale key={mistake.title} delay={index * 0.05}>
                    <article className={styles.protocolCard}>
                      <h3>{mistake.title}</h3>
                      <p className={styles.protocolDescription}>{mistake.description}</p>
                      <div className={styles.protocolActions}>
                        <h4>Solutions</h4>
                        <ul>
                          {mistake.solutions.map((solution) => (
                            <li key={solution}>{solution}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </FadeInScale>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.4}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Implementation Guide</h2>
              </div>
              <div className={styles.implementationSteps}>
                {implementationSteps.map((step, index) => (
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
              <p className={styles.note}>
                *Performance gains based on studies referenced in Huberman Lab. For learning challenges tied to ADHD or dyslexia, collaborate with specialists alongside these tools.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
