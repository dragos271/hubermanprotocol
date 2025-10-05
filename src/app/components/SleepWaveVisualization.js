"use client";
import { useState, useEffect } from "react";

export default function SleepWaveVisualization() {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const sleepStages = [
    { name: 'Awake', duration: 30, color: '#FEF3C7', depth: 0 },
    { name: 'Light Sleep (N1)', duration: 10, color: '#DBEAFE', depth: 20 },
    { name: 'Light Sleep (N2)', duration: 45, color: '#BFDBFE', depth: 40 },
    { name: 'Deep Sleep (N3)', duration: 90, color: '#3B82F6', depth: 80 },
    { name: 'REM Sleep', duration: 90, color: '#8B5CF6', depth: 30 },
    { name: 'Light Sleep (N2)', duration: 30, color: '#BFDBFE', depth: 40 },
    { name: 'REM Sleep', duration: 120, color: '#8B5CF6', depth: 30 },
    { name: 'Light Sleep (N2)', duration: 20, color: '#BFDBFE', depth: 40 },
    { name: 'Deep Sleep (N3)', duration: 60, color: '#3B82F6', depth: 80 },
    { name: 'REM Sleep', duration: 90, color: '#8B5CF6', depth: 30 },
    { name: 'Light Sleep (N2)', duration: 15, color: '#BFDBFE', depth: 40 },
    { name: 'Awake', duration: 5, color: '#FEF3C7', depth: 0 }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStage(prev => (prev + 1) % sleepStages.length);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, sleepStages.length]);

  const generateSleepCurve = () => {
    const width = 600;
    const height = 200;
    let pathData = `M 0 ${height - (sleepStages[0].depth * height / 100)}`;
    
    let currentX = 0;
    sleepStages.forEach((stage, index) => {
      const stageWidth = (stage.duration / 600) * width; // Total 10 hours = 600 minutes
      const y = height - (stage.depth * height / 100);
      
      if (index === 0) {
        pathData += ` L ${stageWidth} ${y}`;
      } else {
        // Smooth transition
        const prevY = height - (sleepStages[index - 1].depth * height / 100);
        const controlX1 = currentX + stageWidth * 0.3;
        const controlX2 = currentX + stageWidth * 0.7;
        pathData += ` C ${controlX1} ${prevY}, ${controlX2} ${y}, ${currentX + stageWidth} ${y}`;
      }
      
      currentX += stageWidth;
    });
    
    return pathData;
  };

  return (
    <div style={{ 
      padding: '20px',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '12px',
      border: '1px solid var(--border)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h3 style={{ color: 'var(--text)', margin: 0 }}>Sleep Cycle Visualization</h3>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            background: isPlaying ? '#EF4444' : '#10B981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          {isPlaying ? 'Pause' : 'Play'} Animation
        </button>
      </div>

      <div style={{ 
        position: 'relative',
        background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)',
        borderRadius: '8px',
        padding: '20px',
        overflow: 'hidden'
      }}>
        <svg width="600" height="200" style={{ width: '100%', height: 'auto' }}>
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map(y => (
            <line
              key={y}
              x1="0"
              y1={200 - (y * 2)}
              x2="600"
              y2={200 - (y * 2)}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          ))}

          {/* Time markers */}
          {[0, 2, 4, 6, 8].map(hour => (
            <g key={hour}>
              <line
                x1={hour * 75}
                y1="0"
                x2={hour * 75}
                y2="200"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
              <text
                x={hour * 75}
                y="195"
                fill="rgba(255,255,255,0.6)"
                fontSize="12"
                textAnchor="middle"
              >
                {hour}h
              </text>
            </g>
          ))}

          {/* Sleep curve */}
          <path
            d={generateSleepCurve()}
            fill="none"
            stroke="url(#sleepGradient)"
            strokeWidth="3"
            style={{ filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))' }}
          />

          {/* Current stage indicator */}
          {isPlaying && (
            <circle
              cx={currentStage * 50}
              cy={200 - (sleepStages[currentStage].depth * 2)}
              r="6"
              fill={sleepStages[currentStage].color}
              style={{ 
                filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))',
                animation: 'pulse 3s infinite'
              }}
            />
          )}

          {/* Gradient definition */}
          <defs>
            <linearGradient id="sleepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="20%" stopColor="#DBEAFE" />
              <stop offset="40%" stopColor="#3B82F6" />
              <stop offset="60%" stopColor="#8B5CF6" />
              <stop offset="80%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#FEF3C7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Y-axis labels */}
        <div style={{ 
          position: 'absolute', 
          left: '-60px', 
          top: '20px', 
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.6)'
        }}>
          <span>Awake</span>
          <span>Light</span>
          <span>Deep</span>
          <span>Deepest</span>
        </div>
      </div>

      {/* Stage legend */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '12px',
        marginTop: '20px'
      }}>
        {['Awake', 'Light Sleep (N1)', 'Light Sleep (N2)', 'Deep Sleep (N3)', 'REM Sleep'].map((stage, index) => {
          const colors = ['#FEF3C7', '#DBEAFE', '#BFDBFE', '#3B82F6', '#8B5CF6'];
          const isActive = sleepStages[currentStage]?.name === stage;
          
          return (
            <div 
              key={stage}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px',
                borderRadius: '6px',
                background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                border: isActive ? '1px solid var(--border)' : '1px solid transparent',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: colors[index],
                border: '2px solid white'
              }} />
              <span style={{ 
                fontSize: '12px', 
                color: isActive ? 'var(--text)' : 'var(--muted)',
                fontWeight: isActive ? '600' : '400'
              }}>
                {stage}
              </span>
            </div>
          );
        })}
      </div>

      {/* Current stage info */}
      {isPlaying && (
        <div style={{
          marginTop: '16px',
          padding: '12px',
          background: `${sleepStages[currentStage].color}20`,
          border: `1px solid ${sleepStages[currentStage].color}`,
          borderRadius: '8px',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{ color: 'var(--text)', fontWeight: '600', fontSize: '14px' }}>
            Currently in: {sleepStages[currentStage].name}
          </div>
          <div style={{ color: 'var(--muted)', fontSize: '12px', marginTop: '4px' }}>
            Duration: {sleepStages[currentStage].duration} minutes
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
