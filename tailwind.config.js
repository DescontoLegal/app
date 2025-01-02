const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#F2BD1D',
        'secondary': '#497343',
        'tertiary': '#F27F3D',
        'quaternary': '#83A64E',
        'quinary': '#0D0D0D',
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
