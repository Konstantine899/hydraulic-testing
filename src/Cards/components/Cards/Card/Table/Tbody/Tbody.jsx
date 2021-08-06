import React from 'react';

import Row from './Row/Row.jsx';

function Tbody({ data }) {
  const rowData = data.objectHydraulicTest.map(function (objectTest) {
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
