import React from 'react';
import { FormControlLabel } from '@material-ui/core';

// import { HandleCheckbox } from '../Tbody/Row/ObjectTest/Checkbox/handleCheckbox.js';

import './Thead.scss';

import {
  TH_ADDRESS_ORG,
  TH_PIPELINES_D,
  TH_PIPELINES_L,
} from '../../../../../../../constants/constTh.js';

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
