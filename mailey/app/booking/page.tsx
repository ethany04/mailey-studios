"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Timeline } from "../components/Timeline";
import PhotoCarousel from "../components/PhotoCarousel";

export default function BookingPage() {
  const [showContent, setShowContent] = useState(false);
  const timelineData = [
    {
      title: "01",
      content: (
        <div className="space-y-2">
          <p className="font-medium">Choose Your Session Type! </p>
        </div>
      ),
    },
    {
      title: "02",
      content: (
        <div className="space-y-2">
          <p className="font-medium">Equity Research Intern at Almondz</p>
          <p className="text-sm text-neutral-400">
            Allocated 1 Billion INR of revenue to equities and other assets via
            financial analysis, DCF & EV/EBITDA methods
          </p>
          <p className="text-sm text-neutral-400">
            Assisted in giving recommendations on companies across sectors by
            attending conference calls & assessing quarterly results
          </p>
          <p className="font-medium mt-4">
            Research Associate at Texas Christian University
          </p>
          <p className="text-sm text-neutral-400">
            Developing ODE models to analyze viral load data
          </p>
          <p className="text-sm text-neutral-400">
            Publication: "Analyzing Dynamical Differences Between Vaccinated and
            Unvaccinated RSV Patients"
          </p>
          <p className="font-medium mt-4">
            Private Equity Intern at Newshore Partners
          </p>
          <p className="text-sm text-neutral-400">
            Led 2 closed investments deal, conducting DCF, LBO, and comparables
            analysis
          </p>
          <p className="font-medium mt-4">Director of Operations at Fidutam</p>
          <p className="text-sm text-neutral-400">
            United Nations ECOSOC Youth Forum Invitee
          </p>
          <p className="text-sm text-neutral-400">
            United Nations AI for Good Ambassador
          </p>
          <p className="text-sm text-neutral-400">MIT Solve Finalist</p>
          <p className="font-medium mt-4">Strategic Solutions Intern at Onix</p>
          <p className="text-sm text-neutral-400">
            Enhanced AI security protocols by deploying data-driven solutions,
            improving anomaly detection accuracy by 15%
          </p>
          <p className="text-sm text-neutral-400">
            Engineered and delivered scalable software solutions and interactive
            demos using Python and TensorFlow
          </p>
          <p className="text-sm text-neutral-400">
            Led the migration of 50+ Cloudera Jupyter Notebooks to Google Vertex
            AI, optimizing deployment pipelines
          </p>
          <p className="font-medium mt-4">Jr. Quantitative Analyst at hScore</p>
          <p className="text-sm text-neutral-400">
            $20,000,000+ pledged AUM to team-built High-Frequency Trading (HFT)
            software, with 35% Alpha opposed to S&P's 10%
          </p>
          <p className="text-sm text-neutral-400">
            Achieved 95% accuracy in sentiment analysis of 500+ earnings
            transcripts with TextBlob, NLTK, and bidirectional encoding
          </p>
        </div>
      ),
    },
    {
      title: "03",
      content: (
        <div className="space-y-2">
          <p className="font-medium">Book Online!</p>
          <p className="text-sm text-neutral-400">
            Secure a date on my booking site
          </p>
        </div>
      ),
    },
    {
      title: "04",
      content: (
        <div className="space-y-2">
          <p className="font-medium">Pay Retainer</p>
          <p className="text-sm text-neutral-400">
            To secure your day, you will pay a 20% retainer on the day you book
            or within 24 hours of receiving confirmation
          </p>
        </div>
      ),
    },
    {
      title: "05",
      content: (
        <div className="space-y-2">
          <p className="font-medium">Decide on Outfit(s) and location(s)</p>
          <p className="text-sm text-neutral-400">
            After you have booked, and paid your retainer, you will fill out my
            After-booking form. In it, I have curated guides for you to choose
            your perfect outfits and locations!
          </p>
        </div>
      ),
    },
    {
      title: "Go to Shoot Day and Celebrate!",
      content: <div className="space-y-2"></div>,
    },
  ];

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
      {/* Timeline Section */}
      <section id="timeline">
        <Timeline data={timelineData} />
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
                    className="object-cover"
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
                    className="object-cover"
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
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-center">
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
      <PhotoCarousel />
    </main>
  );
}
