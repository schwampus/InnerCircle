import { extendTheme } from '@mui/joy/styles';



export const theme = extendTheme({


  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#F3F2F8',
          100: '#DAD7EA',
          200: '#C1BDDB',
          300: '#A9A2CD',
          400: '#9088BF',
          500: '#776DB0',  // LIGHTER
          600: '#504785',  // LIGHT
          700: '#322D54',  // MAIN <---
          800: '#201c36',  // DARK
          900: '#100E1B',  // DARKER
          lighter: '#776DB0',
          light: '#504785',
          main: '#322D54',
          dark: '#201c36',
          darker: '#100E1B',
        },
        secondary: {
          50: '#FFF8EB',
          100: '#FFEBC2',
          200: '#FFE1AD',
          300: '#FFDA99',
          400: '#FFD285',
          500: '#FFC663', // LIGHTER
          600: '#F5B23E', // LIGHT
          700: '#EB9E1A', // MAIN <-----
          800: '#E58E17', // DARK
          900: '#E07E15', // DARKER
          lighter: '#FFC663',
          light: '#F5B23E',
          main: '#EB9E1A',
          dark: '#E58E17',
          darker: '#E07E15',
        },
        neutral: {
          50: '#fcfcfc',
          100: '#f9f9f9',
          200: '#f4f4f4',
          300: '#efeff1',
          400: '#e7e7e9',
          500: '#d8d8dc',
          600: '#c2c2c7',
          700: '#a7a7af',
          800: '#8b8b99',
          900: '#71717a',
          light: '#F5F5F5',
          dark: '#212121',
          outline: '#71717a',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#F3F2F8',
          100: '#DAD7EA',
          200: '#C1BDDB',
          300: '#A9A2CD',
          400: '#9088BF',
          500: '#776DB0',  // LIGHTER
          600: '#504785',  // LIGHT
          700: '#322D54',  // MAIN <---
          800: '#201c36',  // DARK
          900: '#100E1B',  // DARKER
          lighter: '#776DB0',
          light: '#504785',
          main: '#322D54',
          dark: '#201c36',
          darker: '#100E1B',
        },
        secondary: {
          50: '#FFF8EB',
          100: '#FFEBC2',
          200: '#FFE1AD',
          300: '#FFDA99',
          400: '#FFD285',
          500: '#FFC663', // LIGHTER
          600: '#F5B23E', // LIGHT
          700: '#EB9E1A', // MAIN <-----
          800: '#E58E17', // DARK
          900: '#E07E15', // DARKER
          lighter: '#FFC663',
          light: '#F5B23E',
          main: '#EB9E1A',
          dark: '#E58E17',
          darker: '#E07E15',
        },
        neutral: {
          50: '#fcfcfc',
          100: '#f9f9f9',
          200: '#f4f4f4',
          300: '#efeff1',
          400: '#e7e7e9',
          500: '#d8d8dc',
          600: '#c2c2c7',
          700: '#a7a7af',
          800: '#8b8b99',
          900: '#71717a',
          light: '#F5F5F5',
          dark: '#212121',
          outline: '#71717a',
        },
      },
    },
  },
  typography: {
    // h1: {
    //   fontFamily: '"Climate Crisis", sans-serif',
    // },
    h2: {
      fontFamily: '"Kanit", sans-serif',
    },
  },
  fontFamily: {
    // display: '"Climate Crisis", sans-serif',
    body: '"Kanit", sans-serif',
  },


  Container: {
    maxWidth: {
      dvw: '50',
    },
  },

});









