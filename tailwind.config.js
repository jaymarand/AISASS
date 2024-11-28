/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-teal': '#06f7e0',
        'cyber-dark': '#0c1220',
        'cyber-darker': '#060a12',
        'cyber-black': '#020408',
        primary: '#06f7e0',
        secondary: '#e2f8ff',
        accent: '#06f7e0',
        dark: {
          100: '#0c1220',
          200: '#060a12',
          300: '#020408'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        '8xl': '1400px',
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(6, 247, 224, 0.15)',
        'cyber-sm': '0 0 10px rgba(6, 247, 224, 0.1)',
        'cyber-lg': '0 0 30px rgba(6, 247, 224, 0.2)',
      },
      keyframes: {
        'cyber-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 247, 224, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(6, 247, 224, 0.3)' }
        }
      },
      animation: {
        'cyber-glow': 'cyber-glow 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};