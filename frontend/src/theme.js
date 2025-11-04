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
          // Default to primary
          ...(!ownerState.disabled && ownerState.color === 'primary' && {
            backgroundColor: theme.vars.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.vars.palette.primary.dark,
            },
            '&:active': {
              backgroundColor: theme.vars.palette.primary.darker,
            },
          }),

          // Secondary color variant
          ...!ownerState.disabled && (ownerState.color === 'secondary' && {
            color: 'var(--purple-main)',
            backgroundColor: theme.vars.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.vars.palette.secondary.dark,
            },
            '&:active': {
              backgroundColor: theme.vars.palette.secondary.darker,
            },
          }),
          // Default fallback if no color specified
          ...(!ownerState.disabled && !ownerState.color && {
            backgroundColor: theme.vars.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.vars.palette.primary.darker,
            },
          }),
          // Disabled state using CSS variables
          ...(ownerState.disabled && {
            backgroundColor: 'var(--purple-darker)',
            color: 'var(--purple-lighter)',
            cursor: 'not-allowed',
            '&:hover': {
              backgroundColor: 'var(--orange-lighter)',
            },
            '&:active': {
              backgroundColor: 'var(--orange-lighter)',
            },
          }),
        }),
      },
    },

  }
});

export default theme;