import React from 'react';

import './TableMain.scss';

import { TableFilter } from '../TableFilter/TableFilter.js';
import { TableWrapper } from '../TableWrapper/TableWrapper.js';

export const TableMain = () => {
  return (
    <>
      <div className="TableMain">
        <p>TableMain</p>
        <TableFilter />
        <TableWrapper />
      </div>
    </>
  );
};
