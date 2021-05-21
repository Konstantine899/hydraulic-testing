import React from 'react';

import './Card.scss';

function Card(props) {
  let CardData = props.CardsData;
  console.log('Card', props);
  return (
    <div className="Card">
      <p>{CardData.id}</p>
    </div>
  );
}

export default Card;
