import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import DarkTheme from './themes/DarkTheme';

const theme = responsiveFontSizes(DarkTheme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
