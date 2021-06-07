import React from 'react';

import Thead from '../Thead/Thead.js';
import Tbody from '../Tbody/Tbody.js';

export default function BasicTable(props) {
  const objectHydraulicTest = props.objectHydraulicTest;
  console.log('objectHydraulicTest', objectHydraulicTest);

  return (
    <table>
      <Thead />
      <Tbody objectHydraulicTest={objectHydraulicTest} />
    </table>
  );
}
