import styles from './page.module.css'

export default function FitnessWorkoutsPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>💪</div>
          <h1 className={styles.title}>
            Fitness & <span className={styles.titleGradient}>Workouts</span>
          </h1>
          <p className={styles.subtitle}>
            Science-based training protocols for strength, endurance, and optimal physical performance
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>3-4</div>
              <div className={styles.statLabel}>Days Per Week</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>48-72</div>
              <div className={styles.statLabel}>Hours Recovery</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10</div>
              <div className={styles.statLabel}>Working Sets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className={styles.scienceSection}>
        <h2>The Science of Training</h2>
        <p className={styles.scienceText}>
          Exercise triggers powerful adaptations in multiple physiological systems. Resistance training stimulates 
          muscle protein synthesis and neuromuscular adaptations, while cardiovascular exercise enhances mitochondrial 
          biogenesis and capillary density. The key principles include progressive overload, specificity, recovery, 
          and variation to optimize strength, endurance, and overall health outcomes.
        </p>
      </section>

      {/* Training Protocols */}
      <section className={styles.protocolsSection}>
        <h2>Training Protocols</h2>
        <p className={styles.sectionSubtitle}>Evidence-based exercise strategies for maximum adaptation</p>
        
        <div className={styles.protocolsGrid}>
          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>🏋️</div>
              <div className={styles.protocolTiming}>3-4x/week</div>
            </div>
            <h3>Strength Training Protocol</h3>
            <p className={styles.protocolDescription}>
              Build maximum strength and muscle mass through progressive resistance training
            </p>
            <div className={styles.protocolActions}>
              <h4>Implementation:</h4>
              <ul>
                <li>Focus on compound movements</li>
                <li>3-5 sets of 3-8 repetitions</li>
                <li>80-90% of 1RM intensity</li>
                <li>2-3 minutes rest between sets</li>
                <li>Progressive overload weekly</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                High-intensity, low-volume training maximally stimulates motor unit recruitment 
                and promotes strength adaptations through neural and structural mechanisms.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>🏃</div>
              <div className={styles.protocolTiming}>2-3x/week</div>
            </div>
            <h3>Zone 2 Cardio Protocol</h3>
            <p className={styles.protocolDescription}>
              Enhance mitochondrial function and aerobic capacity through steady-state exercise
            </p>
            <div className={styles.protocolActions}>
              <h4>Protocol:</h4>
              <ul>
                <li>Maintain 180 minus age heart rate</li>
                <li>45-60 minutes duration</li>
                <li>Nasal breathing only</li>
                <li>Conversational pace</li>
                <li>Consistent weekly volume</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Zone 2 training maximizes mitochondrial biogenesis, improves fat oxidation, 
                and enhances cardiovascular efficiency without excessive stress.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>⚡</div>
              <div className={styles.protocolTiming}>1-2x/week</div>
            </div>
            <h3>High-Intensity Training</h3>
            <p className={styles.protocolDescription}>
              Boost anaerobic power and cardiovascular fitness through interval training
            </p>
            <div className={styles.protocolActions}>
              <h4>Structure:</h4>
              <ul>
                <li>4-8 intervals of 30 seconds to 4 minutes</li>
                <li>85-95% maximum heart rate</li>
                <li>Equal or longer rest periods</li>
                <li>Total session 15-30 minutes</li>
                <li>Allow full recovery between sessions</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                High-intensity intervals improve VO2 max, anaerobic capacity, and metabolic 
                flexibility while requiring minimal time investment.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>🔄</div>
              <div className={styles.protocolTiming}>2-3x/week</div>
            </div>
            <h3>Hypertrophy Protocol</h3>
            <p className={styles.protocolDescription}>
              Maximize muscle growth through volume-based resistance training
            </p>
            <div className={styles.protocolActions}>
              <h4>Variables:</h4>
              <ul>
                <li>3-4 sets of 6-15 repetitions</li>
                <li>65-80% of 1RM intensity</li>
                <li>10-20 sets per muscle group weekly</li>
                <li>60-90 seconds rest between sets</li>
                <li>Focus on time under tension</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Moderate intensity with higher volume maximizes muscle protein synthesis 
                and metabolic stress for optimal hypertrophic adaptations.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>🧘</div>
              <div className={styles.protocolTiming}>Daily</div>
            </div>
            <h3>Mobility & Recovery</h3>
            <p className={styles.protocolDescription}>
              Maintain joint health and tissue quality through targeted mobility work
            </p>
            <div className={styles.protocolActions}>
              <h4>Daily Routine:</h4>
              <ul>
                <li>10-15 minutes daily movement</li>
                <li>Dynamic warm-up before training</li>
                <li>Static stretching post-workout</li>
                <li>Focus on limiting factors</li>
                <li>Include breath work</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Regular mobility work maintains range of motion, reduces injury risk, 
                and supports optimal movement patterns for training quality.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>📊</div>
              <div className={styles.protocolTiming}>Weekly</div>
            </div>
            <h3>Progressive Overload</h3>
            <p className={styles.protocolDescription}>
              Systematically increase training demands to drive continuous adaptation
            </p>
            <div className={styles.protocolActions}>
              <h4>Methods:</h4>
              <ul>
                <li>Increase weight by 2.5-5%</li>
                <li>Add repetitions to sets</li>
                <li>Increase training volume</li>
                <li>Improve movement quality</li>
                <li>Reduce rest periods</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Progressive overload is essential for continued adaptation as the body 
                adjusts to training stimuli and requires increased demands for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Selection */}
      <section className={styles.exerciseSection}>
        <h2>Core Exercise Selection</h2>
        <p className={styles.sectionSubtitle}>Fundamental movements for comprehensive development</p>
        
        <div className={styles.exerciseGrid}>
          <div className={styles.exerciseCard}>
            <div className={styles.exerciseHeader}>
              <h3>Squat Variations</h3>
              <div className={styles.exerciseCategory}>Lower Body</div>
            </div>
            <div className={styles.exerciseDescription}>
              <strong>Primary:</strong> Back squat, front squat, goblet squat
            </div>
            <div className={styles.exerciseBenefits}>
              <strong>Benefits:</strong> Develops lower body strength, core stability, and functional movement patterns
            </div>
            <div className={styles.exerciseTips}>
              <strong>Key Points:</strong> Maintain neutral spine, full depth, knee tracking over toes
            </div>
          </div>

          <div className={styles.exerciseCard}>
            <div className={styles.exerciseHeader}>
              <h3>Hinge Movements</h3>
              <div className={styles.exerciseCategory}>Posterior Chain</div>
            </div>
            <div className={styles.exerciseDescription}>
              <strong>Primary:</strong> Deadlift, Romanian deadlift, hip thrust
            </div>
            <div className={styles.exerciseBenefits}>
              <strong>Benefits:</strong> Strengthens posterior chain, improves hip mobility, reduces injury risk
            </div>
            <div className={styles.exerciseTips}>
              <strong>Key Points:</strong> Hip hinge pattern, neutral spine, posterior weight shift
            </div>
          </div>

          <div className={styles.exerciseCard}>
            <div className={styles.exerciseHeader}>
              <h3>Pressing Movements</h3>
              <div className={styles.exerciseCategory}>Upper Body</div>
            </div>
            <div className={styles.exerciseDescription}>
              <strong>Primary:</strong> Overhead press, bench press, push-up variations
            </div>
            <div className={styles.exerciseBenefits}>
              <strong>Benefits:</strong> Builds upper body strength, shoulder stability, core engagement
            </div>
            <div className={styles.exerciseTips}>
              <strong>Key Points:</strong> Full range of motion, stable base, controlled tempo
            </div>
          </div>

          <div className={styles.exerciseCard}>
            <div className={styles.exerciseHeader}>
              <h3>Pulling Movements</h3>
              <div className={styles.exerciseCategory}>Upper Body</div>
            </div>
            <div className={styles.exerciseDescription}>
              <strong>Primary:</strong> Pull-up, row variations, lat pulldown
            </div>
            <div className={styles.exerciseBenefits}>
              <strong>Benefits:</strong> Balances pressing, improves posture, strengthens grip
            </div>
            <div className={styles.exerciseTips}>
              <strong>Key Points:</strong> Scapular retraction, full range, controlled negative
            </div>
          </div>

          <div className={styles.exerciseCard}>
            <div className={styles.exerciseHeader}>
              <h3>Loaded Carries</h3>
              <div className={styles.exerciseCategory}>Full Body</div>
            </div>
            <div className={styles.exerciseDescription}>
              <strong>Primary:</strong> Farmer&apos;s walk, suitcase carry, overhead carry
            </div>
            <div className={styles.exerciseBenefits}>
              <strong>Benefits:</strong> Builds core strength, improves grip, functional strength
            </div>
            <div className={styles.exerciseTips}>
              <strong>Key Points:</strong> Upright posture, controlled breathing, appropriate load
            </div>
          </div>

          <div className={styles.exerciseCard}>
            <div className={styles.exerciseHeader}>
              <h3>Unilateral Training</h3>
              <div className={styles.exerciseCategory}>Balance</div>
            </div>
            <div className={styles.exerciseDescription}>
              <strong>Primary:</strong> Single-leg squat, lunge variations, step-ups
            </div>
            <div className={styles.exerciseBenefits}>
              <strong>Benefits:</strong> Addresses imbalances, improves stability, injury prevention
            </div>
            <div className={styles.exerciseTips}>
              <strong>Key Points:</strong> Control over speed, equal bilateral development
            </div>
          </div>
        </div>
      </section>

      {/* Training Mistakes */}
      <section className={styles.mistakesSection}>
        <h2>Common Training Mistakes</h2>
        <p className={styles.sectionSubtitle}>Avoid these pitfalls for optimal training outcomes</p>
        
        <div className={styles.mistakesGrid}>
          <div className={styles.mistakeCard}>
            <h3>Insufficient Recovery</h3>
            <p className={styles.mistakeDescription}>
              Training too frequently without adequate rest leads to overreaching and poor adaptations
            </p>
            <div className={styles.mistakeSolutions}>
              <h4>Solutions:</h4>
              <ul>
                <li>Allow 48-72 hours between training same muscle groups</li>
                <li>Prioritize sleep quality and duration</li>
                <li>Include active recovery days</li>
                <li>Monitor training stress and fatigue</li>
              </ul>
            </div>
          </div>

          <div className={styles.mistakeCard}>
            <h3>Poor Exercise Form</h3>
            <p className={styles.mistakeDescription}>
              Compromised movement quality reduces effectiveness and increases injury risk
            </p>
            <div className={styles.mistakeSolutions}>
              <h4>Solutions:</h4>
              <ul>
                <li>Master bodyweight movements first</li>
                <li>Use full range of motion</li>
                <li>Control both concentric and eccentric phases</li>
                <li>Seek qualified instruction</li>
              </ul>
            </div>
          </div>

          <div className={styles.mistakeCard}>
            <h3>Lack of Progressive Overload</h3>
            <p className={styles.mistakeDescription}>
              Staying with same weights and reps prevents continued adaptation and improvement
            </p>
            <div className={styles.mistakeSolutions}>
              <h4>Solutions:</h4>
              <ul>
                <li>Track workouts systematically</li>
                <li>Increase load by 2.5-5% weekly</li>
                <li>Add repetitions or sets</li>
                <li>Vary training stimuli</li>
              </ul>
            </div>
          </div>

          <div className={styles.mistakeCard}>
            <h3>Imbalanced Programming</h3>
            <p className={styles.mistakeDescription}>
              Overemphasizing certain movements while neglecting others creates dysfunction
            </p>
            <div className={styles.mistakeSolutions}>
              <h4>Solutions:</h4>
              <ul>
                <li>Include all movement patterns</li>
                <li>Balance pushing and pulling</li>
                <li>Train unilaterally</li>
                <li>Address individual weaknesses</li>
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
              <h3>Assess Current Fitness</h3>
              <p>
                Evaluate movement quality, strength levels, and cardiovascular fitness. 
                Identify limitations and establish baseline measurements for tracking progress.
              </p>
            </div>
          </div>

          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Design Training Split</h3>
              <p>
                Create a sustainable weekly schedule incorporating strength training 3-4 days, 
                cardio 2-3 days, with at least one full rest day for recovery.
              </p>
            </div>
          </div>

          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Master Movement Patterns</h3>
              <p>
                Focus on proper form for fundamental movements: squat, hinge, push, pull, 
                and carry. Quality over quantity in early training phases.
              </p>
            </div>
          </div>

          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Implement Progressive Overload</h3>
              <p>
                Systematically increase training demands through weight, repetitions, 
                volume, or intensity. Track workouts to ensure consistent progression.
              </p>
            </div>
          </div>

          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h3>Monitor and Adjust</h3>
              <p>
                Regularly assess performance, recovery, and adherence. Modify programming 
                based on progress, life stress, and individual response to training.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
