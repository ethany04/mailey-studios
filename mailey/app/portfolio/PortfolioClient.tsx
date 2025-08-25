"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EmblaCarousel, { EmblaHandle } from "../components/EmblaCarousel";
import type { Slide } from "@/lib/getCutoutSlides";

type Props = {
  slides: Slide[];
};

export default function PortfolioClient({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [snaps, setSnaps] = useState<number[]>([]);
  const emblaRef = useRef<EmblaHandle>(null);

  const goToNext = () => {
    emblaRef.current?.scrollNext();
    setIsAutoPlaying(false);
  };
  const goToPrevious = () => {
    emblaRef.current?.scrollPrev();
    setIsAutoPlaying(false);
  };
  const goTo = (i: number) => {
    emblaRef.current?.scrollTo(i);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => emblaRef.current?.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [isAutoPlaying]);

  const getCurrentText = () => {
    const current = slides[currentIndex];
    const previous = slides[(currentIndex - 1 + slides.length) % slides.length];
    const next = slides[(currentIndex + 1) % slides.length];
    return { current, previous, next };
  };
  const textData = getCurrentText();

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <main className="pt-20 pb-16">
        {/* Text Carousel */}
        <div className="text-center mb-16 h-32 flex flex-col justify-center">
          <div className="relative overflow-hidden">
            <div className="transition-all duration-700 ease-out">
              <div className="text-sm text-gray-400 mb-2 opacity-40">
                {textData.previous.title}
              </div>
              <div className="text-xl md:text-2xl font-bold mb-2 tracking-wider">
                {textData.current.title}
              </div>
              <div className="text-sm text-gray-400 opacity-40">
                {textData.next.title}
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative h-[500px] overflow-visible">
          <div className="flex items-center justify-center h-full w-full">
            <EmblaCarousel
              ref={emblaRef}
              slides={slides}
              currentIndex={currentIndex}
              onInit={(api) => setSnaps(api.scrollSnapList())}
              onSelect={(i) => setCurrentIndex(i)}
            />
          </div>

          {/* Page-level Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-[35%] top-1/2 -translate-y-1/2 p-3 transition-all duration-300 z-20 cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-[35%] top-1/2 -translate-y-1/2 p-3 transition-all duration-300 z-20 cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {(snaps.length ? snaps : slides.map((_, i) => i)).map((_, i) => (
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
          ))}
        </div>

        <div className="text-center mt-16 text-xs text-gray-500 tracking-wider">
          <div className="mb-2">SCROLL TO EXPLORE</div>
          <div>CLICK TO VIEW PROJECT</div>
        </div>
      </main>
    </div>
  );
}
