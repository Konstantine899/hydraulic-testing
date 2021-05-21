import React from 'react';

import Thead from '../Thead/Thead.js';
import Tbody from '../Tbody/Tbody.js';

function Table(props) {
  const buildings = props.buildings;

  return (
    <table>
      <Thead />
      <Tbody buildings={buildings} />
    </table>
  );
}

export default Table;
