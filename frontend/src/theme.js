import { extendTheme } from "@mui/joy/styles";


const theme = extendTheme({
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
});

export default theme;