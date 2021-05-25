import React from 'react';

import Requisite from './Requisite/Requisite.js';
import Table from '../Table/Table/Table.js';

import './Card.scss';

function Card(props) {
  let CardData = props.CardsData;

  // Получение реквизитов заявки
  const applicationDetails = {
    name: CardData.name, // Наименование организации
    year: CardData.year, // Дата заявки
    request_person_name: CardData.request_person_name, // ФИО заявителя
    request_person_appointment: CardData.request_person_appointment, // должности заявителя
    makers_name: CardData.makers_name, // Исполнитель ФИО
    makers_appointment: CardData.makers_appointment, // Исполнитель Должность
    makers_phone: CardData.makers_phone, // телефон исполнителя
  };

  return (
    <div className="Card">
      <Requisite appData={applicationDetails} />
      <Table buildings={CardData.buildings} />
    </div>
  );
}

export default Card;
