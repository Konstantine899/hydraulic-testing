import React from 'react';

import Row from './Row/Row.js';

function Tbody(props) {
  console.log('Tbody', props);
  let objectHydraulicTest = props.objectHydraulicTest;

  const Rows = objectHydraulicTest.map(function (objectTest) {
    return {
      addressList: objectTest.address,
      pipelineList: objectTest.pipelines,
    };
  });

  return (
    <tbody>
      <Row Row={Rows} />
    </tbody>
  );
}

export default Tbody;
