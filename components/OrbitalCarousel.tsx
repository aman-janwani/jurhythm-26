"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Fireworks } from "@fireworks-js/react"

interface GlimpseCard {
  name: string
  image: string
}

const glimpseImages: GlimpseCard[] = [
  { name: "Cultural Night", image: "/images/portrait-woman-artist-curly-hair.jpg" },
  { name: "Tech Fest", image: "/images/portrait-man-curator-yellow-background.jpg" },
  { name: "Sports Day", image: "/images/portrait-man-artist-vintage-style.jpg" },
  { name: "Music Concert", image: "/images/portrait-woman-artist-brunette.jpg" },
  { name: "Art Exhibition", image: "/images/portrait-man-sculptor-asian.jpg" },
  { name: "Dance Performance", image: "/images/portrait-woman-painter-blonde.jpg" },
  { name: "Innovation Meet", image: "/images/portrait-man-photographer-japanese.jpg" },
  { name: "Design Workshop", image: "/images/portrait-woman-designer-latina.jpg" },
  { name: "Hackathon", image: "/images/portrait-man-illustrator-british.jpg" },
  { name: "Drama Festival", image: "/images/portrait-woman-sculptor-russian.jpg" },
  { name: "Startup Pitch", image: "/images/portrait-man-architect-singapore.jpg" },
  { name: "Fashion Show", image: "/images/portrait-woman-mixed-media-nigerian.jpg" },
]

export default function OrbitalCarousel() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev - 0.4)
    }, 16)
    return () => clearInterval(interval)
  }, [])

  const cardCount = glimpseImages.length
  const angleStep = (2 * Math.PI) / cardCount
  const radiusX = 520
  const radiusZ = 350
  const fixedTiltAngle = -15
  const orbitTiltAngle = 15

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center py-20">
      {/* Decorative Lanterns - Bigger, Fewer */}
      <div className="absolute top-24 left-20 w-20 h-28 opacity-65 animate-pulse z-5" style={{ animationDuration: '3.8s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-4 bg-gradient-to-b from-[#a855f7] to-[#9333ea] rounded-lg shadow-[0_0_35px_rgba(168,85,247,1)]"></div>
          <div className="absolute inset-x-2.5 top-0 h-3 bg-[#581c87] rounded-t-lg"></div>
          <div className="absolute inset-x-2.5 bottom-2 h-3 bg-[#581c87] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-1 h-8 bg-[#581c87]"></div>
          <div className="absolute inset-0 bg-[#a855f7] blur-xl opacity-60"></div>
        </div>
      </div>

      <div className="absolute top-1/4 right-24 w-18 h-26 opacity-60 animate-pulse z-5" style={{ animationDuration: '4.3s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-4 bg-gradient-to-b from-[#4ade80] to-[#22c55e] rounded-lg shadow-[0_0_35px_rgba(74,222,128,1)]"></div>
          <div className="absolute inset-x-2.5 top-0 h-3 bg-[#166534] rounded-t-lg"></div>
          <div className="absolute inset-x-2.5 bottom-2 h-3 bg-[#166534] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-7 w-1 h-7 bg-[#166534]"></div>
          <div className="absolute inset-0 bg-[#4ade80] blur-xl opacity-60"></div>
        </div>
      </div>

      <div className="absolute bottom-32 left-1/4 w-22 h-30 opacity-70 animate-pulse z-5" style={{ animationDuration: '3.3s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-4 bg-gradient-to-b from-[#fb923c] to-[#f97316] rounded-lg shadow-[0_0_35px_rgba(251,146,60,1)]"></div>
          <div className="absolute inset-x-2.5 top-0 h-3 bg-[#7c2d12] rounded-t-lg"></div>
          <div className="absolute inset-x-2.5 bottom-2 h-3 bg-[#7c2d12] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-1 h-8 bg-[#7c2d12]"></div>
          <div className="absolute inset-0 bg-[#fb923c] blur-xl opacity-60"></div>
        </div>
      </div>

      <div className="absolute bottom-1/4 right-20 w-18 h-26 opacity-60 animate-pulse z-5" style={{ animationDuration: '4.5s' }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-x-2 top-2 bottom-4 bg-gradient-to-b from-[#fbbf24] to-[#f59e0b] rounded-lg shadow-[0_0_35px_rgba(251,191,36,1)]"></div>
          <div className="absolute inset-x-2.5 top-0 h-3 bg-[#78350f] rounded-t-lg"></div>
          <div className="absolute inset-x-2.5 bottom-2 h-3 bg-[#78350f] rounded-b-lg"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-7 w-1 h-7 bg-[#78350f]"></div>
          <div className="absolute inset-0 bg-[#fbbf24] blur-xl opacity-60"></div>
        </div>
      </div>
      
      {/* Fireworks Background */}
      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 100,
          },
          hue: {
            min: 40,
            max: 50,
          },
          delay: {
            min: 40,
            max: 60,
          },
          acceleration: 1.01,
          friction: 0.98,
          gravity: 0.8,
          particles: 40,
          explosion: 4,
          mouse: {
            click: false,
            move: false,
            max: 1,
          },
        }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1,
        }}
      />
      
      {/* Back text layer - MPS sits behind cards */}
      <div className="absolute z-10 pointer-events-none select-none">
        <h1 
          className="text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-bold leading-none"
          style={{ 
            fontFamily: "'New Amsterdam', sans-serif",
            color: "#fbbf24",
            textShadow: "0 0 40px rgba(251, 191, 36, 0.6), 0 0 80px rgba(251, 191, 36, 0.3)",
            letterSpacing: "0.15em"
          }}
        >
          <span className="invisible">GLI</span>
          <span>MPS</span>
          <span className="invisible">E</span>
        </h1>
      </div>

      {/* Front text layer - GLI and E sit in front of cards */}
      <div className="absolute z-50 pointer-events-none select-none">
        <h1 
          className="text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-bold leading-none"
          style={{ 
            fontFamily: "'New Amsterdam', sans-serif",
            color: "#fbbf24",
            textShadow: "0 0 40px rgba(251, 191, 36, 0.6), 0 0 80px rgba(251, 191, 36, 0.3)",
            letterSpacing: "0.15em"
          }}
        >
          <span>GLI</span>
          <span className="invisible">MPS</span>
          <span>E</span>
        </h1>
      </div>

      {/* Desktop View - 3D Carousel */}
      <div
        className="hidden md:block relative w-full h-[700px] z-20"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateZ(${orbitTiltAngle}deg) rotateX(10deg)`,
          }}
        >
          {glimpseImages.map((item, index) => {
            const angle = rotation * (Math.PI / 180) + index * angleStep
            const x = Math.sin(angle) * radiusX
            const z = Math.cos(angle) * radiusZ
            const y = Math.sin(angle) * 60

            const normalizedZ = (z + radiusZ) / (2 * radiusZ)
            const scale = 0.5 + normalizedZ * 0.4

            const zIndex = Math.round(normalizedZ * 100)

            const opacity = 0.85 + normalizedZ * 0.15

            const curveAmount = Math.sin(angle) * 8

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  transform: `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${fixedTiltAngle}deg) rotateY(${curveAmount}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="w-44 h-56 rounded-sm p-2.5 pb-3 flex flex-col shadow-2xl"
                  style={{
                    transform: `rotateY(${curveAmount * 0.5}deg)`,
                    transformStyle: "preserve-3d",
                    background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
                    border: "1px solid rgba(251, 191, 36, 0.2)",
                  }}
                >
                  <div className="flex-1 w-full overflow-hidden bg-neutral-800 rounded-sm">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={200}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p 
                    className="text-sm font-light mt-2 text-center truncate"
                    style={{ color: "#fcd34d" }}
                  >
                    {item.name}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile View - Simple Grid of Cards */}
      <div className="md:hidden w-full max-w-md px-4 z-20 grid grid-cols-2 gap-4">
        {glimpseImages.map((item, index) => (
          <div
            key={index}
            className="relative w-full aspect-[3/4] rounded-lg overflow-hidden"
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              width={200}
              height={250}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p 
                className="text-xs font-light text-center"
                style={{ color: "#fcd34d" }}
              >
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
