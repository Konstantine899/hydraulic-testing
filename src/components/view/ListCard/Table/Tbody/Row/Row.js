import React from 'react';

function Row(props) {
  let Row = props.Row;

  console.log('Row', Row);
  return (
    <tr>
      <td>{Row.address}</td>
    </tr>
  );
}

export default Row;
