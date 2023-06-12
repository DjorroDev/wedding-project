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
    extend: {},
    fontFamily: {
      script: ["Alex brush", "script"],
      heading: ["Cinzel", "sans-serif"],
      desc: ["Fauna One", "sans-serif"],
    },
  },
  plugins: [],
};
