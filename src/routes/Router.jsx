import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { retry } from 'utils';

import ErrorBoundary from 'components/Error';
import Loading from 'components/Loading';

import ScrollToTop from './ScrollToTop';

const Game = lazy(() => retry(() => import('pages/Game')));
const Home = lazy(() => retry(() => import('pages/Home')));

const Router = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/game" component={Game} />
            <Redirect to="/home" />
          </Switch>
        </ScrollToTop>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);

export default Router;
