/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.mangoitsolutions.com",
      },
      {
        protocol: "https",
        hostname: "cdn.icon-icons.com",
      },
    ],
  },
};

export default nextConfig;
