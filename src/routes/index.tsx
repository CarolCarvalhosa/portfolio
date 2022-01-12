import React from 'react';
import { Routes as RRDRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Readme from '../pages/Readme';

const Routes: React.FC = () => (
  <RRDRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio/:id" element={<Portfolio />} />
    <Route path="/readme/:key/:id" element={<Readme />} />
  </RRDRoutes>
);

export default Routes;
