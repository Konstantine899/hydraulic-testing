import React, { useState, useEffect, useContext } from 'react';

import { loadingModels } from '../../model/services/loadingModels.js';

import { useData } from '../../model/services/DataContext/DataContext.js';

import Card from './Card/Card.js';

import './listCard.scss';

function ListCard(props) {
  const [data, setData] = useState([]);

  let address = useData().data.address;

  useEffect(
    function () {
      loadingModels(address).then(
        (resolve) => {
          setData(resolve);
        },
        (reason) => {
          console.log('в данном блоке обработка сценария ошибок', reason);
          setData([]);
        }
      );
    },
    [address]
  );

  return data.map(function (obj) {
    return (
      <div key={obj.id} className="listCards">
        <Card key={obj} CardsData={obj} />
      </div>
    );
  });
}

export default ListCard;
