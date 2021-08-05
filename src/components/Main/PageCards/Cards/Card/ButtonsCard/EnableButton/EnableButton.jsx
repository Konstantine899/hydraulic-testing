import React, { useContext } from 'react';
import { ButtonsCardContext } from '../../../../../../../context/ButtonsCardContext/ButtonsCardContext.js';
import './EnableButton.css';

export const EnableButton = () => {
  const { handleEnableButton } = useContext(ButtonsCardContext);
  return (
    <button className="EnableButton" onClick={() => handleEnableButton()}>
      Выбрать все
    </button>
  );
};
