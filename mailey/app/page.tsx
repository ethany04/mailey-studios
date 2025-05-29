import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/home_bg.jpg"
          alt="Home background editorial"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide">
          Live in the moment
        </h1>
        <Link
          href="/booking"
          className="bg-[#F0532B] hover:bg-[#F88331] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
        >
          Book a Session
        </Link>
      </section>

      {/* Services Title */}
      <section className="relative z-10 py-16 px-4 md:px-8 bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#3C3883]">
            Our Services
          </h2>
        </div>
      </section>

      {/* Booking Section */}
      <section className="relative z-10 py-16 px-4 md:px-8 bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 bg-[#DDA5AF] h-48 rounded-lg flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Booking</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-4">
                Schedule your perfect photoshoot with our easy booking system.
                Choose your package, date, and location. We offer flexible
                scheduling options to accommodate your busy life. Our booking
                process is designed to be simple and stress-free, allowing you
                to focus on preparing for your session.
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center text-[#F0532B] font-bold hover:text-[#F88331]"
              >
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-16 px-4 md:px-8 bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 bg-[#F88331] h-48 rounded-lg flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Pricing</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-4">
                Transparent pricing for all your photography needs. From
                portraits to events, we have packages for every occasion. Our
                pricing is designed to be clear and straightforward, with no
                hidden fees. We offer a range of packages to suit different
                budgets and requirements.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center text-[#F0532B] font-bold hover:text-[#F88331]"
              >
                View Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-10 py-16 px-4 md:px-8 bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 bg-[#828BC5] h-48 rounded-lg flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Gallery</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-4">
                Browse our portfolio of stunning photography. Get inspired and
                see the quality of our work. Our gallery showcases a diverse
                range of photography styles and subjects, from intimate
                portraits to breathtaking landscapes. Each image tells a unique
                story and captures a special moment in time.
              </p>
              <Link
                href="/gallery"
                className="inline-flex items-center text-[#F0532B] font-bold hover:text-[#F88331]"
              >
                Explore Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4 md:px-8 bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 bg-[#3C3883] h-48 rounded-lg flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Contact</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-4">
                Have questions? Reach out to us. We're here to help you capture
                your special moments. Our team is dedicated to providing
                exceptional customer service and support. Whether you have
                questions about our services or need assistance with booking,
                we're just a message away.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#F0532B] font-bold hover:text-[#F88331]"
              >
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-16 px-4 md:px-8 bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 bg-[#F0532B] h-48 rounded-lg flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">About</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-4">
                Learn about our story, our passion for photography, and the team
                behind Mailey Studios. We are a group of dedicated professionals
                who are passionate about capturing life's most precious moments.
                Our journey began with a simple love for photography and has
                evolved into a mission to help others preserve their memories.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-[#F0532B] font-bold hover:text-[#F88331]"
              >
                Our Story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
