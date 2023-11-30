import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,mjs}","./node_modules/flowbite-react/**/*.js",],
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
    },
  },
  darkMode: "class",
  plugins: [flowbite],
};
export default config;
