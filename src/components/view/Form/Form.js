import React from 'react';

import { useForm } from 'react-hook-form';

import Input from './Input/Input.js';
import FilterButton from './Buttons/FilterButton/FilterButton.js';
import ClearButton from './Buttons/ClearButton/ClearButton.js';

import './Form.scss';

function Form() {
  const defaultValues = {};

  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    defaultValues: defaultValues,
  });

  // Логика кнопки Очистить форму
  const onReset = function () {
    return reset(defaultValues);
  };

  // Отправка формы
  const onSubmit = (data) => {
    console.log(data);
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
      <ClearButton onReset={onReset} />
    </form>
  );
}

export default Form;
