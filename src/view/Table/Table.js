import React, { useEffect, useState } from 'react';

import { TableThead } from './TableThead/TableThead.js';
import { TableTbody } from './TableTbody/TableTbody.js';

import './Table.scss';

export const Table = () => {
  const urlApi =
    'http://metering.vts.vitebsk.energo.net/index.php?r=hydraulic/default/json';
  const [dataOrgs, setDataOrgs] = useState(null);

  const loadingData = async () => {
    const res = await fetch(urlApi);
    const data = await res.json();
    setDataOrgs(data);
  };

  useEffect(() => {
    loadingData();
  }, [urlApi]);

  if (typeof dataOrgs === 'undefined' || dataOrgs === null) {
    return <div></div>;
  }
  return (
    <table>
      <TableThead />
      <TableTbody TableBodyData={dataOrgs} />
    </table>
  );
};
