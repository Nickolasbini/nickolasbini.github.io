/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', 
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'deep-sea': 'var(--deep-sea)',
        'silver': 'var(--silver)',
        'green-sea': 'var(--green-sea)',
        'lazuli': 'var(--lazuli)',
        'dark-sea': 'var(--dark-sea)',

        'purple-suit': '#952597',
        'sea-serpent': '#53c3c4',
        'oxford-blue': '#0b1c47',
        'iron': '#d4d5d5',
        'gray': '#5c5e5e',
        'light-gray': '#f8f8f8',
        'secondary': '#424153',
        'danger': '#ff3131',
        'light-white': '#fbfbfb',
        'carrot': 'orange',
        'cream': 'gray'
      }
    },

    screens : { 
      'xs': '514px',
      'sm' : '640px' , 
      'md' : '768px' , 
      'lg' : '1024px' , 
      'xl' : '1280px' , 
      '2xl' : '1536px' , 
    },
    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    }
  },
  plugins: [],
}
