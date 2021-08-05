import React from 'react';

import { Main } from '../components/Main/Main.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );
}
