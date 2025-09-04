"use client";

import { useState, useEffect, useRef } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import EmblaCarousel, { EmblaHandle } from "../components/EmblaCarousel";

// Sample portfolio data
const portfolioData = [
  {
    id: 1,
    title: "70s Fall",
    image: "/Cutouts/70s Fall.png",
    link: "/portfolio/70sfall",
  },
  {
    id: 2,
    title: "ADDI D",
    image: "/Cutouts/ADDI D.png",
    link: "/portfolio/addid",
  },
  {
    id: 3,
    title: "ARI G",
    image: "/Cutouts/ARI G.png",
    link: "/portfolio/arig",
  },
  {
    id: 4,
    title: "Collage Branding Shoot",
    image: "/Cutouts/Collage Branding Shoot.png",
    link: "/portfolio/collagebrandingshoot",
  },
  {
    id: 5,
    title: "Elena A",
    image: "/Cutouts/Elena A.png",
    link: "/portfolio/elenaa",
  },
  {
    id: 6,
    title: "Jayden B",
    image: "/Cutouts/Jayden B.png",
    link: "/portfolio/jaydenb",
  },
  {
    id: 7,
    title: "Leah",
    image: "/Cutouts/Leah.png",
    link: "/portfolio/leah",
  },
  {
    id: 8,
    title: "Lyle L",
    image: "/Cutouts/Lyle L.png",
    link: "/portfolio/lylel",
  },
  {
    id: 9,
    title: "Mae Magazine",
    image: "/Cutouts/Mae Magazine.png",
    link: "/portfolio/maemagazine",
  },
  {
    id: 10,
    title: "Romantic Ruins",
    image: "/Cutouts/Romantic Ruins.png",
    link: "/portfolio/romanticruins",
  },
  {
    id: 11,
    title: "Roo and the Preacher Dad",
    image: "/Cutouts/Roo and the Preacher Dad.png",
    link: "/portfolio/rooandthepreacherdad",
  },
  {
    id: 12,
    title: "Sarah Moser",
    image: "/Cutouts/Sarah Moser.png",
    link: "/portfolio/sarahmoser",
  },
  {
    id: 13,
    title: "Shei Feb",
    image: "/Cutouts/Shei Feb.png",
    link: "/portfolio/sheifeb",
  },
  {
    id: 14,
    title: "Smriti",
    image: "/Cutouts/Smriti.png",
    link: "/portfolio/smriti",
  },
  {
    id: 15,
    title: "Thirfted Unviersity x Bivouac Collaboration",
    image: "/Cutouts/Thirfted Unviersity x Bivouac Collaboration.png",
    link: "/portfolio/thrifteduniversityxbivouac",
  },
  {
    id: 16,
    title: "Thrifted Univeristy Fall 2024 Ambassadors",
    image: "/Cutouts/Thrifted Univeristy Fall 2024 Ambassadors.png",
    link: "/portfolio/thrifteduniversityfall2024",
  },
  {
    id: 17,
    title: "Thrifted Univeristy Winter Ambassadors 2025",
    image: "/Cutouts/Thrifted Univeristy Winter Ambassadors 2025.png",
    link: "/portfolio/thrifteduniversitywinter2025",
  },
  {
    id: 18,
    title: "Tracy X",
    image: "/Cutouts/Tracy X.png",
    link: "/portfolio/tracyx",
  },
  {
    id: 19,
    title: "Video Vixen",
    image: "/Cutouts/Video Vixen.png",
    link: "/portfolio/videovixen",
  },
  {
    id: 20,
    title: "VIPS Fall24 Ambassador Shoot",
    image: "/Cutouts/VIPS Fall24 Ambassador Shoot.png",
    link: "/portfolio/vipsfall2024",
  },
  {
    id: 21,
    title: "VIPS Fall24 Ambassador Shoot",
    image: "/Cutouts/VIPS Fall24 Ambassador Shoot.png",
    link: "/portfolio/vipsfall2024",
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
        <div className="text-center mb-8 h-32 flex flex-col justify-center">
          <div className="relative overflow-hidden">
            <div className="transition-all duration-700 ease-out">
              <div className="text-xl md:text-2xl font-bold mb-2 tracking-wider">
                {textData.current.title}
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative h-[500px] overflow-visible">
          <div className="flex items-center justify-center h-full w-full">
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
