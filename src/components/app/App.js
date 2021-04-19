//components/app/App.js
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Table } from '../Table/Table.js';

import './App.scss';

function App() {
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

export default App;
