"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import dynamic from "next/dynamic"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import LazyComponent from "@/components/LazyComponent"
import MarqueeBar from "@/components/MarqueeBar"

// Lazy load heavy components
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div className="h-screen bg-black animate-pulse" />
})

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const StarsSection = dynamic(() => import("@/components/StarsSection"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const VerticalsSection = dynamic(() => import("@/components/VerticalsSection"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const OrbitalCarousel = dynamic(() => import("@/components/OrbitalCarousel"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const ScrollingGallery = dynamic(() => import("@/components/ScrollingGallery"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
})

const AfterMoviesCarousel = dynamic(() => import("@/components/AfterMoviesCarousel").then(mod => ({ default: mod.AfterMoviesCarousel })), {
  loading: () => <div className="h-screen bg-black animate-pulse" />
})

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current

      if (!container) return

      // LabSection background - Pure black
      ScrollTrigger.create({
        trigger: "#lab",
        start: "top center",
        end: "bottom center",
        onEnter: () =>
          gsap.to(container, { backgroundColor: "#000000", duration: 1.5, ease: "power2.inOut" }),
        onEnterBack: () =>
          gsap.to(container, { backgroundColor: "#000000", duration: 1.5, ease: "power2.inOut" }),
      })

      // Team background - Pure black
      ScrollTrigger.create({
        trigger: "#team",
        start: "top center",
        end: "bottom center",
        onEnter: () =>
          gsap.to(container, { backgroundColor: "#000000", duration: 1.5, ease: "power2.inOut" }),
        onEnterBack: () =>
          gsap.to(container, { backgroundColor: "#000000", duration: 1.5, ease: "power2.inOut" }),
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])


  return (
    <div className="w-full h-screen bg-black relative">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <div ref={containerRef} className="w-full min-h-screen bg-black relative transition-colors duration-1000">
        
        {/* About Section */}
        <LazyComponent fallback={<div className="h-96 bg-black animate-pulse" />}>
          <AboutSection />
        </LazyComponent>
        
        {/* Animated Marquee Bar 1 */}
        <MarqueeBar text="9TH - 11TH OCTOBER • JECRC UNIVERSITY • JAIPUR" direction="left" speed={25} className="my-12" />
        
        {/* Stars Section */}
        <LazyComponent fallback={<div className="h-96 bg-black animate-pulse" />}>
          <StarsSection />
        </LazyComponent>
        
        {/* Verticals Section */}
        <LazyComponent fallback={<div className="h-96 bg-black animate-pulse" />}>
          <VerticalsSection />
        </LazyComponent>
        
        {/* Animated Marquee Bar 2 */}
        <MarqueeBar text="CULTURAL • TECHNICAL • SPORTS • MEDIA • JOIN THE CELEBRATION" direction="right" speed={28} className="my-12" />
        
        {/* Glimpse Section - Orbital Carousel */}
        <LazyComponent fallback={<div className="h-96 bg-black animate-pulse" />}>
          <OrbitalCarousel />
        </LazyComponent>
      </div>

      {/* Transitional Gradient Section */}
      <div className="relative h-64 -mt-32 overflow-hidden">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbbf24]/90 via-[#fbbf24]/80 via-30% to-transparent" />
        {/* Middle blend layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/50 via-50% to-[#0a0a0a]" />
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-b from-[#fbbf24]/20 via-[#fbbf24]/5 to-transparent" />
        {/* Final dark fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% via-black/60 via-70% to-black" />
      </div>
      
      {/* Scrolling Gallery Section */}
      <LazyComponent fallback={<div className="h-96 bg-black animate-pulse" />}>
        <ScrollingGallery />
      </LazyComponent>
      
      {/* AfterMovies Carousel Section */}
      <LazyComponent fallback={<div className="h-screen bg-black animate-pulse" />}>
        <AfterMoviesCarousel />
      </LazyComponent>
      
      {/* Footer with Lazy Loading */}
      <LazyComponent fallback={<div className="h-screen bg-black animate-pulse" />}>
        <Footer />
      </LazyComponent>
    </div>
  )
}