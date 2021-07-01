import React from 'react';

import Requisite from './Requisite/Requisite.js';
import Table from './Table/Table/Table.js';

import './Card.scss';

function Card(props) {
  // Получение реквизитов заявки
  const applicationDetails = {
    name: props.CardsData.name, // Наименование организации
    year: props.CardsData.year, // Дата заявки
    request_person_name: props.CardsData.request_person_name, // ФИО заявителя
    request_person_appointment: props.CardsData.request_person_appointment, // должности заявителя
    makers_name: props.CardsData.makers_name, // Исполнитель ФИО
    makers_appointment: props.CardsData.makers_appointment, // Исполнитель Должность
    makers_phone: props.CardsData.makers_phone, // телефон исполнителя
  };

  return (
    <div className="Card">
      <Requisite appData={applicationDetails} />
      <Table objectHydraulicTest={props.CardsData.objectHydraulicTest} />
    </div>
  );
}

export default Card;
