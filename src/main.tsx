import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import StyleProvider from './StyleProvider.tsx';
import GlobalStyle from './config/global.style.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </StyleProvider>
  </React.StrictMode>
);
