const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
  openAnalyzer: true,
});
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
/** @type {import('next').NextConfig} */

// const nextConfig = async (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       eslint: {
//         ignoreDuringBuilds: true,
//       },
//     };
//   }

//   return {
//     server: {
//       host: "0.0.0.0",
//     },
//     eslint: {
//       ignoreDuringBuilds: true,
//     },
//   };
// };
// module.exports = withPlugins([
//   [withBundleAnalyzer],
//   nextConfig,
//   // your other plugins here
// ]);
module.exports = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      eslint: {
        ignoreDuringBuilds: true,
      },
      swcMinify: false,
      experimental: {
        swcTraceProfiling: true,
      },
    };
  }

  return {
    server: {
      host: "0.0.0.0",
      port: 8080,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    swcMinify: false,
    compiler: {
      removeConsole: {
        exclude: ["error"],
        experimentalDecorators: true,
      },
    },
  };
};
