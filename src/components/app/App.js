//components/app/App.js
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TableView } from '../../view/Table/TableView/TableView.js';

import { TableTestView } from '../../view/TableTest/TableTestView/TableTestView.js';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={TableView} />
          <Route path="/TableTestView" component={TableTestView} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
