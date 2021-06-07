import React from 'react';

import { ObjectTest } from './ObjectTest/ObjectTest.js';
import { PipelineD } from './PipelineD/PipelineD.js';
import { PipelineL } from './PipelineL/PipelineL.js';

import './Row.scss';

// На каждой итерации выводит строку в которой содержится адрес, длинна и диаметр трубы

function Row(props) {
  return props.dataRow.map(function (objectTest, objectTestIndex) {
    return objectTest.pipelines.map(function (pipeline, pipelineIndex) {
      let Checkbox =
        pipelineIndex > 0 ? null : (
          <td rowSpan={objectTest.pipelines.length}>
            <input type="checkbox" />
          </td>
        );

      return (
        <tr
          key={`${objectTest.addresses} + ${objectTestIndex} + ${pipelineIndex}`}
        >
          {Checkbox}
          <ObjectTest pipelineIndex={pipelineIndex} objectTest={objectTest} />
          <PipelineD pipeline={pipeline} />
          <PipelineL pipeline={pipeline} />
        </tr>
      );
    });
  });
}

export default Row;
