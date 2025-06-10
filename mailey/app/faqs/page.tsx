"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How far in advance should I book my session?",
    answer:
      "We recommend booking your session at least 2-4 weeks in advance, especially during peak seasons like graduation and holidays. This ensures you get your preferred date and time.",
  },
  {
    question: "What should I wear for my photoshoot?",
    answer:
      "We provide a detailed style guide after booking that includes outfit suggestions, color palettes, and styling tips. Generally, we recommend avoiding busy patterns and choosing colors that complement your skin tone.",
  },
  {
    question: "How long does a typical session last?",
    answer:
      "Session lengths vary by package. Our basic sessions are 1-1.5 hours, standard sessions are 2-2.5 hours, and premium sessions can last 3-4 hours. We'll discuss timing during your consultation.",
  },
  {
    question: "When will I receive my photos?",
    answer:
      "You can expect to receive your edited photos within 2-3 weeks after your session. We'll send you a private online gallery where you can view, download, and share your images.",
  },
  {
    question: "Can I bring props or request specific poses?",
    answer:
      "We encourage you to bring meaningful props and share any pose ideas you have. We want your photos to reflect your personality and style.",
  },
  {
    question: "What happens if it rains on the day of my outdoor session?",
    answer:
      "We monitor weather closely and will contact you if conditions aren't suitable for outdoor photography. We can reschedule at no additional cost or move to an indoor location if available.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes! We require a 20% retainer to secure your date, and the remaining balance can be paid in installments leading up to your session. Contact us to discuss payment options.",
  },
  {
    question: "Can I purchase additional photos not included in my package?",
    answer:
      "Yes, you can purchase additional edited photos from your session. We'll provide pricing information for extra images when we deliver your gallery.",
  },
];

export default function FAQsPage() {
  const [showContent, setShowContent] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      {/* Content Section */}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-6">
              Questions & Answers
            </h2>
            <span className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto block">
              Find answers to the most common questions about our photography
              services and booking process.
            </span>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-bold text-black pr-4">
                      {faq.question}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-white">
                      <span className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Still have questions?
              </h3>
              <span className="text-lg text-gray-700 mb-8 block">
                Don't hesitate to reach out! We're here to help make your
                photography experience perfect.
              </span>
              <a
                href="/contact"
                className="inline-flex items-center bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300 text-lg font-bold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
