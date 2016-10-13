import { Router, Route } from 'dva/router';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component="" />
    </Router>
  );
}
