/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    { pattern: /^gap-/ },
    { pattern: /^w-/ },
    { pattern: /^h-/ },
    { pattern: /^text-/ },
    { pattern: /^bg-/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
}