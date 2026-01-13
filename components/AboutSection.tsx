"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative md:min-h-screen">
      <div className="relative z-10 flex flex-col lg:flex-row md:min-h-screen items-center w-full px-6 lg:px-20 py-10 justify-between gap-10 lg:gap-16">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-6">
          <div className="w-full text-center lg:text-left">
            <h1 className="mb-6 text-3xl lg:text-5xl xl:text-6xl duration-500 font-bold font-druk uppercase tracking-wider text-[#F4C542]">
              About JURHYTHM&apos;26
            </h1>
          </div>

          <p className="w-full text-center lg:text-left text-gray-200 font-light text-sm lg:text-base xl:text-lg font-pp-neue leading-relaxed">
            JURHYTHM is more than just a fest—it's a vibrant techno-cultural
            extravaganza that unites the brilliance of technology, the thrill of
            sports, the richness of culture, and the dynamism of media. It's a
            celebration of creativity, innovation, and camaraderie, where
            diverse ideas and talents come together to create unforgettable
            memories. Whether you're here to compete, perform, or simply revel
            in the festive spirit, JURHYTHM offers a platform to showcase your
            potential, connect with like-minded individuals, and experience the
            magic of endless fun under one roof.
          </p>
        </div>

        {/* Right Side - Ticket GIF */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/ticket.gif"
              alt="JU Rhythm Ticket"
              width={600}
              height={600}
              className="w-full h-auto object-contain mix-blend-screen"
              style={{
                filter: 'contrast(1.1) brightness(1.1)',
              }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
