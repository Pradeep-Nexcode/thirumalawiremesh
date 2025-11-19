"use client";

import BusinessCards from "@/components/contacts/BusinessCards";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setForm({ name: "", phone: "", subject: "", message: "" });
    } else {
      alert("Error sending message!");
    }

    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col items-start bg-[#F9FAFB] myPadX md:gap-8 px-5 md:px-10 xl:px-20 py-16">

      {/* Contact Section */}
      <div className="w-full grid md:grid-cols-2 gap-8 items-start md:p-8">

        {/* Contact Info */}
        <div className="w-full space-y-8">

          {/* Phone */}
          <div className="flex rounded-lg bg-white shadow-sm p-4 gap-4 items-start">
            <div className="text-3xl text-[#f48c1c]">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-800">Get Free Quote</p>
              <hr className="my-2 border-gray-300" />
              <p className="text-gray-600">+91 73394 53736</p>
              <p className="text-gray-600">+91 95008 80707</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex rounded-lg bg-white shadow-sm p-4 gap-4 items-start">
            <div className="text-3xl text-[#f48c1c]">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-800">Email Address</p>
              <hr className="my-2 border-gray-300" />
              <p className="text-gray-600">thirumalawiremesh@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex rounded-lg bg-white shadow-sm p-4 gap-4 items-start">
            <div className="text-3xl text-[#f48c1c]">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-800">Location</p>
              <hr className="my-2 border-gray-300" />
              <p className="text-gray-600">
                SF.No.167/1A4A, Nallanahalli, Gundalpatti Madu, Dharmapuri, Tamil Nadu, 635205.
              </p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="w-full rounded-lg bg-white shadow-sm p-5">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send your message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-gray-100 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#f48c1c]"
                required
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full bg-gray-100 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#f48c1c]"
                required
              />
            </div>

            {/* Subject */}
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-gray-100 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#f48c1c]"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full bg-gray-100 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#f48c1c]"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md font-semibold text-white transition ${loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#f48c1c] hover:bg-orange-600"
                }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.8687839455805!2d78.17202677612185!3d12.180717458971984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac176aad242443%3A0x1d3a47f3609d42ca!2sThirumala%20Wiremesh!5e1!3m2!1sen!2sin!4v1737944872905!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <BusinessCards />
    </div>
  );
}
