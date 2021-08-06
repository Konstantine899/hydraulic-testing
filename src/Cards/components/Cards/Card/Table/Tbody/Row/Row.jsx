import React, { createContext } from 'react';

import { ObjectTest } from './ObjectTest/ObjectTest.jsx';
import { PipelineD } from './PipelineD/PipelineD.jsx';
import { PipelineL } from './PipelineL/PipelineL.jsx';

import './Row.scss';

export const CheckboxContext = createContext();

function Row({ rowData }) {
  return rowData.map(function (objectTest, objectTestIndex) {
    return objectTest.pipelines.map(function (pipeline, pipelineIndex) {
      return (
        <tr
          key={`${objectTest.address} + ${objectTestIndex} + ${pipelineIndex}`}
        >
          <CheckboxContext.Provider value={{ Checked: objectTest }}>
            <ObjectTest pipelineIndex={pipelineIndex} objectTest={objectTest} />
          </CheckboxContext.Provider>
          <PipelineD millimeter={pipeline.d} />
          <PipelineL meter={pipeline.l} />
        </tr>
      );
    });
  });
}

export default Row;
