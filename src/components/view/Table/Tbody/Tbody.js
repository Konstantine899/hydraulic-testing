import React from 'react';

import Row from './Row/Row.js';

import './Tbody.scss';

function Tbody(props) {
  let data = props.data;

  const listRows = data.map((organization) => (
    <Row key={organization.id} organization={organization} />
  ));
  return <tbody>{listRows}</tbody>;
}

export default Tbody;
