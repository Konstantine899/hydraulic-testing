import React from 'react';

import Main from '../Main/Main.js';

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
