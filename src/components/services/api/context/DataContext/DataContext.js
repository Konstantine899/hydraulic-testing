import React, { createContext, useContext, useState } from 'react';

import { getDefaultFilter } from '../../../formHandler/Filters.js';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isData, setData] = useState(getDefaultFilter);

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
