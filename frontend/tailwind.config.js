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
        'victor-red': ({ opacityValue }) => opacityValue ? `rgba(225, 29, 72, ${opacityValue})` : '#E11D48',
        'lavender-mist': ({ opacityValue }) => opacityValue ? `rgba(214, 188, 250, ${opacityValue})` : '#D6BCFA',
        'slate-gray': ({ opacityValue }) => opacityValue ? `rgba(243, 244, 246, ${opacityValue})` : '#F3F4F6',
        'graphite': ({ opacityValue }) => opacityValue ? `rgba(31, 41, 55, ${opacityValue})` : '#1F2937',
        'cool-gray': ({ opacityValue }) => opacityValue ? `rgba(107, 114, 128, ${opacityValue})` : '#6B7280',
        'success-green': ({ opacityValue }) => opacityValue ? `rgba(22, 163, 74, ${opacityValue})` : '#16A34A',
        'error-red': ({ opacityValue }) => opacityValue ? `rgba(248, 113, 113, ${opacityValue})` : '#F87171',
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