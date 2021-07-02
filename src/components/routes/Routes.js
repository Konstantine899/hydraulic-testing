import React from 'react';

import { Information } from '../Information/Information.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Information} />
        </Switch>
      </Router>
    </>
  );
}
