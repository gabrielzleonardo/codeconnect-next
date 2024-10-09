import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1200px",
      },
    },
    extend: {
      colors: {
        offwhite: "#E1E1E1",
        "green-100": "#81FE88",
        "green-200": "#BFFFC3",
        "green-300": "#E3FFEA",
        "gray-100": "#BCBCBC",
        "gray-200": "#888888",
        "gray-300": "#3E3E3F",
        "gray-400": "#171D1F",
        "gray-500": "#00090E",
      },
    },
  },
  plugins: [],
};
export default config;
