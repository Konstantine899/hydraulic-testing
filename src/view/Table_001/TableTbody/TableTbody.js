import React from 'react';

import { RowOrg } from './RowOrg/RowOrg.js';

export const TableTbody = (props) => {
  return (
    <tbody>
      <RowOrg RowDataOrg={props.TableBodyData} />
    </tbody>
  );
};
