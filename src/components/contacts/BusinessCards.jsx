"use client";

import { useState } from "react";
import Image from "next/image";

export default function BusinessCards() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");

  const images = [
    "/images/cards/card1.png",
    "/images/cards/card2.jpg",
    "/images/cards/card3.jpg",
    "/images/cards/card4.jpg",
    "/images/cards/card5.jpg",
    "/images/cards/card6.jpg",
  ];

  const openLightbox = (src) => {
    setActiveImg(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our Work & Products
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get a closer look at our premium wire mesh products and their real-world applications.
            See how Thirumala Wiremesh ensures durability and precision in every piece.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-lg shadow cursor-pointer">
              <Image
                src={src}
                alt={`gallery-img-${i}`}
                width={600}
                height={400}
                className="w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                onClick={() => openLightbox(src)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <Image
            src={activeImg}
            alt="lightbox"
            width={1000}
            height={800}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />

          <span
            className="absolute top-6 right-6 text-white text-4xl cursor-pointer"
            onClick={closeLightbox}
          >
            &times;
          </span>
        </div>
      )}
    </section>
  );
}
