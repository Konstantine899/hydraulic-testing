import React, { createContext, useContext, useState } from 'react';

import { clearService } from '../../Search/service/clearService.js';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isData, setData] = useState(clearService);

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
