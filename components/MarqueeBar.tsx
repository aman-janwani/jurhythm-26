"use client";
import React from "react";

interface MarqueeBarProps {
  text: string;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export const MarqueeBar: React.FC<MarqueeBarProps> = ({
  text,
  direction = "left",
  speed = 30,
  className = "",
}) => {
  // Create repeated text with star separators
  const repeatedText = Array(10)
    .fill(`${text} ★`)
    .join(" ");

  return (
    <div className={`relative w-full overflow-hidden bg-black ${className}`}>
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#fbbf24] via-[#fcd34d] to-[#fde68a]"></div>
      
      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#fbbf24] via-[#fcd34d] to-[#fde68a]"></div>
      
      <div
        className={`flex whitespace-nowrap py-6 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        <span className="bg-gradient-to-b from-[#fbbf24] via-[#fcd34d] to-[#fde68a] bg-clip-text text-transparent font-new-amsterdam text-3xl md:text-4xl lg:text-5xl font-black tracking-widest uppercase mx-4">
          {repeatedText}
        </span>
        <span className="bg-gradient-to-b from-[#fbbf24] via-[#fcd34d] to-[#fde68a] bg-clip-text text-transparent font-new-amsterdam text-3xl md:text-4xl lg:text-5xl font-black tracking-widest uppercase mx-4">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBar;
