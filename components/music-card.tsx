"use client"

import type React from "react"

import Image from "next/image"
import { useState, useRef } from "react"

interface MusicCardProps {
  imageSrc: string
  songName: string
  isFlipped: boolean
}

export function MusicCard({ imageSrc, songName, isFlipped }: MusicCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate tilt based on mouse position relative to center
    const tiltX = ((y - centerY) / centerY) * -10 // Max 10 degrees
    const tiltY = ((x - centerX) / centerX) * 10 // Max 10 degrees

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className="relative w-[280px] h-[420px] [perspective:1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full h-full transition-transform duration-300 ease-out [transform-style:preserve-3d]"
        style={{
          transform: `rotateY(${isFlipped ? 0 : 180}deg) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transitionDuration: tilt.x === 0 && tilt.y === 0 ? "800ms" : "100ms",
        }}
      >
        {/* Front - Music Card Content */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden bg-gradient-to-b from-[#4a3a3a] to-[#2a1f1f] shadow-2xl shadow-black/50">
          {/* Image container */}
          <div className="relative w-full h-[280px] overflow-hidden">
            <Image src={imageSrc || "/placeholder.svg"} alt={songName} fill className="object-cover" />
          </div>

          {/* Song info - removed artist name */}
          <div className="p-4">
            <h3 className="text-white font-semibold text-xl leading-tight">{songName}</h3>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-16 left-4 right-4">
            <div className="h-1 bg-zinc-700 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-white/60 rounded-full" />
            </div>
            <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>0:59</span>
              <span>4:59</span>
            </div>
          </div>

          {/* Playback controls */}
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-6 px-4">
            <button className="text-zinc-400 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
              </svg>
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Back - Dark gradient card */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black shadow-2xl shadow-black/50 border border-zinc-700/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.05)_0%,_transparent_50%)]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 rounded-full border-2 border-zinc-600/50 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-zinc-600/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
