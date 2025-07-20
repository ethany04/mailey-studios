"use client";

import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import PhotoCarousel from "../components/PhotoCarousel";

const faqs = [
  {
    question: "Can I get a refund for a retainer?",
    answer:
      "No, the retainer is not refundable. In respect to my business and time, if you decide to cancel with me, I unfortunately can not give you a refund as this was a session I could have booked with another client.",
  },
  {
    question: "Do you retouch your images?",
    answer:
      "Yes, as part of the professionally edited photos, I will edit out anything you think is extra  or distracting within reason.",
  },
  {
    question: "Do you offer shorter sessions?",
    answer:
      "My shortest session time is 45 minutes, this offers enough time for you to get warmed up to the camera and have a variety of poses in your photos. I will not offer discounts to shorten any of my sessions.",
  },
  {
    question: "What do I wear for my photos?",
    answer:
      "After you book your session with me, I will send you my outfit guide. I love to see you express yourself in your shoot, so beyond my suggestions, wear what makes you feel most yourself/most comfortable!",
  },
  {
    question: "I don’t know how to pose. Will you pose me at the shoot?",
    answer:
      "Surprisingly this is a very common question. Of course I will pose you at the shoot! My job is to make you comfortable in front of the lens and provide poses that make my clients feel confident. I will always have ideas for poses that help fulfill your vision!",
  },
  {
    question: "Can I bring my friends and family to the shoot?",
    answer:
      "Please! I love when clients bring their loved ones to their shoot, it always makes the process so much more fun.",
  },
  {
    question: "How long does it take for me to receive my photos?",
    answer:
      "My turnaround time is 2 weeks. If you need this to be expedited, there will be an additional cost on a case-to-case basis.",
  },
  {
    question: "Do you do reschedules?",
    answer:
      "If the weather conditions are not suitable (such as rain, snow, or sleet), I will determine whether we need to reschedule. Please note that I cannot control sunlight, so cloudy skies alone will not be a valid reason to reschedule. I will notify you at least 24 hours in advance if the shoot needs to be postponed!",
  },
];

export default function FAQsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main className="min-h-screen pt-20 bg-white">
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-black mb-6">
            Frequently Asked Questions
          </h1>
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
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 bg-white transition-all duration-500 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: openFAQ === index ? "500px" : "0px",
                    opacity: openFAQ === index ? 1 : 0,
                    paddingTop: openFAQ === index ? "1rem" : "0",
                    paddingBottom: openFAQ === index ? "1rem" : "0",
                  }}
                  aria-hidden={openFAQ !== index}
                >
                  {openFAQ === index && (
                    <span className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </span>
                  )}
                </div>
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
      <PhotoCarousel />
    </main>
  );
}
