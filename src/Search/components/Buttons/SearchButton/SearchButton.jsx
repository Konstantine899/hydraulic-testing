import React from 'react';

import { Button } from '@material-ui/core';

export function SearchButton(props) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      {...props}
    >
      Поиск
    </Button>
  );
}
