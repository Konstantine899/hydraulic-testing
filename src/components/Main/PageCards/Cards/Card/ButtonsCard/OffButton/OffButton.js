import React, { useContext } from 'react';
import { ButtonsCardContext } from '../../../../../../services/context//ButtonsCardContext/ButtonsCardContext.js';
import './OffButton.css';

export const OffButton = () => {
  const { handleOffButton } = useContext(ButtonsCardContext);
  return (
    <button className="OffButton" onClick={() => handleOffButton()}>
      Снять все
    </button>
  );
};
