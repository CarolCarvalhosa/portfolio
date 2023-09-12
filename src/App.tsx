import React from 'react';
import Routes from './routes';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
}

export default App;
