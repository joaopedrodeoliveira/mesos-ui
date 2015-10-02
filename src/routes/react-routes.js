import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Nodes from '../pages/Nodes';
import Frameworks from '../pages/Frameworks';
import App from '../components/App';

export default (
  <Route name="app" path="/" handler={ App }>
    <Route name="nodes" path="/nodes" handler={ Nodes }/>
    <Route name="frameworks" path="/frameworks" handler={ Frameworks }/>
    <DefaultRoute handler={ Dashboard } />
    <NotFoundRoute handler={ NotFound } />
  </Route>
);
