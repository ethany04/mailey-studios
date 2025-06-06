import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Sample gallery images for the carousel
  const galleryImages = [
    { src: "/about/senior1.jpg", alt: "Portfolio image 1" },
    { src: "/about/editorial1.jpg", alt: "Portfolio image 2" },
    { src: "/about/lifestyle1.jpg", alt: "Portfolio image 3" },
    { src: "/about/senior2.jpg", alt: "Portfolio image 4" },
    { src: "/about/editorial2.jpg", alt: "Portfolio image 5" },
    { src: "/about/lifestyle2.jpg", alt: "Portfolio image 6" },
    { src: "/about/lifestyle2.jpg", alt: "Portfolio image 7" },
    { src: "/about/lifestyle2.jpg", alt: "Portfolio image 8" },
    { src: "/about/lifestyle2.jpg", alt: "Portfolio image 9" },
    { src: "/about/lifestyle2.jpg", alt: "Portfolio image 10" },
  ];

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
        <h1 className="text-9xl md:text-7xl font-bold text-white mb-6 tracking-wide">
          Live in the moment
        </h1>
        <Link
          href="/booking"
          className="bg-white text-black font-bold py-3 px-8 rounded-full transition-colors duration-300"
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
                  src="/maggie_headshot.jpeg"
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
      <section className="relative z-10 w-full bg-gray-100 py-20">
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
      <section className="relative z-10 w-full h-96 overflow-hidden">
        {/* Scrolling Images */}
        <div className="absolute inset-0 flex">
          <div className="flex scroll-animation">
            {/* Duplicate the images for seamless loop */}
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div key={index} className="relative h-96 w-80 flex-shrink-0">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay with text and button */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
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
    </main>
  );
}
