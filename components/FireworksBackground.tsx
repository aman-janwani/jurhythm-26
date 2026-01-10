"use client";

import { Fireworks } from "@fireworks-js/react";
import React from "react";

interface FireworksBackgroundProps {
  autoStart?: boolean;
  intensity?: "low" | "medium" | "high";
  colors?: string[];
}

const FireworksBackground: React.FC<FireworksBackgroundProps> = ({ 
  autoStart = true, 
  intensity = "medium",
  colors = ["#F4C542", "#FFB84D", "#FFA726", "#fdc830", "#f7931e"]
}) => {

  // Configure fireworks based on intensity
  const config = {
    low: { acceleration: 1.02, friction: 0.96, gravity: 1.2, particles: 50, traceLength: 2, explosion: 3, intensityLevel: 5 },
    medium: { acceleration: 1.03, friction: 0.95, gravity: 1.5, particles: 80, traceLength: 3, explosion: 5, intensityLevel: 10 },
    high: { acceleration: 1.05, friction: 0.94, gravity: 2, particles: 120, traceLength: 4, explosion: 7, intensityLevel: 15 }
  };

  const settings = config[intensity];

  return (
    <Fireworks
      options={{
        opacity: 0.6,
        acceleration: settings.acceleration,
        friction: settings.friction,
        gravity: settings.gravity,
        particles: settings.particles,
        traceLength: settings.traceLength,
        traceSpeed: 10,
        explosion: settings.explosion,
        intensity: settings.intensityLevel,
        flickering: 50,
        lineStyle: 'round',
        hue: {
          min: 40,
          max: 50,
        },
        delay: {
          min: 30,
          max: 60,
        },
        rocketsPoint: {
          min: 50,
          max: 50,
        },
        lineWidth: {
          explosion: {
            min: 1,
            max: 3,
          },
          trace: {
            min: 1,
            max: 2,
          },
        },
        brightness: {
          min: 50,
          max: 80,
        },
        decay: {
          min: 0.015,
          max: 0.03,
        },
        mouse: {
          click: false,
          move: false,
          max: 1,
        },
      }}
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 5,
        pointerEvents: 'none',
      }}
    />
  );
};

export default FireworksBackground;
