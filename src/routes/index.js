import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Ativos from '../pages/Ativos';
import Home from '../pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ativos" exact component={Ativos} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
