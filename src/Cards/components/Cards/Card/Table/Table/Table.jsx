import React from 'react';

import Thead from '../Thead/Thead.jsx';
import Tbody from '../Tbody/Tbody.jsx';

export default function BasicTable({ data }) {
  return (
    <table>
      <Thead />
      <Tbody data={data} />
    </table>
  );
}
