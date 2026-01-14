"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarqueeBar from "@/components/MarqueeBar";
import content from "@/lib/useContent";

export default function ContactUs() {
  const { contact } = content;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navbar />
      
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full pt-24 sm:pt-32 md:pt-16 flex flex-col items-center min-h-screen pb-16 relative z-20">
        {/* Large Title with proper spacing */}
        <div className="w-full px-6 py-12 md:py-20 flex flex-col items-center gap-8">
          <h1 className="text-[#fbbf24] font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] text-center tracking-widest uppercase leading-none animate-pulse-slow drop-shadow-[0_0_40px_rgba(251,191,36,0.6)]">
            {contact.title}
          </h1>
        </div>

        {/* Marquee Bar */}
        <div className="mb-12 w-full">
          <MarqueeBar 
            text={contact.marqueeText}
            direction="right" 
            speed={contact.marqueeSpeed}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-4xl mx-auto px-4">
          {contact.verticals.map((vertical, index) => (
            <div
              key={index}
              className="bg-black backdrop-blur-lg border-2 border-gray-700 rounded-xl relative overflow-hidden group hover:border-[#fbbf24] transition-all duration-300"
            >
              {/* Gradient glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#fbbf24] via-[#fde68a] to-[#fbbf24] rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-500 -z-10"></div>
              
              <div className="bg-black rounded-t-xl p-6 border-b-2 border-gray-700 group-hover:border-[#fbbf24] transition-colors duration-300">
                <h2 className="text-xl font-anton text-[#fbbf24] tracking-widest uppercase drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">
                  {vertical.vertical} Heads
                </h2>
              </div>
              
              <div className="relative z-10 bg-black rounded-b-xl p-6">
                {vertical.contacts.map((contact, contactIndex) => (
                  <div
                    key={contactIndex}
                    className={contactIndex > 0 ? "mt-4 pt-4 border-t border-gray-800" : ""}
                  >
                    <p className="text-white font-inter font-semibold">{contact.name}</p>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="text-gray-400 hover:text-[#fbbf24] transition-colors duration-200 font-inter"
                    >
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Twinkling Stars Background */}
        <div className="absolute inset-0 z-0">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-white/60 rounded-full duration-300 ${
                Math.random() > 0.5 ? "animate-twinkle" : ""
              }`}
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 2 + 1.5}s`,
                zIndex: -1,
              }}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
