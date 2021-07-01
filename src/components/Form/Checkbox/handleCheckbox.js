import React, { forwardRef, useEffect, useState } from 'react';
import { Checkbox } from '@material-ui/core';

export const HandleCheckbox = forwardRef((props, ref) => {
  const [checked, setChecked] = useState(
    JSON.parse(localStorage.getItem(`eventChecked ${props.id}`))
  );

  // Слушаю событие клика
  const toggleCheckbox = (event) => {
    const eventChecked = event.target.checked;
    setChecked(eventChecked);
    localStorage.setItem(
      `eventChecked ${props.id}`,
      JSON.stringify(eventChecked)
    );
  };

  useEffect(() => {
    toggleCheckbox;
  }, [checked]);

  return <Checkbox checked={checked} onChange={toggleCheckbox} />;
});
