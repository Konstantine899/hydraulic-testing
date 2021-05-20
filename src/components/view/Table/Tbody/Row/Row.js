import React from 'react';

import { RowSpanOrg } from '../../../../model/services/calculations/RowSpanOrg.js';

function Row(props) {
  const organization = props.organization;

  const mergeRow = RowSpanOrg({
    CalcPipelines: organization,
  });

  return organization.buildings.map(function (building, indexBuilding) {
    return building.pipelines.map(function (pipeline, indexPipeline) {
      let Org =
        indexBuilding > 0 || indexPipeline > 0 ? null : (
          <td rowSpan={mergeRow}>{organization.name}</td>
        );

      let Address =
        indexPipeline > 0 ? null : (
          <td rowSpan={building.pipelines.length}>{building.address}</td>
        );

      let pipelineL = <td>{pipeline.l}</td>;
      let pipelineD = <td>{pipeline.d}</td>;

      return (
        // Каждый элемент JSX это индекс в массиве которому нужно задать уникальный ключ. Задаю в родительском элементе tr
        <tr key={`${organization.id} + ${building.id}  + ${pipeline.id}`}>
          {Org}
          {Address}
          {pipelineD}
          {pipelineL}
        </tr>
      );
    });
  });
}

export default Row;
