/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#1999b3",
        "background-light": "#f5f1e9",
        "background-dark": "#111e21",
        "text-primary": "#2d2d2d",
        "text-secondary": "#8a8a8a",
        "text-primary-dark": "#e0e0e0",
        "text-secondary-dark": "#a0a0a0"
      },
      fontFamily: {
        "display": ["Work Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
