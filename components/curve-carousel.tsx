"use client"

import { useEffect, useState, useRef } from "react"
import { MusicCard } from "./music-card"

const cards = [
  {
    imageSrc: "/placeholder.svg?height=280&width=280",
    songName: "Running Up That Hill",
  },
  {
    imageSrc: "/placeholder.svg?height=280&width=280",
    songName: "Blinding Lights",
  },
  {
    imageSrc: "/placeholder.svg?height=280&width=280",
    songName: "Levitating",
  },
]

export function CurveCarousel() {
  const [isFlipped, setIsFlipped] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFlipped(true)
          } else {
            setIsFlipped(false)
          }
        })
      },
      {
        threshold: [0.5],
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const cardPositions = [
    { rotate: -8, translateX: -320, translateY: 30, zIndex: 1 },
    { rotate: 0, translateX: 0, translateY: 0, zIndex: 2 },
    { rotate: 8, translateX: 320, translateY: 30, zIndex: 1 },
  ]

  return (
    <div ref={sectionRef} className="relative w-full h-[550px] flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="absolute transition-all duration-1000 ease-out"
            style={{
              transform: `
                translateX(${cardPositions[index].translateX}px) 
                translateY(${cardPositions[index].translateY}px) 
                rotate(${cardPositions[index].rotate}deg)
              `,
              zIndex: cardPositions[index].zIndex,
              transitionDelay: `${index * 200}ms`,
            }}
          >
            <MusicCard imageSrc={card.imageSrc} songName={card.songName} isFlipped={isFlipped} />
          </div>
        ))}
      </div>
    </div>
  )
}
