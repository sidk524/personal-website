import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5b17d1',
        'primary-dark': '#4a12b0',
        'primary-light': '#6c29dd',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'wave-horizontal': 'waveHorizontal 4s ease-in-out infinite',
        'wave-vertical': 'waveVertical 5s ease-in-out infinite',
        'wave-diagonal': 'waveDiagonal 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'scan-horizontal': 'scanHorizontal 8s linear infinite',
        'scan-vertical': 'scanVertical 10s linear infinite',
        'cloud-drift-left-fast': 'cloudDriftLeftFast 5s ease-in-out infinite',
        'cloud-drift-right-fast': 'cloudDriftRightFast 7s ease-in-out infinite',
        'glow-flow-left': 'glowFlowLeft 9s ease-in-out infinite',
        'glow-flow-right': 'glowFlowRight 11s ease-in-out infinite',
        'glow-pulse-move': 'glowPulseMove 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #5b17d1, 0 0 10px #5b17d1, 0 0 15px #5b17d1' },
          '100%': { boxShadow: '0 0 10px #5b17d1, 0 0 20px #5b17d1, 0 0 30px #5b17d1' },
        },
        waveHorizontal: {
          '0%, 100%': { transform: 'translateX(-10%) translateY(0) scale(1)' },
          '50%': { transform: 'translateX(10%) translateY(-5%) scale(1.1)' },
        },
        waveVertical: {
          '0%, 100%': { transform: 'translateY(-10%) translateX(0) scale(1)' },
          '50%': { transform: 'translateY(10%) translateX(-5%) scale(1.1)' },
        },
        waveDiagonal: {
          '0%, 100%': { transform: 'translate(-10%, -10%) scale(1) rotate(0deg)' },
          '50%': { transform: 'translate(10%, 10%) scale(1.2) rotate(5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.7', filter: 'blur(80px)' },
          '50%': { opacity: '0.9', filter: 'blur(90px)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '33%': { transform: 'rotate(120deg) scale(1.1)' },
          '66%': { transform: 'rotate(240deg) scale(0.9)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        scanHorizontal: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scanVertical: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        cloudDriftLeftFast: {
          '0%, 100%': { transform: 'translateX(-15%) translateY(-8%) scale(1)' },
          '33%': { transform: 'translateX(5%) translateY(5%) scale(1.05)' },
          '66%': { transform: 'translateX(-5%) translateY(-3%) scale(0.95)' },
        },
        cloudDriftRightFast: {
          '0%, 100%': { transform: 'translateX(15%) translateY(8%) scale(1)' },
          '33%': { transform: 'translateX(-5%) translateY(-5%) scale(1.05)' },
          '66%': { transform: 'translateX(5%) translateY(3%) scale(0.95)' },
        },
        glowFlowLeft: {
          '0%, 100%': { transform: 'translateX(-20%) translateY(-10%) scale(1) rotate(-2deg)' },
          '50%': { transform: 'translateX(8%) translateY(8%) scale(1.1) rotate(2deg)' },
        },
        glowFlowRight: {
          '0%, 100%': { transform: 'translateX(20%) translateY(10%) scale(1) rotate(2deg)' },
          '50%': { transform: 'translateX(-8%) translateY(-8%) scale(1.1) rotate(-2deg)' },
        },
        glowPulseMove: {
          '0%, 100%': { transform: 'translateY(-5%) scale(0.95)', opacity: '0.8' },
          '50%': { transform: 'translateY(5%) scale(1.05)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config