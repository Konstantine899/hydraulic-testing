import React, { useState, useEffect } from 'react';

import { loadingModels } from '../../../../model/services/loadingModels.js';

export default function Row(props) {
  const organization = props.organization;
  const buildingList = organization.buildings.map(function (building, index) {
    return <p key={index}>{building.address}</p>;
  });
  return (
    <>
      <tr>
        <td>{organization.name}</td>
        <td>{buildingList}</td>
      </tr>
    </>
  );
}
