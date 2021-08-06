import React, { createContext, useState, useEffect } from 'react';

import { httpLoading } from '../../../core/http/httpLoading.js';
import { useData } from '../../../core/DataContext/DataContext.js';
import { ButtonsCardContextProvider } from '../../context/ButtonsCardContext/ButtonsCardContext.js';

import { OnButton } from '../Buttons/OnButton/OnButton.jsx';
import { OffButton } from '../Buttons/OffButton/OffButton.jsx';

import { Card } from './Card/Card.jsx';

import './Cards.scss';

// Создаю контекст для карточки

export const CardContext = createContext();

export function Cards() {
  const [isData, setData] = useState([]);

  // Отлавливаю данные из DataContext.js

  let sort = useData().isData;

  useEffect(
    function () {
      httpLoading(sort).then(
        (resolve) => {
          setData(resolve);
        },
        (reason) => {
          console.log('в данном блоке обработка сценария ошибок', reason);
          setData([]);
        }
      );
    },
    Object.values(sort) // слежу за изменениями
  );

  const cardsList = isData.map((data) => (
    <div key={data.id} className="listCards">
      <CardContext.Provider>
        <ButtonsCardContextProvider>
          <Card data={data} />
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
