import React from 'react';

import './Row.scss';

// На каждой итерации выводит строку в которой содержится адрес, длинна и диаметр трубы

function Row(props) {
  let Row = props.Row;

  return Row.map(function (rowAddress, rowAddressIndex) {
    return rowAddress.pipelineList.map(function (pipeline, pipelineIndex) {
      let Address =
        pipelineIndex > 0 ? null : (
          <td rowSpan={rowAddress.pipelineList.length}>
            {rowAddressIndex}
            {rowAddress.addressList}
          </td>
        );

      return (
        <tr
          key={`${rowAddress.addressList} + ${rowAddressIndex} + ${pipelineIndex}`}
        >
          {Address}
          <td>{pipeline.d}</td>
          <td>{pipeline.l}</td>
        </tr>
      );
    });
  });
}

export default Row;
