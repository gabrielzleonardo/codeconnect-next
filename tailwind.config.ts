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
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      screens: {
        lg: "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-prompt)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      boxShadow: {
        "card-image": " 0px 16px 24px 0px rgba(0, 0, 0, 0.24);",
      },
      lineHeight: {
        150: "150%",
        120: "120%",
      },
      colors: {
        offwhite: "#E1E1E1",
        "green-100": "#81FE88",
        "green-200": "#BFFFC3",
        "green-300": "#132E35",
        "gray-100": "#BCBCBC",
        "gray-200": "#888888",
        "gray-300": "#3E3E3F",
        "gray-400": "#171D1F",
        "gray-500": "#00090E",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
