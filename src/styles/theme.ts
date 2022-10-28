import { createTheme } from '@mui/material';
import hexToRgba from 'hex-to-rgba';

const globalTheme = {
  typography: {
    fontFamily: 'B612',
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
      main: '#4b2bff',
      light: '#4b2bff',
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
    borderRadius: '0.5rem',
  },
  spacing: 8,
};

export const gradients = {
  gradientPaper: '#18181b',
  playlistUnlocked: `linear-gradient(0deg, ${hexToRgba(globalTheme.palette.success.light, 0)} -20%,  ${hexToRgba(globalTheme.palette.success.dark,0.5)} 100%)`,
  playlistLocked: `linear-gradient(0deg, ${hexToRgba(globalTheme.palette.error.light, 0)} -20%,  ${hexToRgba(globalTheme.palette.error.dark,0.5)} 100%)`,
  gradientMain: ` hsla(118, 100%, 0%, 0.40)`,
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

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: `${hexToRgba(globalTheme.palette.background.paper, 0.50)}`,
          borderRadius: '0.5rem',
          color: 'white',
          width: '100%',
          boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.4)',
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
            marginLeft: '3px',
            marginRight: '-2px',
            background: `${globalTheme.palette.primary.main}!important`,
            pointerEvents: 'all!important',
            borderRadius: '8px!important',
            height: '65%',
          },
        },


        '.react-page-split__divider': {
          '&:focus': {
            backgroundColor: `${globalTheme.palette.primary.main}!important`,
            transition: `0.1s`,
            height: '100vh',
            cursor: 'col-resize',
            touchAction: 'pan-x',
            borderRadius: '20px',
          },
          '&:hover': {
            backgroundColor: `#3a3740`,
            transition: `0.5s`,
            cursor: 'col-resize',
            height: '100vh',
            borderRadius: '20px',
          },
        },

        '.react-page-split__divider--horizontal': {
          background: `#18181b`,
          maxWidth: `5px`,
          transition: `0.1s`,
          cursor: 'col-resize',
          touchAction: 'pan-x',
          height: '100vh',
          borderRadius: '20px',
        },

        '.Toastify__toast': {
          padding: '0',
          margin: '0',
          backgroundColor: `${hexToRgba(globalTheme.palette.background.paper, 0.90)}!important`,
          border: `2px solid ${globalTheme.palette.primary.main}`,
          borderRadius: '8px',
          zIndex: '999',
          boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
        },

        '.Toastify__toast-body': {
          padding: 0,
          margin: 0,
          color: globalTheme.palette.text.primary,
          fontFamily: globalTheme.typography.fontFamily,
        },
      },
    },
  },
});