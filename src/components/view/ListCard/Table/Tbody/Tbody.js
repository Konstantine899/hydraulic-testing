import React from 'react';

import Row from './Row/Row.js';

function Tbody(props) {
  let buildings = props.buildings;

  const Rows = buildings.map(function (address) {
    return {
      addressList: address.address,
      pipelineList: address.pipelines,
    };
  });

  return (
    <tbody>
      <Row Row={Rows} />
    </tbody>
  );
}

export default Tbody;
