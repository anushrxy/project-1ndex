/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [{
      night: {
        ...require("daisyui/src/colors/themes")["[data-theme=night]"],
        primary: "#B4c6Ef",
        "primary-focus": "mediumblue",
      },
    }],
  },

  theme:  {
    animation: {
      'wiggle': 'wiggle 3s ease-in-out infinite',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(50px)' },
          '50%': { transform: 'translateY(80px)' },
        }
      }
    }
  },

  plugins: [require("daisyui")],
}