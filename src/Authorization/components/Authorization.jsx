import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import { Login } from '../components/Login/Login.jsx';
import { Password } from '../components/Password/Password.jsx';
import './Authorization.scss';
import { useEffect } from 'react';

export function Authorization() {
  const { auth, setAuth } = useContext(AuthContext);
  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit, errors } = useForm({
    defaultValues: { login: login, password: password },
    mode: 'onBlur',
  });

  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('LOGIN')) {
      setAuth((auth.isAuth = true)); // авторизую пользователя
      auth.isAuth === false ? history.push('/') : history.push('/search');
    }
  }, []);

  const onSubmit = (value) => {
    setlogin(localStorage.setItem('LOGIN', value.login)); // отправляю login
    setPassword(localStorage.setItem('PASSWORD', value.password)); // отправляю password
    setAuth((auth.isAuth = true)); // авторизую пользователя
    auth.isAuth === false ? history.push('/') : history.push('/search');
  };

  return (
    <>
      <h1>Авторизуйтесь в системе</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Login ref={register} id="login" type="text" name="login" />
        <Password
          ref={register}
          id="password"
          type="password"
          name="password"
        />
        <button>Войти</button>
      </form>
    </>
  );
}
