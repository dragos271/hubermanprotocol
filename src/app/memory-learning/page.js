import styles from './page.module.css'

export default function MemoryLearningPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>🧠</div>
          <h1 className={styles.title}>
            Memory & <span className={styles.titleGradient}>Learning</span>
          </h1>
          <p className={styles.subtitle}>
            Science-based protocols to enhance memory formation, retention, and accelerate learning
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>90</div>
              <div className={styles.statLabel}>Min Cycles</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10-30</div>
              <div className={styles.statLabel}>Min Sessions</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>2-4</div>
              <div className={styles.statLabel}>Hours Sleep</div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className={styles.scienceSection}>
        <h2>The Science of Memory & Learning</h2>
        <p className={styles.scienceText}>
          Memory formation involves complex neurobiological processes including encoding, consolidation, and retrieval. 
          Neuroplasticity allows the brain to form new connections and strengthen existing ones through experience. 
          Key factors include attention, repetition, sleep, and the timing of learning sessions. Understanding these 
          mechanisms allows us to optimize learning protocols for maximum retention and skill acquisition.
        </p>
      </section>

      {/* Learning Protocols */}
      <section className={styles.protocolsSection}>
        <h2>Learning Protocols</h2>
        <p className={styles.sectionSubtitle}>Evidence-based strategies to enhance memory and accelerate learning</p>
        
        <div className={styles.protocolsGrid}>
          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>⏰</div>
              <div className={styles.protocolTiming}>90 Minutes</div>
            </div>
            <h3>Ultradian Learning Cycles</h3>
            <p className={styles.protocolDescription}>
              Align learning sessions with natural 90-minute attention cycles for optimal focus
            </p>
            <div className={styles.protocolActions}>
              <h4>Implementation:</h4>
              <ul>
                <li>Study for 90 minutes maximum per session</li>
                <li>Take 20-30 minute breaks between cycles</li>
                <li>Match high-effort tasks to peak alertness</li>
                <li>Allow for natural attention decline</li>
                <li>Track energy levels throughout day</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Brain attention operates in 90-minute cycles. Working with these natural rhythms 
                optimizes focus, reduces mental fatigue, and enhances information processing.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>🔄</div>
              <div className={styles.protocolTiming}>Spaced</div>
            </div>
            <h3>Spaced Repetition</h3>
            <p className={styles.protocolDescription}>
              Use strategic timing intervals to strengthen memory consolidation and retention
            </p>
            <div className={styles.protocolActions}>
              <h4>Schedule:</h4>
              <ul>
                <li>Review after 1 day, 3 days, 1 week</li>
                <li>Then 2 weeks, 1 month, 3 months</li>
                <li>Adjust intervals based on difficulty</li>
                <li>Use active recall during reviews</li>
                <li>Test yourself before looking at answers</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Spaced repetition leverages the forgetting curve to strengthen neural pathways 
                just before information would be lost, creating durable long-term memories.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>🎯</div>
              <div className={styles.protocolTiming}>Per Session</div>
            </div>
            <h3>Focused Attention Training</h3>
            <p className={styles.protocolDescription}>
              Strengthen attention and concentration through deliberate focus exercises
            </p>
            <div className={styles.protocolActions}>
              <h4>Protocol:</h4>
              <ul>
                <li>Start with 10-15 minute focus blocks</li>
                <li>Gradually increase duration</li>
                <li>Use single-tasking approach</li>
                <li>Practice resisting distractions</li>
                <li>Return attention when it wanders</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Attention is like a muscle that can be strengthened through practice. 
                Focused attention training enhances cognitive control and learning capacity.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>🧩</div>
              <div className={styles.protocolTiming}>Active</div>
            </div>
            <h3>Active Recall</h3>
            <p className={styles.protocolDescription}>
              Strengthen memory through retrieval practice rather than passive review
            </p>
            <div className={styles.protocolActions}>
              <h4>Techniques:</h4>
              <ul>
                <li>Close books and recall from memory</li>
                <li>Explain concepts out loud</li>
                <li>Create mind maps from memory</li>
                <li>Use flashcards effectively</li>
                <li>Teach material to others</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Active retrieval strengthens neural pathways more effectively than passive review, 
                creating stronger and more accessible memories.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>😴</div>
              <div className={styles.protocolTiming}>Post-Learning</div>
            </div>
            <h3>Sleep-Dependent Learning</h3>
            <p className={styles.protocolDescription}>
              Optimize sleep to consolidate memories and enhance learning retention
            </p>
            <div className={styles.protocolActions}>
              <h4>Optimization:</h4>
              <ul>
                <li>Get 7-9 hours quality sleep</li>
                <li>Avoid learning 3 hours before bed</li>
                <li>Review material before sleep</li>
                <li>Maintain consistent sleep schedule</li>
                <li>Take strategic 10-20 minute naps</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                Sleep consolidates memories from temporary to long-term storage. REM and deep sleep 
                phases are crucial for different types of memory consolidation.
              </p>
            </div>
          </div>

          <div className={styles.protocolCard}>
            <div className={styles.protocolHeader}>
              <div className={styles.protocolIcon}>🌊</div>
              <div className={styles.protocolTiming}>Pre-Study</div>
            </div>
            <h3>Neuroplasticity Primers</h3>
            <p className={styles.protocolDescription}>
              Prepare the brain for enhanced neuroplasticity and learning capacity
            </p>
            <div className={styles.protocolActions}>
              <h4>Primers:</h4>
              <ul>
                <li>20 minutes cardiovascular exercise</li>
                <li>Cold exposure for 1-3 minutes</li>
                <li>Meditation or breathing exercises</li>
                <li>Novel motor skill practice</li>
                <li>Optimize alertness timing</li>
              </ul>
            </div>
            <div className={styles.protocolScience}>
              <h4>Scientific Basis</h4>
              <p>
                These activities increase BDNF (brain-derived neurotrophic factor), adrenaline, 
                and dopamine, creating optimal conditions for neuroplasticity and learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Techniques */}
      <section className={styles.techniquesSection}>
        <h2>Memory Techniques</h2>
        <p className={styles.sectionSubtitle}>Proven methods to enhance memory encoding and retrieval</p>
        
        <div className={styles.techniquesGrid}>
          <div className={styles.techniqueCard}>
            <div className={styles.techniqueHeader}>
              <h3>Method of Loci</h3>
              <div className={styles.techniqueType}>Spatial</div>
            </div>
            <div className={styles.techniqueDescription}>
              <strong>Technique:</strong> Associate information with familiar spatial locations
            </div>
            <div className={styles.techniqueBenefits}>
              <strong>Benefits:</strong> Leverages spatial memory for enhanced recall of sequences and lists
            </div>
            <div className={styles.techniqueApplication}>
              <strong>Application:</strong> Create mental journey through familiar place, place information at specific locations
            </div>
          </div>

          <div className={styles.techniqueCard}>
            <div className={styles.techniqueHeader}>
              <h3>Elaborative Encoding</h3>
              <div className={styles.techniqueType}>Semantic</div>
            </div>
            <div className={styles.techniqueDescription}>
              <strong>Technique:</strong> Connect new information to existing knowledge and experiences
            </div>
            <div className={styles.techniqueBenefits}>
              <strong>Benefits:</strong> Creates multiple retrieval pathways and deeper understanding
            </div>
            <div className={styles.techniqueApplication}>
              <strong>Application:</strong> Ask &quot;how&quot; and &quot;why&quot; questions, relate to personal experiences
            </div>
          </div>

          <div className={styles.techniqueCard}>
            <div className={styles.techniqueHeader}>
              <h3>Dual Coding</h3>
              <div className={styles.techniqueType}>Visual</div>
            </div>
            <div className={styles.techniqueDescription}>
              <strong>Technique:</strong> Combine verbal and visual information processing
            </div>
            <div className={styles.techniqueBenefits}>
              <strong>Benefits:</strong> Engages multiple memory systems for stronger encoding
            </div>
            <div className={styles.techniqueApplication}>
              <strong>Application:</strong> Create mental images, diagrams, and visual associations with verbal material
            </div>
          </div>

          <div className={styles.techniqueCard}>
            <div className={styles.techniqueHeader}>
              <h3>Chunking</h3>
              <div className={styles.techniqueType}>Organizational</div>
            </div>
            <div className={styles.techniqueDescription}>
              <strong>Technique:</strong> Group related information into manageable units
            </div>
            <div className={styles.techniqueBenefits}>
              <strong>Benefits:</strong> Overcomes working memory limitations and improves recall
            </div>
            <div className={styles.techniqueApplication}>
              <strong>Application:</strong> Identify patterns, group similar items, create meaningful categories
            </div>
          </div>

          <div className={styles.techniqueCard}>
            <div className={styles.techniqueHeader}>
              <h3>Testing Effect</h3>
              <div className={styles.techniqueType}>Retrieval</div>
            </div>
            <div className={styles.techniqueDescription}>
              <strong>Technique:</strong> Regular self-testing without looking at materials
            </div>
            <div className={styles.techniqueBenefits}>
              <strong>Benefits:</strong> Strengthens retrieval pathways and identifies knowledge gaps
            </div>
            <div className={styles.techniqueApplication}>
              <strong>Application:</strong> Create practice tests, use flashcards, explain concepts without notes
            </div>
          </div>

          <div className={styles.techniqueCard}>
            <div className={styles.techniqueHeader}>
              <h3>Interleaving</h3>
              <div className={styles.techniqueType}>Practice</div>
            </div>
            <div className={styles.techniqueDescription}>
              <strong>Technique:</strong> Mix different types of problems or topics during study sessions
            </div>
            <div className={styles.techniqueBenefits}>
              <strong>Benefits:</strong> Improves discrimination and transfer of learning
            </div>
            <div className={styles.techniqueApplication}>
              <strong>Application:</strong> Alternate between different subjects, vary problem types within sessions
            </div>
          </div>
        </div>
      </section>

      {/* Learning Mistakes */}
      <section className={styles.mistakesSection}>
        <h2>Common Learning Mistakes</h2>
        <p className={styles.sectionSubtitle}>Avoid these pitfalls for more effective learning and memory</p>
        
        <div className={styles.mistakesGrid}>
          <div className={styles.mistakeCard}>
            <h3>Passive Reading</h3>
            <p className={styles.mistakeDescription}>
              Simply reading and highlighting without active engagement leads to poor retention
            </p>
            <div className={styles.mistakeSolutions}>
              <h4>Solutions:</h4>
              <ul>
                <li>Use active recall techniques</li>
                <li>Summarize in your own words</li>
                <li>Create questions while reading</li>
                <li>Explain concepts out loud</li>
              </ul>
            </div>
          </div>

          <div className={styles.mistakeCard}>
            <h3>Massed Practice</h3>
            <p className={styles.mistakeDescription}>
              Cramming all learning into single sessions without spacing leads to rapid forgetting
            </p>
            <div className={styles.mistakeSolutions}>
              <h4>Solutions:</h4>
              <ul>
                <li>Distribute practice over time</li>
                <li>Use spaced repetition schedules</li>
                <li>Plan multiple shorter sessions</li>
                <li>Review at increasing intervals</li>
              </ul>
            </div>
          </div>

          <div className={styles.mistakeCard}>
            <h3>Multitasking During Learning</h3>
            <p className={styles.mistakeDescription}>
              Divided attention reduces encoding quality and memory formation
            </p>
            <div className={styles.mistakeSolutions}>
              <h4>Solutions:</h4>
              <ul>
                <li>Focus on single task at a time</li>
                <li>Eliminate distractions</li>
                <li>Use focused attention blocks</li>
                <li>Practice monotasking skills</li>
              </ul>
            </div>
          </div>

          <div className={styles.mistakeCard}>
            <h3>Neglecting Sleep</h3>
            <p className={styles.mistakeDescription}>
              Insufficient sleep impairs memory consolidation and learning capacity
            </p>
            <div className={styles.mistakeSolutions}>
              <h4>Solutions:</h4>
              <ul>
                <li>Prioritize 7-9 hours nightly</li>
                <li>Maintain consistent sleep schedule</li>
                <li>Avoid late-night cramming</li>
                <li>Use strategic short naps</li>
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
              <h3>Optimize Learning Environment</h3>
              <p>
                Create a distraction-free environment with proper lighting, temperature, and organization. 
                Remove phones and other potential interruptions during focused study sessions.
              </p>
            </div>
          </div>

          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Plan Learning Sessions</h3>
              <p>
                Structure sessions around 90-minute ultradian cycles with clear objectives. 
                Schedule challenging material during peak alertness periods.
              </p>
            </div>
          </div>

          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Use Active Learning Techniques</h3>
              <p>
                Implement active recall, spaced repetition, and elaborative encoding. 
                Test yourself regularly and explain concepts without looking at materials.
              </p>
            </div>
          </div>

          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Prime for Neuroplasticity</h3>
              <p>
                Begin sessions with brief cardiovascular exercise, cold exposure, or breathing techniques 
                to enhance brain state for learning and memory formation.
              </p>
            </div>
          </div>

          <div className={styles.implementationStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h3>Consolidate Through Sleep</h3>
              <p>
                Prioritize quality sleep for memory consolidation. Review key concepts before sleep 
                and maintain consistent sleep-wake cycles for optimal learning outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
