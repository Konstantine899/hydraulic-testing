import React from 'react';

function Requisite(props) {
  const appData = props.appData;

  // вывод реквизитов
  return (
    <div className="requisite">
      <p>
        {' '}
        <strong>Наименование организации:</strong> {appData.name}
      </p>
      <p>
        {' '}
        <strong>Год:</strong> {appData.year}
      </p>
      <p>
        {' '}
        <strong>Заявитель ФИО:</strong> {appData.request_person_name}
      </p>
      <p>
        {' '}
        <strong>Заявитель должность:</strong>{' '}
        {appData.request_person_appointment}
      </p>
      <p>
        {' '}
        <strong>Исполнитель ФИО:</strong> {appData.makers_name}
      </p>
      <p>
        {' '}
        <strong>Исполнитель должность:</strong> {appData.makers_appointment}
      </p>
      <p>
        {' '}
        <strong>Исполнитель телефон:</strong> {appData.makers_phone}
      </p>
    </div>
  );
}

export default Requisite;
