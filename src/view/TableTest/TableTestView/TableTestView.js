import React from 'react';

import { RowTestView } from '../RowTestView/RowTestView.js';

const testData = {
  id: 1,
  org: "Магазин 'Веста'",
  img:
    'https://www.flaticon.com/svg/vstatic/svg/4478/4478348.svg?token=exp=1618313344~hmac=fc69241ee052cf59631f6c0cc28ea57d',
  objects: [
    {
      address: 'Чкалова 1',
      pipelines: [
        { d: 59, l: 100.53 },
        { d: 118, l: 66.73 },
      ],
    },
    {
      address: 'Ленина 3',
      pipelines: [
        { d: 33, l: 77.12 },
        { d: 59, l: 111.44 },
      ],
    },
  ],
};

export const TableTestView = () => {
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
          <RowTestView rowTestData={testData} />
        </tbody>
      </table>
    </React.Fragment>
  );
};
