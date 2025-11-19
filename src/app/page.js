"use client";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Products from "@/components/home/Products";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import FAQ from "@/components/home/FAQ";

 
export default function HomePage() {
  const [launching, setLaunching] = useState(true);
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(false);

  // FAQ data (from Laravel Controller)
  const faqs = [
    {
      id: 1,
      question: "What is your return policy for defective or unwanted products?",
      answer:
        "Our return policy allows you to return defective or unwanted products within 30 days of purchase. To initiate a return, please contact our support team and provide your order number.",
    },
    {
      id: 2,
      question: "Do you offer international shipping for your products?",
      answer:
        "Yes, we offer worldwide shipping. Shipping fees and delivery times vary depending on your location.",
    },
    {
      id: 3,
      question: "Are your products covered under warranty?",
      answer:
        "Yes, most of our products come with a standard manufacturer’s warranty.",
    },
    {
      id: 4,
      question: "Can I cancel my order after placing it?",
      answer:
        "Orders can be canceled within 24 hours before shipment. After shipping, cancellations are not possible.",
    },
  ];

  // 🎇 Firework effect
  const createFirework = (xPos, yPos) => {
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { x: xPos, y: yPos },
    });
  };

  const startFireworks = () => {
    const interval = setInterval(() => {
      createFirework(Math.random(), Math.random());
    }, 500);

    setTimeout(() => clearInterval(interval), 60000); // 60 seconds
  };

  // 🎉 Confetti animation  
  const startConfetti = () => {
    const endTime = Date.now() + 15 * 1000;

    (function frame() {
      confetti({ particleCount: 2, origin: { x: 0 } });
      confetti({ particleCount: 2, origin: { x: 1 } });

      if (Date.now() < endTime) requestAnimationFrame(frame);
    })();
  };

  // 🎬 Launch button handler
  const handleLaunch = () => {
    confetti({ particleCount: 300, spread: 100 });

    setLoading(true);

    const countdown = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdown);
      setLaunching(false);
      startFireworks();
      startConfetti();
    }, 11000); // 10 sec countdown + 1 sec animation
  };

  return (
    <div>
      {/* LAUNCH SCREEN */}
      {launching && (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#f48c1c] animate-pulse">
            🚀 We're Almost Ready!
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6">
            A brand-new experience is coming your way. Stay tuned!
          </p>

          {!loading ? (
            <button
              onClick={handleLaunch}
              className="px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition text-xl"
            >
              Launch Website 🚀
            </button>
          ) : (
            <>
              <div className="text-5xl font-bold text-blue-400 mb-4">
                Launching in {count}...
              </div>

              <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
              <p className="mt-2 text-gray-300">Loading...</p>
            </>
          )}
        </div>
      )}

      {/* MAIN CONTENT */}
      {!launching && (
        <div className="animate-fadeIn">
          {/* Include sections like your Blade file */}
          {/* <Hero />
          <WhyChooseUs />
          <Products />
          <Testimonials />
          <CallToAction /> */}

          {/* FAQ Example */}
          <section className="p-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">FAQs</h2>
            {faqs.map((faq) => (
              <details
                key={faq.id}
                className="mb-4 p-4 rounded-lg bg-neutral-800 border border-neutral-700"
              >
                <summary className="cursor-pointer text-lg text-emerald-400">
                  {faq.question}
                </summary>
                <p className="text-gray-400 mt-2">{faq.answer}</p>
              </details>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
