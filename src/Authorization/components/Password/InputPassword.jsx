import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core';

export const InputPassword = forwardRef((props, ref) => {
  return (
    <TextField
      type="password"
      placeholder="Введите пароль"
      label="Введите пароль"
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      color="primary"
      {...props}
    />
  );
});
