import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loader from '../components/Loader';

const HomePage = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loader,
});

const ViewProjectPage = Loadable({
  loader: () => import('../pages/ViewProject'),
  loading: Loader,
});

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/project" component={ViewProjectPage} />
  </Switch>
);

export default Routes;
