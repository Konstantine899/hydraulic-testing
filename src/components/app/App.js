//components/app/App.js
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TableView } from '../../view/Table/TableView/TableView.js';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={TableView} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
