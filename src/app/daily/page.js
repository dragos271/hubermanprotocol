import { FadeIn } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CountdownTimer from "../components/CountdownTimer";
import CaffeineQuickCalc from "../components/CaffeineQuickCalc";
import BreathingTool from "../components/BreathingTool";
import NSDRPlaylist from "../components/NSDRPlaylist";
import DailyChecklist from "../components/DailyChecklist";
import Reminders from "../components/Reminders";
import styles from "./page.module.css";

export const metadata = {
  title: "Daily Protocols - Huberman Protocol",
  description: "Interactive daily neuroscience tools and timers for optimal health and performance.",
};

export default function DailyPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className={styles.wrap}>
          <FadeIn>
            <h1 className={styles.title}>Daily Neuroscience System</h1>
            <p className={styles.sub}>
              Essential tools and timers to optimize your cognitive performance and stress management throughout the day.
            </p>
          </FadeIn>

          {/* MAIN TOOLS - Two Column Layout */}
          <FadeIn delay={0.05}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              {/* MORNING TOOLS */}
              <div className={styles.card}>
                <h3>🌅 Morning Tools</h3>
                <div className={styles.section}>
                  <div>
                    <h4>Focus Timer</h4>
                    <p className={styles.note}>90-minute deep work blocks</p>
                    <CountdownTimer minutes={90} label="Focus Block" />
                  </div>
                  
                  <hr className={styles.div} />
                  
                  <div>
                    <h4>Caffeine Calculator</h4>
                    <p className={styles.note}>Optimize timing for better sleep</p>
                    <CaffeineQuickCalc />
                  </div>
                </div>
              </div>

              {/* MIDDAY TOOLS */}
              <div className={styles.card}>
                <h3>☀️ Midday Tools</h3>
                <div className={styles.section}>
                  <div id="stress">
                    <h4>Stress Regulation</h4>
                    <p className={styles.note}>Physiological sighs and breathwork</p>
                    <BreathingTool />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* NSDR AUDIO LIBRARY - Full Width */}
          <FadeIn delay={0.1}>
            <div className={styles.card} id="nsdr" style={{ marginBottom: '32px' }}>
              <h3>🎧 NSDR Audio Library</h3>
              <p className={styles.note}>Guided sessions for deep rest and recovery</p>
              <NSDRPlaylist />
            </div>
          </FadeIn>

          {/* TRACKING TOOLS - Three Column Grid */}
          <FadeIn delay={0.15}>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>✅ Daily Checklist</h3>
                <p className={styles.note}>Track your key protocols</p>
                <DailyChecklist />
              </div>

              <div className={styles.card}>
                <h3>🔔 Smart Reminders</h3>
                <p className={styles.note}>Gentle nudges for optimal timing</p>
                <Reminders />
              </div>

              <div className={styles.card} id="sleep">
                <h3>📊 Sleep Optimization</h3>
                <p className={styles.note}>Advanced sleep timing tools</p>
                <div style={{ 
                  marginTop: '16px', 
                  padding: '16px', 
                  background: 'rgba(255,255,255,0.02)', 
                  borderRadius: '8px', 
                  border: '1px solid var(--border)' 
                }}>
                  <p style={{ 
                    margin: '0 0 12px', 
                    fontSize: '14px', 
                    color: 'var(--muted)', 
                    lineHeight: '1.4' 
                  }}>
                    Get personalized sleep and caffeine timing recommendations.
                  </p>
                  <a 
                    href="/sleep" 
                    style={{ 
                      padding: '8px 16px', 
                      background: 'var(--accent)', 
                      color: 'white', 
                      textDecoration: 'none', 
                      borderRadius: '6px', 
                      fontSize: '14px',
                      display: 'inline-block',
                      transition: 'opacity 0.2s'
                    }}
                  >
                    Advanced Tools →
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* USAGE TIPS */}
          <FadeIn delay={0.2}>
            <div className={styles.card} style={{ marginTop: '24px' }}>
              <h3>💡 Quick Start Guide</h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px', 
                fontSize: '14px', 
                color: 'var(--muted)',
                marginTop: '16px'
              }}>
                <div style={{ 
                  padding: '12px', 
                  background: 'rgba(255,255,255,0.02)', 
                  borderRadius: '8px',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{ color: 'var(--text)', fontWeight: '600', marginBottom: '8px' }}>🌅 Morning</div>
                  <div>Start with light exposure, then use focus timer for your most important work. Calculate caffeine timing early.</div>
                </div>
                <div style={{ 
                  padding: '12px', 
                  background: 'rgba(255,255,255,0.02)', 
                  borderRadius: '8px',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{ color: 'var(--text)', fontWeight: '600', marginBottom: '8px' }}>☀️ Midday</div>
                  <div>Use breathing tools for stress regulation. Take NSDR sessions for recovery and dopamine restoration.</div>
                </div>
                <div style={{ 
                  padding: '12px', 
                  background: 'rgba(255,255,255,0.02)', 
                  borderRadius: '8px',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{ color: 'var(--text)', fontWeight: '600', marginBottom: '8px' }}>📊 Daily</div>
                  <div>Check off protocols and set reminders to maintain consistency. Track your progress over time.</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
