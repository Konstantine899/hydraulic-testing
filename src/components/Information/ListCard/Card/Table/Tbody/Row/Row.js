import React, { createContext, useContext } from 'react';
import { rowContext } from '../Tbody.js';

import { ObjectTest } from './ObjectTest/ObjectTest.js';
import { PipelineD } from './PipelineD/PipelineD.js';
import { PipelineL } from './PipelineL/PipelineL.js';

import './Row.scss';

export const pipelineContext = createContext();
export const objectTestContext = createContext();

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
            <ObjectTest id={objectTest.id} />
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
