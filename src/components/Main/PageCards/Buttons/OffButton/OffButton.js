import React, { useContext } from 'react';
import { GlobalButtonContext } from '../../../../services/context/GlobalButtonContext/GlobalButtonContext.js';
import './OffButton.scss';

export const OffButton = () => {
  const { handleGlobalOffButton } = useContext(GlobalButtonContext);
  return (
    <button className="CardsOffButton" onClick={() => handleGlobalOffButton()}>
      Снять все
    </button>
  );
};
