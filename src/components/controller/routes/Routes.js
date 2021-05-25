import React from 'react';

import Main from '../../view/layouts/Main.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Routes(props) {
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
