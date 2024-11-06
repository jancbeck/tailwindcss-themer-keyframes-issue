//@ts-check

// this file is now type checked!!

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          // here I'm specifying a custom default
          500: 'blue'
        },
        secondary: {
          500: 'red'
        }
        // uncomment this and see that this causes a type error
        // thisCausesATypeError: () => '💥 boom! 💥'
      },
      keyframes: {
        'App-logo-spin': {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        }
      }
    }
  },
  plugins: []
}
