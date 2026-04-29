/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#05060a',
          900: '#0a0c12',
          800: '#11141c',
          700: '#1a1f2b',
        },
        accent: {
          DEFAULT: '#7c5cff',
          glow: '#9b8aff',
          electric: '#22d3ee',
          lime: '#a3e635',
        },
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)",
        'grid-dark': "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
        'radial-fade': 'radial-gradient(ellipse at top, rgba(124,92,255,.18), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,92,255,.3), 0 10px 40px -10px rgba(124,92,255,.45)',
        card: '0 1px 0 0 rgba(255,255,255,.04) inset, 0 10px 30px -10px rgba(0,0,0,.5)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'gradient-x': 'gradientX 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
