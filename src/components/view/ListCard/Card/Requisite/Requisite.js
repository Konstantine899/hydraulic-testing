import React from 'react';

import './Requisite.scss';

function Requisite(props) {
  // вывод реквизитов
  return (
    <div className="requisite">
      <div>
        <p className="requisite_NameOrg">
          <strong>Наименование организации:</strong> {props.appData.name}
        </p>
      </div>
      <div className="requisite_Year">
        <p>
          <strong>Год:</strong> {props.appData.year}
        </p>
      </div>
      <div className="requisite_People">
        <div className="requisite_People_Applicant">
          <p>
            <strong>Заявитель</strong>
          </p>
          <p>
            <strong> ФИО:</strong> {props.appData.request_person_name}
          </p>
          <p>
            <strong> должность:</strong>{' '}
            {props.appData.request_person_appointment}
          </p>
        </div>
        <div className="requisite_People_Implementer">
          <p>
            <strong>Исполнитель</strong>
          </p>
          <p>
            <strong> ФИО:</strong> {props.appData.makers_name}
          </p>
          <p>
            <strong> должность:</strong> {props.appData.makers_appointment}
          </p>
          <p>
            <strong> телефон:</strong> {props.appData.makers_phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Requisite;
