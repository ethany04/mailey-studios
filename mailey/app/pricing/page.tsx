import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#BAC3FF] pt-10">
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#3C3883] mb-6">
            Our Pricing
          </h1>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            Transparent pricing for all your photography needs. Choose the
            package that best suits your vision and budget.
          </p>

          {/* Seniors Pricing */}
          <div className="mb-24">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="lg:w-1/3 h-full">
                <div className="relative h-64 lg:h-full w-full">
                  <Image
                    src="/about/senior1.jpg"
                    alt="Senior photography"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3C3883]/50 to-transparent flex items-center justify-center">
                    <h2 className="text-4xl font-bold text-white">Seniors</h2>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Basic Package */}
                  <div className="bg-[#CAD1FF] p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold text-[#3C3883] mb-2">
                      Basic
                    </h3>
                    <p className="text-3xl font-bold mb-4">$200</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#F0532B] mr-2 mt-1 flex-shrink-0" />
                        <span>1 hour session</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#F0532B] mr-2 mt-1 flex-shrink-0" />
                        <span>1 location</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#F0532B] mr-2 mt-1 flex-shrink-0" />
                        <span>2 outfit changes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#F0532B] mr-2 mt-1 flex-shrink-0" />
                        <span>25 digital images</span>
                      </li>
                    </ul>
                  </div>

                  {/* Standard Package */}
                  <div className="bg-[#DDA5AF] p-6 rounded-lg shadow transform scale-105">
                    <div className="bg-[#F0532B] text-white text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-2">
                      Most Popular
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Standard
                    </h3>
                    <p className="text-3xl font-bold text-white mb-4">$300</p>
                    <ul className="space-y-2 mb-6 text-white">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                        <span>2 hour session</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                        <span>2 locations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                        <span>3 outfit changes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                        <span>50 digital images</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                        <span>5 physical prints</span>
                      </li>
                    </ul>
                  </div>

                  {/* Premium Package */}
                  <div className="bg-[#CAD1FF] p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold text-[#3C3883] mb-2">
                      Premium
                    </h3>
                    <p className="text-3xl font-bold mb-4">$450</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#F0532B] mr-2 mt-1 flex-shrink-0" />
                        <span>3 hour session</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#F0532B] mr-2 mt-1 flex-shrink-0" />
                        <span>3 locations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#F0532B] mr-2 mt-1 flex-shrink-0" />
                        <span>Unlimited outfit changes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#F0532B] mr-2 mt-1 flex-shrink-0" />
                        <span>All digital images</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#F0532B] mr-2 mt-1 flex-shrink-0" />
                        <span>10 physical prints</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#F0532B] mr-2 mt-1 flex-shrink-0" />
                        <span>Photo album</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Now CTA */}
          <div className="text-center">
            <Link
              href="/booking"
              className="inline-flex items-center bg-[#F0532B] text-white px-8 py-4 rounded-full hover:bg-[#F88331] transition-colors duration-300 text-xl font-bold"
            >
              Book Your Session Now <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
