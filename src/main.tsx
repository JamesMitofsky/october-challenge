import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/poppins";

let theme = createTheme({
  typography: {
    allVariants: {
      color: "#ffffff",
      fontFamily: "'Poppins', sans-serif",
    },
    h1: {
      fontSize: "1.8rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: ".6rem",
      fontWeight: 100,
      color: "#6c6d6f",
    },
  },
  palette: {
    primary: {
      main: "#18191d",
      light: "#2d2d2d",
      dark: "#6c6d6f",
    },
    background: {
      default: "#18191d",
      paper: "#18191d",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
