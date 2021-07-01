import React from 'react';

import Row from './Row/Row.js';

function Tbody(props) {
  const dataRow = props.objectHydraulicTest.map(function (objectTest) {
    return {
      id: objectTest.id,
      address: objectTest.address,
      pipelines: objectTest.pipelines,
    };
  });

  return (
    <tbody>
      <Row dataRow={dataRow} />
    </tbody>
  );
}

export default Tbody;
