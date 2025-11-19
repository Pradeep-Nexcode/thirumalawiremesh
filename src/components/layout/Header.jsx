"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white z-[9999999] shadow-md">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center font-bold text-xl">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={80}
              className="h-[3rem] md:h-[5rem] w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-7">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-600 hover:text-blue-500">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 focus:outline-none"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform z-50 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <div className="px-4 py-6 space-y-4">
          <Link
            href="/"
            className="block text-gray-700 font-semibold hover:text-[#f48c1c]"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/products"
            className="block text-gray-700 font-semibold hover:text-[#f48c1c]"
            onClick={() => setOpen(false)}
          >
            Products
          </Link>

          <Link
            href="/contact"
            className="block text-gray-700 font-semibold hover:text-[#f48c1c]"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Extra Section (Brochure) */}
        <div className="px-4 py-4 border-t text-gray-700 font-medium">
          Brochure Download
        </div>
      </div>
    </>
  );
}
