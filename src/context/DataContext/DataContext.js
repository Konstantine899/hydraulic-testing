import React, { createContext, useContext, useState } from 'react';

import { sortService } from '../../services/formService/sortingFormService/sortService.js';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isData, setData] = useState(sortService);

  const setContext = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <DataContext.Provider value={{ isData, setContext }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
