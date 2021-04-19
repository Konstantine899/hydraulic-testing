import React from 'react';

import './TableMain.scss';

import { TableFilter } from '../TableFilter/TableFilter.js';
import { TableWrapper } from '../TableWrapper/TableWrapper.js';

import { data } from '../../../../Temp/123.js';

export const TableMain = () => {
  return (
    <>
      <TableFilter />
      <TableWrapper TableMainData={data} />
    </>
  );
};
