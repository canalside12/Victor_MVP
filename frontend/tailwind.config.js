/**
 * Victor MVP — Tailwind Configuration (v1.1)
 * ------------------------------------------
 * Updated to support Vercel build paths for the /frontend structure.
 * Scans all React, TypeScript, and HTML files inside frontend.
 */

 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'victor-red': 'var(--victor-red)', // #E11D48
        'lavender-mist': 'var(--lavender-mist)', // #D6BCFA
        'slate-gray': 'var(--slate-gray)', // #F3F4F6
        'graphite': 'var(--graphite)', // #1F2937
        'cool-gray': 'var(--cool-gray)', // #6B7280
        'success-green': 'var(--success-green)', // #16A34A
        'error-red': 'var(--error-red)', // #F87171
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        'soft': '0 2px 6px rgba(0,0,0,0.05)',
        'medium': '0 4px 10px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
