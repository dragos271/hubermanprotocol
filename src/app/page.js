import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Quote from "../app/components/Quote";
import StartProtocolWizard from "../app/components/StartProtocolWizard";
import BlurText from "../app/components/BlurText";
import { FadeIn, FadeInScale } from "../app/components/Motion";
import styles from "./page.module.css";
import DashboardCTA from "./components/DashboardCTA";

export const metadata = {
  title: "Huberman Protocol – Science-Based Systems for Mind & Body",
  description: "Understand the neuroscience-based framework for optimizing sleep, stress, focus, and recovery.",
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="container" style={{ marginTop: '70px' }}>
        {/* HERO */}
        <section className={styles.hero}>
          <FadeIn>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>
                <BlurText
                  text="Science-Based Systems for Peak Performance"
                  delay={120}
                  animateBy="words"
                  direction="top"
                />
              </h1>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className={styles.subtitle}>
              Transform your biology with evidence-based protocols. Optimize sleep, stress, focus, and recovery 
              using neuroscience insights distilled from Huberman Lab episodes and the peer-reviewed studies they reference — no guesswork, just actionable science.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>5</div>
                <div className={styles.statLabel}>Core Pillars</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>200+</div>
                <div className={styles.statLabel}>Episode Insights</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Evidence-Backed Tools</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className={styles.ctas}>
              <StartProtocolWizard
                buttonClassName={styles.buttonPrimary}
                buttonLabel="🚀 Start Your Protocol"
              />
              <DashboardCTA />
              <a href="/visualizations" className={styles.buttonSecondary}>
                <span>🧬 Explore Science</span>
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className={styles.heroTrust}>
              <p>Trusted by biohackers, athletes, and professionals worldwide</p>
            </div>
          </FadeIn>
        </section>

        {/* QUOTE */}
        <Quote />

        {/* FIVE PILLARS */}
        <section id="pillars" className={styles.pillars}>
          <FadeIn><h2>Core Pillars of Human Optimization</h2></FadeIn>
          <div className={styles.grid}>
            {pillars.map((p, idx) => (
              <FadeInScale key={p.title} delay={idx * 0.06}>
                <div className={styles.card}>
                  <div className={styles.icon}>{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul>
                    {p.actions.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                </div>
              </FadeInScale>
            ))}
          </div>
        </section>

        {/* THE SCIENCE */}
        <section className={styles.science}>
          <FadeIn><h2>The Neuroscience Behind the System</h2></FadeIn>
          <FadeIn delay={0.05}>
            <p className={styles.scienceIntro}>
              Your biology follows predictable rhythms. Light, movement, and breath control your hormones. 
              By timing these behaviors correctly, you can optimize performance naturally—no willpower or supplements needed.
            </p>
          </FadeIn>

          <div className={styles.scienceGrid}>
            {science.map((s, i) => (
              <FadeIn key={s.t} delay={i * 0.05}>
                <div className={styles.card}>
                  <h4 style={{ marginTop: 0 }}>{s.t}</h4>
                  <p style={{ color: "var(--muted)" }}>{s.p}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* INTERACTIVE VISUALIZATIONS */}
        <section className={styles.visualizations}>
          <FadeIn><h2>Interactive Science Visualizations</h2></FadeIn>
          <FadeIn delay={0.05}>
            <p className={styles.sectionSubtitle}>
              Explore how protocols affect your biology in real-time with interactive neuroscience tools
            </p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className={styles.visualPreview}>
              <div className={styles.visualPreviewCards}>
                <div className={styles.previewCard}>
                  <div className={styles.previewHeader}>
                    <div className={styles.previewIcon}>🌍</div>
                    <div className={styles.previewBadge}>Real-time</div>
                  </div>
                  <h3>Circadian Rhythm Wheel</h3>
                  <p>Track your optimal daily rhythm and get personalized protocol recommendations based on your current time</p>
                  <div className={styles.previewFeatures}>
                    <span>• Live clock integration</span>
                    <span>• Protocol timing</span>
                    <span>• Sleep optimization</span>
                  </div>
                </div>
                
                <div className={styles.previewCard}>
                  <div className={styles.previewHeader}>
                    <div className={styles.previewIcon}>🧠</div>
                    <div className={styles.previewBadge}>Interactive</div>
                  </div>
                  <h3>Body Systems Map</h3>
                  <p>Discover how Huberman protocols enhance different organ systems and understand the science behind each benefit</p>
                  <div className={styles.previewFeatures}>
                    <span>• 6 key body systems</span>
                    <span>• Protocol benefits</span>
                    <span>• Scientific explanations</span>
                  </div>
                </div>
                
                <div className={styles.previewCard}>
                  <div className={styles.previewHeader}>
                    <div className={styles.previewIcon}>⚡</div>
                    <div className={styles.previewBadge}>Dynamic</div>
                  </div>
                  <h3>Neurotransmitter Balance</h3>
                  <p>Understand how brain chemicals fluctuate throughout the day and optimize them with targeted interventions</p>
                  <div className={styles.previewFeatures}>
                    <span>• 24-hour tracking</span>
                    <span>• Chemical interactions</span>
                    <span>• Optimization tips</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.visualsCTA}>
                <a href="/visualizations" className={styles.buttonPrimaryLarge}>
                  <span>🔬 Explore All Visualizations</span>
                  <span className={styles.buttonArrow}>→</span>
                </a>
                <p className={styles.visualsNote}>
                  Interactive tools to understand and optimize your biology
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        <FadeIn delay={0.35}>
          <p className={styles.researchFootnote}>
            *Episode and study counts draw on Huberman Lab podcast archive (200+ episodes) and referenced peer-reviewed papers. Always consult a qualified professional before changing medical, sleep, or supplementation protocols.
          </p>
        </FadeIn>
      </main>

      <Footer />
    </>
  );
}

const pillars = [
  { title: "Sleep", icon: "🌙", desc: "Anchor circadian rhythm and improve recovery.", actions: ["Morning light exposure", "Caffeine cutoff", "NSDR or nap"] },
  { title: "Stress", icon: "💨", desc: "Regulate your autonomic nervous system.", actions: ["Physiological sigh", "Cold exposure", "Evening calm routine"] },
  { title: "Focus", icon: "🧠", desc: "Control dopamine and attention through structured effort & rest.", actions: ["90/20 deep-work cycles", "NSDR after intense focus", "Caffeine timing"] },
  { title: "Recovery", icon: "🧘", desc: "Reset your nervous system and build resilience.", actions: ["NSDR", "Breathwork", "Sleep hygiene"] },
  { title: "Nutrition & Movement", icon: "🥗", desc: "Fuel mitochondria and stabilize energy.", actions: ["Protein-rich meals", "Zone-2 cardio", "Post-meal walks"] },
];

const science = [
  { t: "🔆 Light & Circadian Rhythm", p: "Morning sunlight activates ipRGCs, anchoring the SCN and regulating cortisol & melatonin." },
  { t: "💨 Breath & State Control", p: "Physiological sighs modulate CO₂ and vagal tone, shifting you from stress to calm." },
  { t: "🧘 Recovery & Learning", p: "NSDR restores dopamine and accelerates learning via parasympathetic activation." },
];
