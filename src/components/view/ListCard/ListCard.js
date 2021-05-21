import React, { useState, useEffect } from 'react';

import { loadingModels } from '../../model/services/loadingModels.js';

import Card from './Card/Card.js';

import './listCard.scss';

function ListCard(props) {
  const [data, setData] = useState([]);

  useEffect(function () {
    loadingModels().then(
      (resolve) => {
        setData(resolve);
      },
      (reason) => {
        console.log('в данном блоке обработка сценария ошибок', reason);
        setData([]);
      }
    );
  }, []);

  console.log('Data from the server', data);

  return data.map(function (obj) {
    return (
      <div key={obj.id} className="listCards">
        <Card CardsData={obj} />
      </div>
    );
  });
}

export default ListCard;
