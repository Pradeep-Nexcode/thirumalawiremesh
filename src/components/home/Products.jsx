"use client";

import Image from "next/image";

export default function Products() {
  const productImages = [
    {
      src: "/images/products/product1.jpg",
      alt: "Crimped Wire Mesh for Industrial Use",
    },
    {
      src: "/images/products/product5.jpg",
      alt: "High-Strength Wire Mesh Solutions",
    },
    {
      src: "/images/products/product6.jpg",
      alt: "Fine Mesh for Precision Sieving",
    },
    {
      src: "/images/products/product3.jpg",
      alt: "Durable Vibrating Screens for Crusher Plants",
    },
  ];

  const productLarge = [
    {
      src: "/images/products/product2.jpg",
      alt: "Stone Crusher Screens for Heavy-Duty Operations",
    },
    {
      src: "/images/products/product4.jpg",
      alt: "Custom Wire Mesh Solutions for Unique Requirements",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto text-center flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Premium <span className="text-[#f48c1c]">Wire Mesh Solutions</span>
        </h2>

        <p className="mt-4 text-gray-600 text-sm md:text-lg md:w-9/12">
          Designed to deliver unmatched durability, precision, and versatility, our
          wire mesh products cater to a wide range of industrial applications.
        </p>

        {/* Images */}
        <div className="mt-12 w-full flex flex-col gap-6">

          {/* Row 1: 4 images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {productImages.map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 2: 2 large images */}
          <div className="grid sm:grid-cols-2 gap-4">
            {productLarge.map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={400}
                  className="w-full h-[400px] rounded-md object-cover"
                />
              </div>
            ))}
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <a
            href="/products"
            className="bg-[#f48c1c] text-white px-6 py-4 rounded-md font-medium hover:bg-orange-600 transition"
          >
            Explore All Products
          </a>
        </div>
      </div>
    </section>
  );
}
