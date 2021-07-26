import React, { useEffect, useContext, useReducer } from 'react';
import { Checkbox } from '@material-ui/core';
import { CheckboxContext } from '../Row.js';
import { ButtonContext } from '../../../../../../../services/api/context/ButtonContext/buttonContext.js';
import { CheckboxReducer } from './CheckboxReducer/CheckboxReducer.js';
import DoneTwoToneIcon from '@material-ui/icons/DoneTwoTone';

export const HandleCheckbox = () => {
  const { Checked } = useContext(CheckboxContext);
  const { stateButton } = useContext(ButtonContext);

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
      ? localStorage.removeItem(`id: ${Checked.id}`)
      : localStorage.setItem(
          `id: ${Checked.id}`,
          JSON.stringify(checkboxState.value)
        );
  }, [checkboxState]);

  useEffect(() => {
    stateButton[0] > 0 ? handlerEnableButton() : null;
  }, [stateButton[0]]);

  useEffect(() => {
    stateButton[1] > 0 ? handlerOffButton() : null;
  }, [stateButton[1]]);

  const toggleCheckbox = () => checkboxDispatch({ type: 'TOGGLE_CHECKBOX' });
  const handlerEnableButton = () => checkboxDispatch({ type: 'CHECKBOX_ON' });
  const handlerOffButton = () => checkboxDispatch({ type: 'CHECKBOX_OFF' });

  return (
    <Checkbox
      checked={checkboxState.value}
      color="primary"
      checkedIcon={<DoneTwoToneIcon />}
      onChange={() => toggleCheckbox()}
    />
  );
};
