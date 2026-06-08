/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        accent: '#00e5a0',
        surface: {
          DEFAULT: '#0d1117',
          2: '#161b22',
        },
        border: '#21262d',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 #00e5a040' },
          '50%': { boxShadow: '0 0 0 8px #00e5a000' },
        },
      },
    },
  },
  plugins: [],
};
