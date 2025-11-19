"use client";

import Image from "next/image";

export default function CallToAction() {
  const features = [
    {
      img: "/images/icons/Quality.png",
      alt: "Premium Quality Materials Icon",
      title: "Premium Quality",
      desc: "Top-notch materials & unmatched standards for durability.",
      imgWidth: 96,
      imgHeight: 48,
    },
    {
      img: "/images/icons/Support.png",
      alt: "24/7 Customer Support Icon",
      title: "Dedicated Support",
      desc: "Responsive and helpful customer assistance anytime.",
      imgWidth: 80,
      imgHeight: 48,
    },
    {
      img: "/images/icons/Delivery.png",
      alt: "Timely Delivery Icon",
      title: "Timely Delivery",
      desc: "Punctual delivery for all your industrial needs.",
      imgWidth: 64,
      imgHeight: 40,
    },
    {
      img: "/images/icons/Solutions.png",
      alt: "Custom Wire Mesh Solutions Icon",
      title: "Custom Solutions",
      desc: "Tailored wire mesh products to meet your exact requirements.",
      imgWidth: 90,
      imgHeight: 48,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-900 py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-white gap-10">

        {/* LEFT SIDE CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Ready to <span className="text-[#f48c1c]">Take the Next Step?</span>
          </h2>

          <p className="mt-6 md:mt-8 text-lg md:text-2xl text-blue-200">
            Discover high-quality, reliable wire mesh solutions tailored for your success.
          </p>

          {/* Buttons */}
          <div className="mt-8 grid sm:grid-cols-2 gap-7 text-center">
            <a
              href="/contact"
              className="flex items-center justify-center w-full bg-[#f48c1c] px-6 py-3 text-white font-bold text-base md:text-xl rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              Get in Touch Today
            </a>

            <a
              href="tel:+917339453736"
              className="block bg-white text-blue-900 font-bold text-base md:text-lg px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              Call Us: +91-73394 53736
            </a>
          </div>

          {/* Feature Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-white rounded-full shadow-lg p-2 flex items-center justify-center">
                  <Image
                    src={f.img}
                    alt={f.alt}
                    width={f.imgWidth}
                    height={f.imgHeight}
                    className="object-contain"
                  />
                </div>

                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="text-sm text-blue-200">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/images/products/product7.jpg"
              alt="Stainless Steel Mesh for Industrial Use"
              width={600}
              height={600}
              className="w-full h-auto max-h-[600px] rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
