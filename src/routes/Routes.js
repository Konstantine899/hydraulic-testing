import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthContext } from '../Authorization/context/AuthContext.js';

import { CardsPage } from '../pages/CardsPage/CardsPage.jsx';

export default function Routes() {
  let { auth } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={CardsPage} />
          <Route
            render={() => (
              <h1 style={{ color: 'red', textAlign: 'center' }}>
                404 СТРАНИЦА НЕ НАЙДЕНА
              </h1>
            )}
          />
        </Switch>
      </Router>
    </>
  );
}
