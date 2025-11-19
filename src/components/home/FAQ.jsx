"use client";

import { useState } from "react";

export default function FAQ({ faqs }) {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-16 px-6">
      <div className="container mx-auto sm:px-6 lg:px-20">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center text-[#f48c1c] text-5xl mb-4">
            <i className="fas fa-question-circle animate-pulse"></i>
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your queries, answered. Learn more about our products, features, and services.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-8">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border rounded-xl p-6 bg-white transition-all duration-300 hover:shadow-lg ${
                  isOpen ? "border-[#f48c1c] shadow-md" : "border-gray-200"
                }`}
              >
                {/* Question Button */}
                <button
                  className="flex items-start gap-2 md:items-center justify-between w-full text-left focus:outline-none group"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start md:items-center gap-3">
                    <i
                      className={`fas fa-check-circle hidden md:block text-2xl transition ${
                        isOpen ? "text-[#f48c1c]" : "text-gray-400"
                      }`}
                    ></i>

                    <h3
                      className={`md:text-lg font-semibold transition-all duration-300 ${
                        isOpen ? "text-[#f48c1c]" : "text-gray-800 group-hover:text-[#f48c1c]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div className="text-2xl transition">
                    <i
                      className={`fas fa-chevron-down transition-transform ${
                        isOpen ? "text-[#f48c1c] rotate-180" : "text-gray-400"
                      }`}
                    ></i>
                  </div>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="mt-4 border-t border-gray-100 pt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
