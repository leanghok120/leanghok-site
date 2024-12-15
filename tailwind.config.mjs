import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Departure", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gruvbox: {
          bg: "#282828",
          fg: "#ebdbb2",
          green: "#b8bb26",
          red: "#fb4934",
          gray: "#928374",
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
