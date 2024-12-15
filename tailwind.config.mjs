/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrainsmono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        gruvbox: {
          bg: "#282828",
          fg: "#ebdbb2",
          green: "#b8bb26",
          blue: "#83a598",
          red: "#fb4934",
          gray: "#928374",
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
