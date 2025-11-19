"use client";

import { useState } from "react";

export default function EnquiryModal({ open, close, productName }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // ⭐ NEW

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // ⭐ Start loading

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, productName }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Enquiry sent successfully!");

        close(); // close modal
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(data.error || "Failed to send enquiry");
      }
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false); // ⭐ Stop loading
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-lg w-full max-w-lg p-8 relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={loading ? null : close} // disable close while loading
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>

        <form onSubmit={handleSubmit}>
          <input type="hidden" value={productName} />

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              name="name"
              required
              onChange={handleChange}
              value={form.name}
              disabled={loading}
              className="mt-1 py-2 px-2 w-full border border-gray-300 rounded-sm focus:ring-[#f48c1c]"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={form.email}
              disabled={loading}
              className="mt-1 py-2 px-2 w-full border border-gray-300 rounded-sm focus:ring-[#f48c1c]"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Your Phone
            </label>
            <input
              name="phone"
              required
              onChange={handleChange}
              value={form.phone}
              disabled={loading}
              className="mt-1 py-2 px-2 w-full border border-gray-300 rounded-sm focus:ring-[#f48c1c]"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              onChange={handleChange}
              value={form.message}
              disabled={loading}
              className="mt-1 py-2 px-2 w-full border border-gray-300 rounded-sm focus:ring-[#f48c1c]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md text-white transition 
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#f48c1c] hover:bg-orange-600"
              }
            `}
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
