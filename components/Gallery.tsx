"use client";

import Image from "next/image";

const gridItems = [
  { id: 1, colSpan: 1, rowSpan: 2, src: "/images/0.webp" },
  { id: 3, colSpan: 1, rowSpan: 1, src: "/images/1.webp" },
  { id: 2, colSpan: 1, rowSpan: 1, src: "/images/2.webp" },
  { id: 4, colSpan: 1, rowSpan: 1, src: "/images/3.webp" },
  { id: 5, colSpan: 1, rowSpan: 2, src: "/images/4.webp" },
  { id: 6, colSpan: 1, rowSpan: 1, src: "/images/5.webp" },
  { id: 7, colSpan: 1, rowSpan: 1, src: "/images/6.webp" },
  { id: 8, colSpan: 1, rowSpan: 1, src: "/images/7.webp" },
  { id: 9, colSpan: 1, rowSpan: 1, src: "/images/8.webp" },
  { id: 10, colSpan: 1, rowSpan: 1, src: "/images/9.webp" },
  { id: 11, colSpan: 1, rowSpan: 1, src: "/images/10.webp" },
  { id: 12, colSpan: 1, rowSpan: 2, src: "/images/11.webp" },
  { id: 13, colSpan: 1, rowSpan: 1, src: "/images/12.webp" },
  { id: 14, colSpan: 1, rowSpan: 1, src: "/images/13.webp" },
  { id: 15, colSpan: 1, rowSpan: 1, src: "/images/14.webp" },
  { id: 16, colSpan: 1, rowSpan: 1, src: "/images/15.webp" },
  { id: 17, colSpan: 1, rowSpan: 1, src: "/images/16.webp" },
  { id: 18, colSpan: 1, rowSpan: 1, src: "/images/17.webp" },
  { id: 19, colSpan: 1, rowSpan: 1, src: "/images/18.webp" },
  { id: 20, colSpan: 1, rowSpan: 1, src: "/images/19.webp" },
  { id: 21, colSpan: 1, rowSpan: 1, src: "/images/20.webp" },
  { id: 22, colSpan: 1, rowSpan: 1, src: "/images/21.webp" },
  { id: 23, colSpan: 1, rowSpan: 2, src: "/images/22.webp" },
  { id: 24, colSpan: 1, rowSpan: 1, src: "/images/23.webp" },
  { id: 25, colSpan: 1, rowSpan: 1, src: "/images/24.webp" },
  { id: 26, colSpan: 1, rowSpan: 1, src: "/images/25.webp" },
  { id: 27, colSpan: 1, rowSpan: 2, src: "/images/26.webp" },
  { id: 28, colSpan: 1, rowSpan: 1, src: "/images/27.webp" },
  { id: 29, colSpan: 1, rowSpan: 1, src: "/images/28.webp" },
  { id: 30, colSpan: 1, rowSpan: 1, src: "/images/29.webp" },
  { id: 31, colSpan: 1, rowSpan: 1, src: "/images/30.jpg" },
];

export default function Gallery() {
  return (
    <section id="glimpses" className="relative md:min-h-screen py-24 overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 -z-10">
        {/* Radial glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F4C542]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f7931e]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-2/3 left-2/3 w-72 h-72 bg-[#fdc830]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 w-full max-w-[80%] mx-auto flex flex-col gap-16">
        <div className="w-full text-center relative group cursor-pointer">
          <h2 className="text-5xl md:text-8xl duration-500 font-druk tracking-wide font-bold text-center text-[#fbbf24] drop-shadow-[0_0_40px_rgba(251,191,36,0.6)] uppercase">
            Glimpse
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5 auto-rows-[minmax(200px,auto)]">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className={`relative ${
                item.rowSpan === 2 ? "row-span-2" : "row-span-1"
              }`}
            >
              <Image
                src={item.src}
                alt={`Gallery image ${item.id}`}
                fill
                sizes="26.67vw"
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
