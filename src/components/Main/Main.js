import React from 'react';

import { Filter } from './Filter/Filter.js';
import { PageCards } from './PageCards/PageCards.js';

import './Main.scss';

export function Main() {
  return (
    <div className="main">
      <Filter />
      <PageCards />
    </div>
  );
}
