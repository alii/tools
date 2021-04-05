const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
