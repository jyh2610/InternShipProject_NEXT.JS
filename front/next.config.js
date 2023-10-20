/** @type {import('next').NextConfig} */
const nextConfig = {
  server: {
    host: "0.0.0.0",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// next.config.js

module.exports = nextConfig;
