import React, { createContext, useState } from 'react';

export const GlobalButtonContext = createContext();

export const GlobalButtonContextProvider = ({ children }) => {
  const [stateGlobalButton, setStateGlobalButton] = useState([0, 0]);

  const handleGlobalOnButton = () => {
    setStateGlobalButton([stateGlobalButton[0] + 1, stateGlobalButton[1]]);
  };

  const handleGlobalOffButton = () => {
    setStateGlobalButton([stateGlobalButton[0], stateGlobalButton[1] + 1]);
  };

  return (
    <GlobalButtonContext.Provider
      value={{ handleGlobalOnButton, handleGlobalOffButton, stateGlobalButton }}
    >
      {children}
    </GlobalButtonContext.Provider>
  );
};
