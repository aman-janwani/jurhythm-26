"use client";
import React from "react";
import Image from "next/image";
import VortexDemoSecond from "./vortex-demo-2";
import FireworksBackground from "./FireworksBackground";

function Hero() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center relative">
      <div className="w-full h-full flex px-10 py-10 flex-1">
        <div className="absolute inset-0">
          {/* Background vortex effect */}
          <div className="absolute inset-0 z-0">
            <VortexDemoSecond />
          </div>

          {/* Firefly/Jugnoo Lights - Golden Yellow Glowing Particles */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={`firefly-${i}`}
                className="absolute rounded-full animate-pulse"
                style={{
                  width: `${Math.random() * 6 + 3}px`,
                  height: `${Math.random() * 6 + 3}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, rgba(244,197,66,${Math.random() * 0.8 + 0.4}), rgba(255,184,77,${Math.random() * 0.4 + 0.2}), transparent)`,
                  boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(244,197,66,${Math.random() * 0.7 + 0.3})`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                  filter: 'blur(1px)',
                }}
              />
            ))}
          </div>

        </div>
        
        <div className="flex flex-col z-30 justify-end items-start gap-4 w-full">
          <div className="relative w-full max-w-2xl">
            <Image 
              src="/jurhythm.png" 
              alt="JURHYTHM'26" 
              width={400}
              height={225}
              className="w-full max-w-xl h-auto drop-shadow-[0_0_40px_rgba(244,197,66,0.8)]"
              priority
            />
          </div>
          
          {/* Tagline */}
          <div className="relative w-full max-w-2xl">
            <h2 className="font-delius text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase text-center drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Carnival of Creativity
            </h2>
          </div>
          {/* <p className="font-delius text-base md:text-lg max-w-2xl text-white line-clamp-2 md:line-clamp-3 tracking-wide leading-relaxed">
            Experience the ultimate celebration of talent at JU Rhythm,
            where creativity meets competition. From cultural performances to 
            sports championships, technical innovations to media showcases,
          </p> */}
          {/* <h2 className="font-delius text-[#F4C542] text-xl md:text-3xl font-bold tracking-widest uppercase">9th - 11th October</h2> */}
          
          {/* Three Registration Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button 
              onClick={() => {
                const element = document.getElementById('verticals');
                if (element) {
                  const yOffset = -80; // Offset for navbar height
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-[#fbbf24] to-[#fde68a] text-black border-2 border-[#fbbf24] hover:from-[#fde68a] hover:to-[#fbbf24] duration-300 cursor-pointer font-new-amsterdam font-bold tracking-widest py-3 px-8 text-base md:text-lg rounded-full transition-all transform hover:scale-105 uppercase shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)]"
            >
              Register for Events
            </button>
            
            <button 
              onClick={() => {
                const element = document.getElementById('pronite');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent text-white border-2 border-[#fbbf24] hover:bg-gradient-to-r hover:from-[#fbbf24] hover:to-[#fde68a] hover:text-black duration-300 cursor-pointer font-new-amsterdam font-bold tracking-widest py-3 px-8 text-base md:text-lg rounded-full transition-all transform hover:scale-105 uppercase shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)]"
            >
              Book Pronite
            </button>

            <a 
              href="/Guidelines.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black duration-300 cursor-pointer font-new-amsterdam font-bold tracking-widest py-3 px-8 text-base md:text-lg rounded-full inline-flex items-center gap-2 transition-all transform hover:scale-105 uppercase shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            >
              <span>Guidelines</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center h-32 z-10 absolute bg-gradient-to-t from-black to-transparent bottom-0" />
    </div>
  );
}

export default Hero;
