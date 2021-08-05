import React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from './Input/Input.jsx';
import { FilterButton } from './Buttons/FilterButton/FilterButton.jsx';
import { ClearButton } from './Buttons/ClearButton/ClearButton.jsx';

import { useData } from '../../../context/DataContext/DataContext.js';
import { handlerSubmitForm } from '../../../formHandler/handlerSubmitForm.js';
import { getDefaultFilter } from '../../../formHandler/Filters.js';

import './Filter.scss';

export function Filter() {
  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    getDefaultFilter,
  });

  const setContext = useData().setContext;

  // Отправка формы
  const onSubmit = (value) => {
    setContext(handlerSubmitForm(value));
  };

  // Логика кнопки Очистить форму
  const resetButton = function () {
    setContext(getDefaultFilter());
    return reset(getDefaultFilter);
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
          id="objectHydraulicTest"
          type="text"
          label="Адрес"
          name="objectHydraulicTest"
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
      <ClearButton resetButton={resetButton} />
    </form>
  );
}
