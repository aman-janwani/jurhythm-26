"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import content from "@/lib/useContent"

const galleryImages = content.glimpse.scrollingGallery

export default function ScrollingGallery() {
  const column1Ref = useRef<HTMLDivElement>(null)
  const column2Ref = useRef<HTMLDivElement>(null)
  const column3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const column1 = column1Ref.current
    const column2 = column2Ref.current
    const column3 = column3Ref.current

    if (!column1 || !column2 || !column3) return

    let animation1: number
    let animation2: number
    let animation3: number

    let pos1 = 0
    let pos2 = 0
    let pos3 = 0

    const speed = 0.8

    const animate = () => {
      // Column 1 moves up
      pos1 -= speed
      if (Math.abs(pos1) >= column1.scrollHeight / 2) {
        pos1 = 0
      }
      column1.style.transform = `translateY(${pos1}px)`

      // Column 2 moves down
      pos2 += speed
      if (pos2 >= column2.scrollHeight / 2) {
        pos2 = 0
      }
      column2.style.transform = `translateY(${-column2.scrollHeight / 2 + pos2}px)`

      // Column 3 moves up
      pos3 -= speed
      if (Math.abs(pos3) >= column3.scrollHeight / 2) {
        pos3 = 0
      }
      column3.style.transform = `translateY(${pos3}px)`

      animation1 = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animation1)
    }
  }, [])

  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Gallery columns on the left */}
        <div className="w-full lg:w-1/2 h-[500px] overflow-hidden relative">
          <div className="flex gap-3 h-full">
            {/* Column 1 - moves up */}
            <div className="flex-1 overflow-hidden relative">
              <div ref={column1Ref} className="flex flex-col gap-3">
                {[...galleryImages.column1, ...galleryImages.column1].map((img, index) => (
                  <div key={index} className="relative w-full aspect-[3/4] rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - moves down */}
            <div className="flex-1 overflow-hidden relative">
              <div ref={column2Ref} className="flex flex-col gap-3">
                {[...galleryImages.column2, ...galleryImages.column2].map((img, index) => (
                  <div key={index} className="relative w-full aspect-[3/4] rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 - moves up */}
            <div className="flex-1 overflow-hidden relative">
              <div ref={column3Ref} className="flex flex-col gap-3">
                {[...galleryImages.column3, ...galleryImages.column3].map((img, index) => (
                  <div key={index} className="relative w-full aspect-[3/4] rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        </div>

        {/* Text description on the right */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-anton font-bold mb-6 leading-tight"
            style={{ 
              color: "#fbbf24",
              textShadow: "0 0 40px rgba(251, 191, 36, 0.6)"
            }}
          >
            Here are a few glimpses of previous Rhythm
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-8 font-inter">
            Experience the energy, creativity, and unforgettable moments that defined our past events. Each photograph
            captures the essence of what makes Rhythm truly special.
          </p>
          <p className="text-neutral-500 text-base font-inter">
            From electrifying performances to intimate backstage moments, these glimpses tell the story of our journey
            together.
          </p>
        </div>
      </div>
    </section>
  )
}
