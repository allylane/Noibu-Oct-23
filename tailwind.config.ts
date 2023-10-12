import formsPlugin from '@tailwindcss/forms'
import headlessuiPlugin from '@headlessui/tailwindcss'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    /*colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#2600FF',
        600: '#2600FF',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      'slate': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#2600FF',
        600: '#2600FF',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
    },*/
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
