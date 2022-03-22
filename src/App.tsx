import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL ?? 'portfolio'}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
