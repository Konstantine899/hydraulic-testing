import React from 'react';
import { Button } from '@material-ui/core';

function ClearButton(props) {
  return (
    <Button onClick={props.onReset} variant="contained" color="secondary">
      Очистить форму
    </Button>
  );
}

export default ClearButton;
