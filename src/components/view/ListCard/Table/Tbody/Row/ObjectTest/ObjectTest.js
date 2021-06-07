import React from 'react';
import { FormControlLabel } from '@material-ui/core';

import { HandleCheckbox } from '../../../../../Form/Checkbox/handleCheckbox.js';

export function ObjectTest(props) {
  return props.pipelineIndex > 0 ? null : (
    <td rowSpan={props.objectTest.pipelines.length}>
      <FormControlLabel
        control={<HandleCheckbox />}
        label={props.objectTest.address}
      />
    </td>
  );
}
