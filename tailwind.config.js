/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'c-blue': '#007bff',
        'c-gray': '#6c757d',
        'c-green': '#28a745',
        'c-red': '#dc3545',
        'c-yellow': '#ffc107',
        'c-info': '#17a2b8',
        'c-light': '#f8f9fa',
        'c-dark': '#343a40',
        'c-white': '#ffffff'
      }
    },
  },
  plugins: [],
}
