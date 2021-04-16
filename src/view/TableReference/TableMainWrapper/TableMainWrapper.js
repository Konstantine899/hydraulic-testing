import React from 'react';

import './TableMainWrapper.scss';

import { TableMain } from '../TableMain/TableMain';

export const TableMainWrapper = () => {
  return (
    <>
      <div className="TableMainWrapper">
        <p>Обертка таблицы</p>
        <TableMain />
      </div>
    </>
  );
};
