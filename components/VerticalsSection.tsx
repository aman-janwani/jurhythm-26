"use client";

import Image from "next/image";
import { Fireworks } from "@fireworks-js/react";
import ExpandingCards from "./ExpandingCards";
import GlowingDots from "./GlowingDots";

export default function VerticalsSection() {
  return (
    <section id="verticals" className="relative z-0 min-h-screen">
      <GlowingDots count={55} />
      
      {/* Balloon decoration */}
      <Image 
        src="/balloon.png"
        alt=""
        width={300}
        height={300}
        className="absolute left-16 top-32 w-52 h-52 opacity-50 animate-float pointer-events-none z-0"
      />
      
      {/* Fireworks Background - Covering whole section */}
      <Fireworks
        options={{
          opacity: 0.6,
          acceleration: 1.05,
          friction: 0.97,
          gravity: 1.5,
          particles: 80,
          traceLength: 3,
          traceSpeed: 10,
          explosion: 5,
          intensity: 20,
          flickering: 50,
          lineStyle: 'round',
          hue: {
            min: 40,
            max: 50,
          },
          delay: {
            min: 40,
            max: 90,
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
              min: 0.5,
              max: 1.5,
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
            click: true,
            move: true,
            max: 3,
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

      {/* Expanding Cards Component */}
      <div className="relative z-10">
        <ExpandingCards />
      </div>
    </section>
  );
}
