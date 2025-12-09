"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");

  const images = [
    "/images/recent/recent1.jpeg",
    "/images/recent/recent5.jpeg",
    "/images/recent/recent2.jpeg",
    "/images/recent/recent3.jpeg",
    "/images/recent/recent4.jpeg",
    "/images/recent/recent9.jpg",
    "/images/recent/recent8.jpeg",
    "/images/recent/recent10.jpeg",
    "/images/recent/recent7.jpeg",
    "/images/recent/recent6.jpeg",
  ];


  const openLightbox = (src) => {
    setActiveImg(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* PAGE HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Startup Expo - Recent Highlights
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These photos are from our recent participation in the Startup Expo,
            where Thirumala Wiremesh showcased our products and solutions.
            Take a closer look at our stall, product displays, and the people
            who visited and supported us.
          </p>
        </div>


        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-lg shadow cursor-pointer"
              onClick={() => openLightbox(img)}
            >
              <Image
                src={img}
                alt={`Gallery ${index}`}
                width={600}
                height={400}
                className="w-full rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <Image
            src={activeImg}
            alt="Full View"
            width={1000}
            height={800}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />

          <span
            className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
            onClick={closeLightbox}
          >
            &times;
          </span>
        </div>
      )}
    </section>
  );
}
