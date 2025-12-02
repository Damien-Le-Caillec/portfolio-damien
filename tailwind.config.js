/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          sage: '#7A9B7A',
          forest: '#5F7C56',
          earth: '#8B6F47',
          terracotta: '#A67C52',
          cream: '#F4EDE1',
          paper: '#FFF8F0',
          wood: '#4D3F30',
          moss: '#6B8E6B',
          stone: '#9A8B7A',
          leaf: {
            light: '#A8C5A8',
            dark: '#4A6B4A',
          }
        }
      },
      fontFamily: {
        rainfolk: ['Rainfolk', 'serif'],
        theano: ['TheanoDidot', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 10px rgba(95, 124, 86, 0.05)',
        'card': '0 10px 20px rgba(95, 124, 86, 0.15)',
      }
    },
  },
  plugins: [],
}