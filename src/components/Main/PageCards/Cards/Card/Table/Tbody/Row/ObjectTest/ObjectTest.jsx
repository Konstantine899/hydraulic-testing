import React, { useContext } from 'react';
import { FormControlLabel } from '@material-ui/core';
import { objectTestContext } from '../Row.jsx';
import { HandleCheckbox } from '../Checkbox/handleCheckbox.jsx';

export function ObjectTest() {
  const { pipelineIndex, objectTest } = useContext(objectTestContext);
  return pipelineIndex > 0 ? null : (
    <td rowSpan={objectTest.pipelines.length}>
      <FormControlLabel
        control={<HandleCheckbox />}
        label={objectTest.address}
      />
    </td>
  );
}
