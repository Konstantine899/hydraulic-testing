import React from 'react';

import Row from './Row/Row.js';

export default function Tbody(props) {
  let data = props.data;
  console.log(data);
  const listRows = data.map(function (organization, index) {
    return <Row key={index} organization={organization} />;
  });

  return (
    <>
      <tbody>{listRows}</tbody>
    </>
  );
}
