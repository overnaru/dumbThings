import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from './containers/App/App';
import Landing from './components/Landing/Landing';

export default (
  <Route path="/" component={App}>
  	<Redirect path="*" to="/" />
  </Route>
);
