/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "yellow": "#ffb21e",
        "blue": "#1125d6",
        "green": "#00bb8f",
        "red": "#ff5555",
        "dark-navy": "#303b59",
        "light-blue": "#cac9ff",
        "very-light-blue": "#ecf2ff"
      },
      gradientColorStops: {
        1: "from-[#6943ff] to-[#2f2ce9]",
        2: "from-[#4d21c9]"
      }
    },
  },
  plugins: [],
}
