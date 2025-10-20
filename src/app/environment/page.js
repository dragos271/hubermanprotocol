import { FadeIn, FadeInScale } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "../styles/topicDetail.module.css";

export const metadata = {
  title: "Optimizing Your Environment – Huberman Protocol",
  description:
    "Design home and work spaces that support light, temperature, air quality, and focus as recommended by Huberman Lab.",
};

const heroStats = [
  { value: "2", label: "Sun Anchors" },
  { value: "18-20°C", label: "Sleep Temp" },
  { value: "500 lux", label: "Daylight Goal" },
];

const protocols = [
  {
    icon: "💡",
    timing: "Light",
    title: "Circadian Lighting",
    description:
      "Bright, blue-rich light in the morning; dim, warm light at night. Use smart bulbs or light boxes when needed.",
    actions: [
      "Expose to 500–10,000 lux early day (sunlight > artificial)",
      "Position desk near window; use daylight lamps when dark",
      "Switch to warm (<2,700K) bulbs after sunset",
    ],
    science:
      "ipRGC cells respond to blue light to set circadian rhythm. Evening darkness maintains melatonin.",
  },
  {
    icon: "🌬️",
    timing: "Air",
    title: "Air Quality & CO₂",
    description:
      "Use HEPA filtration, keep CO₂ below 1,000 ppm, and add plants for humidity control.",
    actions: [
      "Keep windows cracked; use CO₂ monitor in offices",
      "Run HEPA filter for allergens and wildfire smoke",
      "Include plants like snake plant or pothos",
    ],
    science:
      "High CO₂ impairs cognition; clean air supports immunity and focus.",
  },
  {
    icon: "🎧",
    timing: "Focus",
    title: "Noise & Visual Cues",
    description:
      "Control clutter and noise. Use noise-canceling headphones or brown noise to maintain focus.",
    actions: [
      "Keep desk minimal—only active project items",
      "Use brown noise, binaural beats, or earplugs",
      "Reserve relaxing cues (couch, bed) for recovery only",
    ],
    science:
      "Environmental cues drive habit loops. Clean, dedicated spaces reduce distractions and decision fatigue.",
  },
  {
    icon: "🌡️",
    timing: "Temperature",
    title: "Thermal Zones",
    description:
      "Set work zone slightly cooler (19–22°C) to stay alert; keep bedroom cooler (18–20°C) at night.",
    actions: [
      "Use fans or personal heaters to fine-tune",
      "Warm shower before bed then cool room",
      "Keep weighted blanket or layer options by couch",
    ],
    science:
      "Body temperature modulates alertness and sleep onset. Slight coolness during work boosts catecholamines; cooler nights aid sleep.",
  },
];

const steps = [
  {
    title: "Audit Spaces",
    text: "Walk through home/work noting light exposure, clutter, noise, and air quality.",
  },
  {
    title: "Anchor Light & Temperature",
    text: "Install daylight bulbs, block blue at night, and set thermostats accordingly.",
  },
  {
    title: "Curate Focus Zone",
    text: "Create a distraction-free workspace with essential tools only. Add soundscape that supports focus.",
  },
  {
    title: "Refresh Quarterly",
    text: "Declutter, rotate art or plants, and reassess ergonomics and air quality.",
  },
];

const resources = [
  {
    title: "Huberman Lab #36",
    detail: "Optimize light, temperature, and sound for focus and sleep.",
  },
  {
    title: "CO₂ Monitors",
    detail: "Aranet4 or similar devices to track indoor air quality.",
  },
  {
    title: "Ergonomics Guide",
    detail: "Neutral spine, monitor height, and chair setup for long work sessions.",
  },
];

export default function EnvironmentPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="🏠"
          title="Environment"
          accent="Design"
          subtitle="Shape your spaces to drive focus by day and recovery at night."
          stats={heroStats}
        >
          <FadeIn>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Spaces Shape Behavior</h2>
                <p className={styles.sectionSubtitle}>
                  Huberman emphasizes that light, temperature, and visual cues dictate our physiological state. Control them and habits follow.
                </p>
              </div>
              <div className={styles.sectionBody}>
                <p>
                  Start with light: bright mornings, dim evenings. Then tune air, sound, and temperature. Remove clutter to reduce cognitive load and keep different environments for work vs. rest.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Environment Protocols</h2>
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
                <h2 className={styles.sectionTitle}>Tools & Support</h2>
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
                *Address mold, severe allergen, or carbon monoxide risks with certified professionals.
              </p>
            </section>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
