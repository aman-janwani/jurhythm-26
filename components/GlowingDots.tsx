"use client";

import React, { useMemo } from "react";

interface GlowingDotsProps {
  count?: number;
  className?: string;
}

export const GlowingDots: React.FC<GlowingDotsProps> = ({ 
  count = 20,
  className = "" 
}) => {
  // Memoize dots properties so they don't change on every render
  const dots = useMemo(() => {
    return [...Array(count)].map((_, i) => ({
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      bgOpacity1: Math.random() * 0.9 + 0.6,
      bgOpacity2: Math.random() * 0.5 + 0.3,
      shadowSize1: Math.random() * 15 + 8,
      shadowOpacity1: Math.random() * 0.8 + 0.5,
      shadowSize2: Math.random() * 25 + 15,
      shadowOpacity2: Math.random() * 0.4 + 0.2,
      animationDuration: Math.random() * 3 + 2,
      animationDelay: Math.random() * 2,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {dots.map((dot, i) => (
        <div
          key={`glow-dot-${i}`}
          className="absolute rounded-full animate-pulse"
          style={{
            width: `${dot.width}px`,
            height: `${dot.height}px`,
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            background: `radial-gradient(circle, rgba(251, 191, 36, ${dot.bgOpacity1}), rgba(253, 230, 138, ${dot.bgOpacity2}), transparent)`,
            boxShadow: `0 0 ${dot.shadowSize1}px rgba(251, 191, 36, ${dot.shadowOpacity1}), 0 0 ${dot.shadowSize2}px rgba(251, 191, 36, ${dot.shadowOpacity2})`,
            animationDuration: `${dot.animationDuration}s`,
            animationDelay: `${dot.animationDelay}s`,
            filter: 'blur(0.3px)',
          }}
        />
      ))}
    </div>
  );
};

export default GlowingDots;
