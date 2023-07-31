import { Roboto } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: '#ff6464',
    },
    secondary: {
      light: '#edf7fa',
      main: '#00a8cc',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243d',
    },
  },
  typography: {
    fontFamily: 'Heebo, sans-serif',
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '730px',
          '@media (min-width: 600px)': {
            minWidth: '730px',
          },
        },
        maxWidthMd: {
          maxWidth: '910px',
          '@media (min-width: 900px)': {
            minWidth: '910px',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'black',

          '&:hover, &.active': {
            color: '#ff6464',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained',
            color: 'primary',
          },
          style: {
            color: 'white',
          },
        },
      ],
    },
  },
})

theme = responsiveFontSizes(theme)
