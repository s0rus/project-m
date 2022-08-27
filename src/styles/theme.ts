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
      main: '#E01673',
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
          background: '#18181B',
          overflow: 'hidden',
        },
        body: {
          backgroundColor: '#18181B!important',
          minHeight: '100vh',
        },

        '.MuiButtonBase-root:disabled': {
          color: 'rgba(255, 255, 255, 0.40)!important',
        },

        '.MuiDivider-withChildren': {
          '&::before, &::after': {
            borderTopColor: '#7A46EE!important',
          },
        },

        '.simplebar-scrollbar': {
          '&::before': {
            background: '#E01673!important',
            pointerEvents: 'all!important',
            opacity: '1!important',
            borderRadius: '8!important',
          },
        },
      },
    },
  },
});
