import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core';

export const Login = forwardRef((props, ref) => {
  return (
    <TextField
      type="text"
      placeholder="Введите логин"
      label="Введите логин"
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      color="primary"
      {...props}
    />
  );
});
