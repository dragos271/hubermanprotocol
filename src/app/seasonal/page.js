"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import EnhancedSectionCard from "../components/EnhancedSectionCard";

export default function SeasonalProtocols() {
  const [selectedSeason, setSelectedSeason] = useState('winter');

  const seasonalData = useMemo(() => ({
    winter: {
      name: 'Winter Protocols',
      icon: '❄️',
      color: '#60A5FA',
      description: 'Combat seasonal depression and optimize winter health',
      protocols: [
        {
          title: 'Enhanced Light Exposure',
          details: [
            'Get 10,000 lux light therapy for 30 minutes upon waking',
            'Use bright lights (>1000 lux) throughout the day',
            'Consider light therapy lamp 2-3 hours before sunset',
            'Maximize any available natural sunlight exposure'
          ]
        },
        {
          title: 'Vitamin D Optimization',
          details: [
            'Take 2000-4000 IU vitamin D3 daily',
            'Combine with vitamin K2 for optimal absorption',
            'Test blood levels every 3 months',
            'Consider higher doses if severely deficient'
          ]
        },
        {
          title: 'Cold Adaptation',
          details: [
            'Start with 30-second cold showers',
            'Progress to 2-3 minutes over 2 weeks',
            'Consider cold plunges 1-2x per week',
            'Use deliberate cold to boost mood and energy'
          ]
        },
        {
          title: 'SAD Prevention',
          details: [
            'Maintain consistent sleep schedule',
            'Exercise daily, preferably outdoors',
            'Social connection and community activities',
            'Consider omega-3 supplementation'
          ]
        }
      ]
    },
    spring: {
      name: 'Spring Protocols',
      icon: '🌸',
      color: '#34D399',
      description: 'Reset circadian rhythms and boost energy levels',
      protocols: [
        {
          title: 'Circadian Reset',
          details: [
            'Wake up 15 minutes earlier each day',
            'Get sunlight within 30 minutes of waking',
            'Gradually extend light exposure periods',
            'Reset meal timing to align with new schedule'
          ]
        },
        {
          title: 'Allergy Management',
          details: [
            'Start quercetin supplementation early',
            'Use nasal irrigation with saline',
            'Consider local honey for pollen exposure',
            'Monitor pollen counts and plan outdoor activities'
          ]
        },
        {
          title: 'Energy Renewal',
          details: [
            'Increase exercise intensity gradually',
            'Focus on outdoor activities and nature exposure',
            'Spring cleaning and decluttering protocols',
            'Set new learning and development goals'
          ]
        },
        {
          title: 'Detoxification Support',
          details: [
            'Increase water intake and hydration',
            'Add cruciferous vegetables to diet',
            'Consider intermittent fasting protocols',
            'Support liver function with milk thistle'
          ]
        }
      ]
    },
    summer: {
      name: 'Summer Protocols',
      icon: '☀️',
      color: '#F59E0B',
      description: 'Heat adaptation and optimal sun exposure strategies',
      protocols: [
        {
          title: 'Heat Adaptation',
          details: [
            'Gradual heat exposure through sauna (15-20 min)',
            'Stay hydrated with electrolyte balance',
            'Exercise during cooler parts of the day',
            'Use cooling strategies: cold showers, ice baths'
          ]
        },
        {
          title: 'Sun Exposure Optimization',
          details: [
            'Get morning sun for 30-60 minutes',
            'Avoid peak UV hours (10am-4pm) for extended exposure',
            'Build up tan gradually to prevent burning',
            'Use mineral sunscreen for prolonged exposure'
          ]
        },
        {
          title: 'Hydration Protocols',
          details: [
            'Increase water intake by 20-30%',
            'Add electrolytes (sodium, potassium, magnesium)',
            'Monitor urine color for hydration status',
            'Pre-hydrate before outdoor activities'
          ]
        },
        {
          title: 'Sleep Optimization',
          details: [
            'Keep bedroom cool (65-68°F)',
            'Use blackout curtains for longer days',
            'Consider later bedtime with natural light cycles',
            'Use cooling mattress pads or fans'
          ]
        }
      ]
    },
    fall: {
      name: 'Fall Protocols',
      icon: '🍂',
      color: '#F97316',
      description: 'Prepare for winter and strengthen immune system',
      protocols: [
        {
          title: 'Immune Preparation',
          details: [
            'Increase vitamin C and zinc intake',
            'Start taking vitamin D3 supplements',
            'Add elderberry and echinacea',
            'Prioritize sleep quality and duration'
          ]
        },
        {
          title: 'Light Management',
          details: [
            'Maximize morning sunlight exposure',
            'Consider light therapy as days shorten',
            'Adjust screen time and blue light exposure',
            'Prepare for seasonal time changes'
          ]
        },
        {
          title: 'Stress Resilience',
          details: [
            'Build stress management practices',
            'Increase NSDR and meditation',
            'Plan for holiday season challenges',
            'Focus on social connections and community'
          ]
        },
        {
          title: 'Metabolic Preparation',
          details: [
            'Optimize nutrition for colder months',
            'Increase healthy fats in diet',
            'Consider intermittent fasting protocols',
            'Build cold tolerance gradually'
          ]
        }
      ]
    }
  }), []);

  const holidayProtocols = {
    'holiday-stress': {
      title: 'Holiday Stress Management',
      strategies: [
        'Set realistic expectations and boundaries',
        'Maintain sleep schedule despite events',
        'Use NSDR between social gatherings',
        'Practice gratitude and mindfulness',
        'Limit alcohol and maintain nutrition goals'
      ]
    },
    'new-year': {
      title: 'New Year Habit Formation',
      strategies: [
        'Start with micro-habits (2-minute rule)',
        'Stack new habits onto existing routines',
        'Track progress visually with habit tracker',
        'Focus on systems over goals',
        'Allow for flexibility and self-compassion'
      ]
    }
  };

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
          background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Seasonal Protocols
        </h1>
        
        <p style={{ 
          fontSize: '18px', 
          color: 'var(--muted)', 
          textAlign: 'center',
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px auto'
        }}>
          Optimize your health throughout the year with season-specific protocols
        </p>
      </motion.div>

      {/* Season Selector */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '40px'
      }}>
        {Object.entries(seasonalData).map(([season, data], index) => (
          <motion.button
            key={season}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedSeason(season)}
            style={{
              background: selectedSeason === season 
                ? `linear-gradient(135deg, ${data.color}, ${data.color}CC)`
                : 'rgba(255,255,255,0.05)',
              border: selectedSeason === season 
                ? `2px solid ${data.color}`
                : '2px solid var(--border)',
              borderRadius: '12px',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>
              {data.icon}
            </div>
            <h3 style={{ 
              color: selectedSeason === season ? 'white' : 'var(--text)',
              margin: '0 0 8px 0',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              {data.name}
            </h3>
            <p style={{ 
              color: selectedSeason === season ? 'rgba(255,255,255,0.9)' : 'var(--muted)',
              margin: 0,
              fontSize: '14px'
            }}>
              {data.description}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Selected Season Protocols */}
      <motion.div
        key={selectedSeason}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {seasonalData[selectedSeason].protocols.map((protocol, index) => (
            <EnhancedSectionCard
              key={protocol.title}
              title={protocol.title}
              icon="🎯"
              delay={index * 0.1}
            >
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {protocol.details.map((detail, i) => (
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
                    <span style={{ 
                      color: seasonalData[selectedSeason].color,
                      fontWeight: 'bold',
                      marginTop: '2px'
                    }}>
                      •
                    </span>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </EnhancedSectionCard>
          ))}
        </div>
      </motion.div>

      {/* Holiday & Special Protocols */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 style={{
          fontSize: '28px',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '24px',
          color: 'var(--text)'
        }}>
          Special Occasion Protocols
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px'
        }}>
          {Object.entries(holidayProtocols).map(([key, protocol], index) => (
            <EnhancedSectionCard
              key={key}
              title={protocol.title}
              icon={key === 'holiday-stress' ? '🎄' : '🎆'}
              delay={index * 0.1}
            >
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {protocol.strategies.map((strategy, i) => (
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
                    <span style={{ 
                      color: '#10B981',
                      fontWeight: 'bold',
                      marginTop: '2px'
                    }}>
                      ✓
                    </span>
                    {strategy}
                  </motion.li>
                ))}
              </ul>
            </EnhancedSectionCard>
          ))}
        </div>
      </motion.div>

      {/* Seasonal Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          marginTop: '40px',
          background: `linear-gradient(135deg, ${seasonalData[selectedSeason].color}20, rgba(255,255,255,0.05))`,
          border: `1px solid ${seasonalData[selectedSeason].color}40`,
          borderRadius: '16px',
          padding: '24px',
          textAlign: 'center'
        }}
      >
        <h3 style={{ 
          color: seasonalData[selectedSeason].color,
          marginBottom: '12px',
          fontSize: '20px',
          fontWeight: '600'
        }}>
          {seasonalData[selectedSeason].icon} Pro Tip for {seasonalData[selectedSeason].name}
        </h3>
        <p style={{ 
          color: 'var(--text)',
          fontSize: '16px',
          margin: 0,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {selectedSeason === 'winter' && "Light exposure timing is crucial - get that morning light even on cloudy days to maintain your circadian rhythm and mood."}
          {selectedSeason === 'spring' && "Use this natural reset period to establish new healthy habits that will serve you throughout the year."}
          {selectedSeason === 'summer' && "Balance sun exposure for vitamin D production while protecting your skin - morning sun is your best friend."}
          {selectedSeason === 'fall' && "Start your immune preparation early - don't wait until you're already getting sick to boost your defenses."}
        </p>
      </motion.div>
    </div>
  );
}
