import React, { useContext } from 'react';
import { GlobalButtonContext } from '../../../context/GlobalButtonContext/GlobalButtonContext.js';
import Button from '@material-ui/core/Button';
import './OffButton.scss';

export const OffButton = () => {
  const { handleGlobalOffButton } = useContext(GlobalButtonContext);
  return (
    <Button
      variant="contained"
      color="secondary"
      className="CardsOffButton"
      onClick={() => handleGlobalOffButton()}
    >
      Снять все
    </Button>
  );
};