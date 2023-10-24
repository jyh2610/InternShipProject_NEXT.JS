const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const withPlugins = require("next-compose-plugins");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      eslint: {
        ignoreDuringBuilds: true,
      },
    };
  }

  return {
    server: {
      host: "0.0.0.0",
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
