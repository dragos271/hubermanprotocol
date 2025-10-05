"use client";
import { motion } from "framer-motion";

export default function ProgressBar({ 
  value, 
  max = 100, 
  label, 
  color = "#8B5CF6",
  showPercentage = true,
  animated = true,
  size = "medium"
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const sizes = {
    small: { height: '6px', fontSize: '12px' },
    medium: { height: '8px', fontSize: '14px' },
    large: { height: '12px', fontSize: '16px' }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${percentage}%`,
      transition: {
        duration: animated ? 1.2 : 0,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  const glowVariants = {
    idle: {
      boxShadow: `0 0 0px ${color}00`
    },
    active: {
      boxShadow: [`0 0 8px ${color}40`, `0 0 16px ${color}60`, `0 0 8px ${color}40`],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Label and percentage */}
      {(label || showPercentage) && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px'
        }}>
          {label && (
            <motion.span 
              style={{ 
                color: 'var(--text)', 
                fontSize: sizes[size].fontSize,
                fontWeight: '500'
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {label}
            </motion.span>
          )}
          
          {showPercentage && (
            <motion.span 
              style={{ 
                color: color, 
                fontSize: sizes[size].fontSize,
                fontWeight: '600'
              }}
              key={percentage}
              initial={{ scale: 1.2, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {Math.round(percentage)}%
            </motion.span>
          )}
        </div>
      )}

      {/* Progress bar container */}
      <div
        style={{
          width: '100%',
          height: sizes[size].height,
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: sizes[size].height,
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Background track */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
          borderRadius: sizes[size].height
        }} />

        {/* Progress fill */}
        <motion.div
          variants={barVariants}
          initial="hidden"
          animate="visible"
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}CC)`,
            borderRadius: sizes[size].height,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated shine effect */}
          {percentage > 0 && (
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                borderRadius: sizes[size].height
              }}
              animate={{
                left: ['−100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.div>

        {/* Glow effect */}
        {percentage > 0 && (
          <motion.div
            variants={glowVariants}
            animate={percentage > 0 && percentage < 100 ? "active" : "idle"}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${percentage}%`,
              height: '100%',
              borderRadius: sizes[size].height,
              pointerEvents: 'none'
            }}
          />
        )}

        {/* Completion burst effect */}
        {percentage === 100 && (
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              right: '8px',
              transform: 'translateY(-50%)',
              color: 'white',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.175, 0.885, 0.32, 1.275]
            }}
          >
            ✓
          </motion.div>
        )}
      </div>

      {/* Completion particles */}
      {percentage === 100 && (
        <div style={{ position: 'relative', height: 0 }}>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: color,
                top: `-${sizes[size].height}px`,
                left: `${Math.random() * 100}%`
              }}
              initial={{ 
                y: 0, 
                opacity: 1, 
                scale: 0 
              }}
              animate={{ 
                y: [-20, -40], 
                opacity: [1, 0], 
                scale: [0, 1, 0] 
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
