import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {

      z:{
        back:"-99"

      },
      colors: {
        font: {
          gray: "#A5A5A5",
          white: "#f8f8fa",
          black: "#996EFF",
          darkBlack: " #434343",
        },
        bg: {
          gray: "#F0F0F0",
          white: "#F8F8FA",
        },
        line: {
          gray: {
            1: "#EDEDED",
            2: "#DBDBDB",
            3: "#9B9B9B",
          },
          ugreen: "#2AA86B",
          ured: "#FF3120",
        },
      },
      maxWidth: {
        top: "1600px",
      },
      grayscale: {
        50: "50%",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
