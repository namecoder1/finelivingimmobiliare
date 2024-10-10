/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "krona" : ['Krona One', 'sans-serif'],
      "montserrat" : ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        baseTheme: {
          'base-100': '#ffffff',
          'base-content': '#111111',
          'primary': '#FF2100',
          'secondary': '#1C1565',
          'accent': '#255',
          'accent-content': '#232323'
        }
      },
    ]
  },
  plugins: [
    require('daisyui'),
  ],
};
