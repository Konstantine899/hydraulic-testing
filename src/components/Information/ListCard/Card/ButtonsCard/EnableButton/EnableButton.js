import React, { useContext } from 'react';
import { ButtonContext } from '../../../../../services/api/context/ButtonContext/buttonContext.js';
import './EnableButton.css';

export const EnableButton = () => {
  const { handleEnableButton } = useContext(ButtonContext);
  return (
    <button className="EnableButton" onClick={() => handleEnableButton()}>
      Выбрать все
    </button>
  );
};
