/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// next.config.js

module.exports = {
  async headers() {
    return [
      // 다른 헤더 설정들...

      {
        source: "/signin",
        headers: [
          {
            key: "X-Custom-Header",
            value: "Hello from middleware!",
          },
        ],
      },
    ];
  },
};
