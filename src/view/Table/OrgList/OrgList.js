import React from 'react';

export const OrgList = (props) => {
  let orgListArray = props.orgList.map((organization) => {
    // return <td className="name">{organization.org}</td>;

    return organization.org ? (
      <tr>
        <td>{organization.org}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    ) : null;
  });

  return <React.Fragment>{orgListArray}</React.Fragment>;
};
