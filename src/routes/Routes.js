import React from 'react';

import { AuthorizationPage } from '../pages/AuthtorizationPage/AuthorizationPage.jsx';
import { CardsPage } from '../pages/CardsPage/CardsPage.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={AuthorizationPage} />
          <Route path="/search" component={CardsPage} />
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
