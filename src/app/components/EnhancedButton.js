"use client";
import { motion } from "framer-motion";

export default function EnhancedButton({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "medium",
  disabled = false,
  loading = false,
  success = false,
  ...props 
}) {
  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
      color: 'white'
    },
    secondary: {
      background: 'rgba(255,255,255,0.1)',
      color: 'var(--text)',
      border: '1px solid var(--border)'
    },
    success: {
      background: 'linear-gradient(135deg, #10B981, #059669)',
      color: 'white'
    },
    danger: {
      background: 'linear-gradient(135deg, #EF4444, #DC2626)',
      color: 'white'
    }
  };

  const sizes = {
    small: { padding: '8px 16px', fontSize: '14px' },
    medium: { padding: '12px 24px', fontSize: '16px' },
    large: { padding: '16px 32px', fontSize: '18px' }
  };

  const buttonVariants = {
    idle: { 
      scale: 1,
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
    },
    hover: { 
      scale: 1.005,
      boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: { 
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    },
    success: {
      scale: 1.01,
      boxShadow: "0 6px 20px rgba(16, 185, 129, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    idle: { opacity: 1, y: 0 },
    loading: { opacity: 0.7 },
    success: { 
      y: [-2, 0],
      transition: { duration: 0.3 }
    }
  };

  const rippleVariants = {
    hidden: { scale: 0, opacity: 1 },
    visible: { 
      scale: 2, 
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getVariantStyle = () => {
    if (success) return variants.success;
    if (disabled) return { 
      background: 'rgba(255,255,255,0.05)', 
      color: 'var(--muted)',
      cursor: 'not-allowed'
    };
    return variants[variant];
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="idle"
      whileHover={!disabled ? "hover" : "idle"}
      whileTap={!disabled ? "tap" : "idle"}
      animate={success ? "success" : "idle"}
      onClick={!disabled && !loading ? onClick : undefined}
      style={{
        position: 'relative',
        border: 'none',
        borderRadius: '12px',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        overflow: 'hidden',
        outline: 'none',
        ...getVariantStyle(),
        ...sizes[size]
      }}
      disabled={disabled || loading}
      {...props}
    >
      {/* Ripple effect container */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        borderRadius: '12px'
      }}>
        {/* Animated background for hover */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '12px'
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Button content */}
      <motion.div
        variants={contentVariants}
        animate={loading ? "loading" : success ? "success" : "idle"}
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
        {/* Loading spinner */}
        {loading && (
          <motion.div
            style={{
              width: '16px',
              height: '16px',
              border: '2px solid rgba(255,255,255,0.3)',
              borderTop: '2px solid white',
              borderRadius: '50%'
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}

        {/* Success checkmark */}
        {success && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.175, 0.885, 0.32, 1.275]
            }}
            style={{
              width: '16px',
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✓
          </motion.div>
        )}

        {/* Button text */}
        <motion.span
          animate={{
            opacity: loading ? 0.7 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          {success ? 'Success!' : children}
        </motion.span>
      </motion.div>

      {/* Shine effect */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          borderRadius: '12px'
        }}
        animate={{
          left: ['−100%', '100%']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />

      {/* Pulse effect for success */}
      {success && (
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            border: '2px solid #10B981',
            borderRadius: '12px',
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        />
      )}
    </motion.button>
  );
}
