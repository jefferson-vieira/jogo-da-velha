import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Game from 'pages/Game';
import Home from 'pages/Home';

import ScrollToTop from './ScrollToTop';

const Router = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/game" component={Game} />
        <Redirect to="/home" />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

export default Router;
