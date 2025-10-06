import { FadeIn } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Brain Neuroplasticity - Huberman Protocol",
  description: "Science-based protocols to enhance neuroplasticity, learning, and brain adaptation throughout life.",
};

export default function BrainNeuroplasticityPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className={styles.pageWrap}>
          {/* HERO SECTION */}
          <section className={styles.hero}>
            <FadeIn>
              <div className={styles.heroContent}>
                <div className={styles.heroIcon}>🧠</div>
                <h1 className={styles.title}>
                  Brain <span className={styles.titleGradient}>Neuroplasticity</span>
                </h1>
                <p className={styles.subtitle}>
                  Unlock your brain's remarkable ability to reorganize, adapt, and form new neural connections 
                  throughout life with evidence-based neuroplasticity protocols.
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>25%</div>
                    <div className={styles.statLabel}>Learning Speed Increase</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>6</div>
                    <div className={styles.statLabel}>Core Protocols</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>Any Age</div>
                    <div className={styles.statLabel}>Neuroplasticity Potential</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* SCIENCE SECTION */}
          <FadeIn delay={0.1}>
            <section className={styles.scienceSection}>
              <h2>The Science of Brain Plasticity</h2>
              <p className={styles.scienceText}>
                Neuroplasticity is your brain's ability to reorganize itself by forming new neural connections. 
                This process involves structural changes at the synapse level, driven by specific behavioral 
                and environmental inputs. Research shows that focused attention, novel experiences, and proper 
                recovery create the optimal conditions for neuroplastic change at any age.
              </p>
            </section>
          </FadeIn>

          {/* NEUROPLASTICITY PROTOCOLS */}
          <FadeIn delay={0.15}>
            <section className={styles.protocolsSection}>
              <h2>Core Neuroplasticity Protocols</h2>
              <p className={styles.sectionSubtitle}>
                Six evidence-based approaches to enhance brain plasticity and accelerate learning
              </p>
              
              <div className={styles.protocolsGrid}>
                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>🎯</div>
                    <div className={styles.protocolTiming}>During Learning</div>
                  </div>
                  <h3>Focused Attention Training</h3>
                  <p className={styles.protocolDescription}>
                    Deliberate, focused attention on specific tasks or stimuli creates the neural conditions 
                    necessary for plastic change by increasing acetylcholine and norepinephrine release.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>90-minute focused learning blocks</li>
                      <li>Single-task attention (no multitasking)</li>
                      <li>Progressive difficulty increases</li>
                      <li>Active engagement with material</li>
                      <li>Immediate error correction</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>Focused attention releases acetylcholine from the nucleus basalis, which highlights specific neural circuits for plastic change.</p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>😴</div>
                    <div className={styles.protocolTiming}>Post-Learning</div>
                  </div>
                  <h3>NSDR & Deep Rest</h3>
                  <p className={styles.protocolDescription}>
                    Non-sleep deep rest accelerates the consolidation of learning by up to 50% through 
                    replay of neural sequences during rest states.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>10-30 minutes immediately after learning</li>
                      <li>Yoga Nidra or body scan meditation</li>
                      <li>Eyes closed, lying down position</li>
                      <li>Allow mind to wander naturally</li>
                      <li>No stimulation or input during rest</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>NSDR triggers hippocampal replay at 20x normal speed, strengthening synaptic connections formed during learning.</p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>❄️</div>
                    <div className={styles.protocolTiming}>Pre-Learning</div>
                  </div>
                  <h3>Cold Exposure</h3>
                  <p className={styles.protocolDescription}>
                    Cold exposure increases norepinephrine and epinephrine, creating heightened states of 
                    attention and alertness that prime the brain for neuroplastic change.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>1-3 minutes cold shower/ice bath</li>
                      <li>11-15°C (50-60°F) water temperature</li>
                      <li>30-60 minutes before learning session</li>
                      <li>Focus on controlled breathing</li>
                      <li>Progressive cold adaptation</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>Cold stress increases norepinephrine 2.5x for 2+ hours, enhancing attention and marking neural circuits for change.</p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>🚶</div>
                    <div className={styles.protocolTiming}>Daily</div>
                  </div>
                  <h3>Movement & Exercise</h3>
                  <p className={styles.protocolDescription}>
                    Physical movement increases BDNF (brain-derived neurotrophic factor), the key growth 
                    factor for neuroplasticity and new neuron formation.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>20-30 minutes cardiovascular exercise</li>
                      <li>Zone 2 intensity (conversational pace)</li>
                      <li>Novel movement patterns</li>
                      <li>Balance and coordination challenges</li>
                      <li>Regular strength training</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>Exercise increases BDNF production, promotes neurogenesis in the hippocampus, and enhances synaptic plasticity.</p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>🧘</div>
                    <div className={styles.protocolTiming}>Daily</div>
                  </div>
                  <h3>Deliberate Mental Training</h3>
                  <p className={styles.protocolDescription}>
                    Specific cognitive exercises that challenge working memory, attention, and processing 
                    speed create targeted neuroplastic adaptations.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>Working memory training (N-back tasks)</li>
                      <li>Attention training exercises</li>
                      <li>Novel cognitive challenges</li>
                      <li>Progressive difficulty increases</li>
                      <li>15-20 minutes daily practice</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>Cognitive training increases cortical thickness and white matter integrity in task-relevant brain regions.</p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>😤</div>
                    <div className={styles.protocolTiming}>As Needed</div>
                  </div>
                  <h3>Stress & Challenge</h3>
                  <p className={styles.protocolDescription}>
                    Controlled stress and challenge create the neurochemical conditions necessary for 
                    adaptation and growth through targeted release of stress hormones.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>Deliberate difficult tasks</li>
                      <li>Time pressure challenges</li>
                      <li>Novel skill acquisition</li>
                      <li>Uncomfortable but safe situations</li>
                      <li>Regular challenge progression</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>Controlled stress releases cortisol and adrenaline, which enhance memory consolidation and mark experiences for retention.</p>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* NEUROPLASTICITY TOOLS */}
          <FadeIn delay={0.2}>
            <section className={styles.supplementsSection}>
              <h2>Neuroplasticity Enhancement Tools</h2>
              <p className={styles.sectionSubtitle}>
                Science-backed supplements and compounds that support brain plasticity
              </p>
              
              <div className={styles.supplementsGrid}>
                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>Alpha-GPC</h3>
                    <div className={styles.supplementDosage}>300-600mg</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> 30-60 minutes before learning
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> Increases acetylcholine production, enhancing attention and marking neural circuits for plastic change.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Studies show 40% improvement in learning when combined with focused attention.
                  </div>
                </div>

                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>Lion's Mane</h3>
                    <div className={styles.supplementDosage}>500-1000mg</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> Daily with meals
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> Stimulates nerve growth factor (NGF) production, promoting neuron growth and repair.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Shown to improve cognitive function and support neurogenesis in multiple studies.
                  </div>
                </div>

                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>Omega-3 (DHA)</h3>
                    <div className={styles.supplementDosage}>1-2g</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> Daily with meals
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> Provides structural support for neural membranes and reduces neuroinflammation.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Essential for synaptic plasticity and long-term memory formation.
                  </div>
                </div>

                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>Creatine</h3>
                    <div className={styles.supplementDosage}>5g</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> Daily, any time
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> Enhances brain energy metabolism, supporting cognitive performance and neuroplasticity.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Particularly beneficial for vegetarians and enhances working memory performance.
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
                    <h3>Establish Learning Foundation</h3>
                    <p>Begin with focused attention training during specific learning sessions. Practice single-task focus for 90-minute blocks with clear learning objectives and immediate feedback on performance.</p>
                  </div>
                </div>

                <div className={styles.implementationStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Add Recovery Protocols</h3>
                    <p>Incorporate NSDR sessions immediately after learning. Start with 10 minutes and gradually increase to 20-30 minutes. This consolidates learning and accelerates neuroplastic changes.</p>
                  </div>
                </div>

                <div className={styles.implementationStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Optimize With Priming</h3>
                    <p>Add cold exposure or exercise before learning sessions to increase alertness and neurochemical priming. Time these interventions 30-60 minutes before focused learning.</p>
                  </div>
                </div>

                <div className={styles.implementationStep}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Scale and Maintain</h3>
                    <p>Gradually increase challenge levels and maintain consistent practice. Track progress and adjust protocols based on learning outcomes and adaptation responses.</p>
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
