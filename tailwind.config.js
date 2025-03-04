/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A54A0",
        secundary: "#0973EE"
      },
      fontFamily: {
        robo: ['Roboto', 'sans-serif'], // Para Google Fonts
        miFuente: ['MiFuente', 'sans-serif'], // Para fuentes locales
      },
    },
  },
  plugins: [],
}
