//components/app/App.js
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Step1 } from '../data_app/Step1.js';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
