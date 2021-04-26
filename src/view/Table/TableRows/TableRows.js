import React from 'react';
import './TableRows.scss';

export const TableRows = (props) => {
  return props.dataRows.map(function orgList(organization) {
    return organization.objects.map(function orgAddress(orgAddress) {
      return orgAddress.pipelines.map(function pipelineList(pipeline) {
        console.log(pipeline);
        return (
          <tr>
            <td>{organization.org}</td>
            <td>{orgAddress.address}</td>
            <td>{pipeline.d}</td>
            <td>{pipeline.l}</td>
          </tr>
        );
      }, orgAddress);
    }, organization);
  });
};
