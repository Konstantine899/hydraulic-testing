import React from 'react';

export const Org = (props) => {
  let dataOrg = props.data;

  const listItemOrg = dataOrg.map((itemOrg) => {
    return (
      <div>
        <p>{itemOrg.org}</p> <img src={itemOrg.img} alt="" />
      </div>
    );
  });

  return (
    <>
      <div>Вывод списка организаций</div>
      {listItemOrg}
    </>
  );
};
