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
        <Route component={() => (
          <div>
            <h1>Página 404</h1>
            <span>
              Acho que você se perdeu no caminho.
              <br />
              Clique no título acima e volte para a página inicial.
            </span>
          </div>
      )}
      />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
