"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Superior Quality",
      image: "/images/whychooseus/Quality.svg",
      alt: "Superior Quality Wire Mesh",
      description:
        "We use TATA high-carbon spring steel to ensure our wire mesh products meet industry-leading standards for durability and precision.",
    },
    {
      title: "15+ Years of Expertise",
      image: "/images/whychooseus/Experience.svg",
      alt: "Experienced Wire Mesh Manufacturer",
      description:
        "With over 15 years of experience, we are trusted by 200+ clients across South India for reliable and high-performing wire mesh solutions.",
    },
    {
      title: "On-Time Delivery",
      image: "/images/whychooseus/Delivery.svg",
      alt: "On-Time Wire Mesh Delivery",
      description:
        "We value your time! Our efficient processes ensure that your wire mesh orders are delivered promptly, keeping your projects on schedule.",
    },
    {
      title: "Customer Satisfaction",
      image: "/images/whychooseus/Satisfaction.svg",
      alt: "Customer Satisfaction at Thirumala Wiremesh",
      description:
        "Our transparent processes, superior quality, and customer-first approach have made us a trusted name in the wire mesh industry.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Why Choose <span className="text-[#f48c1c]">Thirumala Wiremesh?</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 p-6 rounded-full inline-block transform transition group-hover:scale-110">
                <Image
                  src={feat.image}
                  alt={feat.alt}
                  width={120}
                  height={120}
                  className="mx-auto h-24 w-auto"
                />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-700 group-hover:text-blue-500 transition">
                {feat.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-[16px] mt-4">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
