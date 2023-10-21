const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
/** @type {import('next').NextConfig} */

module.exports = module.exports = async (phase) => {
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
