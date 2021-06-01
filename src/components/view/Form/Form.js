import React from 'react';
import { useForm } from 'react-hook-form';

import Input from './Input/Input.js';
import FilterButton from './Buttons/FilterButton/FilterButton.js';
import ClearButton from './Buttons/ClearButton/ClearButton.js';

import { useData } from '../../model/services/DataContext/DataContext.js';
import {
  resetInput,
  handlerSubmitForm,
  resetCards,
} from '../../model/services/DataContext/Inputs.js';

import './Form.scss';

export function Form() {
  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    resetInput,
  });

  const setValue = useData().setValues;

  // Отправка формы
  const onSubmit = (value) => {
    setValue(handlerSubmitForm(value));
  };

  // Логика кнопки Очистить форму
  const resetButton = function () {
    setValue(resetCards());
    return reset(resetInput);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="input_wrapper input_wrapper_left">
        <Input
          ref={register}
          id="nameOrg"
          type="text"
          label="Наименование организации"
          name="nameOrg"
        />
        <Input
          ref={register}
          id="applicant"
          type="text"
          label="Заявитель"
          name="applicant"
        />
      </div>
      <div className="input_wrapper input_wrapper_right">
        <Input
          ref={register}
          id="address"
          type="text"
          label="Адрес"
          name="address"
        />
        <Input
          ref={register}
          id="implementer"
          type="text"
          label="Исполнитель"
          name="implementer"
        />
      </div>
      <FilterButton />
      <ClearButton onReset={resetButton} />
    </form>
  );
}
