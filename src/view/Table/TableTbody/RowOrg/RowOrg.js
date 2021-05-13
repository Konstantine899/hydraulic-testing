import React from 'react';

import { CalcPipelines } from '../CalcRowSpanOrg/CalcRowSpanOrg.js';

import './RowOrg.scss';

// Компонент вывода одной организации в виде строки таблицы
// В пропс должно быть:

export const RowOrg = (props) => {
  const OrgRowSpan = CalcPipelines({
    CalcDataPipelinesOrg: props.RowDataOrg,
  });

  return props.RowDataOrg.objects.map(function (Address, IndexAddress) {
    return Address.pipelines.map(function (pipeline, IndexPipeline) {
      let orgTd = <td rowSpan={OrgRowSpan}>{props.RowDataOrg.org}</td>;
      let addressTd = (
        <td rowSpan={Address.pipelines.length}>{Address.address}</td>
      );

      if (IndexAddress > 0 || IndexPipeline > 0) {
        orgTd = null;
      }
      if (IndexPipeline > 0) {
        addressTd = null;
      }

      return (
        <tr>
          {orgTd}
          {addressTd}
          <td>{pipeline.d}</td>
          <td>{pipeline.l}</td>
        </tr>
      );
    });
  });
};
