"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TeamCard } from "@/components/team/TeamCard";

const page = () => {
  // Secretaries - Top 5 members
  const secretaries = [
    {
      name: "Arjun Mehta",
      position: "General Secretary",
      image: "/team/1.jpg",
    },
    {
      name: "Priya Sharma",
      position: "Technical Secretary",
      image: "/team/2.jpg",
    },
    {
      name: "Rahul Verma",
      position: "Cultural Secretary",
      image: "/team/3.jpg",
    },
    {
      name: "Ananya Singh",
      position: "Sports Secretary",
      image: "/team/4.jpg",
    },
    {
      name: "Karan Patel",
      position: "Media Secretary",
      image: "/team/5.jpg",
    },
  ];

  // Core Team Members
  const coreTeam = [
    {
      name: "Sneha Reddy",
      position: "Marketing Lead",
      image: "/team/6.jpg",
    },
    {
      name: "Vikram Joshi",
      position: "Logistics Head",
      image: "/team/7.jpg",
    },
    {
      name: "Ishita Kapoor",
      position: "Finance Head",
      image: "/team/8.jpg",
    },
    {
      name: "Rohan Gupta",
      position: "Design Lead",
      image: "/team/9.jpg",
    },
    {
      name: "Aisha Khan",
      position: "PR & Communications",
      image: "/team/10.jpg",
    },
    {
      name: "Siddharth Rao",
      position: "Sponsorship Head",
      image: "/team/11.jpg",
    },
    {
      name: "Meera Nair",
      position: "Hospitality Head",
      image: "/team/12.jpg",
    },
    {
      name: "Dev Kapoor",
      position: "Content Head",
      image: "/team/1.jpg",
    },
    {
      name: "Riya Saxena",
      position: "Operations Head",
      image: "/team/2.jpg",
    },
  ];

  // State for carousel
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(coreTeam.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return coreTeam.slice(start, end);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

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

      {/* Decorative Floating Lanterns */}
      <div className="absolute top-32 left-10 w-16 h-24 opacity-45 animate-pulse z-10" style={{ animationDuration: '3.6s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-6 bg-gradient-to-b from-[#F4C542] to-[#FFB84D] rounded-lg shadow-[0_0_30px_rgba(244,197,66,0.8)]"></div>
          <div className="absolute inset-x-3 top-0 h-3 bg-[#8b4513] rounded-t-lg"></div>
          <div className="absolute inset-x-3 bottom-4 h-3 bg-[#8b4513] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-0.5 h-8 bg-[#8b4513]"></div>
          <div className="absolute inset-0 bg-[#F4C542] blur-xl opacity-40"></div>
        </div>
      </div>

      <div className="absolute top-1/3 right-16 w-14 h-22 opacity-40 animate-pulse z-10" style={{ animationDuration: '4.3s', animationDelay: '1s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-6 bg-gradient-to-b from-[#FFA726] to-[#F4C542] rounded-lg shadow-[0_0_30px_rgba(255,167,38,0.8)]"></div>
          <div className="absolute inset-x-3 top-0 h-3 bg-[#8b4513] rounded-t-lg"></div>
          <div className="absolute inset-x-3 bottom-4 h-3 bg-[#8b4513] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-0.5 h-6 bg-[#8b4513]"></div>
          <div className="absolute inset-0 bg-[#FFA726] blur-xl opacity-40"></div>
        </div>
      </div>

      <div className="absolute bottom-40 left-1/4 w-12 h-20 opacity-35 animate-pulse z-10" style={{ animationDuration: '3.8s', animationDelay: '0.5s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-6 bg-gradient-to-b from-[#FFB84D] to-[#FFA726] rounded-lg shadow-[0_0_30px_rgba(255,184,77,0.8)]"></div>
          <div className="absolute inset-x-3 top-0 h-3 bg-[#8b4513] rounded-t-lg"></div>
          <div className="absolute inset-x-3 bottom-4 h-3 bg-[#8b4513] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-7 w-0.5 h-7 bg-[#8b4513]"></div>
          <div className="absolute inset-0 bg-[#FFB84D] blur-xl opacity-40"></div>
        </div>
      </div>

      <div className="w-full pt-24 sm:pt-32 md:pt-16 flex flex-col items-center min-h-screen pb-16 relative z-20">
        {/* Large Title with proper spacing */}
        <div className="w-full px-6 py-12 md:py-20 flex flex-col items-center gap-8">
          <h1 className="text-[#fbbf24] font-new-amsterdam text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] text-center tracking-widest uppercase leading-none animate-pulse-slow drop-shadow-[0_0_40px_rgba(251,191,36,0.6)]">
            Team
          </h1>
        </div>

      <div className="max-w-6xl mx-auto relative z-10 px-3 pb-20">
        {/* Secretaries Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-new-amsterdam tracking-widest drop-shadow-[0_0_30px_rgba(244,197,66,0.6)]">
            Meet the Secretaries
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {secretaries.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              className={`min-h-56 max-h-56 md:min-h-72 md:max-h-72 aspect-[3/4] ${
                // Mobile layout: 2-1-2
                index === 2 ? 'col-span-2 sm:col-span-1 justify-self-center' : ''
              }`}
            />
          ))}
        </div>

        {/* Core Team Section */}
        <div className="bg-white/10 p-5 rounded-2xl my-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-new-amsterdam tracking-widest drop-shadow-[0_0_30px_rgba(244,197,66,0.6)]">
              Core Team
            </h2>
            <p className="text-lg text-gray-400 font-delius">
              The amazing individuals who make everything possible
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Cards Grid - 3 columns, 2 rows */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              {getCurrentPageItems().map((member, index) => (
                <TeamCard
                  key={`${currentPage}-${index}`}
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  className="h-40 min-h-40 max-h-40 md:max-h-64 md:min-h-64 aspect-square"
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevPage}
                className="bg-gradient-to-r from-[#fbbf24] to-[#fde68a] text-black hover:from-[#fde68a] hover:to-[#fbbf24] p-3 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Page Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? 'bg-[#fbbf24] w-8 shadow-[0_0_10px_rgba(251,191,36,0.8)]'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                className="bg-gradient-to-r from-[#fbbf24] to-[#fde68a] text-black hover:from-[#fde68a] hover:to-[#fbbf24] p-3 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Page Counter */}
            <div className="text-center mt-4">
              <span className="text-[#fbbf24] font-new-amsterdam text-lg tracking-wider">
                Page {currentPage + 1} of {totalPages}
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />

      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 -z-10">
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
  );
};

export default page;
