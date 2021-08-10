import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { Input } from './Input/Input.jsx';
import { SearchButton } from './Buttons/SearchButton/SearchButton.jsx';
import { ClearButton } from './Buttons/ClearButton/ClearButton.jsx';

import { AuthContext } from '../../Authorization/context/AuthContext.js';
import { useData } from '../../core/DataContext/DataContext.js';
import { responseService } from '../service/responseService.js';
import { clearService } from '../service/clearService.js';

import './Form.scss';

export const Form = () => {
  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    clearService,
  });

  const { auth, setAuth } = useContext(AuthContext);
  const setContext = useData().setContext;

  let history = useHistory();

  // Отправка формы
  const onSubmit = (value) => {
    setContext(responseService(value));
  };

  // Логика кнопки Очистить форму
  const resetButton = function () {
    setContext(clearService());
    return reset(clearService);
  };

  return (
    <>
      {auth.isAuth === false ? (
        history.push('/')
      ) : (
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
      )}
    </>
  );
};
