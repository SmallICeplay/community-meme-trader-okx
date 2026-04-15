/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#080915',
          850: '#0d0d1a',
          800: '#111124',
          700: '#1a1a32',
          600: '#22223a',
          500: '#2d2d4e',
        },
        accent: {
          green: '#6366f1',
          red: '#ef4444',
          blue: '#3b82f6',
          yellow: '#eab308',
          purple: '#a855f7',
        }
      }
    }
  },
  plugins: [],
}
