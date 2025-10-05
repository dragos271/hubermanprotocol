"use client";
import { useState } from "react";

export default function BodySystemDiagram() {
  const [selectedSystem, setSelectedSystem] = useState(null);

  const systems = [
    {
      id: 'brain',
      name: 'Nervous System',
      position: { x: 150, y: 40 },
      color: '#8B5CF6',
      effects: ['Improved focus', 'Better memory', 'Reduced anxiety', 'Enhanced neuroplasticity']
    },
    {
      id: 'heart',
      name: 'Cardiovascular',
      position: { x: 150, y: 120 },
      color: '#EF4444',
      effects: ['Lower resting heart rate', 'Better HRV', 'Improved circulation', 'Lower blood pressure']
    },
    {
      id: 'lungs',
      name: 'Respiratory',
      position: { x: 130, y: 110 },
      color: '#06B6D4',
      effects: ['Enhanced oxygen uptake', 'Better breath control', 'Improved CO2 tolerance', 'Stress relief']
    },
    {
      id: 'stomach',
      name: 'Digestive',
      position: { x: 160, y: 160 },
      color: '#10B981',
      effects: ['Better gut health', 'Improved metabolism', 'Enhanced nutrient absorption', 'Reduced inflammation']
    },
    {
      id: 'muscles',
      name: 'Muscular',
      position: { x: 100, y: 140 },
      color: '#F59E0B',
      effects: ['Increased strength', 'Better recovery', 'Enhanced endurance', 'Improved flexibility']
    },
    {
      id: 'immune',
      name: 'Immune System',
      position: { x: 200, y: 140 },
      color: '#EC4899',
      effects: ['Stronger immunity', 'Faster healing', 'Reduced inflammation', 'Better stress response']
    }
  ];

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
        Protocol Impact on Body Systems
      </h3>
      
      <div style={{ 
        position: 'relative',
        width: '300px',
        height: '250px',
        margin: '0 auto 20px',
        border: '2px solid var(--border)',
        borderRadius: '12px',
        backgroundColor: 'rgba(15, 23, 42, 0.5)',
        overflow: 'hidden'
      }}>
        <svg width="300" height="250" viewBox="0 0 300 250" style={{ width: '100%', height: '100%' }}>
          {/* Simple body outline */}
          <g stroke="var(--muted)" strokeWidth="2" fill="none">
            {/* Head */}
            <circle cx="150" cy="40" r="25" />
            {/* Torso */}
            <rect x="125" y="65" width="50" height="80" rx="10" />
            {/* Arms */}
            <rect x="95" y="75" width="25" height="60" rx="12" />
            <rect x="180" y="75" width="25" height="60" rx="12" />
            {/* Legs */}
            <rect x="135" y="145" width="15" height="70" rx="7" />
            <rect x="155" y="145" width="15" height="70" rx="7" />
          </g>

          {/* System markers */}
          {systems.map((system) => (
            <g key={system.id}>
              <circle
                cx={system.position.x}
                cy={system.position.y}
                r="8"
                fill={system.color}
                stroke="white"
                strokeWidth="2"
                style={{ 
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  transform: selectedSystem === system.id ? 'scale(1.3)' : 'scale(1)'
                }}
                onClick={() => setSelectedSystem(selectedSystem === system.id ? null : system.id)}
              />
              {/* System label */}
              <text
                x={system.position.x}
                y={system.position.y + 25}
                textAnchor="middle"
                fill="var(--text)"
                fontSize="10"
                fontWeight="500"
                style={{ pointerEvents: 'none' }}
              >
                {system.name.split(' ')[0]}
              </text>
            </g>
          ))}
        </svg>

        {/* Selected system overlay */}
        {selectedSystem && (
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            maxWidth: '180px',
            fontSize: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{ 
              fontWeight: '600', 
              marginBottom: '8px',
              color: systems.find(s => s.id === selectedSystem)?.color 
            }}>
              {systems.find(s => s.id === selectedSystem)?.name}
            </div>
            <ul style={{ margin: 0, paddingLeft: '16px' }}>
              {systems.find(s => s.id === selectedSystem)?.effects.map((effect, i) => (
                <li key={i} style={{ marginBottom: '4px' }}>{effect}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* System legend */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '8px',
        fontSize: '12px'
      }}>
        {systems.map((system) => (
          <div 
            key={system.id} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: selectedSystem === system.id ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
              border: selectedSystem === system.id ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid transparent',
              transition: 'all 0.2s ease'
            }}
            onClick={() => setSelectedSystem(selectedSystem === system.id ? null : system.id)}
          >
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: system.color,
              border: '2px solid white',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }} />
            <span style={{ color: 'var(--text)', fontWeight: '500' }}>
              {system.name}
            </span>
          </div>
        ))}
      </div>

      {!selectedSystem && (
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--muted)', 
          fontSize: '12px', 
          marginTop: '12px',
          fontStyle: 'italic'
        }}>
          Click on a system to see protocol benefits
        </p>
      )}
    </div>
  );
}
