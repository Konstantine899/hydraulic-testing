import React from 'react';

import { Filter } from './Filter/Filter.js';
import { ListCard } from './ListCard/ListCard.js';

import './Information.scss';

export function Information() {
  return (
    <div className="main">
      <Filter />
      <ListCard />
    </div>
  );
}
