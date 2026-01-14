import React from "react";
import Image from "next/image";
import Link from "next/link";
import content from "@/lib/useContent";

const Footer = () => {
  const { footer, site, social } = content;

  return (
    <footer id="footer" className="relative bg-black overflow-hidden">
      {/* Main Footer Content - Three Row Layout */}
      <div className="relative w-full">
        
        {/* First Row - Tagline, Links, and Map */}
        <div className="px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-black/95 border-b border-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Tagline Section */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[#fbbf24] text-lg md:text-xl font-anton uppercase tracking-wider mb-4">
                {footer.tagline}
              </h3>
              <p className="text-white/80 text-base md:text-lg font-inter leading-relaxed">
                {footer.description}
              </p>
            </div>

            {/* Links Section */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[#fbbf24] text-lg md:text-xl font-anton uppercase tracking-wider mb-6">
                {footer.quickLinks.heading}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  {footer.quickLinks.links.slice(0, 4).map((link, index) => (
                    <Link 
                      key={index}
                      href={link.href} 
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-white/80 hover:text-[#fbbf24] transition-colors font-inter"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  {footer.quickLinks.links.slice(4).map((link, index) => (
                    link.icon ? (
                      <Link 
                        key={index}
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-white/80 hover:text-[#fbbf24] transition-colors font-inter flex items-center gap-2"
                      >
                        <Image 
                          src={link.icon} 
                          alt={link.label}
                          width={16} 
                          height={16} 
                          className="opacity-70" 
                        />
                        {link.label}
                      </Link>
                    ) : (
                      <Link 
                        key={index}
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-white/80 hover:text-[#fbbf24] transition-colors font-inter"
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[#fbbf24] text-lg md:text-xl font-anton uppercase tracking-wider mb-6">
                {footer.findUs.heading}
              </h3>
              <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                <iframe
                  src={site.mapEmbedUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JECRC University Location"
                ></iframe>
              </div>
              <p className="text-white/60 text-sm font-inter mt-3 text-center">
                {footer.findUs.locationText}
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - JURHYTHM Large Text with Overlap */}
        <div className="relative px-6 md:px-12 lg:px-20 py-8 md:py-40 bg-black flex items-center justify-center overflow-visible">
          <h1 
            className="text-[8rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] 2xl:text-[24rem] font-anton tracking-wider select-none text-center relative z-10"
            style={{ 
              color: '#fbbf24',
              opacity: 0.95,
              lineHeight: 0.85,
              textTransform: 'uppercase',
              textShadow: '0 0 80px rgba(251, 191, 36, 0.5), 0 0 120px rgba(251, 191, 36, 0.3)',
              WebkitTextStroke: '2px rgba(251, 191, 36, 0.3)'
            }}
          >
            {footer.brandText}
          </h1>
        </div>

        {/* Third Row - Silhouette (overlapped by text above) */}
        <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] bg-black -mt-32 md:-mt-48 lg:-mt-64 xl:-mt-80">
          <div className="absolute inset-0 z-30">
            <Image
              src={footer.silhouetteImage}
              alt={`${site.name} Cityscape`}
              fill
              className="object-contain object-bottom opacity-100"
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
            <p className="text-white/60 text-xs md:text-sm font-inter text-center md:text-left">
              &copy; {new Date().getFullYear()} {footer.copyright}
            </p>
            <div className="flex items-center gap-4 text-xs md:text-sm font-inter text-white/60">
              <span>{footer.madeWith}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
