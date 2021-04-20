import React from 'react';

// import { ObjectList } from './ObjectList.js';
import { OrganizationView } from './OrganizationView.js';

export const TableView = (props) => {
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Адрес</th>
            <th>D,мм</th>
            <th>L,м</th>
          </tr>
        </thead>
        <tbody>
          <OrganizationView nameOrg={props} />
        </tbody>
      </table>
    </React.Fragment>
  );
};
