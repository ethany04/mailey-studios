"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Calendar,
  CreditCard,
  Shirt,
  Camera,
  ChevronDown,
} from "lucide-react";

export default function BookingPage() {
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

      {/* Content Section */}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-6">
              Book Your Session
            </h2>
            <span className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto block">
              Ready to capture your special moments? Follow our easy 5-step
              process to book your photography session with Mailey Studios.
            </span>

            {/* Booking Journey Map */}
            <div className="relative max-w-4xl mx-auto mb-20">
              {/* Vertical zigzag line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-black transform md:translate-x-[-50%] hidden md:block">
                {/* Zigzag elements */}
                <div className="absolute top-[10%] left-[-15px] w-[30px] h-[30px] border-b-2 border-r-2 border-black transform rotate-45"></div>
                <div className="absolute top-[30%] left-[-15px] w-[30px] h-[30px] border-t-2 border-l-2 border-black transform rotate-45"></div>
                <div className="absolute top-[50%] left-[-15px] w-[30px] h-[30px] border-b-2 border-r-2 border-black transform rotate-45"></div>
                <div className="absolute top-[70%] left-[-15px] w-[30px] h-[30px] border-t-2 border-l-2 border-black transform rotate-45"></div>
              </div>

              {/* Mobile zigzag line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-black md:hidden">
                {/* Mobile zigzag elements */}
                <div className="absolute top-[10%] left-[-8px] w-[16px] h-[16px] border-b-2 border-r-2 border-black transform rotate-45"></div>
                <div className="absolute top-[30%] left-[-8px] w-[16px] h-[16px] border-t-2 border-l-2 border-black transform rotate-45"></div>
                <div className="absolute top-[50%] left-[-8px] w-[16px] h-[16px] border-b-2 border-r-2 border-black transform rotate-45"></div>
                <div className="absolute top-[70%] left-[-8px] w-[16px] h-[16px] border-t-2 border-l-2 border-black transform rotate-45"></div>
              </div>

              {/* Step 1 */}
              <div className="flex items-start mb-32 relative">
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    1
                  </div>
                </div>
                <div className="ml-20 md:ml-0 md:w-5/12 md:text-right md:pr-12">
                  <div className="md:hidden w-full h-0.5 bg-black absolute left-12 top-6"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    Choose your pricing package!
                  </h3>
                  <span className="text-lg text-gray-700 mb-6 block">
                    Browse through our various packages and select the one that
                    best fits your needs and budget. Each package is designed to
                    provide you with the best photography experience.
                  </span>
                  <div className="md:text-right">
                    <Link
                      href="#pricing"
                      className="inline-flex items-center bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
                    >
                      <Check className="mr-2 h-5 w-5" /> View Pricing Packages
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block md:w-5/12 md:pl-12"></div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start mb-32 relative">
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    2
                  </div>
                </div>
                <div className="ml-20 md:ml-0 md:w-5/12 md:pr-12 md:hidden">
                  <div className="w-full h-0.5 bg-black absolute left-12 top-6"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    Book Online
                  </h3>
                  <span className="text-lg text-gray-700 mb-6 block">
                    Secure a date on our booking site. Check our calendar for
                    availability and select a date and time that works best for
                    you. We'll make sure to accommodate your schedule as best as
                    possible.
                  </span>
                  <Link
                    href="https://booking.maileystudios.com"
                    target="_blank"
                    className="inline-flex items-center bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" /> Check Availability
                  </Link>
                </div>
                <div className="hidden md:block md:w-5/12"></div>
                <div className="hidden md:block md:w-5/12 md:pl-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    Book Online
                  </h3>
                  <span className="text-lg text-gray-700 mb-6 block">
                    Secure a date on our booking site. Check our calendar for
                    availability and select a date and time that works best for
                    you. We'll make sure to accommodate your schedule as best as
                    possible.
                  </span>
                  <Link
                    href="https://booking.maileystudios.com"
                    target="_blank"
                    className="inline-flex items-center bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" /> Check Availability
                  </Link>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start mb-32 relative">
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    3
                  </div>
                </div>
                <div className="ml-20 md:ml-0 md:w-5/12 md:text-right md:pr-12">
                  <div className="md:hidden w-full h-0.5 bg-black absolute left-12 top-6"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    Pay Retainer
                  </h3>
                  <span className="text-lg text-gray-700 mb-6 block">
                    To secure your day, you will pay a 20% retainer. This
                    ensures that your date is reserved exclusively for you. The
                    retainer is non-refundable but is applied to your total
                    package price.
                  </span>
                  <div className="md:text-right">
                    <Link
                      href="https://booking.maileystudios.com/payment"
                      target="_blank"
                      className="inline-flex items-center bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
                    >
                      <CreditCard className="mr-2 h-5 w-5" /> Secure Your Date
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block md:w-5/12 md:pl-12"></div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start mb-32 relative">
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    4
                  </div>
                </div>
                <div className="ml-20 md:ml-0 md:w-5/12 md:pr-12 md:hidden">
                  <div className="w-full h-0.5 bg-black absolute left-12 top-6"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    Decide on an Outfit and Location(s)
                  </h3>
                  <span className="text-lg text-gray-700 mb-6 block">
                    After you have booked and paid your retainer, you will fill
                    out our After-booking form. In it, we have guides for you to
                    choose your perfect outfit and location! We'll help you make
                    the best choices for your photoshoot.
                  </span>
                  <Link
                    href="https://booking.maileystudios.com/form"
                    target="_blank"
                    className="inline-flex items-center bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Shirt className="mr-2 h-5 w-5" /> After-Booking Form
                  </Link>
                </div>
                <div className="hidden md:block md:w-5/12"></div>
                <div className="hidden md:block md:w-5/12 md:pl-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    Decide on an Outfit and Location(s)
                  </h3>
                  <span className="text-lg text-gray-700 mb-6 block">
                    After you have booked and paid your retainer, you will fill
                    out our After-booking form. In it, we have guides for you to
                    choose your perfect outfit and location! We'll help you make
                    the best choices for your photoshoot.
                  </span>
                  <Link
                    href="https://booking.maileystudios.com/form"
                    target="_blank"
                    className="inline-flex items-center bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Shirt className="mr-2 h-5 w-5" /> After-Booking Form
                  </Link>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start relative">
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    5
                  </div>
                </div>
                <div className="ml-20 md:ml-0 md:w-5/12 md:text-right md:pr-12">
                  <div className="md:hidden w-full h-0.5 bg-black absolute left-12 top-6"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    Go to your photoshoot!
                  </h3>
                  <span className="text-lg text-gray-700 mb-6 block">
                    Celebrate your special day! Arrive at the location, relax,
                    and enjoy the experience. We'll guide you through poses and
                    make sure you feel comfortable throughout the entire
                    session.
                  </span>
                  <div className="md:text-right">
                    <Link
                      href="https://booking.maileystudios.com"
                      target="_blank"
                      className="inline-flex items-center bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
                    >
                      <Camera className="mr-2 h-5 w-5" /> Book Your Session Now
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block md:w-5/12 md:pl-12"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 md:px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-black mb-8">
              Our Pricing
            </h2>
            <span className="text-lg text-center text-gray-700 mb-16 max-w-3xl mx-auto block">
              Transparent pricing for all your photography needs. Choose the
              package that best suits your vision and budget.
            </span>

            {/* Pricing content would go here - keeping it simple for now */}
            <div className="text-center">
              <span className="text-lg text-gray-700 block mb-8">
                Detailed pricing information coming soon. Contact us for current
                rates and packages.
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300 text-lg font-bold"
              >
                Contact for Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
