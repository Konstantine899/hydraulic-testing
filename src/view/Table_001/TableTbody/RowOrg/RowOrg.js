import React from 'react';

import { CalcRowSpanOrg } from '../CalcRowSpanOrg/CalcRowSpanOrg.js';

export const RowOrg = (props) => {
  return props.RowDataOrg.objects.map(function (AddressList, IndexAddress) {
    return AddressList.pipelines.map(function (pipelineList, IndexPipeline) {
      const rowspan = CalcRowSpanOrg({
        CalcDataPipelinesOrg: props.RowDataOrg,
      });

      let orgTd = <td rowSpan={rowspan}>{props.RowDataOrg.org}</td>;

      if (IndexAddress > 0 || IndexPipeline > 0) {
        orgTd = null;
      }

      return (
        <tr>
          {orgTd}
          <td>{AddressList.address}</td>
          <td>{pipelineList.d}</td>
          <td>{pipelineList.l}</td>
        </tr>
      );
    });
  });
};
