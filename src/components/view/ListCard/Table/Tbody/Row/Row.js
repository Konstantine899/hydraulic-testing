import React from 'react';

import './Row.scss';

function Row(props) {
  let Row = props.Row;

  const Address = Row.map(function (address, index) {
    return (
      <tr key={`${address.address} + ${index}`}>
        <td>{address.address}</td>
      </tr>
    );
  });

  console.log('Address', Address);

  return <React.Fragment>{Address}</React.Fragment>;
}

export default Row;
