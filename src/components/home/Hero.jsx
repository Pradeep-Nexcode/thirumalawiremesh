"use client";

export default function Hero() {
  return (
    <div className="relative h-[90vh] bg-gray-100 overflow-hidden">

      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0 bg-[#FFFEF7]/[0.4]
        [background-image:linear-gradient(to_right,_#ccc_1px,_transparent_1px),_linear-gradient(to_bottom,_#ccc_1px,_transparent_1px)]
        lg:[background-size:10%_15%]
        md:[background-size:15%_20%]
        sm:[background-size:20%_25%]
        [background-size:25%_30%]"
      ></div>

      {/* Center Light Circle */}
      <div className="absolute inset-0 z-5 flex items-center justify-center">
        <div className="w-[90%] h-[70%] bg-[#FFFEF7]/40 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.5)]"></div>
      </div>

      {/* Content */}
      <div className="flex px-5 md:px-10 xl:px-20 items-center justify-center h-full relative z-10">
        <div className="text-center flex flex-col gap-3 px-6 md:w-9/12">

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Trusted{" "}
            <span className="text-[#f48c1c]">Wire Mesh Manufacturer</span> in South India
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-gray-600 text-md sm:text-lg md:text-xl">
            Welcome to <strong>Thirumala Wiremesh</strong>, a leading manufacturer of{" "}
            <strong>crimped wire mesh</strong> and <strong>vibrating screens</strong>. 
            With over 15 years of experience and 200+ satisfied clients, we deliver 
            superior quality products crafted from TATA high-carbon spring steel.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-6 flex items-center justify-between sm:justify-center md:gap-5">
            <a
              href="/about"
              className="bg-gray-200 text-gray-800 px-3 sm:px-6 py-1.5 sm:py-3 rounded-lg text-lg font-medium hover:bg-gray-300 transition"
            >
              <span className="hidden md:inline">Learn</span> About Us
            </a>

            <a
              href="/products"
              className="bg-[#f48c1c] text-white px-3 sm:px-6 py-1.5 sm:py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition"
            >
              <span className="hidden md:inline">Explore</span> Our Products
            </a>
          </div>

          {/* Supporting Text */}
          <div className="mt-8">
            <p>
              Precision Engineered Wire Mesh for Stone Crusher Plants and Industrial Applications
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
