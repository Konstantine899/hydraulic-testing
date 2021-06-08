import React, { forwardRef, useState } from 'react';
import { Checkbox } from '@material-ui/core';

export const HandleCheckbox = forwardRef((props, ref) => {
  const [checked, setChecked] = useState(false);

  // Слушаю событие клика
  const toggleCheckbox = (event) => {
    const eventChecked = event.target.checked;
    setChecked(eventChecked);
    localStorage.setItem(`eventChecked ${props.id}`, eventChecked);
  };

  return <Checkbox checked={checked} onChange={toggleCheckbox} />;
});
