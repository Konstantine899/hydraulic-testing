import React, { useState, useEffect } from 'react';

import { loadingModels } from '../../model/services/loadingModels.js';

import Thead from './Thead/Thead.js';
import Tbody from './Tbody/Tbody.js';

import './Table.scss';

function Table() {
  const [data, setData] = useState([]);

  useEffect(function () {
    loadingModels().then(
      (resolve) => {
        setData(resolve);
      },
      (reason) => {
        console.log('Превет2222', reason);
        setData([]);
      }
    );
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

export default Table;
