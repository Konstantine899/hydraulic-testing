import React, { useContext } from 'react';
import { objectTestContext } from '../Row.js';
import { FormControlLabel } from '@material-ui/core';
import { HandleCheckbox } from '../Checkbox/handleCheckbox.js';

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
