"use client";
import { useState, useEffect } from "react";

export default function CircadianWheel() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const protocols = [
    { time: "6-8 AM", activity: "Morning Light", color: "#FEF3C7", startHour: 6 },
    { time: "8-10 AM", activity: "Exercise", color: "#FCA5A5", startHour: 8 },
    { time: "10-12 PM", activity: "Focused Work", color: "#93C5FD", startHour: 10 },
    { time: "12-2 PM", activity: "Meal + Walk", color: "#34D399", startHour: 12 },
    { time: "2-4 PM", activity: "NSDR/Rest", color: "#A78BFA", startHour: 14 },
    { time: "4-6 PM", activity: "Social/Exercise", color: "#FB7185", startHour: 16 },
    { time: "6-8 PM", activity: "Dinner", color: "#FBBF24", startHour: 18 },
    { time: "8-10 PM", activity: "Wind Down", color: "#818CF8", startHour: 20 },
    { time: "10PM-2AM", activity: "Deep Sleep", color: "#4C1D95", startHour: 22 },
    { time: "2-6 AM", activity: "REM Sleep", color: "#312E81", startHour: 2 },
  ];

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  // Fix time calculation - 6 AM should be at top (0 degrees), 2 AM should point to sleep area
  const timeAngle = ((currentHour - 6 + (currentMinute / 60)) * 15) - 90;

  return (
    <div style={{ 
      padding: '20px',
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <h3 style={{ 
        marginBottom: '20px', 
        color: 'var(--text)',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        Optimal Daily Rhythm
      </h3>
      
      <div style={{ 
        position: 'relative',
        width: '300px',
        height: '300px',
        margin: '0 auto 20px',
        border: '2px solid var(--border)',
        borderRadius: '12px',
        backgroundColor: 'rgba(15, 23, 42, 0.5)',
        overflow: 'hidden'
      }}>
        <svg width="300" height="300" viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
          {/* Background circle */}
          <circle 
            cx="150" 
            cy="150" 
            r="130" 
            fill="rgba(15, 23, 42, 0.9)" 
            stroke="rgba(139, 92, 246, 0.2)" 
            strokeWidth="1"
          />
          
                    {/* Protocol sections */}
          {protocols.map((protocol, i) => {
            // Calculate angles - each protocol gets proper time span
            let startAngle, endAngle;
            
            if (protocol.startHour === 22) { // 10 PM to 2 AM (4 hours)
              startAngle = ((22 - 6) * 15) - 90; // 22 hours from 6 AM reference
              endAngle = startAngle + 60; // 4 hours * 15 degrees
            } else if (protocol.startHour === 2) { // 2 AM to 6 AM (4 hours) 
              startAngle = ((2 + 18) * 15) - 90; // 2 AM is +18 hours from 6 AM reference
              endAngle = startAngle + 60; // 4 hours * 15 degrees
            } else {
              startAngle = ((protocol.startHour - 6) * 15) - 90;
              endAngle = startAngle + 30; // 2 hours * 15 degrees
            }
            
            const x1 = 150 + 90 * Math.cos(startAngle * Math.PI / 180);
            const y1 = 150 + 90 * Math.sin(startAngle * Math.PI / 180);
            const x2 = 150 + 130 * Math.cos(startAngle * Math.PI / 180);
            const y2 = 150 + 130 * Math.sin(startAngle * Math.PI / 180);
            const x3 = 150 + 130 * Math.cos(endAngle * Math.PI / 180);
            const y3 = 150 + 130 * Math.sin(endAngle * Math.PI / 180);
            const x4 = 150 + 90 * Math.cos(endAngle * Math.PI / 180);
            const y4 = 150 + 90 * Math.sin(endAngle * Math.PI / 180);

            const largeArc = endAngle - startAngle > 180 ? 1 : 0;

            return (
              <g key={i}>
                <path
                  d={`M ${x1} ${y1} L ${x2} ${y2} A 130 130 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A 90 90 0 ${largeArc} 0 ${x1} ${y1}`}
                  fill={protocol.color}
                  fillOpacity="0.7"
                  stroke={protocol.color}
                  strokeWidth="0.5"
                  style={{ 
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                />
                {/* Protocol label */}
                <text
                  x={150 + 110 * Math.cos((startAngle + (endAngle - startAngle) / 2) * Math.PI / 180)}
                  y={150 + 110 * Math.sin((startAngle + (endAngle - startAngle) / 2) * Math.PI / 180)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="rgba(0,0,0,0.9)"
                  fontSize="9"
                  fontWeight="700"
                  style={{ pointerEvents: 'none' }}
                >
                  {protocol.activity}
                </text>
              </g>
            );
          })}

                    {/* Hour markers */}
          {[...Array(24)].map((_, i) => {
            // Show every 2 hours starting from 6 AM at top
            const hour24 = (6 + i * 2) % 24; // 6, 8, 10, 12, 14, 16, 18, 20, 22, 0, 2, 4
            const displayHour = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24;
            const ampm = hour24 >= 12 && hour24 !== 24 ? 'p' : 'a';
            const angle = i * 30 - 90; // Each marker is 30 degrees apart
            
            return (
              <g key={i}>
                <line
                  x1={150 + 75 * Math.cos(angle * Math.PI / 180)}
                  y1={150 + 75 * Math.sin(angle * Math.PI / 180)}
                  x2={150 + 85 * Math.cos(angle * Math.PI / 180)}
                  y2={150 + 85 * Math.sin(angle * Math.PI / 180)}
                  stroke="var(--muted)"
                  strokeWidth="1"
                />
                <text
                  x={150 + 65 * Math.cos(angle * Math.PI / 180)}
                  y={150 + 65 * Math.sin(angle * Math.PI / 180)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="var(--text)"
                  fontSize="10"
                  fontWeight="600"
                >
                  {displayHour}{ampm}
                </text>
              </g>
            );
          })}

          {/* Current time hand */}
          <line
            x1="150"
            y1="150"
            x2={150 + 50 * Math.cos(timeAngle * Math.PI / 180)}
            y2={150 + 50 * Math.sin(timeAngle * Math.PI / 180)}
            stroke="#ff4444"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Center dot */}
          <circle cx="150" cy="150" r="3" fill="#ff4444" />
        </svg>

        {/* Current time display */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: 'var(--text)',
          fontSize: '14px',
          fontWeight: '600',
          background: 'rgba(0, 0, 0, 0.7)',
          padding: '4px 8px',
          borderRadius: '6px',
          backdropFilter: 'blur(4px)'
        }}>
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {/* Legend */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '8px',
        fontSize: '12px'
      }}>
        {protocols.map((protocol, i) => (
          <div 
            key={i} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              border: '1px solid transparent',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: protocol.color,
              border: '2px solid white',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }} />
            <span style={{ color: 'var(--text)', fontWeight: '500' }}>
              {protocol.activity}
            </span>
          </div>
        ))}
      </div>

      <p style={{ 
        textAlign: 'center', 
        color: 'var(--muted)', 
        fontSize: '12px', 
        marginTop: '12px',
        fontStyle: 'italic'
      }}>
        Follow your natural circadian rhythm for optimal performance
      </p>
    </div>
  );
}
