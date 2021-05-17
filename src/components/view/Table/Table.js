import React, { useEffect, useState } from 'react';

import Thead from './Thead/Thead.js';
import Tbody from './Tbody/Tbody.js';

import './Table.scss';
import { loadingModels } from './../../model/services/loadingModels.js';

export default function Table(props) {
  const [data, setData] = useState([]);

  useEffect(function () {
    loadingModels()
      .loadingData()
      .then(function (Result) {
        setData(Result);
      });
  }, []);

  return (
    <>
      <table>
        <Thead />
        <Tbody data={data} />
      </table>
    </>
  );
}
