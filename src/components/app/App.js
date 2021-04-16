//components/app/App.js
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TableMainWrapper } from '../../view/TableReference/TableMainWrapper/TableMainWrapper.js';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={TableMainWrapper} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
