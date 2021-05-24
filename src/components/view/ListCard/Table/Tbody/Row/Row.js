import React from 'react';

import './Row.scss';

// На каждой итерации выводит строку в которой содержится адрес, длинна и диаметр трубы

function Row(props) {
  let Row = props.Row;

  return Row.map(function (rowAddress, rowAddressIndex) {
    return rowAddress.pipelineList.map(function (pipeline, pipelineIndex) {
      return (
        <tr
          key={`${rowAddress.addressList} + ${rowAddressIndex} + ${pipelineIndex}`}
        >
          <td>{rowAddress.addressList}</td>
          <td>{pipeline.d}</td>
          <td>{pipeline.l}</td>
        </tr>
      );
    });
  });
}

export default Row;
