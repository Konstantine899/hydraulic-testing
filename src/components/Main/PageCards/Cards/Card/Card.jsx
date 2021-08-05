import React, { useContext } from 'react';

import { CardContext } from '../Cards.jsx';

import Requisite from './Requisite/Requisite.jsx';
import Table from './Table/Table/Table.jsx';

import { EnableButton } from './ButtonsCard/EnableButton/EnableButton.jsx';
import { OffButton } from './ButtonsCard/OffButton/OffButton.jsx';

import './Card.scss';

export function Card() {
  const { data } = useContext(CardContext);

  // Получение реквизитов заявки
  const requisiteData = {
    name: data.name, // Наименование организации
    year: data.year, // Дата заявки
    request_person_name: data.request_person_name, // ФИО заявителя
    request_person_appointment: data.request_person_appointment, // должности заявителя
    makers_name: data.makers_name, // Исполнитель ФИО
    makers_appointment: data.makers_appointment, // Исполнитель Должность
    makers_phone: data.makers_phone, // телефон исполнителя
  };

  return (
    <div className="Card">
      <Requisite requisiteData={requisiteData} />
      <div className="CardButton">
        <EnableButton />
        <OffButton />
      </div>
      <Table tableData={data.objectHydraulicTest} />
    </div>
  );
}
