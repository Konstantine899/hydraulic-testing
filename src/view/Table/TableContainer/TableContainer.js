import React from 'react';
import './TableContainer.scss';

import { OrgList } from '../OrgList/OrgList.js';

import { data } from '../../../../Temp/123.js';

export const TableContainer = () => {
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
            <OrgList orgList={data} />
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
