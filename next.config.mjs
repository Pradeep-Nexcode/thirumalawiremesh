/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    // allow hostname(s) used by remote images
    domains: ["xsgames.co", "another-domain.com"],
    // OR use remotePatterns for more control:
    // remotePatterns: [
    //   { protocol: "https", hostname: "xsgames.co", port: "", pathname: "/**" },
    // ],
  },
};

export default nextConfig;
