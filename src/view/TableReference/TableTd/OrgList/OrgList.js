import React from 'react';
import './OrgList.scss';

import { ObjectsList } from '../ObjectsList/ObjectsList.js';

export const OrgList = (props) => {
  let OrgListData = props.tableTdOrg;

  // console.log(OrgListData);

  const tdData = OrgListData.map((dataOrg) => {
    console.log(dataOrg);
    return (
      <React.Fragment key={dataOrg.org}>
        <tr>
          <td>{dataOrg.org}</td>
          <ObjectsList objects={dataOrg} />
        </tr>
      </React.Fragment>
    );
  });

  return <tbody>{tdData}</tbody>;
};
