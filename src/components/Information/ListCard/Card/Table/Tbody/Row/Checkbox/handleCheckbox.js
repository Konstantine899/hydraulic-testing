import React, { useEffect, useContext, useReducer } from 'react';
import { Checkbox } from '@material-ui/core';
import { CheckboxContext } from '../Row.js';
import { CheckboxReducer } from './CheckboxReducer/CheckboxReducer.js';
import DoneTwoToneIcon from '@material-ui/icons/DoneTwoTone';

export const HandleCheckbox = () => {
  const { Checked } = useContext(CheckboxContext);

  const initialState = {
    value: localStorage.getItem(`id: ${Checked.id}`)
      ? JSON.parse(localStorage.getItem(`id: ${Checked.id}`))
      : false,
    id: Checked.id,
  };

  const [checkboxState, checkboxDispatch] = useReducer(
    CheckboxReducer,
    initialState
  );

  useEffect(() => {
    checkboxState.value === false
      ? null
      : localStorage.setItem(
          `id: ${Checked.id}`,
          JSON.stringify(checkboxState.value)
        );
  }, [checkboxState]);

  const handlerCheckbox = () => checkboxDispatch({ type: 'HANDLER_CHECKBOX' });

  return (
    <Checkbox
      checked={checkboxState.value}
      color="primary"
      checkedIcon={<DoneTwoToneIcon />}
      onChange={() => handlerCheckbox()}
      value={checkboxState.value}
    />
  );
};
