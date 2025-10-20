import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "ADHD Science – Huberman Protocol",
  description:
    "Evidence-informed strategies from Huberman Lab discussions for managing attention, motivation, and dopamine regulation in ADHD.",
};

const heroStats = [
  { value: "4", label: "Core Playbooks" },
  { value: "90-120", label: "Minute Focus Cycles" },
  { value: "24/7", label: "State Awareness" },
];

const protocols = [
  {
    icon: "🌅",
    timing: "Morning",
    title: "Dopamine Anchoring Routine",
    description:
      "Layer morning sunlight, brief exercise, and deliberate cold to set circadian and catecholamine tone for the day.",
    actions: [
      "10 minutes outdoor light exposure within 60 minutes of waking",
      "5 minutes of vigorous movement or zone-2 cardio",
      "30–90 seconds cold shower finish to boost dopamine 2–3×",
    ],
    science:
      "Huberman Lab episodes 60 & 88 highlight how light and cold synergistically increase dopamine and norepinephrine, improving ADHD-related alertness without overstimulation.",
  },
  {
    icon: "🧠",
    timing: "Focus Blocks",
    title: "90/20 Deep-Work Intervals",
    description:
      "Use 90 minutes of single-task effort followed by 20 minutes of recovery to balance acetylcholine-driven focus and dopamine replenishment.",
    actions: [
      "Remove digital distractions; commit to one goal",
      "Use binaural beats or white noise to stabilize attention",
      "Finish each block with NSDR, walk, or physiological sigh",
    ],
    science:
      "Huberman cites Stanford learning data showing that deliberate rest after focus accelerates plasticity—critical when dopamine signaling is irregular, as in ADHD.",
  },
  {
    icon: "🥗",
    timing: "Nutrition",
    title: "Glycemic & Protein Control",
    description:
      "Stabilize blood glucose and provide amino acid precursors to support dopamine & norepinephrine synthesis throughout the day.",
    actions: [
      "Front-load 30–40 g protein at breakfast",
      "Favor low-glycemic carbohydrates before focus tasks",
      "Hydrate and include omega-3 sources daily",
    ],
    science:
      "Episodes 37 & 86 emphasize the role of tyrosine, iron, and steady glucose in catecholamine production, directly influencing ADHD symptom expression.",
  },
  {
    icon: "🌙",
    timing: "Evening",
    title: "Wind-Down & Sleep Protection",
    description:
      "Guard the final 90 minutes of the day with low light, minimal screens, and calming protocols to maintain dopamine receptor sensitivity.",
    actions: [
      "Dim lights and reduce blue light exposure",
      "Use 5–10 minute breathwork or Yoga Nidra",
      "Supplement stack (magnesium threonate + theanine) if cleared by a clinician",
    ],
    science:
      "Huberman recommends evening light control and parasympathetic activation to normalize cortisol rhythms, improving ADHD-related sleep challenges.",
  },
];

const steps = [
  {
    title: "Baseline Awareness",
    text: "Track sleep, focus quality, and stimulant timing for 7 days. Log when attention drops and what precedes hyperfocus episodes.",
  },
  {
    title: "Anchor Mornings",
    text: "Implement the light–movement–cold triad for two weeks before adjusting medication or caffeine timing.",
  },
  {
    title: "Build Structured Focus",
    text: "Adopt the 90/20 cycle with explicit goals. Pair each block with deliberate disengagement (NSDR, walk, or panoramic vision).",
  },
  {
    title: "Refine Fuel & Sleep",
    text: "Experiment with protein distribution, low-glycemic meals, and consistent wind-down cues to stabilize energy and motivation.",
  },
];

const resources = [
  {
    title: "Huberman Lab #88",
    detail: "Deep dive on ADHD neurobiology, stimulant mechanisms, and behavioral scaffolding tools.",
  },
  {
    title: "Stanford NSDR Protocols",
    detail: "Short scripts to deploy after focus blocks for dopamine reset and state transition.",
  },
  {
    title: "Episode Toolkit",
    detail: "hubermanlab.com/toolkit-for-adhd—curated show notes, supplements, and habit templates.",
  },
];

export default function ADHDSciencePage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="⚡"
          title="ADHD"
          accent="Science"
          subtitle="Translate Huberman Lab research into practical systems for navigating attention variability, motivation dips, and dopamine regulation."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Neurobiology Snapshots</h2>
                <p className={styles.sectionSubtitle}>
                  ADHD involves reduced tonic dopamine signaling, altered norepinephrine tone, and challenges switching between focus and diffuse modes. Tools that stabilize circadian anchors, support catecholamine synthesis, and provide precise rest windows help compensate without overstimulation.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Huberman emphasizes three levers: <strong>circadian timing</strong> (light, sleep, temperature), <strong>state control</strong> (breathwork, vision, deliberate stress), and <strong>reward prediction</strong> (splitting tasks, novelty, and short feedback loops). These interventions integrate with clinical care, supporting medication efficacy or providing behavioral structure when unmedicated. Always coordinate changes with a licensed healthcare professional.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Core Protocols</h2>
                <p className={styles.sectionSubtitle}>
                  Stack these evidence-informed behaviors to create predictable dopamine ramps, focused work windows, and recovery breaks.
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
                <h2 className={styles.sectionTitle}>Implementation Roadmap</h2>
                <p className={styles.sectionSubtitle}>
                  Progress through these steps over four to six weeks. Measure focus quality, task completion, and subjective motivation as you layer each element.
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
                <h2 className={styles.sectionTitle}>Research & Episode References</h2>
                <p className={styles.sectionSubtitle}>
                  Use these resources to dive deeper, share takeaways with clinicians or educators, and personalize your toolkit.
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
                *Behavioral strategies complement, but do not replace, professional medical guidance. Review medication schedules, supplementation, and cold exposure tolerance with your physician before modifying existing protocols.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
