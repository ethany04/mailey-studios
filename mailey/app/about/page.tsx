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
  Book,
  MapPin,
  Camera,
} from "lucide-react";

const portfolioImages = [
  {
    src: "/about/senior1.jpg",
    alt: "Senior shoot 1",
    hasText: true,
    text: "Senior Shoots",
  },
  {
    src: "/about/senior2.jpg",
    alt: "senior shoot 2",
    hasText: false,
  },
  {
    src: "/about/editorial1.jpg",
    alt: "editorial 1",
    hasText: true,
    text: "Editorials",
  },
  {
    src: "/about/editorial2.jpg",
    alt: "editorial 2",
    hasText: false,
  },
  {
    src: "/about/lifestyle1.jpg",
    alt: "lifestyle 1",
    hasText: true,
    text: "Lifestyle",
  },
  {
    src: "/about/lifestyle2.jpg",
    alt: "lifestyle 2",
    hasText: false,
  },
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
    <main className="min-h-screen bg-[#BAC3FF]">
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

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-8 bg-[#CAD1FF]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-20 h-20 bg-[#DDA5AF] rounded-full flex items-center justify-center mr-4">
                  <Book size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#3C3883]">Our Story</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I want to capture all of your memories–not only to celebrate
                your achievements, and special moments, but to remind you to
                really savor and live in the moment. We want to celebrate you,
                your achievements, milestones, and memories—big or small, and we
                hope that our photography speaks to you like it has in our
                lives!
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/about/cstat.jpg"
                  alt="CSTAT"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#DDA5AF]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* My Journey Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-20 h-20 bg-[#F88331] rounded-full flex items-center justify-center mr-4">
                  <MapPin size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#3C3883]">
                  My Journey
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I got into photography in seventh grade, but I started my
                business with one of my best friends, Ally Duan in April of
                2024. We began our photography journey as "A&M Photography" in
                2019 as a way to pursue two of our passions: creativity and
                service. Long before we considered starting a business, we had a
                desire to create. Through photography, we found excitement in
                exploring different locations and hoping it would bring our
                clients the same joy it brought us.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/about/camera.jpg"
                  alt="Camera"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#F88331]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Lens Section */}
      <section className="py-16 px-4 md:px-8 bg-[#CAD1FF]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-20 h-20 bg-[#828BC5] rounded-full flex items-center justify-center mr-4">
                  <Camera size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#3C3883]">
                  Beyond the Lens
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I am a full time student at the University of Michigan, and in
                my free time I enjoy being a part of the boxing club, art, and
                doing shoots with magazines on campus. Through these magazines,
                I have been able to shoot more editorial images that are
                personal to me! I am so passionate about photography and
                pursuing it on many fronts.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/about/boxing.jpg"
                  alt="Boxing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#828BC5]/20 to-transparent"></div>
              </div>
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
              <Link href="/gallery" className="block">
                <div className="relative h-96 md:h-[500px] cursor-pointer group">
                  <Image
                    src={
                      portfolioImages[currentImageIndex].src ||
                      "/placeholder.svg"
                    }
                    alt={portfolioImages[currentImageIndex].alt}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Text Overlay for alternating images */}
                  {portfolioImages[currentImageIndex].hasText && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 backdrop-blur-sm px-8 py-4 rounded-lg">
                        <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                          {portfolioImages[currentImageIndex].text}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
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
    </main>
  );
}
