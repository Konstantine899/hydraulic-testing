import React from 'react';

import './Row.scss';

// На каждой итерации выводит строку в которой содержится адрес, длинна и диаметр трубы

function Row(props) {
  let Row = props.Row;

  return Row.map(function (rowAddress, rowAddressIndex) {
    return rowAddress.pipelineList.map(function (pipeline, pipelineIndex) {
      let Checkbox =
        pipelineIndex > 0 ? null : (
          <td rowSpan={rowAddress.pipelineList.length}>
            <input type="checkbox" />
          </td>
        );

      let Address =
        pipelineIndex > 0 ? null : (
          <td rowSpan={rowAddress.pipelineList.length}>
            {rowAddress.addressList}
          </td>
        );

      return (
        <tr
          key={`${rowAddress.addressList} + ${rowAddressIndex} + ${pipelineIndex}`}
        >
          {/* <td rowSpan={rowAddress.length}>
            {rowAddressIndex}
            <input type="checkbox" />
          </td> */}
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
