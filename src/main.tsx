import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import {
  createTheme,
  ThemeProvider,
  unstable_createMuiStrictModeTheme,
} from '@mui/material/styles';

const createAppTheme =
  import.meta.env.NODE_ENV === 'production'
    ? createTheme
    : unstable_createMuiStrictModeTheme;
const theme = createAppTheme({});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
