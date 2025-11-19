import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Thirumala Wiremesh",
  description:
    "Premium wire mesh manufacturer in South India — crimped mesh, vibrating screens, and industrial metal mesh solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap"
          rel="stylesheet"
        />

        {/* Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />

        {/* Splide CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white px-5 md:px-10 xl:px-20 text-gray-900`}
      >
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        {children}

        {/* Global Footer */}
        <Footer />

        {/* Splide JS */}
        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>

        {/* Bootstrap bundle (optional if used) */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
