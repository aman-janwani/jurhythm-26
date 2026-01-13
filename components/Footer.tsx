import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-black overflow-hidden">
      {/* Main Footer Content - Three Row Layout */}
      <div className="relative w-full">
        
        {/* First Row - Tagline, Links, and Map */}
        <div className="px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-black/95 border-b border-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Tagline Section */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[#fbbf24] text-lg md:text-xl font-druk uppercase tracking-wider mb-4">
                Carnival of Creativity
              </h3>
              <p className="text-white/80 text-base md:text-lg font-pp-neue leading-relaxed">
                Join us for the most spectacular festival celebrating innovation, creativity, and cultural diversity. Experience the ultimate celebration where talent meets competition.
              </p>
            </div>

            {/* Links Section */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[#fbbf24] text-lg md:text-xl font-druk uppercase tracking-wider mb-6">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <Link href="/technical" className="text-white/80 hover:text-[#fbbf24] transition-colors font-pp-neue">
                    Technical
                  </Link>
                  <Link href="/cultural" className="text-white/80 hover:text-[#fbbf24] transition-colors font-pp-neue">
                    Cultural
                  </Link>
                  <Link href="/sports" className="text-white/80 hover:text-[#fbbf24] transition-colors font-pp-neue">
                    Sports
                  </Link>
                  <Link href="/media" className="text-white/80 hover:text-[#fbbf24] transition-colors font-pp-neue">
                    Media
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href="/team" className="text-white/80 hover:text-[#fbbf24] transition-colors font-pp-neue">
                    Team
                  </Link>
                  <Link href="/contact" className="text-white/80 hover:text-[#fbbf24] transition-colors font-pp-neue">
                    Contact
                  </Link>
                  <a href="/Guidelines.pdf" target="_blank" className="text-white/80 hover:text-[#fbbf24] transition-colors font-pp-neue">
                    Guidelines
                  </a>
                  <Link 
                    href="https://www.instagram.com/jurhythm.ju/"
                    target="_blank"
                    className="text-white/80 hover:text-[#fbbf24] transition-colors font-pp-neue flex items-center gap-2"
                  >
                    <Image 
                      src="/images/icons/insta.svg" 
                      alt="Instagram" 
                      width={16} 
                      height={16} 
                      className="opacity-70" 
                    />
                    Instagram
                  </Link>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[#fbbf24] text-lg md:text-xl font-druk uppercase tracking-wider mb-6">
                Find Us
              </h3>
              <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7188.9312881326605!2d75.87389800094068!3d26.776580151088893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc892b8f05399%3A0x43fbca7105eca800!2sJECRC%20University!5e0!3m2!1sen!2sin!4v1757135014600!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JECRC University Location"
                ></iframe>
              </div>
              <p className="text-white/60 text-sm font-pp-neue mt-3 text-center">
                JECRC University, Jaipur
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - JURHYTHM Large Text */}
        <div className="relative px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-black flex items-center justify-center">
          <h1 
            className="text-6xl md:text-8xl lg:text-[120px] xl:text-[150px] font-druk tracking-wider select-none text-center"
            style={{ 
              color: '#fbbf24',
              opacity: 0.9,
              lineHeight: 0.9,
              textTransform: 'uppercase',
              textShadow: '0 0 50px rgba(251, 191, 36, 0.3)'
            }}
          >
            JURHYTHM
          </h1>
        </div>

        {/* Third Row - Silhouette */}
        <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] bg-black">
          <div className="absolute inset-0">
            <Image
              src="/rhy.png"
              alt="JU Rhythm Cityscape"
              fill
              className="object-contain object-bottom opacity-90"
              style={{ 
                filter: 'brightness(1.2) contrast(1.1)',
                mixBlendMode: 'lighten'
              }}
              priority
            />
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="relative bg-black/95 py-4 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/60 text-xs md:text-sm font-pp-neue text-center md:text-left">
              &copy; {new Date().getFullYear()} JU Rhythm, JECRC University. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs md:text-sm font-pp-neue text-white/60">
              <span>Made with ❤️ by Student Council</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
