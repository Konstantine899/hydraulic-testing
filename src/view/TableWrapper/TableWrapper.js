import React from 'react';
import './TableWrapper.scss';

import { TableTh } from '../TableTh/TableTh.js';
import { TableTd } from '../TableTd/TableTd.js';

export const TableWrapper = () => {
  return (
    <>
      <div className="TableWrapper">
        TableWrapper
        <TableTh />
        <TableTd />
      </div>
    </>
  );
};
