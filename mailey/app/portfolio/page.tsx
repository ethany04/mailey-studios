"use client";

import { useState, useEffect, useRef } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import EmblaCarousel, { EmblaHandle } from "../components/EmblaCarousel";

type Meta = {
  date: string;
  location: string;
  model: string;
  shootType: string;
};

// Sample portfolio data
const portfolioData = [
  {
    id: 1,
    title: "70s Fall",
    image: "/Cutouts/70s Fall.png",
    link: "70sfall",
    meta: {
      date: "23 October 2024",
      location: "Ann Arbor, MI",
      model: "Shanta Pai",
      shootType: "Editorial",
    },
  },
  {
    id: 2,
    title: "ADDI D",
    image: "/Cutouts/ADDI D.png",
    link: "addid",
    meta: {
      date: "",
      location: "College Station, TX",
      model: "Addi Dowlearn",
      shootType: "Editorial",
    },
  },
  {
    id: 3,
    title: "ARI G",
    image: "/Cutouts/ARI G.png",
    link: "arig",
    meta: {
      date: "4 August 2025",
      location: "College Station, TX",
      model: "Ari Granda",
      shootType: "Lifestyle",
    },
  },
  {
    id: 4,
    title: "Collage Branding Shoot",
    image: "/Cutouts/Collage Branding Shoot.png",
    link: "collagebrandingshoot",
    meta: {
      date: "25 February 2025",
      location: "Ann Arbor, MI",
      model: "Anna Kaye",
      shootType: "Branding",
    },
  },
  {
    id: 5,
    title: "Elena A",
    image: "/Cutouts/Elena A.png",
    link: "elenaa",
    meta: {
      date: "3 May 2025",
      location: "Old Baylor Park, TX",
      model: "Elena Alaniz",
      shootType: "Senior",
    },
  },
  {
    id: 6,
    title: "Jayden B",
    image: "/Cutouts/Jayden B.png",
    link: "jaydenb",
    meta: {
      date: "22 December 2025",
      location: "College Station, TX",
      model: "Jayden Buenemann",
      shootType: "Senior Shoot",
    },
  },
  {
    id: 7,
    title: "Leah C",
    image: "/Cutouts/Leah.png",
    link: "leah",
    meta: {
      date: "",
      location: "Bryan, TX",
      model: "Leah Cairnes",
      shootType: "Editorial",
    },
  },
  {
    id: 8,
    title: "Lyle L",
    image: "/Cutouts/Lyle L.png",
    link: "lylel",
    meta: {
      date: "20 December 2025",
      location: "Bryan, TX",
      model: "Lyle Lewis",
      shootType: "Senior",
    },
  },
  {
    id: 9,
    title: "Mae Magazine",
    image: "/Cutouts/Mae Magazine.png",
    link: "maemagazine",
    meta: {
      date: "7 December 2024",
      location: "Ann Arbor, MI",
      model: "Ally W.",
      shootType: "Editorial",
    },
  },
  {
    id: 10,
    title: "A/Squared Romantic Ruins",
    image: "/Cutouts/Romantic Ruins.png",
    link: "romanticruins",
    meta: {
      date: "22 February 2025",
      location: "Ann Arbor, MI",
      model: "Quinne Dowe",
      shootType: "Editorial",
    },
  },
  {
    id: 11,
    title: "Roo and the Preacher Dad",
    image: "/Cutouts/Roo and the Preacher Dad.png",
    link: "rooandthepreacherdad",
    meta: {
      date: "3 January 2025",
      location: "Bryan, TX",
      model: "Dan De Leon",
      shootType: "Branding",
    },
  },
  {
    id: 12,
    title: "Sarah Moser",
    image: "/Cutouts/Sarah Moser.png",
    link: "sarahmoser",
    meta: {
      date: "15 August, 2024",
      location: "Old Baylor Park, TX",
      model: "Sarah Moser",
      shootType: "Senior",
    },
  },
  {
    id: 13,
    title: "Shei Magazine February '25 Issue",
    image: "/Cutouts/Shei Feb.png",
    link: "sheifeb",
    meta: {
      date: "7 December 2024",
      location: "Ann Arbor, MI",
      model: "Vivian Leech",
      shootType: "Editorial",
    },
  },
  {
    id: 14,
    title: "Smriti",
    image: "/Cutouts/Smriti.png",
    link: "smriti",
    meta: {
      date: "7 May 2025",
      location: "College Station, TX",
      model: "Smriti Kolar",
      shootType: "Senior",
    },
  },
  {
    id: 15,
    title: "Thirfted Unviersity x Bivouac Collaboration",
    image: "/Cutouts/Thirfted Unviersity x Bivouac Collaboration.png",
    link: "thrifteduniversityxbivouac",
    meta: {
      date: "1 February 2025",
      location: "Ann Arbor, MI",
      model: "Sydney Pedrosi",
      shootType: "Branding",
    },
  },
  {
    id: 16,
    title: "Thrifted Univeristy Fall 2024 Ambassadors",
    image: "/Cutouts/Thrifted Univeristy Fall 2024 Ambassadors.png",
    link: "thrifteduniversityfall2024",
    meta: {
      date: "25 October 2025",
      location: "Burns Park",
      model: "Arthurline Quaqua",
      shootType: "Branding",
    },
  },
  {
    id: 17,
    title: "Thrifted Univeristy Winter Ambassadors 2025",
    image: "/Cutouts/Thrifted Univeristy Winter Ambassadors 2025.png",
    link: "thrifteduniversitywinter2025",
    meta: {
      date: "4 February 2025",
      location: "Ann Arbor",
      model: "Alonzo Wilson",
      shootType: "Branding",
    },
  },
  {
    id: 18,
    title: "Tracy X",
    image: "/Cutouts/Tracy X.png",
    link: "tracyx",
    meta: {
      date: "31 August 2024",
      location: "Ann Arbor, MI",
      model: "Tracy Xu",
      shootType: "Personal Project",
    },
  },
  {
    id: 19,
    title: "A/Squared Video Vixen",
    image: "/Cutouts/Video Vixen.png",
    link: "videovixen",
    meta: {
      date: "29 March 2025",
      location: "Ann Arbor, MI",
      model: "Stella",
      shootType: "Editorial",
    },
  },
  {
    id: 20,
    title: "VIPS Fall '24 Ambassador Shoot",
    image: "/Cutouts/VIPS Fall24 Ambassador Shoot.png",
    link: "vipsfall2024",
    meta: {
      date: "8 November 2024",
      location: "Dawn Treader Library, Ann Arbor",
      model: "Olivia Rodriguez",
      shootType: "Branding",
    },
  },
  {
    id: 21,
    title: "VIPS Runway Photoshoot",
    image: "/Cutouts/VIPS Runway Photoshoot.png",
    link: "vipsrunway",
    meta: {
      date: "10 April 2025",
      location: "Ann Arbor, MI",
      model: "",
      shootType: "Branding",
    },
  },
];

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
