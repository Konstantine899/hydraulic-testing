import React, { createContext, useContext, useState } from 'react';
import { inputDefault } from './Inputs.js';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isData, setData] = useState(inputDefault);

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <DataContext.Provider value={{ isData, setValues }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
