//components/app/App.js
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TableContainer } from '../../view/Table/TableContainer/TableContainer.js';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={TableContainer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
