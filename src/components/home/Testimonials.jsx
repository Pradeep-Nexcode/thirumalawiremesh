"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // default styles
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=male",
      text: `"Thirumala Wiremesh delivers excellent quality products with great precision. Highly recommended!"`,
      name: "John",
      role: "Stone Crusher Solutions",
    },
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=pixel",
      text: `"Their timely delivery and unmatched quality have been instrumental for our projects."`,
      name: "Jane Smith",
      role: "Construction Solutions",
    },
    {
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      text: `"The best wire mesh provider we've worked with. Exceptional customer support!"`,
      name: "Danae",
      role: "Industrial Solutions",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Clients <span className="text-[#f48c1c]">Say</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-lg">
          Discover why businesses across South India trust Thirumala Wiremesh for quality and reliability.
        </p>

        {/* Carousel */}
        <div className="mt-12">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              focus: "center",
              gap: "2rem",
              padding: "1rem",
              autoplay: true,
              interval: 3000,
              pauseOnHover: true,
              arrows: true,
              breakpoints: {
                1024: { perPage: 2 },
                768: { perPage: 1 },
              },
            }}
            aria-label="Testimonials Slider"
          >
            {testimonials.map((t, index) => (
              <SplideSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <p className="text-gray-700 italic"> {t.text} </p>
                  <h4 className="text-lg font-bold text-gray-800 mt-4">{t.name}</h4>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                  <div className="mt-3 text-yellow-500">★★★★★</div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}
