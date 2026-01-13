"use client"

import { useEffect, useState, useRef } from "react"

export function Equalizer() {
  const [bars, setBars] = useState<number[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const lastUpdateRef = useRef<number>(0)

  useEffect(() => {
    const generateBars = () => {
      const barCount = 100 // Reduced from 400 for better performance
      const newBars: number[] = []

      for (let i = 0; i < barCount; i++) {
        const random = Math.random()
        let height: number

        if (random > 0.94) {
          height = 55 + Math.random() * 45
        } else if (random > 0.85) {
          height = 30 + Math.random() * 25
        } else if (random > 0.7) {
          height = 12 + Math.random() * 18
        } else {
          height = 2 + Math.random() * 6
        }

        newBars.push(height)
      }

      setBars(newBars)
    }

    generateBars()

    const updateBars = (timestamp: number) => {
      // Throttle to 30fps instead of 60fps for better performance
      if (timestamp - lastUpdateRef.current < 33) {
        animationFrameRef.current = requestAnimationFrame(updateBars)
        return
      }

      lastUpdateRef.current = timestamp

      setBars((prev) =>
        prev.map((h) => {
          const variation = (Math.random() - 0.5) * 8
          const newHeight = h + variation

          if (h > 45) return Math.max(35, Math.min(100, newHeight))
          if (h > 25) return Math.max(18, Math.min(55, newHeight))
          if (h > 10) return Math.max(6, Math.min(30, newHeight))
          return Math.max(1, Math.min(8, newHeight))
        }),
      )

      animationFrameRef.current = requestAnimationFrame(updateBars)
    }

    animationFrameRef.current = requestAnimationFrame(updateBars)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div className="w-screen flex items-center justify-center gap-[2px] h-24 -mx-[50vw] left-1/2 relative">
      {bars.map((height, i) => (
        <div
          key={i}
          className="w-[3px] bg-gradient-to-t from-[#fbbf24] to-[#F4C542] rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(251,191,36,0.5)]"
          style={{
            height: `${height}%`,
            willChange: 'height', // GPU acceleration hint
          }}
        />
      ))}
    </div>
  )
}
