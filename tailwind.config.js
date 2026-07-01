/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1d1d1f',
        ash: '#6e6e73',
        fog: '#f5f5f7',
        mist: '#fbfbfc',
        line: '#e6e6ea',
        amber: '#ffc94d',
        orange: {
          DEFAULT: '#ff8a3d',
          deep: '#f6a623',
        },
        honey: '#ffe8b8',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grad-2': 'linear-gradient(120deg,#ff8a3d 0%,#ffc94d 100%)',
        'grad-1': 'linear-gradient(135deg,#fff7e6 0%,#ffe2b0 45%,#ffb866 100%)',
        'grad-soft': 'radial-gradient(circle at 30% 30%, rgba(255,201,77,.35), transparent 60%)',
      },
      boxShadow: {
        sm2: '0 2px 10px rgba(29,29,31,.06)',
        md2: '0 12px 40px rgba(255,138,61,.18)',
        lg2: '0 30px 80px rgba(29,29,31,.12)',
      },
      keyframes: {
        float1: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(-40px,50px) scale(1.08)' } },
        float2: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(50px,-30px) scale(.94)' } },
        float3: { '0%,100%': { transform: 'translate(0,0)' }, '50%': { transform: 'translate(-30px,-40px)' } },
        bob: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        pulseDot: { '0%,100%': { boxShadow: '0 0 0 0 rgba(255,138,61,.5)' }, '70%': { boxShadow: '0 0 0 8px rgba(255,138,61,0)' } },
        scrollLeft: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        rise: { from: { opacity: 0, transform: 'translateY(28px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        rippleAnim: { to: { transform: 'scale(3)', opacity: 0 } },
      },
      animation: {
        float1: 'float1 16s ease-in-out infinite',
        float2: 'float2 18s ease-in-out infinite',
        float3: 'float3 13s ease-in-out infinite',
        bob: 'bob 5.5s ease-in-out infinite',
        pulseDot: 'pulseDot 1.8s infinite',
        scrollLeft: 'scrollLeft 32s linear infinite',
        rise: 'rise .9s cubic-bezier(.22,1,.36,1) forwards',
        ripple: 'rippleAnim .6s linear',
      },
    },
  },
  plugins: [],
}
