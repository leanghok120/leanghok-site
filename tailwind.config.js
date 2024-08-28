/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caskaydia: ["Caskaydia", "sans-serif"],
      },
      colors: {
        gruvbox: {
          bg0: "#282828",
          bg1: "#3c3836",
          fg0: "#fbf1c7",
          fg1: "#ebdbb2",
          gray: "#928374",
          blue: "#83a598",
          green: "#b8bb26",
          aqua: "#8ec07c",
        },
      },
    },
  },
  plugins: [],
};
