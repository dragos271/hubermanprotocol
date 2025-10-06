"use client";
import { useState } from "react";

export default function BodySystemDiagram() {
  const [selectedSystem, setSelectedSystem] = useState(null);

  const systems = [
    {
      id: 'brain',
      name: 'Nervous System',
      color: '#8B5CF6',
      icon: '🧠',
      description: 'Central command center for cognitive function and neural health',
      effects: ['Enhanced focus & concentration', 'Improved memory consolidation', 'Reduced anxiety & stress', 'Increased neuroplasticity']
    },
    {
      id: 'heart',
      name: 'Cardiovascular',
      color: '#EF4444',
      icon: '❤️',
      description: 'Heart and circulatory system optimization',
      effects: ['Lower resting heart rate', 'Improved heart rate variability', 'Enhanced circulation', 'Optimized blood pressure']
    },
    {
      id: 'lungs',
      name: 'Respiratory',
      color: '#06B6D4',
      icon: '🫁',
      description: 'Breathing and oxygen delivery systems',
      effects: ['Enhanced oxygen uptake', 'Better breath control', 'Improved CO2 tolerance', 'Stress relief through breathing']
    },
    {
      id: 'stomach',
      name: 'Digestive',
      color: '#10B981',
      icon: '🟢',
      description: 'Gut health and metabolic optimization',
      effects: ['Improved gut microbiome', 'Enhanced metabolism', 'Better nutrient absorption', 'Reduced inflammation']
    },
    {
      id: 'muscles',
      name: 'Muscular',
      color: '#F59E0B',
      icon: '💪',
      description: 'Muscle strength and recovery systems',
      effects: ['Increased strength & power', 'Faster recovery time', 'Enhanced endurance', 'Improved flexibility']
    },
    {
      id: 'immune',
      name: 'Immune System',
      color: '#EC4899',
      icon: '🛡️',
      description: 'Body defense and healing mechanisms',
      effects: ['Stronger immune response', 'Faster healing & recovery', 'Reduced systemic inflammation', 'Better stress adaptation']
    }
  ];

  return (
    <div style={{
      padding: '32px',
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 100%)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(40px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Title */}
      <h3 style={{ 
        color: 'var(--text)', 
        marginBottom: '32px',
        fontSize: '28px',
        fontWeight: '700',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #8B5CF6, #EF4444, #06B6D4, #10B981)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '-0.02em'
      }}>
        Protocol Impact on Body Systems
      </h3>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: selectedSystem ? '1fr 1fr' : '1fr',
        gap: '32px',
        alignItems: 'start'
      }}>
        {/* Systems Grid */}
        <div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '16px',
            textAlign: 'center',
            marginBottom: '24px',
            fontWeight: '500'
          }}>
            Click on a system to explore protocol benefits
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px'
          }}>
            {systems.map((system) => (
              <button
                key={system.id}
                style={{
                  background: selectedSystem === system.id 
                    ? `linear-gradient(135deg, ${system.color}25, ${system.color}15)` 
                    : 'rgba(255, 255, 255, 0.04)',
                  border: selectedSystem === system.id 
                    ? `2px solid ${system.color}` 
                    : '2px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '20px',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  transform: selectedSystem === system.id ? 'translateY(-2px) scale(1.02)' : 'translateY(0)',
                  boxShadow: selectedSystem === system.id 
                    ? `0 12px 32px ${system.color}30` 
                    : '0 4px 16px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(20px)',
                  minHeight: '140px'
                }}
                onClick={() => setSelectedSystem(selectedSystem === system.id ? null : system.id)}
                onMouseEnter={(e) => {
                  if (selectedSystem !== system.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = `0 8px 24px ${system.color}20`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedSystem !== system.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                  }
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${system.color}, ${system.color}CC)`,
                  boxShadow: `0 8px 24px ${system.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  flexShrink: 0,
                  border: '2px solid rgba(255, 255, 255, 0.2)'
                }}>
                  {system.icon}
                </div>
                
                <div>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    margin: '0 0 4px 0',
                    letterSpacing: '-0.01em',
                    color: selectedSystem === system.id ? system.color : 'var(--text)'
                  }}>
                    {system.name}
                  </h4>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    margin: 0,
                    lineHeight: '1.4',
                    fontWeight: '400'
                  }}>
                    {system.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected System Benefits */}
        {selectedSystem && (
          <div style={{
            background: `linear-gradient(135deg, ${systems.find(s => s.id === selectedSystem)?.color}20, ${systems.find(s => s.id === selectedSystem)?.color}10)`,
            border: `2px solid ${systems.find(s => s.id === selectedSystem)?.color}50`,
            borderRadius: '24px',
            padding: '24px',
            backdropFilter: 'blur(20px)',
            boxShadow: `0 16px 40px ${systems.find(s => s.id === selectedSystem)?.color}25`,
            animation: 'fadeInBenefit 0.4s ease-out',
            position: 'sticky',
            top: '20px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${systems.find(s => s.id === selectedSystem)?.color}, ${systems.find(s => s.id === selectedSystem)?.color}CC)`,
                boxShadow: `0 8px 24px ${systems.find(s => s.id === selectedSystem)?.color}50`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                border: '2px solid rgba(255, 255, 255, 0.2)'
              }}>
                {systems.find(s => s.id === selectedSystem)?.icon}
              </div>
              
              <div>
                <h4 style={{
                  color: 'var(--text)',
                  fontSize: '20px',
                  fontWeight: '700',
                  margin: '0 0 4px 0',
                  letterSpacing: '-0.02em'
                }}>
                  {systems.find(s => s.id === selectedSystem)?.name}
                </h4>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  Protocol Benefits
                </p>
              </div>
            </div>

            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '15px',
              lineHeight: '1.5',
              marginBottom: '20px',
              fontWeight: '500'
            }}>
              {systems.find(s => s.id === selectedSystem)?.description}
            </p>

            <div>
              <h5 style={{
                color: 'var(--text)',
                fontSize: '14px',
                fontWeight: '700',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Key Benefits
              </h5>
              <div style={{
                display: 'grid',
                gap: '10px'
              }}>
                {systems.find(s => s.id === selectedSystem)?.effects.map((effect, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      padding: '12px 16px',
                      borderRadius: '14px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                      e.target.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: systems.find(s => s.id === selectedSystem)?.color,
                        boxShadow: `0 0 12px ${systems.find(s => s.id === selectedSystem)?.color}80`
                      }} />
                      <span style={{
                        color: 'var(--text)',
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '1.4'
                      }}>
                        {effect}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Instruction text when no system selected */}
      {!selectedSystem && (
        <div style={{
          textAlign: 'center',
          marginTop: '32px',
          padding: '24px',
          background: 'rgba(255, 255, 255, 0.04)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8B5CF6, #EF4444)',
            margin: '0 auto 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px'
          }}>
            🎯
          </div>
          <h4 style={{
            color: 'var(--text)',
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            Explore System Benefits
          </h4>
          <p style={{
            color: 'var(--muted)',
            fontSize: '14px',
            margin: 0,
            lineHeight: '1.5'
          }}>
            Select any body system above to discover how Huberman protocols enhance your health and performance.
          </p>
        </div>
      )}
    </div>
  );
}