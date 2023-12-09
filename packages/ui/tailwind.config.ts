// tailwind config is required for editor support
import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config.ts";

const config: Pick<Config, "content" | "presets" | "darkMode"> = {

  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,mjs}","../../node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  presets: [sharedConfig],
};

export default config;
