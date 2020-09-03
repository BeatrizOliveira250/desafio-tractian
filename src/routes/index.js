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
        <Route component={() => <div>Page 404!!</div> } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
