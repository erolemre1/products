/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
  },
  theme: {
    extend: {
      colors: {
        "navy-blue":'#5533ff',
        white:'#fff',
        alto:'#2A59FE',
        black:'#000',
        gray: '#868da6',
        blue:'#2A59FE',
        'light-gray':'#898989',
        'black-haze':'#fafbfb',
        alabaster:'#F9F9F9'
      },
     
    },
    container: {
      center: true,
      screens: {
        xl: "1140px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
