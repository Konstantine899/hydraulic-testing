import React from 'react';

import Form from '../Form/Form.js';
import ListCard from '../ListCard/ListCard.js';

import './Main.scss';

function Main(props) {
  // console.log('MAIN', props);
  return (
    <div className="main">
      <Form />
      <ListCard />
    </div>
  );
}

export default Main;
