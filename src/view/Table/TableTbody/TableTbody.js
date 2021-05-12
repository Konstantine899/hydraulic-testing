import React from 'react';

import { RowOrg } from './RowOrg/RowOrg.js';
import './TableTbody.scss';

export const TableTbody = (props) => {
  return (
    <tbody>
      <RowOrg RowDataOrg={props.TableBodyData} />
    </tbody>
  );
};
