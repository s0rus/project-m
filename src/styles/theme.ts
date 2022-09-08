import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.2rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    subtitle1: {
      fontWeight: '700',
      fontSize: '1.2rem',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '0.85rem',
    },
  },

  palette: {
    primary: {
      main: '#6430ff',
      light: '#F91880',
      contrastText: '#EFEFF1',
    },

    background: {
      default: '#18181B',
      paper: '#0E0E10',
    },

    text: {
      primary: '#EFEFF1',
      secondary: '#85ABBE',
    },
  },

  shape: {
    borderRadius: '8px',
  },
  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          background: '#1e2028',
          overflow: 'hidden',
        },
        body: {
          backgroundColor: '#1e2028!important',
          minHeight: '100vh',
        },

        '	.MuiIconButton-root': {
          color: '#EFEFF1!important',

          '& svg': {
            width: '2rem',
            height: '2rem',
          },
        },

        '.MuiButtonBase-root:disabled': {
          color: 'rgba(255, 255, 255, 0.40)!important',
        },

        '.MuiDivider-withChildren': {
          '&::before, &::after': {
            borderTopColor: '#6430ff!important',
          },
        },

        '.simplebar-scrollbar': {
          '&::before': {
            background: '#6430ff!important',
            pointerEvents: 'all!important',
            borderRadius: '8!important',
          },
        },
      },
    },
  },
});
