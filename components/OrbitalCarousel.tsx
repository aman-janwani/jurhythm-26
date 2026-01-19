"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Fireworks } from "@fireworks-js/react"
import content from "@/lib/useContent"
import GlowingDots from "@/components/GlowingDots"

interface GlimpseCard {
  name: string
  image: string
}

export default function OrbitalCarousel() {
  const [rotation, setRotation] = useState(0)
  const glimpseImages: GlimpseCard[] = content.glimpse.orbitalCarousel

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
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black py-24 px-4">
      <GlowingDots count={55} />
      
      {/* Balloon - Center bottom */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-12 z-10 animate-float">
        <Image
          src={content.site.balloonImage}
          alt="Hot Air Balloon"
          width={200}
          height={240}
          className="drop-shadow-[0_0_30px_rgba(251,191,36,0.3)] opacity-60"
        />
      </div>
      
      {/* Fireworks Background */}
      <Fireworks
        options={{
          opacity: 0.5,
          acceleration: 1.05,
          friction: 0.97,
          gravity: 1.5,
          particles: 50,
          traceLength: 3,
          traceSpeed: 10,
          explosion: 5,
          intensity: 30,
          flickering: 50,
          lineStyle: 'round',
          hue: {
            min: 35,
            max: 55
          },
          delay: {
            min: 30,
            max: 60
          },
          rocketsPoint: {
            min: 50,
            max: 50
          },
          lineWidth: {
            explosion: {
              min: 1,
              max: 3
            },
            trace: {
              min: 1,
              max: 2
            }
          },
          brightness: {
            min: 50,
            max: 80
          },
          decay: {
            min: 0.015,
            max: 0.03
          },
          mouse: {
            click: false,
            move: false,
            max: 1
          }
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 1
        }}
      />

      {/* Mobile View - GLIMPSE text at start */}
      <div className="md:hidden absolute top-12 left-4 z-10 pointer-events-none select-none">
        <h1 
          className="text-[3.5rem] font-anton font-bold leading-none"
          style={{ 
            letterSpacing: "0.15em",
          }}
        >
          <span className="font-anton text-[#fbbf24]" style={{
            textShadow: "0 0 15px rgba(251, 191, 36, 0.3), 0 0 25px rgba(251, 191, 36, 0.2)",
            WebkitTextStroke: "1px rgba(251, 191, 36, 0.2)"
          }}>GLIMPSE</span>
        </h1>
      </div>

      
      {/* Back text layer - MPS sits behind cards - Desktop Only */}
      <div className="hidden md:block absolute z-10 pointer-events-none select-none">
        <h1 
          className="text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-anton font-bold leading-none"
          style={{ 
            letterSpacing: "0.15em",
          }}
        >
          <span className="invisible font-anton">GLI</span>
          <span className="font-anton text-[#fbbf24]" style={{
            textShadow: "0 0 15px rgba(251, 191, 36, 0.3), 0 0 25px rgba(251, 191, 36, 0.2)",
            WebkitTextStroke: "1px rgba(251, 191, 36, 0.2)"
          }}>MPS</span>
          <span className="invisible font-anton">E</span>
        </h1>
      </div>

      {/* Front text layer - GLI and E sit in front of cards - Desktop Only */}
      <div className="hidden md:block absolute z-50 pointer-events-none select-none">
        <h1 
          className="text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-anton font-bold leading-none"
          style={{ 
            letterSpacing: "0.15em",
          }}
        >
          <span className="font-anton text-[#fbbf24]" style={{
            textShadow: "0 0 15px rgba(251, 191, 36, 0.3), 0 0 25px rgba(251, 191, 36, 0.2)",
            WebkitTextStroke: "1px rgba(251, 191, 36, 0.2)"
          }}>GLI</span>
          <span className="invisible font-anton">MPS</span>
          <span className="font-anton text-[#fbbf24]" style={{
            textShadow: "0 0 15px rgba(251, 191, 36, 0.3), 0 0 25px rgba(251, 191, 36, 0.2)",
            WebkitTextStroke: "1px rgba(251, 191, 36, 0.2)"
          }}>E</span>
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
                    style={{ color: "#ffffff" }}
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
      <div className="md:hidden w-full max-w-md px-4 z-20 grid grid-cols-2 gap-4 mt-24">
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
                style={{ color: "#ffffff" }}
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
