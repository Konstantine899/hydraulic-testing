import React from 'react';

export const TbodyView = (props) => {
  const orgArray = props.data.map((orgList, index) =>
    orgList.org ? (
      <tr key={orgList.id}>
        <td>{orgList.org}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    ) : null
  );

  return <React.Fragment>{orgArray}</React.Fragment>;
};
