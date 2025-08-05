"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HelpCircle,
  MessageCircle,
  Quote,
  Star,
} from "lucide-react";
import PhotoCarousel from "./components/PhotoCarousel";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images array
  const backgroundImages = [
    "/headers/home_bg.jpg",
    "/headers/booking_bg.jpg",
    "/headers/gallery_bg.jpg",
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "S.J.",
      text: "Maggie is the BEST! Not only did I get the most wonderful photos, but she was so sweet and considerate! Her attention to detail and politeness throughout the entire shoot was truly incredible. Friends and family members raved about her work. An outstanding photographer and individual, I could not recommend her more!",
    },
    {
      name: "A.F.",
      text: "Maggie was an amazing photographer. I was immediately put at ease and the process was really fun and enjoyable. Maggie has a variety of ideas and is extremely creative. 10/10 recommend!",
    },
    {
      name: "K.D.",
      text: "I had such an amazing time! Maggie did a great job getting good lighting, finding the perfect spots, and editing the photos... …I highly recommend booking for your grad photos!!",
    },
    {
      name: "S.K.",
      text: "I had the best time shooting with Maggie! This was my first photoshoot ever and she made sure to make me feel super comfortable through it all.",
    },
    {
      name: "S.H.",
      text: "Maggie was amazing! She is skilled and confident but also super fun to work with. I also got to see her shoot for a friend, and that was super fun as well. Overall the experience was great and I would definitely book with her again.",
    },
  ];

  useEffect(() => {
    // Set up image rotation
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageInterval);
  }, [backgroundImages.length]);

  return (
    <main className="min-h-screen relative z-0">
      {/* Fixed Background Images with Rotation */}
      <div className="fixed inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Home background ${index + 1}`}
              fill
              priority={index === 0} // Only prioritize the first image
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center z-10">
        <h1 className="text-9xl md:text-7xl sm:text-xl text-white mb-6 tracking-wider">
          LIVE IN THE MOMENT
        </h1>

        <Link
          href="/booking"
          className="text-white border-2 border-white hover:bg-white hover:text-black font-bold py-3 px-8 transition-colors duration-300"
        >
          Book a Session
        </Link>
      </section>

      {/* Booking Process Section */}
      <section className="relative z-10 w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
              Ready to book?
            </h2>
            <span className="text-lg md:text-xl text-gray-700 block mb-8">
              My simple 5-step process makes booking your session easy and
              stress-free.
            </span>
            <Link
              href="/booking"
              className="inline-flex items-center bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors duration-300"
            >
              Start Booking Process <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="relative z-10 w-full bg-gray-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              What Clients Say
            </h2>
            <span className="text-lg md:text-xl text-gray-700 block">
              Don't just take my word for it - hear from amazing clients
            </span>
          </div>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <div className="flex scroll-animation">
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-96 mx-4">
                <div className="bg-white p-8 shadow-lg h-80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-gray-400 mr-3" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 line-clamp-4">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <PhotoCarousel />
        {/* Overlay with text and button */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center z-15">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Featured Work
          </h2>
          <Link
            href="/gallery"
            className="bg-white text-black px-8 py-4 font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            View Gallery
          </Link>
        </div>
      </section>

      {/* Meet the Photographer Section */}
      <section className="relative z-10 w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
                Hi, I'm Maggie
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-700">
                <span className="block">
                  I'm your photographer for Mailey Studios! I want to capture
                  all of your memories–not only to celebrate your achievements,
                  and special moments, but to remind you to really savor and
                  live in the moment.
                </span>
                <span className="block">
                  We want to celebrate you, your achievements, milestones, and
                  memories—big or small, and we hope that our photography speaks
                  to you like it has in our lives!
                </span>
                <span className="block">
                  Through photography, we found excitement in exploring
                  different locations and hoping it would bring our clients the
                  same joy it brought us.
                </span>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="relative w-80 h-96 mx-auto">
                <Image
                  src="/about/headshot1.jpg"
                  alt="Maggie - Mailey Studios photographer"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="relative z-10 w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/homepage/group1.jpg"
                  alt="Contact and inquiry"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <h2 className="text-4xl md:text-6xl font-bold text-black">
                  Let's Connect
                </h2>
              </div>
              <div className="space-y-6 text-lg md:text-xl text-gray-700 mb-8">
                <span className="block">
                  Hey! Looking to book or have questions? Whether you want to
                  find out more about my process or need to inquire for an
                  editorial or special occasion shoot, send me an email! I'd
                  love to get to know your vision!
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors duration-300"
              >
                Send Inquiry <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/homepage/faqs1.jpg"
                  alt="Frequently asked questions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <h2 className="text-4xl md:text-6xl font-bold text-black">
                  Have Questions?
                </h2>
              </div>
              <div className="space-y-6 text-lg md:text-xl text-gray-700 mb-8">
                <span className="block">
                  Refer to our frequently asked questions page for more
                  information about rescheduling, styling, turnaround time,
                  session durations, and more!
                </span>
                <span className="block">
                  Still need more information? Inquire with me!
                </span>
              </div>
              <Link
                href="/faqs"
                className="inline-flex items-center bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors duration-300"
              >
                FAQs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
