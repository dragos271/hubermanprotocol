import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Focus & Concentration – Huberman Protocol",
  description:
    "Engineer peak focus with neuroscience-based work cycles, state resets, and nutrition timing from Huberman Lab.",
};

const heroStats = [
  { value: "40-60%", label: "Longer Focus Windows*" },
  { value: "90/20", label: "Work/Rest Cadence" },
  { value: "2", label: "Daily Deep Blocks" },
];

const focusProtocols = [
  {
    icon: "⏱️",
    timing: "Throughout workday",
    title: "90/20 Ultradian Cycles",
    description: "Align effort with natural alertness rhythms for sustained cognition.",
    actions: [
      "Work in 90-minute blocks with 20-minute recovery",
      "Begin blocks with 1–2 min of deliberate breathing",
      "Clear distractions (notifications, clutter)",
      "Schedule hardest tasks during peak alertness",
    ],
    science:
      "The brain alternates 90-minute ultradian peaks and troughs—working with them preserves focus and prevents burnout.",
  },
  {
    icon: "🫁",
    timing: "As needed",
    title: "Physiological Sigh",
    description: "Rapidly downshift stress to regain calm focus mid-session.",
    actions: [
      "Inhale deeply through nose",
      "Take quick second inhale",
      "Long exhale through mouth",
      "Repeat 1–3 times",
    ],
    science:
      "Double inhale + long exhale activates parasympathetic circuits within breaths, resettings arousal state.",
  },
  {
    icon: "👁️",
    timing: "5-10 min daily",
    title: "Visual Focus Training",
    description: "Strengthen attention networks by training gaze stability and vergence.",
    actions: [
      "Fixate on small target for 1–3 minutes",
      "Alternate focus between close/distant objects",
      "Practice before major cognitive tasks",
      "Avoid multitasking during drills",
    ],
    science:
      "Visual and cognitive attention share neural pathways; training one reinforces the other.",
  },
  {
    icon: "🚿",
    timing: "Morning / pre-focus",
    title: "Cold Alertness Protocol",
    description: "Use 1–3 minutes of cold exposure to boost dopamine and motivation for hours.",
    actions: [
      "Cold shower finisher (50–60°F) or face dunk",
      "Control breathing—slow exhale",
      "Limit to 2–3 sessions per week",
      "Avoid immediately post-strength training",
    ],
    science:
      "Cold increases dopamine up to 250% for sustained periods, powering motivation and focus.",
  },
  {
    icon: "🚶",
    timing: "Between blocks",
    title: "Movement Resets",
    description: "Use deliberate walks and cross-lateral movement to boost BDNF and reset attention.",
    actions: [
      "Walk 5–10 minutes outdoors",
      "Include cross-body patterns or balance drills",
      "Avoid screens during breaks",
      "Hydrate lightly",
    ],
    science:
      "Movement elevates BDNF, refreshing prefrontal circuits and promoting neuroplasticity.",
  },
  {
    icon: "🍽️",
    timing: "Throughout day",
    title: "Nutrition Timing",
    description: "Support focus by timing meals and stimulants intelligently.",
    actions: [
      "Fast or eat lightly during deep work windows",
      "Prioritize tyrosine-rich foods (eggs, almonds)",
      "Delay caffeine 90 minutes after waking",
      "Stay hydrated without overdoing water",
    ],
    science:
      "Digestion competes for resources; tyrosine supplies dopamine precursors essential for attention.",
  },
];

const focusSupplements = [
  {
    name: "Alpha-GPC",
    dosage: "300–600 mg",
    timing: "30 min before work",
    mechanism: "Boosts acetylcholine for learning and focus",
    evidence: "Shown to improve attention and memory formation in clinical studies.",
  },
  {
    name: "Rhodiola Rosea",
    dosage: "100–200 mg",
    timing: "Morning empty stomach",
    mechanism: "Adaptogen reducing fatigue and stress",
    evidence: "Research supports vigilance under stress and cognitive endurance.",
  },
  {
    name: "L-theanine + Caffeine",
    dosage: "200 mg theanine + 100 mg caffeine",
    timing: "30–60 min pre-focus",
    mechanism: "Balances alertness with calm",
    evidence: "Synergistic combo increases focus without jitters.",
  },
  {
    name: "Lion's Mane",
    dosage: "500–1,000 mg",
    timing: "Daily with food",
    mechanism: "Supports nerve growth factor",
    evidence: "Early research suggests cognitive benefits with consistent use.",
  },
];

const distractionTypes = [
  {
    title: "Internal",
    description: "Mind wandering, anxiety, physical discomfort",
    solutions: [
      "Use physiological sigh before/during blocks",
      "Practice ‘noting’ meditation to reset focus",
      "Address hunger, posture, hydration before starting",
      "Set clear intention for each session",
    ],
  },
  {
    title: "External",
    description: "Noise, notifications, visual clutter",
    solutions: [
      "Disable notifications, set status to do-not-disturb",
      "Use noise-canceling headphones or brown noise",
      "Clear workspace of unrelated items",
      "Communicate focus schedule to others",
    ],
  },
  {
    title: "Digital",
    description: "Social media, email, random browsing",
    solutions: [
      "Use site/app blockers during blocks",
      "Keep phone in another room",
      "Use single-purpose devices for deep work",
      "Batch email/social media at planned times",
    ],
  },
];

export default function FocusConcentrationPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="🎯"
          title="Focus"
          accent="Concentration"
          subtitle="Pair deliberate work cycles with state resets, movement, and nutrition to sustain deep focus."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Focus = Effort + Recovery</h2>
                <p className={styles.sectionSubtitle}>
                  High output requires cycling between intense effort, deliberate rest, and strategic dopamine resets. Work with your biology instead of against it.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Huberman emphasizes matching work blocks to ultradian rhythms, resetting state with breath and movement, and fueling selectively. Build these loops for predictable focus on demand.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Focus Protocols</h2>
              </div>
              <div className={styles.protocolsGrid}>
                {focusProtocols.map((protocol, index) => (
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
                <h2 className={styles.sectionTitle}>Supporting Supplements</h2>
                <p className={styles.sectionSubtitle}>
                  Introduce only after behavioral protocols. Monitor response and consult your clinician.
                </p>
              </div>
              <div className={styles.resourceList}>
                {focusSupplements.map((supplement) => (
                  <div key={supplement.name} className={styles.resourceItem}>
                    <strong>{supplement.name}</strong>
                    <span>Dosage: {supplement.dosage}</span>
                    <span>Timing: {supplement.timing}</span>
                    <span>Mechanism: {supplement.mechanism}</span>
                    <span>Evidence: {supplement.evidence}</span>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Distraction Playbook</h2>
              </div>
              <div className={styles.protocolsGrid}>
                {distractionTypes.map((type, index) => (
                  <FadeInScale key={type.title} delay={index * 0.05}>
                    <article className={styles.protocolCard}>
                      <h3>{type.title}</h3>
                      <p className={styles.protocolDescription}>{type.description}</p>
                      <div className={styles.protocolActions}>
                        <h4>Solutions</h4>
                        <ul>
                          {type.solutions.map((solution) => (
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
                <h2 className={styles.sectionTitle}>Implementation Timeline</h2>
              </div>
              <div className={styles.implementationSteps}>
                {[
                  {
                    title: "Audit Dopamine",
                    text: "Identify high/low-quality sources. Reduce passive hits, increase effort-based rewards.",
                  },
                  {
                    title: "Install Morning Primers",
                    text: "Sunlight, movement, and priority setting before screens.",
                  },
                  {
                    title: "Layer Protocols",
                    text: "Adopt 90/20 cadence, breath resets, and movement between blocks.",
                  },
                  {
                    title: "Review Weekly",
                    text: "Track focus metrics, adjust nutrition/caffeine, and celebrate wins.",
                  },
                ].map((step, index) => (
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
                *Productivity gains based on aggregated studies shared in Huberman Lab. For ADHD or anxiety, pair these tools with clinical support.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
