import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Instagram, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#BAC3FF] pt-10">
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#3C3883] mb-6">
                Get In Touch
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Ready to book your session or have questions? We'd love to hear
                from you! Use the booking link below or reach out through any of
                our contact methods.
              </p>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-[#3C3883] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-[#F0532B] mr-4" />
                    <div>
                      <p className="font-bold">Email</p>
                      <a
                        href="mailto:hello@maileystudios.com"
                        className="text-[#3C3883] hover:text-[#F0532B] transition-colors duration-300"
                      >
                        hello@maileystudios.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-[#F0532B] mr-4" />
                    <div>
                      <p className="font-bold">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-[#3C3883] hover:text-[#F0532B] transition-colors duration-300"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="h-6 w-6 text-[#F0532B] mr-4" />
                    <div>
                      <p className="font-bold">Instagram</p>
                      <a
                        href="https://www.instagram.com/mailey.studios/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3C3883] hover:text-[#F0532B] transition-colors duration-300"
                      >
                        @mailey.studios
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Twitter className="h-6 w-6 text-[#F0532B] mr-4" />
                    <div>
                      <p className="font-bold">Twitter</p>
                      <a
                        href="https://twitter.com/maileystudios"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3C3883] hover:text-[#F0532B] transition-colors duration-300"
                      >
                        @maileystudios
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="text-center lg:text-left">
                <Link
                  href="https://maileystudios.pixieset.com/booking/"
                  target="_blank"
                  className="inline-flex items-center bg-[#F0532B] text-white px-8 py-4 rounded-full hover:bg-[#F88331] transition-colors duration-300 text-xl font-bold"
                >
                  Book Your Session Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
