import { createTheme } from '@mui/material';
import hexToRgba from 'hex-to-rgba';

const globalTheme = {
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
};

export const theme = createTheme({
  ...globalTheme,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: globalTheme.palette.primary.main,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: globalTheme.palette.primary.main,
            },
            '&:hover fieldset': {
              borderColor: globalTheme.palette.primary.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: globalTheme.palette.primary.main,
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          background: globalTheme.palette.background.default,
          overflow: 'hidden',
        },
        body: {
          backgroundColor: `${globalTheme.palette.background.default}!important`,
          minHeight: '100vh',
        },

        '	.MuiIconButton-root': {
          color: `${globalTheme.palette.text.primary}!important`,

          '& svg': {
            width: '2rem',
            height: '2rem',
          },
        },

        '.MuiButtonBase-root:disabled': {
          color: 'rgba(255, 255, 255, 0.40)!important',
        },

        '.simplebar-scrollbar': {
          '&::before': {
            background: `${globalTheme.palette.primary.main}!important`,
            pointerEvents: 'all!important',
            borderRadius: '8px!important',
          },
        },

        '.Toastify__toast': {
          backgroundColor: `${hexToRgba(globalTheme.palette.primary.main, 0.2)}!important`,
          border: `1px solid ${globalTheme.palette.primary.main}`,
          borderRadius: '8px',
        },

        // '.Toastify__toast--rtl': {
        //   backgroundColor: hexToRgba(globalTheme.palette.primary.main, 0.9),
        // },

        '.Toastify__toast-body': {
          color: globalTheme.palette.text.primary,
          fontFamily: globalTheme.typography.fontFamily,
        },
      },
    },
  },
});
