"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const DIRECTION_OFFSET = {
  top: { y: 12 },
  bottom: { y: -12 },
  left: { x: -12 },
  right: { x: 12 },
  none: {},
};

/**
 * BlurText – animated headline component inspired by reactbits.dev
 */
export default function BlurText({
  text,
  delay = 0,
  animateBy = "words",
  direction = "top",
  className = "",
  onAnimationComplete,
}) {
  const reduceMotion = useReducedMotion();

  const tokens = useMemo(() => {
    if (!text) return [];
    if (animateBy === "letters") {
      return text.split("");
    }
    // default: animate by words while retaining whitespace tokens
    return text.split(/(\s+)/);
  }, [text, animateBy]);

  const baseOffset = DIRECTION_OFFSET[direction] ?? DIRECTION_OFFSET.top;
  const baseDelaySeconds = Number(delay) / 1000;

  return (
    <span className={className} aria-label={text}>
      {tokens.map((token, index) => {
        const isWhitespace = /\s+/.test(token);
        const trimmed = token.trim();
        const transitionDelay = baseDelaySeconds + index * 0.06;

        return (
          <motion.span
            key={`${token}-${index}`}
            data-word={isWhitespace ? undefined : trimmed}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, filter: "blur(12px)", ...baseOffset }
            }
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: transitionDelay,
            }}
            onAnimationComplete={
              index === tokens.length - 1 ? onAnimationComplete : undefined
            }
            style={{
              display: "inline-block",
              whiteSpace: isWhitespace ? "pre" : "normal",
            }}
          >
            {token}
          </motion.span>
        );
      })}
    </span>
  );
}
