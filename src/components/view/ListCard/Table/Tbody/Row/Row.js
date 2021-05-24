import React from 'react';

import './Row.scss';

// Выводит строку с адресом

function Row(props) {
  let Row = props.Row;

  console.log('Row', Row);
  return Row.map(function (rowAddress, rowAddressIndex) {
    return (
      <tr key={`${rowAddress.addressList} + ${rowAddressIndex}`}>
        <td>{rowAddress.addressList}</td>
      </tr>
    );
  });
}

export default Row;
