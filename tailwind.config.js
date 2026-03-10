/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0f',
        'cyber-green': '#00ff41',
        'cyber-cyan': '#0ff0fc',
        'cyber-magenta': '#ff00ff',
        'cyber-orange': '#ff6b35',
        'cyber-surface': '#12121a',
        'cyber-surface-light': '#1a1a2e',
        'cyber-text': '#e0e0e0',
        'cyber-text-dim': '#888888',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'display': ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'cyber-green': '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
        'cyber-cyan': '0 0 10px #0ff0fc, 0 0 20px #0ff0fc, 0 0 30px #0ff0fc',
        'cyber-magenta': '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 1s linear infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
        'matrix-rain': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'matrix': 'linear-gradient(to bottom, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

