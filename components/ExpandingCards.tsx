"use client";

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: 'Technical',
    description: 'Explore cutting-edge technologies and innovative solutions.',
    imageUrl: '/posters/1.png'
  },
  {
    id: 2,
    title: 'Cultural',
    description: 'Immerse yourself in diverse cultural experiences and performances.',
    imageUrl: '/posters/2.png'
  },
  {
    id: 3,
    title: 'Sports',
    description: 'Engage in thrilling sports events and competitions.',
    imageUrl: '/posters/3.png'
  },
  {
    id: 4,
    title: 'Media',
    description: 'Discover the latest trends in digital and traditional media.',
    imageUrl: '/posters/1-3.png'
  },
];

export default function ExpandingCards() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8 font-sans relative overflow-hidden">
      {/* Decorative Lanterns - Bigger, Fewer */}
      <div className="absolute top-20 left-16 w-20 h-28 opacity-65 animate-pulse" style={{ animationDuration: '3s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-4 bg-gradient-to-b from-[#a855f7] to-[#9333ea] rounded-lg shadow-[0_0_35px_rgba(168,85,247,1)]"></div>
          <div className="absolute inset-x-2.5 top-0 h-3 bg-[#581c87] rounded-t-lg"></div>
          <div className="absolute inset-x-2.5 bottom-2 h-3 bg-[#581c87] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-1 h-8 bg-[#581c87]"></div>
          <div className="absolute inset-0 bg-[#a855f7] blur-xl opacity-60"></div>
        </div>
      </div>

      <div className="absolute top-1/3 right-20 w-18 h-26 opacity-60 animate-pulse" style={{ animationDuration: '4s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-4 bg-gradient-to-b from-[#4ade80] to-[#22c55e] rounded-lg shadow-[0_0_35px_rgba(74,222,128,1)]"></div>
          <div className="absolute inset-x-2.5 top-0 h-3 bg-[#166534] rounded-t-lg"></div>
          <div className="absolute inset-x-2.5 bottom-2 h-3 bg-[#166534] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-7 w-1 h-7 bg-[#166534]"></div>
          <div className="absolute inset-0 bg-[#4ade80] blur-xl opacity-60"></div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-1/4 w-22 h-30 opacity-70 animate-pulse" style={{ animationDuration: '3.5s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-4 bg-gradient-to-b from-[#fb923c] to-[#f97316] rounded-lg shadow-[0_0_35px_rgba(251,146,60,1)]"></div>
          <div className="absolute inset-x-2.5 top-0 h-3 bg-[#7c2d12] rounded-t-lg"></div>
          <div className="absolute inset-x-2.5 bottom-2 h-3 bg-[#7c2d12] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-1 h-8 bg-[#7c2d12]"></div>
          <div className="absolute inset-0 bg-[#fb923c] blur-xl opacity-60"></div>
        </div>
      </div>

      <div className="absolute bottom-32 right-1/3 w-18 h-26 opacity-60 animate-pulse" style={{ animationDuration: '3.8s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-4 bg-gradient-to-b from-[#fbbf24] to-[#f59e0b] rounded-lg shadow-[0_0_35px_rgba(251,191,36,1)]"></div>
          <div className="absolute inset-x-2.5 top-0 h-3 bg-[#78350f] rounded-t-lg"></div>
          <div className="absolute inset-x-2.5 bottom-2 h-3 bg-[#78350f] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-7 w-1 h-7 bg-[#78350f]"></div>
          <div className="absolute inset-0 bg-[#fbbf24] blur-xl opacity-60"></div>
        </div>
      </div>

      {/* Section Title */}
      <div className="w-fit relative group cursor-pointer mb-16">
        <h2 className="text-5xl md:text-8xl duration-500 font-new-amsterdam tracking-wide font-bold text-center text-[#fbbf24] drop-shadow-[0_0_40px_rgba(251,191,36,0.6)] uppercase relative z-20">
          Domains
        </h2>
      </div>

      {/* Desktop View - Expanding Cards */}
      <div className="hidden md:flex w-full max-w-6xl h-[600px] gap-2 md:gap-4">
        {cards.map((card) => {
          const isActive = activeId === card.id;

          return (
            <div
              key={card.id}
              onClick={() => setActiveId(card.id)}
              onMouseEnter={() => setActiveId(card.id)}
              className={`
                relative flex items-end overflow-hidden rounded-2xl cursor-pointer
                transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                ${isActive ? 'flex-[4]' : 'flex-[1.5]'}
              `}
            >
              {/* Background Image */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className={`
                  absolute inset-0 w-full h-full object-cover transition-all duration-700
                  ${isActive ? 'grayscale-0 scale-110' : 'grayscale-[100%] scale-100 opacity-60 hover:opacity-100'}
                `}
              />

              {/* Gradient Overlay */}
              <div 
                className={`
                  absolute inset-0 bg-gradient-to-t from-black/90 via-[#fbbf24]/20 to-transparent
                  transition-opacity duration-500
                  ${isActive ? 'opacity-100' : 'opacity-70'}
                `} 
              />

              {/* Content Container */}
              <div className="relative z-10 w-full h-full flex flex-col justify-end p-6 md:p-8">
                
                {/* Description (Appears above title) */}
                <div 
                  className={`
                    mb-4 overflow-hidden transition-all duration-500 delay-100
                    ${isActive ? 'opacity-100 translate-y-0 max-h-40' : 'opacity-0 -translate-y-4 max-h-0'}
                  `}
                >
                  <p className="text-gray-300 max-w-sm leading-relaxed text-sm md:text-base mb-4 font-delius">
                    {card.description}
                  </p>
                  
                  <button className="flex items-center gap-2 text-black bg-gradient-to-r from-[#fbbf24] to-[#fde68a] hover:from-[#fde68a] hover:to-[#fbbf24] backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300 text-xs font-new-amsterdam uppercase tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.4)]">
                    Explore <ArrowUpRight size={14} />
                  </button>
                </div>

                {/* Title (Rotates from Vertical Left to Horizontal) */}
                <div className="relative h-12 md:h-16 w-full">
                  <h2 
                    className={`
                      text-2xl md:text-4xl font-bold text-[#fbbf24] uppercase tracking-wider whitespace-nowrap font-new-amsterdam
                      absolute bottom-0 left-2 md:left-6 origin-bottom-left
                      transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]
                      ${isActive ? 'rotate-0' : '-rotate-90'}
                    `}
                  >
                    {card.title}
                  </h2>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile View - Simple Square Cards in Column */}
      <div className="md:hidden w-full max-w-md flex flex-col gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-full aspect-square rounded-2xl overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={card.imageUrl}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#fbbf24]/20 to-transparent" />

            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-end p-6">
              <h2 className="text-3xl font-bold text-[#fbbf24] uppercase tracking-wider font-new-amsterdam mb-3 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]">
                {card.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 font-delius">
                {card.description}
              </p>
              <button className="flex items-center gap-2 text-black bg-gradient-to-r from-[#fbbf24] to-[#fde68a] hover:from-[#fde68a] hover:to-[#fbbf24] backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300 text-xs font-new-amsterdam uppercase tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.4)] w-fit">
                Explore <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
