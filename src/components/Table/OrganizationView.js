import React from 'react';

import { ObjectList } from './ObjectList';

export const OrganizationView = (props) => {
  return (
    <React.Fragment>
      {props.nameOrg.organizations.map((name) => (
        <tr>
          <td>{name.org}</td>
          <ObjectList objectList={name.objects} />
        </tr>
      ))}
    </React.Fragment>
  );
};
