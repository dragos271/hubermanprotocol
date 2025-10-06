import { FadeIn } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Mental Health - Huberman Protocol",
  description: "Evidence-based protocols for mood, stress resilience, and mental wellbeing using neuroscience principles.",
};

export default function MentalHealthPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className={styles.pageWrap}>
          {/* HERO SECTION */}
          <section className={styles.hero}>
            <FadeIn>
              <div className={styles.heroContent}>
                <div className={styles.heroIcon}>🧘‍♂️</div>
                <h1 className={styles.title}>
                  Mental <span className={styles.titleGradient}>Health</span>
                </h1>
                <p className={styles.subtitle}>
                  Build resilience, regulate mood, and optimize mental wellbeing through 
                  science-based protocols that work with your brain&apos;s natural mechanisms.
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>40%</div>
                    <div className={styles.statLabel}>Stress Reduction</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>6</div>
                    <div className={styles.statLabel}>Core Protocols</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>24/7</div>
                    <div className={styles.statLabel}>State Control</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* SCIENCE SECTION */}
          <FadeIn delay={0.1}>
            <section className={styles.scienceSection}>
              <h2>The Neuroscience of Mental Health</h2>
              <p className={styles.scienceText}>
                Mental health is fundamentally about the balance of neurotransmitters and the regulation 
                of your nervous system. By understanding how dopamine, serotonin, GABA, and stress hormones 
                work, you can use specific behavioral tools to shift your mental state, build resilience, 
                and maintain emotional equilibrium through both challenging and positive life experiences.
              </p>
            </section>
          </FadeIn>

          {/* MENTAL HEALTH PROTOCOLS */}
          <FadeIn delay={0.15}>
            <section className={styles.protocolsSection}>
              <h2>Core Mental Health Protocols</h2>
              <p className={styles.sectionSubtitle}>
                Six foundational approaches to mental wellness backed by neuroscience research
              </p>
              
              <div className={styles.protocolsGrid}>
                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>☀️</div>
                    <div className={styles.protocolTiming}>Morning</div>
                  </div>
                  <h3>Morning Light Exposure</h3>
                  <p className={styles.protocolDescription}>
                    Morning sunlight exposure within 30-60 minutes of waking anchors your circadian 
                    rhythm and triggers healthy cortisol release, setting the foundation for stable mood.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>10-30 minutes outdoor light exposure</li>
                      <li>Face east toward sunrise when possible</li>
                      <li>No sunglasses during light exposure</li>
                      <li>Combine with gentle movement or walking</li>
                      <li>Use bright light therapy if indoors (10,000 lux)</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>Light activates ipRGCs in the retina, triggering proper cortisol timing and serotonin production pathways.</p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>💨</div>
                    <div className={styles.protocolTiming}>As Needed</div>
                  </div>
                  <h3>Physiological Sighs</h3>
                  <p className={styles.protocolDescription}>
                    Double inhale followed by extended exhale is the fastest way to shift from stress 
                    to calm by directly influencing your autonomic nervous system.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>Two sharp inhales through nose</li>
                      <li>Long, slow exhale through mouth</li>
                      <li>Repeat 1-3 times when stressed</li>
                      <li>Use before challenging situations</li>
                      <li>Practice during emotional overwhelm</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>Activates parasympathetic nervous system, reducing heart rate and stress hormone release within seconds.</p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>🏃‍♂️</div>
                    <div className={styles.protocolTiming}>Daily</div>
                  </div>
                  <h3>Regular Exercise</h3>
                  <p className={styles.protocolDescription}>
                    Physical movement is more effective than antidepressants for mild-moderate depression 
                    and provides lasting improvements in mood and stress resilience.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>150 minutes moderate exercise per week</li>
                      <li>Zone 2 cardio (conversational pace)</li>
                      <li>2-3 strength training sessions</li>
                      <li>Daily walks, especially outdoors</li>
                      <li>High-intensity intervals 1-2x per week</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>Increases BDNF, endorphins, and dopamine while reducing inflammation and cortisol levels.</p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>🙏</div>
                    <div className={styles.protocolTiming}>Evening</div>
                  </div>
                  <h3>Gratitude Practice</h3>
                  <p className={styles.protocolDescription}>
                    Specific gratitude protocols physically rewire the brain for positive bias and 
                    increase overall life satisfaction and resilience to stress.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>Write 3 specific things you&apos;re grateful for</li>
                      <li>Include why you&apos;re grateful (not just what)</li>
                      <li>Focus on people and relationships</li>
                      <li>Practice for 1-3 minutes daily</li>
                      <li>Share gratitude with others weekly</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>Activates prefrontal cortex networks associated with positive emotion and increases serotonin activity.</p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>❄️</div>
                    <div className={styles.protocolTiming}>Weekly</div>
                  </div>
                  <h3>Cold Exposure</h3>
                  <p className={styles.protocolDescription}>
                    Deliberate cold exposure builds stress resilience, increases dopamine, and provides 
                    lasting improvements in mood and mental toughness.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>11 minutes total cold exposure per week</li>
                      <li>50-60°F water temperature</li>
                      <li>2-4 sessions of 2-5 minutes each</li>
                      <li>Focus on controlled breathing</li>
                      <li>Progressive adaptation over weeks</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>Increases norepinephrine and dopamine, building resilience pathways and stress inoculation.</p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>🧘</div>
                    <div className={styles.protocolTiming}>Daily</div>
                  </div>
                  <h3>NSDR & Meditation</h3>
                  <p className={styles.protocolDescription}>
                    Non-sleep deep rest and meditation practices reset dopamine, reduce anxiety, and 
                    build the capacity for present-moment awareness and emotional regulation.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>10-30 minute NSDR sessions</li>
                      <li>Yoga Nidra or body scan practices</li>
                      <li>Mindfulness meditation 5-20 minutes</li>
                      <li>Focus on breath awareness</li>
                      <li>Progressive muscle relaxation</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>Activates default mode network, restores dopamine baseline, and strengthens prefrontal control.</p>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* MENTAL HEALTH SUPPLEMENTS */}
          <FadeIn delay={0.2}>
            <section className={styles.supplementsSection}>
              <h2>Mental Health Support Tools</h2>
              <p className={styles.sectionSubtitle}>
                Evidence-based supplements that support mood and mental resilience
              </p>
              
              <div className={styles.supplementsGrid}>
                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>Omega-3 (EPA)</h3>
                    <div className={styles.supplementDosage}>1-2g</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> Daily with meals
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> Reduces neuroinflammation and supports healthy neurotransmitter function, particularly for mood regulation.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Multiple studies show effectiveness for depression, especially EPA-dominant formulations.
                  </div>
                </div>

                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>Magnesium Glycinate</h3>
                    <div className={styles.supplementDosage}>200-400mg</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> Evening, 30-60 minutes before bed
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> Supports GABA function and nervous system relaxation, reducing anxiety and promoting calm.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Shown to reduce anxiety, improve sleep quality, and support stress resilience.
                  </div>
                </div>

                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>Ashwagandha</h3>
                    <div className={styles.supplementDosage}>300-600mg</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> Daily, preferably with meals
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> Adaptogenic herb that reduces cortisol levels and supports healthy stress response.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Clinical trials show 25-30% reduction in cortisol and significant anxiety reduction.
                  </div>
                </div>

                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>L-Theanine</h3>
                    <div className={styles.supplementDosage}>100-400mg</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> As needed for anxiety, or 30 minutes before stressful events
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> Increases alpha brain waves and GABA activity, promoting calm alertness without sedation.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Reduces anxiety within 30-60 minutes while maintaining cognitive performance.
                  </div>
                </div>

                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>Inositol</h3>
                    <div className={styles.supplementDosage}>900-18,000mg</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> Daily, divided doses with meals
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> Supports serotonin receptor function and helps regulate mood and anxiety.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Effective for panic disorder, OCD, and depression in clinical studies.
                  </div>
                </div>

                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>Saffron Extract</h3>
                    <div className={styles.supplementDosage}>30mg</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> Daily with meals
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> Modulates serotonin and dopamine systems, supporting mood balance and emotional regulation.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Studies show effectiveness comparable to some antidepressants for mild-moderate depression.
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* IMPLEMENTATION GUIDE */}
          <FadeIn delay={0.25}>
            <section className={styles.implementationSection}>
              <h2>Implementation Strategy</h2>
              <div className={styles.implementationSteps}>
                <div className={styles.implementationStep}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Build Morning Foundation</h3>
                    <p>Start with morning light exposure and basic movement. These foundational practices set your circadian rhythm and provide the neurochemical basis for stable mood throughout the day.</p>
                  </div>
                </div>

                <div className={styles.implementationStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Add Stress Management Tools</h3>
                    <p>Learn and practice physiological sighs for acute stress management. Incorporate regular NSDR sessions to build baseline resilience and emotional regulation capacity.</p>
                  </div>
                </div>

                <div className={styles.implementationStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Implement Long-term Practices</h3>
                    <p>Add gratitude practice and cold exposure for building lasting resilience. Start with shorter durations and gradually increase as you adapt to these stress-building protocols.</p>
                  </div>
                </div>

                <div className={styles.implementationStep}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Optimize and Maintain</h3>
                    <p>Fine-tune timing and intensity based on your response. Consider targeted supplements if needed, and maintain consistency with the practices that provide the most benefit.</p>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
