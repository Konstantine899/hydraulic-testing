import React from 'react';

import { RowOrg } from './RowOrg/RowOrg.js';
import './TableTbody.scss';

// Данный компонент выводит строки организаций через компонент RowOrg

// В пропсах должно быть массив состоящий из объектов организаций

export const TableTbody = (props) =>
  props.ArrayOrgs.map((org) => (
    <tbody>
      <RowOrg rowOrg={org} />
    </tbody>
  ));
