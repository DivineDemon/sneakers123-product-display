/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EB145F",
        overlay: "rgba(51, 31, 40, 0.7)",
      },
    },
  },
  plugins: [],
};
