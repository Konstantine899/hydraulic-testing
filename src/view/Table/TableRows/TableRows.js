import React from 'react';
import { TableRow } from '../TableRow/TableRow.js';
import './TableRows.scss';

export const TableRows = (props) => {
  // props.dataRows.map((organization) => {
  //   organization.objects.map((orgAddress) => {
  //     orgAddress.pipelines.map((pipeline) => {
  //       console.log(
  //         organization.org,
  //         orgAddress.address,
  //         pipeline.l,
  //         pipeline.d
  //       );
  //       return organization.org, orgAddress.address, pipeline.l, pipeline.d;
  //     });
  //   });
  // });

  return (
    <tr>
      {props.dataRows.map((organization) =>
        organization.objects.map((orgAddress) => {
          orgAddress.pipelines.map((pipeline) => {
            console.log(pipeline.d);
            return <td>{pipeline.d}</td>;
          });
        })
      )}
    </tr>
  );
};
