import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: "#101828"
    }
  },
  components: {

    // BUTTON THEMES
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          color: "#101828",
          minWidth: "100%",
          margin: '1em',
          backgroundColor: "#EAECF0",
          '&:hover': {
            backgroundColor: "#D0D5DD"
          }
        }
      }
    },

    // CONTAINER THEMES
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: '4em'
        }
      }
    },

    // TextField ThEME
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          paddingX: "1em",
          minWidth: "20vw",
        }
      }
    },

    // IMAGE STYLING
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: '88px',
          height: '88px'
        }
      }
    },

    // TYPOGRAPHY
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontWeight: 700,
          fontSize: '1.3em',
          lineHeight: '30px',
          padding: '1em'
        },
        h3: {
          fontWeight: 500,
          fontSize: '1.3em',
          lineHeight: '28px',
          padding: '1em',
          textTransform: "none"
        },
        h4: {
          fontWeight: 500,
          fontSize: '1.3em',
          lineHeight: '28px',
          padding: '1em',
          textTransform: "none"
        },
        h5: {
          fontWeight: 'light',
          fontSize: '16px',
          lineHeight: '24px',
          color: '#667085'
        },
        h6: {
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '20px',
          paddingBottom: '5px'
        }
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
