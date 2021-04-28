import React from 'react';
import './TableRows.scss';

export const TableRows = (props) => {
  return props.dataRows.map(function (organization, orgIndex) {
    return organization.objects.map(
      function (orgAddress, orgAddressIndex) {
        return orgAddress.pipelines.map(
          function (pipeline, pipelineIndex) {
            let orgList = organization.org;
            let orgAddressList = orgAddress.address;
            let pipelineD = pipeline.d;
            let pipelineL = pipeline.l;

            // console.log(orgIndex, organization.org);

            return (
              <tr>
                {organization.org === organization.org ? (
                  <td>{organization.org}</td>
                ) : (
                  <td className="errorTd">Не привильное условие</td>
                )}

                <td>
                  <strong>{orgIndex}</strong>
                  {orgAddressList}
                </td>
                <td>{pipelineD}</td>
                <td>
                  <strong>{pipelineIndex}</strong> {pipelineL}
                </td>
              </tr>
            );
          },
          [, orgAddress, orgAddressIndex]
        );
      },
      [, organization, orgIndex]
    );
  });
};
