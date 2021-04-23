import React from 'react';
import './TableRows.scss';

export const TableRows = (props) => {
  let Row = props.dataRows.map((organization) => {
    organization.objects.map((orgAddress, i) => {
      orgAddress.pipelines.map((pipeline, i) => {
        return <Row></Row>;
      });
    });
  });

  return { Row };
};
