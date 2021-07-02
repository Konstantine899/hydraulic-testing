import React from 'react';

import Thead from '../Thead/Thead.js';
import Tbody from '../Tbody/Tbody.js';

export default function BasicTable({ tableData }) {
  return (
    <table>
      <Thead />
      <Tbody tbodyData={tableData} />
    </table>
  );
}
