import * as React from 'react';
import { Router, Route } from 'dva/router';
import HomePage from './routes/HomePage';
import NotFound from './routes/NotFound';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage} />
      <Route path="/*" component={NotFound} />
    </Router>
  );
}
