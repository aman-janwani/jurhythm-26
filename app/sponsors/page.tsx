"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SponsorGrid from "@/components/sponsers/SponsorGrid";
import MarqueeBar from "@/components/MarqueeBar";
import content from "@/lib/useContent";

const SponsorsPage = () => {
  const { sponsorsPage } = content;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="w-full pt-20 sm:pt-28 md:pt-8 flex flex-col items-center min-h-screen bg-black pb-8">
        {/* Title Section */}
        <div className="w-full px-6 py-12 md:py-20 flex flex-col items-center gap-8">
          <h1 className="text-[#fbbf24] font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] text-center tracking-widest uppercase leading-none animate-pulse-slow drop-shadow-[0_0_40px_rgba(251,191,36,0.6)]">
            {sponsorsPage.title}
          </h1>
        </div>
        
        {/* Header Section with Marquee */}
        <div className="w-full mt-6 sm:mt-10 md:mt-0">
          <MarqueeBar 
            text={sponsorsPage.marqueeText}
            direction="left" 
            speed={sponsorsPage.marqueeSpeed}
          />
        </div>

        {/* Description */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 mb-12">
          <p className="text-white text-center text-base sm:text-lg max-w-3xl mx-auto font-inter tracking-wide">
            {sponsorsPage.description}
          </p>
        </div>

        {/* Sponsor Grid */}
        <SponsorGrid />
      </div>

      <Footer />
    </div>
  );
};

export default SponsorsPage;
