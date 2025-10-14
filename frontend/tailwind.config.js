/**
 * Victor MVP — Tailwind Configuration (v1)
 * ----------------------------------------
 * This file defines the color palette, typography, and spacing system
 * based on the Victor MVP Style Guide v2.
 *
 * 🧩 How to Enable Tailwind (once your new laptop is ready):
 * 1️⃣ Open terminal in your /frontend folder.
 * 2️⃣ Run:
 *     npm install -D tailwindcss postcss autoprefixer
 *     npx tailwindcss init -p
 * 3️⃣ Replace the generated tailwind.config.js with this file.
 * 4️⃣ In your global CSS (globals.css), ensure these @tailwind directives exist:
 *     @tailwind base;
 *     @tailwind components;
 *     @tailwind utilities;
 */

 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'victor-red': '#E11D48',
        'lavender': '#C4B5FD',
        'slate-gray': '#F3F4F6',
        'graphite': '#1F2937',
        'cool-gray': '#6B7280',
        'success-green': '#16A34A',
        'error-red': '#F87171',
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
