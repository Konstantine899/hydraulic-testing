import React, { useState, useEffect, useContext } from 'react';

import { loadingModels } from '../../model/services/loadingModels.js';

import { useData } from '../../model/services/DataContext/DataContext.js';

import Card from './Card/Card.js';

import './listCard.scss';

function ListCard() {
  const [data, setData] = useState([]);

  // Отлавливаю данные из DataContext.js
  let nameOrg = useData().data.nameOrg;
  let address = useData().data.address;
  let applicant = useData().data.applicant;
  let implementer = useData().data.implementer;

  useEffect(
    function () {
      loadingModels(nameOrg, address, applicant, implementer).then(
        (resolve) => {
          setData(resolve);
        },
        (reason) => {
          console.log('в данном блоке обработка сценария ошибок', reason);
          setData([]);
        }
      );
    },
    [nameOrg, address, applicant, implementer] // слежу за изменениями
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
