import React, { useContext } from 'react';
import { GlobalButtonContext } from '../../../../services/context/GlobalButtonContext/GlobalButtonContext.js';
import './OnButton.scss';

export const OnButton = () => {
  const { handleGlobalOnButton } = useContext(GlobalButtonContext);
  return (
    <button className="CardsOnButton" onClick={() => handleGlobalOnButton()}>
      Выбрать все
    </button>
  );
};
