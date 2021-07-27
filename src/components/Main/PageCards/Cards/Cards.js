import React, { createContext, useState, useEffect, useContext } from 'react';

import { loadingModels } from '../../../services/api/loadingModels.js';
import { useData } from '../../../services/context/DataContext/DataContext.js';
import { ButtonsCardContextProvider } from '../../../services/context/ButtonsCardContext/ButtonsCardContext.js';

import { OnButton } from '../Buttons/OnButton/OnButton.js';
import { OffButton } from '../Buttons/OffButton/OffButton.js';

import { Card } from './Card/Card.js';

import './Cards.scss';

// Создаю контекст для карточки

export const CardContext = createContext();

export function Cards() {
  const [isData, setData] = useState([]);

  // Отлавливаю данные из DataContext.js

  let filters = useData().isData;

  useEffect(
    function () {
      loadingModels(filters).then(
        (resolve) => {
          setData(resolve);
        },
        (reason) => {
          console.log('в данном блоке обработка сценария ошибок', reason);
          setData([]);
        }
      );
    },
    Object.values(filters) // слежу за изменениями
  );

  const cardsList = isData.map((data) => (
    <div key={data.id} className="listCards">
      <CardContext.Provider value={{ data }}>
        <ButtonsCardContextProvider>
          <Card />
        </ButtonsCardContextProvider>
      </CardContext.Provider>
    </div>
  ));

  return cardsList.length > 0 ? (
    <div className="cardList">
      <div className="cardListButton">
        <OnButton />
        <OffButton />
      </div>
      {cardsList}{' '}
    </div>
  ) : null;
}
