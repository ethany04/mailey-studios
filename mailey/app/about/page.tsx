"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Fixed Background Hero Section */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/headers/g1.jpg"
          alt="About page hero image"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Section */}
      <div
        className={`relative z-10 transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}
      >
        {/* Introduction Section */}
        <section className="py-20 px-4 md:px-8 bg-white h-screen">
          <div className="max-w-6xl mx-auto pt-20">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative w-96 h-[500px] mx-auto">
                  <Image
                    src="/about/headshot1.jpg"
                    alt="Maggie - Mailey Studios photographer"
                    fill
                    className="object-cover shadow-2xl"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
                  Howdy!
                  <br />
                  I'm Maggie!
                </h2>
                <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
                  <span className="block">
                    I am a Texas and Ann Arbor, Michigan–based photographer. My
                    style blends the authenticity of candid photos with the
                    intentionality in posed photos.
                  </span>
                  <span className="block">
                    I want to capture the real you—genuine, and full of life—to
                    celebrate your special moments.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section 
      <section className="relative h-screen w-full flex flex-col items-center justify-center z-10">
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-wider">
            ABOUT
          </h1>
        </div>
      </section>
      */}

        {/* My Mission Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                My Mission
              </h2>
            </div>
            <div className="text-lg md:text-xl text-white leading-relaxed space-y-6 max-w-3xl mx-auto">
              <span className="block">
                Memories can't be recreated, but they can be preserved. I'm here
                to capture life as it happens.
              </span>
              <span className="block">
                I believe in living in the moment, and I bring that same
                intentionality to my photography. I let you stay present while I
                capture your moments, because they matter!
              </span>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative w-96 h-[400px] mx-auto">
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Photography journey"
                    fill
                    className="object-cover grayscale shadow-lg"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-black">
                    How did I get into photography?
                  </h2>
                </div>
                <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                  <span className="block">
                    Like other makers, I grew up around creativity. Many
                    childhood photos feature me with a drawing or something with
                    a likeness to a painting. I've known traditional art since I
                    was young.
                  </span>
                  <span className="block">
                    Photography slowly worked its way into my life, so I cannot
                    pinpoint the exact time I started, but my first professional
                    camera was gifted to me on my 13th birthday.
                  </span>
                  <span className="block">
                    My parents hesitated to buy me a camera because they worried
                    it was just another one of my artistic phases… safe to say
                    sewing, needle felting, and ceramics did not secure a
                    permanent spot in my life. However, this time, their
                    investment in my interest was well worth it.
                  </span>
                  <span className="block">
                    Since I grew up documenting my life on camera, it didn't
                    feel like a new phase. I was what I'd always done, just with
                    different lenses.
                  </span>
                  <span className="block font-medium">
                    Now, I pursue this business with new cameras, new knowledge,
                    but the same passion.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative w-96 h-[500px] mx-auto">
                  <Image
                    src="/about/headshot2.jpg"
                    alt="Fun facts about Maggie"
                    fill
                    className="object-cover grayscale shadow-lg"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center lg:text-left">
                  QUICK FACTS
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <span className="text-lg text-gray-700">
                      I'm a business major at The University of Michigan
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div>
                      <span className="text-lg text-gray-700 block">
                        Some music artists I like:
                      </span>
                      <span className="text-lg text-gray-600 block mt-1">
                        Matt Maltese, The Smiths, The Jayhawks
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-lg text-gray-700">
                      Huge animal person. Mom to 3 cats and 1 dog
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-lg text-gray-700">
                      I enjoy playing guitar
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-lg text-gray-700">
                      Retired Swimmer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to work together?
            </h3>
            <span className="text-lg md:text-xl text-gray-700 mb-8 block">
              Let's create something beautiful and capture your special moments.
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors duration-300 text-lg"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
