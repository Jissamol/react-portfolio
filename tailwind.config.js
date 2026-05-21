/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'fadeInUp': 'fadeInUp 1s ease-out',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        }
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
        dark: {
          DEFAULT: '#1e293b',
          light: '#334155',
          lighter: '#475569'
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  darkMode: ['selector', '[data-theme="dark"]'],
}
