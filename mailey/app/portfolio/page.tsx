"use client";

import { useState, useEffect, useRef } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import EmblaCarousel, { EmblaHandle } from "../components/EmblaCarousel";

// Sample portfolio data
const portfolioData = [
  {
    id: 1,
    title: "URBAN SHADOWS",
    image: "/Cutouts/ADDI D.png",
    link: "/portfolio/urban-shadows",
  },
  {
    id: 2,
    title: "GOLDEN HOUR",
    image: "/Cutouts/JaydenB_.png",
    link: "/portfolio/golden-hour",
  },
  {
    id: 3,
    title: "MINIMALIST FORMS",
    image: "/Cutouts/Elena A_.png",
    link: "/portfolio/minimalist-forms",
  },
  {
    id: 4,
    title: "NEON NIGHTS",
    image: "/Cutouts/ARI G_.png",
    link: "/portfolio/neon-nights",
  },
  {
    id: 5,
    title: "NATURAL LIGHT",
    image: "/Cutouts/RomanticRuins.png",
    link: "/portfolio/natural-light",
  },
  {
    id: 6,
    title: "NATURAL LIGHT",
    image: "/Cutouts/70sFall.png",
    link: "/portfolio/natural-light",
  },
  {
    id: 7,
    title: "NATURAL LIGHT",
    image: "/Cutouts/CollageBrandingShoot.png",
    link: "/portfolio/natural-light",
  },
  {
    id: 8,
    title: "NATURAL LIGHT",
    image: "/Cutouts/LyleL.png",
    link: "/portfolio/natural-light",
  },
  {
    id: 9,
    title: "NATURAL LIGHT",
    image: "/Cutouts/MaeMagzine.png",
    link: "/portfolio/natural-light",
  },
];

export default function PhotographyPortfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [snaps, setSnaps] = useState<number[]>([]);
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

  // Title helpers (unchanged)
  const getCurrentText = () => {
    const current = portfolioData[currentIndex];
    const previous =
      portfolioData[
        (currentIndex - 1 + portfolioData.length) % portfolioData.length
      ];
    const next = portfolioData[(currentIndex + 1) % portfolioData.length];
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
          <div className="flex items-center justify-center h-full">
            <EmblaCarousel
              ref={emblaRef}
              slides={portfolioData}
              currentIndex={currentIndex}
              onInit={(api) => setSnaps(api.scrollSnapList())}
              onSelect={(i) => setCurrentIndex(i)}
            />
          </div>

          {/* Page-level Arrows controlling Embla */}
          <button
            onClick={goToPrevious}
            className="absolute left-8 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-300 z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-300 z-20"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Page-level Dots controlling Embla */}
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
