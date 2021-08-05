import React, { createContext, useContext } from 'react';
import { CardContext } from '../../../Cards.jsx';

import Row from './Row/Row.jsx';

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
