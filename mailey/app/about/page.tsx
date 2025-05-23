"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Mail,
} from "lucide-react";

const portfolioImages = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Portfolio image 1" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Portfolio image 2" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Portfolio image 3" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Portfolio image 4" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Portfolio image 5" },
];

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Headshot */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative w-80 h-80 mx-auto">
                <Image
                  src="/maggie_headshot.jpeg"
                  alt="Mailey Studios photographer headshot"
                  fill
                  className="object-cover rounded-full shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#DDA5AF]/20 to-[#3C3883]/20"></div>
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#3C3883] mb-6">
                Hi! I'm <span className="text-[#3c3883]">Maggie!</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm your photographer for Mailey (may-lee) Studios!
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Read more about us below!
              </p>
              <div className="flex justify-center lg:justify-start space-x-6">
                <Link
                  href="https://www.instagram.com/mailey.studios/"
                  className="text-[#828BC5] hover:text-[#F0532B] transition-colors duration-300"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-[#828BC5] hover:text-[#F0532B] transition-colors duration-300"
                >
                  <Twitter size={24} />
                </Link>
                <Link
                  href="mailto:hello@maileystudios.com"
                  className="text-[#828BC5] hover:text-[#F0532B] transition-colors duration-300"
                >
                  <Mail size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Description Sections */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* History/About Mailey Studios */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DDA5AF] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-xl">01</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3C3883] mb-4">
                Our Story
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We began our photography journey as "A&M Photography" in 2019 as
                a way to pursue two of our passions: creativity and service.
                Long before we considered starting a business, we had a desire
                to create. Through photography, we found excitement in exploring
                different locations and the perfect lighting to suit our vision.
                But our pastime developed into something more than that. We saw
                an opportunity to share our passion with the College Station
                community, hoping photography would bring our clients the same
                joy it brought us. When the pandemic began, the sense of
                community we loved to capture through our photography was less
                apparent. However, this only strengthened our mission. We used
                our creative outlet to provide a feeling of togetherness and
                encourage self expression in a time of isolation. Five years
                after we began "A&M Photography," that mission stays true with
                Mailey Studios. We want to celebrate you, your achievements,
                milestones, and memories—big or small, and we hope that our
                photography speaks to you like it has in our lives!
              </p>
            </div>

            {/* What got me into photography */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F88331] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-xl">02</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3C3883] mb-4">
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I got into photography in seventh grade, but I started my
                business with one of my best friends, Ally Duan in April of
                2024.
              </p>
            </div>

            {/* What I do outside of business */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#828BC5] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-xl">03</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3C3883] mb-4">
                Beyond the Lens
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I am a full time student at the University of Michigan, and in
                my free time I enjoy being a part of the boxing club, art, and
                doing shoots with magazines on campus. Through these magazines,
                I have been able to shoot more editorial images that are
                personal to me! I am so passionate about photography and
                pursuing it on many fronts. I want to capture all of your
                memories–not only to celebrate your achievements, and special
                moments, but to remind you to really savor and live in the
                moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3C3883] mb-12">
            Recent Work
          </h2>

          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={
                    portfolioImages[currentImageIndex].src || "/placeholder.svg"
                  }
                  alt={portfolioImages[currentImageIndex].alt}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#3C3883] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#3C3883] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-[#F0532B] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 bg-[#3C3883]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Let's work together to capture your special moments and create
            memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-[#F0532B] hover:bg-[#F88331] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Book a Session
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#3C3883] font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
