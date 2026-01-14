"use client"

import { useEffect, useState } from "react"

export function Equalizer() {
  const [bars, setBars] = useState<number[]>([])

  useEffect(() => {
    const generateBars = () => {
      const barCount = 200
      const newBars: number[] = []

      for (let i = 0; i < barCount; i++) {
        const random = Math.random()
        let height: number

        if (random > 0.94) {
          // Tall peaks (6% chance) - rare
          height = 55 + Math.random() * 45
        } else if (random > 0.85) {
          // Medium-tall bars (9% chance)
          height = 30 + Math.random() * 25
        } else if (random > 0.7) {
          // Small-medium bars (15% chance)
          height = 12 + Math.random() * 18
        } else {
          // Tiny dots (70% chance) - most common
          height = 2 + Math.random() * 6
        }

        newBars.push(height)
      }

      setBars(newBars)
    }

    generateBars()

    const interval = setInterval(() => {
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
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-screen flex items-center justify-center gap-[1px] h-32 -mx-[50vw] left-1/2 relative">
      {bars.map((height, i) => (
        <div
          key={i}
          className="w-[2px] bg-[#fbbf24] rounded-full transition-all duration-300 ease-out"
          style={{
            height: `${height}%`,
          }}
        />
      ))}
    </div>
  )
}
