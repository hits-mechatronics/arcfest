/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        comfy: ["Comfortaa", "cursive"],
        crazy: ["Permanent Marker", "cursive"],
      },
    },
  },
  plugins: [],
};
