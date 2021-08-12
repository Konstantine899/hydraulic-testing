import React, { useContext } from 'react';
import { ButtonsCardContext } from '../../../../../context/ButtonsCardContext/ButtonsCardContext.js';
import Button from '@material-ui/core/Button';

import './EnableButton.scss';

export const EnableButton = () => {
  const { handleEnableButton } = useContext(ButtonsCardContext);
  return (
    <Button
      className="EnableButton"
      variant="contained"
      color="primary"
      onClick={() => handleEnableButton()}
    >
      Выбрать все
    </Button>
  );
};
