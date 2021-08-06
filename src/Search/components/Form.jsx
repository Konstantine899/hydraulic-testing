import React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from './Input/Input.jsx';
import { SearchButton } from './Buttons/SearchButton/SearchButton.jsx';
import { ClearButton } from './Buttons/ClearButton/ClearButton.jsx';

import { useData } from '../../core/DataContext/DataContext.js';
import { responseService } from '../service/searchService/responseService.js';
import { searchService } from '../service/searchService/searchService.js';

import './Form.scss';

export function Form() {
  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    searchService,
  });

  const setContext = useData().setContext;

  // Отправка формы
  const onSubmit = (value) => {
    setContext(responseService(value));
  };

  // Логика кнопки Очистить форму
  const resetButton = function () {
    setContext(sortService());
    return reset(searchService);
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
      <SearchButton />
      <ClearButton resetButton={resetButton} />
    </form>
  );
}
