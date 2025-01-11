/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray1': '#E3E3E3',
        'gray2': '#808080',
        'prbg': '#F2F2F2',
        'text': '#BFBFBF',
        'footer': '#262626',
        'pro': '#F0F0F0'
      },
    },
  },
  plugins: [],
}

