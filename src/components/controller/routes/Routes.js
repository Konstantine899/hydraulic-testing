import React from 'react';

import ListCard from '../../view/ListCard/ListCard.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Routes(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ListCard} />
        </Switch>
      </Router>
    </>
  );
}
