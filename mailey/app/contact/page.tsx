"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import PhotoCarousel from "../components/PhotoCarousel";

export default function ContactPage() {
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
            src="/about/senior2.jpg"
            alt="Contact hero image"
            fill
            priority
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider">
            CONTACT
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
          <ContactForm />
        </section>

        <section className="py-16 px-4 md:px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-black mb-6">
              Ready to Create Something Beautiful?
            </h3>
            <span className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto block">
              Let's work together to capture your special moments. Click the
              button below to check our availability and book your session.
            </span>
            <Link
              href="https://booking.maileystudios.com"
              target="_blank"
              className="inline-flex items-center bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300 text-xl font-bold"
            >
              Check Availability
            </Link>
          </div>
        </section>
        <PhotoCarousel />
      </div>
    </main>
  );
}
