import React from 'react';
import './TableView.scss';
import { TableRows } from '../TableRows/TableRows.js';

import { data } from '../../../../Temp/123.js';

import { Table } from '../../Table_001/Table.js';

export const TableView = () => {
  return (
    <React.Fragment>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Адрес</th>
              <th>D,мм</th>
              <th>L,м</th>
            </tr>
          </thead>
          <tbody>
            <TableRows dataRows={data} />
          </tbody>
        </table>
      </div>
      <Table />
    </React.Fragment>
  );
};
