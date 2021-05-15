import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TablePage from '../pages/TablePage/TablePage.js';

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={TablePage} />
        </Switch>
      </Router>
    </>
  );
}
