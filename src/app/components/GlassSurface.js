"use client";

import { motion, useReducedMotion } from "framer-motion";
import "./glass-surface.css";

export default function GlassSurface({
  children,
  width,
  height,
  borderRadius = 16,
  className = "",
  displace = 10,
  distortionScale = -120,
  redOffset = 4,
  greenOffset = 8,
  blueOffset = 16,
  brightness = 80,
  opacity = 0.75,
  mixBlendMode = "normal",
  style,
}) {
  const reduce = useReducedMotion();

  const inlineStyle = {
    width,
    height,
    borderRadius,
    '--glass-displace': `${displace}px`,
    '--glass-distortion': distortionScale,
    '--glass-red-offset': `${redOffset}px`,
    '--glass-green-offset': `${greenOffset}px`,
    '--glass-blue-offset': `${blueOffset}px`,
    '--glass-brightness': brightness,
    '--glass-opacity': opacity,
    mixBlendMode,
    ...style,
  };

  return (
    <motion.div
      className={`glass-surface ${className}`}
      style={inlineStyle}
      initial={reduce ? { opacity: opacity } : { opacity: 0, filter: "blur(12px)" }}
      animate={{ opacity: opacity, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass-surface__inner">{children}</div>
    </motion.div>
  );
}
