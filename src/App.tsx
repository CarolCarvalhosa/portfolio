import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
