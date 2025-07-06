import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HelpCircle, MessageCircle } from "lucide-react";
import PhotoCarousel from "./components/PhotoCarousel";

export default function Home() {
  return (
    <main className="min-h-screen relative z-0">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/headers/home_bg.jpg"
          alt="Home background editorial"
          fill
          priority
          className="object-cover"
        />
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
                  src="/about/maggie_headshot.jpeg"
                  alt="Maggie - Mailey Studios photographer"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="relative z-10 w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
              Ready to book?
            </h2>
            <span className="text-lg md:text-xl text-gray-700 block mb-8">
              Our simple 5-step process makes booking your session easy and
              stress-free.
            </span>
            <Link
              href="/booking"
              className="inline-flex items-center bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors duration-300"
            >
              Start Booking Process <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Booking Process Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Choose your package"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-lg">
                  Choose Package
                </span>
              </div>
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Book your date"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-lg">Book Date</span>
              </div>
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Enjoy your session"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-lg">
                  Enjoy Session
                </span>
              </div>
            </div>
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
                  Have a unique vision or special request? We'd love to hear
                  about your photography needs and create something beautiful
                  together.
                </span>
                <span className="block">
                  Whether it's a custom session, collaboration, or you just want
                  to say hello – reach out and let's start the conversation.
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
                  Questions?
                </h2>
              </div>
              <div className="space-y-6 text-lg md:text-xl text-gray-700 mb-8">
                <span className="block">
                  Wondering about our process, pricing, or what to expect? We've
                  compiled answers to the most common questions to help you
                  prepare.
                </span>
                <span className="block">
                  From session details to booking requirements, find everything
                  you need to know before your shoot.
                </span>
              </div>
              <Link
                href="/faqs"
                className="inline-flex items-center bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors duration-300"
              >
                View FAQs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
