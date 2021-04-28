import React from 'react';

import { Data } from './Data/Data.js';

import { TableThead } from './TableThead/TableThead.js';
import { TableTbody } from './TableTbody/TableTbody.js';

export const Table = () => {
  return (
    <table>
      <TableThead />
      <TableTbody TableBodyData={Data} />
    </table>
  );
};
