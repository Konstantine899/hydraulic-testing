import React, { useContext } from 'react';
import { ButtonsCardContext } from '../../../../../context/ButtonsCardContext/ButtonsCardContext.js';
import Button from '@material-ui/core/Button';

import './OffButton.scss';

export const OffButton = () => {
  const { handleOffButton } = useContext(ButtonsCardContext);
  return (
    <Button
      variant="contained"
      color="secondary"
      className="OffButton"
      onClick={() => handleOffButton()}
    >
      Снять все
    </Button>
  );
};
