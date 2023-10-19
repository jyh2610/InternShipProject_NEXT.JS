import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    backgroundImage: {
      main: `ur('https://user-images.githubusercontent.com/144188723/273838726-22f220e9-7401-4673-b6b9-a6be8590095d.png')`,
      dummyImg: `url('https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBNoaizXEN7DcMHZmAKMIUpi9Lf1tMzhEsLL-7su8PSbbiaCaus5dsEv1AkcIqZdbLaBV_N8jnlL6MSLVzLvrKz983RDQ=w1920-h889')`,
    },
    extend: {
      z: {
        back: "-99",
      },
      colors: {
        font: {
          gray: "#9D9D9D",
          white: "#f8f8fa",
          black: "#996EFF",
          darkBlack: "#434343",
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
