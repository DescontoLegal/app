const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#435938', // dark green
        'secondary': '#F2E47C', // yellow
        'tertiary': '#03A62C',
        'quaternary': '#81A64B',
        'quinary': '#F27B35',
      },
    },
  },
  content: [
    flowbite.content(),
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    flowbite.plugin(),
  ],
};
