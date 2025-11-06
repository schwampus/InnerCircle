import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  cssVarPrefix: 'joy',
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
    dark: {
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

          // SOLID VARIANT
          ...(ownerState.variant === 'solid' && {
            color: '#fff',
            // Primary solid
            ...(!ownerState.disabled && ownerState.color === 'primary' && {
              backgroundColor: theme.vars.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.vars.palette.primary.dark,
              },
              '&:active': {
                backgroundColor: theme.vars.palette.primary.darker,
              },
            }),
            // Secondary solid
            ...(!ownerState.disabled && ownerState.color === 'secondary' && {
              color: 'var(--purple-main)',
              backgroundColor: theme.vars.palette.secondary.main,
              '&:hover': {
                backgroundColor: theme.vars.palette.secondary.dark,
              },
              '&:active': {
                backgroundColor: theme.vars.palette.secondary.darker,
              },
            }),
          }),

          // OUTLINED VARIANT
          ...(ownerState.variant === 'outlined' && {
            backgroundColor: 'transparent',
            border: '2px solid',
            // Primary outlined
            ...(!ownerState.disabled && ownerState.color === 'primary' && {
              borderColor: theme.vars.palette.primary.main,
              color: theme.vars.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.vars.palette.primary.main,
                color: '#fff',
              },
            }),
            // Secondary outlined
            ...(!ownerState.disabled && ownerState.color === 'secondary' && {
              borderColor: theme.vars.palette.secondary.main,
              color: theme.vars.palette.secondary.main,
              '&:hover': {
                backgroundColor: theme.vars.palette.secondary.main,
                color: 'var(--purple-main)',
              },
            }),
          }),

          // Disabled state
          ...(ownerState.disabled && {
            backgroundColor: 'var(--purple-darker)',
            color: 'var(--purple-lighter)',
            cursor: 'not-allowed',
            border: ownerState.variant === 'outlined' ? '2px solid var(--purple-lighter)' : 'none',
          }),
        }),
      },
    },
  }
});

export default theme;