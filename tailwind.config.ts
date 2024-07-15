import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      "coffee": "#2F1F14",
      "light-color": "#DBBCA1",
      "menu-bg": "#DBBCA1",
      "sponser-bg": "#655546",
      "footer-bg": "#291600"
     }
    },
  },
  plugins: [],
};
export default config;
