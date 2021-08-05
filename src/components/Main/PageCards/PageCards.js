import React from 'react';
import { GlobalButtonContextProvider } from '../../../context/GlobalButtonContext/GlobalButtonContext.js';
import { Cards } from './Cards/Cards.js';

export const PageCards = () => {
  return (
    <GlobalButtonContextProvider>
      <Cards />
    </GlobalButtonContextProvider>
  );
};
