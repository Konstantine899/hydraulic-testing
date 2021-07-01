import React, { useState, useEffect } from 'react';

import { loadingModels } from '../../services/api/loadingModels.js';
import { useData } from '../../services/DataContext/DataContext.js';

import Card from './Card/Card.js';

import './listCard.scss';

export function ListCard() {
  const [isData, setData] = useState([]);

  // Просто для коммита

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

  return isData.map(function (obj) {
    return (
      <div key={obj.id} className="listCards">
        <Card key={obj} CardsData={obj} />
      </div>
    );
  });
}
