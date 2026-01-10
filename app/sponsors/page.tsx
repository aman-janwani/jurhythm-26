"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SponsorGrid from "@/components/sponsers/SponsorGrid";
import MarqueeBar from "@/components/MarqueeBar";

const SponsorsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="w-full pt-20 sm:pt-28 md:pt-8 flex flex-col items-center min-h-screen bg-black pb-8">
        {/* Title Section */}
        <div className="w-full px-6 py-12 md:py-20 flex flex-col items-center gap-8">
          <h1 className="text-[#fbbf24] font-new-amsterdam text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] text-center tracking-widest uppercase leading-none animate-pulse-slow drop-shadow-[0_0_40px_rgba(251,191,36,0.6)]">
            Sponsors
          </h1>
        </div>
        
        {/* Header Section with Marquee */}
        <div className="w-full mt-6 sm:mt-10 md:mt-0">
          <MarqueeBar 
            text="OUR SPONSORS • POWERED BY INNOVATION • CELEBRATING EXCELLENCE • BUILDING TOGETHER" 
            direction="left" 
            speed={30} 
          />
        </div>

        {/* Description */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 mb-12">
          <p className="text-white text-center text-base sm:text-lg max-w-3xl mx-auto font-delius tracking-wide">
            We are grateful to our sponsors who make JU Rhythm possible. Their support empowers innovation and helps us create an unforgettable experience for all participants.
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
