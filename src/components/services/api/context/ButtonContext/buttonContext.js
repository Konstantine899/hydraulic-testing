import React, { useState, createContext } from 'react';

export const ButtonContext = createContext();

export const ButtonContextProvider = ({ children }) => {
  const [stateButton, setStateButton] = useState([0, 0]);

  const handleEnableButton = () => {
    return setStateButton([stateButton[0] + 1, stateButton[1]]);
  };

  const handleOffButton = () => {
    return setStateButton([stateButton[0], stateButton[1] + 1]);
  };

  console.log(stateButton);

  return (
    <ButtonContext.Provider
      value={{ handleEnableButton, handleOffButton, stateButton }}
    >
      {children}
    </ButtonContext.Provider>
  );
};
