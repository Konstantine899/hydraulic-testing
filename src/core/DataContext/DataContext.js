import React, { createContext, useContext, useState } from 'react';

import { searchService } from '../../Search/service/searchService/searchService.js';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isData, setData] = useState(searchService);

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
