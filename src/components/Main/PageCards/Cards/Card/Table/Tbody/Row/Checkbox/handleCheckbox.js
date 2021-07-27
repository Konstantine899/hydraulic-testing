import React, { useEffect, useContext, useReducer } from 'react';
import { Checkbox } from '@material-ui/core';
import { CheckboxContext } from '../Row.js';
import { ButtonsCardContext } from '../../../../../../../../services/context/ButtonsCardContext/ButtonsCardContext.js';
import { GlobalButtonContext } from '../../../../../../../../services/context/GlobalButtonContext/GlobalButtonContext.js';
import { CheckboxReducer } from './CheckboxReducer/CheckboxReducer.js';
import DoneTwoToneIcon from '@material-ui/icons/DoneTwoTone';

export const HandleCheckbox = () => {
  const { Checked } = useContext(CheckboxContext);
  const { stateButton } = useContext(ButtonsCardContext);
  const { stateGlobalButton } = useContext(GlobalButtonContext);

  const initialState = {
    value: localStorage.getItem(` ${Checked.id}`) !== null ? true : false, // возвращает все кроме ноля
    id: Checked.id,
  };

  const [checkboxState, checkboxDispatch] = useReducer(
    CheckboxReducer,
    initialState
  );

  useEffect(() => {
    checkboxState.value === false
      ? localStorage.removeItem(` ${Checked.id}`)
      : localStorage.setItem(` ${Checked.id}`, '');
  }, [checkboxState]);

  useEffect(() => {
    stateGlobalButton[0] > 0 ? handlerGlobalOnButton() : null;
  }, [stateGlobalButton[0]]);

  useEffect(() => {
    stateGlobalButton[1] > 0 ? handlerGlobalOffButton() : null;
  }, [stateGlobalButton[1]]);

  useEffect(() => {
    stateButton[0] > 0 ? handlerEnableButton() : null;
  }, [stateButton[0]]);

  useEffect(() => {
    stateButton[1] > 0 ? handlerOffButton() : null;
  }, [stateButton[1]]);

  const toggleCheckbox = () => checkboxDispatch({ type: 'TOGGLE_CHECKBOX' });
  const handlerEnableButton = () => checkboxDispatch({ type: 'CHECKBOX_ON' });
  const handlerOffButton = () => checkboxDispatch({ type: 'CHECKBOX_OFF' });
  const handlerGlobalOnButton = () =>
    checkboxDispatch({ type: 'CHECKBOX_GLOBAL_ON' });
  const handlerGlobalOffButton = () =>
    checkboxDispatch({ type: 'CHECKBOX_GLOBAL_OFF' });

  return (
    <Checkbox
      checked={checkboxState.value}
      color="primary"
      checkedIcon={<DoneTwoToneIcon />}
      onChange={() => toggleCheckbox()}
    />
  );
};
