/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'blue-infojobs': {
          50: '#EDF7FD',
          100: '#DBEFFB',
          200: '#B2DDF6',
          300: '#7BC5EF',
          400: '#3BA8E7',
          500: '#167DB7',
          600: '#1472A8',
          700: '#126392',
          800: '#0E5076',
          900: '#0A3B56',
          950: '#07283B'
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
