"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import EnhancedSectionCard from "../components/EnhancedSectionCard";
import ProgressBar from "../components/ProgressBar";

export default function BiohackingAdvanced() {
  const [selectedProtocol, setSelectedProtocol] = useState('hrv');
  const [userLevel, setUserLevel] = useState('beginner');

  const protocols = {
    hrv: {
      name: 'HRV Training',
      icon: '❤️',
      description: 'Heart Rate Variability optimization for autonomic balance',
      levels: {
        beginner: {
          title: 'Foundation Phase (Weeks 1-4)',
          practices: [
            'Daily HRV measurement upon waking',
            'Basic coherent breathing (4-7-8 pattern)',
            '5-minute meditation sessions',
            'Track sleep quality correlation'
          ],
          tools: ['HRV4Training app', 'Chest strap monitor', 'Basic breathing timer'],
          targets: 'Establish baseline and consistency'
        },
        intermediate: {
          title: 'Development Phase (Weeks 5-12)',
          practices: [
            'HRV-guided training intensity',
            'Advanced breathing patterns (Box breathing, Wim Hof)',
            '10-15 minute NSDR sessions',
            'Cold exposure 2-3x per week'
          ],
          tools: ['Elite HRV', 'Oura Ring', 'Cold plunge or cold shower'],
          targets: 'Improve HRV score by 10-20%'
        },
        advanced: {
          title: 'Optimization Phase (Weeks 13+)',
          practices: [
            'Real-time HRV biofeedback training',
            'Breathwork combined with movement',
            'Stress inoculation protocols',
            'Advanced recovery metrics tracking'
          ],
          tools: ['HeartMath Pro', 'Continuous HRV monitoring', 'Advanced recovery devices'],
          targets: 'Achieve elite-level HRV and rapid recovery'
        }
      }
    },
    thermotherapy: {
      name: 'Cold/Heat Therapy',
      icon: '🧊',
      description: 'Progressive adaptation to temperature extremes',
      levels: {
        beginner: {
          title: 'Adaptation Phase (Weeks 1-6)',
          practices: [
            '30-second cold showers daily',
            '10-minute sauna sessions 2x/week',
            'Contrast therapy (hot-cold alternating)',
            'Basic breathing during exposure'
          ],
          tools: ['Home shower', 'Local sauna', 'Thermometer', 'Timer'],
          targets: 'Build basic cold tolerance and heat adaptation'
        },
        intermediate: {
          title: 'Progressive Phase (Weeks 7-16)',
          practices: [
            '2-3 minute cold plunges',
            '15-20 minute sauna sessions',
            'Ice baths 2-3x per week',
            'Breathwork mastery during stress'
          ],
          tools: ['Ice bath setup', 'Infrared sauna', 'Wim Hof breathing app'],
          targets: 'Achieve 3+ minutes cold exposure comfort'
        },
        advanced: {
          title: 'Mastery Phase (Weeks 17+)',
          practices: [
            '5+ minute ice baths',
            'Extended sauna protocols (45+ min)',
            'Extreme temperature challenges',
            'Teaching others thermotherapy'
          ],
          tools: ['Professional cold tub', 'High-end sauna', 'Advanced monitoring'],
          targets: 'Master temperature resilience and recovery'
        }
      }
    },
    fasting: {
      name: 'Advanced Fasting',
      icon: '⏰',
      description: 'Strategic fasting protocols for metabolic optimization',
      levels: {
        beginner: {
          title: 'Time-Restricted Eating (Weeks 1-8)',
          practices: [
            '12-hour eating window',
            'Consistent meal timing',
            'Proper hydration during fasting',
            'Track energy and hunger signals'
          ],
          tools: ['Fasting app', 'Glucose monitor', 'Ketone strips'],
          targets: 'Establish metabolic flexibility baseline'
        },
        intermediate: {
          title: 'Extended Fasting (Weeks 9-20)',
          practices: [
            '16:8 to 18:6 fasting windows',
            '24-hour fasts monthly',
            'Exercise during fasted states',
            'Advanced metabolic tracking'
          ],
          tools: ['Continuous glucose monitor', 'Ketone meter', 'DEXA scans'],
          targets: 'Achieve efficient fat oxidation and autophagy'
        },
        advanced: {
          title: 'Periodic Fasting (Weeks 21+)',
          practices: [
            '48-72 hour quarterly fasts',
            'Fasting-mimicking diets',
            'Strategic refeeding protocols',
            'Biomarker optimization'
          ],
          tools: ['Medical supervision', 'Advanced lab testing', 'Professional guidance'],
          targets: 'Optimize longevity biomarkers and cellular renewal'
        }
      }
    },
    nootropics: {
      name: 'Cognitive Enhancement',
      icon: '🧠',
      description: 'Evidence-based cognitive enhancement protocols',
      levels: {
        beginner: {
          title: 'Foundation Stack (Weeks 1-6)',
          practices: [
            'Caffeine + L-theanine timing',
            'Basic omega-3 supplementation',
            'Sleep optimization priority',
            'Cognitive baseline testing'
          ],
          tools: ['Quality coffee', 'L-theanine 200mg', 'Fish oil', 'Cognitive tests'],
          targets: 'Establish clean energy and focus baseline'
        },
        intermediate: {
          title: 'Targeted Enhancement (Weeks 7-16)',
          practices: [
            'Alpha-GPC + Bacopa protocols',
            'Racetam cycling (if legal)',
            'Advanced sleep tracking',
            'Cognitive load training'
          ],
          tools: ['Quality nootropics', 'EEG headband', 'Cognitive training apps'],
          targets: 'Measurable improvements in memory and focus'
        },
        advanced: {
          title: 'Precision Optimization (Weeks 17+)',
          practices: [
            'Genetic-based supplementation',
            'Neurofeedback training',
            'Advanced stack cycling',
            'Biomarker-guided protocols'
          ],
          tools: ['Genetic testing', 'Professional neurofeedback', 'Lab monitoring'],
          targets: 'Achieve peak cognitive performance sustainably'
        }
      }
    }
  };

  const selectedData = protocols[selectedProtocol];
  const currentLevel = selectedData.levels[userLevel];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        style={{ marginBottom: '24px' }}
      >
        <Link 
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--muted)',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: 'rgba(255,255,255,0.05)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.1)';
            e.target.style.borderColor = 'rgba(255,255,255,0.2)';
            e.target.style.color = 'var(--text)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.05)';
            e.target.style.borderColor = 'var(--border)';
            e.target.style.color = 'var(--muted)';
          }}
        >
          ← Back to Home
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: '700', 
          textAlign: 'center',
          marginBottom: '12px',
          background: 'linear-gradient(135deg, #EF4444, #8B5CF6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Advanced Biohacking Protocols
        </h1>
        
        <p style={{ 
          fontSize: '18px', 
          color: 'var(--muted)', 
          textAlign: 'center',
          marginBottom: '40px',
          maxWidth: '700px',
          margin: '0 auto 40px auto'
        }}>
          Science-based advanced protocols for optimal human performance and longevity
        </p>
      </motion.div>

      {/* Protocol Selector */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px',
        marginBottom: '32px'
      }}>
        {Object.entries(protocols).map(([key, protocol], index) => (
          <motion.button
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedProtocol(key)}
            style={{
              background: selectedProtocol === key 
                ? 'linear-gradient(135deg, #8B5CF6, #6366F1)'
                : 'rgba(255,255,255,0.05)',
              border: selectedProtocol === key 
                ? '2px solid #8B5CF6'
                : '2px solid var(--border)',
              borderRadius: '12px',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>
              {protocol.icon}
            </div>
            <h3 style={{ 
              color: selectedProtocol === key ? 'white' : 'var(--text)',
              margin: '0 0 8px 0',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              {protocol.name}
            </h3>
            <p style={{ 
              color: selectedProtocol === key ? 'rgba(255,255,255,0.9)' : 'var(--muted)',
              margin: 0,
              fontSize: '14px'
            }}>
              {protocol.description}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Level Selector */}
      <motion.div
        key={selectedProtocol}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '32px' }}
      >
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '16px',
          color: 'var(--text)',
          textAlign: 'center'
        }}>
          Choose Your Level
        </h3>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          {['beginner', 'intermediate', 'advanced'].map((level) => (
            <button
              key={level}
              onClick={() => setUserLevel(level)}
              style={{
                background: userLevel === level 
                  ? 'linear-gradient(135deg, #10B981, #059669)'
                  : 'rgba(255,255,255,0.05)',
                border: userLevel === level 
                  ? '2px solid #10B981'
                  : '2px solid var(--border)',
                borderRadius: '8px',
                padding: '12px 24px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                color: userLevel === level ? 'white' : 'var(--text)',
                fontWeight: '600',
                textTransform: 'capitalize'
              }}
            >
              {level}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Current Protocol Details */}
      <motion.div
        key={`${selectedProtocol}-${userLevel}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <EnhancedSectionCard
          title={`${selectedData.name} - ${currentLevel.title}`}
          description={selectedData.description}
          icon={selectedData.icon}
        >
          <div style={{ marginTop: '20px' }}>
            {/* Practices */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ 
                color: 'var(--text)', 
                marginBottom: '12px',
                fontSize: '16px',
                fontWeight: '600'
              }}>
                Core Practices
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {currentLevel.practices.map((practice, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      marginBottom: '8px',
                      fontSize: '14px',
                      color: 'var(--muted)'
                    }}
                  >
                    <span style={{ color: '#10B981', fontWeight: 'bold', marginTop: '2px' }}>
                      •
                    </span>
                    {practice}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ 
                color: 'var(--text)', 
                marginBottom: '12px',
                fontSize: '16px',
                fontWeight: '600'
              }}>
                Recommended Tools
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {currentLevel.tools.map((tool, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(139, 92, 246, 0.2)',
                      color: '#8B5CF6',
                      padding: '6px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Targets */}
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid #10B981',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <h4 style={{ 
                color: '#10B981', 
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '600'
              }}>
                Success Targets
              </h4>
              <p style={{
                color: 'var(--text)',
                margin: 0,
                fontSize: '14px'
              }}>
                {currentLevel.targets}
              </p>
            </div>
          </div>
        </EnhancedSectionCard>
      </motion.div>

      {/* Progress Tracking Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ marginTop: '32px' }}
      >
        <EnhancedSectionCard
          title="Track Your Progress"
          description="Monitor your advancement through each protocol"
          icon="📊"
        >
          <div style={{ marginTop: '20px' }}>
            <ProgressBar
              label="Protocol Completion"
              value={userLevel === 'beginner' ? 25 : userLevel === 'intermediate' ? 60 : 95}
              color="#8B5CF6"
              animated={true}
            />
            
            <div style={{ 
              marginTop: '16px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#10B981' }}>
                  {userLevel === 'beginner' ? '4' : userLevel === 'intermediate' ? '12' : '24'}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                  Weeks Duration
                </div>
              </div>
              
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#F59E0B' }}>
                  {currentLevel.practices.length}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                  Core Practices
                </div>
              </div>
              
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#8B5CF6' }}>
                  {currentLevel.tools.length}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                  Required Tools
                </div>
              </div>
            </div>
          </div>
        </EnhancedSectionCard>
      </motion.div>

      {/* Safety Warning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          marginTop: '32px',
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))',
          border: '1px solid #EF4444',
          borderRadius: '12px',
          padding: '24px'
        }}
      >
        <h3 style={{
          color: '#EF4444',
          marginBottom: '12px',
          fontSize: '20px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          ⚠️ Important Safety Notice
        </h3>
        <p style={{
          color: 'var(--text)',
          fontSize: '14px',
          lineHeight: '1.6',
          margin: 0
        }}>
          Advanced biohacking protocols can have powerful effects on your physiology. Always consult with healthcare professionals before beginning any new protocol, especially if you have existing health conditions. Start slowly, track your biomarkers, and prioritize safety over performance. These protocols are for educational purposes and should not replace professional medical advice.
        </p>
      </motion.div>
    </div>
  );
}
