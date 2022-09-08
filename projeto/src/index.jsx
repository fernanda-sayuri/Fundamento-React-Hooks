import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import Home from './templates/App';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />

      {/* importando css global */}
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>
);

