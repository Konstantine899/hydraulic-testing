import React from 'react';

export const Pipelines = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      {props.pipelines.map((pipeline) => (
        <>
          <td>{pipeline.l}</td>
          <td>{pipeline.d}</td>
        </>
      ))}
    </React.Fragment>
  );
};
