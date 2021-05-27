import React from 'react';

import './Requisite.scss';

function Requisite(props) {
  const appData = props.appData;

  // вывод реквизитов
  return (
    <div className="requisite">
      <div>
        <p className="requisite_NameOrg">
          <strong>Наименование организации:</strong> {appData.name}
        </p>
      </div>
      <div className="requisite_Year">
        <p>
          <strong>Год:</strong> {appData.year}
        </p>
      </div>
      <div className="requisite_People">
        <div className="requisite_People_Applicant">
          <p>
            <strong>Заявитель</strong>
          </p>
          <p>
            <strong> ФИО:</strong> {appData.request_person_name}
          </p>
          <p>
            <strong> должность:</strong> {appData.request_person_appointment}
          </p>
        </div>
        <div className="requisite_People_Implementer">
          <p>
            <strong>Исполнитель</strong>
          </p>
          <p>
            <strong> ФИО:</strong> {appData.makers_name}
          </p>
          <p>
            <strong> должность:</strong> {appData.makers_appointment}
          </p>
          <p>
            <strong> телефон:</strong> {appData.makers_phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Requisite;