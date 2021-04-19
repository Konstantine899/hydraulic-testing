import React from 'react';
import './TableWrapper.scss';

import { TableTh } from '../TableTh/TableTh.js';
import { TableTd } from '../TableTd/TableTd.js';

export const TableWrapper = (props) => {
  const TableWrapperData = props.TableMainData;
  return (
    <>
      <table>
        <TableTh />
        <TableTd TableTableWrapperData={TableWrapperData} />
      </table>
    </>
  );
};
