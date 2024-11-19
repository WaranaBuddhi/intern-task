import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import theme from "./theme/theme";
import { AuthProvider } from "./context/authContext";


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            "*": {
              margin: 0,
              padding: 0,
              boxSizing: "border-box",
              fontFamily: "Inter, sans-serif",
            },
          }}
        />
        <App />
    </ThemeProvider>
 </AuthProvider>
);
