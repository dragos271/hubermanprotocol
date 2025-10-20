import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Light Exposure & Circadian Rhythm – Huberman Protocol",
  description:
    "Use strategic light timing to align your circadian clock for better sleep, energy, and mood.",
};

const heroStats = [
  { value: "10k+", label: "Lux Morning Target" },
  { value: "1-2", label: "Hours Shiftable/Day" },
  { value: "3-7", label: "Days to Reset" },
];

const lightProtocols = [
  {
    icon: "🌅",
    timing: "Within 60 min wake",
    title: "Morning Light",
    description:
      "Trigger cortisol pulse and anchor circadian rhythm with bright outdoor light.",
    actions: [
      "10–30 minutes outside facing sun",
      "Skip sunglasses and windows if safe",
      "Extend to 30–60 minutes on cloudy days",
      "Pair with light movement",
    ],
    science:
      "ipRGCs signal the SCN, setting your 24-hour clock and influencing nighttime melatonin.",
  },
  {
    icon: "☀️",
    timing: "Late afternoon",
    title: "Afternoon Top-Up",
    description:
      "A second bout reinforces circadian amplitude and offsets delayed bedtime cravings.",
    actions: [
      "Spend 10–20 minutes outdoors",
      "Aim for low-angle sun (4–6 p.m.)",
      "Combine with walk or workout",
      "Helps shift workers maintain rhythm",
    ],
    science:
      "Late-day light nudges the clock forward, improving sleep timing and mood.",
  },
  {
    icon: "🌙",
    timing: "2-3 h pre-bed",
    title: "Evening Dimness",
    description: "Reduce blue light to protect melatonin and sleep architecture.",
    actions: [
      "Dim lights to <50% intensity",
      "Switch to warm, red-tinted bulbs",
      "Use night-shift on devices or blue blockers",
      "Keep bedroom dark (mask/curtains)",
    ],
    science:
      "Blue wavelengths suppress melatonin for hours, fragmenting deep and REM sleep.",
  },
  {
    icon: "💡",
    timing: "Shift work",
    title: "Light Therapy",
    description: "Leverage artificial light to shift circadian phase when schedules rotate.",
    actions: [
      "Use 10,000 lux light box during desired alert period",
      "Wear blue-blocking glasses before desired sleep",
      "Maintain strict dark window for sleep",
      "Shift exposure gradually over days",
    ],
    science:
      "Controlled light can shift circadian phase 1–2 hours per day—most potent non-pharma tool.",
  },
  {
    icon: "🍂",
    timing: "Winter",
    title: "Seasonal Adaptation",
    description: "Increase light dose during darker months to prevent mood dips.",
    actions: [
      "Extend morning exposure to 30–40 minutes",
      "Use light therapy box (10,000 lux) for 20–30 minutes",
      "Combine with outdoor time when possible",
      "Maintain consistent schedule on weekends",
    ],
    science:
      "Light therapy rivals antidepressants for seasonal affective disorder by normalizing circadian amplitude.",
  },
  {
    icon: "✈️",
    timing: "Travel",
    title: "Jet Lag Strategy",
    description: "Use timed light to align with destination quickly.",
    actions: [
      "Pre-shift schedule 2–3 days before trip",
      "Seek destination morning light immediately",
      "Avoid light during destination night (glasses/eye mask)",
      "Pair with low-dose melatonin if approved",
    ],
    science:
      "Strategic light reduces jet lag recovery from ~1 day per time zone to a couple of days.",
  },
];

const lightSources = [
  {
    name: "Natural Sunlight",
    intensity: "10,000–100,000+ lux",
    benefits: "Full spectrum, vitamin D, free",
    considerations: "Weather dependent, UV exposure",
  },
  {
    name: "Light Therapy Box",
    intensity: "10,000 lux",
    benefits: "Consistent, controllable",
    considerations: "Cost, requires positioning 16–24 in. from face",
  },
  {
    name: "Dawn Simulator",
    intensity: "100–300 lux",
    benefits: "Gentle wake, circadian cue",
    considerations: "Low intensity—pair with morning outdoor light",
  },
  {
    name: "Red Light",
    intensity: "Variable",
    benefits: "Minimal circadian disruption",
    considerations: "Limited clock-shifting power",
  },
];

const disruptors = [
  {
    title: "Blue Light at Night",
    impact: "Suppresses melatonin for 2–3 hours",
    solutions: [
      "Use blue blockers in evening",
      "Install f.lux/Night Shift",
      "Switch to warm lamps",
      "Reserve red light for late tasks",
    ],
  },
  {
    title: "Irregular Sleep Schedule",
    impact: "Weakens circadian amplitude",
    solutions: [
      "Stick to ±30 minute schedule",
      "Use morning light to reinforce timing",
      "Reduce weekend social jet lag",
      "Shift gradually if change needed",
    ],
  },
  {
    title: "Insufficient Morning Light",
    impact: "Delays sleep onset, lowers energy",
    solutions: [
      "Prioritize outdoor light within an hour of waking",
      "Use light box when sun unavailable",
      "Combine with morning exercise",
      "Avoid sunglasses during exposure",
    ],
  },
];

export default function LightCircadianPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="☀️"
          title="Light"
          accent="Circadian"
          subtitle="Align your biology with the sun using light timing, dimming, and therapy protocols."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Circadian Basics</h2>
                <p className={styles.sectionSubtitle}>
                  Light is the master zeitgeber for the suprachiasmatic nucleus. Morning photons set the clock, while evening darkness protects melatonin and sleep.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Build a light routine: bright mornings, reinforcing afternoon exposure, and dim evenings. If schedules shift, leverage light therapy boxes and blue blockers to move your internal clock deliberately.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Light Protocols</h2>
              </div>
              <div className={styles.protocolsGrid}>
                {lightProtocols.map((protocol, index) => (
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
                <h2 className={styles.sectionTitle}>Light Source Toolkit</h2>
                <p className={styles.sectionSubtitle}>
                  Mix natural and artificial sources to meet light targets year-round.
                </p>
              </div>
              <div className={styles.resourceList}>
                {lightSources.map((source) => (
                  <div key={source.name} className={styles.resourceItem}>
                    <strong>{source.name}</strong>
                    <span>Intensity: {source.intensity}</span>
                    <span>Benefits: {source.benefits}</span>
                    <span>Considerations: {source.considerations}</span>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Common Disruptors</h2>
              </div>
              <div className={styles.protocolsGrid}>
                {disruptors.map((disruptor, index) => (
                  <FadeInScale key={disruptor.title} delay={index * 0.05}>
                    <article className={styles.protocolCard}>
                      <h3>{disruptor.title}</h3>
                      <p className={styles.protocolDescription}>{disruptor.impact}</p>
                      <div className={styles.protocolActions}>
                        <h4>Solutions</h4>
                        <ul>
                          {disruptor.solutions.map((solution) => (
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
                <h2 className={styles.sectionTitle}>Implementation Roadmap</h2>
              </div>
              <div className={styles.implementationSteps}>
                {[
                  {
                    title: "Anchor Mornings",
                    text: "Prioritize morning outdoor light every day—this is the cornerstone.",
                  },
                  {
                    title: "Dim Evenings",
                    text: "Install warm lights and night modes; schedule screens earlier in the day.",
                  },
                  {
                    title: "Add Afternoon Dose",
                    text: "Layer a second outdoor session to reinforce rhythm and mood.",
                  },
                  {
                    title: "Use Therapy Tools",
                    text: "Deploy light boxes or blue blockers when schedules or seasons demand.",
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
                *Lux targets and timelines draw on Huberman Lab light toolkits and Stanford circadian research. Consult your clinician when using light therapy for mood or sleep disorders.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
