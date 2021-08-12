import React, { useContext } from 'react';
import { GlobalButtonContext } from '../../../context/GlobalButtonContext/GlobalButtonContext.js';
import Button from '@material-ui/core/Button';

import './OnButton.scss';

export const OnButton = () => {
  const { handleGlobalOnButton } = useContext(GlobalButtonContext);
  return (
    <Button
      variant="contained"
      color="primary"
      className="CardsOnButton"
      onClick={() => handleGlobalOnButton()}
    >
      Выбрать все
    </Button>
  );
};
