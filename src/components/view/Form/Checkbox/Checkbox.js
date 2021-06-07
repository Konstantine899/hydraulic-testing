import React from 'react';

export function Checkbox(props) {
  return props.pipelineIndex > 0 ? null : (
    <td rowSpan={props.objectTest.pipelines.length}>
      <input type="checkbox" />
    </td>
  );
}
