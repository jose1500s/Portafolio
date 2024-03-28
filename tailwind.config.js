/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      'text-gradient': 'text-gradient 3.5s linear infinite',
    },
    keyframes: {
      'text-gradient': {
        to: {
          backgroundPosition: '200% center',
        },
      },
    },
  },
  plugins: [animations],
}
