import React from 'react';

import Thead from '../Thead/Thead.js';
import Tbody from '../Tbody/Tbody.js';

export default function BasicTable(props) {
  return (
    <table>
      <Thead />
      <Tbody objectHydraulicTest={props.objectHydraulicTest} />
    </table>
  );
}
