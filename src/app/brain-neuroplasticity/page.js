import { FadeIn } from "../components/Motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicLayout from "../components/TopicLayout";
import styles from "./page.module.css";

export const metadata = {
  title: "Brain Neuroplasticity - Huberman Protocol",
  description:
    "Science-based protocols to enhance neuroplasticity, learning, and brain adaptation throughout life.",
};

export default function BrainNeuroplasticityPage() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicLayout
          icon="🧠"
          title="Brain"
          accent="Neuroplasticity"
          subtitle="Unlock your brain’s ability to reorganize, adapt, and form new neural connections throughout life with evidence-based neuroplasticity protocols."
          stats={[
            { value: "25%", label: "Faster Skill Consolidation*" },
            { value: "6", label: "Core Protocols" },
            { value: "Any Age", label: "Plasticity Potential" },
          ]}
        >
          <FadeIn delay={0.1}>
            <section className={styles.scienceSection}>
              <h2>The Science of Brain Plasticity</h2>
              <p className={styles.scienceText}>
                Neuroplasticity is your brain&rsquo;s ability to reorganize itself by forming new neural
                connections. This process involves structural changes at the synapse level, driven by specific
                behavioral and environmental inputs. Research shows that focused attention, novel experiences,
                and proper recovery create the optimal conditions for neuroplastic change at any age.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.15}>
            <section className={styles.protocolsSection}>
              <h2>Core Neuroplasticity Protocols</h2>
              <p className={styles.sectionSubtitle}>
                Six evidence-backed approaches to enhance brain plasticity and accelerate learning
              </p>

              <div className={styles.protocolsGrid}>
                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>🎯</div>
                    <div className={styles.protocolTiming}>During Learning</div>
                  </div>
                  <h3>Focused Attention Training</h3>
                  <p className={styles.protocolDescription}>
                    Deliberate, focused attention on a single task increases acetylcholine and norepinephrine,
                    priming neural circuits for plastic change.
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
                    <p>
                      Focused attention releases acetylcholine from the nucleus basalis, highlighting specific
                      neural circuits for plastic change.
                    </p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>😴</div>
                    <div className={styles.protocolTiming}>Post-Learning</div>
                  </div>
                  <h3>NSDR &amp; Deep Rest</h3>
                  <p className={styles.protocolDescription}>
                    Non-sleep deep rest accelerates the consolidation of learning by replaying neural sequences
                    during quiet states.
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
                    <p>
                      NSDR triggers hippocampal replay at roughly 20&times; waking speed, strengthening synaptic
                      connections formed during learning.
                    </p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>❄️</div>
                    <div className={styles.protocolTiming}>Pre-Learning</div>
                  </div>
                  <h3>Cold Exposure</h3>
                  <p className={styles.protocolDescription}>
                    Cold exposure increases norepinephrine and alertness, priming the brain for enhanced plastic
                    change.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>1-3 minutes cold shower or immersion</li>
                      <li>11-15°C (50-60°F) water temperature</li>
                      <li>30-60 minutes before learning session</li>
                      <li>Focus on controlled breathing</li>
                      <li>Progressive cold adaptation</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>
                      Cold stress increases norepinephrine about 2.5&times; for two or more hours, enhancing
                      attention and marking neural circuits for change.
                    </p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>🚶</div>
                    <div className={styles.protocolTiming}>Daily</div>
                  </div>
                  <h3>Movement &amp; Exercise</h3>
                  <p className={styles.protocolDescription}>
                    Physical movement increases BDNF&mdash;the key growth factor for neuroplasticity and new
                    neuron formation.
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
                    <p>
                      Exercise boosts BDNF production, promotes neurogenesis in the hippocampus, and enhances
                      synaptic plasticity.
                    </p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>🧘</div>
                    <div className={styles.protocolTiming}>Daily</div>
                  </div>
                  <h3>Deliberate Mental Training</h3>
                  <p className={styles.protocolDescription}>
                    Cognitive exercises that challenge working memory, attention, and processing speed create
                    targeted neuroplastic adaptations.
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
                    <p>
                      Cognitive training increases cortical thickness and white matter integrity in
                      task-relevant brain regions.
                    </p>
                  </div>
                </div>

                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <div className={styles.protocolIcon}>🛌</div>
                    <div className={styles.protocolTiming}>Nightly</div>
                  </div>
                  <h3>Structured Sleep</h3>
                  <p className={styles.protocolDescription}>
                    Deep sleep is where structural neural changes are cemented. Protecting it ensures long-term
                    plastic adaptations.
                  </p>
                  <div className={styles.protocolActions}>
                    <h4>Implementation:</h4>
                    <ul>
                      <li>Consistent sleep-wake schedule</li>
                      <li>Cool, dark sleeping environment</li>
                      <li>Limit caffeine after 12 p.m.</li>
                      <li>Dim lights 90 minutes before bed</li>
                      <li>NSDR if sleep disrupted</li>
                    </ul>
                  </div>
                  <div className={styles.protocolScience}>
                    <h4>Mechanism</h4>
                    <p>
                      Quality sleep triggers growth hormone release and synaptic consolidation&mdash;critical for
                      durable brain changes.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.22}>
            <section className={styles.implementationSection}>
              <h2>Implementation Strategy</h2>
              <div className={styles.implementationSteps}>
                <div className={styles.implementationStep}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>Establish Learning Foundation</h3>
                    <p>
                      Begin with focused attention training during specific learning sessions. Practice
                      single-task focus for 90-minute blocks with clear objectives and immediate feedback.
                    </p>
                  </div>
                </div>

                <div className={styles.implementationStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>Add Recovery Protocols</h3>
                    <p>
                      Incorporate NSDR sessions immediately after learning. Start with 10 minutes and gradually
                      increase to 20-30 minutes to consolidate gains.
                    </p>
                  </div>
                </div>

                <div className={styles.implementationStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>Optimize With Priming</h3>
                    <p>
                      Add cold exposure or exercise before learning sessions to increase alertness and
                      neurochemical priming. Schedule interventions 30-60 minutes beforehand.
                    </p>
                  </div>
                </div>

                <div className={styles.implementationStep}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>Scale &amp; Maintain</h3>
                    <p>
                      Gradually increase challenge levels and maintain consistent practice. Track progress and
                      adjust protocols based on learning outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className={styles.supplementSection}>
              <h2>Evidence-Informed Support</h2>
              <p className={styles.sectionSubtitle}>
                Optional nutritional supports frequently referenced by Dr. Huberman. Consult your healthcare
                provider before introducing supplements.
              </p>
              <div className={styles.supplementGrid}>
                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>Alpha-GPC</h3>
                    <div className={styles.supplementDosage}>300-600mg</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> 30-60 minutes before intense learning or training
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> Supports acetylcholine production for focus and synaptic plasticity.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Human trials show improvements in attention and learning consolidation.
                  </div>
                </div>

                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>EPA/DHA Omega-3s</h3>
                    <div className={styles.supplementDosage}>1-2g</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> Daily with meals (especially those containing fat)
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> DHA integrates into neuronal membranes, aiding signal transmission and plasticity.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Meta-analyses support cognitive benefits and resilience to neuroinflammation.
                  </div>
                </div>

                <div className={styles.supplementCard}>
                  <div className={styles.supplementHeader}>
                    <h3>Creatine Monohydrate</h3>
                    <div className={styles.supplementDosage}>5g</div>
                  </div>
                  <div className={styles.supplementTiming}>
                    <strong>Timing:</strong> Daily, any time of day
                  </div>
                  <div className={styles.supplementMechanism}>
                    <strong>Mechanism:</strong> Supports brain energy metabolism and working memory performance.
                  </div>
                  <div className={styles.supplementEvidence}>
                    <strong>Evidence:</strong> Particularly beneficial in low-meat eaters; enhances task accuracy under sleep deprivation.
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className={styles.researchNote}>
              *Skill-consolidation improvements draw on peer-reviewed studies of focused attention + NSDR combinations (e.g., Mednick et al., 2019). Individual outcomes vary.
            </p>
          </FadeIn>
        </TopicLayout>
      </main>
      <Footer />
    </>
  );
}
