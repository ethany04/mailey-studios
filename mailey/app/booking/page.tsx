"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function BookingPage() {
  const [showContent, setShowContent] = useState(false);
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    setShowContent(true);

    const handleScroll = () => {
      const timelineSection = document.getElementById("timeline-section");
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        const sectionHeight = timelineSection.offsetHeight;
        const windowHeight = window.innerHeight;

        // Calculate how much of the timeline section has been scrolled through
        const scrolled = Math.max(0, windowHeight - rect.top);
        const maxScroll = sectionHeight + windowHeight;
        const progress = Math.min(100, (scrolled / maxScroll) * 100);

        setTimelineProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Fullscreen Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/headers/booking_bg.jpg"
            alt="Booking and pricing hero image"
            fill
            priority
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider">
            BOOKING & PRICING
          </h1>
          <ChevronDown className="h-8 w-8 text-white mx-auto animate-bounce" />
        </div>
      </section>

      {/* Timeline Section */}
      <div
        className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}
      >
        <section id="timeline-section" className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
              Your Booking Journey
            </h2>

            {/* Timeline Container */}
            <div className="relative">
              {/* Static Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {/* Animated Progress Line */}
              <div
                className="absolute left-8 top-0 w-0.5 bg-black transition-all duration-300 ease-out"
                style={{ height: `${timelineProgress}%` }}
              ></div>

              {/* Step 1 */}
              <div className="relative flex items-start mb-16">
                <div className="absolute left-6 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-10">
                  1
                </div>
                <div className="ml-20">
                  <div className="bg-gray-50 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Choose your Session Type!
                    </h3>
                    <span className="text-gray-700 text-lg">
                      Select the type of photography session that best fits your
                      needs and vision.
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start mb-16">
                <div className="absolute left-6 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-10">
                  2
                </div>
                <div className="ml-20">
                  <div className="bg-gray-50 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Choose Your Path
                    </h3>
                    <div className="space-y-4">
                      <span className="text-gray-700 text-lg block">
                        <strong>If you're a grad:</strong> Choose{" "}
                        <Link
                          href="#pricing"
                          className="underline hover:text-black transition-colors"
                        >
                          package
                        </Link>
                      </span>
                      <span className="text-gray-700 text-lg block">
                        <strong>All other Session types:</strong> Inquire for
                        custom pricing
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start mb-16">
                <div className="absolute left-6 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-10">
                  3
                </div>
                <div className="ml-20">
                  <div className="bg-gray-50 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Book Online
                    </h3>
                    <span className="text-gray-700 text-lg">
                      Secure a date on my booking site. Choose your preferred
                      date and time that works best for your schedule.
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start mb-16">
                <div className="absolute left-6 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-10">
                  4
                </div>
                <div className="ml-20">
                  <div className="bg-gray-50 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Pay Retainer
                    </h3>
                    <span className="text-gray-700 text-lg">
                      To secure your day, you will pay a 20% retainer on the day
                      you book or within 24 hours of receiving confirmation.
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex items-start mb-20">
                <div className="absolute left-6 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-10">
                  5
                </div>
                <div className="ml-20">
                  <div className="bg-gray-50 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Decide on Outfit(s) and Location(s)
                    </h3>
                    <span className="text-gray-700 text-lg">
                      After you have booked and paid your retainer, you will
                      fill out my After-booking form. In it, I have curated
                      guides for you to choose your perfect outfits and
                      locations!
                    </span>
                  </div>
                </div>
              </div>

              {/* Final Step - Larger Section */}
              <div className="relative">
                <div className="absolute left-6 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="ml-20">
                  <div className="bg-black text-white p-12 shadow-lg">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                      Go to shoot day and celebrate!
                    </h3>
                    <span className="text-xl text-gray-200">
                      Arrive at your chosen location, relax, and enjoy the
                      experience. We'll capture beautiful moments that you'll
                      treasure forever.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
              Pricing
            </h2>

            {/* High School Seniors */}
            <div className="mb-20">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                    <Image
                      src="/booking/senior_shoots.jpg"
                      alt="High School Senior Photography"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-8 tracking-wider">
                    HIGH SCHOOL SENIORS
                  </h3>

                  <div className="space-y-8">
                    {/* Standard Package */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-600 mb-4">
                        STANDARD:
                      </h4>
                      <div className="space-y-2 text-lg text-gray-700">
                        <span className="block">1 location / 1 outfit</span>
                        <span className="block">30 min</span>
                        <span className="block">20+ edited photos</span>
                        <span className="block font-bold text-black text-xl">
                          $350
                        </span>
                      </div>
                    </div>

                    {/* Deluxe Package */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-600 mb-4">
                        DELUXE:
                      </h4>
                      <div className="space-y-2 text-lg text-gray-700">
                        <span className="block">2 locations / 2 outfits</span>
                        <span className="block">1 hour</span>
                        <span className="block">50+ edited photos</span>
                        <span className="block font-bold text-black text-xl">
                          $600
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Photography */}
            <div className="mb-20">
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                    <Image
                      src="/booking/editorial_shoots.jpg"
                      alt="Editorial Photography"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-8 tracking-wider">
                    EDITORIAL
                  </h3>

                  <div className="space-y-8">
                    {/* Standard Package */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-600 mb-4">
                        STANDARD:
                      </h4>
                      <div className="space-y-2 text-lg text-gray-700">
                        <span className="block">Studio setting</span>
                        <span className="block">2 hours</span>
                        <span className="block">20+ edited photos</span>
                        <span className="block font-bold text-black text-xl">
                          $450
                        </span>
                      </div>
                    </div>

                    {/* Deluxe Package */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-600 mb-4">
                        DELUXE:
                      </h4>
                      <div className="space-y-2 text-lg text-gray-700">
                        <span className="block">Multiple locations</span>
                        <span className="block">4 hours</span>
                        <span className="block">40+ edited photos</span>
                        <span className="block font-bold text-black text-xl">
                          $750
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lifestyle Photography */}
            <div className="mb-20">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                    <Image
                      src="/booking/lifestyle_shoots.jpg"
                      alt="Lifestyle Photography"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-8 tracking-wider">
                    LIFESTYLE
                  </h3>

                  <div className="space-y-8">
                    {/* Standard Package */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-600 mb-4">
                        STANDARD:
                      </h4>
                      <div className="space-y-2 text-lg text-gray-700">
                        <span className="block">1 location / 2 outfits</span>
                        <span className="block">1.5 hours</span>
                        <span className="block">30+ edited photos</span>
                        <span className="block font-bold text-black text-xl">
                          $400
                        </span>
                      </div>
                    </div>

                    {/* Deluxe Package */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-600 mb-4">
                        DELUXE:
                      </h4>
                      <div className="space-y-2 text-lg text-gray-700">
                        <span className="block">2 locations / 3 outfits</span>
                        <span className="block">2.5 hours</span>
                        <span className="block">60+ edited photos</span>
                        <span className="block font-bold text-black text-xl">
                          $650
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Link
                href="https://booking.maileystudios.com"
                target="_blank"
                className="inline-flex items-center bg-black text-white px-12 py-6 hover:bg-gray-800 transition-colors duration-300 text-xl font-bold"
              >
                Book Your Session Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
