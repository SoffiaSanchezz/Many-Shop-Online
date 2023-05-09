/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'yellow': '#FFDFD3',
        'violet': '#E0BBEA',
        'purple': '#957DAD',
        'pink': '#D2918C',
        'plight': '#FEC8D8'
      },
      fontFamily: {
        Amatic: ['"Amatic SC","sans-serif"'],
        Lobster: ['"Lobster Two","sans-serif"'],
        Handlee: ['"Handlee", "cursive"'],
      },
    },
  },
  plugins: [],
}

