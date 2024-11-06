//@ts-check

// this file is now type checked!!

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
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
      themes: [
        {
          name: 'dark',
          extend: {
            colors: {
              // here I'm overriding a custom default
              secondary: {
                500: 'darkred'
              },
              // here I'm overriding a custom default too
              primary: {
                500: 'darkblue'
              }
            }
          }
        },
        {
          name: 'neon',
          extend: {
            colors: {
              secondary: {
                // here I'm overwriting a custom default again
                500: '#90A040' // as red as it gets
              }
              // im not overwriting the custom primary color I made ... I wonder what will happen ??? 🤔🤔🤔
            }
          }
        }
      ]
    })
  ]
}
