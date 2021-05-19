import React from 'react';

import { RowSpanOrg } from '../../../../model/services/calculations/RowSpanOrg.js';

function Row(props) {
  const organization = props.organization;

  // console.log('organization', organization);

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
          <td rowSpan={building.pipelines.length} key={indexBuilding}>
            {building.address}
          </td>
        );

      let pipelineL = <td key={indexPipeline.l}>{pipeline.l}</td>;
      let pipelineD = <td key={indexPipeline.d}>{pipeline.d}</td>;

      // console.log('Org', Org);
      // console.log('Address', Address);
      // console.log('PipelineD', pipelineD);
      // console.log('pipelineL  ', pipelineL);

      return (
        <React.Fragment>
          <tr>
            {Org}
            {Address}
            {pipelineD}
            {pipelineL}
          </tr>
        </React.Fragment>
      );
    });
  });
}

export default Row;
