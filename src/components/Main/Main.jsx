import React from 'react';

import { Filter } from './Filter/Filter.jsx';
import { PageCards } from './PageCards/PageCards.jsx';

import './Main.scss';

export function Main() {
  return (
    <div className="main">
      <Filter />
      <PageCards />
    </div>
  );
}
