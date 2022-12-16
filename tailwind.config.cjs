/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.ts|tsx",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "Avenir", "Helvetica", "Arial", "system-ui", "ui-sans-serif"],
      serif: ["Geogria", "ui-serif", "serif"],
      mono: ["ui-monospace", "Monaco", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
