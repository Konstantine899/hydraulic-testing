import React from 'react';
import { GlobalButtonContextProvider } from '../../Cards/context/GlobalButtonContext/GlobalButtonContext.js';
import { Cards } from '../../Cards/components/Cards/Cards.jsx';
import { Form } from '../../Search/components/Form.jsx';

export const PageCards = () => {
  return (
    <GlobalButtonContextProvider>
      <Form />
      <Cards />
    </GlobalButtonContextProvider>
  );
};
