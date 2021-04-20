import React from 'react';
import './TableWrapper.scss';

import { TbodyView } from '../TbodyView/TbodyView.js';

import { data } from '../../../../Temp/123.js';

export const TableView = () => {
  return (
    <React.Fragment>
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
          <TbodyView data={data} />
        </tbody>
      </table>
    </React.Fragment>
  );
};
