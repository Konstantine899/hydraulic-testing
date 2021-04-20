import React from 'react';

import { Pipelines } from './Pipelines';

export const ObjectList = (props) => {
  return (
    <React.Fragment>
      {props.objectList.map((object, index) => {
        return (
          <React.Fragment key={index}>
            <td>{object.address}</td>
            <Pipelines pipelines={object.pipelines} />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
