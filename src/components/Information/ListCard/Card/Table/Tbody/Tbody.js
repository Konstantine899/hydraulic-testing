import React from 'react';

import Row from './Row/Row.js';

function Tbody({ tbodyData }) {
  const rowData = tbodyData.map(function (objectTest) {
    return {
      id: objectTest.id,
      address: objectTest.address,
      pipelines: objectTest.pipelines,
    };
  });

  return (
    <tbody>
      <Row rowData={rowData} />
    </tbody>
  );
}

export default Tbody;
