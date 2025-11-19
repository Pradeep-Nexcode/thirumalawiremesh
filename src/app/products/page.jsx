"use client";

import { useState } from "react";
import Image from "next/image";
import EnquiryModal from "@/components/products/EnquiryModal";
import Gallery from "@/components/contacts/Gallery";

const products = [
  {
    title: "Stone Crusher Mesh",
    description:
      "High-strength wire mesh suitable for all types of crusher machines.",
    specs: "Material: Spring Steel • Sizes: Customizable",
    image: "product1.jpg",
  },
  {
    title: "Vibrating Screen Mesh",
    description:
      "Durable mesh for industrial screening applications and heavy use.",
    specs: "Material: Tata Spring Steel • Sizes: Standard/Custom",
    image: "product2.jpg",
  },
  {
    title: "Crimped Wire Mesh",
    description: "Hand-crafted precision mesh for industrial applications.",
    specs: "Wire Diameter: 1–6mm • Mesh size: Custom",
    image: "product3.jpg",
  },
  {
    title: "Fine Mesh",
    description: "Ideal for sieving, filtration, and fine separation.",
    specs: "Material: SS304/SS316 • Mesh Count: Custom",
    image: "product4.jpg",
  },
];

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const openModal = (title) => {
    setSelectedProduct(title);
    setModalOpen(true);
  };

  return (
    <section className="bg-gray-50 py-16 px-5 md:px-10 xl:px-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our range of high-quality wire mesh products designed for superior performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-lg transition-all"
            >
              <Image
                src={`/images/products/${product.image}`}
                alt={product.title}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover rounded-md mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>

              <p className="text-gray-600 mb-4">{product.description}</p>

              <p className="text-sm text-gray-500">
                <strong>Specifications:</strong> {product.specs}
              </p>

              <div className="flex items-center justify-end gap-2">
                {/* Enquiry Button */}
                <button
                  onClick={() => openModal(product.title)}
                  className="mt-4 border-2 border-[#f48c1c] text-[#f48c1c] px-4 py-2 rounded-md hover:bg-[#f48c1c] hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Send Enquiry
                </button>

                {/* Call Now */}
                <a
                  href="tel:+917339453736"
                  className="mt-4 border-2 border-[#f48c1c] bg-[#f48c1c] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Component */}
        <EnquiryModal
          open={modalOpen}
          close={() => setModalOpen(false)}
          productName={selectedProduct}
        />

      </div>

    </section>
  );
}
