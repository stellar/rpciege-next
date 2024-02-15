import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          red: '#E94F2D',
          yellow: '#FBD07D',
          green: '#6D8C98',
          purple: '#6F60AB',
        },
        neutral: {
          white: '#F1EEE4',
          black: '#292827',
          gray: '#474442',
        },
      },
      fontFamily: {
        capitolina: ['capitolina', 'serif'],
        merriweather: ['var(--font-merriweather)', 'serif'],
        nanum: ['var(--font-nanum)', 'sans-serif'],
      },
      fontSize: {
        h6: ['1rem', { fontWeight: '700', lineHeight: '100%' }],
        h5: ['1.875rem', { lineHeight: '130%', letterSpacing: '-0.03em' }],
        h4: ['2.25rem', { fontWeight: '800', lineHeight: '110%', letterSpacing: '-0.03em' }],
        h3: ['3.75rem', { fontWeight: '800', lineHeight: '110%', letterSpacing: '-0.03em' }],
        'h3-lg': ['5rem', { fontWeight: '800', lineHeight: '110%', letterSpacing: '-0.03em' }],
        h2: ['7rem', { lineHeight: '100%', letterSpacing: '-0.03em' }],
        h1: ['3.75rem', { fontWeight: '300', lineHeight: '100%', letterSpacing: '-0.03em' }],
        'h1-lg': ['7.8125rem', { fontWeight: '300', lineHeight: '100%', letterSpacing: '-0.03em' }],
        'h1-bold': ['4.375rem', { fontWeight: '800', lineHeight: '100%' }],
        'h1-bold-lg': ['7.8125rem', { fontWeight: '800', lineHeight: '100%' }],
        body: ['1rem', { lineHeight: '175%' }],
        'body-lg': ['1.125rem', { lineHeight: '175%' }],
        descriptor: ['1.75rem', { lineHeight: '125%', letterSpacing: '-0.03em' }],
        'descriptor-lg': ['2.25rem', { lineHeight: '110%', letterSpacing: '-0.03em' }],
      },
      gridTemplateColumns: ({ theme }) => {
        const spacing = theme('spacing');

        return Object.keys(spacing).reduce((accumulator, spacingKey) => {
          return {
            ...accumulator,
            [`fill-${spacingKey}`]: `repeat(auto-fill, minmax(${spacing[spacingKey]}, 1fr))`,
            [`fit-${spacingKey}`]: `repeat(auto-fit, minmax(${spacing[spacingKey]}, 1fr))`,
          };
        }, {});
      },
      spacing: {
        7.5: '1.875rem',
        15: '3.75rem',
      },
    },
  },
  plugins: [],
};
export default config;
