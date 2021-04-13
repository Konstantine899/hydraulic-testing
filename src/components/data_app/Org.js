import React from 'react';

import { Address } from './Address';

export const Org = (props) => {
  let organizations = props.nav;

  const listItemOrganization = organizations.map((organization) => {
    const listItemAddress_01 = organization.objects.map((object) => (
      <li>
        <Address banana={object.address} />
      </li>
      // <li key={item.objects[0].address}>{item.objects[0].address}</li>
    ));

    return (
      <li key={organization.org}>
        {organization.org}
        <ul>{listItemAddress_01}</ul>
      </li>
    );
  });

  return (
    <ul>
      {listItemOrganization}
      {/* <li>{props.nav[0].objects[0].address}</li> */}
    </ul>
  );
};
