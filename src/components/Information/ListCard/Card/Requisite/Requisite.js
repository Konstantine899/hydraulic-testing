import React from 'react';

import './Requisite.scss';

function Requisite({ requisiteData }) {
  // вывод реквизитов
  return (
    <div className="requisite">
      <div>
        <p className="requisite_NameOrg">
          <strong>Наименование организации:</strong> <br /> {requisiteData.name}
        </p>
      </div>
      <div className="requisite_Year">
        <p>
          <strong>Год:</strong> {requisiteData.year}
        </p>
      </div>
      <div className="requisite_People">
        <div className="requisite_People_Applicant">
          <p>
            <strong>Заявитель</strong>
          </p>
          <p>
            <strong> ФИО:</strong> {requisiteData.request_person_name}
          </p>
          <p>
            <strong> должность:</strong>{' '}
            {requisiteData.request_person_appointment}
          </p>
        </div>
        <div className="requisite_People_Implementer">
          <p>
            <strong>Исполнитель</strong>
          </p>
          <p>
            <strong> ФИО:</strong> {requisiteData.makers_name}
          </p>
          <p>
            <strong> должность:</strong> {requisiteData.makers_appointment}
          </p>
          <p>
            <strong> телефон:</strong> {requisiteData.makers_phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Requisite;
