//components/app/App.js
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { Table } from '../Table/Table.js';
import { TableView } from '../../view/Table/TableWrapper/TableWrapper.js';

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
