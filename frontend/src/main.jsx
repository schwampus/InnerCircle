import { StrictMode } from 'react';
import { createRoot, ReactDOM } from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import { CssVarsProvider } from '@mui/joy/styles';
import {theme} from './theme.js'
import '@fontsource-variable/climate-crisis';
import '@fontsource/kanit/200.css';
import '@fontsource/kanit/400.css';
import '@fontsource/kanit/600.css';
import '@fontsource/kanit/800.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssVarsProvider theme={theme}  defaultMode="dark"
     >
       
    <App />
    
    </CssVarsProvider>
  </StrictMode>,
)


