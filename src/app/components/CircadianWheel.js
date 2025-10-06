"use client";
import { useState, useEffect } from "react";

export default function CircadianWheel() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedProtocol, setSelectedProtocol] = useState(null);
  const [hoveredProtocol, setHoveredProtocol] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Enhanced protocols with scientific rationale
  const protocols = [
    { 
      time: "6-8 AM", 
      activity: "Morning Light", 
      color: "#FF6B35", 
      startHour: 6,
      description: "Get 10-30 minutes of bright light to set circadian clock",
      benefits: ["Cortisol peak optimization", "Adenosine clearance", "Temperature minimum reset"],
      tools: ["Sunlight exposure", "10,000 lux light therapy", "East-facing windows"]
    },
    { 
      time: "8-10 AM", 
      activity: "Peak Performance", 
      color: "#F7931E", 
      startHour: 8,
      description: "Optimal window for focused work and physical training",
      benefits: ["Maximum alertness", "Enhanced reaction time", "Ideal body temperature"],
      tools: ["Cognitive work", "Strength training", "Skill acquisition"]
    },
    { 
      time: "10-12 PM", 
      activity: "Deep Work", 
      color: "#FFD23F", 
      startHour: 10,
      description: "Sustained attention and complex problem solving",
      benefits: ["Peak cognitive function", "Enhanced memory", "Dopamine optimization"],
      tools: ["Complex analysis", "Creative work", "Learning protocols"]
    },
    { 
      time: "12-2 PM", 
      activity: "Active Recovery", 
      color: "#06FFA5", 
      startHour: 12,
      description: "Movement and nutrition to maintain afternoon energy",
      benefits: ["Metabolic optimization", "Lymphatic drainage", "Mental clarity"],
      tools: ["Walking meetings", "Balanced meals", "Hydration focus"]
    },
    { 
      time: "2-4 PM", 
      activity: "NSDR/Nap", 
      color: "#4ECDC4", 
      startHour: 14,
      description: "Non-sleep deep rest to counteract afternoon dip",
      benefits: ["Adenosine reduction", "Neuroplasticity boost", "Energy restoration"],
      tools: ["Yoga Nidra", "10-20 min nap", "Meditation", "Breathing protocols"]
    },
    { 
      time: "4-6 PM", 
      activity: "Movement & Social", 
      color: "#45B7D1", 
      startHour: 16,
      description: "Secondary peak for physical activity and social connection",
      benefits: ["Improved flexibility", "Social bonding", "Stress reduction"],
      tools: ["Zone 2 cardio", "Social activities", "Flexibility work"]
    },
    { 
      time: "6-8 PM", 
      activity: "Nutrition & Family", 
      color: "#96CEB4", 
      startHour: 18,
      description: "Final meal and quality time before winding down",
      benefits: ["Optimal digestion", "Social connection", "Nutrient timing"],
      tools: ["Protein-rich dinner", "Family time", "Gratitude practice"]
    },
    { 
      time: "8-10 PM", 
      activity: "Wind Down", 
      color: "#FFEAA7", 
      startHour: 20,
      description: "Begin sleep preparation and reduce stimulation",
      benefits: ["Melatonin onset", "Stress reduction", "Temperature drop"],
      tools: ["Dim lighting", "Reading", "Gentle stretching", "No screens"]
    },
    { 
      time: "10PM-2AM", 
      activity: "Deep Sleep", 
      color: "#6C5CE7", 
      startHour: 22,
      description: "Physical restoration and memory consolidation",
      benefits: ["Growth hormone release", "Tissue repair", "Toxin clearance"],
      tools: ["Cool environment", "Dark room", "Consistent timing"]
    },
    { 
      time: "2-6 AM", 
      activity: "REM Sleep", 
      color: "#A29BFE", 
      startHour: 2,
      description: "Emotional processing and creative problem solving",
      benefits: ["Memory integration", "Emotional regulation", "Creativity boost"],
      tools: ["Uninterrupted sleep", "Dream recall", "Stable temperature"]
    },
  ];

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const timeAngle = ((currentHour - 6 + (currentMinute / 60)) * 15) - 90;

  // Find current active protocol
  const getCurrentProtocol = () => {
    return protocols.find(protocol => {
      if (protocol.startHour === 22) return currentHour >= 22 || currentHour < 2;
      if (protocol.startHour === 2) return currentHour >= 2 && currentHour < 6;
      return currentHour >= protocol.startHour && currentHour < protocol.startHour + 2;
    });
  };

  const currentProtocol = getCurrentProtocol();

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
        marginBottom: '24px', 
        color: 'var(--text)',
        fontSize: '28px',
        fontWeight: '700',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #FF6B35, #4ECDC4, #6C5CE7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '-0.02em'
      }}>
        Circadian Rhythm Optimization
      </h3>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr',
        gap: '32px', 
        alignItems: 'start',
        '@media (max-width: 768px)': {
          gridTemplateColumns: '1fr',
          gap: '24px'
        }
      }}>
        {/* Left Column - Wheel */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          {/* Current time display */}
          <div style={{
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.9), rgba(255, 107, 53, 0.7))',
            padding: '12px 24px',
            borderRadius: '24px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)',
            letterSpacing: '0.5px'
          }}>
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>

          {/* Wheel Container */}
          <div style={{ 
            position: 'relative',
            width: '360px',
            height: '360px',
            background: 'radial-gradient(circle, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
            borderRadius: '50%',
            border: '3px solid rgba(255, 255, 255, 0.1)',
            boxShadow: 'inset 0 8px 24px rgba(0, 0, 0, 0.4), 0 12px 40px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease'
          }}>
            <svg width="360" height="360" viewBox="0 0 360 360" style={{ width: '100%', height: '100%' }}>
              {/* Protocol sections */}
              {protocols.map((protocol, i) => {
                let startAngle, endAngle;
                
                if (protocol.startHour === 22) {
                  startAngle = ((22 - 6) * 15) - 90;
                  endAngle = startAngle + 60;
                } else if (protocol.startHour === 2) {
                  startAngle = ((2 + 18) * 15) - 90;
                  endAngle = startAngle + 60;
                } else {
                  startAngle = ((protocol.startHour - 6) * 15) - 90;
                  endAngle = startAngle + 30;
                }
                
                const radius1 = 100;
                const radius2 = 160;
                const x1 = 180 + radius1 * Math.cos(startAngle * Math.PI / 180);
                const y1 = 180 + radius1 * Math.sin(startAngle * Math.PI / 180);
                const x2 = 180 + radius2 * Math.cos(startAngle * Math.PI / 180);
                const y2 = 180 + radius2 * Math.sin(startAngle * Math.PI / 180);
                const x3 = 180 + radius2 * Math.cos(endAngle * Math.PI / 180);
                const y3 = 180 + radius2 * Math.sin(endAngle * Math.PI / 180);
                const x4 = 180 + radius1 * Math.cos(endAngle * Math.PI / 180);
                const y4 = 180 + radius1 * Math.sin(endAngle * Math.PI / 180);

                const largeArc = endAngle - startAngle > 180 ? 1 : 0;
                const isActive = currentProtocol?.startHour === protocol.startHour;
                const isHovered = hoveredProtocol === i;
                const isSelected = selectedProtocol === i;

                return (
                  <g key={i}>
                    {/* Protocol segment */}
                    <path
                      d={`M ${x1} ${y1} L ${x2} ${y2} A ${radius2} ${radius2} 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A ${radius1} ${radius1} 0 ${largeArc} 0 ${x1} ${y1}`}
                      fill={protocol.color}
                      fillOpacity={isActive ? "0.9" : isHovered || isSelected ? "0.8" : "0.6"}
                      stroke={isActive ? "#FFFFFF" : protocol.color}
                      strokeWidth={isActive ? "3" : isHovered || isSelected ? "2" : "1"}
                      style={{ 
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        filter: isActive ? 'brightness(1.2)' : 'none'
                      }}
                      onMouseEnter={() => setHoveredProtocol(i)}
                      onMouseLeave={() => setHoveredProtocol(null)}
                      onClick={() => setSelectedProtocol(selectedProtocol === i ? null : i)}
                    />
                    
                    {/* Protocol labels */}
                    <text
                      x={180 + 130 * Math.cos((startAngle + (endAngle - startAngle) / 2) * Math.PI / 180)}
                      y={180 + 130 * Math.sin((startAngle + (endAngle - startAngle) / 2) * Math.PI / 180)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.9)"}
                      fontSize="10"
                      fontWeight={isActive ? "700" : "600"}
                      style={{ pointerEvents: 'none' }}
                    >
                      {protocol.activity}
                    </text>
                  </g>
                );
              })}

              {/* Hour markers */}
              {[...Array(12)].map((_, i) => {
                const hour24 = (6 + i * 2) % 24;
                const displayHour = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24;
                const ampm = hour24 >= 12 && hour24 !== 24 ? 'p' : 'a';
                const angle = i * 30 - 90;
                
                return (
                  <g key={i}>
                    <line
                      x1={180 + 80 * Math.cos(angle * Math.PI / 180)}
                      y1={180 + 80 * Math.sin(angle * Math.PI / 180)}
                      x2={180 + 95 * Math.cos(angle * Math.PI / 180)}
                      y2={180 + 95 * Math.sin(angle * Math.PI / 180)}
                      stroke="rgba(255, 255, 255, 0.5)"
                      strokeWidth="2"
                    />
                    <text
                      x={180 + 65 * Math.cos(angle * Math.PI / 180)}
                      y={180 + 65 * Math.sin(angle * Math.PI / 180)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="rgba(255, 255, 255, 0.9)"
                      fontSize="11"
                      fontWeight="700"
                    >
                      {displayHour}{ampm}
                    </text>
                  </g>
                );
              })}

              {/* Current time hand */}
              <line
                x1="180"
                y1="180"
                x2={180 + 55 * Math.cos(timeAngle * Math.PI / 180)}
                y2={180 + 55 * Math.sin(timeAngle * Math.PI / 180)}
                stroke="#FF6B35"
                strokeWidth="5"
                strokeLinecap="round"
                style={{
                  filter: 'drop-shadow(0 3px 6px rgba(255, 107, 53, 0.6))'
                }}
              />
              
              {/* Center dot */}
              <circle 
                cx="180" 
                cy="180" 
                r="8" 
                fill="#FF6B35"
                stroke="#FFFFFF"
                strokeWidth="3"
                style={{
                  filter: 'drop-shadow(0 3px 12px rgba(255, 107, 53, 0.8))'
                }}
              />
            </svg>
          </div>
        </div>

        {/* Right Column - Protocol Details */}
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          height: '100%'
        }}>
          {/* Active Protocol Card */}
          {(selectedProtocol !== null || currentProtocol) && (
            <div style={{
              background: `linear-gradient(135deg, ${(protocols[selectedProtocol] || currentProtocol).color}20, ${(protocols[selectedProtocol] || currentProtocol).color}10)`,
              border: `2px solid ${(protocols[selectedProtocol] || currentProtocol).color}60`,
              borderRadius: '20px',
              padding: '24px',
              backdropFilter: 'blur(20px)',
              boxShadow: `0 12px 32px ${(protocols[selectedProtocol] || currentProtocol).color}25, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
              animation: 'fadeInBenefit 0.4s ease-out',
              transition: 'all 0.3s ease'
            }}>
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${(protocols[selectedProtocol] || currentProtocol).color}, ${(protocols[selectedProtocol] || currentProtocol).color}CC)`,
                  boxShadow: `0 8px 24px ${(protocols[selectedProtocol] || currentProtocol).color}50`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: '#FFFFFF',
                  fontWeight: '700',
                  border: '2px solid rgba(255, 255, 255, 0.2)'
                }}>
                  {selectedProtocol !== null ? selectedProtocol + 1 : protocols.findIndex(p => p === currentProtocol) + 1}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    color: 'var(--text)',
                    fontSize: '22px',
                    fontWeight: '700',
                    margin: '0 0 4px 0',
                    letterSpacing: '-0.02em'
                  }}>
                    {(protocols[selectedProtocol] || currentProtocol).activity}
                  </h4>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      {(protocols[selectedProtocol] || currentProtocol).time}
                    </span>
                    {currentProtocol && selectedProtocol === null && (
                      <span style={{
                        background: (protocols[selectedProtocol] || currentProtocol).color,
                        color: '#FFFFFF',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        ACTIVE
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '15px',
                lineHeight: '1.5',
                marginBottom: '20px',
                fontWeight: '500'
              }}>
                {(protocols[selectedProtocol] || currentProtocol).description}
              </p>

              {/* Benefits Section */}
              <div style={{ marginBottom: '20px' }}>
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
                  gap: '8px'
                }}>
                  {(protocols[selectedProtocol] || currentProtocol).benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: (protocols[selectedProtocol] || currentProtocol).color,
                        boxShadow: `0 0 8px ${(protocols[selectedProtocol] || currentProtocol).color}80`
                      }} />
                      <span style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '13px',
                        fontWeight: '500',
                        flex: 1
                      }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Section */}
              <div>
                <h5 style={{
                  color: 'var(--text)',
                  fontSize: '14px',
                  fontWeight: '700',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Recommended Tools
                </h5>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {(protocols[selectedProtocol] || currentProtocol).tools.slice(0, 4).map((tool, i) => (
                    <span
                      key={i}
                      style={{
                        background: `linear-gradient(135deg, ${(protocols[selectedProtocol] || currentProtocol).color}30, ${(protocols[selectedProtocol] || currentProtocol).color}20)`,
                        color: '#FFFFFF',
                        padding: '6px 12px',
                        borderRadius: '16px',
                        fontSize: '12px',
                        fontWeight: '600',
                        border: `1px solid ${(protocols[selectedProtocol] || currentProtocol).color}40`,
                        boxShadow: `0 2px 8px ${(protocols[selectedProtocol] || currentProtocol).color}20`
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {selectedProtocol === null && !currentProtocol && (
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '32px',
              textAlign: 'center',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF6B35, #4ECDC4)',
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px'
              }}>
                🕐
              </div>
              <h4 style={{
                color: 'var(--text)',
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '8px'
              }}>
                Interactive Circadian Guide
              </h4>
              <p style={{
                color: 'var(--muted)',
                fontSize: '14px',
                lineHeight: '1.5',
                marginBottom: '0'
              }}>
                Click any time segment on the wheel to explore science-based protocols for optimal performance and recovery.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quick tips footer */}
      <div style={{
        marginTop: '24px',
        padding: '16px',
        background: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        textAlign: 'center'
      }}>
        <p style={{ 
          color: 'var(--muted)', 
          fontSize: '12px', 
          margin: 0,
          fontStyle: 'italic'
        }}>
          💡 Your circadian rhythm is your body&apos;s natural 24-hour cycle. Aligning with it optimizes hormone production, cognitive performance, and recovery.
        </p>
      </div>
    </div>
  );
}
