import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-5 md:px-10 xl:px-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Thirumala Wiremesh</h3>
          <p className="text-sm leading-6">
            With over 15 years of experience, we deliver top-quality wire mesh solutions
            tailored to your needs. Trusted by clients across South India for reliability
            and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-400 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-blue-400 transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <div className="flex items-start">
                <span className="material-icons text-blue-400 mr-2">location_on</span>
                <p>Dharmapuri District, Tamil Nadu, India</p>
              </div>
            </li>

            <li>
              <div className="flex items-start">
                <span className="material-icons text-blue-400 mr-2">phone</span>
                <Link
                  href="tel:+919876543210"
                  className="hover:text-blue-400 transition"
                >
                  +91 98765 43210
                </Link>
              </div>
            </li>

            <li>
              <div className="flex items-start">
                <span className="material-icons text-blue-400 mr-2">email</span>
                <Link
                  href="mailto:info@thirumalawiremesh.com"
                  className="hover:text-blue-400 transition"
                >
                  info@thirumalawiremesh.com
                </Link>
              </div>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <p className="text-sm mb-4">
            Stay connected with us on social media to get the latest updates and insights.
          </p>

          <div className="flex gap-4">
            {/* Facebook */}
            <Link href="#" className="text-blue-400 hover:text-blue-500 transition">
              <i className="fa-brands fa-facebook"></i>
            </Link>

            {/* Custom SVG icon (X icon maybe) */}
            <Link href="#" className="text-blue-400 hover:text-blue-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 
                64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 
                234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 
                116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 
                142.9H125.1L296.9 367.6h26.3z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link href="#" className="text-blue-400 hover:text-blue-500 transition">
              <i className="fa-brands fa-instagram"></i>
            </Link>

            {/* LinkedIn */}
            <Link href="#" className="text-blue-400 hover:text-blue-500 transition">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        <p className="mb-2">&copy; 2025 Thirumala Wiremesh. All rights reserved.</p>
        <p>
          Developed with ❤️ by{" "}
          <Link href="#" className="hover:text-blue-400 font-medium transition">
            Pradeep
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
