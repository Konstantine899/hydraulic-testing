import React, { createContext, useState, useEffect } from 'react';

import { loadingModels } from '../../services/api/loadingModels.js';
import { useData } from '../../services/api/context/DataContext/DataContext.js';
import { ButtonContextProvider } from '../../services/api/context/ButtonContext/buttonContext.js';

import { Card } from './Card/Card.js';

import './listCard.scss';

// Создаю контекст для карточки

export const CardContext = createContext();

export function ListCard() {
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

  return isData.map(function (data) {
    return (
      <div key={data.id} className="listCards">
        <CardContext.Provider value={{ data }}>
          <ButtonContextProvider>
            <Card />
          </ButtonContextProvider>
        </CardContext.Provider>
      </div>
    );
  });
}
