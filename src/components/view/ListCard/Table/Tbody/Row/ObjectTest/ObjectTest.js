import React from 'react';

export function ObjectTest(props) {
  return props.pipelineIndex > 0 ? null : (
    <td rowSpan={props.objectTest.pipelines.length}>
      {props.objectTest.addresses}
    </td>
  );
}
