import React from 'react';
import { Button } from '@material-ui/core';

export function ClearButton({ resetButton }) {
  return (
    <Button onClick={resetButton} variant="contained" color="secondary">
      Очистить форму
    </Button>
  );
}
