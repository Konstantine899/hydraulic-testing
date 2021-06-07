import React, { forwardRef, useState } from 'react';
import { Checkbox } from '@material-ui/core';

export const HandleCheckbox = forwardRef((props, ref) => {
  const [checked, setChecked] = useState(false);

  // Слушаю событие клика
  const toggleCheckbox = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
  };

  return <Checkbox checked={checked} onChange={toggleCheckbox} />;
});
