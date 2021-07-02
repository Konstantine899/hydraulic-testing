import React, { useContext } from 'react';
import { objectTestContext } from '../../Row.js';
import { Checkbox } from '@material-ui/core';
import { object } from 'yup';

export const HandleCheckbox = () => {
  const { objectTest } = useContext(objectTestContext);
  console.log(objectTest);
  return <Checkbox onClick={() => console.log(objectTest.id)} />;
};
