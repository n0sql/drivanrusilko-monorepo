// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config.ts";

const config: Pick<Config, "content" | "presets" | "darkMode"> = {
  content: ["src/**/*.{js,ts,jsx,tsx,mdx}", "../../packages/ui/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
  darkMode: "class",
};

export default config;
