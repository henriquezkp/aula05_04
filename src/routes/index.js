import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './RouteWrapper';
import Home from '../pages/home';
import Register from '../pages/register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} showHeader />
        <Route path="/register" exact component={Register} showHeader={false} />

        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
