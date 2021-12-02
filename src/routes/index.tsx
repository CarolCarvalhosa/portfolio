import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Readme from '../pages/Readme';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/portfolio/:id" component={Portfolio} />
    <Route path="/readme/:key/:id" component={Readme} />
  </Switch>
);

export default Routes;
