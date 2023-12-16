import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/team-project-SlimTrack360/welcome">
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
