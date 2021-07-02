import React from 'react';

// import { Checkbox } from '../../../../Form/Checkbox/Checkbox.js';

import { ObjectTest } from './ObjectTest/ObjectTest.js';
import { PipelineD } from './PipelineD/PipelineD.js';
import { PipelineL } from './PipelineL/PipelineL.js';

import './Row.scss';

// На каждой итерации выводит строку в которой содержится адрес, длинна и диаметр трубы

function Row({ rowData }) {
  return rowData.map(function (objectTest, objectTestIndex) {
    return objectTest.pipelines.map(function (pipeline, pipelineIndex) {
      return (
        <tr
          key={`${objectTest.address} + ${objectTestIndex} + ${pipelineIndex}`}
        >
          <ObjectTest
            id={objectTest.id}
            pipelineIndex={pipelineIndex}
            objectTest={objectTest}
          />
          <PipelineD pipeline={pipeline} />
          <PipelineL pipeline={pipeline} />
        </tr>
      );
    });
  });
}

export default Row;
