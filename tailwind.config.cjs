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
      backgroundImage: {
        "horizontal-dark": "linear-gradient(90deg,rgba(53,55,64,0), rgb(30 41 59) 87.85%)",
        "checkmark-animation": "url(/checkmark-animation.png)",
        "checkmark-animation-36": "url(/checkmark-animation-36.png)",
      },
      backgroundSize: {
        "checkmark-animation-size": "2500%",
        "checkmark-animation-size-36": "900%",
      },
      animation: {
        "checkmark": "checkmark 0.8s steps(24) 1",
      },
      keyframes: {
        "checkmark": {
          "from": { backgroundPosition: "left" },
          "to": { backgroundPosition: "right" }
        }
      }
    },
  },
  plugins: [],
};
