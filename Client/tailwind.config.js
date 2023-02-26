/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '128':'32rem'
      },

      fontSize: {
        '10xl': '12.3076923077vw',
        '9xxl': '6.3076923077vw',
        '8xxl': '4.2076923077vw'
      },

      fontFamily: {
        anton : ["Anton", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        passion : ["Passion One"],
        sofia: ["Sofia Sans Extra Condensed", "sans-serif"],
        alice: ["Alice","sans-serif"],
        cutive: ['Cutive Mono', 'monospace']
      },

      width: {
        '400': '22rem',
        '550': '34rem'
      },

      height: {
        '620': '39rem'
      },
      borderRadius: {
        'lg': '15%'
      },
      fontWeight: {
        '500': '500'
      },
      letterSpacing: {
        '-.04em': '-.04em;'
      },
      lineHeight: {
        '.82': '.82',
      },

      keyframes: {
        fadein: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeleft: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        }
        
      },
      animation: {
        fadein: 'fadein 2s ease normal ',
        fadeleft: 'fadeleft 2s ease normal ',
      },

    },
  },
  plugins: [],
}