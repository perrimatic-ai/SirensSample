/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Particle Network Palette
        'ocean-depths': '#0a0e1a',
        'deep-current': '#1a1f35',
        'mystic-waters': '#0f1423',
        'aqua-dream': '#00d9ff',
        'soft-aqua': '#00d9ff',
        'gentle-teal': '#00bfff',
        'pearl-shimmer': '#E8F4F8',
        'moonlight-pearl': '#F5F5F5',
        'golden-ray': '#00d9ff',
        'sunbeam-gold': '#00bfff',
        'coral-whisper': '#5dfdff',
        'sea-foam': '#0099cc',
        'crystal-blue': '#00D9FF',
        'mermaid-silver': '#C0C0C0',
        'starfish-glow': '#5dfdff',
      },
      fontFamily: {
        'serif-elegant': ['Playfair Display', 'serif'],
        'sans-airy': ['Inter', 'sans-serif'],
      },
      animation: {
        'gentle-float': 'gentle-float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'wave-flow': 'wave-flow 8s ease-in-out infinite',
        'pearl-glow': 'pearl-glow 4s ease-in-out infinite',
        'particle-converge': 'particle-converge 8s ease-in-out infinite',
        'particle-pulse': 'particle-pulse 4s ease-in-out infinite',
        'ripple': 'ripple 2s ease-out infinite',
      },
      keyframes: {
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        'shimmer': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'wave-flow': {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(10px) translateY(-5px)' },
          '50%': { transform: 'translateX(-5px) translateY(-10px)' },
          '75%': { transform: 'translateX(-10px) translateY(-5px)' },
        },
        'pearl-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.3), 0 0 40px rgba(0, 217, 255, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 217, 255, 0.5), 0 0 60px rgba(0, 217, 255, 0.2)' },
        },
        'particle-converge': {
          '0%': { transform: 'translate(100px, 100px) scale(0)', opacity: '0' },
          '50%': { transform: 'translate(0, 0) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(-100px, -100px) scale(0)', opacity: '0' },
        },
        'particle-pulse': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 60px rgba(0, 217, 255, 0.8), 0 0 80px rgba(0, 217, 255, 0.4)' },
        },
        'ripple': {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #0a0e1a 0%, #1a1f35 50%, #0f1423 100%)',
        'underwater-light': 'radial-gradient(ellipse at center, rgba(0, 217, 255, 0.1) 0%, transparent 70%)',
        'pearl-shimmer': 'linear-gradient(45deg, #E8F4F8 0%, #F5F5F5 50%, #E8F4F8 100%)',
        'golden-rays': 'linear-gradient(45deg, transparent 30%, rgba(0, 217, 255, 0.1) 50%, transparent 70%)',
        'wave-pattern': 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 217, 255, 0.05) 2px, rgba(0, 217, 255, 0.05) 4px)',
      },
      backdropBlur: {
        'ocean': '20px',
      },
    },
  },
  plugins: [],
}