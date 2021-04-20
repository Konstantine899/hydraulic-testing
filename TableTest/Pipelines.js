import React from 'react';

export const Pipelines = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      {props.pipelines.map((pipeline, index) => (
        <React.Fragment key={index}>
          <td>{pipeline.l}</td>
          <td>{pipeline.d}</td>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
