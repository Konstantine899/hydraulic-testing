import React from 'react';
import { GlobalButtonContextProvider } from '../context/GlobalButtonContext/GlobalButtonContext.js';
import { Cards } from './Cards/Cards.jsx';

export const PageCards = () => {
  return (
    <GlobalButtonContextProvider>
      <Cards />
    </GlobalButtonContextProvider>
  );
};
