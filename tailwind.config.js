const { default: _default } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "white",
        hover: "#20B2AA",
        secondary: "#021cff",
      },
      screens: {
        lg: "1047px",
      },
      keyframes: {
        background: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        background: "background 10.5s linear infinite",
      },
    },
  },
  plugins: [],
};
