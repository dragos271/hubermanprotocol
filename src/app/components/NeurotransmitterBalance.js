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

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    
    // Horizontal lines
    for (let i = 0; i <= 4; i++) {
      const y = (height / 4) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Vertical lines (hours)
    for (let i = 0; i <= 24; i += 4) {
      const x = (width / 24) * i;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Draw neurotransmitter curves
    Object.keys(neurotransmitters).forEach(ntKey => {
      const nt = neurotransmitters[ntKey];
      const isSelected = ntKey === selectedNeurotransmitter;
      
      ctx.strokeStyle = nt.color;
      ctx.lineWidth = isSelected ? 3 : 1;
      ctx.globalAlpha = isSelected ? 1 : 0.4;
      
      ctx.beginPath();
      for (let hour = 0; hour <= 24; hour += 0.5) {
        const x = (width / 24) * hour;
        const level = calculateLevel(ntKey, hour);
        const y = height - (level / 100) * height;
        
        if (hour === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      
      // Add label
      if (isSelected) {
        ctx.fillStyle = nt.color;
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText(nt.name, 10, 30);
      }
    });

    // Draw current time indicator
    const currentX = (width / 24) * timeOfDay;
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(currentX, 0);
    ctx.lineTo(currentX, height);
    ctx.stroke();

    // Current level indicator
    const currentLevel = calculateLevel(selectedNeurotransmitter, timeOfDay);
    const currentY = height - (currentLevel / 100) * height;
    
    ctx.fillStyle = neurotransmitters[selectedNeurotransmitter].color;
    ctx.beginPath();
    ctx.arc(currentX, currentY, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.globalAlpha = 1;
  }, [selectedNeurotransmitter, timeOfDay]);

  const currentLevel = calculateLevel(selectedNeurotransmitter, timeOfDay);
  const selectedNT = neurotransmitters[selectedNeurotransmitter];

  return (
    <div style={{
      padding: '32px',
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(16, 185, 129, 0.04) 50%, rgba(239, 68, 68, 0.04) 100%)',
      borderRadius: '20px',
      border: '1px solid rgba(139, 92, 246, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
    }}>
      <h3 style={{ 
        color: 'var(--text)', 
        marginBottom: '24px',
        fontSize: '24px',
        fontWeight: '700',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #8B5CF6, #10B981)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Neurotransmitter Balance Throughout Day
      </h3>

      {/* Time slider */}
      <div style={{ marginBottom: '32px' }}>
        <label style={{ 
          display: 'block', 
          color: 'var(--text)', 
          marginBottom: '12px',
          fontSize: '16px',
          fontWeight: '600'
        }}>
          Time of Day: <span style={{ color: '#8B5CF6', fontSize: '18px' }}>{timeOfDay}:00</span>
        </label>
        <div style={{ position: 'relative' }}>
          <input
            type="range"
            min="0"
            max="24"
            value={timeOfDay}
            onChange={(e) => setTimeOfDay(parseInt(e.target.value))}
            style={{
              width: '100%',
              height: '8px',
              borderRadius: '4px',
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
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: linear-gradient(135deg, #8B5CF6, #10B981);
              cursor: pointer;
              border: 2px solid white;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            }
            
            input[type="range"]::-moz-range-thumb {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: linear-gradient(135deg, #8B5CF6, #10B981);
              cursor: pointer;
              border: 2px solid white;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            }
          `}</style>
          <div style={{
            position: 'absolute',
            top: '16px',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: 'var(--muted)'
          }}>
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '32px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2)'
      }}>
        <canvas
          ref={canvasRef}
          width={600}
          height={300}
          style={{ width: '100%', height: 'auto' }}
        />
        
        {/* Y-axis labels */}
        <div style={{
          position: 'absolute',
          left: '-40px',
          top: '20px',
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.6)'
        }}>
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {/* X-axis labels */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.6)'
        }}>
          {[0, 4, 8, 12, 16, 20, 24].map(hour => (
            <span key={hour}>{hour}:00</span>
          ))}
        </div>
      </div>

      {/* Neurotransmitter selector */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '16px',
        marginBottom: '32px'
      }}>
        {Object.entries(neurotransmitters).map(([key, nt]) => (
          <button
            key={key}
            onClick={() => setSelectedNeurotransmitter(key)}
            style={{
              background: selectedNeurotransmitter === key 
                ? `linear-gradient(135deg, ${nt.color}, ${nt.color}CC)`
                : 'rgba(255,255,255,0.08)',
              border: selectedNeurotransmitter === key 
                ? `2px solid ${nt.color}` 
                : '2px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
              backdropFilter: 'blur(10px)',
              boxShadow: selectedNeurotransmitter === key 
                ? `0 8px 24px ${nt.color}40`
                : '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '4px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: nt.color
              }} />
              <span style={{
                color: 'var(--text)',
                fontWeight: '600',
                fontSize: '14px'
              }}>
                {nt.name}
              </span>
            </div>
            <div style={{
              color: 'var(--muted)',
              fontSize: '12px'
            }}>
              {nt.description}
            </div>
          </button>
        ))}
      </div>

      {/* Current status */}
      <div style={{
        background: `linear-gradient(135deg, ${selectedNT.color}15, ${selectedNT.color}08)`,
        border: `2px solid ${selectedNT.color}40`,
        borderRadius: '20px',
        padding: '24px',
        backdropFilter: 'blur(10px)',
        boxShadow: `0 8px 32px ${selectedNT.color}20`
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px'
        }}>
          <h4 style={{ color: selectedNT.color, margin: 0 }}>
            {selectedNT.name} at {timeOfDay}:00
          </h4>
          <div style={{
            background: selectedNT.color,
            color: 'white',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '600'
          }}>
            {currentLevel.toFixed(0)}%
          </div>
        </div>

        <div style={{ marginBottom: '12px' }}>
          <strong style={{ color: 'var(--text)', fontSize: '14px' }}>
            Optimization Protocols:
          </strong>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginTop: '6px'
          }}>
            {selectedNT.protocols.map((protocol, i) => (
              <span
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: 'var(--text)',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}
              >
                {protocol}
              </span>
            ))}
          </div>
        </div>

        <div style={{
          color: 'var(--muted)',
          fontSize: '12px',
          fontStyle: 'italic'
        }}>
          {currentLevel > 70 && `High ${selectedNT.name.toLowerCase()} levels - optimal for ${selectedNT.description.split(',')[0]}`}
          {currentLevel >= 40 && currentLevel <= 70 && `Moderate ${selectedNT.name.toLowerCase()} levels - consider optimization protocols`}
          {currentLevel < 40 && `Low ${selectedNT.name.toLowerCase()} levels - focus on enhancement protocols`}
        </div>
      </div>
    </div>
  );
}
