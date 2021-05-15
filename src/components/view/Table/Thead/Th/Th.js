import React from 'react';

import {
  TH_NAME_ORG,
  TH_ADDRESS_ORG,
  TH_PIPELINES_D,
  TH_PIPELINES_L,
} from '../../../../../core/constants/Table_const/Table_const.js';

import './Th.scss';

export default function Th(props) {
  return (
    <tr>
      <th>{TH_NAME_ORG}</th>
      <th>{TH_ADDRESS_ORG}</th>
      <th>{TH_PIPELINES_D}</th>
      <th>{TH_PIPELINES_L}</th>
    </tr>
  );
}
