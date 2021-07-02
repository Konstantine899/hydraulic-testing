import React from 'react';
import { FormControlLabel } from '@material-ui/core';

import { HandleCheckbox } from '../../../../Checkbox/handleCheckbox.js';

export function ObjectTest({ pipelineIndex, objectTest }) {
  return pipelineIndex > 0 ? null : (
    <td rowSpan={objectTest.pipelines.length}>
      <FormControlLabel
        control={<HandleCheckbox id={objectTest.id} />}
        label={objectTest.address}
      />
    </td>
  );
}
