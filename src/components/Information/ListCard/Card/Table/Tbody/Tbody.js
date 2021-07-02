import React, { createContext, useContext } from 'react';
import { CardContext } from '../../../ListCard.js';

import Row from './Row/Row.js';

export const rowContext = createContext();

function Tbody() {
  const { data } = useContext(CardContext);

  const rowData = data.objectHydraulicTest.map(function (objectTest) {
    return {
      id: objectTest.id,
      address: objectTest.address,
      pipelines: objectTest.pipelines,
    };
  });

  return (
    <tbody>
      <rowContext.Provider value={{ rowData }}>
        <Row />
      </rowContext.Provider>
    </tbody>
  );
}

export default Tbody;
