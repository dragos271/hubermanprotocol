"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

export default function NeurotransmitterBalance() {
  const [selectedNeurotransmitter, setSelectedNeurotransmitter] = useState('dopamine');
  const [timeOfDay, setTimeOfDay] = useState(12); // 24-hour format
  const canvasRef = useRef(null);

  const neurotransmitters = useMemo(() => ({
    dopamine: {
      name: 'Dopamine',
      color: '#EF4444',
      description: 'Motivation, reward, focus',
      protocols: ['Cold exposure', 'Exercise', 'Protein intake', 'Sunlight'],
      peakTimes: [8, 14, 18], // Hours when typically highest
      baseline: 50
    },
    serotonin: {
      name: 'Serotonin',
      color: '#10B981',
      description: 'Mood, sleep, appetite',
      protocols: ['Sunlight', 'Tryptophan foods', 'Exercise', 'Social connection'],
      peakTimes: [10, 16], 
      baseline: 60
    },
    cortisol: {
      name: 'Cortisol',
      color: '#F59E0B',
      description: 'Alertness, stress response',
      protocols: ['Morning light', 'Stress management', 'Sleep hygiene', 'Breathing'],
      peakTimes: [7, 11],
      baseline: 40
    },
    melatonin: {
      name: 'Melatonin',
      color: '#8B5CF6',
      description: 'Sleep, circadian rhythm',
      protocols: ['Darkness', 'Cool temperature', 'No blue light', 'Magnesium'],
      peakTimes: [22, 2],
      baseline: 20
    },
    gaba: {
      name: 'GABA',
      color: '#06B6D4',
      description: 'Calm, relaxation, sleep',
      protocols: ['NSDR', 'Magnesium', 'Theanine', 'Deep breathing'],
      peakTimes: [20, 23],
      baseline: 45
    },
    acetylcholine: {
      name: 'Acetylcholine',
      color: '#EC4899',
      description: 'Focus, learning, memory',
      protocols: ['Alpha-GPC', 'Focus work', 'Learning tasks', 'Choline foods'],
      peakTimes: [9, 15],
      baseline: 35
    }
  }), []);

  const calculateLevel = useCallback((neurotransmitter, hour) => {
    const nt = neurotransmitters[neurotransmitter];
    let level = nt.baseline;
    
    // Add peaks
    nt.peakTimes.forEach(peakHour => {
      const distance = Math.abs(hour - peakHour);
      const peakEffect = Math.max(0, 30 - (distance * 5));
      level += peakEffect;
    });

    // Special cases for circadian patterns
    if (neurotransmitter === 'melatonin') {
      if (hour >= 20 || hour <= 6) {
        level += 40;
      } else if (hour >= 7 && hour <= 19) {
        level = Math.max(5, level - 30);
      }
    }

    if (neurotransmitter === 'cortisol') {
      if (hour >= 6 && hour <= 9) {
        level += 35;
      } else if (hour >= 22 || hour <= 5) {
        level = Math.max(10, level - 25);
      }
    }

    return Math.max(0, Math.min(100, level));
  }, [neurotransmitters]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = 50;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    // Clear canvas with subtle gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(15, 23, 42, 0.8)');
    gradient.addColorStop(1, 'rgba(30, 41, 59, 0.4)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw professional grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = padding + (chartHeight / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    // Vertical grid lines (every 4 hours)
    for (let i = 0; i <= 6; i++) {
      const x = padding + (chartWidth / 6) * i;
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, height - padding);
      ctx.stroke();
    }

    // Draw neurotransmitter curves with smooth gradients
    Object.keys(neurotransmitters).forEach(ntKey => {
      const nt = neurotransmitters[ntKey];
      const isSelected = ntKey === selectedNeurotransmitter;
      
      // Create gradient for the line
      const lineGradient = ctx.createLinearGradient(padding, padding, width - padding, height - padding);
      lineGradient.addColorStop(0, nt.color + '40');
      lineGradient.addColorStop(1, nt.color);
      
      ctx.strokeStyle = isSelected ? nt.color : lineGradient;
      ctx.lineWidth = isSelected ? 4 : 2;
      ctx.globalAlpha = isSelected ? 1 : 0.3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      // Add subtle glow effect for selected
      if (isSelected) {
        ctx.shadowColor = nt.color;
        ctx.shadowBlur = 8;
      }
      
      ctx.beginPath();
      for (let hour = 0; hour <= 24; hour += 0.2) {
        const x = padding + (chartWidth / 24) * hour;
        const level = calculateLevel(ntKey, hour);
        const y = padding + chartHeight - (level / 100) * chartHeight;
        
        if (hour === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      
      // Reset shadow
      ctx.shadowBlur = 0;
    });

    // Draw current time indicator with Apple-style design
    const currentX = padding + (chartWidth / 24) * timeOfDay;
    
    // Time indicator line
    const timeGradient = ctx.createLinearGradient(0, padding, 0, height - padding);
    timeGradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
    timeGradient.addColorStop(1, 'rgba(139, 92, 246, 0.3)');
    
    ctx.strokeStyle = timeGradient;
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(currentX, padding);
    ctx.lineTo(currentX, height - padding);
    ctx.stroke();
    ctx.setLineDash([]);

    // Current level indicator with glow
    const currentLevel = calculateLevel(selectedNeurotransmitter, timeOfDay);
    const currentY = padding + chartHeight - (currentLevel / 100) * chartHeight;
    
    // Outer glow
    ctx.shadowColor = neurotransmitters[selectedNeurotransmitter].color;
    ctx.shadowBlur = 15;
    ctx.fillStyle = neurotransmitters[selectedNeurotransmitter].color;
    ctx.beginPath();
    ctx.arc(currentX, currentY, 8, 0, 2 * Math.PI);
    ctx.fill();
    
    // Inner white dot
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(currentX, currentY, 4, 0, 2 * Math.PI);
    ctx.fill();
    
    // Border ring
    ctx.strokeStyle = neurotransmitters[selectedNeurotransmitter].color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(currentX, currentY, 6, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.globalAlpha = 1;
  }, [selectedNeurotransmitter, timeOfDay, calculateLevel, neurotransmitters]);

  const currentLevel = calculateLevel(selectedNeurotransmitter, timeOfDay);
  const selectedNT = neurotransmitters[selectedNeurotransmitter];

  return (
    <div style={{
      padding: '40px',
      background: 'rgba(15, 23, 42, 0.6)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    }}>
      <h3 style={{ 
        color: 'var(--text)', 
        marginBottom: '32px',
        fontSize: '28px',
        fontWeight: '700',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.02em'
      }}>
        Neurotransmitter Balance Throughout Day
      </h3>

      {/* Time selector - Apple style */}
      <div style={{ 
        marginBottom: '40px',
        background: 'rgba(255, 255, 255, 0.04)',
        borderRadius: '20px',
        padding: '24px',
        border: '1px solid rgba(255, 255, 255, 0.06)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <label style={{ 
            color: 'var(--text)', 
            fontSize: '17px',
            fontWeight: '600',
            letterSpacing: '-0.01em'
          }}>
            Time of Day
          </label>
          <div style={{
            background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            fontVariantNumeric: 'tabular-nums',
            minWidth: '70px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
          }}>
            {String(timeOfDay).padStart(2, '0')}:00
          </div>
        </div>
        
        <div style={{ position: 'relative' }}>
          <input
            type="range"
            min="0"
            max="24"
            value={timeOfDay}
            onChange={(e) => setTimeOfDay(parseInt(e.target.value))}
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '3px',
              background: 'linear-gradient(90deg, #1E293B 0%, #FEF3C7 25%, #DBEAFE 50%, #8B5CF6 75%, #1E293B 100%)',
              outline: 'none',
              cursor: 'pointer',
              WebkitAppearance: 'none',
              appearance: 'none'
            }}
          />
          <style>{`
            input[type="range"]::-webkit-slider-thumb {
              appearance: none;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: linear-gradient(135deg, #ffffff, #e2e8f0);
              cursor: pointer;
              border: 3px solid rgba(139, 92, 246, 0.8);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 4px rgba(139, 92, 246, 0.1);
              transition: all 0.2s ease;
            }
            
            input[type="range"]::-webkit-slider-thumb:hover {
              transform: scale(1.1);
              box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2), 0 0 0 6px rgba(139, 92, 246, 0.15);
            }
          `}</style>
          
          <div style={{
            position: 'absolute',
            top: '20px',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.4)',
            fontWeight: '500',
            fontVariantNumeric: 'tabular-nums'
          }}>
            <span>00</span>
            <span>06</span>
            <span>12</span>
            <span>18</span>
            <span>24</span>
          </div>
        </div>
      </div>

      {/* Chart container - Apple glass effect */}
      <div style={{
        position: 'relative',
        background: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '40px',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(40px)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 8px 32px rgba(0, 0, 0, 0.12)'
      }}>
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          style={{ 
            width: '100%', 
            height: 'auto',
            borderRadius: '12px'
          }}
        />
        
        {/* Y-axis labels - Apple style */}
        <div style={{
          position: 'absolute',
          left: '8px',
          top: '32px',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontSize: '13px',
          color: 'rgba(255, 255, 255, 0.5)',
          fontWeight: '500',
          fontVariantNumeric: 'tabular-nums'
        }}>
          <span>100</span>
          <span>75</span>
          <span>50</span>
          <span>25</span>
          <span>0</span>
        </div>

        {/* X-axis labels - Apple style */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '16px',
          fontSize: '13px',
          color: 'rgba(255, 255, 255, 0.5)',
          fontWeight: '500',
          fontVariantNumeric: 'tabular-nums',
          paddingLeft: '50px',
          paddingRight: '20px'
        }}>
          {[0, 4, 8, 12, 16, 20, 24].map(hour => (
            <span key={hour}>{String(hour).padStart(2, '0')}:00</span>
          ))}
        </div>
      </div>

      {/* Neurotransmitter selector - Apple style */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.04)',
        borderRadius: '20px',
        padding: '32px',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        marginBottom: '40px'
      }}>
        <h4 style={{
          color: 'var(--text)',
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '24px',
          textAlign: 'center',
          letterSpacing: '-0.01em'
        }}>
          Select Neurotransmitter
        </h4>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {Object.entries(neurotransmitters).map(([key, nt]) => (
            <button
              key={key}
              onClick={() => setSelectedNeurotransmitter(key)}
              style={{
                background: selectedNeurotransmitter === key 
                  ? `linear-gradient(135deg, ${nt.color}22, ${nt.color}11)` 
                  : 'rgba(255, 255, 255, 0.02)',
                border: selectedNeurotransmitter === key 
                  ? `2px solid ${nt.color}` 
                  : '2px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '20px',
                color: 'var(--text)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: 'inherit',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                transform: selectedNeurotransmitter === key ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: selectedNeurotransmitter === key 
                  ? `0 12px 40px ${nt.color}20, 0 0 0 1px ${nt.color}30` 
                  : '0 4px 16px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(20px)'
              }}
              onMouseEnter={(e) => {
                if (selectedNeurotransmitter !== key) {
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedNeurotransmitter !== key) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.02)';
                  e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '8px'
              }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${nt.color}, ${nt.color}80)`,
                  boxShadow: `0 0 16px ${nt.color}40`
                }} />
                <span style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  letterSpacing: '-0.01em'
                }}>
                  {nt.name}
                </span>
              </div>
              
              <p style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                margin: 0,
                lineHeight: '1.4',
                fontWeight: '400'
              }}>
                {nt.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Current status - Apple style */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '32px',
        backdropFilter: 'blur(40px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}>
        {/* Header with level indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          padding: '20px',
          background: `linear-gradient(135deg, ${selectedNT.color}08, ${selectedNT.color}04)`,
          borderRadius: '20px',
          border: `1px solid ${selectedNT.color}20`
        }}>
          <div>
            <h4 style={{ 
              color: 'var(--text)', 
              margin: 0,
              fontSize: '24px',
              fontWeight: '700',
              letterSpacing: '-0.02em'
            }}>
              {selectedNT.name}
            </h4>
            <p style={{
              color: 'rgba(255, 255, 255, 0.6)',
              margin: '4px 0 0 0',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              {String(timeOfDay).padStart(2, '0')}:00
            </p>
          </div>
          
          <div style={{
            background: `linear-gradient(135deg, ${selectedNT.color}, ${selectedNT.color}CC)`,
            color: 'white',
            padding: '16px 24px',
            borderRadius: '20px',
            fontSize: '24px',
            fontWeight: '700',
            fontVariantNumeric: 'tabular-nums',
            minWidth: '100px',
            textAlign: 'center',
            boxShadow: `0 8px 24px ${selectedNT.color}30, 0 0 0 1px ${selectedNT.color}40`,
            letterSpacing: '-0.01em'
          }}>
            {currentLevel.toFixed(0)}%
          </div>
        </div>

        {/* Optimization protocols */}
        <div style={{ marginBottom: '24px' }}>
          <h5 style={{ 
            color: 'var(--text)', 
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '16px',
            letterSpacing: '-0.01em'
          }}>
            Optimization Protocols
          </h5>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {selectedNT.protocols.map((protocol, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: 'var(--text)',
                  padding: '12px 18px',
                  borderRadius: '16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.2s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {protocol}
              </div>
            ))}
          </div>
        </div>

        {/* Status indicator */}
        <div style={{
          background: currentLevel > 70 
            ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))'
            : currentLevel >= 40 
              ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05))'
              : 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))',
          border: currentLevel > 70 
            ? '1px solid rgba(16, 185, 129, 0.2)'
            : currentLevel >= 40 
              ? '1px solid rgba(245, 158, 11, 0.2)'
              : '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '16px',
          padding: '20px',
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '15px',
          lineHeight: '1.5',
          fontWeight: '500',
          textAlign: 'center'
        }}>
          {currentLevel > 70 && (
            <>
              <span style={{ fontSize: '16px', fontWeight: '600' }}>🟢 Optimal Levels</span>
              <br />
              High {selectedNT.name.toLowerCase()} levels - excellent for {selectedNT.description.split(',')[0]}
            </>
          )}
          {currentLevel >= 40 && currentLevel <= 70 && (
            <>
              <span style={{ fontSize: '16px', fontWeight: '600' }}>🟡 Moderate Levels</span>
              <br />
              Consider implementing optimization protocols to enhance {selectedNT.name.toLowerCase()} function
            </>
          )}
          {currentLevel < 40 && (
            <>
              <span style={{ fontSize: '16px', fontWeight: '600' }}>🔴 Low Levels</span>
              <br />
              Focus on enhancement protocols to boost {selectedNT.name.toLowerCase()} production
            </>
          )}
        </div>
      </div>
    </div>
  );
}
