import Header from "../components/Header";
import Footer from "../components/Footer";
import CountdownTimer from "../components/CountdownTimer";
import CaffeineQuickCalc from "../components/CaffeineQuickCalc";
import BreathingTool from "../components/BreathingTool";
import NSDRPlaylist from "../components/NSDRPlaylist";
import DailyChecklist from "../components/DailyChecklist";
import Reminders from "../components/Reminders";
import { FadeIn } from "../components/Motion";
import styles from "../sleep/page.module.css"; // Use shared beautiful styles

/**
 * /daily = Guided day: Morning → Midday → Evening
 * - Morning: light timer + optional walk + sleep planning
 * - Midday: NSDR playlist + walk reminder
 * - Evening: caffeine cutoff check + dim lights + breathing
 * Includes DailyChecklist + optional Reminders.
 */

export const metadata = {
  title: "Daily Neuroscience System",
  description: "Guided, science-based day planner using Huberman protocols.",
};

export default function DailyPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className={styles.pageWrap}>
          {/* HERO */}
          <section className={styles.hero}>
            <FadeIn>
              <h1 className={styles.pageTitle}>Daily Neuroscience System</h1>
              <p className={styles.pageSubtitle}>
                A guided, science-based day planner. Follow the flow: Morning → Midday → Evening. 
                Do the steps, feel the change.
              </p>
            </FadeIn>
          </section>

          {/* MORNING SECTION */}
          <FadeIn delay={0.1}>
            <section className={styles.section}>
              <h2>🌅 Morning Protocol</h2>
              <p className={styles.sectionDesc}>Set your circadian rhythm and prime your nervous system for the day.</p>
              
              <div className={styles.phasesGrid}>
                <div className={styles.phaseCard}>
                  <h3>☀️ Light Exposure</h3>
                  <p className={styles.sectionDesc}>Morning light anchors your circadian rhythm via the suprachiasmatic nucleus (SCN).</p>
                  <CountdownTimer minutes={10} label="Morning light timer" />
                </div>
                
                <div className={styles.phaseCard}>
                  <h3>☕ Caffeine Timing</h3>
                  <p className={styles.sectionDesc}>Calculate optimal caffeine cutoff and sleep windows based on your wake time.</p>
                  <CaffeineQuickCalc />
                </div>
              </div>
            </section>
          </FadeIn>

          {/* MIDDAY SECTION */}
          <FadeIn delay={0.2}>
            <section className={styles.section}>
              <h2>🧘 Midday Recovery</h2>
              <p className={styles.sectionDesc}>Restore dopamine levels and reduce stress reactivity with non-sleep deep rest.</p>
              
              <div className={styles.toolSection}>
                <h3>NSDR / Yoga Nidra</h3>
                <p className={styles.sectionDesc}>
                  Use 10–30 minute sessions to restore dopamine baseline and enhance neuroplasticity.
                </p>
                <NSDRPlaylist />
              </div>

              <div className={styles.tipsGrid}>
                <div className={styles.tipCard}>
                  <span className={styles.tipIcon}>🚶</span>
                  <p><strong>Post-meal walks:</strong> 10–15 minutes after eating improves glucose control and aids digestion.</p>
                </div>
                <div className={styles.tipCard}>
                  <span className={styles.tipIcon}>💧</span>
                  <p><strong>Hydration check:</strong> Aim for clear or light yellow urine. Add electrolytes if sweating.</p>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* EVENING SECTION */}
          <FadeIn delay={0.3}>
            <section className={styles.section}>
              <h2>🌙 Evening Wind-Down</h2>
              <p className={styles.sectionDesc}>Prepare your nervous system for restorative sleep and recovery.</p>
              
              <div className={styles.toolSection}>
                <h3>Stress Relief Tool</h3>
                <p className={styles.sectionDesc}>
                  Use physiological sighs to shift from sympathetic to parasympathetic nervous system dominance.
                </p>
                <BreathingTool />
              </div>

              <div className={styles.phasesGrid}>
                <div className={styles.phaseCard}>
                  <h3>🌅 Light Management</h3>
                  <ul>
                    <li>Dim lights 90 minutes before bed</li>
                    <li>Avoid bright screens (use blue light blocking)</li>
                    <li>Use warm, dim lighting only</li>
                    <li>Consider red light for evening activities</li>
                  </ul>
                </div>
                
                <div className={styles.phaseCard}>
                  <h3>🛌 Sleep Environment</h3>
                  <ul>
                    <li>Cool room temperature (65-68°F / 18-20°C)</li>
                    <li>Complete darkness or eye mask</li>
                    <li>Quiet environment or white noise</li>
                    <li>Phone in airplane mode or another room</li>
                  </ul>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* DAILY TRACKING */}
          <FadeIn delay={0.4}>
            <DailyChecklist />
          </FadeIn>

          <FadeIn delay={0.5}>
            <Reminders />
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
