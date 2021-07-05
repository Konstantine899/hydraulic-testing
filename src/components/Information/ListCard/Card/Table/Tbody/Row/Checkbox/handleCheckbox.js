import React, { useEffect, useContext, useReducer } from 'react';
import { Checkbox } from '@material-ui/core';
import { CheckboxContext } from '../Row.js';
import { CheckboxReducer } from './CheckboxReducer/CheckboxReducer.js';

export const HandleCheckbox = () => {
  const { Checked } = useContext(CheckboxContext);

  const initialState = {
    checked: false,
    id: Checked.id,
  };

  const [checkboxState, checkboxDispatch] = useReducer(
    CheckboxReducer,
    initialState
  );

  useEffect(() => {
    console.log(`${checkboxState.id} ${checkboxState.checked}`);
  }, [checkboxState]);

  const handlerCheckbox = () => checkboxDispatch({ type: 'HANDLER_CHECKBOX' });

  return <Checkbox color="primary" onClick={() => handlerCheckbox()} />;
};
