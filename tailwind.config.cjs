/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "[data-mode=\"dark\"]"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "Avenir", "Helvetica", "Arial", "system-ui", "ui-sans-serif"],
      serif: ["Geogria", "ui-serif", "serif"],
      mono: ["ui-monospace", "Monaco", "monospace"],
    },
    extend: {
      colors: {
        "github": "#22272e"
      },
    },
  },
  plugins: [],
};
