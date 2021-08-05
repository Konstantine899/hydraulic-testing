import React, { createContext, useContext } from 'react';
import { rowContext } from '../Tbody.jsx';

import { ObjectTest } from './ObjectTest/ObjectTest.jsx';
import { PipelineD } from './PipelineD/PipelineD.jsx';
import { PipelineL } from './PipelineL/PipelineL.jsx';

import './Row.scss';

export const pipelineContext = createContext();
export const objectTestContext = createContext();
export const CheckboxContext = createContext();

// На каждой итерации выводит строку в которой содержится адрес, длинна и диаметр трубы

function Row() {
  const { rowData } = useContext(rowContext);
  return rowData.map(function (objectTest, objectTestIndex) {
    return objectTest.pipelines.map(function (pipeline, pipelineIndex) {
      return (
        <tr
          key={`${objectTest.address} + ${objectTestIndex} + ${pipelineIndex}`}
        >
          <objectTestContext.Provider value={{ pipelineIndex, objectTest }}>
            <CheckboxContext.Provider value={{ Checked: objectTest }}>
              <ObjectTest />
            </CheckboxContext.Provider>
          </objectTestContext.Provider>

          <pipelineContext.Provider value={{ pipeline }}>
            <PipelineD />
            <PipelineL />
          </pipelineContext.Provider>
        </tr>
      );
    });
  });
}

export default Row;
