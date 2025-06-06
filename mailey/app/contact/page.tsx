"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Instagram, Twitter } from "lucide-react";

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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Contact
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
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Get In Touch
                </h2>
                <span className="text-lg text-gray-700 leading-relaxed mb-8 block">
                  Ready to book your session or have questions? We'd love to
                  hear from you! Use the booking link below or reach out through
                  any of our contact methods.
                </span>

                <div className="bg-gray-100 p-8 mb-8">
                  <h3 className="text-2xl font-bold text-black mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-black mr-4" />
                      <div>
                        <span className="font-bold block">Email</span>
                        <a
                          href="mailto:hello@maileystudios.com"
                          className="text-black hover:text-gray-600 transition-colors duration-300"
                        >
                          hello@maileystudios.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-black mr-4" />
                      <div>
                        <span className="font-bold block">Phone</span>
                        <a
                          href="tel:+1234567890"
                          className="text-black hover:text-gray-600 transition-colors duration-300"
                        >
                          (123) 456-7890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Instagram className="h-6 w-6 text-black mr-4" />
                      <div>
                        <span className="font-bold block">Instagram</span>
                        <a
                          href="https://www.instagram.com/mailey.studios/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-gray-600 transition-colors duration-300"
                        >
                          @mailey.studios
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Twitter className="h-6 w-6 text-black mr-4" />
                      <div>
                        <span className="font-bold block">Twitter</span>
                        <a
                          href="https://twitter.com/maileystudios"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-gray-600 transition-colors duration-300"
                        >
                          @maileystudios
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <Link
                    href="https://booking.maileystudios.com"
                    target="_blank"
                    className="inline-flex items-center bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300 text-xl font-bold"
                  >
                    Book Your Session Now
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Contact Mailey Studios"
                    fill
                    className="object-cover grayscale shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
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
      </div>
    </main>
  );
}
