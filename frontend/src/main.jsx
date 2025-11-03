import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";   
import theme from './theme.js';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
     <BrowserRouter> 
      <App />
     </BrowserRouter>
     </CssVarsProvider> 
  </StrictMode>,
)

