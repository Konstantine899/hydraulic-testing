import React from 'react';

import { Button } from '@material-ui/core';

function FilterButton({ children, props }) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      {...props}
    >
      Отфильтровать
    </Button>
  );
}

export default FilterButton;