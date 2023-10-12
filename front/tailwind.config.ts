import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    backgroundImage: {
      main: `ur('https://user-images.githubusercontent.com/144188723/273838726-22f220e9-7401-4673-b6b9-a6be8590095d.png')`,
      dummyImg: `url('https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?w=1380&t=st=1696905938~exp=1696906538~hmac=2b2dffc34ca4bb1ad83a4a8bb67880feccdc5fa4197fe0274311f524478257a6')`,
    },
    extend: {
      z: {
        back: "-99",
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
  aspectRatio: {
    video: "16 / 9",
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
