/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  themes: ["luxury", "autumn"],

  plugins: [require("daisyui")],
};
