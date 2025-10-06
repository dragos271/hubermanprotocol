import Header from "../components/Header";
import Footer from "../components/Footer";
import CircadianWheel from "../components/CircadianWheel";
import BodySystemDiagram from "../components/BodySystemDiagram";
import NeurotransmitterBalance from "../components/NeurotransmitterBalance";
import { FadeIn } from "../components/Motion";
import styles from "./page.module.css";

export const metadata = {
  title: "Interactive Science Visualizations - Huberman Protocol",
  description: "Explore how protocols affect your biology in real-time with interactive neuroscience visualizations.",
};

export default function VisualizationsPage() {
  return (
    <div className={styles.page}>
      <Header />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <FadeIn>
            <h1 className={styles.pageTitle}>Interactive Science Visualizations</h1>
            <p className={styles.pageSubtitle}>
              Explore how protocols affect your biology in real-time through interactive neuroscience visualizations.
            </p>
          </FadeIn>
        </section>

        <div className={styles.container}>
          {/* Circadian Rhythm Wheel */}
          <FadeIn delay={0.1}>
            <section className={styles.visualSection}>
              <div className={styles.sectionHeader}>
                <h2>Circadian Rhythm Optimization</h2>
                <p className={styles.sectionDesc}>
                  Follow your natural 24-hour biological clock for optimal performance and recovery.
                </p>
              </div>
              <div className={styles.visualCard}>
                <CircadianWheel />
              </div>
            </section>
          </FadeIn>

          {/* Body Systems Impact */}
          <FadeIn delay={0.2}>
            <section className={styles.visualSection}>
              <div className={styles.sectionHeader}>
                <h2>Protocol Impact on Body Systems</h2>
                <p className={styles.sectionDesc}>
                  Discover how Huberman protocols enhance different organ systems and physiological functions.
                </p>
              </div>
              <div className={styles.visualCard}>
                <BodySystemDiagram />
              </div>
            </section>
          </FadeIn>

          {/* Neurotransmitter Balance */}
          <FadeIn delay={0.3}>
            <section className={styles.visualSection}>
              <div className={styles.sectionHeader}>
                <h2>Neurotransmitter Balance Throughout Day</h2>
                <p className={styles.sectionDesc}>
                  Understand how key brain chemicals fluctuate throughout the day and optimize them with targeted protocols.
                </p>
              </div>
              <div className={styles.visualCardFull}>
                <NeurotransmitterBalance />
              </div>
            </section>
          </FadeIn>


        </div>
      </main>
      
      <Footer />
    </div>
  );
}
