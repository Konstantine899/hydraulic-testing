import React from 'react';

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

      let Address =
        pipelineIndex > 0 ? null : (
          <td rowSpan={objectTest.pipelines.length}>{objectTest.addresses}</td>
        );

      return (
        <tr
          key={`${objectTest.addresses} + ${objectTestIndex} + ${pipelineIndex}`}
        >
          {Checkbox}
          {Address}
          <td>{pipeline.d}</td>
          <td>{pipeline.l}</td>
        </tr>
      );
    });
  });
}

export default Row;
