import React from 'react';

import Table from '../../view/Table/Table.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Routes(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Table} />
        </Switch>
      </Router>
    </>
  );
}
