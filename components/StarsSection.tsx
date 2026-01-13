"use client";

import { CurveCarousel } from "@/components/curve-carousel";
import { Equalizer } from "@/components/equalizer";

export default function StarsSection() {
  return (
    <section id="pronite" className="relative min-h-screen bg-black flex flex-col items-center justify-center py-12 overflow-hidden">
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 z-10">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white/60 rounded-full ${
              Math.random() > 0.5 ? "animate-twinkle" : ""
            }`}
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 2 + 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content - relative to float above background */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* PRONITE Headline - Consistent with other sections */}
        <div className="w-fit relative group cursor-pointer mb-8">
          <h2 className="text-5xl md:text-8xl duration-500 font-new-amsterdam tracking-wide font-bold text-center text-[#fbbf24] drop-shadow-[0_0_40px_rgba(251,191,36,0.6)] uppercase">
            Pronite
          </h2>
        </div>

        {/* Equalizer - full width curvy animation */}
        <div className="mb-16 w-full">
          <Equalizer />
        </div>

        {/* Curve Carousel with flip cards */}
        <CurveCarousel />
      </div>
    </section>
  );
}
