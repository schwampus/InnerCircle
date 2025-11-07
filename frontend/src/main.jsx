import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import theme from "./theme.js";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./contexts/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssVarsProvider defaultMode="dark" theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </CssVarsProvider>
  </StrictMode>
);
