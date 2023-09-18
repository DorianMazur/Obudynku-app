import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(",")
  },
  palette: {
    primary: {
      main: "#00D066",
      light: "#CCF6E0",
      dark: "#00A652",
      contrastText: "rgba(255,255,255,0.87)"
    },
    secondary: {
      main: "#FFBD00",
      light: "#ffbd00",
      dark: "#ff4e00"
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #E4E6E899",
          borderRadius: 16
        }
      }
    },
    MuiButton: {
      defaultProps: {
        focusRipple: false,
        disableRipple: true
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          fontWeight: "600",
          borderRadius: "23px",
          "&:hover": {
            boxShadow: "none"
          }
        },
        sizeLarge: {
          fontSize: "0.875rem",
          height: 46
        },
        text: {
          color: "#8083A3",
          "&:hover": {
            color: "#000000"
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.85rem",
          lineHeight: "1.8em",
          color: "#000000"
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          background: "#ffffff !important",
          borderRadius: 6,
          "&:hover": {
            background: "#ffffff"
          },
          "&:focus": {
            background: "#ffffff"
          },
          "&:active": {
            background: "#ffffff"
          },
          "&:after": {
            borderBottom: "none !important"
          },
          "&:before": {
            borderBottom: "none !important"
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:placeholder": {
            color: "red"
          }
        }
      }
    }
  }
});
