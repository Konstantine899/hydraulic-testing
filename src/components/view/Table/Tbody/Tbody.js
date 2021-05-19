import React from 'react';

import Row from './Row/Row.js';

import './Tbody.scss';

function Tbody(props) {
  let data = props.data;
  console.log(data);
  const listRows = data.map((organization, indexOrg) => (
    <Row key={indexOrg} organization={organization} />
  ));
  return <tbody>{listRows}</tbody>;
}

export default Tbody;
