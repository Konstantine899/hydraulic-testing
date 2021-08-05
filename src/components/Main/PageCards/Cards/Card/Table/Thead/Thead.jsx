import React from 'react';

import './Thead.scss';

import {
  TH_ADDRESS_ORG,
  TH_PIPELINES_D,
  TH_PIPELINES_L,
} from '../../../../../../../constants/table/constTh.js';

function Thead() {
  return (
    <thead>
      <tr>
        <th>{TH_ADDRESS_ORG} </th>
        <th>{TH_PIPELINES_D}</th>
        <th>{TH_PIPELINES_L}</th>
      </tr>
    </thead>
  );
}

export default Thead;