import { createTheme } from '@mui/material';
import hexToRgba from 'hex-to-rgba';

const globalTheme = {
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      cursor: 'default',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.8rem',
      cursor: 'default',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.5rem',
      cursor: 'default',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.2rem',
      cursor: 'default',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'default',
    },
    subtitle1: {
      fontWeight: '700',
      fontSize: '1.2rem',
      cursor: 'default',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '0.85rem',
      cursor: 'default',
    },
  },

  palette: {
    primary: {
      main: '#7c3dda',
      light: '#6430ff',
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

    success: {
      light: '#81c784',
      main: '#66bb6a',
      dark: '#388e3c',
    },

    error: {
      light: '#ff2c2c',
      main: '#fa2c46',
      dark: '#ad1e30',
    },
  },

  shape: {
    borderRadius: '8px',
  },
  spacing: 8,
};

export const gradients = {
  gradientPaper: '#18181b',
  playlistUnlocked: `linear-gradient(220deg, ${hexToRgba(globalTheme.palette.success.light, 0)} 0%,  ${hexToRgba(
    globalTheme.palette.success.dark,
    0.2
  )} 100%)`,
  playlistLocked: `linear-gradient(220deg, ${hexToRgba(globalTheme.palette.error.light, 0)} 0%,  ${hexToRgba(
    globalTheme.palette.error.dark,
    0.2
  )} 100%)`,
  currentVideo: `rgba(255,255,255,0.1);`,
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

    MuiPaper: {
      styleOverrides: {
        root: {
          background: gradients.gradientPaper,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          background: globalTheme.palette.background.paper,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        iconSizeLarge: {
          '& > *:nth-of-type(1)': {
            fontSize: 24,
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: `${globalTheme.palette.primary.contrastText}`,
          textDecoration: 'none',
          transition: 'color 0.2s ease-in-out',

          '&:hover': {
            color: `${globalTheme.palette.primary.main}`,
          },
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
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
          zIndex: '999',
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