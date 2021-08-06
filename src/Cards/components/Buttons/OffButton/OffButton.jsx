import React, { useContext } from 'react';
import { GlobalButtonContext } from '../../../context/GlobalButtonContext/GlobalButtonContext.js';

export const OffButton = () => {
  const { handleGlobalOffButton } = useContext(GlobalButtonContext);
  return (
    <button className="CardsOffButton" onClick={() => handleGlobalOffButton()}>
      Снять все
    </button>
  );
};
