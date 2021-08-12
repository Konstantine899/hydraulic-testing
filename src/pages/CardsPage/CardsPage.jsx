import React from 'react';
import { GlobalButtonContextProvider } from '../../Cards/context/GlobalButtonContext/GlobalButtonContext.js';
import { Header } from '../../Header/Header.jsx';
import { Cards } from '../../Cards/components/Cards/Cards.jsx';
import { Form } from '../../Search/components/Form.jsx';

import './CardsPage.scss';

export const CardsPage = () => {
  return (
    <GlobalButtonContextProvider>
      <Header />
      <div className="cardsPage">
        <div className="cardsPage_form">
          <Form />
        </div>
        <div className="cardsPage_cards">
          <Cards />
        </div>
      </div>
    </GlobalButtonContextProvider>
  );
};
