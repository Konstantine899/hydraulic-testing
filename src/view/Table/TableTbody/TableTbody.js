import React from 'react';

import { RowOrg } from './RowOrg/RowOrg.js';
import './TableTbody.scss';

// Данный компонент выводит строки организаций через компонент RowOrg

// В пропсах должно быть массив состоящий из объектов организаций

export const TableTbody = (props) => {
  return props.TableBodyData.map(function (org) {
    return (
      <tbody>
        <RowOrg RowDataOrg={org} />
      </tbody>
    );
  });
};
