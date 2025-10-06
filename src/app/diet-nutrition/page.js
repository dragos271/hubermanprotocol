import styles from './page.module.css'

export default function DietNutritionPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>🥗</div>
          <h1 className={styles.title}>
            Diet & <span className={styles.titleGradient}>Nutrition</span>
          </h1>
          <p className={styles.subtitle}>
            Science-based nutrition protocols for optimal metabolic health, cognitive performance, and longevity
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>6</div>
              <div className={styles.statLabel}>Key Nutrients</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>16:8</div>
              <div className={styles.statLabel}>Fasting Window</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>25%</div>
              <div className={styles.statLabel}>Protein Intake</div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className={styles.scienceSection}>
        <h2>The Science of Nutrition</h2>
        <p className={styles.scienceText}>
          Nutrition profoundly affects brain function, metabolism, and longevity. Research shows that meal timing, 
          macronutrient ratios, and specific nutrients can optimize cognitive performance, support metabolic health, 
          and enhance overall wellbeing. The timing of food intake affects circadian rhythms, while specific nutrients 
          like omega-3 fatty acids, B vitamins, and minerals support neurotransmitter production and cellular function.
        </p>
      </section>

      {/* Nutrition Protocols */}
      <section className={styles.protocolsSection}>
        <h2>Nutrition Protocols</h2>
        <p className={styles.sectionSubtitle}>Evidence-based dietary strategies for optimal health and performance</p>
        
        <div className={styles.protocolsGrid}>
          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>⏰</div>
              <div className={styles.protocolTiming}>Daily</div>
            </div>
            <h3>Time-Restricted Eating</h3>
            <p className={styles.protocolDescription}>
              Optimize metabolic health and circadian rhythms through strategic meal timing
            </p>
            <div className={styles.protocolActions}>
              <h4>Implementation:</h4>
              <ul>
                <li>Start with 12-hour eating window</li>
                <li>Gradually narrow to 8-10 hours</li>
                <li>Eat first meal 1-2 hours after waking</li>
                <li>Complete last meal 3-4 hours before bed</li>
                <li>Stay hydrated during fasting periods</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Time-restricted eating enhances metabolic flexibility, improves insulin sensitivity, 
                and supports cellular autophagy. It aligns feeding with circadian biology for optimal health.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>🥩</div>
              <div className={styles.protocolTiming}>Per Meal</div>
            </div>
            <h3>Protein Optimization</h3>
            <p className={styles.protocolDescription}>
              Strategic protein intake for muscle synthesis, satiety, and metabolic health
            </p>
            <div className={styles.protocolActions}>
              <h4>Protocol:</h4>
              <ul>
                <li>1g protein per pound of body weight daily</li>
                <li>25-30g high-quality protein per meal</li>
                <li>Include all essential amino acids</li>
                <li>Time protein around workouts</li>
                <li>Prioritize leucine-rich sources</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Adequate protein intake supports muscle protein synthesis, provides satiety signals, 
                and maintains metabolic rate. Leucine triggers mTOR pathway activation for muscle growth.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>🧠</div>
              <div className={styles.protocolTiming}>Daily</div>
            </div>
            <h3>Brain-Supporting Nutrients</h3>
            <p className={styles.protocolDescription}>
              Essential nutrients for cognitive function, neurotransmitter production, and brain health
            </p>
            <div className={styles.protocolActions}>
              <h4>Key Nutrients:</h4>
              <ul>
                <li>Omega-3 fatty acids (EPA/DHA)</li>
                <li>B-vitamins (especially B6, B12, folate)</li>
                <li>Choline for acetylcholine production</li>
                <li>Tyrosine for dopamine synthesis</li>
                <li>Tryptophan for serotonin production</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                These nutrients serve as precursors for neurotransmitters and support neuronal membrane 
                integrity. Deficiencies can impair cognitive function and mood regulation.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>🌿</div>
              <div className={styles.protocolTiming}>With Meals</div>
            </div>
            <h3>Micronutrient Density</h3>
            <p className={styles.protocolDescription}>
              Maximize nutrient density to support cellular function and longevity
            </p>
            <div className={styles.protocolActions}>
              <h4>Focus Areas:</h4>
              <ul>
                <li>Dark leafy greens for folate and minerals</li>
                <li>Colorful vegetables for antioxidants</li>
                <li>Organ meats for bioavailable nutrients</li>
                <li>Fermented foods for gut health</li>
                <li>Minimize processed foods</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Nutrient-dense whole foods provide essential vitamins, minerals, and phytonutrients 
                that support cellular function, reduce inflammation, and promote longevity.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>💧</div>
              <div className={styles.protocolTiming}>Throughout Day</div>
            </div>
            <h3>Hydration Protocol</h3>
            <p className={styles.protocolDescription}>
              Optimize hydration for cellular function, cognitive performance, and metabolic health
            </p>
            <div className={styles.protocolActions}>
              <h4>Implementation:</h4>
              <ul>
                <li>16-20oz water upon waking</li>
                <li>Add pinch of sea salt for electrolytes</li>
                <li>Half body weight in ounces daily</li>
                <li>Monitor urine color for hydration status</li>
                <li>Increase intake with exercise/heat</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Proper hydration maintains cellular volume, supports neurotransmitter function, 
                and enables efficient metabolic processes. Even mild dehydration impairs cognitive performance.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>🔥</div>
              <div className={styles.protocolTiming}>Pre/Post Workout</div>
            </div>
            <h3>Performance Nutrition</h3>
            <p className={styles.protocolDescription}>
              Strategic nutrient timing for exercise performance and recovery
            </p>
            <div className={styles.protocolActions}>
              <h4>Timing Protocol:</h4>
              <ul>
                <li>Pre-workout: Simple carbs 30-60 min before</li>
                <li>During: Electrolytes for sessions &gt;60 min</li>
                <li>Post-workout: Protein + carbs within 2 hours</li>
                <li>Focus on glycogen replenishment</li>
                <li>Support muscle protein synthesis</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Strategic nutrient timing optimizes energy availability, enhances performance, 
                and accelerates recovery by supporting glycogen replenishment and protein synthesis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supplements Section */}
      <section className={styles.supplementsSection}>
        <h2>Evidence-Based Supplements</h2>
        <p className={styles.sectionSubtitle}>Key supplements to support optimal nutrition and health</p>
        
        <div className={styles.supplementsGrid}>
          <div className={styles.supplementCard}>
            <div className={styles.supplementHeader}>
              <h3>Omega-3 Fatty Acids</h3>
              <div className={styles.supplementDosage}>1-3g EPA/DHA</div>
            </div>
            <div className={styles.supplementTiming}>
              <strong>Timing:</strong> With meals to enhance absorption
            </div>
            <div className={styles.supplementMechanism}>
              <strong>Mechanism:</strong> Supports brain health, reduces inflammation, maintains cell membrane integrity
            </div>
            <div className={styles.supplementEvidence}>
              <strong>Evidence:</strong> Extensive research shows benefits for cognitive function, mood, and cardiovascular health
            </div>
          </div>

          <div className={styles.supplementCard}>
            <div className={styles.supplementHeader}>
              <h3>Vitamin D3</h3>
              <div className={styles.supplementDosage}>2000-4000 IU</div>
            </div>
            <div className={styles.supplementTiming}>
              <strong>Timing:</strong> With fat-containing meal for absorption
            </div>
            <div className={styles.supplementMechanism}>
              <strong>Mechanism:</strong> Supports immune function, bone health, and hormone production
            </div>
            <div className={styles.supplementEvidence}>
              <strong>Evidence:</strong> Critical for immune function and mood regulation, especially in low-sun environments
            </div>
          </div>

          <div className={styles.supplementCard}>
            <div className={styles.supplementHeader}>
              <h3>Magnesium Glycinate</h3>
              <div className={styles.supplementDosage}>200-400mg</div>
            </div>
            <div className={styles.supplementTiming}>
              <strong>Timing:</strong> Evening, 1-2 hours before bed
            </div>
            <div className={styles.supplementMechanism}>
              <strong>Mechanism:</strong> Cofactor for 300+ enzymatic reactions, supports relaxation and sleep
            </div>
            <div className={styles.supplementEvidence}>
              <strong>Evidence:</strong> Improves sleep quality and supports muscle relaxation and recovery
            </div>
          </div>

          <div className={styles.supplementCard}>
            <div className={styles.supplementHeader}>
              <h3>Creatine Monohydrate</h3>
              <div className={styles.supplementDosage}>3-5g daily</div>
            </div>
            <div className={styles.supplementTiming}>
              <strong>Timing:</strong> Consistent daily intake, timing flexible
            </div>
            <div className={styles.supplementMechanism}>
              <strong>Mechanism:</strong> Supports ATP regeneration for energy and cognitive function
            </div>
            <div className={styles.supplementEvidence}>
              <strong>Evidence:</strong> Benefits physical performance and may support cognitive function
            </div>
          </div>

          <div className={styles.supplementCard}>
            <div className={styles.supplementHeader}>
              <h3>B-Complex</h3>
              <div className={styles.supplementDosage}>As directed</div>
            </div>
            <div className={styles.supplementTiming}>
              <strong>Timing:</strong> Morning with breakfast
            </div>
            <div className={styles.supplementMechanism}>
              <strong>Mechanism:</strong> Supports energy metabolism and neurotransmitter synthesis
            </div>
            <div className={styles.supplementEvidence}>
              <strong>Evidence:</strong> Essential for energy production and nervous system function
            </div>
          </div>

          <div className={styles.supplementCard}>
            <div className={styles.supplementHeader}>
              <h3>Probiotics</h3>
              <div className={styles.supplementDosage}>10-50 billion CFU</div>
            </div>
            <div className={styles.supplementTiming}>
              <strong>Timing:</strong> With or after meals
            </div>
            <div className={styles.supplementMechanism}>
              <strong>Mechanism:</strong> Supports gut microbiome health and gut-brain axis communication
            </div>
            <div className={styles.supplementEvidence}>
              <strong>Evidence:</strong> Improves digestive health and may support mood and immune function
            </div>
          </div>
        </div>
      </section>

      {/* Common Nutrition Mistakes */}
      <section className={styles.mistakesSection}>
        <h2>Common Nutrition Mistakes</h2>
        <p className={styles.sectionSubtitle}>Avoid these pitfalls for optimal nutritional outcomes</p>
        
        <div className={styles.mistakesGrid}>
          <div className={styles.mistakeCard}>
            <h3>Inconsistent Meal Timing</h3>
            <p className={styles.mistakeDescription}>
              Irregular eating patterns disrupt circadian rhythms and metabolic health
            </p>
            <div className={styles.mistakeSolutions}>
              <h4>Solutions:</h4>
              <ul>
                <li>Establish consistent meal times</li>
                <li>Align eating with circadian biology</li>
                <li>Create a sustainable routine</li>
                <li>Use time-restricted eating windows</li>
              </ul>
            </div>
          </div>

          <div className={styles.mistakeCard}>
            <h3>Inadequate Protein Intake</h3>
            <p className={styles.mistakeDescription}>
              Insufficient protein leads to muscle loss, poor satiety, and metabolic dysfunction
            </p>
            <div className={styles.mistakeSolutions}>
              <h4>Solutions:</h4>
              <ul>
                <li>Calculate protein needs (1g per lb body weight)</li>
                <li>Include protein at every meal</li>
                <li>Choose high-quality complete proteins</li>
                <li>Time protein around workouts</li>
              </ul>
            </div>
          </div>

          <div className={styles.mistakeCard}>
            <h3>Micronutrient Deficiencies</h3>
            <p className={styles.mistakeDescription}>
              Focusing only on macronutrients while neglecting essential vitamins and minerals
            </p>
            <div className={styles.mistakeSolutions}>
              <h4>Solutions:</h4>
              <ul>
                <li>Eat nutrient-dense whole foods</li>
                <li>Include variety in food choices</li>
                <li>Consider targeted supplementation</li>
                <li>Regular nutrient status testing</li>
              </ul>
            </div>
          </div>

          <div className={styles.mistakeCard}>
            <h3>Poor Hydration Habits</h3>
            <p className={styles.mistakeDescription}>
              Chronic dehydration impairs cognitive function and metabolic processes
            </p>
            <div className={styles.mistakeSolutions}>
              <h4>Solutions:</h4>
              <ul>
                <li>Start day with 16-20oz water</li>
                <li>Monitor urine color</li>
                <li>Add electrolytes when needed</li>
                <li>Increase intake with activity/heat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className={styles.implementationSection}>
        <h2>Implementation Guide</h2>
        
        <div className={styles.implementationSteps}>
          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Establish Eating Window</h3>
              <p>
                Start with a 12-hour eating window and gradually narrow to 8-10 hours. 
                Align meal timing with your circadian rhythms and lifestyle demands.
              </p>
            </div>
          </div>

          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Calculate Protein Needs</h3>
              <p>
                Determine your daily protein requirement (1g per pound body weight) and 
                distribute across meals with 25-30g per meal for optimal utilization.
              </p>
            </div>
          </div>

          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Optimize Hydration</h3>
              <p>
                Begin each day with 16-20oz of water with a pinch of sea salt. 
                Aim for half your body weight in ounces throughout the day.
              </p>
            </div>
          </div>

          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Focus on Nutrient Density</h3>
              <p>
                Prioritize whole foods rich in essential nutrients. Include dark leafy greens, 
                colorful vegetables, high-quality proteins, and healthy fats.
              </p>
            </div>
          </div>

          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h3>Track and Adjust</h3>
              <p>
                Monitor energy levels, cognitive performance, and overall wellbeing. 
                Adjust protocols based on individual response and lifestyle factors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
