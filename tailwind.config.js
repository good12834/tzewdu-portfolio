/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{,ts,jsx,js,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C9933A',
          50: '#FDF8EE',
          100: '#F9EDD3',
          200: '#F2D9A4',
          300: '#E9C16E',
          400: '#D9A94A',
          500: '#C9933A',
          600: '#A8772E',
          700: '#875D24',
          800: '#6C4A1E',
          900: '#4A3214',
        },
        slate: {
          50: 'oklch(98.4% 0.003 247.858)',
          100: 'oklch(96.8% 0.007 247.896)',
          200: 'oklch(92.9% 0.013 255.508)',
          300: 'oklch(86.9% 0.022 252.894)',
          400: 'oklch(70.4% 0.04 256.788)',
          500: 'oklch(55.4% 0.046 257.417)',
          600: 'oklch(44.6% 0.043 257.281)',
          700: 'oklch(37.2% 0.044 257.287)',
          800: 'oklch(27.9% 0.041 260.031)',
          900: 'oklch(20.8% 0.042 265.755)',
          950: 'oklch(12.9% 0.042 264.695)',
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}