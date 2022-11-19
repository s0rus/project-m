import { createTheme } from '@mui/material';
import hexToRgba from 'hex-to-rgba';

const globalTheme = {
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
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
      main: '#622afa',
      light: '#622afa',
      hover: '#8960f7',
      active: '#4523a1',
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

//paper: '#18181b',
//dark: '#0e0e10',

export const gradients = {
  gradientPaper: `#0e0e10`,
  playlistUnlocked: `linear-gradient(-90deg, ${hexToRgba(globalTheme.palette.success.light, 0)} -20%,  ${hexToRgba(
    globalTheme.palette.success.dark,
    0.45
  )} 100%)`,
  playlistLocked: `linear-gradient(-90deg, ${hexToRgba(globalTheme.palette.error.light, 0)} -20%,  ${hexToRgba(
    globalTheme.palette.error.dark,
    0.45
  )} 100%)`,
  currentVideo: `#0e0e10`,
  gradientMain: `linear-gradient(220deg, ${hexToRgba(globalTheme.palette.primary.main, 0)} 0%,  ${hexToRgba(
    globalTheme.palette.primary.main,
    0.3
  )} 100%)`,
  gradientDark: `linear-gradient(220deg, ${hexToRgba(globalTheme.palette.primary.main, 0)} 0%,  ${hexToRgba(
    globalTheme.palette.primary.main,
    0.3
  )} 100%)`,
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

    MuiSelect: {
      styleOverrides: {
        select: {
          outline: 'none',
          background: gradients.gradientMain,
          boxShadow: 'none',
        },
        icon: {
          color: globalTheme.palette.primary.contrastText,
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
        root: {
          background: `${globalTheme.palette.primary.main}`,
          color: 'white',
          borderRadius: '0.4rem',
          textTransform: 'capitalize',
          ':hover': {
            background: `${globalTheme.palette.primary.hover}`,
          },
          ':active': {
            background: `${globalTheme.palette.primary.active}`,
          },
        },
        iconSizeLarge: {
          '& > *:nth-of-type(1)': {
            fontSize: 24,
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: `${globalTheme.palette.primary.main}`,
          textTransform: 'capitalize',
          transition: '0.2s',
          ':hover': {
            color: `${globalTheme.palette.primary.hover}`,
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

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: `${globalTheme.palette.primary.main}`,
          borderRadius: '0.5rem',
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src:
            local(''), 
            url('/fonts/poppins-v20-latin-regular.woff') format('woff'),
            url('/fonts/poppins-v20-latin-regular.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src:
            local(''), 
            url('/fonts/poppins-v20-latin-500.woff') format('woff'),
            url('/fonts/poppins-v20-latin-500.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src:
            local(''), 
            url('/fonts/poppins-v20-latin-600.woff') format('woff'),
            url('/fonts/poppins-v20-latin-600.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src:
            local(''), 
            url('/fonts/poppins-v20-latin-700.woff') format('woff'),
            url('/fonts/poppins-v20-latin-700.woff2') format('woff2');
        }
        html {
          background: ${globalTheme.palette.background.default};
          overflow: hidden;
        }
        body {
          background: #141417!important;
          min-height: 100vh;
        }
        .MuiIconButton-root {
          color: ${globalTheme.palette.text.primary}!important;
          & svg {
            width: 2rem;
            height: 2rem;
          }
        }
        .MuiButtonBase-root:disabled {
          color: rgba(255, 255, 255, 0.40)!important;
        }
        .simplebar-scrollbar {
          &::before {
            background: ${globalTheme.palette.primary.main}!important;
            pointer-events: all!important;
            border-radius: 0.5rem!important;
          }
        }
        .Toastify__toast {
          background-color: ${globalTheme.palette.background.paper}!important;
          border: 1px solid ${globalTheme.palette.primary.main};
          borderRadius: 0.5rem;
        }
        .Toastify__toast-body {
          color: ${globalTheme.palette.text.primary};
          font-family: ${globalTheme.typography.fontFamily};
        }
        
        .react-page-split__divider {
          &:focus{
            background-color: ${globalTheme.palette.primary.main}!important;
            transition: 0.1s;
            height: 100vh;
            cursor: col-resize;
            touch-action: pan-x;
            border-radius: 20px;
          }
          &:hover {
            background-color: #3a3740;
            transition: 0.2s;
            cursor: col-resize;
            height: 100vh;
            border-radius: 20px;
          }
        }
        .react-page-split__divider--horizontal {
          background: #141417;
          max-width: 6px;
          transition: 0.1s;
          cursor: col-resize;
          touch-action: pan-x;
          height: 100vh;
          border-radius: 20px;
          &:hover{
            max-width: 10px;
          }
          &:active{
            max-width: 10px;
          }
        },`,
    },
  },
});
