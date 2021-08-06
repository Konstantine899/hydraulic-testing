import React, { useState, createContext } from 'react';

export const ButtonsCardContext = createContext();

export const ButtonsCardContextProvider = ({ children }) => {
  const [stateButton, setStateButton] = useState([0, 0]);

  const handleEnableButton = () => {
    return setStateButton([stateButton[0] + 1, stateButton[1]]);
  };

  const handleOffButton = () => {
    return setStateButton([stateButton[0], stateButton[1] + 1]);
  };

  return (
    <ButtonsCardContext.Provider
      value={{ handleEnableButton, handleOffButton, stateButton }}
    >
      {children}
    </ButtonsCardContext.Provider>
  );
};
