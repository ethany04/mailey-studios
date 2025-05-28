"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

// Define image sets for each category
const seniorImages = [
  { src: "/about/senior1.jpg", alt: "Senior shoot 1" },
  { src: "/about/senior2.jpg", alt: "Senior shoot 2" },
];

const editorialImages = [
  { src: "/about/editorial1.jpg", alt: "Editorial 1" },
  { src: "/about/editorial2.jpg", alt: "Editorial 2" },
];

const lifestyleImages = [
  { src: "/about/lifestyle1.jpg", alt: "Lifestyle 1" },
  { src: "/about/lifestyle2.jpg", alt: "Lifestyle 2" },
];

export default function AboutPage() {
  // State for tracking current image index for each category
  const [seniorIndex, setSeniorIndex] = useState(0);
  const [editorialIndex, setEditorialIndex] = useState(0);
  const [lifestyleIndex, setLifestyleIndex] = useState(0);

  // State for fade transitions
  const [seniorFading, setSeniorFading] = useState(false);
  const [editorialFading, setEditorialFading] = useState(false);
  const [lifestyleFading, setLifestyleFading] = useState(false);

  // Auto-rotate images every 5 seconds with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setSeniorFading(true);
      setEditorialFading(true);
      setLifestyleFading(true);

      // After fade out completes, change images and fade in
      setTimeout(() => {
        setSeniorIndex((prev) => (prev + 1) % seniorImages.length);
        setEditorialIndex((prev) => (prev + 1) % editorialImages.length);
        setLifestyleIndex((prev) => (prev + 1) % lifestyleImages.length);

        // Start fade in
        setSeniorFading(false);
        setEditorialFading(false);
        setLifestyleFading(false);
      }, 500); // Half second for fade out
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
                Hi! I'm Maggie!
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

      {/* Three-Column Portfolio Section */}
      <section className="py-20 px-4 md:px-8 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3C3883] mb-12">
            Recent Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Seniors Column */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-[#3C3883] mb-4 uppercase tracking-wider">
                Seniors
              </h3>
              <Link href="/gallery" className="block w-full">
                <div className="relative aspect-[3/4] w-full cursor-pointer group rounded-lg overflow-hidden border-4 border-[#3C3883]">
                  <Image
                    src={seniorImages[seniorIndex].src || "/placeholder.svg"}
                    alt={seniorImages[seniorIndex].alt}
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                      seniorFading ? "opacity-0" : "opacity-100"
                    }`}
                    style={{
                      transition:
                        "opacity 500ms ease-in-out, transform 500ms ease-in-out",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center"></div>
                </div>
              </Link>
            </div>

            {/* Editorials Column */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-[#3C3883] mb-4 uppercase tracking-wider">
                Editorials
              </h3>
              <Link href="/gallery" className="block w-full">
                <div className="relative aspect-[3/4] w-full cursor-pointer group rounded-lg overflow-hidden border-4 border-[#3C3883]">
                  <Image
                    src={
                      editorialImages[editorialIndex].src || "/placeholder.svg"
                    }
                    alt={editorialImages[editorialIndex].alt}
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                      editorialFading ? "opacity-0" : "opacity-100"
                    }`}
                    style={{
                      transition:
                        "opacity 500ms ease-in-out, transform 500ms ease-in-out",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center"></div>
                </div>
              </Link>
            </div>

            {/* Lifestyle Column */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-[#3C3883] mb-4 uppercase tracking-wider">
                Lifestyle
              </h3>
              <Link href="/gallery" className="block w-full">
                <div className="relative aspect-[3/4] w-full cursor-pointer group rounded-lg overflow-hidden border-4 border-[#3C3883]">
                  <Image
                    src={
                      lifestyleImages[lifestyleIndex].src || "/placeholder.svg"
                    }
                    alt={lifestyleImages[lifestyleIndex].alt}
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                      lifestyleFading ? "opacity-0" : "opacity-100"
                    }`}
                    style={{
                      transition:
                        "opacity 500ms ease-in-out, transform 500ms ease-in-out",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
