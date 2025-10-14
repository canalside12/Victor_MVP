/**
 * Victor MVP — PostCSS Configuration
 * ----------------------------------
 * This configuration allows Tailwind CSS and Autoprefixer
 * to process your CSS during Next.js builds.
 *
 * 📘 Setup steps (once Tailwind is installed):
 * 1️⃣ Ensure these packages exist in your devDependencies:
 *     "tailwindcss", "postcss", "autoprefixer"
 * 2️⃣ Keep this file at:
 *     /frontend/postcss.config.js
 */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
