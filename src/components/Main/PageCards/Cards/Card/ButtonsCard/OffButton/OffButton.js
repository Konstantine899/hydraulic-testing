import React, { useContext } from 'react';
import { ButtonContext } from '../../../../../../services/context/ButtonContext/buttonContext.js';
import './OffButton.css';

export const OffButton = () => {
  const { handleOffButton } = useContext(ButtonContext);
  return (
    <button className="OffButton" onClick={() => handleOffButton()}>
      Снять все
    </button>
  );
};
