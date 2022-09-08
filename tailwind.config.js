/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container : {
      center :  true

    },
    extend: {
      colors : {
        primary : "#14b8a6",
        dark    : "#1A202C"
      },
      screens : {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}
