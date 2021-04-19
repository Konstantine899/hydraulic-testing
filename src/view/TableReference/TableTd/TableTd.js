import React from 'react';

import './TableTd.scss';

import { OrgList } from './OrgList/OrgList.js';

export const TableTd = (props) => {
  let tableTdOrg = props.TableTableWrapperData;

  // console.log(tableTdOrg);

  return (
    <>
      <OrgList tableTdOrg={tableTdOrg} />
    </>
  );
};
