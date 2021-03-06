import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';



import Ativos from '../pages/Ativos';
import Home from '../pages/Home';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ativos" exact component={Ativos} />
        <Route component={() => (
          <div>
            <h1>Página 404</h1>
            <span>
              Acho que você se perdeu no caminho.
            </span>
          </div>
      )}
      />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
