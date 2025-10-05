"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function EnhancedSectionCard({ title, description, icon, children, delay = 0, ...props }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-detect completion for tools with states
  useEffect(() => {
    if (children && children.props && children.props.onComplete) {
      // Listen for completion events from child components
      const timer = setTimeout(() => {
        setIsCompleted(true);
        // Completion animation
        setTimeout(() => setIsCompleted(false), 2000);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [children]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.25, 0, 1]
      }
    },
    hover: {
      scale: 1.005,
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const glowVariants = {
    idle: {
      boxShadow: "0 4px 20px rgba(255,255,255,0.1)",
    },
    hover: {
      boxShadow: "0 8px 40px rgba(255,255,255,0.2), 0 0 20px rgba(139, 92, 246, 0.3)",
      transition: {
        duration: 0.3
      }
    },
    completed: {
      boxShadow: "0 8px 40px rgba(16, 185, 129, 0.4), 0 0 30px rgba(16, 185, 129, 0.3)",
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    idle: { 
      rotate: 0, 
      scale: 1 
    },
    hover: { 
      rotate: 2, 
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    completed: {
      rotate: 180,
      scale: 1.05,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${progress}%`,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const completionVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.275]
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
      {...props}
    >
      {/* Animated background gradient */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)'
            : 'transparent',
          borderRadius: '16px',
          zIndex: 0
        }}
        animate={{
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Glow effect */}
      <motion.div
        variants={glowVariants}
        animate={isCompleted ? "completed" : isHovered ? "hover" : "idle"}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '16px',
          zIndex: -1
        }}
      />

      {/* Progress bar */}
      {progress > 0 && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'rgba(255,255,255,0.1)',
          overflow: 'hidden',
          borderRadius: '16px 16px 0 0'
        }}>
          <motion.div
            variants={progressBarVariants}
            animate="visible"
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #8B5CF6, #10B981)',
              borderRadius: '3px'
            }}
          />
        </div>
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          marginBottom: '16px'
        }}>
          <motion.div
            variants={iconVariants}
            animate={isCompleted ? "completed" : isHovered ? "hover" : "idle"}
            style={{
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: isCompleted 
                ? 'linear-gradient(135deg, #10B981, #059669)'
                : 'rgba(255,255,255,0.1)'
            }}
          >
            {isCompleted ? '✓' : icon}
          </motion.div>

          <div style={{ flex: 1 }}>
            <motion.h3 
              style={{ 
                color: 'var(--text)', 
                margin: 0,
                fontSize: '18px',
                fontWeight: '600'
              }}
              animate={{
                color: isCompleted ? '#10B981' : 'var(--text)'
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            
            {description && (
              <motion.p 
                style={{ 
                  color: 'var(--muted)', 
                  margin: '4px 0 0 0',
                  fontSize: '14px'
                }}
                animate={{
                  opacity: isHovered ? 1 : 0.8
                }}
                transition={{ duration: 0.3 }}
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* Completion checkmark */}
          {isCompleted && (
            <motion.div
              variants={completionVariants}
              initial="hidden"
              animate="visible"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              ✓
            </motion.div>
          )}
        </div>

        {/* Children content */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0.9
          }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </div>

      {/* Hover particles effect */}
      {isHovered && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'rgba(139, 92, 246, 0.6)',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
              animate={{
                y: [-20, -40],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Success sound effect simulation */}
      {isCompleted && (
        <audio autoPlay>
          <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGMeAjaJ1fPTgjEFKHjG8N2QQAoPWq7k7bJdGQg/ltrmwmYiAjJ+zPLZiToGJXLF8N6PQQgPUKXh8bllHgg5iuTq5nJfHAA5ht/wrG8bAfM0qQB" type="audio/wav" />
        </audio>
      )}
    </motion.div>
  );
}
