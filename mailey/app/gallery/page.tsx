"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Fullscreen Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/headers/gallery_bg.jpg"
            alt="Gallery hero image"
            fill
            priority
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Gallery
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-6">
              Our Gallery
            </h2>
            <span className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto block">
              Browse through our portfolio showcasing our best work across
              different photography styles.
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Seniors Category */}
              <Link href="/gallery/seniors" className="block group">
                <div className="relative aspect-[3/4] w-full overflow-hidden shadow-lg">
                  <Image
                    src="/about/senior1.jpg"
                    alt="Senior photography"
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Seniors
                    </h3>
                    <span className="text-white/90">
                      Celebrating achievements and milestones with professional
                      senior portraits.
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white/80 text-black font-bold py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Gallery
                    </span>
                  </div>
                </div>
              </Link>

              {/* Editorials Category */}
              <Link href="/gallery/editorials" className="block group">
                <div className="relative aspect-[3/4] w-full overflow-hidden shadow-lg">
                  <Image
                    src="/about/editorial1.jpg"
                    alt="Editorial photography"
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Editorials
                    </h3>
                    <span className="text-white/90">
                      Creative and artistic editorial photography for magazines
                      and publications.
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white/80 text-black font-bold py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Gallery
                    </span>
                  </div>
                </div>
              </Link>

              {/* Lifestyle Category */}
              <Link href="/gallery/lifestyle" className="block group">
                <div className="relative aspect-[3/4] w-full overflow-hidden shadow-lg">
                  <Image
                    src="/about/lifestyle1.jpg"
                    alt="Lifestyle photography"
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Lifestyle
                    </h3>
                    <span className="text-white/90">
                      Authentic moments captured in natural settings that tell
                      your unique story.
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white/80 text-black font-bold py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Gallery
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
