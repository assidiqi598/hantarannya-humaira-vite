/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '600px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      black: {
        400: "#212121",
        600: "#101010",
        900: "#000000"
      },
      white: '#ffffff',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
      pink: {
        200: '#ffeff4',
        600: '#8C5C6A'
      },
      indigo: {
        50: "#E8EAF6"
      },
      deeppurple: {
        50: "#EDE7F6",
        A400: "#651FFF",
        600: "#311B92",
        A700: "#6200EA"
      },
      purple: {
        50: "#F3E5F5",
        100: "#E1BEE7",
        A100: "#EA80FC",
        A400: "#D500F9",
        A700: "#AA00FF"
      },
      lightblue: {
        50: "#E1F5FE",
        A400: "#00B0FF"
      },
      yellow: {
        200: "#fff4d4"
      }
    },
    extend: {
      transitionDelay: {
        '0': '0ms',
        "400": "400ms",
        "800": "800ms",
        "900": "900ms",
        "1100": "1100ms",
        '2000': '2000ms',
      },
      backgroundImage: {
        'main-intro': "url('assets/main-intro-bg.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

