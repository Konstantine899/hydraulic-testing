import React from 'react';

import { data } from '../../../Temp/123.js';

import { TableView } from './TableView.js';

export const Table = () => {
  return (
    <React.Fragment>
      <TableView organizations={data} />
    </React.Fragment>
  );
};
