/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#071A3A', 800: '#0B1F3A', 700: '#26364A', 900: '#08111F' },
        electric: { DEFAULT: '#1769FF', 400: '#287BFF', 300: '#5AA7FF', 100: '#E6F0FF', 50: '#F1F6FF' },
        mist: { DEFAULT: '#F7F9FC', 2: '#EEF4FA' },
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(7,26,58,.04), 0 8px 24px -8px rgba(7,26,58,.10)',
        lift: '0 2px 4px rgba(7,26,58,.04), 0 24px 48px -16px rgba(23,105,255,.22)',
        glow: '0 8px 30px -6px rgba(23,105,255,.55)',
      },
      borderColor: { hair: 'rgba(8,26,58,0.10)' },
      transitionTimingFunction: { apple: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      keyframes: {
        waveMove: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-4%)' } },
        drift: { '0%,100%': { transform: 'translate3d(0,0,0)' }, '50%': { transform: 'translate3d(0,-10px,0)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        aurora: { '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' }, '50%': { transform: 'translate3d(4%,-3%,0) scale(1.08)' } },
        pulseRing: { '0%': { transform: 'scale(.6)', opacity: '.7' }, '100%': { transform: 'scale(2.4)', opacity: '0' } },
      },
      animation: {
        wave: 'waveMove 14s ease-in-out infinite alternate',
        drift: 'drift 6s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        aurora: 'aurora 16s ease-in-out infinite',
        pulseRing: 'pulseRing 2.6s ease-out infinite',
      },
    },
  },
  plugins: [],
}
