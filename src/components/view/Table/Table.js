import React, { useState, useEffect } from 'react';

import Thead from './Thead/Thead.js';
import Tbody from './Tbody/Tbody.js';

import './Table.scss';

import { urlApi } from '../../../core/services/api/urlApi.js';

export default function Table(props) {
  const [arrayData, setArrayData] = useState(null);

  const loadingData = async () => {
    try {
      const res = await fetch(urlApi);
      const data = await res.json();

      setArrayData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadingData();
  }, [urlApi]);

  if (typeof arrayData === 'undefined' || arrayData === null) {
    return <div></div>;
  }
  console.log('arrayData', arrayData);
  return (
    <table>
      <Thead />
      <Tbody />
    </table>
  );
}
