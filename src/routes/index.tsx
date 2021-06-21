import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio/:key" component={Portfolio} />
    </Switch>
);

export default Routes;
