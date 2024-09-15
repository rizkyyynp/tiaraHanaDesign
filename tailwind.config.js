/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'max-md': { 'max': '1023px' },
      sm: { 'min': '480px' },
      md: { 'min': '768px', },
      lg: { 'min': '1024px' },
      xl: { 'min': '1440px' },
    },
    extend: {
      colors: {
        "primary": '#E7E4DE',
        "secondary": '#011D36',
        "third": '#31250E',
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};