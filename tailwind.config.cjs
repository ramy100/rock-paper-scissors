/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '375px',
      desktop: '1366px',
    },
    extend: {
      gradientColorStops: {
        scissors: ['hsl(39, 89%, 49%)', 'hsl(40, 84%, 53%)'],
        paper: ['hsl(230, 89%, 62%)', 'hsl(230, 89%, 65%)'],
        rock: ['hsl(349, 71%, 52%)', 'hsl(349, 70%, 56%)'],
        lizard: ['hsl(261, 73%, 60%)', 'hsl(261, 72%, 63%)'],
        cyan: ['hsl(189, 59%, 53%)', 'hsl(189, 58%, 57%)'],
      },
      colors: {
        dark: 'hsl(229, 25%, 31%)',
        score: 'hsl(229, 64%, 46%)',
        header: 'hsl(217, 16%, 45%)',
      },
    },
  },
  plugins: [],
};
