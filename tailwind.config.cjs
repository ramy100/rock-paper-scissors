/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // screens: {
    //   mobile: '375px',
    //   desktop: '1366px',
    // },
    extend: {
      gradientColorStops: {
        scissors: ['hsl(39, 89%, 49%)', 'hsl(40, 84%, 53%)'],
        paper: ['hsl(230, 89%, 62%)', 'hsl(230, 89%, 65%)'],
        rock: ['hsl(349, 71%, 52%)', 'hsl(349, 70%, 56%)'],
        lizard: ['hsl(261, 73%, 60%)', 'hsl(261, 72%, 63%)'],
        spock: ['hsl(189, 59%, 53%)', 'hsl(189, 58%, 57%)'],
      },
      colors: {
        dark: 'hsl(229, 25%, 31%)',
        score: 'hsl(229, 64%, 46%)',
        header: 'hsl(217, 16%, 45%)',
      },
      backgroundImage: {
        'paper-image': "url('/images/icon-paper.svg')",
        'rock-image': "url('/images/icon-rock.svg')",
        'scissors-image': "url('/images/icon-scissors.svg')",
        'spock-image': "url('/images/icon-spock.svg')",
        'lizard-image': "url('/images/icon-lizard.svg')",
      },
    },
  },
  safelist: [
    'to-lizard-1',
    'from-lizard-0',
    'to-spock-1',
    'from-spock-0',
    'to-scissors-1',
    'from-scissors-0',
    'to-paper-1',
    'from-paper-0',
    'to-rock-1',
    'from-rock-0',
    'to-lizard-1',
    'from-lizard-0',
    'to-spock-1',
    'from-spock-0',
    'bg-paper-image',
    'bg-rock-image',
    'bg-scissors-image',
    'bg-lizard-image',
    'bg-spock-image',
  ],
  plugins: [],
};
