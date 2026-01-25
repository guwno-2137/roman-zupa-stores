/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        dark: "#0a0a0a"
      },
      letterSpacing: {
        wider: "0.15em"
      }
    }
  },
  plugins: []
};
