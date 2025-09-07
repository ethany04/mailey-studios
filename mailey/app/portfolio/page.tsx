"use client";

import { useState, useEffect, useRef } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import EmblaCarousel, { EmblaHandle } from "../components/EmblaCarousel";
import { portfolioData } from "@/lib/portfolioData";


export default function PhotographyPortfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const emblaRef = useRef<EmblaHandle>(null);

  // Hook your arrows to Embla
  const goToNext = () => {
    emblaRef.current?.scrollNext();
    setIsAutoPlaying(false);
  };
  const goToPrevious = () => {
    emblaRef.current?.scrollPrev();
    setIsAutoPlaying(false);
  };

  // Dots: scroll directly
  const goTo = (i: number) => {
    emblaRef.current?.scrollTo(i);
    setIsAutoPlaying(false);
  };

  // Autoplay by driving Embla (keeps state + visuals in sync)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => emblaRef.current?.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [isAutoPlaying]);

  const current = portfolioData[currentIndex];

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <main className="pt-20 pb-16">
        {/* Title */}
        <div className="text-center mb-8 h-32 flex flex-col justify-center">
          <div className="relative overflow-hidden">
            <div className="transition-all duration-700 ease-out">
              <div className="text-xl md:text-2xl font-bold mb-2 tracking-wider">
                {current.title}
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel + Hover Overlay */}
        <div
          className="relative h-[500px] overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center justify-center h-full w-full">
            <EmblaCarousel
              ref={emblaRef}
              slides={portfolioData}
              currentIndex={currentIndex}
              onInit={(api) => setSnaps(api.scrollSnapList())}
              onSelect={(i) => setCurrentIndex(i)}
            />
          </div>

          {/* Page-level Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-[35%] top-1/2 -translate-y-1/2 p-3 transition-all duration-300 z-20 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-[35%] top-1/2 -translate-y-1/2 p-3 transition-all duration-300 z-20 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Hover Text Overlay (desktop: left column; mobile: centered lower) */}
          {current.meta && (
            <>
              {/* Desktop */}
              <div
                className={[
                  "pointer-events-none absolute z-20 hidden md:block",
                  "left-[22%] top-1/2 -translate-y-1/2",
                  "transition-opacity duration-300",
                  isHovered ? "opacity-100" : "opacity-0",
                ].join(" ")}
                // Arrow is at right-[35%]; keep overlay a bit to the left of it:
                style={{ right: "calc(30% + 1.5rem)" }} // ← 1.5rem (~24px) gutter
              >
                <div className="text-sm tracking-widest leading-7 text-black/80 max-w-[42ch] pr-4 break-words">
                  <div>DATE: {current.meta.date}</div>
                  <div>LOCATION: {current.meta.location}</div>
                  <div>MODEL: {current.meta.model}</div>
                  <div>SHOOT TYPE: {current.meta.shootType}</div>
                </div>
              </div>

              {/* Mobile */}
              <div
                className={[
                  "pointer-events-none absolute z-20 md:hidden",
                  "left-1/2 -translate-x-1/2 top-[68%] text-center",
                  "transition-opacity duration-300",
                  isHovered ? "opacity-100" : "opacity-0",
                ].join(" ")}
              >
                <div className="text-xs tracking-widest leading-6 text-black/80">
                  <div>DATE: {current.meta.date}</div>
                  <div>LOCATION: {current.meta.location}</div>
                  <div>MODEL: {current.meta.model}</div>
                  <div>SHOOT TYPE: {current.meta.shootType}</div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {(snaps.length ? snaps : portfolioData.map((_, i) => i)).map(
            (_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-black w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            )
          )}
        </div>

        <div className="text-center mt-16 text-xs text-gray-500 tracking-wider">
          <div className="mb-2">SCROLL TO EXPLORE</div>
          <div>CLICK TO VIEW PROJECT</div>
        </div>
      </main>
    </div>
  );
}
