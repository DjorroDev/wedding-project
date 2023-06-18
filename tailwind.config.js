/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FDF1E3",
        cream: "#F9D6AC",
      },
    },
    fontFamily: {
      script: ["Alex brush", "script"],
      heading: ["Cinzel", "sans-serif"],
      desc: ["Fauna One", "sans-serif"],
    },
  },
  plugins: [],
};
