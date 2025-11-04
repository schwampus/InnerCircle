import { extendTheme } from "@mui/joy/styles";


const theme = extendTheme({
  fontFamily: {
    body: '"Kanit", sans-serif',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          lighter: "var(--purple-lighter)",
          light: "var(--purple-light)",
          main: "var(--purple-main)",
          dark: "var(--purple-dark)",
          darker: "var(--purple-darker)",

        },
        secondary: {
          lighter: "var(--orange-lighter)",
          light: "var(--orange-light)",
          main: "var(--orange-main)",
          dark: "var(--orange-dark)",
          darker: "var(--orange-darker)",

        },
      },
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          fontFamily: theme.vars.fontFamily.kanit,
          color: '#fff',

          // Example: hover, active, focus states
          '&:hover': {
            backgroundColor: theme.vars.palette.primary.dark,
          },
          '&:active': {
            backgroundColor: theme.vars.palette.primary.darker,
          },
        }),
      },
    },
   
  },
  });


export default theme;