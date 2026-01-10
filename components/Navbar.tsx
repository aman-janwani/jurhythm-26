"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex justify-between z-50 items-center gap-3 w-full py-4 px-5 md:px-10 max-w-screen fixed top-0 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b-2 border-[#fbbf24]/50' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <Link
        href="/"
        className="flex justify-start items-center stroke-[#fbbf24] hover:stroke-[#fde68a] transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 stroke-[#fbbf24] hover:stroke-[#fde68a]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>
      <div className="flex gap-5 items-center justify-end">
        <Link
          href="/team"
          className="text-white hover:bg-gradient-to-r hover:from-[#fbbf24] hover:to-[#fde68a] hover:bg-clip-text hover:text-transparent transition-all duration-300 font-delius font-semibold tracking-wide text-sm md:text-base uppercase"
        >
          Team
        </Link>
        <Link
          href="/sponsors"
          className="text-white hover:bg-gradient-to-r hover:from-[#fbbf24] hover:to-[#fde68a] hover:bg-clip-text hover:text-transparent transition-all duration-300 font-delius font-semibold tracking-wide text-sm md:text-base uppercase"
        >
          Sponsors
        </Link>
        <div className="gap-1 hidden md:flex">
          <Link href="https://www.instagram.com/student_council_ju/">
            <Image
              src="/images/icons/insta.svg"
              alt="instagram"
              width={35}
              height={35}
              className="text-white stroke-white opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/student-council-jecrc-university/posts/?feedView=all">
            <Image
              src="/images/icons/linkedin.svg"
              alt="linkedin"
              width={35}
              height={35}
              className="text-white stroke-white opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </Link>
        </div>
        <Link 
          href="/contact"
          className="hidden md:block bg-gradient-to-r from-[#fbbf24] to-[#fde68a] text-black hover:bg-gradient-to-r hover:from-[#fde68a] hover:to-[#fbbf24] border-2 border-[#fbbf24] duration-300 cursor-pointer px-6 py-2 rounded-full font-new-amsterdam font-bold tracking-widest text-sm transition-all transform hover:scale-105 uppercase shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:shadow-[0_0_25px_rgba(251,191,36,0.6)]"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
