import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext.js';
import { InputLogin } from './InputLogin/InputLogin.jsx';
import { InputPassword } from './Password/InputPassword.jsx';
import { User } from '../../User/User.jsx';
import { AuthLogin } from './Buttons/AuthLogin/AuthLogin.jsx';
import './Authorization.scss';

export function Authorization() {
  const { auth, login, password, Authorization, removeToLocalStorage } =
    useContext(AuthContext);

  const { register, handleSubmit, errors } = useForm({
    defaultValues: { InputLogin, InputPassword },
    mode: 'onBlur',
  });

  const submitForm = (dataForm) => {
    Authorization(dataForm);
  };

  return (
    <div className="formAuth">
      {/* {auth.isAuth === false ? <h1>Вы не авторизованы</h1> : null} */}
      <form
        onSubmit={
          auth.isAuth === false
            ? handleSubmit(submitForm)
            : handleSubmit(removeToLocalStorage)
        }
      >
        <div className="formAuth_input">
          {auth.isAuth === true ? null : (
            <InputLogin ref={register} id="login" type="text" name="login" />
          )}
          {auth.isAuth === true ? null : (
            <InputPassword
              ref={register}
              id="password"
              type="password"
              name="password"
            />
          )}
        </div>
        <div className="isAuth_button">
          {auth.isAuth === true ? <User /> : <AuthLogin />}
        </div>
      </form>
    </div>
  );
}
