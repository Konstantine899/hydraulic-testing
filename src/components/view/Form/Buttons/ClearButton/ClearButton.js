import React from 'react';
import { Button } from '@material-ui/core';

function ClearButton(props) {
  const onReset = props.onReset;
  return (
    <Button onClick={onReset} variant="contained" color="secondary">
      Очистить форму
    </Button>
  );
}

export default ClearButton;
